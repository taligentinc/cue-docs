const fs = require('fs');
const path = require('path');

const DOCS_ROOT = __dirname;
const IGNORED_DIRS = new Set(['.git', '.github', 'css', 'js', 'images', 'node_modules', '.agents']);
const IGNORED_FILES = new Set(['.gitignore', 'index.html', 'structure.json', 'generate-structure.js', 'package.json', 'package-lock.json', 'README.md', 'CNAME', '.DS_Store']);

const CATEGORY_ORDER = [
  'getting-started',
  'cue-cards',
  'scheduling',
  'sheet-music',
  'service-production',
  'developer',
  'troubleshooting'
];

const FILE_ORDER = {
  'getting-started': [
    'overview.md',
    'quickstart.md',
    'pwa-install.md',
    'roles-and-permissions.md'
  ],
  'cue-cards': [
    'understanding-cue-cards.md',
    'interactive-viewer.md',
    'service-item-types.md',
    'rehearsals-and-setlists.md'
  ],
  'scheduling': [
    'my-assignments.md',
    'master-schedule.md',
    'blackout-dates-and-days-off.md',
    'automated-reminders.md'
  ],
  'sheet-music': [
    'library-catalog.md',
    'pdf-viewer-and-audio.md',
    'hymns-and-preludes.md'
  ],
  'service-production': [
    'cue-builder.md',
    'special-music-requests.md',
    'groups-and-rosters.md',
    'print-and-export.md'
  ],
  'developer': [
    'architecture-and-stack.md',
    'database-schema.md',
    'deployment-and-gh-pages.md',
    'api-and-integrations.md'
  ],
  'troubleshooting': [
    'faq.md'
  ]
};

function formatTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\.md$/i, '')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/\bAnd\b/g, '&')
    .replace(/\bApi\b/g, 'API')
    .replace(/\bPwa\b/g, 'PWA')
    .replace(/\bGh\b/g, 'GH')
    .replace(/\bFaq\b/g, 'FAQ')
    .replace(/\bQr\b/g, 'QR')
    .replace(/\bPdf\b/g, 'PDF')
    .replace(/\bSso\b/g, 'SSO')
    .replace(/\bAv\b/g, 'AV');
}

function extractMarkdownTitle(filePath, defaultTitle) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const firstHeading = content.match(/^#\s+(.+)$/m);
    if (firstHeading && firstHeading[1]) {
      return firstHeading[1].trim();
    }
  } catch (e) {
    // ignore
  }
  return defaultTitle;
}

function scanDirectory(dirPath, relativePath = '') {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const items = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const itemRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name) || entry.name.startsWith('.')) continue;

      const children = scanDirectory(fullPath, itemRelativePath);
      if (children.length > 0) {
        items.push({
          type: 'category',
          name: entry.name,
          title: formatTitle(entry.name),
          path: itemRelativePath,
          children
        });
      }
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name) || entry.name.startsWith('.')) continue;
      if (!entry.name.endsWith('.md')) continue;

      const title = extractMarkdownTitle(fullPath, formatTitle(entry.name));
      items.push({
        type: 'file',
        name: entry.name,
        title: title,
        path: itemRelativePath
      });
    }
  }

  items.sort((a, b) => {
    if (a.name === 'index.md') return -1;
    if (b.name === 'index.md') return 1;

    if (a.type === 'category' && b.type === 'category') {
      const idxA = CATEGORY_ORDER.indexOf(a.name);
      const idxB = CATEGORY_ORDER.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.title.localeCompare(b.title);
    }

    if (a.type === 'category' && b.type !== 'category') return -1;
    if (a.type !== 'category' && b.type === 'category') return 1;

    if (relativePath && FILE_ORDER[relativePath]) {
      const list = FILE_ORDER[relativePath];
      const idxA = list.indexOf(a.name);
      const idxB = list.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
    }

    return a.title.localeCompare(b.title);
  });

  return items;
}

function main() {
  console.log('Generating documentation structure...');
  const structure = scanDirectory(DOCS_ROOT);
  const outputPath = path.join(DOCS_ROOT, 'structure.json');
  fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2), 'utf8');
  console.log(`Successfully generated structure with ${structure.length} root items -> ${outputPath}`);
}

main();

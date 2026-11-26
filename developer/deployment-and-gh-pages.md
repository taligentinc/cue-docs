# GitHub Pages Deployment

The Cue Central documentation site (`taligentinc/cue-docs`) is a static Single-Page Application (HTML5 + Marked.js) hosted on **GitHub Pages** at `https://docs.cuecentral.org`.

---

## Repository Structure

- `index.html` — Docs shell, header, search modal, and layout.
- `structure.json` — Sidebar navigation tree consumed by `js/app.js`.
- `generate-structure.js` — Node.js script that regenerates `structure.json` from the markdown directories.
- `CNAME` — Custom domain configuration (`docs.cuecentral.org`).

---

## Updating Documentation

1. Edit or add `.md` files in the appropriate category folder.
2. If you add, rename, or remove markdown files, run `node generate-structure.js` (or update `structure.json`) so the sidebar and search index stay in sync.
3. Commit and push to `main` on `taligentinc/cue-docs` to publish to `https://docs.cuecentral.org`.

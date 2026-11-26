# Cue Central & Cue Central Studio Documentation

Welcome to the official documentation for **Cue Central** (`app.cuecentral.org`). The platform is built as two tailored experiences sharing one multi-tenant workspace:

- **Cue Central Studio** (Hexagon icon) — The administrative and production workspace for music directors, pastors, and coordinators (`index.php`, `builder.php`, `schedule.php`, `hymns.php`, `specials.php`, `groups.php`, `preludes.php`, `config.php`, `admin.php`).
- **Cue Central** (Music Note icon) — The mobile-friendly Progressive Web App (PWA) portal for volunteers, choir members, pianists, and soloists (`central_index.php`, `central_myschedule.php`, `central_cuecards.php`, `central_schedule.php`, `central_sheetmusic.php`).

---

## Documentation Sections

### 1. Getting Started
- [Platform Overview](getting-started/overview.md) — Architecture of Cue Central Studio and Cue Central, multi-tenant workspaces, and subscription plans.
- [Volunteer & Musician Quickstart](getting-started/quickstart.md) — Finding your church workspace, signing in, checking assignments, and managing days off.
- [Progressive Web App (PWA) Install](getting-started/pwa-install.md) — Installing Cue Central or Cue Central Studio on iOS, Android, and desktop.
- [Roles & Access Permissions](getting-started/roles-and-permissions.md) — Native session authentication, 14 granular RBAC permissions, 4 role presets, and per-tenant OIDC SSO.

### 2. Cue Cards & Setlists
- [Understanding Cue Cards](cue-cards/understanding-cue-cards.md) — How services, structural blocks, and customizable item colors work.
- [Interactive Cue Card Viewer](cue-cards/interactive-viewer.md) — Navigating published cue cards and linked sheet music in `central_cuecardviewer.php`.
- [Service Item Types](cue-cards/service-item-types.md) — All 16 item types across Music, Speaking, and Other categories.
- [Personal Setlists & PDF Viewer](cue-cards/rehearsals-and-setlists.md) — Building a personal PDF stack per service and using the full-screen tap/pedal `setlist_viewer.php`.

### 3. Scheduling & Reminders
- [My Assignments](scheduling/my-assignments.md) — Viewing your upcoming 30-day schedule across Specials, Pianists, Offertories, and Openers.
- [Master Ministry Schedule](scheduling/master-schedule.md) — Monthly calendar planning (`schedule.php`) and volunteer read-only calendar (`central_schedule.php`).
- [Blackout Dates & Days Off](scheduling/blackout-dates-and-days-off.md) — Submitting unavailable dates and how Studio flags scheduling conflicts.
- [Automated Push & Email Reminders](scheduling/automated-reminders.md) — Daily Web Push reminders (`cron_push_reminders.php`) and 6-day Special Music title requests (`cron_special_requests.php`).

### 4. Sheet Music & Hymnals
- [Sheet Music Library & Catalog](sheet-music/library-catalog.md) — Managing choir & special music (`specials.php`), statuses, tags, and S3-backed PDF/audio assets.
- [In-App PDF Viewer & Audio](sheet-music/pdf-viewer-and-audio.md) — Viewing PDFs via PDF.js and playing uploaded rehearsal audio in `viewer.php` and `central_sheetmusic.php`.
- [Congregational Hymns & Preludes](sheet-music/hymns-and-preludes.md) — Multi-hymnal indexing (`hymns.php`), CSV/ZIP imports, usage metrics, and Prelude Sets (`preludes.php`).

### 5. Service Production (Cue Central Studio)
- [Cue Card Builder](service-production/cue-builder.md) — Drag-and-drop service building, templates, smart suggestions, and OOS email blasts in `builder.php`.
- [Groups, Rosters & Email Lists](service-production/groups-and-rosters.md) — Managing people, vocal/instrumental groups, pianist flags, and email blast lists in `groups.php`.
- [Print & PDF Exports](service-production/print-and-export.md) — 2-up printable Cue Cards (`print.php`) and landscape Monthly Schedules (`print_schedule.php`) with QR codes.
- [Special Music Requests & Tokens](service-production/special-music-requests.md) — Automated 6-day request emails and token-based title submission (`addtitle.php`).

### 6. Developer & Architecture
- [Architecture & Technology Stack](developer/architecture-and-stack.md) — PHP 8.4-FPM, Caddy 2.9, PostgreSQL 16 with Row-Level Security (RLS), S3, Stripe, and SMTP.
- [Database Schema](developer/database-schema.md) — Multi-tenant PostgreSQL schema, RLS context, and core tables.
- [APIs & Integrations](developer/api-and-integrations.md) — `api_setlist.php`, S3 pre-signed URLs, Stripe webhooks, OIDC PKCE, and cron jobs.
- [GitHub Pages Deployment](developer/deployment-and-gh-pages.md) — Automated deployment of `docs.cuecentral.org`.

### 7. Troubleshooting
- [Frequently Asked Questions (FAQ)](troubleshooting/faq.md) — Answers to common login, PWA, PDF, and scheduling questions.

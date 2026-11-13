# Cue Central Documentation Hub

Welcome to the official Cue Central documentation. Cue Central is the unified worship service production, live order-of-service, volunteer scheduling, and digital sheet music portal engineered for modern church ministries, production crews, choirs, orchestras, and musicians.

---

## Documentation Sections

### 1. Getting Started
* [Platform Overview](getting-started/overview.md) — What is Cue Central, key capabilities, and how the platform connects directors with volunteers.
* [Volunteer & Musician Quickstart](getting-started/quickstart.md) — 5-minute onboarding guide to signing in, viewing assignments, and checking call times.
* [Progressive Web App (PWA) Install](getting-started/pwa-install.md) — Install Cue Central on iOS/iPadOS, Android, macOS, and Windows with offline access.
* [Roles & Access Permissions](getting-started/roles-and-permissions.md) — Authentik SSO integration, `n-cue-central` permission group, and director vs. member capabilities.

### 2. Cue Cards & Live Service Flow
* [Understanding Cue Cards](cue-cards/understanding-cue-cards.md) — Service timelines, order of worship, dynamic item cues, and call times.
* [Interactive Cue Card Viewer](cue-cards/interactive-viewer.md) — Fullscreen stage mode, real-time timer tracking, elapsed vs. remaining service duration, and visual cues.
* [Service Item Types](cue-cards/service-item-types.md) — Detailed specifications for Choir Specials, Openers, Congregational Hymns, Preludes, Offertories, Announcements, and Sermons.
* [Rehearsals & Setlists](cue-cards/rehearsals-and-setlists.md) — Setlist planning, rehearsal sequences, musical arrangements, and director notes.

### 3. Scheduling & Availability
* [My Assignments](scheduling/my-assignments.md) — Personalized volunteer dashboard, 30-day assignment horizon, assigned roles, and song selections.
* [Master Ministry Schedule](scheduling/master-schedule.md) — Church-wide monthly and weekly service grids with ministry filtering across Choir, Orchestra, Praise Team, and AV Tech.
* [Blackout Dates & Days Off](scheduling/blackout-dates-and-days-off.md) — Submitting unavailability, managing multi-day vacation ranges, and morning vs. evening vs. all-day preferences.
* [Automated Push & Email Reminders](scheduling/automated-reminders.md) — Automated 3-day notifications, device push permissions, and email dispatch cron infrastructure.

### 4. Digital Sheet Music & Media
* [Sheet Music Library & Catalog](sheet-music/library-catalog.md) — Searchable digital catalog with keys, tempos, arrangers, tags, and special music performance history.
* [In-App PDF Viewer & Audio](sheet-music/pdf-viewer-and-audio.md) — Mobile-optimized sheet music viewer with zoom, rehearsal audio tracks, and YouTube reference links.
* [Congregational Hymns & Preludes](sheet-music/hymns-and-preludes.md) — Hymnal index, title search, monthly chorus hymns, and pianist prelude set scheduling.

### 5. Service Production & Direction
* [Cue Service Builder](service-production/cue-builder.md) — Drag-and-drop service order editor, reusable service templates, color coding, and one-click publishing.
* [Special Music Requests & Tokens](service-production/special-music-requests.md) — Request workflows, tokenized volunteer submission links, performer confirmations, and capacity ceilings.
* [Groups, Rosters & Ensembles](service-production/groups-and-rosters.md) — Managing vocal sections, ensembles, orchestra players, accompanists, and email distribution groups.
* [Print & Bulletin Exports](service-production/print-and-export.md) — Exporting printable cue sheets, podium orders, and bulletin matrices.

### 6. Developer & Infrastructure
* [Architecture & Technology Stack](developer/architecture-and-stack.md) — PHP backend, SQLite database layer, Authentik forward-auth proxy, Traefik outpost, and PWA service worker.
* [Database Schema & ER Diagrams](developer/database-schema.md) — Complete table definitions, foreign key relationships, and data dictionary.
* [GitHub Pages Deployment](developer/deployment-and-gh-pages.md) — Continuous deployment workflow, SPA routing mechanics, and custom domain setup.
* [APIs & Integration Services](developer/api-and-integrations.md) — Setlist APIs, web push services, and cron automation pipelines.

### 7. Support & Operations
* [Frequently Asked Questions (FAQ)](troubleshooting/faq.md) — Troubleshooting common login challenges, audio autoplay constraints, offline sync, and push permissions.

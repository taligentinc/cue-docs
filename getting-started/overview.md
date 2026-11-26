# Platform Overview

**Cue Central** is a multi-tenant SaaS church music planning, scheduling, and sheet music platform hosted at `https://app.cuecentral.org` (with dedicated church subdomains such as `yourchurch.app.cuecentral.org`).

---

## Two Tailored Experiences

Every church workspace provides two focused interfaces sharing the same live PostgreSQL database:

### 1. Cue Central Studio (Admins, Directors & Coordinators)
- **Branding**: Identified by the **Hexagon Logo**.
- **Purpose**: Service planning, monthly scheduling, hymnal & choir library management, permissions, and print exports.
- **Core Pages**:
  - `index.php` — Dashboard with Quick-Start service creation and 8 hymnody/choir metrics.
  - `builder.php` — Drag-and-drop Cue Card & Order of Service builder.
  - `schedule.php` — Monthly Master Schedule grid for Pianists, Offertories, Openers, Specials, and day markers.
  - `hymns.php` — Multi-hymnal catalog, CSV import/export, and PDF scan uploads.
  - `specials.php` — Choir & Specials library with S3-backed PDF and audio assets.
  - `preludes.php` — Curated multi-hymn Prelude Sets.
  - `groups.php` — People, vocal/instrumental groups, RBAC permissions, and email blast lists.
  - `config.php` & `admin.php` — Service capacities, hymnal setup, print colors, OIDC SSO, and Stripe billing.

### 2. Cue Central (Volunteers, Choir & Musicians)
- **Branding**: Identified by the **Music Note Logo**.
- **Purpose**: Mobile-friendly Progressive Web App (PWA) for checking assignments, submitting days off, viewing published Cue Cards, and performing from personal PDF setlists.
- **Core Pages**:
  - `central_index.php` — Volunteer dashboard showing upcoming published Cue Cards, next Choir Special/Opener, and next 3 personal assignments.
  - `central_myschedule.php` — 30-day personal assignment list with blackout date conflict warnings and Days Off submission.
  - `central_cuecards.php` & `central_cuecardviewer.php` — Published Cue Cards with linked PDFs and personal setlist configuration.
  - `setlist_viewer.php` — Full-screen PDF.js page-turner with tap zones, `ArrowLeft`/`ArrowRight` pedal support, and slide-down Cue Card drawer.
  - `central_schedule.php` — Read-only monthly ministry schedule (when published).
  - `central_sheetmusic.php` — Searchable catalog of Specials (PDFs & uploaded audio tracks) and Hymns (hymnal PDFs).

---

## Subscription Plans & Quotas

Workspaces are provisioned on one of four monthly plans (configured in `quotas.php` and `register.php`):

| Plan | Monthly Price | Cloud Storage | People Limit | Key Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| **Free** | `$0/mo` | `1 GB` | `50` | Cue Card Builder, Master Schedule, Hymnals & Specials Catalog, Print Exports |
| **Basic** | `$20/mo` | `20 GB` | `100` | Adds My Assignments, Web Push Reminders, Historical Hymnody Data, Large Cue Cards |
| **Pro** | `$50/mo` | `100 GB` | `150` | Expanded S3 storage for larger choir PDF & audio libraries |
| **Unlimited** | `$80/mo` | `Unlimited` | `Unlimited` | No storage or people limits; full OIDC SSO & role mapping |

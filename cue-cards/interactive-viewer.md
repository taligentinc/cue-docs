# Interactive Cue Card Viewer

The **Cue Card Viewer** (`central_cuecardviewer.php`) gives volunteers, choir members, and accompanists a clean, mobile- and tablet-friendly view of a published service order, along with direct links to sheet music PDFs and personal setlist tools.

---

## Accessing the Viewer

1. Sign in to **Cue Central** at `https://app.cuecentral.org` (or your church's subdomain).
2. Open **Cue Cards** (`central_cuecards.php`) or tap an upcoming service on your **Dashboard** (`central_index.php`).
3. Selecting a service opens `central_cuecardviewer.php?service_id=<id>`.

---

## What the Viewer Displays

- **Service Header**: Service type, date, time, and assigned **Pianist (`PIA`)**, **Offertory (`OFF`)**, **Choir Opener (`OPN`)**, and **Special (`SPC`)** badges.
- **Ordered Service Items**: All `service_items` in `sort_order`, with `Section Break` items grouping structural blocks.
- **Direct Sheet Music Links**:
  - **Hymns**: Links to uploaded hymnal PDF scans via `asset.php` across your church's configured hymnals.
  - **Choir Specials / Openers / Special Music**: Links to attached PDF scores in `choir_library` (hosted on S3).
- **Theme Support**: Supports both Light and Dark themes via `theme_head.php` and the `cue_theme` cookie.

> [!NOTE]
> `central_cuecardviewer.php` is a structured Order of Service and sheet music launcher—it does not run live stage timers, lyrics teleprompters, or WebSocket broadcast sync.

---

## Personal Setlist Setup Mode

From the Cue Card Viewer, logged-in musicians can switch into **Setlist Setup** to configure their personal PDF stack for that service (preferred hymnal, preferred voice/instrument tag, private PDF uploads) and launch `setlist_viewer.php`. See [Personal Setlists & PDF Viewer](rehearsals-and-setlists.md).

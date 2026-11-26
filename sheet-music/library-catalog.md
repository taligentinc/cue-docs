# Sheet Music Library & Catalog

The **Specials / Choir Library** (`specials.php` in **Cue Central Studio** and `central_sheetmusic.php` in **Cue Central**) centralizes choir anthems, vocal specials, instrumental scores, and uploaded rehearsal audio.

---

## Catalog Metadata (`choir_library` Table)

Each song in `choir_library` (scoped by `tenant_id` in PostgreSQL) stores:
- **`title`**: Song or anthem title.
- **`status`**: `Active`, `In Rehearsal`, or `Retired`.
- **`last_sung_date`**: Date most recently used in a service (powers the **Untouched Specials** and **Recent Specials** metrics on the Studio dashboard).
- **`notes`**: Director or arrangement notes.
- **`link_youtube`**: Optional YouTube reference link.
- **`tags`** (`choir_tags`): Custom categorization tags configured per tenant in `config.php`.

---

## S3-Backed PDF & Audio Assets (`S3Client.php`)

Directors upload PDF scores and audio files directly in `specials.php`. Assets are stored in S3-compatible object storage and served securely via pre-signed URLs (`S3Client::getPresignedUrl()` via `asset.php`).

### Smart Filename Shortcode Matching (`choir_shortcodes`)
In **Config → Choir Library & Files** (`config.php`), admins define shortcodes (such as `FS` for Full Score, `PNO` for Piano, `SOP` for Soprano, `MP3` for Rehearsal Audio). When files are uploaded in `specials.php`, Studio automatically matches filenames to their corresponding asset labels.

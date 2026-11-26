# In-App PDF Viewer & Audio

Cue Central provides browser-based viewing for PDF sheet music and playback for uploaded audio files through `central_sheetmusic.php`, `viewer.php`, and `setlist_viewer.php`.

---

## Volunteer Sheet Music Browser (`central_sheetmusic.php`)

Volunteers and choir members open **Sheet Music** (`central_sheetmusic.php`) to browse two searchable tabs:
- **Specials**: Lists songs from `choir_library` with attached **PDF scores** and **uploaded rehearsal audio files**.
- **Hymns**: Lists hymns from the church's configured hymnals with direct links to uploaded hymnal PDF scans.

---

## Standard Asset Viewer (`viewer.php`)

When tapping a link from `central_sheetmusic.php` or `central_cuecardviewer.php`, `viewer.php` renders the asset based on its `type` parameter:
- **PDF Mode (`type=pdf`)**: Renders a vertical-scrolling **PDF.js** canvas with **Back**, **Share** (Web Share API), and **Download** buttons.
- **Audio Mode (`type=audio`)**: Renders a standalone HTML5 `<audio controls>` player for listening to uploaded rehearsal tracks.

> [!NOTE]
> `viewer.php` renders either a PDF or an audio player per link (not a combined audio bar inside the PDF view). For multi-song, hands-free performance on a music stand, use the [Full-Screen Setlist Viewer](../cue-cards/rehearsals-and-setlists.md) (`setlist_viewer.php`).

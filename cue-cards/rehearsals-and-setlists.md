# Personal Setlists & PDF Viewer

In **Cue Central**, pianists, organists, and choir members can build a **personal PDF setlist** for any published service and perform from a full-screen, hands-free PDF page-turner (`setlist_viewer.php`).

---

## How Personal Setlists Work (`setlists` & `api_setlist.php`)

Unlike shared service orders, a **Setlist** in Cue Central is **per-user and per-service** (`setlists` table keyed by `tenant_id`, `email`, and `service_id`):

1. Open a published service in `central_cuecardviewer.php`.
2. Set your **Preferred Hymnal** (e.g., `MAJ`, `SSH`) and **Preferred Part Tag** (e.g., `Piano`, `Full Score`, `Soprano`)—saved in `user_preferences`.
3. Cue Central automatically matches the service's hymns and choir specials to the PDFs that fit your preferences and saves them to `setlist_items` via `api_setlist.php`.
4. You can also **reorder items**, **exclude items**, or **upload private custom PDFs** directly into your setlist for that service.

---

## Full-Screen Setlist Viewer (`setlist_viewer.php`)

Tapping **Play** opens `setlist_viewer.php`, which loads every PDF in your personal setlist into a continuous, full-screen **PDF.js** canvas:

- **Page Turning**:
  - Tap the **right side** of the screen or press **`ArrowRight`** to advance to the next page (and seamlessly into the next song's PDF).
  - Tap the **left side** of the screen or press **`ArrowLeft`** to go back.
  - Compatible with standard Bluetooth page-turner foot pedals that send `ArrowLeft` / `ArrowRight` keystrokes.
- **Center Tap Controls**: Tap the center of the screen to toggle the top/bottom navigation bar, jump between songs, or exit.
- **Song-Change Toast**: Briefly displays the new song title when advancing from one PDF to the next.
- **Slide-Down Cue Card Drawer**: Pull or open the top drawer to inspect the full published Cue Card (`central_cuecardviewer.php?service_id=...&embedded=1`) without leaving the PDF viewer.

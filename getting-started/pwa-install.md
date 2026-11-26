# Progressive Web App (PWA) Install

Both **Cue Central** (volunteers & musicians) and **Cue Central Studio** (admins & directors) can be installed as Progressive Web Apps on iOS, Android, and desktop browsers for quick home-screen access and Web Push notifications.

---

## Dynamic Manifests & App Icons

Each portal serves its own dynamic web app manifest (`manifest_central.php` and `manifest.php`) that adapts to your theme preference (`light` or `dark`):

- **Cue Central** (`manifest_central.php`):
  - `name`: `"Cue Central"`
  - `start_url`: `"./central_index.php"`
  - `display`: `"standalone"`
  - Icons: Music Note icons (`central_light_icon-*.png` / `central_dark_icon-*.png`)
- **Cue Central Studio** (`manifest.php`):
  - `name`: `"Cue Central Studio"`
  - `start_url`: `"./index.php"`
  - `display`: `"standalone"`
  - Icons: Hexagon icons (`light_icon-*.png` / `dark_icon-*.png`)

---

## Installing on iOS (Safari)

1. Open your church workspace in **Safari** on iPhone or iPad and sign in.
2. Tap the **Share** button (square with upward arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the app name and tap **Add**.

> [!NOTE]
> iOS requires the app to be added to the Home Screen before Web Push notifications can be enabled.

---

## Installing on Android (Chrome)

1. Open your church workspace in **Chrome** and sign in.
2. Tap the **Install** banner if prompted, or open the **⋮** menu and tap **Install app** / **Add to Home screen**.

---

## Service Worker Scope (`sw.js`)

Cue Central registers `sw.js` to handle **Web Push notifications** (`push` and `notificationclick` events) for upcoming assignment reminders. An active internet connection is required to load Cue Cards, schedules, and sheet music PDFs.

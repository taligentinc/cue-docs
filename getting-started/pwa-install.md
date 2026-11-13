# Progressive Web App (PWA) Install

Cue Central is engineered as a modern Progressive Web App (PWA). When installed, it launches fullscreen like a native iOS or Android app, eliminates browser address bar clutter, retains your dark/light theme preference, and caches essential assets for reliable stage performance.

---

## 📱 Installing on Apple iOS & iPadOS (Safari)

Apple devices require using the native **Safari** browser to install PWAs to the Home Screen:

1. Open **Safari** on your iPhone or iPad.
2. Navigate to [https://cue.corp.lbcgj.com](https://cue.corp.lbcgj.com) and log in.
3. Tap the **Share** button in the bottom Safari toolbar (the square icon with an arrow pointing upward).
4. Scroll down the sharing menu and tap **Add to Home Screen**.
5. Confirm the app title (*Cue Central*) and tap **Add** in the top right corner.
6. The **Cue Central** icon will now appear on your home screen or dock alongside your other apps.

> [!TIP]
> **iPad Music Stand Mode**: When opened from your iPad home screen, Cue Central runs in true fullscreen standalone mode, making it an ideal digital music binder for pianists, choir directors, and sound booth tablets.

---

## 🤖 Installing on Android (Chrome / Edge)

Android devices provide automatic install banners:

1. Open **Google Chrome** or **Microsoft Edge** on your Android device.
2. Navigate to [https://cue.corp.lbcgj.com](https://cue.corp.lbcgj.com).
3. If the **Install Cue Central** banner appears at the bottom of the screen, tap **Install**.
4. Alternatively:
   * Tap the **three vertical dots (⋮)** in the top right corner.
   * Tap **Install app** or **Add to Home screen**.
   * Confirm **Install**.
5. Cue Central will be installed into your Android app drawer and home screen.

---

## 💻 Installing on Desktop (macOS & Windows)

You can install Cue Central on macOS or Windows using any Chromium-based browser (Google Chrome, Microsoft Edge, Brave):

1. Open **Chrome** or **Edge** on your laptop or desktop workstation.
2. Navigate to [https://cue.corp.lbcgj.com](https://cue.corp.lbcgj.com).
3. Look at the right side of the URL address bar for the **Install App** icon (a monitor with a down arrow).
4. Click **Install**.
5. Cue Central will open in its own dedicated desktop window with native OS window controls, dock integration, and keyboard shortcuts.

---

## ⚙️ PWA Manifest & Service Worker Specifications

Cue Central generates dynamic Web App Manifests tailored to your light or dark mode theme preference:

```json
{
  "name": "Cue Central",
  "short_name": "Cue Central",
  "start_url": "/central_index",
  "display": "standalone",
  "background_color": "#121212",
  "theme_color": "#4f46e5",
  "icons": [
    {
      "src": "/central_dark_icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/central_dark_icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

### Key Service Worker Benefits:
* **Background Caching**: Core CSS styles, JavaScript bundles, fonts, and icons are cached automatically by `sw.js`.
* **Zero Latency Navigation**: Instant tab transitions between Dashboard, My Assignments, Cue Cards, and Sheet Music.
* **Low Connectivity Resilience**: If sanctuary Wi-Fi momentarily drops during a service transition, cached cue cards and downloaded sheet music remain accessible on your device.

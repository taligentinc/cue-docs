# Frequently Asked Questions (FAQ)

Find quick answers to common questions and operational edge cases encountered while using Cue Central.

---

## 🔐 Authentication & Access

### Why do I see an "Access Denied" or "Unauthorized" screen when logging in?
Cue Central requires that your Authentik user account belongs to the `n-cue-central` security group or that your email address is registered in the ministry database's `people` table. Contact your music director or system administrator to ensure your profile has been provisioned.

### How do I log out or switch accounts?
Click your user initials avatar in the top right corner of the navigation header and select **Sign Out**. This terminates your local session and redirects you to the Authentik single sign-out outpost.

---

## 📱 Progressive Web App (PWA)

### Why doesn't the "Add to Home Screen" prompt appear on my iPhone?
Apple's iOS only permits PWA installation through the native **Safari** browser. If you opened Cue Central through Chrome, an in-app email browser, or a QR scanner app, copy the URL, paste it into Safari, tap the **Share** button, and tap **Add to Home Screen**.

### How do I refresh cached cue cards after a service change?
Cue Central's service worker automatically checks for updates on page reload. If a director made a last-second revision to the cue sequence, pull down to refresh on mobile or press <kbd>⌘R</kbd> / <kbd>Ctrl+R</kbd> on desktop.

---

## 🎵 Sheet Music & Audio

### Audio demonstration tracks won't play automatically on my iPad.
Modern mobile operating systems (especially iOS/iPadOS Safari) restrict audio autoplay until the user explicitly interacts with the page. Tap the **Play** button on the audio bar to initiate playback.

### Can I annotate or mark my sheet music?
In the current version, annotations can be submitted as performance notes to the director. Offline stylus drawing support is planned for an upcoming release.

---

## 📅 Scheduling & Days Off

### I submitted a Day Off request, but my schedule still shows an assignment.
Submitting a Day Off updates your availability in the director's scheduling system, but does not automatically unseat an already confirmed service assignment. If you have an existing assignment for a date you can no longer attend, please contact your worship director directly so a replacement can be designated.

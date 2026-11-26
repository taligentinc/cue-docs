# Frequently Asked Questions (FAQ)

### How do I sign in to Cue Central?
Visit your church's dedicated URL (for example, `yourchurch.app.cuecentral.org`) or go to `https://app.cuecentral.org` and enter your church's **Workspace ID** (`workspace.php`). Sign in with your email and password (`login.php`), or use your church's **Sign in with SSO** button if OIDC is enabled.

### What is the difference between Cue Central Studio and Cue Central?
- **Cue Central Studio** (Hexagon icon) is for music directors, pastors, and administrators to build Cue Cards, manage monthly schedules, catalog hymnals and choir music, and print service sheets.
- **Cue Central** (Music Note icon) is for volunteers, choir members, pianists, and soloists to check assignments, submit days off, view published Cue Cards, and use the full-screen Setlist PDF viewer.

### Does Cue Central work offline?
No. `sw.js` is used for **Web Push assignment reminders**. An active internet connection is required to load Cue Cards, schedules, and PDF sheet music.

### Can I use a Bluetooth page-turner foot pedal?
Yes. In the **Full-Screen Setlist Viewer** (`setlist_viewer.php`), pages advance and go back via left/right screen taps as well as standard `ArrowLeft` and `ArrowRight` keyboard events sent by Bluetooth page-turner pedals.

### How do I submit a Special Music title when I get an email?
Click the tokenized link in the automated 6-day reminder email (`addtitle.php?token=...`). You can pick an existing song from your church's Choir Library or type in a new title—no separate login is required.

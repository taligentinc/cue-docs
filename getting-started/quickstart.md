# Volunteer & Musician Quickstart

Welcome to **Cue Central**! This guide walks choir members, pianists, instrumentalists, and soloists through signing in and using the mobile-friendly portal.

---

## Step 1: Find Your Church Workspace & Sign In

1. Open your church's dedicated URL (for example, `https://yourchurch.app.cuecentral.org`) or visit `https://app.cuecentral.org` and enter your church's **Workspace ID** (`workspace.php`).
2. Sign in on `login.php` using your email and password, or click **Sign in with SSO** if your church has enabled OpenID Connect (OIDC).
3. Volunteers and musicians land in **Cue Central** (`central_index.php`, marked with the Music Note icon).

---

## Step 2: Check Your Dashboard (`central_index.php`)

Your home screen displays three at-a-glance sections:
- **Upcoming Cue Cards**: Up to the next 3 published services (`Sunday AM`, `Sunday PM`, etc.).
- **Upcoming Specials & Openers**: The next scheduled Choir Special and Choir Opener (if enabled by your church).
- **My Upcoming Assignments**: Your next 3 personal assignments across Special Music, Pianist, Offertory, and Choir Opener roles.

---

## Step 3: Manage Your Schedule & Days Off (`central_myschedule.php`)

1. Open **My Assignments** from the navigation menu.
2. Review all personal assignments over the next **30 days** (covering published schedules and published Cue Cards).
3. If you will be out of town or unavailable, use the **Days Off** form to add a start date, end date, and optional label (such as `All Day`).
   - Any assignment that overlaps a submitted day off is flagged with a conflict warning, and directors see the conflict when building services in `builder.php`.

---

## Step 4: View Cue Cards & Build Your Personal Setlist

1. Open **Cue Cards** (`central_cuecards.php`) and tap a published service to open `central_cuecardviewer.php`.
2. Tap any linked **Hymn** or **Special** PDF to open it in `viewer.php`, or switch to **Setlist Setup** to:
   - Choose your **Preferred Hymnal** and **Preferred Part Tag** (for example, `Piano` or `Soprano`).
   - Auto-populate your personal PDF stack for the service (`api_setlist.php`).
   - Upload private custom PDFs if needed.
   - Tap **Play** to launch the full-screen `setlist_viewer.php` page-turner.

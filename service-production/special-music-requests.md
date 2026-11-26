# Special Music Requests & Tokens (`addtitle.php`)

Cue Central automates collecting upcoming Special Music titles from assigned groups or soloists so directors don't have to chase down song names manually.

---

## How the Automated Request Flow Works

1. **Daily Check (`cron_special_requests.php`)**:
   - Runs daily and inspects `scheduled_specials` (`item_type = 'Special Music'`) scheduled **6 days out** (`+6 days`).
   - If a scheduled special does not yet have a `choir_song_id` selected, the cron job generates a 64-character hex token in the PostgreSQL `special_request_tokens` table.
2. **Email Notification**:
   - Sends an email (via Implicit TLS SMTP on port 465) to all members of the assigned group containing a direct link to `https://<workspace>/addtitle.php?token=<token>`.
3. **Performer Submission (`addtitle.php`)**:
   - Performers open the tokenized link—no login required—and either select an existing song from `choir_library` or enter a new special music title.
   - Submitting the form updates `scheduled_specials` immediately so the selection appears on the Master Schedule and in `builder.php` smart suggestions.

# Automated Push & Email Reminders

Cue Central includes two automated daily cron scripts in `cue/app/` to keep volunteers informed and collect upcoming special music selections without manual follow-up.

---

## 1. Web Push Assignment Reminders (`cron_push_reminders.php`)

- **Schedule**: Runs daily and targets assignments **3 days out** (`+3 days`).
- **Sources Checked**:
  - `scheduled_specials`
  - `choir_schedule` (`pianist` and `offertory` roles)
  - `service_items` (`Special Music` and `Offertory` items)
- **Publish Gate**: Only notifies for assignments where either the monthly schedule (`published_{schedule}_{YYYY-MM}`) or the service Cue Card (`services.is_published = 1`) is published.
- **Delivery**: Deduplicates by service, role, and group, and dispatches **Web Push notifications** via `PushNotificationService::sendToUser()` linking directly to `/central/myschedule`.

> [!NOTE]
> `cron_push_reminders.php` sends Web Push notifications only (not email). Email blasts are sent manually from `builder.php` / `schedule.php` / `groups.php`, or automatically by `cron_special_requests.php` for missing special music titles.

---

## 2. Special Music Title Requests (`cron_special_requests.php`)

- **Schedule**: Runs daily and targets `scheduled_specials` (`item_type = 'Special Music'`) **6 days out** (`+6 days`).
- **Condition**: Triggers when a scheduled group does not yet have a `choir_song_id` selected.
- **Delivery**: Generates a 64-character hex token in `special_request_tokens` and sends an email over Implicit TLS SMTP (port 465) to all members of the assigned group with a link to `addtitle.php?token=...`.

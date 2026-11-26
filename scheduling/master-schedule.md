# Master Ministry Schedule

The **Master Schedule** connects **Cue Central Studio** (`schedule.php`)—where directors plan monthly rotations—with **Cue Central** (`central_schedule.php`)—where volunteers view published calendars.

---

## Planning in Cue Central Studio (`schedule.php`)

Directors and schedule coordinators use `schedule.php` to manage a monthly calendar grid across:
- **Schedule Roles** (`choir_schedule`): Assign **Pianist (`PIA`)**, **Offertory (`OFF`)**, **Choir Opener (`OPN`)**, and **Special (`SPC`)** per service.
- **Scheduled Specials** (`scheduled_specials`): Assign groups to `Special Music` slots on specific dates and services, respecting `service_capacities` configured in `config.php`.
- **Day Markers & Custom Services**: Add calendar markers (`marker_YYYY-MM-DD`) and custom service events (`add_custom_service`, `delete_custom_service`).
- **Monthly Publishing**: Toggle `published_{schedule}_{YYYY-MM}` to control when a month's schedule becomes visible to volunteers.
- **Schedule Blast Emails**: Send monthly schedule notification emails directly from `schedule.php` (`send_email`).

---

## Volunteer View in Cue Central (`central_schedule.php`)

Volunteers and choir members see a read-only, mobile-friendly monthly calendar for any month whose `published_{schedule}_{YYYY-MM}` flag is enabled:
- Displays day markers, **Pianist (`PIA`)**, **Offertory (`OFF`)**, **Opener (`OPN`)**, and **Special (`SPC`)** assignments.
- Lists scheduled Specials with clickable links to `central_sheetmusic.php` (or YouTube links when attached in `choir_library`).

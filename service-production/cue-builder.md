# Cue Card Builder (`builder.php`)

The **Cue Card Builder** in **Cue Central Studio** (`builder.php`) is the primary workspace for assembling, formatting, and publishing a church service's Order of Service.

---

## Core Capabilities

- **Service Creation & Templates**: Create a blank service or initialize from a saved template (`templates` / `template_items`), duplicate an existing service, or edit service date, time, and type.
- **16 Item Types**: Add Music, Speaking, and Other/Structural items (see [Service Item Types](../cue-cards/service-item-types.md)).
- **Drag-and-Drop Reordering**: Powered by SortableJS (`update_order`), with support for inserting items at a specific index (`add_item_at_index`) and inline editing (`update_item_ajax`).
- **Smart Auto-Suggestions (`apply_suggestion`)**: Pulls scheduled `Special Music`, `Offertory`, `Choir Opener`, or `Choir Special` items from the monthly schedule, or suggests the least-recently-used **Prelude Set**.
- **Blackout Conflict Warnings**: Queries `days_off` for the service date and warns if an assigned person or group member has submitted a blackout date.
- **Custom Item Colors & OOS Formatting**: Override per-item colors (`save_item_colors`) and format hymns using the tenant's `oos_template` setting.
- **Hymn Usage Logging & Email Blasts**: Log `Date_of_Most_Recent_Use` for hymns (`log_hymn_dates`), send the Order of Service via SMTP (`send_email`), and toggle `is_published` (`toggle_publish`) to make the Cue Card live in **Cue Central**.

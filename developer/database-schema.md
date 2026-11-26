# Database Schema

Cue Central uses **PostgreSQL 16** (`init.php`) with **Row-Level Security (RLS)** enabled across all tenant-scoped tables. Every tenant table carries a `tenant_id` column isolated via `app.current_tenant_id`.

---

## Platform & Auth Tables
- **`tenants`**: Organization ID, name, slug/subdomain, plan (`free`, `basic`, `pro`, `unlimited`), status (`active`, `pending_payment`, `suspended`), Stripe IDs.
- **`global_users`**: Platform superadmin accounts.
- **`sessions`**: PostgreSQL session store (`SessionDatabaseHandler.php`).
- **`tenant_settings`**: Per-tenant key/value configuration (module toggles, OOS template, OIDC SSO settings, viewer font/notes preferences, timezone).

---

## Core Ministry & Scheduling Tables
- **`people`**: Users, email, phone, password hash, `is_admin`, `permissions`, `is_pianist`.
- **`groups`** & **`group_members`**: Vocal/instrumental groups and memberships.
- **`email_lists`** & **`email_list_members`**: Custom email blast lists.
- **`days_off`**: Volunteer blackout date ranges (`person_id`, `start_date`, `end_date`).
- **`services`** & **`service_items`**: Cue Cards (`service_date`, `service_type`, `service_time`, `is_published`) and ordered items (`item_type`, `main_text`, `supplemental_info`, `hymn_id` `VARCHAR(50)`, `choir_song_id`, `group_id`, `prelude_set_id`, `sort_order`).
- **`templates`** & **`template_items`**: Reusable service order templates.
- **`type_colors`** & **`service_capacities`**: Custom print/builder colors and max specials per service type.
- **`choir_schedule`**: Monthly schedule metadata (`pianist_*`, `offertory_*`, `opener_*`, `special_*`, `marker_*`, `published_*`).
- **`scheduled_specials`** & **`special_request_tokens`**: Scheduled special music slots and 6-day request tokens.

---

## Sheet Music, Hymnals & Personal Setlists
- **`hymns`**, **`tenant_hymnals`**, **`hymn_numbers`**: Multi-hymnal catalog (`ID`, `Name`, `Key`, `Total_Verses`, `Verses_to_Sing`, `OOS_Verses`, `OOS`, `Familiarity`, `Date_of_Most_Recent_Use`, `First_Line`, `Notes`).
- **`prelude_sets`** & **`prelude_items`**: Curated prelude hymn sets.
- **`choir_library`**, **`choir_tags`**, **`choir_shortcodes`**: Choir & special music catalog (`title`, `status`, `last_sung_date`, `notes`, `link_youtube`).
- **`setlists`** & **`setlist_items`**: Per-user (`email`), per-service (`service_id`) personal PDF setlists.
- **`user_preferences`** & **`push_subscriptions`**: Preferred hymnal/tag settings and Web Push endpoints.

# Understanding Cue Cards

A **Cue Card** is the structured Order of Service for a single church service (such as `Sunday AM`, `Sunday PM`, `Wednesday PM`, or a custom event). Directors assemble and publish Cue Cards in **Cue Central Studio** (`builder.php`), and volunteers view them in **Cue Central** (`central_cuecardviewer.php`) or print them via `print.php`.

---

## Service Anatomy

Each service record in PostgreSQL (`services` table) stores:
- **`service_date`** & **`service_time`**: Date and start time of the service.
- **`service_type`**: e.g., `Sunday AM`, `Sunday PM`, `Wednesday PM`, or custom type.
- **`is_published`**: Boolean flag (`0` = draft in Studio only; `1` = visible to volunteers in Cue Central).
- **Schedule Metadata** (`choir_schedule`): Links the service to its assigned **Pianist (`PIA`)**, **Offertory (`OFF`)**, **Choir Opener (`OPN`)**, and **Special (`SPC`)**.

---

## Customizable Item Colors (`type_colors`)

Each `service_items` row has an `item_type` (such as `Hymn`, `Prelude`, `Choir Special`, `Message`, etc.). In **Cue Central Studio → Config → Print Styling** (`config.php`), administrators can customize the background, border, and text colors for every item type, or override colors on an individual item inside `builder.php`.

---

## Publishing & Visibility

- **Drafts (`is_published = 0`)**: Visible only to authorized directors in **Cue Central Studio**.
- **Published (`is_published = 1`)**: Appears on the volunteer dashboard (`central_index.php`), in **Cue Cards** (`central_cuecards.php`), and in the **Cue Card Viewer** (`central_cuecardviewer.php`, which lists up to the 5 most recent published services by `service_date DESC, service_time DESC`).

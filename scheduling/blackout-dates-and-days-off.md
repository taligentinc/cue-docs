# Blackout Dates & Days Off

Volunteers can submit unavailable dates (**Days Off**) in **Cue Central**, and directors see real-time conflict warnings when building services in **Cue Central Studio**.

---

## Submitting Days Off (`central_myschedule.php`)

1. Open **My Assignments** (`central_myschedule.php`) in **Cue Central**.
2. In the **Days Off** section, select a **Start Date**, **End Date**, and optional note/type (e.g., `All Day`).
3. Submit to save the record to the PostgreSQL `days_off` table (scoped to your `tenant_id` and `person_id`).
4. Submitted entries can be deleted at any time from the same page.

---

## Conflict Detection in Studio (`builder.php`)

When a director opens a service in **Cue Central Studio → Cue Builder** (`builder.php`), the builder queries `days_off` for that `service_date`. Any group or person with an overlapping blackout date is flagged with a conflict warning so directors avoid scheduling unavailable musicians.

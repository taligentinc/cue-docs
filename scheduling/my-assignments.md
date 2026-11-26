# My Assignments

The **My Assignments** view (`central_myschedule.php`) gives every volunteer, vocalist, pianist, and instrumentalist a personalized look at their upcoming 30-day ministry schedule.

---

## How Assignments Are Aggregated

`central_myschedule.php` looks up the signed-in user's `email` in the `people` table, retrieves all `groups` they belong to (`group_members`), and aggregates assignments over the next **30 days** from three sources (where either the monthly schedule or the service Cue Card is published):

1. **Special Music (`scheduled_specials`)**: Assigned special music dates and any selected `choir_library` song.
2. **Schedule Roles (`choir_schedule`)**: Monthly **Pianist**, **Offertory**, **Choir Opener**, and **Special** assignments.
3. **Cue Card Items (`service_items`)**: Direct `Special Music` or `Offertory` items assigned to the volunteer's group in a published service.

---

## Conflict Highlighting

If an upcoming assignment falls within any date range you submitted in **Days Off**, `central_myschedule.php` highlights the assignment with a conflict badge so you can coordinate a swap with your music director.

---

## Submitting Days Off

Directly on `central_myschedule.php`, you can add or remove unavailable date ranges (`days_off` table) with a start date, end date, and optional label (such as `All Day`).

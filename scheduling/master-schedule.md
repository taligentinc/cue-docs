# Master Ministry Schedule

The **Master Schedule** (`central_schedule.php`) provides a complete, calendar-wide perspective of all worship services, musical presentations, and technical crew assignments across the entire church ministry.

---

## 🗓️ Navigating Months & Schedules

```mermaid
flowchart LR
    PrevBtn[← Previous Month] --> CurrentMonth[Current Month View: e.g. November 2026]
    CurrentMonth --> NextBtn[Next Month →]
    CurrentMonth --> SchedSelect[Schedule Selector: Main, Youth, Orchestra]
```

### Key Controls:
* **Month Navigation**: Jump seamlessly between past archives and upcoming future months.
* **Schedule Classification**: Switch between different ministry divisions:
  * **Main**: Primary Sunday Morning, Sunday Evening, and Wednesday Midweek services.
  * **Choir & Orchestra**: Specific choral rehearsal and sectional schedules.
  * **Special Events**: Christmas cantatas, Easter productions, conferences, and revival services.

---

## 📊 Published vs. Unpublished Status

Directors manage schedule releases to prevent volunteers from planning around tentative drafts:

* When a monthly schedule is finalized, directors set `published_<ScheduleName>_<YYYY-MM> = 1` in `choir_schedule`.
* If a schedule is **Unpublished**, Cue Central displays an informational badge:
  ```text
  This schedule is currently being finalized by ministry directors and will be visible once published.
  ```
* Once published, the full grid of services, songs, and personnel unlocks instantly for all ministry members.

---

## 🔍 Grid View Structure

The schedule displays all Sundays and Wednesdays throughout the month:

| Date | Service | Pianist | Opener Anthem | Special Music | Tech / AV |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Nov 1** | Sun Morning | Karen Miller | *Crown Him With Many Crowns* | Sanctuary Trio | John D. / Mike R. |
| **Nov 1** | Sun Evening | David S. | *He Is Exalted* | Adult Choir | Sarah T. |
| **Nov 4** | Wed Midweek | Karen Miller | *Hymn Medley* | Instrumental Ensemble | John D. |

> [!TIP]
> Hovering over or tapping any musical title reveals arrangement notes, key, and arranger details.

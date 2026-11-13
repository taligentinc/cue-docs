# Service Item Types

Every entry on a Cue Central Cue Card has a defined **Item Type** that governs how it displays, how it links to musical assets, and how it is routed in print and broadcast exports.

---

## 📑 Item Type Reference

### 1. Choir Opener
* **Description**: The opening choral anthem or energetic praise piece performed immediately following the instrumental prelude.
* **Database Link**: Links directly to `choir_library.id` via `choir_song_id`.
* **Automated Behaviors**:
  * Automatically featured on the Cue Central Dashboard **Upcoming Openers** banner.
  * Links directly to digital choral scores and rehearsal audio tracks.
  * Tracks choir attendance call times.

### 2. Congregational Hymn
* **Description**: Traditional or modern hymns sung by the entire church body.
* **Database Link**: Links to `hymns.id` via `hymn_id`.
* **Fields**:
  * **Main Text**: Hymn Name (e.g. *Great Is Thy Faithfulness*).
  * **Supplemental Info**: Stanza sequence (e.g. *Stanzas 1, 2 & 4*), hymnal page number, and key signature.
* **Reporting**: Logged into `services.hymns_logged` to track repertoire frequency across 52-week cycles.

### 3. Special Music / Choir Special
* **Description**: Featured musical presentation before the sermon, presented by soloists, ensembles, or the mass choir.
* **Database Link**: Links to `choir_library.id` via `choir_song_id` and assigned group in `groups.id`.
* **Capacity Tracking**: Governed by `service_capacities.max_specials` to ensure worship services stay on schedule.

### 4. Instrumental Prelude
* **Description**: Continuous instrumental music presented by church pianists, organists, or orchestra during congregation gathering.
* **Database Link**: Links to `prelude_sets.id` via `prelude_set_id`.
* **Pianist Integration**: Surfaces assigned pianist names and repertoire pieces for rotation tracking.

### 5. Pastoral Prayer & Scripture
* **Description**: Dedicated prayer, responsive scripture reading, or pastoral exhortation.
* **Fields**:
  * **Main Text**: Scriptural reference (e.g. *Psalm 103:1-12*).
  * **Supplemental Info**: Officiating pastor or scripture reader name.

### 6. Announcements & Offering
* **Description**: Ministry updates, upcoming event announcements, and prayer for church tithes and offerings.
* **Fields**:
  * Offertory accompanist or instrumental soloist.
  * Video announcement roll cues for AV booth operators.

### 7. Sermon / Exposition of the Word
* **Description**: The primary pastoral message.
* **Fields**:
  * **Main Text**: Sermon Title.
  * **Supplemental Info**: Speaker name, primary passage, and sermon slide presentation trigger.

### 8. Hymn of Invitation / Decision
* **Description**: Closing congregational hymn during the altar call and pastoral counseling.
* **Fields**:
  * Continuous play cues for pianists and organists during prayer counseling.

---

## 🎨 Overrides & Customization

Directors can apply custom color overrides per service item in the Cue Builder:

```sql
service_items:
  - text_color_override
  - bg_color_override
  - border_color_override
  - text_color_middle_override
  - text_color_main_override
```

> [!TIP]
> Use color overrides sparingly (such as highlighting a guest missionary or unique baptism ceremony) to maintain familiar visual hierarchy for operators.

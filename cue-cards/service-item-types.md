# Service Item Types

In **Cue Central Studio** (`builder.php`), every item added to a service's Order of Service belongs to one of **16 item types** organized into three categories:

---

## 1. Music Items
- **`Hymn`**: Links to a congregational hymn in the `hymns` table (`hymn_id`), formatted using the workspace's OOS hymn template (e.g., `{name} - #{primary_number} - {verses}`) with key and verse notes in `supplemental_info`.
- **`Prelude`**: Links to a curated `prelude_sets` entry (`prelude_set_id`) or custom prelude notes.
- **`Choir Special`**: Links to a song in `choir_library` (`choir_song_id`) for the choir's featured anthem.
- **`Choir Opener`**: Opening choral piece, linked to `choir_library` when applicable.
- **`Offertory`**: Instrumental or vocal offertory item, optionally linked to an assigned `group_id` or `choir_song_id`.
- **`Special Music`**: Solo, duet, trio, or ensemble special linked to an assigned `group_id` and `choir_song_id`.

---

## 2. Speaking Items
- **`Welcome`**: Opening greeting / welcome segment.
- **`Prayer`**: Pastoral or congregational prayer item.
- **`Message`**: Sermon / preaching block (speaker and title/notes).
- **`Announcements`**: Service announcements segment.
- **`Introduction`**: Speaker or guest introduction.

---

## 3. Other & Structural Items
- **`Baptism`**: Baptismal service segment.
- **`Birthdays`**: Birthday recognitions.
- **`Dismissal`**: Closing prayer / dismissal.
- **`Custom`**: Any custom service element defined by the director.
- **`Section Break`**: Visual divider used to group service items into logical sections in the Builder, Cue Card Viewer, and printable Cue Cards.

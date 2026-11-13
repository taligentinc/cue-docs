# Sheet Music Library & Catalog

The **Sheet Music Library** (`central_sheetmusic.php`) is Cue Central's digital music archive, indexing hundreds of sacred choral anthems, vocal arrangements, and congregational hymns.

---

## 📚 Library Features & Search Engine

Musicians can filter and search the collection in real time:

* **Instant Search**: Filter by song title, composer, arranger, or lyric keyword.
* **Arrangement Details**: View musical voicing (SATB, SSA, TTBB, Solo, Duet, Trio, Ensemble).
* **Tagging System**: Categorize pieces by thematic tags (e.g. *Easter*, *Christmas*, *Praise & Thanksgiving*, *Patriotic*, *Communion*).
* **Performance History**: Review when a song was last ministered to avoid overuse.

---

## 🗃️ Database Structure (`choir_library`)

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INTEGER | Primary key. |
| `choir_id` | TEXT | Physical music filing cabinet folder or catalog number. |
| `title` | TEXT | Primary title of the anthem or song. |
| `arrangement` | TEXT | Arranger or orchestrator (e.g. *Arr. Mary McDonald*, *David T. Clydesdale*). |
| `status` | TEXT | Repertoire status (*Active*, *In Rehearsal*, *Archived*). |
| `tags` | TEXT | Comma-delimited classification tags. |
| `notes` | TEXT | Performance instructions, soloist assignments, or director notes. |
| `link_pdf` | TEXT | File path or S3 URL to the sheet music PDF. |
| `link_audio` | TEXT | Rehearsal demonstration audio recording (MP3). |
| `link_youtube` | TEXT | Video demonstration link for phrasing and performance reference. |

---

## 📥 Accessing Rehearsal Materials

Tapping any entry in the library expands its action tray:
* **View Sheet Music**: Opens the interactive PDF viewer.
* **Listen to Rehearsal Track**: Streams the audio recording directly in your browser.
* **Watch Video Reference**: Launches the verified YouTube demonstration.

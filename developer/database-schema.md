# Database Schema & ER Diagrams

Cue Central operates on an optimized SQLite relational database (`cue.sqlite` in production, `cue_dev.sqlite` in staging).

---

## 🗄️ Entity Relationship Diagram

```mermaid
erDiagram
    PEOPLE ||--o{ GROUP_MEMBERS : "belongs to"
    GROUPS ||--o{ GROUP_MEMBERS : "contains"
    PEOPLE ||--o{ DAYS_OFF : "submits"
    
    SERVICES ||--o{ SERVICE_ITEMS : "contains"
    GROUPS ||--o{ SERVICE_ITEMS : "performs"
    CHOIR_LIBRARY ||--o{ SERVICE_ITEMS : "sung in"
    HYMNS ||--o{ SERVICE_ITEMS : "sung in"
    
    GROUPS ||--o{ SCHEDULED_SPECIALS : "assigned to"
    CHOIR_LIBRARY ||--o{ SCHEDULED_SPECIALS : "selected song"

    PRELUDE_SETS ||--o{ PRELUDE_ITEMS : "contains"
    SETLISTS ||--o{ SETLIST_ITEMS : "contains"
    
    PEOPLE {
        int id PK
        string first_name
        string last_name
        int is_pianist
        string email
        string phone
    }
    
    SERVICES {
        int id PK
        string service_date
        string service_time
        string service_type
        string last_emailed
        int hymns_logged
        int is_published
    }
    
    SERVICE_ITEMS {
        int id PK
        int service_id FK
        string item_type
        int sort_order
        string label
        string supplemental_info
        string main_text
        int hymn_id FK
        int group_id FK
        int prelude_set_id FK
        int choir_song_id FK
        string text_color_override
        string bg_color_override
        string border_color_override
    }
    
    CHOIR_LIBRARY {
        int id PK
        string choir_id
        string title
        string arrangement
        string status
        string tags
        string notes
        string link_pdf
        string link_audio
        string link_youtube
    }
    
    DAYS_OFF {
        int id PK
        int person_id FK
        string date
        string notes
    }
```

---

## 📋 Table Definitions

### 1. `people`
Stores volunteer accounts, contact info, and special pianist designations.
* `id` (INTEGER PRIMARY KEY)
* `first_name` (TEXT)
* `last_name` (TEXT)
* `is_pianist` (INTEGER 0/1)
* `email` (TEXT UNIQUE)
* `phone` (TEXT)

### 2. `services`
Stores master worship service instances.
* `id` (INTEGER PRIMARY KEY)
* `service_date` (TEXT, `YYYY-MM-DD`)
* `service_time` (TEXT, `HH:MM`)
* `service_type` (TEXT, e.g. `Sunday Morning`, `Sunday Evening`, `Wednesday`)
* `last_emailed` (TEXT, timestamp)
* `hymns_logged` (INTEGER 0/1)
* `is_published` (INTEGER 0/1)

### 3. `service_items`
Ordered items comprising each service's Cue Card.
* `id` (INTEGER PRIMARY KEY)
* `service_id` (INTEGER, FK -> `services.id`)
* `item_type` (TEXT, e.g. `Choir Special`, `Congregational`)
* `sort_order` (INTEGER)
* `label` (TEXT)
* `supplemental_info` (TEXT)
* `main_text` (TEXT)
* `hymn_id` (INTEGER, FK -> `hymns.id`)
* `group_id` (INTEGER, FK -> `groups.id`)
* `prelude_set_id` (INTEGER, FK -> `prelude_sets.id`)
* `choir_song_id` (INTEGER, FK -> `choir_library.id`)

### 4. `days_off`
Blackout dates submitted by volunteers.
* `person_id` (INTEGER, FK -> `people.id`)
* `date` (TEXT, `YYYY-MM-DD`)
* `notes` (TEXT, `All Day`, `Morning Only`, `Evening Only`)

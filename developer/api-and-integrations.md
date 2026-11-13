# APIs & Integration Services

Cue Central exposes lightweight REST APIs and cron automation hooks to integrate with broadcast switchers, choir presentation software, and mobile push services.

---

## 📡 API Endpoints

### 1. Setlist API (`api_setlist.php`)
Returns the structured musical setlist for a specific service date in JSON format:

```http
GET /api_setlist.php?service_id=42
```

#### Response Example:
```json
{
  "status": "success",
  "service": {
    "id": 42,
    "date": "2026-11-15",
    "time": "10:30",
    "type": "Sunday Morning"
  },
  "items": [
    {
      "sort_order": 1,
      "type": "Choir Opener",
      "title": "Crown Him With Many Crowns",
      "arrangement": "Arr. David T. Clydesdale",
      "key": "D",
      "pdf_url": "/viewer.php?file=crown_him.pdf"
    },
    {
      "sort_order": 2,
      "type": "Congregational",
      "title": "A Mighty Fortress Is Our God",
      "hymn_number": 43,
      "stanzas": "1, 2, 4"
    }
  ]
}
```

---

## ⏰ Cron Automation Services

| Script | Schedule | Function |
| :--- | :--- | :--- |
| `cron_push_reminders.php` | `0 7 * * *` (Daily at 7:00 AM) | Scans for assignments scheduled 3 days out; dispatches Web Push & email notifications. |
| `cron_special_requests.php` | `0 8 * * 1` (Mondays at 8:00 AM) | Checks pending special music request tokens; sends reminder alerts for unconfirmed dates. |

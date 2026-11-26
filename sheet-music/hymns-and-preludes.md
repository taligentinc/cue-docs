# Congregational Hymns & Preludes

**Cue Central Studio** includes a multi-hymnal catalog (`hymns.php`, powered by `HymnService.php`) and a curated **Prelude Sets** manager (`preludes.php`).

---

## Multi-Hymnal Catalog (`hymns.php` & `HymnService.php`)

Each church workspace can configure multiple hymnals in **Config → Hymnals** (`config.php`, stored in `tenant_hymnals`) with custom short codes (e.g., `MAJ`, `SSH`, `NVB`, `NVR`), display priority, and badge colors.

### Stored Hymn Fields (`hymns` & `hymn_numbers`)
- **`Name`**, **`Key`**, **`Familiarity`**, **`First_Line`**, **`Notes`**
- **`Total_Verses`**, **`Verses_to_Sing`**, **`OOS_Verses`**, **`OOS`**
- **`Date_of_Most_Recent_Use`** (updated when logging hymn dates in `builder.php`)
- **Per-Hymnal Numbers (`hymn_numbers`)**: Maps each hymn to its page/song number in each configured hymnal.

### Imports, Exports & PDF Scans
- **CSV Import & Export**: Bulk import/export your hymn catalog (`importCsv`, `exportCsv`).
- **PDF Scans**: Upload individual hymn scans (`upload_single_scan`) or bulk import from files/ZIP archives (`importScansFromFiles`, `importScansFromZip`), plus full ZIP catalog+scans export (`exportZipBundle`).

---

## Prelude Sets (`preludes.php`)

Accompanists and directors use `preludes.php` to group hymns into reusable **Prelude Sets** (`prelude_sets` and `prelude_items`):
- **Auto-Sorting & Drag-and-Drop**: Items auto-sort numerically by hymn number or can be reordered via drag-and-drop.
- **Nearby Hymn Suggestions**: The `ajax=nearest` endpoint suggests the 5 preceding and 5 following hymns in the same hymnal.
- **Builder Integration**: In `builder.php`, smart suggestions can pull the least-recently-used prelude set automatically.

# Print & PDF Exports (`print.php` & `print_schedule.php`)

**Cue Central Studio** provides dedicated print and PDF export views for both individual service Cue Cards and monthly ministry schedules.

---

## Printable Cue Cards (`print.php`)

`print.php?service_id=<id>` renders a letter-sized printable Cue Card designed for pulpits, piano stands, and choir folders:
- **Automatic Layout Scaling**: Renders **2-up** (two cue cards side-by-side) when a service has **20 or fewer items**, or **1-up flowing** when it has more than 20 items.
- **Schedule Header**: Displays the service date, type, time, and assigned **PIA / OFF / OPN / SPC** flags.
- **QR Code**: Generates an SVG QR code (via `cueapi.php`) linking back to the live `print.php` URL.
- **Color-Coded Rows & Clickable PDFs**: Uses the tenant's `type_colors` (or per-item overrides) and includes clickable links (`asset.php`) to attached sheet music PDFs.
- **Print or Save PDF**: Supports browser printing (`window.print()`) and client-side PDF download via `html2pdf.js`.

---

## Printable Monthly Schedule (`print_schedule.php`)

`print_schedule.php` renders a landscape letter-sized monthly calendar with auto-scaling CSS (`--scale`), QR code, **PIA / OFF / OPN / SPC** badges, and scheduled specials with clickable sheet music links, plus browser Print and `html2pdf.js` PDF export.

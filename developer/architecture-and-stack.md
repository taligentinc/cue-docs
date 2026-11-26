# Architecture & Technology Stack

Cue Central is a multi-tenant SaaS application built on a lightweight, container-native stack deployed on `tgi-core-aspen`.

---

## Core Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | PHP 8.4-FPM (Alpine Linux) |
| **Web Server / Edge** | Caddy 2.9 (automatic Let's Encrypt TLS, reverse proxy to container port `8000`) |
| **Database** | PostgreSQL 16 (`tgi-postgres` container) with **Row-Level Security (RLS)** |
| **Sessions** | PostgreSQL-backed sessions (`SessionDatabaseHandler.php` + `sessions` table) |
| **Object Storage** | S3-compatible storage (`S3Client.php`, AWS Signature v4 pre-signed URLs) |
| **Billing** | Stripe Checkout, Customer Portal & Webhooks (`StripeClient.php`, `stripe_webhook.php`) |
| **Email** | Implicit TLS SMTP on port 465 |
| **Frontend** | Vanilla JS, Tailwind CSS (CDN), SortableJS, PDF.js, `html2pdf.js` |

---

## Multi-Tenancy & Isolation

- Every church workspace has a unique `tenant_id` and subdomain (`yourchurch.app.cuecentral.org`), resolved in `tenant.php`.
- `db.php` sets the PostgreSQL session variable (`SET app.current_tenant_id = ...`) on every request so **Row-Level Security (RLS)** enforces strict tenant isolation at the database layer.
- Users visiting `app.cuecentral.org` without a tenant subdomain are routed to `workspace.php` to look up their Workspace ID.

---

## Service Worker (`sw.js`)

`sw.js` handles **Web Push notifications** (`push` and `notificationclick` events) for assignment reminders. Cue Central does not cache Cue Cards or sheet music offline.

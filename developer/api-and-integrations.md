# APIs & Integrations

---

## Personal Setlist AJAX API (`api_setlist.php`)

`api_setlist.php` is a stateful, authenticated JSON endpoint used by `central_cuecardviewer.php` and `setlist_viewer.php` to manage a user's personal PDF setlist for a service:
- `?action=get_preferences` / `save_preferences` — Read/write `user_preferences` (`preferred_hymnal`, `preferred_tag`).
- `?action=get_setlist` — Returns the user's `setlists` + `setlist_items` for a `service_id`.
- `?action=save_item` / `upload_pdf` — Add/update/reorder items or upload a private custom PDF into the setlist.

---

## S3 Object Storage (`S3Client.php` & `asset.php`)

- `S3Client.php` signs AWS S3 REST requests using cURL and **AWS Signature Version 4** (`putObject`, `deleteObject`, `getPresignedUrl`).
- `asset.php` resolves hymn scans and choir library PDF/audio assets and redirects or streams via pre-signed URLs.

---

## Stripe Billing (`StripeClient.php` & `stripe_webhook.php`)

- `register.php` creates Checkout Sessions (`STRIPE_PRICE_ID_BASIC`, `STRIPE_PRICE_ID_PRO`, `STRIPE_PRICE_ID_UNLIMITED`).
- `admin.php` opens Stripe Customer Portal sessions for paid tenants.
- `stripe_webhook.php` verifies `Stripe-Signature` (HMAC-SHA256) and updates tenant `status` on `checkout.session.completed`, `customer.subscription.updated`, and `customer.subscription.deleted`.

---

## Daily Cron Jobs

- **`cron_push_reminders.php`**: Runs daily; checks assignments **3 days out** (`+3 days`) across `scheduled_specials`, `choir_schedule`, and `service_items` and sends Web Push notifications.
- **`cron_special_requests.php`**: Runs daily; checks `scheduled_specials` **6 days out** (`+6 days`) with no `choir_song_id` and emails a tokenized `addtitle.php?token=...` link to the assigned group.

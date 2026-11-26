# Roles & Access Permissions

Cue Central uses **native session-based authentication** (`auth.php` + PostgreSQL `sessions` table) paired with **Role-Based Access Control (RBAC)** defined in `rbac.php` and optional per-tenant **OIDC Single Sign-On**.

---

## Authentication Methods

1. **Workspace Lookup (`workspace.php`)**: Users visiting `app.cuecentral.org` enter their church Workspace ID (subdomain slug) or navigate directly to `yourchurch.app.cuecentral.org`.
2. **Native Email & Password (`login.php`)**: Authenticates against the tenant's `people` table using PHP password hashing.
3. **Per-Tenant OIDC SSO (`oidc_login.php`, `oidc_callback.php`)**: Configured in **Admin → Single Sign-On** (`admin.php`) using Authorization Code + PKCE (`S256`). OIDC group claims can automatically map users to Cue Central permissions via `cue_oidc_decode_group_mappings()`.

---

## Platform Admin & 14 Canonical Permissions

Each user in `people` has an `is_admin` flag (full Studio & Admin access) and a `permissions` list drawn from 14 canonical keys in `rbac.php`:

| Permission Key | Scope |
| :--- | :--- |
| `n-cue` | Access Cue Central Studio |
| `n-cue-central` | Access Cue Central (Volunteer Portal) |
| `n-cue-cuecards` | Build & edit Cue Cards in `builder.php` |
| `n-cue-savetemplates` | Save & delete service templates in `builder.php` |
| `n-cue-schedule` | Edit Master Monthly Schedule (`schedule.php`) |
| `n-cue-pianists` | Assign pianists on the schedule |
| `n-cue-offertories` | Assign offertories on the schedule |
| `n-cue-specials` | Manage Choir & Specials library (`specials.php`) |
| `n-cue-hymnsedit` | Manage Hymnals & Hymn Catalog (`hymns.php`) |
| `n-cue-preludes` | Manage Prelude Sets (`preludes.php`) |
| `n-cue-groups` | Manage People & Groups (`groups.php`) |
| `n-cue-emaillists` | Manage Email Blast Lists (`groups.php`) |
| `n-cue-emails` | Send Order of Service & Schedule blast emails |
| `n-cue-config` | Configure Capacities, Hymnals, Tags & Colors (`config.php`) |

---

## Built-In Role Presets

When editing a person's access in `groups.php`, administrators can apply one of four built-in presets:

- **Service Director**: Full production & scheduling permissions (`n-cue`, `n-cue-central`, `n-cue-cuecards`, `n-cue-savetemplates`, `n-cue-schedule`, `n-cue-specials`, `n-cue-pianists`, `n-cue-offertories`, `n-cue-hymnsedit`, `n-cue-preludes`, `n-cue-groups`, `n-cue-emaillists`, `n-cue-emails`, `n-cue-config`).
- **Schedule Coordinator**: Scheduling & communication (`n-cue`, `n-cue-central`, `n-cue-schedule`, `n-cue-pianists`, `n-cue-offertories`, `n-cue-groups`, `n-cue-emaillists`, `n-cue-emails`).
- **Music Librarian**: Catalog & sheet music management (`n-cue`, `n-cue-central`, `n-cue-specials`, `n-cue-hymnsedit`, `n-cue-preludes`).
- **Volunteer / Crew**: Volunteer portal access only (`n-cue-central`).

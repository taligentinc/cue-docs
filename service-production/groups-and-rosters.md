# Groups, Rosters & Email Lists (`groups.php`)

In **Cue Central Studio**, `groups.php` manages your church's people directory, vocal and instrumental ensembles, RBAC permissions, and email blast lists.

---

## People & Access Management (`people`)

- Add or remove musicians, choir members, and staff (`add_person`, `delete_person`).
- Edit contact information (`edit_person_contact`: name, email, phone).
- Configure access (`edit_person_access`): set password, toggle `is_admin`, apply one of the 4 RBAC role presets, or toggle any of the 14 granular permissions (see [Roles & Access Permissions](../getting-started/roles-and-permissions.md)).

---

## Groups & Pianists (`groups` & `group_members`)

- Create vocal or instrumental groups (`add_group`, `rename_group`, `delete_group`).
- Toggle membership (`toggle_membership`) to link people into choirs, trios, duets, or soloists.
- Toggle pianist eligibility (`toggle_pianist`) so pianists appear in the Master Schedule's `PIA` selector.

---

## Email Lists & Blast Emails (`email_lists` & `email_list_members`)

- Create custom email distribution lists (`add_email_list`, `delete_email_list`) and assign members (`toggle_list_membership`).
- Dispatch formatted announcements or reminders directly from `groups.php` (`send_blast_email`) over SMTP.

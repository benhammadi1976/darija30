# D65 — Supabase Media Integration

## Scope
Built on the D63 package and integrates Darija30 with the new Supabase `darija30` media backend prepared by the user.

## Supabase assumptions
- Project URL: `https://ueovreadkfmwsniksohn.supabase.co`
- Public buckets already created: `audio`, `images`, `videos`
- Storage security SQL already executed by the user:
  - public read for media buckets
  - authenticated admin-only insert/update/delete
  - `public.admin_users`
  - `public.is_darija30_admin()`
- No secret/service key is used in the frontend.

## Changed files
- `index.html`
- `css/styles.css`
- `js/audio-player.js`
- `js/admin-content-manager.js`
- `js/supabase-media.js` (new)
- `reports/D65_SUPABASE_MEDIA_INTEGRATION_REPORT.md` (new)

## What was added
### Supabase media helper
Added `js/supabase-media.js`:
- Stores Supabase URL and publishable key locally in the admin browser.
- Supports Supabase email/password login using the publishable key.
- Uploads audio blobs/files to Supabase Storage with authenticated admin session.
- Generates public URLs for `audio`, `images`, and `videos` buckets.
- Converts local asset paths such as `assets/audio/day02/cafe-001-normal.mp3` into storage paths such as `day02/cafe-001-normal.mp3`.

### Admin phrase page
In `#/admin/phrases`, each selected phrase now has a Supabase Media Backend panel:
- Project URL field (pre-filled with the current Supabase project URL)
- Publishable key field (admin pastes the `sb_publishable_...` key locally)
- Admin email/password login
- Logout

Each Normal/Slow teacher audio card now supports:
- Record
- Stop
- Play
- Download
- Save recording to Supabase
- Choose audio file
- Upload chosen file
- Copy final path

### Learner audio fallback
`js/audio-player.js` now tries Supabase public media first for phrase audio:
1. Supabase public URL matching the phrase audio path
2. Supabase fallback extensions (`mp3`, `webm`, `m4a`, `ogg`, `wav`)
3. Original local asset path

This means:
- If admin saves `audio/day02/cafe-001-normal.mp3`, learner buttons play it from Supabase.
- If the browser records WebM and saves `audio/day02/cafe-001-normal.webm`, learner buttons can still try that public URL.
- If nothing exists in Supabase, the site falls back to the current local `assets/audio/...` path.

## Important truth
A static browser cannot safely use the secret/service key and cannot guarantee true MP3 recording in every browser. D65 does not fake WebM as MP3. If the browser records WebM/M4A/OGG, it uploads that real format and the learner player tries it as a fallback. Final production audio should still prefer true MP3 files for consistency.

## Cache busting
`index.html` now loads:
- `css/styles.css?v=d65`
- `js/supabase-media.js?v=d65`
- `js/audio-player.js?v=d65`
- `js/lesson-player.js?v=d65`
- `js/admin-content-manager.js?v=d65`

## Validation
- `node --check` passed for all `js/*.js` and `js/data/*.js`.

## Next manual test
1. Deploy D65.
2. Open `#/admin/phrases`.
3. Paste the Supabase publishable key and save config.
4. Login with the Supabase admin email/password.
5. Select a phrase.
6. Record Normal audio or choose an audio file.
7. Click “Save recording to Supabase” or “Upload chosen file”.
8. Open learner lesson page and click Normal/Slow.
9. Confirm the audio plays from any device after deployment.

# DARIJA30 Phase D23 — Dual View Admin Preview Report

## Goal
Create a clear two-sided view before building the real Backend/Admin/Database:

- Learner side: how visitors and students experience the course.
- Admin side: how the owner will later manage lessons, phrases, audio, video, and visuals.

## Completed
- Added `js/admin-content-manager.js`.
- Added dynamic static admin dashboard at `#/admin`.
- Added dynamic lesson map at `#/admin/lessons`.
- Added phrase form preview at `#/admin/phrases`.
- Added audio/video media matrix at `#/admin/audio`.
- Updated `js/router.js` to render admin previews on admin routes.
- Added script include in `index.html`.
- Added documentation: `content/DARIJA30_DUAL_VIEW_ADMIN_PREVIEW.md`.

## What this is
This is a static admin preview / content operating room.

It helps the owner see:
- where lessons live,
- which phrases belong to each lesson,
- where the future audio/video files should be placed,
- what the learner sees for the same lesson.

## What this is not
This is not yet:
- real login-protected admin,
- database-backed CMS,
- upload system,
- save/edit system,
- Stripe/order management.

Those come later after the content and media are stable.

## Validation
- `node --check js/admin-content-manager.js` passed.
- `node --check js/router.js` passed.
- No lesson/audio/video data was removed.

# DARIJA30 Phase D23B — Admin Role + Lock Preview Report

## Goal
Add a static role simulation before real Backend/Admin so the site can be viewed as either learner/visitor or admin.

## Completed
- Added static Admin Preview session using localStorage.
- Added admin demo login gate for `/admin` routes.
- Added admin logout.
- Admin nav appears only when admin preview mode is active.
- When admin is active, locked lessons remain marked as locked for learners, but admin can open the full content for review.
- Added learner preview mode via `?view=learner` so admin can see exactly what a visitor/student sees.
- After logout, the site returns to visitor/learner behavior and locked lessons show only the protected preview.

## Files changed
- `index.html`
- `js/admin-session.js`
- `js/router.js`
- `js/admin-content-manager.js`
- `js/lesson-player.js`

## Note
This is not real security. It is a static preview before Backend, database, and real admin login.

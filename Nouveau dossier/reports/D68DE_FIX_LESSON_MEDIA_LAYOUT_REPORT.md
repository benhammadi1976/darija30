# D68DE-FIX — Reorder Lesson Media Admin Layout + Sticky Nav Overlap

Scope: UI-only cleanup after D68D-E.

Changes:
- Reordered `#/admin/lesson-media` to show: title → readiness stats → admin gateway status → 12-level file naming rule → level/day selectors → selected lesson table.
- Removed the duplicate admin header action cluster from the top of the lesson-media page so controls no longer sit behind the sticky admin bar.
- Added CSS spacing for `#page-admin-audio.active` and `.admin-lesson-media-shell` so content starts clearly below the blue admin navigation bar.
- Bumped cache query versions for `styles.css` and `admin-content-manager.js` in `index.html`.

Not changed:
- Supabase project configuration.
- Upload behavior.
- Inline phrase editor behavior.
- Learner pages.

Validation:
- `node --check js/admin-content-manager.js`: PASS
- `node --check js/router.js`: PASS

# D79 Admin Level Pages

Darija30 admin UX now separates level management from media upload:

- `/admin/levels` manages the 12 levels.
- `/admin/levels/:level` shows the 30 days of a single level.
- `/admin/lesson-media?level=X&day=Y` opens the media center for one selected level/day.

This preserves the independence rule:

- Each level has independent days, phrases, media, progress, and future access.
- Each language layer remains independent from the fixed Darija core.

# D79-FIX-B — Collapsible Admin Level Cards

## Purpose
Make the Admin Levels page easier to use by keeping all 12 levels on one page and allowing each level card to open/close inline.

## Behavior
- `/#/admin/levels` displays all 12 levels as cards.
- Each card has a `فتح 30 يوم` / `طي 30 يوم` toggle.
- Opening a card shows the 30 days inline under that level.
- Clicking a day opens the Lesson Media Center filtered to that level and day: `/#/admin/lesson-media?level=<level>&day=<day>`.
- The full page route `/#/admin/levels/<level>` remains available.

## Scope
- Admin UI only.
- No sentence/content changes.
- No media changes.
- No weekly wheel changes.

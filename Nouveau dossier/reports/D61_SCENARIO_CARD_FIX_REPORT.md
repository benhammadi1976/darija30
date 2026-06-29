# D61 — Scenario Card Fix

## Goal
Keep the D60 two-column lesson layout, but make the `Scenario` content a proper independent card while leaving it in the same visual location.

## User correction
The user clarified that `Scenario` should not be moved above the columns and the overall layout should not be restructured again. The correct fix is only to wrap/style the Scenario area as a card in its existing place.

## Changes
- Updated `css/styles.css` with a D61 override that gives `.lesson-scenario-card` a visible card background, border, radius, padding, and shadow.
- Kept the Scenario card in its existing D60 location inside the practice/right column.
- Updated `index.html` cache versions from `d60` to `d61` for `styles.css` and `lesson-player.js` so browsers load the latest assets.

## Not changed
- No lesson text changed.
- No audio/video assets changed.
- No column restructuring changed.
- No recording or quiz logic changed.

## Validation
- JavaScript syntax check passed for all root `js/*.js` files.

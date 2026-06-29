# D41 — Minimal Arrow Navigation + Bottom Record Button

## Scope
Visual and routing cleanup for the standalone **Do you remember?** memory test page.

## Changes
- Removed the bottom situation dots from the memory test UI.
- Moved **Record your answer** to the bottom-center area where the dots were.
- Kept the progress counter at the top-right as the only visible page position indicator.
- Changed side navigation to plain text symbols only: `<` and `>`.
- Removed the visual button treatment from the side arrows: no blue, no box, no border, no filled background.
- Kept the side arrows positioned over the image, left and right.
- Kept the choice buttons above the bottom recording button to avoid overlap.
- Added a routing safety hook so the next-day icon closes practice mode and starts the next lesson at phrase 1.

## Not Changed
- No lesson data changed.
- No images changed.
- No recording logic changed.
- No memory-test pass/fail logic changed.
- No Day 2 test auto-opening behavior was added.

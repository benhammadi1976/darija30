# D38 — Clean Transparent Remember Control Layer

## Goal
Clean the standalone **Do you remember?** practice page so it feels like a PowerPoint-style training slide, not a website control card.

## Changes
- Hid the native recorded-audio `<audio controls>` element in standalone remember mode, so the browser audio bar no longer appears over the slide.
- Kept only custom transparent overlay buttons on top of the scene image.
- Re-positioned the answer choices into a clean grid above the action row.
- Re-positioned Record / Stop / Listen controls into their own transparent row.
- Kept Previous / dots / Next situation in a lower navigation row.
- Kept Back to phrase 5 / Go to next day in a separate small row.
- Hid the disabled Stop button until recording is active.
- Preserved the standalone full-screen page introduced in D36 and transparent overlay style introduced in D37.

## Not changed
- No lesson data changes.
- No image changes.
- No phrase changes.
- No recording logic changes.
- No two-attempt logic changes.
- No Day 2 or other lesson changes.

## Validation
- `node --check` passed for JavaScript files.

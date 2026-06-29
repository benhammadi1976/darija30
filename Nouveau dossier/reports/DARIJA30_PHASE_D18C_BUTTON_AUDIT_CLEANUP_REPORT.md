# DARIJA30 PHASE D18C — Button Audit & Empty CTA Cleanup

## Goal
Apply the agreed button system correctly across the whole site:

- Primary action = filled terracotta/red from the start.
- Secondary action = white/off-white background + terracotta outline + terracotta text.
- Hover = terracotta fill + white text.
- Disabled/locked = grey, not red.
- Empty placeholder action boxes = hidden or no longer visually presented as clickable.

## Files changed
- `css/styles.css`

## What changed
- Added stronger brand utility fallbacks for `bg-terracotta`, `bg-medina`, and `bg-chefchaouen` so important CTAs do not appear as blank white rectangles.
- Added a real `border: 1.5px solid` to secondary buttons, not only `border-color`.
- Applied the outline system to secondary buttons, pills, lesson selectors, quiz options, back/previous/next controls, and reveal buttons.
- Kept filled red primary buttons as primary buttons.
- Kept disabled/locked controls grey.
- Added a safety cleanup to hide truly empty rounded button/anchor placeholders.

## Not changed
- No lesson content changed.
- No audio changed.
- No video changed.
- No JavaScript logic changed.
- No pricing or routing changed.

## Validation
- Static CSS-only phase.
- JavaScript syntax checks should remain unchanged because no JS was modified.

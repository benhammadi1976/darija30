# D37 — Transparent Do you remember? Controls

## Scope
Visual-only update for the standalone **Do you remember?** practice page.

## Changed
- Removed the visible large bottom control card by overriding the slide body background, border, shadow, and blur.
- Hid the informational blocks from the standalone practice view:
  - situation meta chip text
  - prompt/explanation card
  - status helper text
  - transcript line
  - choice instruction title
  - review-return explanatory text
- Kept all interactive controls inside the 16:9 image area as transparent overlay controls.
- Restyled buttons with light borders, glass transparency, and soft shadow so the image remains visible behind them.
- Preserved existing logic for recording, attempts, choices, navigation, and lesson completion.

## Not changed
- No image replacements.
- No lesson text changes.
- No audio path changes.
- No JavaScript logic changes.
- No changes to the two-attempt practice behavior.

## Backup
Original CSS before D37:
`backup/D37_TRANSPARENT_REMEMBER_CONTROLS/styles.before-D37.css`

# D62 — Mobile Column Order Consistency

## Scope
Small CSS/cache update after D61.

## Goal
Do not change the desktop two-column layout. On phones, stop `Scenario` from appearing as the first card. Make the mobile order follow the desktop left learning column first, then the right practice column.

## Mobile order after D62
1. Say This / Normal Speed / Slow Speed / Meaning / Cultural Intent
2. Watch & Repeat / Moment Visual
3. Scenario card
4. Now You Speak / I'm in Morocco / Culture Note / Memory Hook

## Files changed
- `css/styles.css`
- `index.html`
- `reports/D62_MOBILE_COLUMN_ORDER_CONSISTENCY_REPORT.md`

## Not changed
- Lesson content
- Audio files
- Video/image assets
- Recording logic
- Quiz logic
- Desktop column structure

## Cache busting
`index.html` now references:
- `css/styles.css?v=d62`
- `js/lesson-player.js?v=d62`

## Validation
- `node --check` passed for all root `js/*.js` files.

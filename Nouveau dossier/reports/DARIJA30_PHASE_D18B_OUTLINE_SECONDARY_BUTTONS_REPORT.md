# DARIJA30 Phase D18B — Outline Secondary Buttons

## Goal
Apply the refined button rule requested by the user: transparent/white secondary buttons should show a visible brand-colored outline before hover, using the same terracotta color that fills the button on hover.

## What changed
- Updated the site-wide secondary button variables in `css/styles.css`.
- Normal secondary/pill button state now uses:
  - background: `#FFFDF9`
  - border: `#C0392B`
  - text: `#9F2F24`
- Hover/active state remains terracotta fill with white text.
- Primary CTA buttons remain unchanged.
- Success/error quiz states remain excluded from the override.

## Affected UI
- Free lesson day selector buttons.
- Secondary navigation buttons.
- Slow Speed and pill-style action buttons.
- Previous/Next and Back/Home secondary buttons.
- Mobile secondary CTA/menu-style buttons.

## Files changed
- `css/styles.css`

## Files not changed
- Lesson data
- Audio files
- Video files
- JavaScript logic
- Pricing/auth/backend placeholders

## Validation
CSS-only change. No JavaScript files were modified.

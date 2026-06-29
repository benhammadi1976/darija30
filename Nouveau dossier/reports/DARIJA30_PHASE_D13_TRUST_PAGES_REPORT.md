# Darija30 Phase D13 — Trust Pages Before Launch

## Goal

Add simple trust pages before any backend, Stripe, or public paid launch.

This phase protects the buying path without adding complexity to the learning experience.

## Modified files

- `index.html`
- `js/router.js`
- `js/launch-qa.js`
- `README_AR.md`

## Added files

- `content/TRUST_PAGES_COPY_GUIDE.md`
- `content/TRUST_LAUNCH_CHECKLIST.md`
- `reports/DARIJA30_PHASE_D13_TRUST_PAGES_REPORT.md`

## What changed

### Public trust routes

Added these routes:

- `#/privacy`
- `#/terms`
- `#/refund`
- `#/support`

### Footer

Footer links now point to real internal pages instead of empty `#` links.

### Pricing trust strip

Pricing now includes a simple trust strip:

- Privacy first
- Simple refund promise
- Human support
- Plain terms

### Launch QA

`js/launch-qa.js` now checks that trust pages exist before launch.

## Important notes

- These pages are intentionally plain-English placeholders.
- They are not final legal documents.
- Stripe is still not connected.
- Support email is still a placeholder until the domain inbox is configured.

## Validation

All JavaScript files passed:

```bash
node --check js/*.js js/data/*.js
```

## Next recommended phase

Phase D14 — Static Deploy Prep:

- Add deployment notes for Vercel/Netlify
- Add `_redirects` or route fallback guidance if needed
- Add favicon/OG image placeholders
- Add production asset checklist

# Darija30 Phase D11 — Public QA + Launch Checklist Report

## Phase name
D11 — Public QA + Launch Checklist

## Starting point
Based on: `darija30_clean_v10_blog_seo`

## Goal
Add a pre-launch quality layer without changing the core product philosophy or adding backend/payment complexity.

## Modified files
- `index.html`
- `js/router.js`
- `README_AR.md`

## New files
- `js/launch-qa.js`
- `content/PUBLIC_QA_CHECKLIST.md`
- `content/LAUNCH_CHECKLIST.md`
- `content/ROUTE_TEST_MATRIX.md`
- `reports/DARIJA30_PHASE_D11_LAUNCH_QA_REPORT.md`

## What changed
- Added hidden internal route: `#/launch-qa`.
- Added browser QA engine: `window.DarijaLaunchQA.run()`.
- The QA engine checks:
  - Lessons data loaded.
  - 3 free lessons exist.
  - 15 free phrases exist.
  - Free phrases include scenario, goal, meaning, intent, culture note, memory hook, audio paths.
  - Arabic script is optional by default.
  - Friendly Latin Darija avoids confusing Arabizi numbers in beginner display.
  - Core public/app pages exist.
  - Blog SEO data exists.
  - Mobile CTA exists.
  - Pricing offer is visible.
  - SEO meta tags exist.
  - Local progress engine exists.
- Added manual checklist documents for testing before launch.
- Added route matrix for browser testing.

## Not changed
- No Backend added.
- No Stripe added.
- No audio files generated.
- No lesson philosophy changed.
- Admin/demo pages were not expanded.

## Validation
- JavaScript syntax checked with `node --check`.
- Project archive generated successfully.

## Next recommended phase
Phase D12 — Real Audio Integration Prep: add final file naming policy, batch recording instructions, and a simple replacement workflow after MP3s are recorded.

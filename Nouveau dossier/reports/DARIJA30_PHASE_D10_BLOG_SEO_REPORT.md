# Darija30 Phase D10 — Blog/SEO Attraction Layer Report

## Goal

Improve the public blog so it supports the product funnel:

```text
American search intent → practical Darija guide → audio lesson CTA
```

## Files changed

- `index.html`
- `css/styles.css`
- `js/router.js`
- `README_AR.md`

## Files added

- `js/data/blog-data.js`
- `js/blog.js`
- `content/SEO_BLOG_STRATEGY.md`
- `reports/DARIJA30_PHASE_D10_BLOG_SEO_REPORT.md`

## What changed

- Replaced static blog cards with a dynamic blog list.
- Added individual article route support through hash routes:
  - `#/blog/:slug`
- Added 6 SEO-focused starter articles for American travelers.
- Added article CTAs that lead back to product lessons.
- Updated main metadata for clearer SEO positioning.
- Kept the product philosophy intact:
  - simplicity
  - audio-first
  - scenario-first
  - cultural intent
  - no alphabet wall

## New blog topics

1. 15 Moroccan Darija Phrases to Learn Before You Land
2. MSA vs Darija: What Should You Learn for Morocco?
3. Moroccan Taxi Phrases: What to Say in the First 5 Minutes
4. How to Bargain in Morocco Without Sounding Rude
5. Moroccan Café Phrases for Coffee, Mint Tea, and the Bill
6. Why Darija30 Uses Friendly Latin Darija Instead of Numbers First

## Validation

- JavaScript syntax checked with `node --check`.
- Routes verified structurally:
  - `#/blog`
  - `#/blog/moroccan-darija-phrases-before-morocco`
  - `#/blog/msa-vs-darija-what-to-learn-for-morocco`
  - `#/blog/moroccan-taxi-phrases`

## Not included yet

- Real public hosting SEO tests.
- Server-side rendering.
- Sitemap generation.
- Real blog images.
- Analytics.

## Recommended next phase

Phase D11 — Public QA + launch checklist:

- Full manual click-through test.
- Mobile QA checklist.
- Accessibility quick check.
- Verify all lesson/blog/pricing paths.
- Prepare first public beta checklist.

# DARIJA30 Phase D18 — Site-wide Button Color System

## Goal
Apply the agreed visual rule across the site:

- Primary CTA buttons stay terracotta/red.
- Secondary and pill buttons should not remain plain white on white backgrounds.
- Secondary/pill buttons now use a warm beige base and switch to terracotta/red on hover or active state.

## Files changed

- `css/styles.css`

## What changed

Added a global secondary button system using these colors:

- Normal secondary background: `#F5F1EA`
- Normal border: `#E3D8C8`
- Normal text: `#5B4332`
- Hover/active background: `#C0392B`
- Hover/active text: white

Covered button-like actions including:

- Hero secondary CTA
- Lesson selector pills
- Slow Speed button
- Quiz option buttons before answer selection
- Previous/Next review buttons
- Reveal Answer button
- Back/Home secondary links in QA/internal pages
- Mobile menu button
- Mobile secondary CTA

## Not changed

- Primary red CTA buttons
- Blue audio/listen buttons
- Correct/wrong quiz states
- Green learned/completed states
- Cards and lesson list tiles
- Videos, audio files, lesson data, and pricing logic

## Validation

- JavaScript syntax check passed for all JS files.
- CSS-only phase; no lesson/audio/video data changed.

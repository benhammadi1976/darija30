# DARIJA30 Phase D27 — Collapsible 30-Day Plan Sections

## What changed
- Updated the `/app/lessons` 30-Day Plan list.
- Each 5-day block is now a collapsible accordion section.
- Sections are labeled as `Days 1–5`, `Days 6–10`, `Days 11–15`, `Days 16–20`, `Days 21–25`, and `Days 26–30`.
- Each section shows its date range based on the demo subscription start date.
- The first active section opens automatically by default.
- Open/closed section state is saved in `localStorage` using `darija30_plan_section_state_v1`.

## Product rule preserved
Darija30 remains a 30-day fast plan, not a slow weekly course.
The sections are only UI organization blocks, not learning locks.

## Not changed
- Lesson content
- Audio files
- Video files
- The first 10 scene images
- Lock/preview logic
- Admin preview logic
- Payment/backend/database behavior

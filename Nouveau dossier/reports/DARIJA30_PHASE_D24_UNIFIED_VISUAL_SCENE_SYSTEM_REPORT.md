# DARIJA30 Phase D24 — Unified Visual Scene System Report

## Goal
Apply a professional unified visual system so all lesson images behave like independent uploaded assets while the Moment Visual card and memory bubble stay consistent inside the website.

## Completed
- Created `assets/images/lesson-scenes/` for independent scene images.
- Moved the active lesson visuals for Days 01–20 to independent scene image paths.
- Removed `complete-card` rendering from the lesson player.
- The UI now always renders a single consistent Moment Visual card.
- The memory bubble is always HTML/CSS overlay and pulls text from lesson data.
- Legacy full-card generated images were preserved under `assets/images/legacy-complete-cards/` for reference only.
- Added an official Visual Scene System standard document.
- Added a manifest mapping phrases to their scene image assets.

## Not changed
- Audio files.
- Video files.
- Admin preview logic.
- Locked/free lesson rules.
- Payment/backend/database logic.

## Important note
Some Days 04–20 source images came from previously generated full-card artwork. In D24 they are stored and used as independent scene assets. Going forward, future image generation must produce scene-only artwork directly, with no card UI or embedded speech bubble.

# Darija30 Phase D15D — App Home Link

## Goal
Add a clear way to return from internal app pages to the public home page.

## Changed
- Updated the app navigation bar in `index.html`.
- Added a `△ Darija30` link at the start of the app header.
- The link points to `#/`, returning users to the public homepage.
- Kept Dashboard, Lessons, Review, Favorites, and Certificate links unchanged.
- Preserved the D15C header contrast fix: black readable links and terracotta active state.

## Not changed
- No lesson content changes.
- No audio changes.
- No video changes.
- No Backend or Stripe changes.

## Manual test
1. Open `http://127.0.0.1:5500/#/app/lessons`.
2. Click `△ Darija30` in the app header.
3. Confirm the route changes to `#/` and the public homepage appears.

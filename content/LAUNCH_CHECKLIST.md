# Darija30 Launch Checklist — Phase D11

## Current launch status
Darija30 is ready for internal/manual QA and friendly-user testing as a static MVP. It is not ready for paid ads until real audio and payment/legal basics are complete.

## Green-light items already present
- [x] Clean white-first public design with light Moroccan accent.
- [x] Scenario-first free lesson flow.
- [x] Friendly Latin Darija without confusing numbers as the main beginner spelling.
- [x] Arabic script optional.
- [x] First 3 free lessons structured in data.
- [x] 30-day locked preview exists.
- [x] Local progress/favorites/review exist.
- [x] Blog/SEO attraction layer exists.
- [x] Hidden QA route: `#/launch-qa`.

## Launch blockers
- [ ] Record real Moroccan audio for all 15 free phrases: normal + slow.
- [ ] Replace any temporary audio placeholders with real MP3 files.
- [ ] Review every phrase with a Moroccan native speaker.
- [ ] Add Privacy Policy and Terms pages.
- [ ] Add support/contact email.
- [ ] Decide whether pricing button goes to Stripe, waitlist, or Gumroad-style external checkout.
- [ ] Add analytics only after privacy policy is ready.
- [ ] Test on Chrome, Safari, Firefox, iPhone, Android.

## Recommended soft-launch path
1. Internal QA using `#/launch-qa`.
2. Add real audio for first 15 phrases.
3. Send static site to 5–10 English-speaking testers.
4. Ask only 3 questions:
   - Did you understand what to say?
   - Could you repeat it after audio?
   - Did the culture note help?
5. Fix confusing phrases.
6. Then connect payment or waitlist.

## Do not add yet
- Backend auth.
- Full dictionary.
- Verb conjugation engine.
- Complex subscriptions.
- AI tutor.
- Large admin workflows.

These are valuable later, but they can weaken the MVP if added before the audio-first lesson experience is validated.

## Phase D13 — Trust pages before payments

- [ ] Verify `#/privacy` page content.
- [ ] Verify `#/terms` page content.
- [ ] Verify `#/refund` page content.
- [ ] Verify `#/support` page content.
- [ ] Replace placeholder support email before public launch.
- [ ] Replace placeholder refund window before Stripe.
- [ ] Re-run `#/launch-qa` and confirm trust-pages-present passes.

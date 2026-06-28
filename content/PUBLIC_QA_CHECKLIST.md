# Darija30 Public QA Checklist — Phase D11

Goal: verify that the public MVP is simple, audio-first, scenario-first, and culturally clear before sharing it with testers.

## 1. First 10 seconds
- [ ] Home page opens fast.
- [ ] The promise is clear: useful Moroccan Darija before landing.
- [ ] Visitor sees “No Arabic alphabet required”.
- [ ] The first CTA points to the free audio lesson.
- [ ] No signup is required before the first lesson.

## 2. Free lesson flow
- [ ] `#/free-lesson` loads from `lessons-data.js`.
- [ ] The learner sees Scenario before grammar.
- [ ] Friendly Latin Darija is the main writing system.
- [ ] Arabic script is optional/secondary.
- [ ] Normal and Slow audio buttons are visible.
- [ ] Missing audio shows a clear “recording needed” message, not a silent failure.
- [ ] Next/Previous phrase navigation works.
- [ ] Quick Check works on the same page.

## 3. Learning philosophy
- [ ] Every phrase includes scenario, goal, meaning, intent, culture note, and memory hook.
- [ ] No lesson begins with alphabet or long grammar.
- [ ] The user understands when/why to use the phrase in Morocco.
- [ ] The tone is friendly for English speakers, not academic.

## 4. Progress and engagement
- [ ] Mark Phrase Learned saves locally.
- [ ] Save Phrase/Favorite works.
- [ ] Dashboard reflects progress.
- [ ] Favorites page shows saved phrases.
- [ ] Review page shows learned/saved phrases.
- [ ] Certificate page reflects local progress.

## 5. Mobile funnel
- [ ] Navbar works on mobile.
- [ ] Mobile sticky CTA appears on public pages.
- [ ] Free lesson buttons are easy to tap.
- [ ] Text remains readable on small screens.
- [ ] Menu closes after link click, Escape, and outside click.

## 6. Pricing and locked lessons
- [ ] Pricing explains 3 free lessons + $29 one-time Starter Pack.
- [ ] Stripe is clearly not connected yet.
- [ ] Locked lessons show preview, not broken content.
- [ ] The 30-day plan feels complete.

## 7. Blog/SEO funnel
- [ ] Blog page renders dynamically.
- [ ] Each article has a clear CTA back to free lesson.
- [ ] Articles target English-speaking travelers and Darija confusion points.
- [ ] Meta title/description exist.

## 8. Must not launch publicly until
- [ ] Real Moroccan audio is recorded and added.
- [ ] Domain/support email/privacy page are ready.
- [ ] Stripe or payment waitlist decision is final.
- [ ] A native/near-native Moroccan speaker reviews every phrase.

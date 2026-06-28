# Darija30 Route Test Matrix — Phase D11

| Route | Purpose | Expected result |
|---|---|---|
| `#/` | Home funnel | Hero, value proposition, CTA to free lesson |
| `#/free-lesson` | First aha moment | Dynamic lesson player renders free Taxi lesson |
| `#/30-day-plan` | Product roadmap | 30-day structure is clear |
| `#/pricing` | Purchase intent | $29 Starter Pack and locked preview are clear |
| `#/blog` | SEO attraction | Dynamic blog cards render |
| `#/blog/darija-phrases-before-morocco` | Article route | Article renders and CTA returns to free lesson |
| `#/login` | Demo entry | Demo login sends user to app dashboard |
| `#/app/dashboard` | Local progress | Progress summary renders from LocalStorage |
| `#/app/lessons` | Lesson library | 3 free lessons unlocked, 27 preview locked |
| `#/app/lesson/lesson-001` | Dynamic lesson | Free lesson opens and phrase navigation works |
| `#/app/lesson/lesson-010` | Locked preview | Locked preview shows, no broken page |
| `#/app/favorites` | Saved phrases | Saved phrases appear after user saves one |
| `#/app/review` | Review loop | Learned/saved phrases appear for review |
| `#/app/certificate` | Progress milestone | Certificate progress uses LocalStorage |
| `#/launch-qa` | Internal QA | Checks render and pass structurally |

## Phase D13 trust routes

| Route | Expected result |
|---|---|
| `#/privacy` | Shows plain-English Privacy Promise placeholder and explains LocalStorage MVP behavior. |
| `#/terms` | Shows plain-English Terms placeholder and no-fluency-guarantee wording. |
| `#/refund` | Shows simple refund promise placeholder and confirms Stripe is not active yet. |
| `#/support` | Shows support placeholder, FAQ, and support email readiness warning. |

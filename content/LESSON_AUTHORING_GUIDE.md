# Darija30 — Lesson Authoring Guide

## Product promise

Darija30 teaches Moroccan Darija through real-life scenarios, not alphabet-first language study.

The learner should feel:

> “I can use this in Morocco today.”

## Required structure for every phrase

Each phrase in `lessons-data.js` should include:

- `scenario`: where the learner is.
- `goal`: what the learner wants to do.
- `english`: natural English meaning.
- `friendlyLatin`: the primary spelling for English speakers.
- `moroccanChat`: optional Moroccan internet/chat spelling.
- `arabic`: optional Arabic script support.
- `literal`: direct/literal explanation if useful.
- `meaning`: what the phrase means in practical English.
- `intent`: what Moroccans understand from it.
- `cultureNote`: when and how to use it respectfully.
- `memoryHook`: one small reusable pattern.
- `audioNormal`: normal audio path.
- `audioSlow`: slow audio path.

## Do not do this in MVP

- Do not teach the Arabic alphabet first.
- Do not start with grammar tables.
- Do not overload the phrase with multiple dialect variants.
- Do not show Arabizi numbers first.
- Do not write long academic explanations.

## Good lesson pattern

1. Scenario: “You are in a café.”
2. Goal: “Ask for black coffee politely.”
3. Say this: `qahwa kahla aafak`
4. Meaning: “Black coffee, please.”
5. Cultural Intent: “Clear and polite café order.”
6. Culture Note: “Moroccan cafés are social places...”
7. Memory Hook: “qahwa = coffee, kahla = black.”
8. Quick Check: one or two questions.

## Voice and tone

English explanations should be written for an English-speaking beginner:

- Direct.
- Friendly.
- Concrete.
- Cultural but not academic.
- No shame, no complexity.

## Friendly Latin Darija rules for MVP

Use readable Latin spelling first:

- `kh` for خ
- `gh` for غ
- `q` for ق
- `sh` for ش
- `aafak` instead of `3afak`
- `bsh-hal` instead of `bsh7al`

Moroccan chat spelling can be hidden in `moroccanChat`.

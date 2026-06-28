# Darija30 — Audio QA Checklist

## Product rule

Darija30 is audio-first. A lesson is not ready for user testing until every phrase has:

- one natural-speed MP3
- one slow-speed MP3
- clear pronunciation by a Moroccan speaker
- no background music
- no room echo that distracts from the phrase

## Recording setup

- Record in a quiet room.
- Use one consistent Moroccan voice for the first MVP if possible.
- Keep the tone warm and natural, not formal news Arabic.
- Leave about 0.3 seconds of silence before and after each clip.
- Export MP3 at 128kbps or higher.
- Keep filenames exactly as written in `content/AUDIO_MANIFEST.csv`.

## Normal-speed file

The normal file should sound like a Moroccan would actually say it in the scenario.

Check:

- The phrase is clear but not robotic.
- The speaker does not over-pronounce for Arabic learners.
- The phrase still feels natural for a taxi, café, or market.

## Slow-speed file

The slow file is for English-speaking beginners who are hearing Darija for the first time.

Check:

- Slow enough to repeat.
- Still natural, not exaggerated.
- If the phrase has chunks, pause slightly between chunks.
- Do not turn slow audio into syllable-by-syllable robot speech.

## Browser QA

After adding MP3 files, test each phrase on:

- Chrome desktop
- Chrome/Android or Safari/iPhone if available
- laptop speakers
- phone speaker
- headphones

For every audio button:

- Normal button plays the normal file.
- Slow button plays the slow file.
- Clicking a new audio stops the previous audio.
- Missing file message no longer appears.
- Button returns to normal state after playback.

## Content QA

For each phrase, confirm:

- Friendly Latin matches what is heard.
- Arabic script is optional and not required to understand the phrase.
- Meaning is natural English, not literal-only translation.
- Cultural Intent explains when/how to use the phrase.
- Memory Hook helps recall without grammar overload.

## Final public-test rule

Before sharing with an English-speaking tester, complete all audio files for the first 3 free lessons:

- Day 1 Taxi Survival: 10 MP3 files
- Day 2 Cafe Culture: 10 MP3 files
- Day 3 Market Price: 10 MP3 files

Total: 30 MP3 files.

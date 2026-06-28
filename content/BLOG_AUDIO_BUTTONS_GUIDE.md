# Blog Phrase Audio Buttons

## Purpose

Blog posts should not be passive reading pages. When a phrase appears in a blog card, the reader should be able to click a speaker button and hear the Moroccan pronunciation.

## Current behavior

Each phrase card can include:

```js
audio: "assets/audio/.../file.mp3"
```

The blog renderer displays a 🔊 button beside the phrase.

If the MP3 file exists, it plays.
If the MP3 file is missing, the existing audio UX shows a “Recording needed” message with the exact path.

## Why this matters

This keeps the Darija30 promise:

```text
Do not just read Darija. Hear it.
```

## Recording priority for blog audio

Start with:

- salam
- labas?
- aafak
- shukran
- bghit nmshi l-otel
- qahwa kahla aafak
- bsh-hal hada?
- ghali bzaf
- nqes shwiya aafak

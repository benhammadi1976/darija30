// DARIJA30 — QA Media Check
// Scans js/data/lessons-data.js, checks every referenced media file
// (audioNormal, audioSlow, sceneVideo, scenePoster, sceneVisual) against
// what actually exists on disk, and produces a CSV + console summary.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, 'js/data/lessons-data.js');
const OUT_CSV = path.join(ROOT, 'reports/QA_MEDIA_CHECK_REPORT.csv');

global.window = {};
eval(fs.readFileSync(DATA_FILE, 'utf8'));
const lessons = window.DARIJA30_LESSONS;

const MEDIA_FIELDS = ['audioNormal', 'audioSlow', 'sceneVideo', 'scenePoster', 'sceneVisual'];

const rows = [];
const summary = {};
MEDIA_FIELDS.forEach(f => summary[f] = { present: 0, missing: 0, notDefined: 0 });

let totalPhrases = 0;

lessons.forEach(lesson => {
  (lesson.phrases || []).forEach(phrase => {
    totalPhrases++;
    const row = {
      day: lesson.day,
      lessonTitle: lesson.title,
      phraseId: phrase.id,
      friendlyLatin: phrase.friendlyLatin || ''
    };

    MEDIA_FIELDS.forEach(field => {
      const val = phrase[field];
      if (!val) {
        row[field] = 'NOT_DEFINED';
        summary[field].notDefined++;
      } else {
        const exists = fs.existsSync(path.join(ROOT, val));
        row[field] = exists ? 'OK' : 'MISSING';
        if (exists) summary[field].present++;
        else summary[field].missing++;
      }
    });

    rows.push(row);
  });
});

// --- Write CSV ---
const header = ['day', 'lessonTitle', 'phraseId', 'friendlyLatin', ...MEDIA_FIELDS];
const csvLines = [header.join(',')];
rows.forEach(r => {
  const line = header.map(h => {
    const v = String(r[h] ?? '').replace(/"/g, '""');
    return /[",\n]/.test(v) ? `"${v}"` : v;
  });
  csvLines.push(line.join(','));
});
fs.mkdirSync(path.dirname(OUT_CSV), { recursive: true });
fs.writeFileSync(OUT_CSV, csvLines.join('\n'), 'utf8');

// --- Console summary ---
console.log('=== DARIJA30 QA MEDIA CHECK ===');
console.log('Total lessons (days):', lessons.length);
console.log('Total phrases:', totalPhrases);
console.log('');
console.log('Field            | OK    | MISSING | NOT_DEFINED');
console.log('------------------|-------|---------|------------');
MEDIA_FIELDS.forEach(f => {
  const s = summary[f];
  console.log(
    f.padEnd(18) + '|' +
    String(s.present).padStart(7) + '|' +
    String(s.missing).padStart(9) + '|' +
    String(s.notDefined).padStart(13)
  );
});

const readyPhrases = rows.filter(r =>
  r.audioNormal === 'OK' && r.audioSlow === 'OK'
).length;
console.log('');
console.log(`Phrases with FULL audio (Normal+Slow) ready: ${readyPhrases} / ${totalPhrases}`);

const fullyReady = rows.filter(r =>
  MEDIA_FIELDS.every(f => r[f] === 'OK')
).length;
console.log(`Phrases with ALL 5 media types ready: ${fullyReady} / ${totalPhrases}`);

console.log('');
console.log('CSV report written to:', OUT_CSV);

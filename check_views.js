const fs = require('fs');
const lines = fs.readFileSync('C:/Users/martm/.gemini/antigravity-ide/brain/8335e2f4-9f64-492b-9cf9-881aa3771310/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i] && lines[i].includes('Showing lines')) {
    const start = lines[i].indexOf('Showing lines');
    console.log(lines[i].substring(start, start + 30));
  }
}

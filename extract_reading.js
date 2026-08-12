const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');

const readingRegex = /reading:\s*\{[\s\S]*?questionsA2:\s*\[[\s\S]*?\]\s*,?\n\s*\}/g;
const matches = content.match(readingRegex);

if (matches) {
  fs.writeFileSync('scratch_reading.json', JSON.stringify(matches, null, 2));
  console.log(`Extracted ${matches.length} reading blocks.`);
} else {
  console.log('No reading blocks found.');
}

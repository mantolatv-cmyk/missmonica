const fs = require('fs');
const text = fs.readFileSync('data/scenarios.ts', 'utf8');
const lines = text.split('\n');
for(let i=0; i<lines.length; i++) {
  if (lines[i].includes("id: 'tech'")) console.log('tech is at line', i+1);
  if (lines[i].includes("title: 'Phone & Wi-Fi'")) console.log('tech title is at line', i+1);
}

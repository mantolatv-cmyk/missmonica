const fs = require('fs');
const text = fs.readFileSync('data/scenarios.ts', 'utf8');
const start = text.indexOf("id: 'cafe'");
console.log(text.substring(start, start + 1500));

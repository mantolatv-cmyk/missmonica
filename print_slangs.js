const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');
const start = content.indexOf("id: 'slangs'");
console.log(content.substring(start + 3000, start + 6000));

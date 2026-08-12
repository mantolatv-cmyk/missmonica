const fs = require('fs');
const content = fs.readFileSync('./data/scenarios.ts', 'utf8');
const id = 'introduction';
const idRegex = new RegExp("(id:\\s*'" + id + "',)");
console.log(idRegex);
const match = content.match(idRegex);
console.log('Match result:', !!match);

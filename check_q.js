const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');

const regex1 = /questionsA1:\s*\[\s*\{\s*question:\s*['"](.*?)['"]/g;
const regex2 = /questionsA2:\s*\[\s*\{\s*question:\s*['"](.*?)['"]/g;

const matches1 = [...content.matchAll(regex1)];
const matches2 = [...content.matchAll(regex2)];

console.log("Cafe A1: ", matches1[10][1]);
console.log("Cafe A2: ", matches2[10][1]);
console.log("Tech A1: ", matches1[11][1]);
console.log("Tech A2: ", matches2[11][1]);

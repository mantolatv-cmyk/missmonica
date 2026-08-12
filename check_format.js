const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');
const introIndex = content.indexOf("id: 'introduction'");
const numbersIndex = content.indexOf("id: 'numbers'");
console.log(content.substring(introIndex, numbersIndex).split('\\n').slice(-15).join('\\n'));

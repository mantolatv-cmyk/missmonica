const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');
const start = content.indexOf("id: 'hotel'");
const vocabStart = content.indexOf('vocabulary:', start);
const vocabEnd = content.indexOf('culturalTips:', vocabStart);
console.log(content.substring(vocabStart, vocabEnd));

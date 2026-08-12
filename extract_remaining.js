const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');

const regex = /reading:\s*\{[\s\S]*?questionsA2:\s*\[[\s\S]*?\]\s*,?\n\s*\}/g;
const matches = [...content.matchAll(regex)];

let output = '';
for (let i = 10; i < matches.length; i++) {
  const matchStr = matches[i][0];
  const textA1 = matchStr.match(/textA1:\s*['"](.*?)['"],/)[1];
  const textA2 = matchStr.match(/textA2:\s*['"](.*?)['"],/)[1];
  const qA1 = matchStr.match(/questionsA1:\s*\[\s*\{\s*question:\s*['"](.*?)['"]/)[1];
  const qA2 = matchStr.match(/questionsA2:\s*\[\s*\{\s*question:\s*['"](.*?)['"]/)[1];
  
  output += `Scenario ${i}:\ntextA1: ${textA1}\nqA1: ${qA1}\ntextA2: ${textA2}\nqA2: ${qA2}\n\n`;
}

fs.writeFileSync('remaining_texts.txt', output, 'utf8');

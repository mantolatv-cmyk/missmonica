const fs = require('fs');
const c = fs.readFileSync('data/scenarios.ts', 'utf8');
const ids = ['introduction','numbers','airport','immigration','hotel','restaurant','directions','transport','medical','entertainment','cafe','tech','smalltalk','slangs','shopping','beauty','carrental','supermarket'];

ids.forEach(id => {
  const idx = c.indexOf("id: '" + id + "'");
  if (idx === -1) { console.log(id + ': NOT FOUND'); return; }
  const sq = c.indexOf('speakingQuestions:', idx);
  if (sq === -1 || sq - idx > 500) { console.log(id + ': NO speakingQuestions'); return; }
  const bracket = c.indexOf('[', sq);
  let depth = 1;
  let i = bracket + 1;
  while (depth > 0 && i < c.length) {
    if (c[i] === '[') depth++;
    if (c[i] === ']') depth--;
    i++;
  }
  const block = c.substring(bracket, i);
  // Count occurrences of "question" key (each question object has one)
  const matches = block.match(/"question"/g);
  const count = matches ? matches.length : 0;
  console.log(id + ': ' + count + ' questions');
});

const fs = require('fs');
const c = fs.readFileSync('data/scenarios.ts', 'utf8');
const ids = ['introduction','numbers','airport','immigration','hotel','restaurant','directions','transport','medical','entertainment','cafe','tech','smalltalk','slangs','shopping','beauty','carrental','supermarket'];

ids.forEach(id => {
  const idx = c.indexOf("id: '" + id + "'");
  if (idx === -1) { console.log(id + ': NOT FOUND'); return; }
  
  // Find vocabulary array
  const vocIdx = c.indexOf('vocabulary:', idx);
  if (vocIdx === -1) { console.log(id + ': NO vocabulary'); return; }
  
  // Find the bracket
  const bracket = c.indexOf('[', vocIdx);
  let depth = 1;
  let i = bracket + 1;
  while (depth > 0 && i < c.length) {
    if (c[i] === '[') depth++;
    if (c[i] === ']') depth--;
    i++;
  }
  const block = c.substring(bracket, i);
  
  const totalItems = (block.match(/english:/g) || []).length;
  const withSentenceA1 = (block.match(/sentenceA1:/g) || []).length;
  const withSentenceA2 = (block.match(/sentenceA2:/g) || []).length;
  
  const status = (withSentenceA1 === totalItems && withSentenceA2 === totalItems) ? '✅' : '❌';
  console.log(id + ': ' + totalItems + ' words, ' + withSentenceA1 + ' with sentenceA1, ' + withSentenceA2 + ' with sentenceA2 ' + status);
});

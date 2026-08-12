const fs = require('fs');
const c = fs.readFileSync('data/scenarios.ts', 'utf8');
const ids = ['introduction','numbers','airport','immigration','hotel','restaurant','directions','transport','medical','entertainment','cafe','tech','smalltalk','slangs','shopping','beauty','carrental','supermarket'];

const result = {};
ids.forEach(id => {
  const idx = c.indexOf("id: '" + id + "'");
  const vocIdx = c.indexOf('vocabulary:', idx);
  const bracket = c.indexOf('[', vocIdx);
  let depth = 1;
  let i = bracket + 1;
  while (depth > 0 && i < c.length) {
    if (c[i] === '[') depth++;
    if (c[i] === ']') depth--;
    i++;
  }
  const block = c.substring(bracket, i);
  
  // Extract english words
  const words = [];
  const re = /english:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    words.push(m[1]);
  }
  result[id] = words;
  console.log(id + ': ' + words.join(', '));
});

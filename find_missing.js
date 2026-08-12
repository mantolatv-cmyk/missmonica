const fs = require('fs');
const c = fs.readFileSync('data/scenarios.ts', 'utf8');

function findMissing(id) {
  const i = c.indexOf("id: '" + id + "'");
  const v = c.indexOf('vocabulary:', i);
  const bracket = c.indexOf('[', v);
  let depth = 1;
  let j = bracket + 1;
  while (depth > 0 && j < c.length) {
    if (c[j] === '[') depth++;
    if (c[j] === ']') depth--;
    j++;
  }
  const block = c.substring(bracket, j);
  
  const re = /english: "([^"]+)"/g;
  let m;
  const missing = [];
  while ((m = re.exec(block)) !== null) {
    // Check if this item has sentenceA1
    const objStart = block.lastIndexOf('{', m.index);
    let bd = 1, objEnd = objStart + 1;
    while (bd > 0 && objEnd < block.length) {
      if (block[objEnd] === '{') bd++;
      if (block[objEnd] === '}') bd--;
      objEnd++;
    }
    const obj = block.substring(objStart, objEnd);
    if (!obj.includes('sentenceA1:')) {
      missing.push(m[1]);
    }
  }
  if (missing.length > 0) {
    console.log(id + ' missing: ' + JSON.stringify(missing));
  }
}

['introduction', 'smalltalk'].forEach(findMissing);

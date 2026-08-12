const fs = require('fs');
const c = fs.readFileSync('data/scenarios.ts', 'utf8');
const ids = ['introduction','numbers','airport','immigration','hotel','restaurant','directions','transport','medical','entertainment','cafe','tech','smalltalk','slangs','shopping','beauty','carrental','supermarket'];

ids.forEach(id => {
  const idx = c.indexOf("id: '" + id + "'");
  if (idx === -1) { console.log(id + ': NOT FOUND'); return; }
  
  // Find reading block between this id and the next scenario id
  let nextScenarioIdx = c.length;
  for (const otherId of ids) {
    if (otherId === id) continue;
    const otherIdx = c.indexOf("id: '" + otherId + "'", idx + 10);
    if (otherIdx !== -1 && otherIdx < nextScenarioIdx) {
      nextScenarioIdx = otherIdx;
    }
  }
  
  const block = c.substring(idx, nextScenarioIdx);
  const hasReading = block.includes('reading:');
  const hasTextA1 = block.includes('textA1:');
  const hasTextA2 = block.includes('textA2:');
  
  console.log(id + ': reading=' + hasReading + ', textA1=' + hasTextA1 + ', textA2=' + hasTextA2);
});

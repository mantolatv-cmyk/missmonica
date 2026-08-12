const fs = require('fs');
let c = fs.readFileSync('./data/scenarios.ts', 'utf8');
c = c.replace(/"translation":/g, '"questionPt":');
fs.writeFileSync('./data/scenarios.ts', c);
console.log('Fixed translations');

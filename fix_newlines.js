const fs = require('fs');
let c = fs.readFileSync('data/scenarios.ts', 'utf8');
c = c.split('\\n').join('\\n');
fs.writeFileSync('data/scenarios.ts', c, 'utf8');
console.log('Fixed literal newlines');

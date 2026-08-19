const fs = require('fs');
let c = fs.readFileSync('data/scenarios.ts', 'utf-8');
c = c.replace(/color:\s*'purple'/g, "color: 'indigo'");
c = c.replace(/color:\s*'green'/g, "color: 'mint'");
fs.writeFileSync('data/scenarios.ts', c, 'utf-8');
console.log('Colors fixed to match CSS classes!');

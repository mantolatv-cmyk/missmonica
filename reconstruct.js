const fs = require('fs');
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully reconstructed scenarios.ts');

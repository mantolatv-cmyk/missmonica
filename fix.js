const fs = require('fs');

let content = fs.readFileSync('data/scenarios.ts', 'utf8');
const lines = content.split(/\\r?\\n/); // wait I shouldn't double escape!

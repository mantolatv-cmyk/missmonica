const fs = require('fs');
const content = fs.readFileSync('data/scenarios.ts', 'utf8');

// The exported array is `export const scenarios: Scenario[] = [ ... ];`
// Let's count how many times we see `id:` inside the scenarios array.
const idMatches = content.match(/\bid:\s*['"`]/g);
console.log('Total scenarios (by id):', idMatches ? idMatches.length : 0);

const readingMatches = content.match(/\breading:\s*\{/g);
console.log('Total reading blocks:', readingMatches ? readingMatches.length : 0);

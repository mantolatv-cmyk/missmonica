const fs = require('fs');

let c = fs.readFileSync('data/scenarios.ts', 'utf-8');

function addColor(id, color) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?imagePath:\\s*"[^"]+",)`);
    c = c.replace(regex, `$1\n  color: '${color}',`);
}

addColor('review-1', 'purple');
addColor('review-2', 'orange');
addColor('review-3', 'green');

fs.writeFileSync('data/scenarios.ts', c, 'utf-8');
console.log('Colors added!');

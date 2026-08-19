const fs = require('fs');

let c = fs.readFileSync('data/scenarios.ts', 'utf-8');

function updatePath(id, newPath) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?imagePath:\\s*")[^"]+(")`);
    c = c.replace(regex, `$1${newPath}$2`);
}

updatePath('review-1', '/images/review_1_scene.jpg');
updatePath('review-2', '/images/review_2_scene.jpg');
updatePath('review-3', '/images/review_3_scene.jpg');

fs.writeFileSync('data/scenarios.ts', c, 'utf-8');
console.log('Done!');

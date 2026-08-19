const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let content = fs.readFileSync(filePath, 'utf-8');

function updateImagePath(id, newPath) {
  const idRegex = new RegExp(`{\\s*id:\\s*'${id}'[\\s\\S]*?imagePath:\\s*'[^']+'`);
  const match = idRegex.exec(content);
  if (match) {
    const matchedText = match[0];
    const updatedText = matchedText.replace(/imagePath:\s*'[^']+'/, `imagePath: '${newPath}'`);
    content = content.replace(matchedText, updatedText);
  }
}

updateImagePath('review-1', '/images/review_1_scene.jpg');
updateImagePath('review-2', '/images/review_2_scene.jpg');
updateImagePath('review-3', '/images/review_3_scene.jpg');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed image paths!');

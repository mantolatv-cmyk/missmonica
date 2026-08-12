const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

fileContent = fileContent.replace(/}\n    simulationTasks:/g, '},\n    simulationTasks:');

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Correção finalizada!');

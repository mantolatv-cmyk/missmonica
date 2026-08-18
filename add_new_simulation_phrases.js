const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Compile TS to a temporary JS to extract the current scenarios data
const tempFile = path.join(__dirname, 'temp_scenarios.js');
execSync('npx tsc data/scenarios.ts --outDir . --esModuleInterop');
const { scenarios } = require('./scenarios.js');

const additions = {
  hotel: [
    { promptPt: '[Você] Você quer perguntar a que horas é o check-out', expectedEn: 'What time is check-out?' },
    { promptPt: '[Você] Você quer perguntar se pode deixar as malas no hotel após o check-out', expectedEn: 'Can I leave my bags here?' },
    { promptPt: '[Você] Você quer confirmar se o café da manhã está incluso', expectedEn: 'Is breakfast included?' }
  ],
  restaurant: [
    { promptPt: '[Você] Você quer perguntar se podem dividir a conta', expectedEn: 'Can we have separate checks?' },
    { promptPt: '[Você] Você quer pedir para embrulhar a sobra para viagem', expectedEn: 'Can I get this to go?' },
    { promptPt: '[Você] Você quer avisar que tem alergia a amendoim', expectedEn: 'I am allergic to peanuts.' }
  ],
  airport: [
    { promptPt: '[Você] Você quer perguntar onde é a esteira de retirada de bagagem', expectedEn: 'Where is the baggage claim?' },
    { promptPt: '[Você] Você quer dizer que tem um voo de conexão', expectedEn: 'I have a connecting flight.' }
  ],
  shopping: [
    { promptPt: '[Você] Você quer perguntar se tem essa peça em outra cor', expectedEn: 'Do you have this in a different color?' },
    { promptPt: '[Você] Você quer perguntar qual é a política de devolução', expectedEn: 'What is the return policy?' }
  ],
  transport: [
    { promptPt: '[Você] Você quer perguntar quanto vai custar a corrida', expectedEn: 'How much will the ride cost?' },
    { promptPt: '[Você] Você quer pedir para o motorista parar na próxima esquina', expectedEn: 'Could you drop me off at the next corner?' }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, newTasks] of Object.entries(additions)) {
  const scenario = scenarios.find(s => s.id === id);
  if (!scenario) continue;

  const updatedTasks = [...(scenario.simulationTasks || []), ...newTasks];
  
  // Format exactly like the existing code format
  const simulationString = `    simulationTasks: ${JSON.stringify(updatedTasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado no texto!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  let scenarioContent = fileContent.substring(scenarioStartIndex, searchScope);
  
  const simStart = scenarioContent.indexOf('simulationTasks:');
  if (simStart !== -1) {
    const simEnd = scenarioContent.indexOf('],', simStart);
    if (simEnd !== -1) {
       const before = scenarioContent.substring(0, simStart);
       const after = scenarioContent.substring(simEnd + 2);
       const newScenarioContent = before + simulationString + ',' + after;
       fileContent = fileContent.substring(0, scenarioStartIndex) + newScenarioContent + fileContent.substring(searchScope);
       console.log(`Atualizado simulationTasks em ${id}`);
    }
  }
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

// Cleanup
if (fs.existsSync(path.join(__dirname, 'scenarios.js'))) {
  fs.unlinkSync(path.join(__dirname, 'scenarios.js'));
}

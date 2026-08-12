const fs = require('fs');
const path = require('path');

const scenariosData = {
  slangs: [
    { promptPt: "[Amigo] \"E aí, quais são os planos para hoje à noite?\"", expectedEn: "Hey, what are the plans for tonight?" },
    { promptPt: "[Você] Você responde que está muito animado (hyped) para ir ao show.", expectedEn: "I am really hyped to go to the concert." },
    { promptPt: "[Amigo] \"Sem mentira (No cap), vai ser incrível (lit)!\"", expectedEn: "No cap, it is going to be lit!" },
    { promptPt: "[Você] Você quer dizer que a banda manda muito bem (went off) ao vivo.", expectedEn: "The band really goes off live." },
    { promptPt: "[Amigo] \"Com certeza (For real). Você topa (down to) comer algo depois?\"", expectedEn: "For real. Are you down to grab food after?" },
    { promptPt: "[Você] Você concorda, dizendo para ele te mandar os detalhes depois (deets).", expectedEn: "Bet! Just text me the deets later." }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, tasks] of Object.entries(scenariosData)) {
  const simulationString = `    simulationTasks: ${JSON.stringify(tasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
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

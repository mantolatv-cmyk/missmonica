const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// 1. Add vocabulary to Hotel
const hotelIdMatch = "id: 'hotel',";
const hotelStart = fileContent.indexOf(hotelIdMatch);
const hotelVocabStart = fileContent.indexOf('vocabulary: [', hotelStart);

const vocabItemsToAdd = `
      { english: "Parking", portuguese: "Estacionamento",
        sentenceA1: "Where is the parking?",
        sentenceA2: "The hotel offers free underground parking for all guests.",
        sentenceA1Pt: "Onde fica o estacionamento?",
        sentenceA2Pt: "O hotel oferece estacionamento subterrâneo gratuito para todos os hóspedes."
      },
      { english: "Bathroom", portuguese: "Banheiro",
        sentenceA1: "I need a bathroom.",
        sentenceA2: "The bathroom in our suite has a large bathtub and a shower.",
        sentenceA1Pt: "Preciso de um banheiro.",
        sentenceA2Pt: "O banheiro da nossa suíte tem uma banheira grande e um chuveiro."
      },`;

// Inject into vocabulary array
if (hotelVocabStart !== -1 && !fileContent.substring(hotelVocabStart, hotelVocabStart + 3000).includes('"Parking"')) {
    fileContent = fileContent.substring(0, hotelVocabStart + 'vocabulary: ['.length) + vocabItemsToAdd + fileContent.substring(hotelVocabStart + 'vocabulary: ['.length);
}

// 2. Update Hotel Simulation
const hotelSimTasks = [
    { promptPt: "[Recepcionista] \"Bom dia, como posso ajudar?\"", expectedEn: "Good morning, how can I help you?" },
    { promptPt: "[Você] Você quer dizer que tem uma reserva", expectedEn: "I have a reservation under the name [Name]." },
    { promptPt: "[Recepcionista] \"Posso ver sua identidade e cartão de crédito?\"", expectedEn: "Can I see your ID and credit card?" },
    { promptPt: "[Você] Você quer entregar o seu passaporte e cartão", expectedEn: "Here is my passport and card." },
    { promptPt: "[Você] Você quer perguntar a que horas é o café da manhã", expectedEn: "What time is breakfast?" },
    { promptPt: "[Você] Você quer perguntar onde fica o elevador", expectedEn: "Where is the elevator?" },
    { promptPt: "[Você] Você quer perguntar onde fica o estacionamento", expectedEn: "Where is the parking?" },
    { promptPt: "[Você] Você quer pedir a senha do Wi-Fi", expectedEn: "What is the Wi-Fi password?" },
    { promptPt: "[Você] Você quer pedir mais toalhas depois", expectedEn: "Could I get some extra towels, please?" }
];

const simStart = fileContent.indexOf('simulationTasks:', hotelStart);
if (simStart !== -1) {
    const simEnd = fileContent.indexOf('],', simStart);
    if (simEnd !== -1) {
       const simulationString = `simulationTasks: ${JSON.stringify(hotelSimTasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
       fileContent = fileContent.substring(0, simStart) + simulationString + fileContent.substring(simEnd + 1);
    }
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Hotel data updated successfully.');

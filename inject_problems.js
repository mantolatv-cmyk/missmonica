const fs = require('fs');
const path = require('path');

const problemsData = {
  introduction: [
    { descriptionPt: "Alguém pergunta de onde você é, mas você não entende a pergunta de primeira." },
    { descriptionPt: "Você esqueceu o nome da pessoa com quem acabou de ser apresentado e precisa perguntar de novo." }
  ],
  numbers: [
    { descriptionPt: "O vendedor fala o preço muito rápido e você precisa que ele repita mais devagar." },
    { descriptionPt: "Você acha que recebeu o troco errado." }
  ],
  airport: [
    { descriptionPt: "Sua mala não apareceu na esteira de bagagens." },
    { descriptionPt: "Seu voo foi cancelado e você precisa saber o que fazer agora." }
  ],
  immigration: [
    { descriptionPt: "O oficial de imigração diz que não encontra sua reserva de hotel." },
    { descriptionPt: "Eles pedem para ver sua passagem de volta, mas você não tem ela impressa." }
  ],
  hotel: [
    { descriptionPt: "O ar condicionado do seu quarto está quebrado." },
    { descriptionPt: "Eles não encontram sua reserva no sistema." }
  ],
  restaurant: [
    { descriptionPt: "Sua comida veio fria." },
    { descriptionPt: "O seu pedido veio errado, não foi o prato que você pediu." }
  ],
  directions: [
    { descriptionPt: "Você seguiu as instruções, mas se perdeu completamente." },
    { descriptionPt: "Seu celular ficou sem bateria e você precisa perguntar como chegar ao hotel." }
  ],
  transport: [
    { descriptionPt: "Você pegou o trem na direção errada." },
    { descriptionPt: "Você perdeu o último ônibus da noite." }
  ],
  medical: [
    { descriptionPt: "Você precisa comprar um remédio, mas esqueceu o nome dele em inglês." },
    { descriptionPt: "Você começou a sentir uma dor muito forte no estômago durante a noite." }
  ],
  entertainment: [
    { descriptionPt: "Você comprou ingressos online, mas o scanner não está lendo o QR Code." },
    { descriptionPt: "Alguém está sentado no seu lugar numerado no cinema." }
  ],
  cafe: [
    { descriptionPt: "Você pediu sem leite, mas colocaram leite no seu café." },
    { descriptionPt: "A internet Wi-Fi da cafeteria parou de funcionar e você precisa dela." }
  ],
  tech: [
    { descriptionPt: "Você quebrou a tela do celular e precisa de um conserto urgente." },
    { descriptionPt: "O adaptador de tomada que você comprou não encaixa." }
  ],
  smalltalk: [
    { descriptionPt: "A pessoa fez uma piada que você não entendeu, e você precisa dizer isso de forma educada." },
    { descriptionPt: "Você não quer falar sobre o assunto que a pessoa puxou e quer mudar de assunto educadamente." }
  ],
  slangs: [
    { descriptionPt: "Alguém usou uma gíria que você nunca ouviu antes." },
    { descriptionPt: "Você usou uma gíria errada e todos riram, como você se desculpa brincando?" }
  ],
  shopping: [
    { descriptionPt: "O seu cartão de crédito foi recusado na maquininha." },
    { descriptionPt: "Você comprou uma roupa ontem, mas ela descosturou na primeira vez que usou." }
  ],
  beauty: [
    { descriptionPt: "O cabeleireiro cortou seu cabelo muito mais curto do que você pediu." },
    { descriptionPt: "Você teve uma reação alérgica a um creme que aplicaram na sua pele." }
  ],
  carrental: [
    { descriptionPt: "O pneu do carro alugado furou no meio da estrada." },
    { descriptionPt: "Quando você foi pegar o carro, ele já tinha um grande arranhão na porta." }
  ],
  supermarket: [
    { descriptionPt: "Você derrubou um vidro de molho no chão do mercado e quebrou." },
    { descriptionPt: "O caixa cobrou o valor de um item duas vezes por engano." }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, problems] of Object.entries(problemsData)) {
  const injectionString = `    problems: ${JSON.stringify(problems, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  let scenarioContent = fileContent.substring(scenarioStartIndex, searchScope);
  
  // Replace existing problems completely if present
  const regex = /problems:\s*\[[\s\S]*?\],\n\s*/g;
  
  if (regex.test(scenarioContent)) {
      scenarioContent = scenarioContent.replace(regex, injectionString + ',\n    ');
  } else {
      const vocabStart = scenarioContent.indexOf('vocabulary:');
      if (vocabStart !== -1) {
          const before = scenarioContent.substring(0, vocabStart);
          const after = scenarioContent.substring(vocabStart);
          scenarioContent = before + injectionString + ',\n    ' + after;
      }
  }

  fileContent = fileContent.substring(0, scenarioStartIndex) + scenarioContent + fileContent.substring(searchScope);
  console.log(`Atualizado problems em ${id}`);
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

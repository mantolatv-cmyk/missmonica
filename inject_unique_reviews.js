const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scenariosFilePath = path.join(__dirname, 'data', 'scenarios.ts');

const extractorScript = `
import { scenarios } from './data/scenarios';
console.log(JSON.stringify(scenarios));
`;

fs.writeFileSync('extractor.ts', extractorScript, 'utf-8');
const result = execSync('npx tsx extractor.ts', { cwd: __dirname }).toString();
const scenarios = JSON.parse(result);

function getVocabForReview(ids) {
  let vocab = [];
  ids.forEach(id => {
    const s = scenarios.find(s => s.id === id);
    if (s && s.vocabulary) {
      vocab = vocab.concat(s.vocabulary.slice(0, 4));
    }
  });
  return vocab.sort(() => 0.5 - Math.random());
}

const review1Data = {
  id: 'review-1',
  title: 'Review 1',
  titlePt: 'Revisão 1',
  description: 'Review what you learned in Airport, Immigration, Hotel, Restaurant, and Cafe.',
  descriptionPt: 'Revise o que você aprendeu nos módulos: Aeroporto, Imigração, Hotel, Restaurante e Café.',
  icon: '🔄',
  imagePath: '/images/scenarios/tech.jpg',
  vocabulary: getVocabForReview(['airport', 'immigration', 'hotel', 'restaurant', 'cafe']),
  dialogues: [
    {
      context: 'Você chegou no hotel e o recepcionista faz perguntas parecidas com as da imigração, e você quer saber se tem um café lá dentro.',
      lines: [
        { speaker: 'Receptionist', english: 'Welcome! May I see your passport and reservation, please?', portuguese: 'Bem-vindo! Posso ver seu passaporte e reserva, por favor?' },
        { speaker: 'You', english: 'Sure, here they are. By the way, is there a cafe in the hotel?', portuguese: 'Claro, aqui estão. A propósito, tem um café no hotel?' },
        { speaker: 'Receptionist', english: 'Yes, it is right next to the restaurant. Are you traveling for business or vacation?', portuguese: 'Sim, fica bem ao lado do restaurante. Você está viajando a negócios ou férias?' },
        { speaker: 'You', english: 'Vacation. I am planning to stay for two weeks.', portuguese: 'Férias. Planejo ficar por duas semanas.' }
      ]
    },
    {
      context: 'No aeroporto, seu voo atrasou e você decide ir comer algo no restaurante.',
      lines: [
        { speaker: 'You', english: 'Excuse me, my flight is delayed. Can I get a table for one?', portuguese: 'Com licença, meu voo está atrasado. Posso pegar uma mesa para um?' },
        { speaker: 'Host', english: 'Of course. Would you like to look at the menu or just grab a coffee?', portuguese: 'Claro. Gostaria de ver o cardápio ou apenas tomar um café?' },
        { speaker: 'You', english: 'I will have the special of the day, please. And water without ice.', portuguese: 'Vou querer o prato do dia, por favor. E água sem gelo.' },
        { speaker: 'Host', english: 'Great choice. I will be right back with your water.', portuguese: 'Ótima escolha. Já volto com sua água.' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'Onde fica a área de imigração?', en: 'Where is the immigration area?' },
    { pt: 'Eu gostaria de cancelar meu pedido.', en: 'I would like to cancel my order.' },
    { pt: 'Tem alguma taxa extra para a bagagem?', en: 'Is there an extra fee for the luggage?' },
    { pt: 'A que horas o café da manhã é servido?', en: 'What time is breakfast served?' },
    { pt: 'Qual é a senha do Wi-Fi do restaurante?', en: 'What is the restaurant Wi-Fi password?' },
    { pt: 'Meu quarto não tem toalhas.', en: 'My room does not have towels.' },
    { pt: 'Pode trazer a conta, por favor?', en: 'Can you bring the bill, please?' },
    { pt: 'Vocês têm leite sem lactose?', en: 'Do you have lactose-free milk?' },
    { pt: 'Onde posso pegar minha mala?', en: 'Where can I claim my luggage?' },
    { pt: 'Quanto tempo vou ficar aqui?', en: 'How long will I stay here?' }
  ],
  problems: [
    { descriptionPt: 'Você fez o pedido no café, mas eles entregaram sua comida na mesa errada.' },
    { descriptionPt: 'Você chegou no aeroporto, mas esqueceu qual é o nome do seu hotel.' },
    { descriptionPt: 'Na imigração, perguntam qual restaurante você vai jantar hoje e você não sabe.' },
    { descriptionPt: 'O hotel disse que seu café da manhã estava incluso, mas o restaurante quer cobrar.' },
    { descriptionPt: 'Sua mala quebrou e você precisa avisar a recepção do hotel.' }
  ]
};

const review2Data = {
  id: 'review-2',
  title: 'Review 2',
  titlePt: 'Revisão 2',
  description: 'Review what you learned in Directions, Transport, Medical, Entertainment, and Tech.',
  descriptionPt: 'Revise o que você aprendeu nos módulos: Direções, Transporte, Médico, Entretenimento e Tecnologia.',
  icon: '🔄',
  imagePath: '/images/scenarios/tech.jpg',
  vocabulary: getVocabForReview(['directions', 'transport', 'medical', 'entertainment', 'tech']),
  dialogues: [
    {
      context: 'Você se perdeu a caminho do hospital e pergunta informações para alguém usando seu celular.',
      lines: [
        { speaker: 'You', english: 'Excuse me, my GPS lost connection. How do I get to the nearest hospital?', portuguese: 'Com licença, meu GPS perdeu a conexão. Como chego ao hospital mais próximo?' },
        { speaker: 'Local', english: 'Take the subway line 3, then walk straight for two blocks.', portuguese: 'Pegue a linha 3 do metrô, então caminhe reto por dois quarteirões.' },
        { speaker: 'You', english: 'Do I need to buy a ticket for the subway at the machine?', portuguese: 'Eu preciso comprar o bilhete para o metrô na máquina?' },
        { speaker: 'Local', english: 'Yes, but you can also use your smartphone to pay.', portuguese: 'Sim, mas você também pode usar seu smartphone para pagar.' }
      ]
    },
    {
      context: 'Você está no cinema, mas o fone de ouvido da cabine não funciona.',
      lines: [
        { speaker: 'You', english: 'Excuse me, my headphones are broken. The sound is terrible.', portuguese: 'Com licença, meus fones estão quebrados. O som está horrível.' },
        { speaker: 'Staff', english: 'I am sorry! I will bring you a new device immediately.', portuguese: 'Sinto muito! Vou trazer um aparelho novo imediatamente.' },
        { speaker: 'You', english: 'Thank you. Is there a pharmacy nearby, by the way? I have a headache.', portuguese: 'Obrigado. Tem uma farmácia por aqui, aliás? Estou com dor de cabeça.' },
        { speaker: 'Staff', english: 'Yes, just turn right after exiting the theater.', portuguese: 'Sim, apenas vire à direita ao sair do teatro.' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'O trem para no centro da cidade?', en: 'Does the train stop downtown?' },
    { pt: 'Sinto muita dor nas minhas costas.', en: 'I feel a lot of pain in my back.' },
    { pt: 'A bateria do meu celular acabou.', en: 'My phone battery died.' },
    { pt: 'A que horas começa o espetáculo?', en: 'What time does the show start?' },
    { pt: 'Onde posso comprar os ingressos?', en: 'Where can I buy the tickets?' },
    { pt: 'Preciso de um carregador para o meu notebook.', en: 'I need a charger for my laptop.' },
    { pt: 'Estou perdido, como volto para o metrô?', en: 'I am lost, how do I go back to the subway?' },
    { pt: 'Pode me dar um recibo, por favor?', en: 'Can you give me a receipt, please?' },
    { pt: 'Meu estômago não está bem.', en: 'My stomach is not feeling well.' },
    { pt: 'Vire à esquerda no próximo semáforo.', en: 'Turn left at the next traffic light.' }
  ],
  problems: [
    { descriptionPt: 'O GPS mandou você virar numa rua que está em obras e fechada.' },
    { descriptionPt: 'Você derrubou seu celular na estação de trem e a tela trincou.' },
    { descriptionPt: 'Você comprou ingressos online, mas o arquivo PDF não abre no seu celular.' },
    { descriptionPt: 'Você começou a sentir enjoo no ônibus durante uma viagem longa.' },
    { descriptionPt: 'Você desceu na estação errada e está atrasado para um show.' }
  ]
};

const review3Data = {
  id: 'review-3',
  title: 'Review 3',
  titlePt: 'Revisão 3',
  description: 'Review what you learned in Shopping, Beauty, Car Rental, Supermarket, and Small Talk.',
  descriptionPt: 'Revise o que você aprendeu nos módulos: Compras, Salão de Beleza, Aluguel de Carros, Supermercado e Conversa Fiada.',
  icon: '🔄',
  imagePath: '/images/scenarios/tech.jpg',
  vocabulary: getVocabForReview(['shopping', 'beauty', 'carrental', 'supermarket', 'smalltalk']),
  dialogues: [
    {
      context: 'Você alugou um carro para ir ao supermercado e acaba puxando assunto com alguém na fila do caixa.',
      lines: [
        { speaker: 'You', english: 'Wow, the line is very long today, isn’t it?', portuguese: 'Nossa, a fila está muito longa hoje, não está?' },
        { speaker: 'Stranger', english: 'Yes, it usually is on weekends. Beautiful weather outside, right?', portuguese: 'Sim, costuma ser nos finais de semana. Clima bonito lá fora, certo?' },
        { speaker: 'You', english: 'Absolutely. I just rented a car to drive to the beach later.', portuguese: 'Com certeza. Acabei de alugar um carro para dirigir até a praia mais tarde.' },
        { speaker: 'Stranger', english: 'That sounds fun! Make sure you bought enough sunscreen.', portuguese: 'Parece divertido! Certifique-se de que comprou protetor solar suficiente.' }
      ]
    },
    {
      context: 'Você está comprando roupas em uma loja e também quer saber se tem um salão de beleza por perto.',
      lines: [
        { speaker: 'You', english: 'Do you have this shirt in a medium size?', portuguese: 'Você tem essa camisa em tamanho médio?' },
        { speaker: 'Clerk', english: 'Let me check in the back. Yes, here it is.', portuguese: 'Deixe-me checar lá atrás. Sim, aqui está.' },
        { speaker: 'You', english: 'Perfect, I will take it. Do you know any good hair salons around here?', portuguese: 'Perfeito, vou levar. Você conhece algum bom salão de beleza por aqui?' },
        { speaker: 'Clerk', english: 'There is a great one just across the street. Ask for Sarah.', portuguese: 'Tem um ótimo bem do outro lado da rua. Pergunte pela Sarah.' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'Tem algum desconto pagando em dinheiro?', en: 'Is there any discount paying in cash?' },
    { pt: 'O carro está com o tanque cheio?', en: 'Is the car with a full tank?' },
    { pt: 'Eu gostaria de cortar só as pontas.', en: 'I would like to cut just the ends.' },
    { pt: 'Onde fica a seção de frutas e verduras?', en: 'Where is the fruits and vegetables section?' },
    { pt: 'O que você faz no seu tempo livre?', en: 'What do you do in your free time?' },
    { pt: 'Qual é o seu tipo favorito de filme?', en: 'What is your favorite type of movie?' },
    { pt: 'Preciso devolver o carro amanhã de manhã.', en: 'I need to return the car tomorrow morning.' },
    { pt: 'Posso provar esta calça?', en: 'Can I try these pants on?' },
    { pt: 'A tintura de cabelo causou uma alergia.', en: 'The hair dye caused an allergy.' },
    { pt: 'Você mora aqui há muito tempo?', en: 'Have you lived here for a long time?' }
  ],
  problems: [
    { descriptionPt: 'O carro que você alugou fez um barulho estranho quando você foi sair com suas compras do mercado.' },
    { descriptionPt: 'A roupa que você provou ficou manchada depois que você foi ao salão de beleza.' },
    { descriptionPt: 'Você tentou fazer conversa com alguém na fila do caixa, mas a pessoa entendeu tudo errado.' },
    { descriptionPt: 'Você alugou um carro para fazer compras, mas o porta-malas não quer abrir.' },
    { descriptionPt: 'A etiqueta de preço na prateleira estava diferente do preço que passou no caixa do mercado.' }
  ]
};

let fileContent = fs.readFileSync(scenariosFilePath, 'utf-8');

// Function to replace entirely a scenario object in the file
function replaceScenarioObject(id, newObj) {
  const idRegex = new RegExp(`{\\s*id:\\s*'${id}'`);
  const match = idRegex.exec(fileContent);
  if (!match) return; // If not found, skip
  
  let startIdx = match.index;
  let braceCount = 0;
  let endIdx = -1;
  
  for (let i = startIdx; i < fileContent.length; i++) {
      if (fileContent[i] === '{') braceCount++;
      if (fileContent[i] === '}') braceCount--;
      
      if (braceCount === 0 && i > startIdx) {
          endIdx = i + 1;
          break;
      }
  }
  
  const injectionString = JSON.stringify(newObj, null, 2).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:');
  fileContent = fileContent.substring(0, startIdx) + injectionString + fileContent.substring(endIdx);
}

replaceScenarioObject('review-1', review1Data);
replaceScenarioObject('review-2', review2Data);
replaceScenarioObject('review-3', review3Data);

fs.writeFileSync(scenariosFilePath, fileContent, 'utf-8');
console.log('Unique reviews injected!');

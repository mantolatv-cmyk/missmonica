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
  imagePath: '/images/review_1_scene.jpg',
  color: 'indigo',
  vocabulary: getVocabForReview(['airport', 'immigration', 'hotel', 'restaurant', 'cafe']),
  dialogues: [
    {
      context: 'Você chegou no hotel, mas o quarto ainda não está pronto. Você pergunta onde pode comer.',
      lines: [
        { speaker: 'Receptionist', english: 'Welcome! Unfortunately, your room is not ready yet.', portuguese: 'Bem-vindo! Infelizmente, seu quarto ainda não está pronto.' },
        { speaker: 'You', english: 'That is okay. Is there a restaurant or cafe nearby where I can wait?', portuguese: 'Tudo bem. Tem um restaurante ou café por perto onde eu possa esperar?' },
        { speaker: 'Receptionist', english: 'Yes, we have a cafe downstairs. Do you have your passport for check-in?', portuguese: 'Sim, temos um café no andar de baixo. Você tem seu passaporte para o check-in?' },
        { speaker: 'You', english: 'Here it is. I will be at the cafe drinking a latte.', portuguese: 'Aqui está. Estarei no café bebendo um latte.' }
      ]
    },
    {
      context: 'No aeroporto, você tem tempo antes do voo e quer jantar no restaurante.',
      lines: [
        { speaker: 'You', english: 'Excuse me, I have a flight in two hours. Can I order something quick?', portuguese: 'Com licença, tenho um voo em duas horas. Posso pedir algo rápido?' },
        { speaker: 'Waiter', english: 'Of course! Our daily special is very fast. What would you like to drink?', portuguese: 'Claro! Nosso prato do dia é bem rápido. O que gostaria de beber?' },
        { speaker: 'You', english: 'I will have sparkling water, please. No ice.', portuguese: 'Vou querer água com gás, por favor. Sem gelo.' },
        { speaker: 'Waiter', english: 'Perfect. I will bring your water and the menu right away.', portuguese: 'Perfeito. Vou trazer sua água e o cardápio imediatamente.' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'Onde fica a área de imigração?', en: 'Where is the immigration area?' },
    { pt: 'Eu gostaria de cancelar meu pedido.', en: 'I would like to cancel my order.' },
    { pt: 'Tem alguma taxa extra para a bagagem?', en: 'Is there an extra fee for the luggage?' },
    { pt: 'A que horas o café da manhã é servido?', en: 'What time is breakfast served?' },
    { pt: 'Qual é a senha do Wi-Fi do restaurante?', en: 'What is the restaurant Wi-Fi password?' },
    { pt: 'Pode trazer a conta, por favor?', en: 'Can you bring the bill, please?' }
  ],
  problems: [
    { descriptionPt: 'Você pediu um café descafeinado no hotel, mas o garçom trouxe café normal e você já bebeu.' },
    { descriptionPt: 'O oficial da imigração perguntou o endereço do seu hotel e você não anotou.' },
    { descriptionPt: 'Sua mala despachada não chegou na esteira do aeroporto.' }
  ],
  simulationTasks: [
    {
      title: 'Chegada Turbulenta',
      description: 'Você acaba de passar pela imigração, perdeu sua mala, e precisa explicar no hotel que só tem a roupa do corpo.',
      context: 'You are at the hotel reception. Explain your luggage situation and ask if they provide toothbrush and toothpaste.',
      initialMessage: 'Good evening! How can I help you today?',
      expectedKeywords: ['lost luggage', 'toothbrush', 'toothpaste', 'help']
    },
    {
      title: 'Jantar Atrasado',
      description: 'Você está no restaurante do aeroporto, pediu o prato há 40 minutos e seu voo sai logo.',
      context: 'Call the waiter, complain about the delay politely, and ask them to cancel the order or pack it to go.',
      initialMessage: 'Is everything okay here?',
      expectedKeywords: ['flight', 'cancel', 'to go', 'delayed', 'waiting']
    }
  ],
  wouldYouRather: [
    {
      questionEn: 'Would you rather lose your passport before the flight or your wallet inside the hotel?',
      questionPt: 'Você preferia perder o passaporte antes do voo ou a carteira dentro do hotel?',
      optionA: { en: 'Lose the passport', pt: 'Perder o passaporte' },
      optionB: { en: 'Lose the wallet', pt: 'Perder a carteira' }
    },
    {
      questionEn: 'Would you rather have a 10-hour layover at a small airport or food poisoning at a fancy restaurant?',
      questionPt: 'Você preferia ter uma escala de 10 horas num aeroporto pequeno ou intoxicação alimentar num restaurante chique?',
      optionA: { en: '10-hour layover', pt: 'Escala de 10 horas' },
      optionB: { en: 'Food poisoning', pt: 'Intoxicação alimentar' }
    }
  ],
  flashcards: [
    {
      front: 'Boarding Pass',
      back: 'Cartão de embarque',
      type: 'vocabulary'
    },
    {
      front: 'Customs',
      back: 'Alfândega',
      type: 'vocabulary'
    },
    {
      front: 'Sparkling Water',
      back: 'Água com gás',
      type: 'vocabulary'
    },
    {
      front: 'Check-out',
      back: 'Sair do hotel',
      type: 'vocabulary'
    }
  ],
  reading: {
    title: 'A Rough Arrival',
    titlePt: 'Uma Chegada Difícil',
    content: 'John arrived at the airport after a 12-hour flight. He was exhausted. At immigration, the officer asked for his hotel address, but John realized his phone was dead. After passing customs, he could not find his luggage. Hungry and tired, he just wanted a hot coffee and a sandwich, but the airport cafe was already closed.',
    contentPt: 'John chegou ao aeroporto após um voo de 12 horas. Ele estava exausto. Na imigração, o oficial pediu o endereço de seu hotel, mas John percebeu que seu celular estava sem bateria. Após passar pela alfândega, ele não conseguiu encontrar sua bagagem. Faminto e cansado, ele só queria um café quente e um sanduíche, mas o café do aeroporto já estava fechado.',
    questions: [
      {
        question: 'Why couldn’t John show the hotel address?',
        options: ['He forgot the name', 'His phone was dead', 'He lost his passport', 'He didn’t book a hotel'],
        correctAnswer: 1
      },
      {
        question: 'What happened after customs?',
        options: ['He missed his flight', 'He found a great restaurant', 'He couldn’t find his luggage', 'He bought a new phone'],
        correctAnswer: 2
      },
      {
        question: 'Why didn’t he get a coffee?',
        options: ['He had no money', 'He doesn’t like coffee', 'The cafe was closed', 'The coffee was cold'],
        correctAnswer: 2
      }
    ]
  },
  speakingQuestions: [
    {
      question: 'Tell me about the worst experience you have ever had at an airport.',
      translation: 'Me conte sobre a pior experiência que você já teve num aeroporto.'
    },
    {
      question: 'What is your favorite food to order in a restaurant when you are traveling?',
      translation: 'Qual é a sua comida favorita para pedir num restaurante quando está viajando?'
    }
  ],
  culturalTips: [
    {
      title: 'Tipping Culture in the US',
      titlePt: 'A Cultura da Gorjeta nos EUA',
      content: 'In the US, it is expected to tip 15-20% at restaurants, cafes, and to hotel staff. Not tipping is considered very rude!',
      contentPt: 'Nos EUA, espera-se uma gorjeta de 15 a 20% em restaurantes, cafés e para funcionários do hotel. Não dar gorjeta é considerado muito rude!'
    },
    {
      title: 'Immigration Questions',
      titlePt: 'Perguntas da Imigração',
      content: 'Immigration officers may seem strict, but they are just doing their job. Always answer clearly, briefly, and honestly.',
      contentPt: 'Oficiais de imigração podem parecer rígidos, mas estão apenas fazendo seu trabalho. Responda sempre de forma clara, breve e honesta.'
    }
  ]
};

const review2Data = {
  id: 'review-2',
  title: 'Review 2',
  titlePt: 'Revisão 2',
  description: 'Review what you learned in Directions, Transport, Medical, Entertainment, and Tech.',
  descriptionPt: 'Revise o que você aprendeu nos módulos: Direções, Transporte, Médico, Entretenimento e Tecnologia.',
  icon: '🔄',
  imagePath: '/images/review_2_scene.jpg',
  color: 'orange',
  vocabulary: getVocabForReview(['directions', 'transport', 'medical', 'entertainment', 'tech']),
  dialogues: [
    {
      context: 'Você se perdeu no caminho para o cinema e pede ajuda com o celular na mão.',
      lines: [
        { speaker: 'You', english: 'Excuse me, my maps app is not working. How do I get to the AMC Theater?', portuguese: 'Com licença, meu app de mapas não está funcionando. Como chego ao cinema AMC?' },
        { speaker: 'Stranger', english: 'Take the subway line 2 and get off at Central Station. Then walk two blocks.', portuguese: 'Pegue a linha 2 do metrô e desça na Estação Central. Depois caminhe dois quarteirões.' },
        { speaker: 'You', english: 'Thank you! Do I need exact change for the subway ticket?', portuguese: 'Obrigado! Preciso de dinheiro trocado para o bilhete do metrô?' },
        { speaker: 'Stranger', english: 'No, you can pay with your phone or credit card.', portuguese: 'Não, você pode pagar com seu celular ou cartão de crédito.' }
      ]
    },
    {
      context: 'Você está no hospital aguardando e tenta usar o Wi-Fi para avisar sua família.',
      lines: [
        { speaker: 'You', english: 'Excuse me, is there free Wi-Fi in the waiting room?', portuguese: 'Com licença, tem Wi-Fi grátis na sala de espera?' },
        { speaker: 'Nurse', english: 'Yes, the network is "Guest_Health". Are you feeling any better?', portuguese: 'Sim, a rede é "Guest_Health". Você está se sentindo melhor?' },
        { speaker: 'You', english: 'My back hurts a lot, but I need to text my family.', portuguese: 'Minhas costas doem muito, mas preciso mandar mensagem para minha família.' },
        { speaker: 'Nurse', english: 'I understand. The doctor will see you in five minutes.', portuguese: 'Eu entendo. O médico vai te atender em cinco minutos.' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'O trem para no centro da cidade?', en: 'Does the train stop downtown?' },
    { pt: 'Sinto muita dor nas minhas costas.', en: 'I feel a lot of pain in my back.' },
    { pt: 'A bateria do meu celular acabou.', en: 'My phone battery died.' },
    { pt: 'Onde posso comprar os ingressos?', en: 'Where can I buy the tickets?' },
    { pt: 'Estou perdido, como volto para o metrô?', en: 'I am lost, how do I go back to the subway?' }
  ],
  problems: [
    { descriptionPt: 'O GPS te mandou entrar numa rua contramão a caminho do show.' },
    { descriptionPt: 'Você quebrou o pé e precisa explicar ao motorista do ônibus que não pode subir escadas.' },
    { descriptionPt: 'A internet caiu bem na hora que o médico ia fazer uma consulta por vídeo.' }
  ],
  simulationTasks: [
    {
      title: 'Emergência a caminho do Teatro',
      description: 'Você torceu o tornozelo no metrô indo para uma peça de teatro. Peça ajuda a um segurança.',
      context: 'Tell the security guard you hurt your ankle, ask for directions to a pharmacy, and ask if you can get a taxi.',
      initialMessage: 'Hey there! You look like you are in pain. Are you okay?',
      expectedKeywords: ['ankle', 'hurt', 'pharmacy', 'taxi']
    },
    {
      title: 'Carregador no Show',
      description: 'No meio de um festival de música, a bateria do seu celular morre. Peça ajuda na tenda de informações.',
      context: 'Ask the staff if they have a phone charger you can borrow or if there is a charging station nearby.',
      initialMessage: 'Hello! How can I help you enjoy the festival?',
      expectedKeywords: ['battery', 'died', 'charger', 'borrow', 'station']
    }
  ],
  wouldYouRather: [
    {
      questionEn: 'Would you rather have no GPS in a new city or no pain killers when you have a headache?',
      questionPt: 'Você preferia ficar sem GPS numa cidade nova ou sem analgésicos quando está com dor de cabeça?',
      optionA: { en: 'No GPS', pt: 'Sem GPS' },
      optionB: { en: 'No painkillers', pt: 'Sem analgésico' }
    },
    {
      questionEn: 'Would you rather miss your train by 1 minute or drop your phone on the tracks?',
      questionPt: 'Você preferia perder o trem por 1 minuto ou derrubar seu celular nos trilhos?',
      optionA: { en: 'Miss the train', pt: 'Perder o trem' },
      optionB: { en: 'Drop the phone', pt: 'Derrubar o celular' }
    }
  ],
  flashcards: [
    {
      front: 'Headache',
      back: 'Dor de cabeça',
      type: 'vocabulary'
    },
    {
      front: 'Subway Station',
      back: 'Estação de metrô',
      type: 'vocabulary'
    },
    {
      front: 'Charger',
      back: 'Carregador',
      type: 'vocabulary'
    },
    {
      front: 'Go straight',
      back: 'Siga em frente',
      type: 'vocabulary'
    }
  ],
  reading: {
    title: 'A Night to Remember',
    titlePt: 'Uma Noite Inesquecível',
    content: 'Sarah wanted to see a Broadway show, but she took the wrong subway train. She ended up in Brooklyn instead of Manhattan. To make matters worse, her phone battery died, so she couldn’t use maps. She asked a police officer for directions, found a taxi, and barely made it to the theater before the show started. But during the play, she got a terrible headache!',
    contentPt: 'Sarah queria ver um show da Broadway, mas pegou o metrô errado. Ela foi parar no Brooklyn em vez de Manhattan. Para piorar, a bateria de seu telefone acabou, então ela não pôde usar mapas. Ela pediu direções a um policial, achou um táxi e mal conseguiu chegar ao teatro antes do show começar. Mas durante a peça, ela teve uma terrível dor de cabeça!',
    questions: [
      {
        question: 'Why did Sarah end up in Brooklyn?',
        options: ['She wanted to visit', 'She took the wrong train', 'The theater moved there', 'Her friend lived there'],
        correctAnswer: 1
      },
      {
        question: 'Why couldn’t she use her maps app?',
        options: ['No internet', 'She forgot her phone', 'Her phone died', 'She lost her phone'],
        correctAnswer: 2
      },
      {
        question: 'What happened at the theater?',
        options: ['She fell asleep', 'She lost her ticket', 'She got a headache', 'The show was canceled'],
        correctAnswer: 2
      }
    ]
  },
  speakingQuestions: [
    {
      question: 'Have you ever gotten completely lost in a foreign country? What did you do?',
      translation: 'Você já se perdeu completamente num país estrangeiro? O que você fez?'
    },
    {
      question: 'What is the most useful app on your phone when you are traveling?',
      translation: 'Qual é o aplicativo mais útil no seu celular quando você viaja?'
    }
  ],
  culturalTips: [
    {
      title: 'Public Transport Etiquette',
      titlePt: 'Etiqueta no Transporte Público',
      content: 'In major cities like London and New York, always stand on the right side of the escalator and walk on the left.',
      contentPt: 'Em cidades grandes como Londres e Nova York, fique sempre do lado direito da escada rolante e caminhe pelo esquerdo.'
    },
    {
      title: 'Pharmacies vs. Hospitals',
      titlePt: 'Farmácias vs. Hospitais',
      content: 'For minor issues like headaches or colds, go to a pharmacy (like CVS or Boots). Hospital emergency rooms in the US are very expensive!',
      contentPt: 'Para problemas menores como dores de cabeça ou resfriados, vá a uma farmácia. As emergências de hospital nos EUA são caríssimas!'
    }
  ]
};

const review3Data = {
  id: 'review-3',
  title: 'Review 3',
  titlePt: 'Revisão 3',
  description: 'Review what you learned in Shopping, Beauty, Car Rental, Supermarket, and Small Talk.',
  descriptionPt: 'Revise o que você aprendeu nos módulos: Compras, Salão de Beleza, Aluguel de Carros, Supermercado e Conversa Fiada.',
  icon: '🔄',
  imagePath: '/images/review_3_scene.jpg',
  color: 'mint',
  vocabulary: getVocabForReview(['shopping', 'beauty', 'carrental', 'supermarket', 'smalltalk']),
  dialogues: [
    {
      context: 'Você alugou um carro para fazer compras e puxa assunto com alguém na fila.',
      lines: [
        { speaker: 'You', english: 'Wow, the line is very long today, isn’t it?', portuguese: 'Nossa, a fila está muito longa hoje, não está?' },
        { speaker: 'Stranger', english: 'Yes! Are you buying all these snacks for a road trip?', portuguese: 'Sim! Você está comprando todos esses lanches para uma viagem de carro?' },
        { speaker: 'You', english: 'Exactly. I just rented an SUV to drive to the beach.', portuguese: 'Exatamente. Acabei de alugar um SUV para dirigir até a praia.' },
        { speaker: 'Stranger', english: 'Sounds fun! Don’t forget the sunscreen, the sun is very strong today.', portuguese: 'Parece divertido! Não esqueça o protetor solar, o sol está muito forte hoje.' }
      ]
    },
    {
      context: 'Você está numa loja de roupas e pergunta sobre salões de beleza na área.',
      lines: [
        { speaker: 'You', english: 'I will take this dress. Do you know any good hair salons around here?', portuguese: 'Vou levar este vestido. Você conhece algum bom salão de beleza por aqui?' },
        { speaker: 'Clerk', english: 'Yes, there is one next to the supermarket across the street.', portuguese: 'Sim, tem um ao lado do supermercado, do outro lado da rua.' },
        { speaker: 'You', english: 'Perfect, I need a haircut before my party tonight.', portuguese: 'Perfeito, preciso cortar o cabelo antes da minha festa hoje à noite.' },
        { speaker: 'Clerk', english: 'They do great styling there. Have fun at your party!', portuguese: 'Eles fazem ótimos penteados lá. Divirta-se na sua festa!' }
      ]
    }
  ],
  importantPhrases: [
    { pt: 'Tem algum desconto pagando em dinheiro?', en: 'Is there any discount paying in cash?' },
    { pt: 'O carro está com o tanque cheio?', en: 'Is the car with a full tank?' },
    { pt: 'Eu gostaria de cortar só as pontas.', en: 'I would like to cut just the ends.' },
    { pt: 'Onde fica a seção de frutas e verduras?', en: 'Where is the fruits and vegetables section?' },
    { pt: 'Você mora aqui há muito tempo?', en: 'Have you lived here for a long time?' }
  ],
  problems: [
    { descriptionPt: 'A tinta do salão manchou a camisa nova que você acabou de comprar no shopping.' },
    { descriptionPt: 'O porta-malas do carro alugado não abre e suas compras do supermercado estão lá dentro.' },
    { descriptionPt: 'Você puxou assunto com alguém no caixa e a pessoa entendeu tudo errado.' }
  ],
  simulationTasks: [
    {
      title: 'Devolução de Compras no Carro',
      description: 'Você alugou um carro, comprou roupas e agora quer devolver uma jaqueta que não serviu, mas a vendedora quer puxar conversa fiada.',
      context: 'Return the jacket at the clothing store, ask for a refund, and reply politely to the clerk asking about your rental car.',
      initialMessage: 'Hello! Oh, returning this jacket? Such a shame! Did you drive here in that nice convertible outside?',
      expectedKeywords: ['return', 'refund', 'rented', 'yes', 'too small']
    },
    {
      title: 'Corte de Cabelo e Desconto',
      description: 'Você está no salão, fez o corte, mas achou muito caro. Pergunte se eles têm cartão fidelidade ou dão desconto.',
      context: 'Pay for your haircut, ask if they offer discounts or loyalty cards for tourists.',
      initialMessage: 'Your haircut looks fabulous! That will be $80, please.',
      expectedKeywords: ['discount', 'tourist', 'expensive', 'loyalty']
    }
  ],
  wouldYouRather: [
    {
      questionEn: 'Would you rather get a terrible haircut before a party or get a flat tire on a rental car?',
      questionPt: 'Você preferia ter um corte de cabelo terrível antes de uma festa ou ter o pneu do carro alugado furado?',
      optionA: { en: 'Terrible haircut', pt: 'Corte terrível' },
      optionB: { en: 'Flat tire', pt: 'Pneu furado' }
    },
    {
      questionEn: 'Would you rather drop your groceries in the supermarket or have nothing to talk about on a first date?',
      questionPt: 'Você preferia derrubar suas compras no supermercado ou não ter assunto num primeiro encontro?',
      optionA: { en: 'Drop groceries', pt: 'Derrubar compras' },
      optionB: { en: 'Awkward silence', pt: 'Silêncio constrangedor' }
    }
  ],
  flashcards: [
    {
      front: 'Aisle',
      back: 'Corredor (de supermercado)',
      type: 'vocabulary'
    },
    {
      front: 'Insurance',
      back: 'Seguro (para o carro)',
      type: 'vocabulary'
    },
    {
      front: 'Small Talk',
      back: 'Conversa fiada',
      type: 'vocabulary'
    },
    {
      front: 'Fitting Room',
      back: 'Provador',
      type: 'vocabulary'
    }
  ],
  reading: {
    title: 'The Busy Saturday',
    titlePt: 'O Sábado Agitado',
    content: 'Mark rented a compact car to run errands. First, he went to the supermarket to buy vegetables, but they were out of tomatoes. Then, he drove to the mall to buy a gift for his wife. He even stopped at a salon for a quick haircut. While waiting, he chatted with a friendly local about the nice weather.',
    contentPt: 'Mark alugou um carro compacto para fazer tarefas. Primeiro, ele foi ao supermercado comprar vegetais, mas não tinha tomates. Depois, ele dirigiu até o shopping para comprar um presente para sua esposa. Ele até parou num salão para um corte de cabelo rápido. Enquanto esperava, ele bateu papo com um morador simpático sobre o clima bom.',
    questions: [
      {
        question: 'Why did Mark rent a car?',
        options: ['To travel abroad', 'To run errands', 'To go to work', 'To test drive it'],
        correctAnswer: 1
      },
      {
        question: 'What was missing at the supermarket?',
        options: ['Milk', 'Potatoes', 'Tomatoes', 'Bread'],
        correctAnswer: 2
      },
      {
        question: 'Who did Mark talk to at the salon?',
        options: ['The barber', 'His wife', 'A friendly local', 'Nobody'],
        correctAnswer: 2
      }
    ]
  },
  speakingQuestions: [
    {
      question: 'Do you enjoy making small talk with strangers? Why or why not?',
      translation: 'Você gosta de fazer conversa fiada com estranhos? Por que sim ou por que não?'
    },
    {
      question: 'Do you prefer shopping in physical stores or online?',
      translation: 'Você prefere fazer compras em lojas físicas ou online?'
    }
  ],
  culturalTips: [
    {
      title: 'Making Small Talk',
      titlePt: 'Fazendo Conversa Fiada',
      content: 'In English-speaking cultures, it’s common to chat with cashiers, waiters, or strangers in line. Safe topics include the weather, sports, and compliments.',
      contentPt: 'Em culturas de língua inglesa, é comum conversar com caixas, garçons ou estranhos na fila. Tópicos seguros incluem clima, esportes e elogios.'
    },
    {
      title: 'Renting Cars and Insurance',
      titlePt: 'Aluguel de Carros e Seguro',
      content: 'Always check if your personal car insurance or credit card covers rental car damages so you don’t pay for unnecessary extra insurance at the counter.',
      contentPt: 'Sempre verifique se seu seguro pessoal ou cartão de crédito cobre danos, para não pagar por seguros extras desnecessários no balcão.'
    }
  ]
};

let fileContent = fs.readFileSync(scenariosFilePath, 'utf-8');

function replaceScenarioObject(id, newObj) {
  const idRegex = new RegExp(`{\\s*id:\\s*'${id}'`);
  const match = idRegex.exec(fileContent);
  if (!match) return;
  
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
  
  const injectionString = JSON.stringify(newObj, null, 2).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:').replace(/\"/g, "'");
  
  fileContent = fileContent.substring(0, startIdx) + injectionString + fileContent.substring(endIdx);
}

replaceScenarioObject('review-1', review1Data);
replaceScenarioObject('review-2', review2Data);
replaceScenarioObject('review-3', review3Data);

fs.writeFileSync(scenariosFilePath, fileContent, 'utf-8');
console.log('Full reviews injected!');

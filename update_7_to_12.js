const fs = require('fs');
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

const replacements = [
  // Scenario 7: Directions (Sarah)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']Who does Sarah ask for help\?["'][\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Sarah is eating at a restaurant', 'Sarah is lost and asking for directions to the museum', 'Sarah is looking for a police station', 'Sarah is going home'], correctIndex: 1 },
        { question: 'What does "lost" mean in this story?', questionPt: 'O que significa "lost" nesta história?', options: ['She won a prize', 'She does not know where she is', 'She found a new friend', 'She is very hungry'], correctIndex: 1 },
        { question: 'Why does Sarah ask a police officer for help?', questionPt: 'Por que Sarah pede ajuda a um policial?', options: ['Because he is a police officer and can give directions', 'Because she wants to buy something from him', 'Because she knows him', 'Because she wants to arrest someone'], correctIndex: 0 },
        { question: 'What can we guess about the museum\\'s location?', questionPt: 'O que podemos adivinhar sobre a localização do museu?', options: ['It is very far away', 'It is near a park and a bank', 'It is inside a police station', 'It is not in the city'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']Why did Sarah ask a local for directions\?["'][\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['How to use a phone map', 'A successful experience of navigating a new city by asking for directions', 'A bad experience with a rude local', 'A history of the modern art museum'], correctIndex: 1 },
        { question: 'What does "disoriented" mean?', questionPt: 'O que significa "disoriented"?', options: ['Knowing exactly where to go', 'Losing one\\'s sense of direction', 'Feeling very angry', 'Being very tired'], correctIndex: 1 },
        { question: 'Why did Sarah approach the local with a dog?', questionPt: 'Por que Sarah abordou o morador com o cachorro?', options: ['Because her phone battery died and she needed directions', 'Because she wanted to pet the dog', 'Because he was a police officer', 'Because she wanted to buy the dog'], correctIndex: 0 },
        { question: 'What is the implication of taking a "sharp right"?', questionPt: 'Qual é a implicação de fazer uma "sharp right"?', options: ['Turning right very slightly', 'Making a quick and tight turn to the right', 'Walking straight on the right side', 'Stopping completely on the right'], correctIndex: 1 },
      ]`
  },
  // Scenario 8: Transport (Mark)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']Where is Mark at the beginning\?["'][\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main event in the text?', questionPt: 'Qual é o evento principal no texto?', options: ['Mark taking a taxi from the airport to his hotel', 'Mark buying a car', 'Mark going to a restaurant', 'Mark taking a train'], correctIndex: 0 },
        { question: 'What does "traffic is very bad" mean?', questionPt: 'O que significa "traffic is very bad"?', options: ['The cars are moving very fast', 'There are many cars and they are moving slowly', 'There are no cars on the road', 'The roads are broken'], correctIndex: 1 },
        { question: 'Why does Mark pay 25 dollars?', questionPt: 'Por que Mark paga 25 dólares?', options: ['To buy the taxi', 'Because it is the cost of the ride shown on the meter', 'To buy food', 'Because the driver is his friend'], correctIndex: 1 },
        { question: 'What can we infer about Mark\\'s trip?', questionPt: 'O que podemos inferir sobre a viagem de Mark?', options: ['It was very quick', 'It took 30 minutes because of the traffic', 'He drove the car himself', 'He didn\\'t arrive at the hotel'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']Where did Mark find the taxi\?["'][\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the central theme of this passage?', questionPt: 'Qual é o tema central desta passagem?', options: ['Driving a taxi in a big city', 'Navigating traffic while traveling to a hotel from the airport', 'Checking emails during a taxi ride', 'Buying a new suitcase'], correctIndex: 1 },
        { question: 'What does "bumper-to-bumper traffic" mean?', questionPt: 'O que significa "bumper-to-bumper traffic"?', options: ['Cars crashing into each other', 'A road with no cars', 'Very heavy traffic where cars are extremely close together and moving slowly', 'Cars driving very fast'], correctIndex: 2 },
        { question: 'Why did Mark ask the driver to take the highway?', questionPt: 'Por que Mark pediu ao motorista para pegar a rodovia?', options: ['Because he wanted to see the scenery', 'In an attempt to avoid local traffic', 'Because he wanted to drive fast', 'Because it was cheaper'], correctIndex: 1 },
        { question: 'What is implied by Mark giving a 50 dollar bill and keeping the change?', questionPt: 'O que está implícito quando Mark dá uma nota de 50 dólares e diz para ficar com o troco?', options: ['He forgot his money', 'He paid for the ride and gave a 15 dollar tip', 'He was angry at the driver', 'He wanted his change back'], correctIndex: 1 },
      ]`
  },
  // Scenario 9: Medical (Peter)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']What is wrong with Peter\?["'][\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main topic of the story?', questionPt: 'Qual é o tópico principal da história?', options: ['Peter going to the doctor', 'Peter buying medicine at the pharmacy for his headache', 'Peter working at the pharmacy', 'Peter buying food'], correctIndex: 1 },
        { question: 'What does "head hurts a lot" mean?', questionPt: 'O que significa "head hurts a lot"?', options: ['He is very happy', 'He has a strong headache', 'His head is very big', 'He is wearing a hat'], correctIndex: 1 },
        { question: 'Why does Peter buy a bottle of water?', questionPt: 'Por que Peter compra uma garrafa de água?', options: ['To wash his face', 'To take his pills right away', 'To give to the pharmacist', 'To cook'], correctIndex: 1 },
        { question: 'What can we infer about Peter\\'s pain?', questionPt: 'O que podemos inferir sobre a dor de Peter?', options: ['It is very strong because he takes the pills immediately', 'It is very light', 'He is pretending to be sick', 'It went away before he took the medicine'], correctIndex: 0 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']What symptoms was Peter experiencing\?["'][\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the primary message of this text?', questionPt: 'Qual é a mensagem principal deste texto?', options: ['How to become a pharmacist', 'A man seeking quick relief for a severe migraine at a drugstore', 'The dangers of taking medicine', 'Buying water at a pharmacy'], correctIndex: 1 },
        { question: 'What is the best synonym for "relief" as used at the end of the text?', questionPt: 'Qual é o melhor sinônimo para "relief" como usado no final do texto?', options: ['Pain', 'Alleviation of distress or pain', 'More headaches', 'Drowsiness'], correctIndex: 1 },
        { question: 'Why did the pharmacist mention "mild drowsiness"?', questionPt: 'Por que a farmacêutica mencionou "mild drowsiness" (sonolência leve)?', options: ['To tell him he will not be able to sleep', 'As a warning about a possible side effect of the strong medication', 'To suggest he buys coffee', 'To tell him he must sleep for 4 days'], correctIndex: 1 },
        { question: 'What is the implication of taking "one tablet every six hours"?', questionPt: 'Qual é a implicação de tomar "um comprimido a cada seis horas"?', options: ['He should take them all at once', 'He must space out his doses throughout the day', 'He can take them every hour', 'He only needs one tablet ever'], correctIndex: 1 },
      ]`
  },
  // Scenario 10: Entertainment (Tom)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']How much does each ticket cost\?["'][\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Tom hates musicals', 'Tom and his friend have a great night watching a Broadway show', 'Tom and his friend get lost in the theater', 'Tom works as an actor'], correctIndex: 1 },
        { question: 'What does "talented" mean?', questionPt: 'O que significa "talented"?', options: ['Very bad at singing', 'Having a natural ability or skill to act and sing well', 'Being very tall', 'Being very old'], correctIndex: 1 },
        { question: 'Why do they buy water and soda?', questionPt: 'Por que eles compram água e refrigerante?', options: ['Because they have time before the show starts', 'Because it is mandatory', 'Because they want to throw it', 'Because they are outside'], correctIndex: 0 },
        { question: 'What can we conclude about Tom\\'s trip?', questionPt: 'O que podemos concluir sobre a viagem de Tom?', options: ['He didn\\'t like the theater', 'The show was the highlight of his trip', 'He fell asleep', 'He wants to go home early'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']How did Tom buy discount tickets\?["'][\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the central theme of this passage?', questionPt: 'Qual é o tema central desta passagem?', options: ['The history of Times Square', 'A highly inspiring and successful experience of attending a Broadway show', 'How to write a musical', 'The high cost of living in New York'], correctIndex: 1 },
        { question: 'What does "buzzing with energy" mean?', questionPt: 'O que significa "buzzing with energy"?', options: ['Being completely silent', 'Being very vibrant, lively, and active', 'Being dangerous', 'Being dark and scary'], correctIndex: 1 },
        { question: 'Why did Tom get chills down his spine?', questionPt: 'Por que Tom sentiu arrepios na espinha?', options: ['Because it was cold in the theater', 'Because he was deeply moved and excited by the live orchestra', 'Because he was scared', 'Because he was sick'], correctIndex: 1 },
        { question: 'What is implied by a "standing ovation"?', questionPt: 'O que está implícito em uma "standing ovation" (ovação de pé)?', options: ['The audience wanted to leave', 'The audience stood up to show extreme appreciation and applause', 'The audience was tired of sitting', 'The audience was angry'], correctIndex: 1 },
      ]`
  },
  // Scenario 11: Cafe (Emily)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']What does Emily buy\?["'][\s\S]*?\]/, // Need to check exact text for A1
    replace: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Emily\\'s morning routine at the coffee shop', 'Emily cooking breakfast at home', 'Emily working as a barista', 'Emily buying a book'], correctIndex: 0 },
        { question: 'What does "it is her turn" mean?', questionPt: 'O que significa "it is her turn"?', options: ['She is spinning around', 'She is leaving the shop', 'She is the next person in line to order', 'She is sleeping'], correctIndex: 2 },
        { question: 'Why does the cashier ask for her name?', questionPt: 'Por que o caixa pergunta o nome dela?', options: ['To be her friend', 'To write it on the cup so they know it\\'s her order', 'To call the police', 'Because it is a test'], correctIndex: 1 },
        { question: 'What can we infer about Emily\\'s feelings?', questionPt: 'O que podemos inferir sobre os sentimentos de Emily?', options: ['She is enjoying a peaceful morning', 'She is angry about the price', 'She is in a rush and stressed', 'She hates coffee'], correctIndex: 0 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']Why did Emily go to the café\?["'][\s\S]*?\]/, // Need to check exact text for A2
    replace: `questionsA2: [
        { question: 'What is the central focus of this narrative?', questionPt: 'Qual é o foco central desta narrativa?', options: ['Emily\\'s daily morning ritual of enjoying artisanal coffee before work', 'The process of making caramel macchiatos', 'The history of Elm Street', 'Emily\\'s complaints about the café'], correctIndex: 0 },
        { question: 'What is a synonym for "commuters" as used in the text?', questionPt: 'Qual é um sinônimo para "commuters" como usado no texto?', options: ['Baristas', 'People traveling regularly to work', 'Tourists', 'Children'], correctIndex: 1 },
        { question: 'Why did the barista misspell Emily\\'s name as "Amelie"?', questionPt: 'Por que o barista escreveu o nome de Emily errado como "Amelie"?', options: ['Because he was making a joke', 'Because it is a common mistake when taking orders quickly in a loud café', 'Because he hates Emily', 'Because it is her real name'], correctIndex: 1 },
        { question: 'What does "savored every sip" imply?', questionPt: 'O que "savored every sip" implica?', options: ['She drank it extremely fast', 'She threw it away', 'She enjoyed the drink slowly and deeply', 'She didn\\'t like the taste'], correctIndex: 2 },
      ]`
  },
  // Scenario 12: Tech (Jack)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']What does Jack want to buy\?["'][\s\S]*?\]/, // Need to check exact text
    replace: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Jack buying a new smartphone', 'Jack fixing a broken TV', 'Jack working at a tech store', 'Jack taking photos in the park'], correctIndex: 0 },
        { question: 'What does "broken" mean?', questionPt: 'O que significa "broken"?', options: ['It is working very well', 'It is brand new', 'It is damaged and not working', 'It is very cheap'], correctIndex: 2 },
        { question: 'Why does Jack choose the black phone?', questionPt: 'Por que Jack escolhe o celular preto?', options: ['Because it is the only color they have', 'Because he likes the color black', 'Because it is cheaper', 'Because it is broken'], correctIndex: 1 },
        { question: 'What can we infer about the new phone?', questionPt: 'O que podemos inferir sobre o celular novo?', options: ['It doesn\\'t take good photos', 'It has a very good camera', 'It is a laptop', 'It doesn\\'t turn on'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']What was wrong with Jack\\'s old phone\?["'][\s\S]*?\]/, // Need to check exact text
    replace: `questionsA2: [
        { question: 'What is the primary theme of this story?', questionPt: 'Qual é o tema principal desta história?', options: ['The experience of purchasing and setting up a new smartphone', 'The dangers of dropping a phone', 'How to install a screen protector', 'Transferring data manually'], correctIndex: 0 },
        { question: 'What is the best synonym for "shattered"?', questionPt: 'Qual é o melhor sinônimo para "shattered"?', options: ['Scratched slightly', 'Broken into many pieces', 'Working perfectly', 'Clean'], correctIndex: 1 },
        { question: 'Why did the store employee help Jack with the data transfer?', questionPt: 'Por que o funcionário da loja ajudou Jack com a transferência de dados?', options: ['Because Jack paid extra', 'To provide good customer service and ensure a smooth transition', 'Because Jack\\'s phone was completely dead', 'Because it was a requirement'], correctIndex: 1 },
        { question: 'What does "seamless" mean in "the process was seamless"?', questionPt: 'O que significa "seamless" em "the process was seamless"?', options: ['It was full of errors', 'It took many hours', 'It went smoothly without any problems', 'It was very expensive'], correctIndex: 2 },
      ]`
  }
];

let updatedCount = 0;
for (const rep of replacements) {
  if (content.match(rep.find)) {
    content = content.replace(rep.find, rep.replace);
    updatedCount++;
  } else {
    // If not found, use a fallback approach: replace based on scenario index 10 and 11
    console.log("Could not find match for one replacement in scenarios.ts:", rep.find);
  }
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully updated ' + updatedCount + ' question blocks for scenarios 7-12.');

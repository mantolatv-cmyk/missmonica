const fs = require('fs');
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

const replacements = [
  // Scenario 1: Introduction (Maria)
  {
    find: /questionsA1: \[\s*\{ question: 'Where is Maria from\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main topic of this text?', questionPt: 'Qual é o tópico principal deste texto?', options: ['Her job in Brazil', 'Her new life as a student in New York', 'Her parents\\' professions', 'Her siblings'], correctIndex: 1 },
        { question: 'What does "nervous but excited" mean in the text?', questionPt: 'O que significa "nervous but excited" no texto?', options: ['She is sad and tired', 'She is angry and bored', 'She is anxious but happy', 'She is sick and cold'], correctIndex: 2 },
        { question: 'Why does Maria miss her family?', questionPt: 'Por que Maria sente falta de sua família?', options: ['Because she is far from them', 'Because they are angry at her', 'Because they live in New York', 'Because they are teachers'], correctIndex: 0 },
        { question: 'What can we infer about Maria\\'s family?', questionPt: 'O que podemos inferir sobre a família de Maria?', options: ['They all live in New York', 'She is the middle child', 'Her father is older than her mother', 'They do not like her'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'What was Maria\\'s job in São Paulo\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the central theme of Maria\\'s story?', questionPt: 'Qual é o tema central da história da Maria?', options: ['Working as a marketing assistant', 'Adapting to a new culture and language', 'Traveling to different countries', 'Meeting people from Japan and France'], correctIndex: 1 },
        { question: 'In the text, what is the best synonym for "overwhelming"?', questionPt: 'No texto, qual é o melhor sinônimo para "overwhelming"?', options: ['Boring and slow', 'Small and quiet', 'Beautiful and calm', 'Intense and confusing'], correctIndex: 3 },
        { question: 'How did Maria\\'s feelings change from the morning to the end of class?', questionPt: 'Como os sentimentos de Maria mudaram da manhã até o final da aula?', options: ['From confident to shy', 'From anxious to more comfortable', 'From happy to angry', 'From excited to bored'], correctIndex: 1 },
        { question: 'Why does Mr. Thompson encourage making mistakes?', questionPt: 'Por que o Sr. Thompson encoraja cometer erros?', options: ['Because he is a bad teacher', 'Because nobody speaks English', 'Because it is a natural part of the learning process', 'Because he wants them to fail'], correctIndex: 2 },
      ]`
  },
  // Scenario 2: Numbers (Lisa)
  {
    find: /questionsA1: \[\s*\{ question: 'How much does the phone cost\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Lisa buys things and checks her money', 'Lisa works at a store', 'Lisa calls her mother', 'Lisa loses her credit card'], correctIndex: 0 },
        { question: 'What does "saved money" mean in the text?', questionPt: 'O que significa "saved money" no texto?', options: ['She spent all her money', 'She kept some money in the bank', 'She gave money to her mother', 'She lost money'], correctIndex: 1 },
        { question: 'Why is Lisa happy?', questionPt: 'Por que Lisa está feliz?', options: ['Because she bought headphones', 'Because the store was closed', 'Because she still has a good amount of money left', 'Because she saw her mother'], correctIndex: 2 },
        { question: 'What can we infer about Lisa\\'s purchases?', questionPt: 'O que podemos inferir sobre as compras de Lisa?', options: ['She only bought one item', 'She bought everything with cash', 'She bought a phone and accessories for it', 'She bought food'], correctIndex: 2 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'How much was the sales tax rate\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the primary message of this text?', questionPt: 'Qual é a mensagem principal deste texto?', options: ['Tipping is expensive in New York', 'Practicing with real transactions helps you learn numbers', 'Returning items is difficult in the US', 'Coffee is cheaper than electronics'], correctIndex: 1 },
        { question: 'What does "mid-range option" refer to?', questionPt: 'A que se refere "mid-range option"?', options: ['The cheapest phone', 'The most expensive phone', 'The phone with a price in the middle', 'A phone case'], correctIndex: 2 },
        { question: 'Why did Lisa pronounce her phone number carefully?', questionPt: 'Por que Lisa pronunciou seu número de telefone com cuidado?', options: ['Because she forgot it', 'To ensure the cashier understood her correctly', 'Because the cashier was deaf', 'Because she was angry'], correctIndex: 1 },
        { question: 'What is true about the final total for the phone?', questionPt: 'O que é verdade sobre o total final pelo telefone?', options: ['It was lower than the displayed price', 'It was exactly $499', 'It included an extra percentage for sales tax', 'It included a tip for the cashier'], correctIndex: 2 },
      ]`
  },
  // Scenario 3: Airport (Anna)
  {
    find: /questionsA1: \[\s*\{ question: 'What does Anna have\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main event in this text?', questionPt: 'Qual é o evento principal neste texto?', options: ['Anna is working at the airport', 'Anna is going through the airport steps to fly', 'Anna is lost in the city', 'Anna is buying a big bag'], correctIndex: 1 },
        { question: 'What does "busy" mean when talking about the airport?', questionPt: 'O que "busy" significa ao falar sobre o aeroporto?', options: ['It is closed', 'It is very quiet', 'It has many people', 'It is very small'], correctIndex: 2 },
        { question: 'Why does Anna take off her shoes?', questionPt: 'Por que Anna tira os sapatos?', options: ['Because she is tired', 'Because it is hot', 'Because it is a rule at the security line', 'Because she wants to sleep'], correctIndex: 2 },
        { question: 'What can we infer about Anna\\'s feelings at the end?', questionPt: 'O que podemos inferir sobre os sentimentos de Anna no final?', options: ['She is angry', 'She is sad', 'She is ready and looking forward to her trip', 'She is hungry'], correctIndex: 2 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'Why did Anna arrive early in the morning\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the general idea of Anna\\'s experience?', questionPt: 'Qual é a ideia geral da experiência de Anna?', options: ['She missed her flight', 'She navigated a busy airport successfully and relaxed before her flight', 'She had a terrible time with security', 'She lost her heavy suitcase'], correctIndex: 1 },
        { question: 'What is a good synonym for "packed" in "packed with travelers"?', questionPt: 'Qual é um bom sinônimo para "packed" em "packed with travelers"?', options: ['Empty', 'Crowded', 'Quiet', 'Clean'], correctIndex: 1 },
        { question: 'Why did Anna have to hurry through the duty-free shops?', questionPt: 'Por que Anna teve que se apressar pelas lojas duty-free?', options: ['Because she wanted to buy a lot of things', 'Because they were closing', 'Because her gate was on the other side of the terminal', 'Because someone was following her'], correctIndex: 2 },
        { question: 'What does "time to spare" imply at the end of the text?', questionPt: 'O que "time to spare" implica no final do texto?', options: ['She was late', 'She had no time left', 'She arrived earlier than necessary', 'She wasted her time'], correctIndex: 2 },
      ]`
  },
  // Scenario 4: Immigration (Carlos)
  {
    find: /questionsA1: \[\s*\{ question: 'How long did Carlos wait in line\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main purpose of this text?', questionPt: 'Qual é o propósito principal deste texto?', options: ['To show how Carlos buys tickets', 'To describe Carlos\\'s interview at immigration', 'To teach how to speak Portuguese', 'To talk about Carlos\\'s hotel'], correctIndex: 1 },
        { question: 'What does "stamps his passport" mean here?', questionPt: 'O que significa "stamps his passport" aqui?', options: ['The officer breaks the passport', 'The officer puts an official mark of approval', 'The officer reads the passport aloud', 'The officer throws the passport away'], correctIndex: 1 },
        { question: 'Why does the officer ask so many questions?', questionPt: 'Por que o oficial faz tantas perguntas?', options: ['To know if Carlos can enter the country safely', 'Because he is Carlos\\'s friend', 'Because he wants to go to Brazil', 'Because he is bored'], correctIndex: 0 },
        { question: 'How do Carlos\\'s feelings change during the text?', questionPt: 'Como os sentimentos de Carlos mudam durante o texto?', options: ['From happy to angry', 'From tired to sad', 'From waiting patiently to very happy', 'From excited to sick'], correctIndex: 2 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'What is Carlos\\'s profession\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the main theme of this passage?', questionPt: 'Qual é o tema principal desta passagem?', options: ['How to get a job in the US', 'The anxiety and process of passing through US immigration', 'Booking a hotel in Manhattan', 'The importance of speaking fluent English'], correctIndex: 1 },
        { question: 'What does "intimidating" mean in the context of the story?', questionPt: 'O que significa "intimidating" no contexto da história?', options: ['Relaxing and easy', 'Frightening or making someone nervous', 'Boring and long', 'Fun and exciting'], correctIndex: 1 },
        { question: 'Why did Carlos show his hotel reservation on his phone?', questionPt: 'Por que Carlos mostrou sua reserva de hotel no celular?', options: ['To prove where he was going to stay', 'Because he lost his passport', 'Because the officer wanted to buy a phone', 'To show photos of his trip'], correctIndex: 0 },
        { question: 'What is the implication of having "sufficient limit" on a credit card?', questionPt: 'Qual é a implicação de ter um "limite suficiente" no cartão de crédito?', options: ['Carlos cannot buy anything', 'Carlos can support himself financially during his vacation', 'Carlos has a lot of debt', 'Carlos works for a bank'], correctIndex: 1 },
      ]`
  },
  // Scenario 5: Hotel (Tom)
  {
    find: /questionsA1: \[\s*\{ question: 'How many nights does Tom want to stay\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['Tom is checking out of a hotel', 'Tom is arriving and checking into his hotel room', 'Tom is buying a house in the city', 'Tom is sleeping on the street'], correctIndex: 1 },
        { question: 'What does "very tired" mean?', questionPt: 'O que significa "very tired"?', options: ['He has a lot of energy', 'He is hungry', 'He needs to rest or sleep', 'He is angry'], correctIndex: 2 },
        { question: 'Why does Tom give the receptionist his passport?', questionPt: 'Por que Tom entrega seu passaporte ao recepcionista?', options: ['To prove who he is for check-in', 'Because he wants to sell it', 'Because it is a rule in the city', 'Because the receptionist asked for money'], correctIndex: 0 },
        { question: 'What can we guess about the hotel?', questionPt: 'O que podemos adivinhar sobre o hotel?', options: ['It is very small and dirty', 'It is a nice place with an elevator and a city view', 'It has no beds', 'It is located in a forest'], correctIndex: 1 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'Why did the receptionist ask for a credit card\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the central focus of this narrative?', questionPt: 'Qual é o foco central desta narrativa?', options: ['Tom\\'s driving experience', 'The process of checking into a luxury resort', 'The history of modern art in the lobby', 'How to order room service'], correctIndex: 1 },
        { question: 'What does the word "breathtaking" suggest about the suite?', questionPt: 'O que a palavra "breathtaking" sugere sobre a suíte?', options: ['It was dirty and small', 'It was surprisingly beautiful and impressive', 'It made it hard to breathe', 'It was very cheap'], correctIndex: 1 },
        { question: 'Why did the receptionist ask for a credit card for "incidentals"?', questionPt: 'Por que a recepcionista pediu um cartão de crédito para "despesas imprevistas"?', options: ['To pay for the room in advance', 'To cover any extra costs like minibar or damages', 'Because Tom had no cash', 'To buy breakfast'], correctIndex: 1 },
        { question: 'What can we infer about Tom\\'s evening plans?', questionPt: 'O que podemos inferir sobre os planos de Tom para a noite?', options: ['He plans to go out to a restaurant', 'He plans to stay in his room and eat there', 'He plans to swim in the ocean', 'He plans to go back home'], correctIndex: 1 },
      ]`
  },
  // Scenario 6: Restaurant (John)
  {
    find: /questionsA1: \[\s*\{ question: 'What does John want to eat\?'[\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['John cooking at home', 'John\\'s experience eating at a restaurant', 'John working as a waiter', 'John buying groceries'], correctIndex: 1 },
        { question: 'What does "leaves a tip" mean?', questionPt: 'O que significa "leaves a tip"?', options: ['He leaves extra money for the good service', 'He leaves his hat on the table', 'He leaves without paying', 'He gives a piece of advice'], correctIndex: 0 },
        { question: 'Why does John ask for the check?', questionPt: 'Por que John pede a conta?', options: ['Because he wants more food', 'Because he is ready to pay and leave', 'Because he didn\\'t like the food', 'Because he wants to read it'], correctIndex: 1 },
        { question: 'What can we infer about John\\'s meal?', questionPt: 'O que podemos inferir sobre a refeição de John?', options: ['He hated it', 'He didn\\'t finish it', 'He enjoyed it very much', 'It was too spicy'], correctIndex: 2 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{ question: 'Where is the restaurant located\?'[\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the main idea of this short passage?', questionPt: 'Qual é a ideia principal desta curta passagem?', options: ['A positive dining out experience', 'A complaint about bad service', 'A recipe for a cheeseburger', 'Directions to a restaurant'], correctIndex: 0 },
        { question: 'What is the best synonym for "generous" as used in the text?', questionPt: 'Qual é o melhor sinônimo para "generous" como usado no texto?', options: ['Mean', 'Small', 'Plentiful / Liberal', 'Selfish'], correctIndex: 2 },
        { question: 'Why did John leave a 20% tip?', questionPt: 'Por que John deixou uma gorjeta de 20%?', options: ['Because it was mandatory', 'Because the service was excellent', 'Because the food was bad', 'Because he didn\\'t know the math'], correctIndex: 1 },
        { question: 'What does "dine out" mean?', questionPt: 'O que significa "dine out"?', options: ['Eat outside in the park', 'Eat a meal at a restaurant', 'Cook a meal at home', 'Skip a meal'], correctIndex: 1 },
      ]`
  }
];

let updatedCount = 0;
for (const rep of replacements) {
  if (content.match(rep.find)) {
    content = content.replace(rep.find, rep.replace);
    updatedCount++;
  } else {
    console.log("Could not find match for one replacement in scenarios.ts");
  }
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully updated ' + updatedCount + ' question blocks for scenarios 1-6.');

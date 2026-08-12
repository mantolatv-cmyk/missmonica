const fs = require('fs');

// Read original content
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

// The new questions generated based on the implementation plan
const newQuestions = [
  // Scenario 1: Introduction
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of this text?', questionPt: 'Qual é o tópico principal deste texto?', options: ['Her job in Brazil', 'Her new life as a student in New York', 'Her parents\\' professions', 'Her siblings'], correctIndex: 1 },
        { question: 'What does "nervous but excited" mean in the text?', questionPt: 'O que significa "nervous but excited" no texto?', options: ['She is sad and tired', 'She is angry and bored', 'She is anxious but happy', 'She is sick and cold'], correctIndex: 2 },
        { question: 'Why does Maria miss her family?', questionPt: 'Por que Maria sente falta de sua família?', options: ['Because she is far from them', 'Because they are angry at her', 'Because they live in New York', 'Because they are teachers'], correctIndex: 0 },
        { question: 'What can we infer about Maria\\'s family?', questionPt: 'O que podemos inferir sobre a família de Maria?', options: ['They all live in New York', 'She is the middle child', 'Her father is older than her mother', 'They do not like her'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central theme of Maria\\'s story?', questionPt: 'Qual é o tema central da história da Maria?', options: ['Working as a marketing assistant', 'Adapting to a new culture and language', 'Traveling to different countries', 'Meeting people from Japan and France'], correctIndex: 1 },
        { question: 'In the text, what is the best synonym for "overwhelming"?', questionPt: 'No texto, qual é o melhor sinônimo para "overwhelming"?', options: ['Boring and slow', 'Small and quiet', 'Beautiful and calm', 'Intense and confusing'], correctIndex: 3 },
        { question: 'How did Maria\\'s feelings change from the morning to the end of class?', questionPt: 'Como os sentimentos de Maria mudaram da manhã até o final da aula?', options: ['From confident to shy', 'From anxious to more comfortable', 'From happy to angry', 'From excited to bored'], correctIndex: 1 },
        { question: 'Why does Mr. Thompson encourage making mistakes?', questionPt: 'Por que o Sr. Thompson encoraja cometer erros?', options: ['Because he is a bad teacher', 'Because nobody speaks English', 'Because it is a natural part of the learning process', 'Because he wants them to fail'], correctIndex: 2 }
      ]`
  },
  // Scenario 2: Numbers
  {
    A1: `questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Lisa buys things and checks her money', 'Lisa works at a store', 'Lisa calls her mother', 'Lisa loses her credit card'], correctIndex: 0 },
        { question: 'What does "saved money" mean in the text?', questionPt: 'O que significa "saved money" no texto?', options: ['She spent all her money', 'She kept some money in the bank', 'She gave money to her mother', 'She lost money'], correctIndex: 1 },
        { question: 'Why is Lisa happy?', questionPt: 'Por que Lisa está feliz?', options: ['Because she bought headphones', 'Because the store was closed', 'Because she still has a good amount of money left', 'Because she saw her mother'], correctIndex: 2 },
        { question: 'What can we infer about Lisa\\'s purchases?', questionPt: 'O que podemos inferir sobre as compras de Lisa?', options: ['She only bought one item', 'She bought everything with cash', 'She bought a phone and accessories for it', 'She bought food'], correctIndex: 2 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the primary message of this text?', questionPt: 'Qual é a mensagem principal deste texto?', options: ['Tipping is expensive in New York', 'Practicing with real transactions helps you learn numbers', 'Returning items is difficult in the US', 'Coffee is cheaper than electronics'], correctIndex: 1 },
        { question: 'What does "mid-range option" refer to?', questionPt: 'A que se refere "mid-range option"?', options: ['The cheapest phone', 'The most expensive phone', 'The phone with a price in the middle', 'A phone case'], correctIndex: 2 },
        { question: 'Why did Lisa pronounce her phone number carefully?', questionPt: 'Por que Lisa pronunciou seu número de telefone com cuidado?', options: ['Because she forgot it', 'To ensure the cashier understood her correctly', 'Because the cashier was deaf', 'Because she was angry'], correctIndex: 1 },
        { question: 'What is true about the final total for the phone?', questionPt: 'O que é verdade sobre o total final pelo telefone?', options: ['It was lower than the displayed price', 'It was exactly $499', 'It included an extra percentage for sales tax', 'It included a tip for the cashier'], correctIndex: 2 }
      ]`
  },
  // Scenario 3: Airport
  {
    A1: `questionsA1: [
        { question: 'What is the main event in this text?', questionPt: 'Qual é o evento principal neste texto?', options: ['Anna is working at the airport', 'Anna is going through the airport steps to fly', 'Anna is lost in the city', 'Anna is buying a big bag'], correctIndex: 1 },
        { question: 'What does "busy" mean when talking about the airport?', questionPt: 'O que "busy" significa ao falar sobre o aeroporto?', options: ['It is closed', 'It is very quiet', 'It has many people', 'It is very small'], correctIndex: 2 },
        { question: 'Why does Anna take off her shoes?', questionPt: 'Por que Anna tira os sapatos?', options: ['Because she is tired', 'Because it is hot', 'Because it is a rule at the security line', 'Because she wants to sleep'], correctIndex: 2 },
        { question: 'What can we infer about Anna\\'s feelings at the end?', questionPt: 'O que podemos inferir sobre os sentimentos de Anna no final?', options: ['She is angry', 'She is sad', 'She is ready and looking forward to her trip', 'She is hungry'], correctIndex: 2 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the general idea of Anna\\'s experience?', questionPt: 'Qual é a ideia geral da experiência de Anna?', options: ['She missed her flight', 'She navigated a busy airport successfully and relaxed before her flight', 'She had a terrible time with security', 'She lost her heavy suitcase'], correctIndex: 1 },
        { question: 'What is a good synonym for "packed" in "packed with travelers"?', questionPt: 'Qual é um bom sinônimo para "packed" em "packed with travelers"?', options: ['Empty', 'Crowded', 'Quiet', 'Clean'], correctIndex: 1 },
        { question: 'Why did Anna have to hurry through the duty-free shops?', questionPt: 'Por que Anna teve que se apressar pelas lojas duty-free?', options: ['Because she wanted to buy a lot of things', 'Because they were closing', 'Because her gate was on the other side of the terminal', 'Because someone was following her'], correctIndex: 2 },
        { question: 'What does "time to spare" imply at the end of the text?', questionPt: 'O que "time to spare" implica no final do texto?', options: ['She was late', 'She had no time left', 'She arrived earlier than necessary', 'She wasted her time'], correctIndex: 2 }
      ]`
  },
  // Scenario 4: Immigration
  {
    A1: `questionsA1: [
        { question: 'What is the main purpose of this text?', questionPt: 'Qual é o propósito principal deste texto?', options: ['To show how Carlos buys tickets', 'To describe Carlos\\'s interview at immigration', 'To teach how to speak Portuguese', 'To talk about Carlos\\'s hotel'], correctIndex: 1 },
        { question: 'What does "stamps his passport" mean here?', questionPt: 'O que significa "stamps his passport" aqui?', options: ['The officer breaks the passport', 'The officer puts an official mark of approval', 'The officer reads the passport aloud', 'The officer throws the passport away'], correctIndex: 1 },
        { question: 'Why does the officer ask so many questions?', questionPt: 'Por que o oficial faz tantas perguntas?', options: ['To know if Carlos can enter the country safely', 'Because he is Carlos\\'s friend', 'Because he wants to go to Brazil', 'Because he is bored'], correctIndex: 0 },
        { question: 'How do Carlos\\'s feelings change during the text?', questionPt: 'Como os sentimentos de Carlos mudam durante o texto?', options: ['From happy to angry', 'From tired to sad', 'From waiting patiently to very happy', 'From excited to sick'], correctIndex: 2 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the main theme of this passage?', questionPt: 'Qual é o tema principal desta passagem?', options: ['How to get a job in the US', 'The anxiety and process of passing through US immigration', 'Booking a hotel in Manhattan', 'The importance of speaking fluent English'], correctIndex: 1 },
        { question: 'What does "intimidating" mean in the context of the story?', questionPt: 'O que significa "intimidating" no contexto da história?', options: ['Relaxing and easy', 'Frightening or making someone nervous', 'Boring and long', 'Fun and exciting'], correctIndex: 1 },
        { question: 'Why did Carlos show his hotel reservation on his phone?', questionPt: 'Por que Carlos mostrou sua reserva de hotel no celular?', options: ['To prove where he was going to stay', 'Because he lost his passport', 'Because the officer wanted to buy a phone', 'To show photos of his trip'], correctIndex: 0 },
        { question: 'What is the implication of having "sufficient limit" on a credit card?', questionPt: 'Qual é a implicação de ter um "limite suficiente" no cartão de crédito?', options: ['Carlos cannot buy anything', 'Carlos can support himself financially during his vacation', 'Carlos has a lot of debt', 'Carlos works for a bank'], correctIndex: 1 }
      ]`
  },
  // Scenario 5: Hotel
  {
    A1: `questionsA1: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['Tom is checking out of a hotel', 'Tom is arriving and checking into his hotel room', 'Tom is buying a house in the city', 'Tom is sleeping on the street'], correctIndex: 1 },
        { question: 'What does "very tired" mean?', questionPt: 'O que significa "very tired"?', options: ['He has a lot of energy', 'He is hungry', 'He needs to rest or sleep', 'He is angry'], correctIndex: 2 },
        { question: 'Why does Tom give the receptionist his passport?', questionPt: 'Por que Tom entrega seu passaporte ao recepcionista?', options: ['To prove who he is for check-in', 'Because he wants to sell it', 'Because it is a rule in the city', 'Because the receptionist asked for money'], correctIndex: 0 },
        { question: 'What can we guess about the hotel?', questionPt: 'O que podemos adivinhar sobre o hotel?', options: ['It is very small and dirty', 'It is a nice place with an elevator and a city view', 'It has no beds', 'It is located in a forest'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central focus of this narrative?', questionPt: 'Qual é o foco central desta narrativa?', options: ['Tom\\'s driving experience', 'The process of checking into a luxury resort', 'The history of modern art in the lobby', 'How to order room service'], correctIndex: 1 },
        { question: 'What does the word "breathtaking" suggest about the suite?', questionPt: 'O que a palavra "breathtaking" sugere sobre a suíte?', options: ['It was dirty and small', 'It was surprisingly beautiful and impressive', 'It made it hard to breathe', 'It was very cheap'], correctIndex: 1 },
        { question: 'Why did the receptionist ask for a credit card for "incidentals"?', questionPt: 'Por que a recepcionista pediu um cartão de crédito para "despesas imprevistas"?', options: ['To pay for the room in advance', 'To cover any extra costs like minibar or damages', 'Because Tom had no cash', 'To buy breakfast'], correctIndex: 1 },
        { question: 'What can we infer about Tom\\'s evening plans?', questionPt: 'O que podemos inferir sobre os planos de Tom para a noite?', options: ['He plans to go out to a restaurant', 'He plans to stay in his room and eat there', 'He plans to swim in the ocean', 'He plans to go back home'], correctIndex: 1 }
      ]`
  },
  // Scenario 6: Restaurant
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['John cooking at home', 'John\\'s experience eating at a restaurant', 'John working as a waiter', 'John buying groceries'], correctIndex: 1 },
        { question: 'What does "leaves a tip" mean?', questionPt: 'O que significa "leaves a tip"?', options: ['He leaves extra money for the good service', 'He leaves his hat on the table', 'He leaves without paying', 'He gives a piece of advice'], correctIndex: 0 },
        { question: 'Why does John ask for the check?', questionPt: 'Por que John pede a conta?', options: ['Because he wants more food', 'Because he is ready to pay and leave', 'Because he didn\\'t like the food', 'Because he wants to read it'], correctIndex: 1 },
        { question: 'What can we infer about John\\'s meal?', questionPt: 'O que podemos inferir sobre a refeição de John?', options: ['He hated it', 'He didn\\'t finish it', 'He enjoyed it very much', 'It was too spicy'], correctIndex: 2 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the main idea of this short passage?', questionPt: 'Qual é a ideia principal desta curta passagem?', options: ['A positive dining out experience', 'A complaint about bad service', 'A recipe for a cheeseburger', 'Directions to a restaurant'], correctIndex: 0 },
        { question: 'What is the best synonym for "generous" as used in the text?', questionPt: 'Qual é o melhor sinônimo para "generous" como usado no texto?', options: ['Mean', 'Small', 'Plentiful / Liberal', 'Selfish'], correctIndex: 2 },
        { question: 'Why did John leave a 20% tip?', questionPt: 'Por que John deixou uma gorjeta de 20%?', options: ['Because it was mandatory', 'Because the service was excellent', 'Because the food was bad', 'Because he didn\\'t know the math'], correctIndex: 1 },
        { question: 'What does "dine out" mean?', questionPt: 'O que significa "dine out"?', options: ['Eat outside in the park', 'Eat a meal at a restaurant', 'Cook a meal at home', 'Skip a meal'], correctIndex: 1 }
      ]`
  },
  // Scenario 7: Directions
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Sarah is eating at a restaurant', 'Sarah is lost and asking for directions to the museum', 'Sarah is looking for a police station', 'Sarah is going home'], correctIndex: 1 },
        { question: 'What does "lost" mean in this story?', questionPt: 'O que significa "lost" nesta história?', options: ['She won a prize', 'She does not know where she is', 'She found a new friend', 'She is very hungry'], correctIndex: 1 },
        { question: 'Why does Sarah ask a police officer for help?', questionPt: 'Por que Sarah pede ajuda a um policial?', options: ['Because he is a police officer and can give directions', 'Because she wants to buy something from him', 'Because she knows him', 'Because she wants to arrest someone'], correctIndex: 0 },
        { question: 'What can we guess about the museum\\'s location?', questionPt: 'O que podemos adivinhar sobre a localização do museu?', options: ['It is very far away', 'It is near a park and a bank', 'It is inside a police station', 'It is not in the city'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['How to use a phone map', 'A successful experience of navigating a new city by asking for directions', 'A bad experience with a rude local', 'A history of the modern art museum'], correctIndex: 1 },
        { question: 'What does "disoriented" mean?', questionPt: 'O que significa "disoriented"?', options: ['Knowing exactly where to go', 'Losing one\\'s sense of direction', 'Feeling very angry', 'Being very tired'], correctIndex: 1 },
        { question: 'Why did Sarah approach the local with a dog?', questionPt: 'Por que Sarah abordou o morador com o cachorro?', options: ['Because her phone battery died and she needed directions', 'Because she wanted to pet the dog', 'Because he was a police officer', 'Because she wanted to buy the dog'], correctIndex: 0 },
        { question: 'What is the implication of taking a "sharp right"?', questionPt: 'Qual é a implicação de fazer uma "sharp right"?', options: ['Turning right very slightly', 'Making a quick and tight turn to the right', 'Walking straight on the right side', 'Stopping completely on the right'], correctIndex: 1 }
      ]`
  },
  // Scenario 8: Transport
  {
    A1: `questionsA1: [
        { question: 'What is the main event in the text?', questionPt: 'Qual é o evento principal no texto?', options: ['Mark taking a taxi from the airport to his hotel', 'Mark buying a car', 'Mark going to a restaurant', 'Mark taking a train'], correctIndex: 0 },
        { question: 'What does "traffic is very bad" mean?', questionPt: 'O que significa "traffic is very bad"?', options: ['The cars are moving very fast', 'There are many cars and they are moving slowly', 'There are no cars on the road', 'The roads are broken'], correctIndex: 1 },
        { question: 'Why does Mark pay 25 dollars?', questionPt: 'Por que Mark paga 25 dólares?', options: ['To buy the taxi', 'Because it is the cost of the ride shown on the meter', 'To buy food', 'Because the driver is his friend'], correctIndex: 1 },
        { question: 'What can we infer about Mark\\'s trip?', questionPt: 'O que podemos inferir sobre a viagem de Mark?', options: ['It was very quick', 'It took 30 minutes because of the traffic', 'He drove the car himself', 'He didn\\'t arrive at the hotel'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central theme of this passage?', questionPt: 'Qual é o tema central desta passagem?', options: ['Driving a taxi in a big city', 'Navigating traffic while traveling to a hotel from the airport', 'Checking emails during a taxi ride', 'Buying a new suitcase'], correctIndex: 1 },
        { question: 'What does "bumper-to-bumper traffic" mean?', questionPt: 'O que significa "bumper-to-bumper traffic"?', options: ['Cars crashing into each other', 'A road with no cars', 'Very heavy traffic where cars are extremely close together and moving slowly', 'Cars driving very fast'], correctIndex: 2 },
        { question: 'Why did Mark ask the driver to take the highway?', questionPt: 'Por que Mark pediu ao motorista para pegar a rodovia?', options: ['Because he wanted to see the scenery', 'In an attempt to avoid local traffic', 'Because he wanted to drive fast', 'Because it was cheaper'], correctIndex: 1 },
        { question: 'What is implied by Mark giving a 50 dollar bill and keeping the change?', questionPt: 'O que está implícito quando Mark dá uma nota de 50 dólares e diz para ficar com o troco?', options: ['He forgot his money', 'He paid for the ride and gave a 15 dollar tip', 'He was angry at the driver', 'He wanted his change back'], correctIndex: 1 }
      ]`
  },
  // Scenario 9: Medical
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the story?', questionPt: 'Qual é o tópico principal da história?', options: ['Peter going to the doctor', 'Peter buying medicine at the pharmacy for his headache', 'Peter working at the pharmacy', 'Peter buying food'], correctIndex: 1 },
        { question: 'What does "head hurts a lot" mean?', questionPt: 'O que significa "head hurts a lot"?', options: ['He is very happy', 'He has a strong headache', 'His head is very big', 'He is wearing a hat'], correctIndex: 1 },
        { question: 'Why does Peter buy a bottle of water?', questionPt: 'Por que Peter compra uma garrafa de água?', options: ['To wash his face', 'To take his pills right away', 'To give to the pharmacist', 'To cook'], correctIndex: 1 },
        { question: 'What can we infer about Peter\\'s pain?', questionPt: 'O que podemos inferir sobre a dor de Peter?', options: ['It is very strong because he takes the pills immediately', 'It is very light', 'He is pretending to be sick', 'It went away before he took the medicine'], correctIndex: 0 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the primary message of this text?', questionPt: 'Qual é a mensagem principal deste texto?', options: ['How to become a pharmacist', 'A man seeking quick relief for a severe migraine at a drugstore', 'The dangers of taking medicine', 'Buying water at a pharmacy'], correctIndex: 1 },
        { question: 'What is the best synonym for "relief" as used at the end of the text?', questionPt: 'Qual é o melhor sinônimo para "relief" como usado no final do texto?', options: ['Pain', 'Alleviation of distress or pain', 'More headaches', 'Drowsiness'], correctIndex: 1 },
        { question: 'Why did the pharmacist mention "mild drowsiness"?', questionPt: 'Por que a farmacêutica mencionou "mild drowsiness" (sonolência leve)?', options: ['To tell him he will not be able to sleep', 'As a warning about a possible side effect of the strong medication', 'To suggest he buys coffee', 'To tell him he must sleep for 4 days'], correctIndex: 1 },
        { question: 'What is the implication of taking "one tablet every six hours"?', questionPt: 'Qual é a implicação de tomar "um comprimido a cada seis horas"?', options: ['He should take them all at once', 'He must space out his doses throughout the day', 'He can take them every hour', 'He only needs one tablet ever'], correctIndex: 1 }
      ]`
  },
  // Scenario 10: Entertainment
  {
    A1: `questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Tom hates musicals', 'Tom and his friend have a great night watching a Broadway show', 'Tom and his friend get lost in the theater', 'Tom works as an actor'], correctIndex: 1 },
        { question: 'What does "talented" mean?', questionPt: 'O que significa "talented"?', options: ['Very bad at singing', 'Having a natural ability or skill to act and sing well', 'Being very tall', 'Being very old'], correctIndex: 1 },
        { question: 'Why do they buy water and soda?', questionPt: 'Por que eles compram água e refrigerante?', options: ['Because they have time before the show starts', 'Because it is mandatory', 'Because they want to throw it', 'Because they are outside'], correctIndex: 0 },
        { question: 'What can we conclude about Tom\\'s trip?', questionPt: 'O que podemos concluir sobre a viagem de Tom?', options: ['He didn\\'t like the theater', 'The show was the highlight of his trip', 'He fell asleep', 'He wants to go home early'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central theme of this passage?', questionPt: 'Qual é o tema central desta passagem?', options: ['The history of Times Square', 'A highly inspiring and successful experience of attending a Broadway show', 'How to write a musical', 'The high cost of living in New York'], correctIndex: 1 },
        { question: 'What does "buzzing with energy" mean?', questionPt: 'O que significa "buzzing with energy"?', options: ['Being completely silent', 'Being very vibrant, lively, and active', 'Being dangerous', 'Being dark and scary'], correctIndex: 1 },
        { question: 'Why did Tom get chills down his spine?', questionPt: 'Por que Tom sentiu arrepios na espinha?', options: ['Because it was cold in the theater', 'Because he was deeply moved and excited by the live orchestra', 'Because he was scared', 'Because he was sick'], correctIndex: 1 },
        { question: 'What is implied by a "standing ovation"?', questionPt: 'O que está implícito em uma "standing ovation" (ovação de pé)?', options: ['The audience wanted to leave', 'The audience stood up to show extreme appreciation and applause', 'The audience was tired of sitting', 'The audience was angry'], correctIndex: 1 }
      ]`
  },
  // Scenario 11: Cafe
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Emily\\'s morning routine at the coffee shop', 'Emily cooking breakfast at home', 'Emily working as a barista', 'Emily buying a book'], correctIndex: 0 },
        { question: 'What does "it is her turn" mean?', questionPt: 'O que significa "it is her turn"?', options: ['She is spinning around', 'She is leaving the shop', 'She is the next person in line to order', 'She is sleeping'], correctIndex: 2 },
        { question: 'Why does the cashier ask for her name?', questionPt: 'Por que o caixa pergunta o nome dela?', options: ['To be her friend', 'To write it on the cup so they know it\\'s her order', 'To call the police', 'Because it is a test'], correctIndex: 1 },
        { question: 'What can we infer about Emily\\'s feelings?', questionPt: 'O que podemos inferir sobre os sentimentos de Emily?', options: ['She is enjoying a peaceful morning', 'She is angry about the price', 'She is in a rush and stressed', 'She hates coffee'], correctIndex: 0 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central focus of this narrative?', questionPt: 'Qual é o foco central desta narrativa?', options: ['Emily\\'s daily morning ritual of enjoying artisanal coffee before work', 'The process of making caramel macchiatos', 'The history of Elm Street', 'Emily\\'s complaints about the café'], correctIndex: 0 },
        { question: 'What is a synonym for "commuters" as used in the text?', questionPt: 'Qual é um sinônimo para "commuters" como usado no texto?', options: ['Baristas', 'People traveling regularly to work', 'Tourists', 'Children'], correctIndex: 1 },
        { question: 'Why did the cashier ask for a name for the cup?', questionPt: 'Por que o caixa pediu um nome para o copo?', options: ['Because he was making a joke', 'To identify her customized drink in a fast-paced environment', 'Because he hates Emily', 'Because it is her real name'], correctIndex: 1 },
        { question: 'What does "energized" imply at the end of the text?', questionPt: 'O que "energized" implica no final do texto?', options: ['She was extremely tired', 'She felt sad and down', 'She felt active and full of energy to start her day', 'She didn\\'t like the taste'], correctIndex: 2 }
      ]`
  },
  // Scenario 12: Tech
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Ana setting up her phone to use in the US', 'Ana buying a new smartphone', 'Ana fixing a broken TV', 'Ana taking photos in the park'], correctIndex: 0 },
        { question: 'What does "slow" mean in the text?', questionPt: 'O que significa "slow" no texto?', options: ['It is working very well and fast', 'It is brand new', 'It takes a long time to load things', 'It is very cheap'], correctIndex: 2 },
        { question: 'Why does Ana need a power adapter?', questionPt: 'Por que Ana precisa de um adaptador de tomada?', options: ['Because the plugs in the US are different from her country', 'Because she likes the color black', 'Because it is cheaper', 'Because her phone is broken'], correctIndex: 0 },
        { question: 'What can we infer about the map app?', questionPt: 'O que podemos inferir sobre o aplicativo de mapa?', options: ['It uses a lot of internet data', 'It is very useful because she can use it offline', 'It is a game', 'It doesn\\'t work'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the primary theme of this story?', questionPt: 'Qual é o tema principal desta história?', options: ['The challenge and process of staying connected digitally while traveling abroad', 'The dangers of dropping a phone', 'How to install a screen protector', 'Transferring data manually'], correctIndex: 0 },
        { question: 'What is the best synonym for "opted"?', questionPt: 'Qual é o melhor sinônimo para "opted"?', options: ['Rejected', 'Chose or selected', 'Ignored', 'Complained'], correctIndex: 1 },
        { question: 'Why did Ana choose the premium plan?', questionPt: 'Por que Ana escolheu o plano premium?', options: ['Because she wanted to share her Wi-Fi and use GPS constantly', 'To provide good customer service', 'Because her phone was completely dead', 'Because it was a requirement'], correctIndex: 0 },
        { question: 'What does "precious resources" refer to in the text?', questionPt: 'A que se refere "precious resources" no texto?', options: ['Money and gold', 'Coffee and tea', 'Wi-Fi passwords and power outlets', 'Friends and family'], correctIndex: 2 }
      ]`
  },
  // Scenario 13: Smalltalk
  {
    A1: `questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Mark has a friendly morning chat with his neighbor', 'Mark hates his neighbor', 'Mark is stuck in the elevator', 'Mark goes to a bank'], correctIndex: 0 },
        { question: 'What does "friendly" mean in the text?', questionPt: 'O que significa "friendly" no texto?', options: ['Mean and angry', 'Kind and pleasant', 'Cold and silent', 'Fast and loud'], correctIndex: 1 },
        { question: 'Why do they talk about the weather?', questionPt: 'Por que eles falam sobre o tempo?', options: ['Because they are meteorologists', 'It is a common and polite topic for a quick chat', 'Because it is raining inside', 'To argue'], correctIndex: 1 },
        { question: 'What can we infer about their relationship?', questionPt: 'O que podemos inferir sobre o relacionamento deles?', options: ['They are polite and have a good relationship', 'They are best friends', 'They never talk', 'They are angry at each other'], correctIndex: 0 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the general topic of this passage?', questionPt: 'Qual é o tópico geral desta passagem?', options: ['The history of Brooklyn', 'The cultural nuances of American small talk', 'How to order coffee', 'Applying for a job'], correctIndex: 1 },
        { question: 'What does "social lubricant" imply?', questionPt: 'O que "social lubricant" implica?', options: ['Something that makes social interactions smoother and easier', 'A type of oil for machines', 'A way to avoid people', 'Something that causes arguments'], correctIndex: 0 },
        { question: 'Why was Mark initially confused by "How are you?"', questionPt: 'Por que Mark ficou inicialmente confuso com "How are you?"', options: ['He didn\\'t speak English at all', 'He didn\\'t know if it was a genuine question or just a greeting', 'He thought it was an insult', 'He didn\\'t hear the barista'], correctIndex: 1 },
        { question: 'What can we infer about talking to strangers in the US?', questionPt: 'O que podemos inferir sobre conversar com estranhos nos EUA?', options: ['It is illegal', 'It can lead to genuine friendships if the topic is right', 'It always causes problems', 'People only talk about politics'], correctIndex: 1 }
      ]`
  },
  // Scenario 14: Slangs
  {
    A1: `questionsA1: [
        { question: 'What is the main message of the text?', questionPt: 'Qual é a mensagem principal do texto?', options: ['Lucas is learning informal American expressions', 'Lucas is eating at a good restaurant', 'Lucas is angry at his friend', 'Lucas is buying a notebook'], correctIndex: 0 },
        { question: 'What does "hang out" mean?', questionPt: 'O que significa "hang out"?', options: ['To hang clothes on a line', 'To spend time relaxing with friends', 'To go to sleep', 'To run away'], correctIndex: 1 },
        { question: 'Why does Lucas write the new words in his notebook?', questionPt: 'Por que Lucas escreve as novas palavras em seu caderno?', options: ['Because he wants to forget them', 'Because his friend forces him to', 'To help him remember them later', 'To sell the notebook'], correctIndex: 2 },
        { question: 'What can we infer about Lucas\\'s attitude?', questionPt: 'O que podemos inferir sobre a atitude de Lucas?', options: ['He is curious and wants to learn', 'He hates English', 'He thinks everything is boring', 'He is very sad'], correctIndex: 0 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the primary theme of the story?', questionPt: 'Qual é o tema principal da história?', options: ['The difficulty of understanding American slang and idioms', 'The process of renting an apartment', 'A fight between roommates', 'Going to sleep early'], correctIndex: 0 },
        { question: 'What is a good synonym for "insane" in the context of the story?', questionPt: 'Qual é um bom sinônimo para "insane" no contexto da história?', options: ['Mentally ill', 'Boring', 'Intense or crazy (in a positive way)', 'Quiet'], correctIndex: 2 },
        { question: 'Why was Lucas confused when Jake said "I\\'m down"?', questionPt: 'Por que Lucas ficou confuso quando Jake disse "I\\'m down"?', options: ['Because Lucas thought Jake was sad', 'Because Jake was pointing at the floor', 'Because they were on the roof', 'Because Lucas didn\\'t hear him'], correctIndex: 0 },
        { question: 'What is the implication of calling slang a "secret weapon"?', questionPt: 'Qual é a implicação de chamar as gírias de "secret weapon" (arma secreta)?', options: ['It is a dangerous tool', 'It is a highly effective skill for connecting with native speakers', 'It is illegal to use', 'It is a physical weapon'], correctIndex: 1 }
      ]`
  },
  // Scenario 15: Shopping
  {
    A1: `questionsA1: [
        { question: 'What is the main event in the story?', questionPt: 'Qual é o evento principal da história?', options: ['Lisa buys a pretty red dress at the mall', 'Lisa works at a clothes store', 'Lisa buys food', 'Lisa buys a mirror'], correctIndex: 0 },
        { question: 'What does "try it on" mean?', questionPt: 'O que significa "try it on"?', options: ['To wash the dress', 'To put the dress on to see if it fits', 'To tear the dress', 'To return the dress'], correctIndex: 1 },
        { question: 'Why does Lisa smile when she looks in the mirror?', questionPt: 'Por que Lisa sorri quando se olha no espelho?', options: ['Because the mirror is funny', 'Because she likes how the dress looks on her', 'Because she sees a friend', 'Because the dress is too big'], correctIndex: 1 },
        { question: 'What can we infer about the price?', questionPt: 'O que podemos inferir sobre o preço?', options: ['She couldn\\'t afford it', 'She paid for it in cash', 'It was free', 'She paid with a credit card'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['How to design a dress', 'Lisa\\'s successful shopping trip to update her summer wardrobe', 'Returning a defective item', 'A very empty mall'], correctIndex: 1 },
        { question: 'What does "bustling" mean?', questionPt: 'O que significa "bustling"?', options: ['Empty and quiet', 'Full of busy activity and people', 'Dark and scary', 'Cold and wet'], correctIndex: 1 },
        { question: 'Why did the assistant say "You\\'re in luck"?', questionPt: 'Por que a assistente disse "You\\'re in luck"?', options: ['Because Lisa won the lottery', 'Because it was the very last dress in Lisa\\'s size', 'Because it was raining outside', 'Because the store was closing'], correctIndex: 1 },
        { question: 'What does the idiom "fit like a glove" imply?', questionPt: 'O que a expressão idiomática "fit like a glove" implica?', options: ['It was too tight', 'It fit perfectly and comfortably', 'It looked like a hand', 'It was the wrong size'], correctIndex: 1 }
      ]`
  },
  // Scenario 16: Beauty
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Julia getting a new haircut and color at the salon', 'Julia buying a new dress', 'Julia washing her hair at home', 'Julia going to a party'], correctIndex: 0 },
        { question: 'What does "new look" mean in the text?', questionPt: 'O que significa "new look" no texto?', options: ['A new pair of glasses', 'A change in her appearance', 'A new book', 'A new job'], correctIndex: 1 },
        { question: 'Why does she wait for 30 minutes?', questionPt: 'Por que ela espera por 30 minutes?', options: ['For the blonde color to set in her hair', 'Because the hairdresser is on a break', 'To read a magazine', 'Because it is raining'], correctIndex: 0 },
        { question: 'What can we infer about the result?', questionPt: 'O que podemos inferir sobre o resultado?', options: ['She hates it', 'She thinks it is too short', 'She is very happy with her new hair', 'She wants to change it back'], correctIndex: 2 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the central focus of this narrative?', questionPt: 'Qual é o foco central desta narrativa?', options: ['The steps of a dramatic hair makeover at a high-end salon', 'How to cut your own hair', 'The recipe for herbal tea', 'A bad experience at a salon'], correctIndex: 0 },
        { question: 'What is the best synonym for "drastic"?', questionPt: 'Qual é o melhor sinônimo para "drastic"?', options: ['Minor', 'Extreme and sudden', 'Slow and boring', 'Invisible'], correctIndex: 1 },
        { question: 'Why did the hairdresser suggest blonde highlights?', questionPt: 'Por que a cabeleireira sugeriu mechas loiras?', options: ['Because they were cheaper', 'To brighten Julia\\'s complexion', 'Because she ran out of dark dye', 'Because Julia\\'s hair was falling out'], correctIndex: 1 },
        { question: 'What does the word "thrilled" imply at the end?', questionPt: 'O que a palavra "thrilled" implica no final?', options: ['She was extremely excited and pleased', 'She was terrified and scared', 'She was bored', 'She was disappointed'], correctIndex: 0 }
      ]`
  },
  // Scenario 17: Carrental
  {
    A1: `questionsA1: [
        { question: 'What is the main event in the text?', questionPt: 'Qual é o evento principal no texto?', options: ['Roberto buying a new car', 'Roberto renting a car for a trip', 'Roberto fixing a scratch on his car', 'Roberto taking a taxi'], correctIndex: 1 },
        { question: 'What does "insurance" mean in this story?', questionPt: 'O que significa "insurance" nesta história?', options: ['Extra money to protect him if the car gets damaged', 'Gasoline for the car', 'Food for the trip', 'A type of car'], correctIndex: 0 },
        { question: 'Why does Roberto take photos of the car?', questionPt: 'Por que Roberto tira fotos do carro?', options: ['Because he likes photography', 'To have proof of the scratches before he drives it', 'Because it is a rule', 'To send to his friend'], correctIndex: 1 },
        { question: 'What can we guess about Roberto\\'s trip?', questionPt: 'O que podemos adivinhar sobre a viagem de Roberto?', options: ['It is a one-day trip', 'It will last five days', 'He will walk', 'He doesn\\'t have a driver\\'s license'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['How to buy a car in the US', 'The details and options involved in renting a car in the US', 'Driving on the highway', 'How to fix scratches'], correctIndex: 1 },
        { question: 'What does "fuel efficiency" mean?', questionPt: 'O que significa "fuel efficiency"?', options: ['A car that uses a lot of gas', 'A car that uses gas economically', 'A car that is very fast', 'A car that runs on water'], correctIndex: 1 },
        { question: 'Why did Roberto choose to return the car with a full tank himself?', questionPt: 'Por que Roberto escolheu devolver o carro com o tanque cheio ele mesmo?', options: ['Because he loves gas stations', 'In order to save money', 'Because it was mandatory', 'Because the car was empty'], correctIndex: 1 },
        { question: 'What is the purpose of inspecting the vehicle and noting scratches?', questionPt: 'Qual é o propósito de inspecionar o veículo e anotar arranhões?', options: ['To complain to the manager', 'To ensure he is not held responsible for pre-existing damage', 'To clean the car', 'To get a discount'], correctIndex: 1 }
      ]`
  },
  // Scenario 18: Supermarket
  {
    A1: `questionsA1: [
        { question: 'What is the main topic of the story?', questionPt: 'Qual é o tópico principal da história?', options: ['Carla shopping for food at the supermarket', 'Carla cooking dinner at home', 'Carla working as a cashier', 'Carla planting a garden'], correctIndex: 0 },
        { question: 'What does "dairy section" mean?', questionPt: 'O que significa "dairy section"?', options: ['The place where they sell bread', 'The part of the store with milk and cheese', 'The checkout line', 'The parking lot'], correctIndex: 1 },
        { question: 'Why does Carla look at her list again?', questionPt: 'Por que Carla olha para a lista novamente?', options: ['To see if she forgot anything', 'Because she likes reading', 'Because she has no money', 'Because the cashier asked for it'], correctIndex: 0 },
        { question: 'What can we infer about Carla\\'s payment?', questionPt: 'O que podemos inferir sobre o pagamento de Carla?', options: ['She paid with a credit card', 'She gave the cashier a 50 dollar bill', 'She didn\\'t have enough money', 'She stole the food'], correctIndex: 1 }
      ]`,
    A2: `questionsA2: [
        { question: 'What is the primary message of this text?', questionPt: 'Qual é a mensagem principal deste texto?', options: ['How to cook American food', 'The overwhelming cultural differences in an American supermarket', 'How to use a self-checkout machine', 'The history of Whole Foods'], correctIndex: 1 },
        { question: 'What does "overwhelming" mean in the first sentence?', questionPt: 'O que significa "overwhelming" na primeira frase?', options: ['Very intense and hard to process', 'Boring and simple', 'Small and quiet', 'Fast and easy'], correctIndex: 0 },
        { question: 'Why was Carla confused by the pricing system?', questionPt: 'Por que Carla ficou confusa com o sistema de preços?', options: ['Because the prices were in euros', 'Because the sales tax was added only at the checkout', 'Because there were no price tags', 'Because everything was free'], correctIndex: 1 },
        { question: 'What is the implication of using a loyalty card?', questionPt: 'Qual é a implicação de usar um cartão de fidelidade?', options: ['It costs extra money', 'It tracks her location', 'It provides financial discounts on purchases', 'It is required to enter the store'], correctIndex: 2 }
      ]`
  }
];

// Split the content by "reading: {" and process each block carefully
const parts = content.split('reading: {');

for (let i = 1; i < parts.length; i++) {
  let block = parts[i];
  
  // Replace questionsA1 completely (up to 'questionsA2:')
  block = block.replace(/questionsA1:\s*\[[\s\S]*?\],\s*questionsA2:/, newQuestions[i - 1].A1 + ',\n      questionsA2:');
  
  // Replace questionsA2 completely (up to '}')
  block = block.replace(/questionsA2:\s*\[[\s\S]*?\]\s*\n\s*\}/, newQuestions[i - 1].A2 + '\n    }');
  
  parts[i] = block;
}

const finalContent = parts.join('reading: {');
fs.writeFileSync('data/scenarios.ts', finalContent, 'utf8');
console.log('Successfully updated all 18 reading blocks properly.');

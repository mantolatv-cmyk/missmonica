const fs = require('fs');

const speakingData = {
  introduction: [
    {
      question: "Hello! What's your name and where are you from?",
      translation: "Olá! Qual é o seu nome e de onde você é?",
      hintA1: "Hi, my name is [Name]. I am from [Country].",
      hintA2: "Hello! I'm [Name] and I originally come from [Country], but I live in [City] now."
    },
    {
      question: "Nice to meet you. Why are you learning English?",
      translation: "Prazer em conhecê-lo. Por que você está aprendendo inglês?",
      hintA1: "I am learning English for travel.",
      hintA2: "I'm learning English because I want to travel the world and it helps with my career."
    },
    {
      question: "What do you like to do in your free time?",
      translation: "O que você gosta de fazer no seu tempo livre?",
      hintA1: "I like to read and watch movies.",
      hintA2: "In my free time, I really enjoy reading books and watching movies with my friends."
    }
  ],
  numbers: [
    {
      question: "How much is this shirt?",
      translation: "Quanto custa esta camisa?",
      hintA1: "It is twenty dollars.",
      hintA2: "This shirt costs twenty dollars, plus tax."
    },
    {
      question: "Can I pay with a credit card?",
      translation: "Posso pagar com cartão de crédito?",
      hintA1: "Yes, you can pay with credit card.",
      hintA2: "Yes, we accept both cash and all major credit cards."
    },
    {
      question: "Could you tell me your phone number?",
      translation: "Você poderia me dizer o seu número de telefone?",
      hintA1: "My phone number is 555-1234.",
      hintA2: "Sure, you can reach me at 555-1234."
    }
  ],
  airport: [
    {
      question: "Where is the check-in desk for Delta Airlines?",
      translation: "Onde é o balcão de check-in da Delta Airlines?",
      hintA1: "It is over there.",
      hintA2: "The Delta check-in desk is just straight ahead, next to the entrance."
    },
    {
      question: "Do you have any bags to check in?",
      translation: "Você tem malas para despachar?",
      hintA1: "Yes, I have one suitcase.",
      hintA2: "Yes, I have one suitcase to check and one carry-on bag."
    },
    {
      question: "Could you show me your passport and boarding pass?",
      translation: "Você poderia me mostrar seu passaporte e cartão de embarque?",
      hintA1: "Yes, here is my passport.",
      hintA2: "Of course, here is my passport and my boarding pass."
    }
  ],
  immigration: [
    {
      question: "What is the purpose of your visit?",
      translation: "Qual é o motivo da sua visita?",
      hintA1: "I am here for tourism.",
      hintA2: "I'm visiting for tourism and to see some famous landmarks."
    },
    {
      question: "How long will you be staying in the country?",
      translation: "Quanto tempo você vai ficar no país?",
      hintA1: "I will stay for two weeks.",
      hintA2: "I plan to stay for about two weeks before heading back home."
    },
    {
      question: "Where will you be staying?",
      translation: "Onde você vai ficar?",
      hintA1: "I will stay at a hotel.",
      hintA2: "I have a reservation at the Hilton Hotel downtown."
    }
  ],
  hotel: [
    {
      question: "Hi, I have a reservation under the name Smith.",
      translation: "Olá, tenho uma reserva em nome de Smith.",
      hintA1: "Yes, I have a reservation.",
      hintA2: "Hello, I made a reservation online for two nights under the name Smith."
    },
    {
      question: "What time is breakfast served?",
      translation: "A que horas o café da manhã é servido?",
      hintA1: "Breakfast is at 7 AM.",
      hintA2: "Breakfast is served every morning from 7 AM to 10 AM."
    },
    {
      question: "Could I get some extra towels for my room?",
      translation: "Poderia me dar algumas toalhas extras para o meu quarto?",
      hintA1: "Yes, please bring towels.",
      hintA2: "Could you please send a couple of extra towels to room 304?"
    }
  ],
  restaurant: [
    {
      question: "Are you ready to order?",
      translation: "Vocês estão prontos para pedir?",
      hintA1: "Yes, I want the chicken.",
      hintA2: "Yes, we are ready. I'll have the grilled chicken with a side salad."
    },
    {
      question: "Would you like anything to drink?",
      translation: "Você gostaria de algo para beber?",
      hintA1: "Water, please.",
      hintA2: "I would like a glass of sparkling water with ice, please."
    },
    {
      question: "Could we get the check, please?",
      translation: "Poderia nos trazer a conta, por favor?",
      hintA1: "Can I have the bill?",
      hintA2: "Excuse me, could we get the check whenever you have a moment?"
    }
  ],
  directions: [
    {
      question: "Excuse me, how do I get to the museum?",
      translation: "Com licença, como chego ao museu?",
      hintA1: "Go straight and turn left.",
      hintA2: "Just go straight for two blocks, then turn left at the traffic light."
    },
    {
      question: "Is it far from here?",
      translation: "É longe daqui?",
      hintA1: "No, it is near.",
      hintA2: "No, it's actually quite close. It takes about five minutes walking."
    },
    {
      question: "Where is the nearest subway station?",
      translation: "Onde fica a estação de metrô mais próxima?",
      hintA1: "It is next to the bank.",
      hintA2: "The nearest station is right across the street, next to the big bank."
    }
  ],
  transport: [
    {
      question: "Where can I catch a taxi?",
      translation: "Onde posso pegar um táxi?",
      hintA1: "The taxi is outside.",
      hintA2: "There's a taxi stand right outside the main exit of the building."
    },
    {
      question: "How much is a ticket to downtown?",
      translation: "Quanto custa uma passagem para o centro?",
      hintA1: "It costs three dollars.",
      hintA2: "A single ride ticket to downtown costs about three dollars."
    },
    {
      question: "Does this bus go to Central Park?",
      translation: "Este ônibus vai para o Central Park?",
      hintA1: "Yes, it goes to the park.",
      hintA2: "Yes, this bus stops right in front of Central Park."
    }
  ],
  medical: [
    {
      question: "What seems to be the problem?",
      translation: "Qual parece ser o problema?",
      hintA1: "I have a headache.",
      hintA2: "I've been feeling really tired and I have a terrible headache."
    },
    {
      question: "Do you have any allergies?",
      translation: "Você tem alguma alergia?",
      hintA1: "No, I don't have allergies.",
      hintA2: "No, I am not allergic to any medications or foods."
    },
    {
      question: "I need to buy some pain relievers.",
      translation: "Eu preciso comprar alguns analgésicos.",
      hintA1: "Where is the medicine?",
      hintA2: "Could you point me to the aisle with pain relievers, like ibuprofen?"
    }
  ],
  entertainment: [
    {
      question: "What time does the movie start?",
      translation: "A que horas o filme começa?",
      hintA1: "It starts at 8 PM.",
      hintA2: "The movie starts exactly at 8 PM, so we should hurry."
    },
    {
      question: "Can I get two tickets for the concert, please?",
      translation: "Posso pegar dois ingressos para o show, por favor?",
      hintA1: "Two tickets, please.",
      hintA2: "I'd like to purchase two tickets for tonight's concert."
    },
    {
      question: "Where are our seats located?",
      translation: "Onde ficam nossos assentos?",
      hintA1: "They are in row F.",
      hintA2: "Our seats are located in row F, right in the middle section."
    }
  ],
  cafe: [
    {
      question: "What would you like to order?",
      translation: "O que você gostaria de pedir?",
      hintA1: "I want a coffee.",
      hintA2: "I'd like to get a large cappuccino and a blueberry muffin, please."
    },
    {
      question: "Is that for here or to go?",
      translation: "É para comer aqui ou para levar?",
      hintA1: "To go, please.",
      hintA2: "I'll take it to go, thank you."
    },
    {
      question: "Do you have any dairy-free milk options?",
      translation: "Vocês têm opções de leite sem lactose?",
      hintA1: "Yes, we have almond milk.",
      hintA2: "Yes, we offer both almond and oat milk for an extra charge."
    }
  ],
  tech: [
    {
      question: "What is the Wi-Fi password?",
      translation: "Qual é a senha do Wi-Fi?",
      hintA1: "The password is 'guest123'.",
      hintA2: "The network is 'Cafe_Guest' and the password is 'guest123' all lowercase."
    },
    {
      question: "My phone battery is dead. Do you have a charger?",
      translation: "A bateria do meu celular acabou. Você tem um carregador?",
      hintA1: "Yes, here is a charger.",
      hintA2: "Sure, I have an iPhone charger you can borrow for a few minutes."
    },
    {
      question: "How do I connect to the bluetooth speaker?",
      translation: "Como me conecto à caixa de som bluetooth?",
      hintA1: "Turn on bluetooth.",
      hintA2: "Just turn on your bluetooth and look for a device called 'SpeakerX'."
    }
  ],
  smalltalk: [
    {
      question: "Nice weather we're having today, isn't it?",
      translation: "O clima está agradável hoje, não é?",
      hintA1: "Yes, it is very sunny.",
      hintA2: "Yes, it's absolutely beautiful! I love when it's sunny like this."
    },
    {
      question: "Did you catch the game last night?",
      translation: "Você viu o jogo ontem à noite?",
      hintA1: "No, I didn't watch it.",
      hintA2: "Unfortunately no, I was too busy working. Who won?"
    },
    {
      question: "How was your weekend?",
      translation: "Como foi o seu fim de semana?",
      hintA1: "It was good, thank you.",
      hintA2: "It was really relaxing. I just stayed home and watched some movies."
    }
  ],
  slangs: [
    {
      question: "What's up? How are things going?",
      translation: "E aí? Como estão as coisas?",
      hintA1: "Not much. I am fine.",
      hintA2: "Hey, not much! Just chilling and taking it easy."
    },
    {
      question: "Are you down to grab some food later?",
      translation: "Você topa comer alguma coisa mais tarde?",
      hintA1: "Yes, I am hungry.",
      hintA2: "Yeah, I'm totally down for that. Let me know when."
    },
    {
      question: "That movie was totally awesome!",
      translation: "Aquele filme foi totalmente incrível!",
      hintA1: "Yes, it was great.",
      hintA2: "I know, right? The special effects were mind-blowing."
    }
  ],
  shopping: [
    {
      question: "Do you have this in a smaller size?",
      translation: "Você tem isso num tamanho menor?",
      hintA1: "Yes, we have size small.",
      hintA2: "Let me check in the back to see if we have a smaller size for you."
    },
    {
      question: "Where are the fitting rooms?",
      translation: "Onde ficam os provadores?",
      hintA1: "They are in the back.",
      hintA2: "The fitting rooms are located right at the back of the store, near the mirrors."
    },
    {
      question: "Are these shoes on sale?",
      translation: "Estes sapatos estão na promoção?",
      hintA1: "Yes, they are on sale.",
      hintA2: "Yes, all shoes in that section are currently 20% off."
    }
  ],
  beauty: [
    {
      question: "I'm looking for a good moisturizer for dry skin.",
      translation: "Estou procurando um bom hidratante para pele seca.",
      hintA1: "This cream is good.",
      hintA2: "I highly recommend this hydrating cream, it's perfect for dry skin."
    },
    {
      question: "Do you have a tester for this foundation?",
      translation: "Você tem um provador para esta base?",
      hintA1: "Yes, here is the tester.",
      hintA2: "Yes, we have testers available right over there on the display counter."
    },
    {
      question: "What color lipstick would suit me best?",
      translation: "Que cor de batom combinaria melhor comigo?",
      hintA1: "Red is very nice.",
      hintA2: "I think a soft pink or a classic red would look stunning on you."
    }
  ],
  carrental: [
    {
      question: "I'd like to rent a car for three days.",
      translation: "Gostaria de alugar um carro por três dias.",
      hintA1: "Okay, what car do you want?",
      hintA2: "Sure thing. Are you looking for a compact car or an SUV?"
    },
    {
      question: "Do I need to return the car with a full tank of gas?",
      translation: "Preciso devolver o carro com o tanque cheio de gasolina?",
      hintA1: "Yes, the tank must be full.",
      hintA2: "Yes, please return it with a full tank to avoid any extra charges."
    },
    {
      question: "Does the rental include insurance?",
      translation: "O aluguel inclui seguro?",
      hintA1: "Yes, basic insurance is included.",
      hintA2: "Basic insurance is included, but we offer full coverage for an additional fee."
    }
  ],
  supermarket: [
    {
      question: "Excuse me, where can I find the milk?",
      translation: "Com licença, onde posso encontrar o leite?",
      hintA1: "It is in aisle 4.",
      hintA2: "The dairy products, including milk, are located in aisle 4."
    },
    {
      question: "Do you have any fresh bread left?",
      translation: "Vocês ainda têm pão fresco?",
      hintA1: "Yes, in the bakery.",
      hintA2: "Yes, we just baked a new batch. You can find it in the bakery section."
    },
    {
      question: "Are you paying with cash or card?",
      translation: "Você vai pagar em dinheiro ou cartão?",
      hintA1: "I will pay with a card.",
      hintA2: "I'll be paying with a credit card, please."
    }
  ]
};

let content = fs.readFileSync('./data/scenarios.ts', 'utf8');

for (const id in speakingData) {
  const jsonStr = JSON.stringify(speakingData[id], null, 4).replace(/\\n/g, '').replace(/^/gm, '    ');
  
  // Clean, proper regex using string concatenation
  const idRegex = new RegExp("(id:\\s*'" + id + "',)");
  if (!content.match(idRegex)) {
    console.log("Failed to match id: " + id);
  } else {
    content = content.replace(idRegex, "$1\\n    speakingQuestions: " + jsonStr.trim() + ",");
  }
}

fs.writeFileSync('./data/scenarios.ts', content);
console.log('Successfully injected speaking questions');

const fs = require('fs');

let content = fs.readFileSync('data/scenarios.ts', 'utf8');

// 1. Add missing interfaces at the top
const interfaces = `
export interface SpeakingQuestion {
  question?: string;
  questionPt?: string;
  questionA1?: string;
  questionA2?: string;
  questionA1Pt?: string;
  questionA2Pt?: string;
  hintA1?: string;
  hintA2?: string;
  sampleAnswerA1?: string;
  sampleAnswerA2?: string;
}

export interface ReadingQuestion {
  question: string;
  questionPt: string;
  options: string[];
  correctIndex: number;
}

export interface ReadingComprehension {
  textA1: string;
  textA1Pt: string;
  textA2: string;
  textA2Pt: string;
  questionsA1: ReadingQuestion[];
  questionsA2: ReadingQuestion[];
}
`;
if (!content.includes('export interface SpeakingQuestion')) {
  content = content.replace('export interface Scenario {', interfaces + '\nexport interface Scenario {');
}

// 2. Fix VocabularyItem
content = content.replace(
  '  portuguese: string;\n}',
  '  portuguese: string;\n  sentenceA1?: string;\n  sentenceA2?: string;\n  sentenceA1Pt?: string;\n  sentenceA2Pt?: string;\n}'
);

// 3. Fix CulturalTipData
content = content.replace(
  '  contentPt: string;\n}',
  '  contentPt: string;\n  contentA1?: string;\n  contentA2?: string;\n  contentA1Pt?: string;\n  contentA2Pt?: string;\n}'
);

// 4. Fix Scenario
content = content.replace(
  '  culturalTips?: CulturalTipData[];\n  dialogueSets?: DialogueSet[];\n}',
  '  culturalTips?: CulturalTipData[];\n  culturalTipsEurope?: CulturalTipData[];\n  speakingQuestions?: SpeakingQuestion[];\n  reading?: ReadingComprehension;\n  dialogueSets?: DialogueSet[];\n}'
);

// 5. Data
const personalSpeakingData = {
  introduction: [
    { question: "What do you like to do on weekends?", questionPt: "O que você gosta de fazer nos fins de semana?", hintA1: "I like to sleep and watch TV.", hintA2: "On weekends, I usually go out with friends or relax at home." },
    { question: "How long have you been studying English?", questionPt: "Há quanto tempo você estuda inglês?", hintA1: "I study English for one year.", hintA2: "I have been studying English for about a year now." },
    { question: "What is your dream job?", questionPt: "Qual é o emprego dos seus sonhos?", hintA1: "My dream job is to be a doctor.", hintA2: "I would love to work as a software engineer in a big tech company." }
  ],
  numbers: [
    { question: "Do you prefer to pay with cash or a credit card?", questionPt: "Você prefere pagar com dinheiro ou cartão de crédito?", hintA1: "I prefer credit card.", hintA2: "I usually pay with my credit card because it's much safer and more convenient." },
    { question: "How often do you go shopping for clothes?", questionPt: "Com que frequência você faz compras de roupas?", hintA1: "I buy clothes every month.", hintA2: "I don't go shopping very often, maybe just a few times a year." },
    { question: "What is the most expensive thing you bought recently?", questionPt: "Qual foi a coisa mais cara que você comprou recentemente?", hintA1: "I bought a new phone.", hintA2: "The most expensive thing I bought recently was a new laptop for my work." }
  ],
  airport: [
    { question: "Do you like traveling by plane? Why or why not?", questionPt: "Você gosta de viajar de avião? Por que ou por que não?", hintA1: "Yes, I like planes. It is fast.", hintA2: "Yes, I love it because it's fast, but I hate waiting at the airport." },
    { question: "What do you usually do during a long flight?", questionPt: "O que você costuma fazer durante um voo longo?", hintA1: "I sleep and watch movies.", hintA2: "During a long flight, I usually read a book or watch a couple of movies." },
    { question: "Do you prefer to travel light or with a lot of luggage?", questionPt: "Você prefere viajar leve ou com muita bagagem?", hintA1: "I prefer to travel light.", hintA2: "I always try to travel light so I don't have to check any bags." }
  ],
  immigration: [
    { question: "Have you ever traveled to a foreign country? Which one?", questionPt: "Você já viajou para um país estrangeiro? Qual?", hintA1: "Yes, I traveled to Argentina.", hintA2: "Yes, I have been to a few countries in Europe and South America." },
    { question: "What is the best country you have ever visited?", questionPt: "Qual é o melhor país que você já visitou?", hintA1: "The best country is Italy.", hintA2: "I think Japan is the most amazing country I have visited because of the culture." },
    { question: "If you could live in any country, where would you choose?", questionPt: "Se você pudesse morar em qualquer país, qual escolheria?", hintA1: "I want to live in the USA.", hintA2: "I would love to live in Canada because it's very safe and beautiful." }
  ],
  hotel: [
    { question: "Do you prefer staying in hotels or renting Airbnbs?", questionPt: "Você prefere ficar em hotéis ou alugar Airbnbs?", hintA1: "I prefer hotels. It is easy.", hintA2: "I usually prefer Airbnb because it feels more like home and has a kitchen." },
    { question: "What is the most important thing for you in a hotel room?", questionPt: "Qual é a coisa mais importante para você em um quarto de hotel?", hintA1: "A clean bed and good shower.", hintA2: "For me, the most important things are a comfortable bed and fast Wi-Fi." },
    { question: "Have you ever had a bad experience at a hotel?", questionPt: "Você já teve uma experiência ruim em um hotel?", hintA1: "No, never.", hintA2: "Yes, once the room was very noisy and the air conditioning was broken." }
  ],
  restaurant: [
    { question: "How often do you eat out at a restaurant?", questionPt: "Com que frequência você come fora em um restaurante?", hintA1: "I eat out once a week.", hintA2: "I usually eat out on weekends when I want to relax with my friends." },
    { question: "What is your favorite type of food?", questionPt: "Qual é o seu tipo de comida favorito?", hintA1: "I love Italian food and pizza.", hintA2: "My favorite type of food is Japanese. I absolutely love sushi." },
    { question: "Do you prefer cooking at home or ordering delivery?", questionPt: "Você prefere cozinhar em casa ou pedir delivery?", hintA1: "I prefer delivery. It is fast.", hintA2: "I prefer cooking at home because it's much healthier and cheaper." }
  ],
  directions: [
    { question: "Are you good at finding places or do you easily get lost?", questionPt: "Você é bom em encontrar lugares ou se perde facilmente?", hintA1: "I get lost very easily.", hintA2: "I'm terrible with directions, so I always rely on Google Maps." },
    { question: "Do you use maps on your phone every day?", questionPt: "Você usa mapas no celular todos os dias?", hintA1: "Yes, I use maps every day.", hintA2: "I only use maps when I need to go to a new place I've never visited before." },
    { question: "What places do you usually go to on foot in your city?", questionPt: "Quais lugares você costuma ir a pé na sua cidade?", hintA1: "I walk to the supermarket.", hintA2: "I usually walk to the bakery, the gym, and the local park near my house." }
  ],
  transport: [
    { question: "How many times a month do you use a taxi or Uber?", questionPt: "Quantas vezes por mês você usa um táxi ou Uber?", hintA1: "I use Uber two times a month.", hintA2: "I use ride apps about five times a month, mostly when it's raining or late at night." },
    { question: "Do you prefer taking a taxi or an Uber? Why?", questionPt: "Você prefere pegar um táxi ou um Uber? Por quê?", hintA1: "I prefer Uber because it is cheap.", hintA2: "I prefer Uber because I can see the price before the ride starts." },
    { question: "In what situations do you choose to use public transportation?", questionPt: "Em quais situações você escolhe usar o transporte público?", hintA1: "I use the bus to go to work.", hintA2: "I use public transport every day to go to work to avoid the heavy traffic." }
  ],
  medical: [
    { question: "How often do you go to the doctor?", questionPt: "Com que frequência você vai ao médico?", hintA1: "I go to the doctor once a year.", hintA2: "I usually go once a year for a general check-up." },
    { question: "What do you usually do when you have a headache?", questionPt: "O que você costuma fazer quando tem dor de cabeça?", hintA1: "I sleep and drink water.", hintA2: "When I have a headache, I take some medicine and try to rest in a dark room." },
    { question: "Do you think you have a healthy lifestyle?", questionPt: "Você acha que tem um estilo de vida saudável?", hintA1: "Yes, I eat fruits and exercise.", hintA2: "I try to be healthy by working out and eating vegetables, but I love junk food sometimes." }
  ],
  entertainment: [
    { question: "What kind of movies do you like to watch?", questionPt: "Que tipo de filmes você gosta de assistir?", hintA1: "I like comedy and action movies.", hintA2: "I really enjoy science fiction and thrillers with a good plot twist." },
    { question: "Do you prefer going to the cinema or watching movies at home?", questionPt: "Você prefere ir ao cinema ou assistir a filmes em casa?", hintA1: "I prefer watching movies at home.", hintA2: "I prefer the cinema for the big screen and the popcorn." },
    { question: "Have you ever been to a big music concert?", questionPt: "Você já foi a um grande show de música?", hintA1: "Yes, I went to a rock concert.", hintA2: "Yes, I saw my favorite band live last year and it was an amazing experience." }
  ],
  cafe: [
    { question: "How many cups of coffee do you drink a day?", questionPt: "Quantas xícaras de café você bebe por dia?", hintA1: "I drink two cups of coffee.", hintA2: "I usually drink one cup in the morning and sometimes another one after lunch." },
    { question: "What is your favorite order at a coffee shop?", questionPt: "Qual é o seu pedido favorito em uma cafeteria?", hintA1: "I like cappuccino with chocolate.", hintA2: "My go-to order is an iced latte with a slice of carrot cake." },
    { question: "Do you like to study or work in cafes?", questionPt: "Você gosta de estudar ou trabalhar em cafés?", hintA1: "No, it is very noisy.", hintA2: "Yes, I enjoy the atmosphere and the background noise helps me focus." }
  ],
  tech: [
    { question: "How many hours a day do you spend on your phone?", questionPt: "Quantas horas por dia você passa no celular?", hintA1: "I spend four hours on my phone.", hintA2: "I probably spend around five hours a day, mostly scrolling through social media." },
    { question: "What are your three favorite mobile apps?", questionPt: "Quais são seus três aplicativos de celular favoritos?", hintA1: "WhatsApp, Instagram, and YouTube.", hintA2: "My favorite apps are Spotify for music, Instagram for photos, and WhatsApp to chat." },
    { question: "Do you prefer using a laptop or a smartphone?", questionPt: "Você prefere usar um notebook ou um smartphone?", hintA1: "I prefer my smartphone.", hintA2: "I prefer my laptop for working, but for everything else, my smartphone is better." }
  ],
  smalltalk: [
    { question: "Do you enjoy making small talk with strangers?", questionPt: "Você gosta de jogar conversa fora com estranhos?", hintA1: "No, I am shy.", hintA2: "Not really, I feel a bit awkward talking to people I don't know well." },
    { question: "What topics do you usually talk about with your coworkers or classmates?", questionPt: "Sobre quais assuntos você costuma conversar com seus colegas de trabalho ou de classe?", hintA1: "We talk about TV shows and sports.", hintA2: "We usually talk about our weekend plans, new movies, or the weather." },
    { question: "How is the weather in your city today?", questionPt: "Como está o clima na sua cidade hoje?", hintA1: "It is sunny and hot.", hintA2: "It's quite cloudy today and it looks like it might rain later." }
  ],
  slangs: [
    { question: "Do you use a lot of slang when speaking Portuguese?", questionPt: "Você usa muitas gírias quando fala português?", hintA1: "Yes, I use many slangs with friends.", hintA2: "Yes, I use a lot of slang, especially when I'm texting or hanging out with my friends." },
    { question: "What is your favorite English slang word?", questionPt: "Qual é a sua gíria favorita em inglês?", hintA1: "My favorite slang is 'cool'.", hintA2: "I really like the word 'awesome' because it sounds very positive." },
    { question: "Do you think it's important to learn slang to speak fluently?", questionPt: "Você acha importante aprender gírias para falar fluentemente?", hintA1: "Yes, people use slangs every day.", hintA2: "Yes, because native speakers use slang all the time in real life conversations." }
  ],
  shopping: [
    { question: "Do you prefer shopping online or in a physical store?", questionPt: "Você prefere fazer compras online ou em loja física?", hintA1: "I prefer online shopping.", hintA2: "I prefer shopping online because I can easily compare prices without leaving home." },
    { question: "When was the last time you went to a shopping mall?", questionPt: "Quando foi a última vez que você foi a um shopping center?", hintA1: "I went to the mall last week.", hintA2: "I went to the mall two weeks ago to buy a gift for my friend's birthday." },
    { question: "Are you the type of person who waits for sales (Black Friday, etc)?", questionPt: "Você é o tipo de pessoa que espera por promoções (Black Friday, etc)?", hintA1: "Yes, I love sales and discounts.", hintA2: "Definitely, I always wait for big sales to buy expensive electronics or shoes." }
  ],
  beauty: [
    { question: "What is your daily skincare routine?", questionPt: "Qual é a sua rotina diária de cuidados com a pele?", hintA1: "I wash my face and use sunscreen.", hintA2: "I usually wash my face with a cleanser, apply moisturizer, and then sunscreen." },
    { question: "How often do you get a haircut or go to a salon?", questionPt: "Com que frequência você corta o cabelo ou vai a um salão?", hintA1: "I cut my hair every two months.", hintA2: "I go to the salon about every two months to keep my hair healthy." },
    { question: "Do you like to wear perfume or cologne?", questionPt: "Você gosta de usar perfume ou colônia?", hintA1: "Yes, I love sweet perfumes.", hintA2: "Yes, I never leave the house without wearing my favorite woody cologne." }
  ],
  carrental: [
    { question: "Do you know how to drive?", questionPt: "Você sabe dirigir?", hintA1: "Yes, I have a driver's license.", hintA2: "Yes, I've had my driver's license for five years, and I drive every day." },
    { question: "Have you ever rented a car on a trip?", questionPt: "Você já alugou um carro em uma viagem?", hintA1: "No, I never rented a car.", hintA2: "Yes, I rented a car last summer when I traveled to California." },
    { question: "What is your dream car?", questionPt: "Qual é o carro dos seus sonhos?", hintA1: "My dream car is a Ferrari.", hintA2: "My dream car is an electric SUV, like a Tesla, because it's good for the environment." }
  ],
  supermarket: [
    { question: "Who does the grocery shopping in your house?", questionPt: "Quem faz as compras de supermercado na sua casa?", hintA1: "I do the shopping on Saturdays.", hintA2: "My mom usually does it, but I go with her sometimes to help carry the bags." },
    { question: "Do you make a list before going to the supermarket?", questionPt: "Você faz uma lista antes de ir ao supermercado?", hintA1: "Yes, I write everything on my phone.", hintA2: "I always make a list, otherwise I end up buying a lot of snacks I don't need." },
    { question: "What is one item you always buy at the supermarket?", questionPt: "Qual é um item que você sempre compra no supermercado?", hintA1: "I always buy milk and bread.", hintA2: "I can't leave the supermarket without buying fresh fruit and some chocolate." }
  ]
};

const readingBlocksData = JSON.parse(fs.readFileSync('scratch_reading.json', 'utf8'));

for (const id in personalSpeakingData) {
  const speakingStr = JSON.stringify(personalSpeakingData[id], null, 4);
  let readingStr = '';
  if (readingBlocksData[id]) {
    readingStr = '\n    reading: ' + JSON.stringify(readingBlocksData[id], null, 4) + ',';
  }

  const findText = "id: '" + id + "',";
  const replacementText = "id: '" + id + "',\n    speakingQuestions: " + speakingStr + "," + readingStr;

  content = content.replace(findText, replacementText);
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully injected all missing data properly.');

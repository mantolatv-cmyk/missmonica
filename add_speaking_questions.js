// add_speaking_questions.js
// Adds 5 extra personal speaking questions (Simple Present & Past Simple) to each scenario.
// Uses bracket-counting to find each speakingQuestions array and inserts before its closing bracket.

const fs = require('fs');

const extraQuestions = {
  introduction: [
    { question: "Where did you live when you were a child?", questionPt: "Onde você morou quando era criança?", hintA1: "I lived in a small city.", hintA2: "When I was a child, I lived in a quiet neighborhood near the park." },
    { question: "Do you have any pets at home?", questionPt: "Você tem algum animal de estimação em casa?", hintA1: "Yes, I have a dog.", hintA2: "I have two cats. I adopted them three years ago." },
    { question: "What time do you usually wake up?", questionPt: "A que horas você costuma acordar?", hintA1: "I wake up at seven.", hintA2: "I usually wake up at 6:30 because I like to exercise before work." },
    { question: "Did you study English yesterday?", questionPt: "Você estudou inglês ontem?", hintA1: "Yes, I studied for one hour.", hintA2: "Yes, I reviewed vocabulary and practiced speaking with a friend." },
    { question: "Who do you live with?", questionPt: "Com quem você mora?", hintA1: "I live with my family.", hintA2: "I currently live with my parents and my younger sister in an apartment." }
  ],
  numbers: [
    { question: "How much did you pay for your last haircut?", questionPt: "Quanto você pagou pelo seu último corte de cabelo?", hintA1: "I paid thirty dollars.", hintA2: "I paid around fifty reais because I went to a new salon downtown." },
    { question: "Do you save money every month?", questionPt: "Você guarda dinheiro todo mês?", hintA1: "Yes, I save a little.", hintA2: "I always try to save at least ten percent of my salary every month." },
    { question: "When did you open your first bank account?", questionPt: "Quando você abriu sua primeira conta bancária?", hintA1: "I opened it five years ago.", hintA2: "I opened my first bank account when I got my first job at eighteen." },
    { question: "How many friends did you invite to your last birthday?", questionPt: "Quantos amigos você convidou para o seu último aniversário?", hintA1: "I invited ten friends.", hintA2: "I only invited my five closest friends for a small dinner at home." },
    { question: "What time does your favorite store close?", questionPt: "A que horas a sua loja favorita fecha?", hintA1: "It closes at nine PM.", hintA2: "It usually closes at 10 PM on weekdays and 8 PM on Sundays." }
  ],
  airport: [
    { question: "Did you pack your bags yourself?", questionPt: "Você mesmo fez as malas?", hintA1: "Yes, I packed them last night.", hintA2: "Yes, I always pack my bags carefully the day before I travel." },
    { question: "What time does your flight leave?", questionPt: "A que horas o seu voo sai?", hintA1: "It leaves at two PM.", hintA2: "My flight departs at 2:30 PM, so I need to be at the gate by 2:00." },
    { question: "Did you buy anything at duty-free last time?", questionPt: "Você comprou algo no duty-free da última vez?", hintA1: "No, I did not buy anything.", hintA2: "Yes, I bought some chocolate and a bottle of perfume for my mother." },
    { question: "Do you prefer window or aisle seats?", questionPt: "Você prefere assento na janela ou no corredor?", hintA1: "I prefer the window seat.", hintA2: "I always choose the aisle because I like to stand up and walk during long flights." },
    { question: "How did you get to the airport today?", questionPt: "Como você chegou ao aeroporto hoje?", hintA1: "I came by taxi.", hintA2: "My brother drove me here early in the morning to avoid the traffic." }
  ],
  immigration: [
    { question: "Why did you choose to visit this country?", questionPt: "Por que você escolheu visitar este país?", hintA1: "Because it is very beautiful.", hintA2: "I wanted to visit the famous museums and try the local food." },
    { question: "Where do you plan to stay during your trip?", questionPt: "Onde você planeja ficar durante a viagem?", hintA1: "I plan to stay in a hotel.", hintA2: "I booked a hotel downtown for the first week and then I move to an Airbnb." },
    { question: "Did you apply for your visa online?", questionPt: "Você solicitou o seu visto online?", hintA1: "Yes, I applied online.", hintA2: "Yes, I filled out all the forms on the website and it was quite simple." },
    { question: "What do you do for a living in your country?", questionPt: "O que você faz profissionalmente no seu país?", hintA1: "I am a teacher.", hintA2: "I work as a marketing manager for a technology company in São Paulo." },
    { question: "Did you bring any food in your luggage?", questionPt: "Você trouxe alguma comida na sua bagagem?", hintA1: "No, I did not bring food.", hintA2: "No, I only packed clothes and personal items because food is not allowed." }
  ],
  hotel: [
    { question: "Did you make a reservation in advance?", questionPt: "Você fez uma reserva com antecedência?", hintA1: "Yes, I booked it online.", hintA2: "Yes, I reserved the room two months ago on the hotel website." },
    { question: "What time do you usually have breakfast at the hotel?", questionPt: "A que horas você costuma tomar café da manhã no hotel?", hintA1: "I eat breakfast at eight.", hintA2: "I usually go down to the restaurant around 8:30 in the morning." },
    { question: "Did you use the hotel pool yesterday?", questionPt: "Você usou a piscina do hotel ontem?", hintA1: "No, I did not have time.", hintA2: "No, I was too busy exploring the city, but I plan to swim today." },
    { question: "Does the room have a nice view?", questionPt: "O quarto tem uma vista bonita?", hintA1: "Yes, I can see the beach.", hintA2: "Yes, it has an amazing view of the ocean and I love watching the sunset." },
    { question: "When did you check into the hotel?", questionPt: "Quando você fez o check-in no hotel?", hintA1: "I checked in yesterday.", hintA2: "I arrived and checked in yesterday afternoon around three o'clock." }
  ],
  restaurant: [
    { question: "Did you try any local food on your last trip?", questionPt: "Você experimentou alguma comida local na sua última viagem?", hintA1: "Yes, I tried the pasta.", hintA2: "Yes, I went to a local market and tried their famous street tacos." },
    { question: "Do you usually leave a tip at restaurants?", questionPt: "Você costuma deixar gorjeta nos restaurantes?", hintA1: "Yes, I always leave a tip.", hintA2: "I usually leave about fifteen percent if the service is good." },
    { question: "What did you eat for dinner last night?", questionPt: "O que você comeu no jantar ontem à noite?", hintA1: "I ate a big salad.", hintA2: "I went to an Italian restaurant and had seafood risotto. It was delicious." },
    { question: "Do you prefer eating at home or at a restaurant?", questionPt: "Você prefere comer em casa ou no restaurante?", hintA1: "I prefer eating at home.", hintA2: "I like both, but I cook at home during the week and eat out on weekends." },
    { question: "Did you book a table before coming here?", questionPt: "Você reservou uma mesa antes de vir aqui?", hintA1: "No, we just walked in.", hintA2: "Yes, I called the restaurant this morning and reserved a table for four." }
  ],
  directions: [
    { question: "Did you use a map to find this place?", questionPt: "Você usou um mapa para encontrar este lugar?", hintA1: "Yes, I used my phone.", hintA2: "Yes, I used Google Maps but I still got a little confused at the intersection." },
    { question: "Do you know where the nearest subway station is?", questionPt: "Você sabe onde fica a estação de metrô mais próxima?", hintA1: "It is down the street.", hintA2: "I think it is about two blocks from here if you turn right at the corner." },
    { question: "Where did you park your car?", questionPt: "Onde você estacionou o seu carro?", hintA1: "I parked on the street.", hintA2: "I parked in the public garage because there were no spots on the street." },
    { question: "Do you usually walk or drive to work?", questionPt: "Você costuma ir a pé ou de carro para o trabalho?", hintA1: "I walk to work.", hintA2: "I drive when it rains, but I usually prefer to walk because it is only fifteen minutes." },
    { question: "Did you get lost yesterday in the city?", questionPt: "Você se perdeu ontem na cidade?", hintA1: "Yes, a little bit.", hintA2: "Yes, I took the wrong bus and ended up in a completely different neighborhood." }
  ],
  transport: [
    { question: "Did you buy a ticket for the train?", questionPt: "Você comprou um bilhete para o trem?", hintA1: "Yes, I bought it online.", hintA2: "Yes, I bought a weekly pass at the station this morning. It saves money." },
    { question: "What time does the last subway leave?", questionPt: "A que horas sai o último metrô?", hintA1: "It leaves at midnight.", hintA2: "The last train departs at around midnight on weekdays and 1 AM on weekends." },
    { question: "Did you take a taxi from the airport?", questionPt: "Você pegou um táxi do aeroporto?", hintA1: "No, I took the bus.", hintA2: "No, I decided to use Uber because it was much cheaper than a regular taxi." },
    { question: "Do you ride a bicycle in your city?", questionPt: "Você anda de bicicleta na sua cidade?", hintA1: "Sometimes on weekends.", hintA2: "Yes, I ride my bike to work every day when the weather is nice." },
    { question: "How long did it take to get here today?", questionPt: "Quanto tempo levou para chegar aqui hoje?", hintA1: "It took thirty minutes.", hintA2: "It took about an hour because the traffic was really bad this morning." }
  ],
  medical: [
    { question: "When did you first feel sick?", questionPt: "Quando você se sentiu doente pela primeira vez?", hintA1: "I felt sick yesterday.", hintA2: "I started feeling sick two days ago with a sore throat and a headache." },
    { question: "Do you take any medication every day?", questionPt: "Você toma algum medicamento todos os dias?", hintA1: "No, I do not take any.", hintA2: "I only take vitamins in the morning but no prescription medication." },
    { question: "Did you check your temperature this morning?", questionPt: "Você verificou sua temperatura hoje de manhã?", hintA1: "Yes, it was normal.", hintA2: "Yes, I had a slight fever of 37.8 degrees so I decided to see a doctor." },
    { question: "Do you have health insurance?", questionPt: "Você tem plano de saúde?", hintA1: "Yes, I have insurance.", hintA2: "Yes, my company provides a very good health insurance plan for all employees." },
    { question: "Did you sleep well last night?", questionPt: "Você dormiu bem na noite passada?", hintA1: "No, I woke up many times.", hintA2: "Not really. My cough kept waking me up every couple of hours during the night." }
  ],
  entertainment: [
    { question: "Did you watch any good movies last month?", questionPt: "Você assistiu a algum filme bom no mês passado?", hintA1: "Yes, I watched a comedy.", hintA2: "Yes, I went to the cinema and watched a great thriller with my friends." },
    { question: "Do you play any video games?", questionPt: "Você joga algum videogame?", hintA1: "Yes, I play on my phone.", hintA2: "I love gaming. I usually play on my PlayStation every weekend after lunch." },
    { question: "When did you last go to a concert?", questionPt: "Quando foi a última vez que você foi a um show?", hintA1: "I went last year.", hintA2: "I went to an amazing rock concert about six months ago at the stadium." },
    { question: "Do you prefer reading books or watching series?", questionPt: "Você prefere ler livros ou assistir séries?", hintA1: "I prefer watching series.", hintA2: "It depends on my mood. I usually watch series before bed but read on weekends." },
    { question: "Did you listen to any new music today?", questionPt: "Você ouviu alguma música nova hoje?", hintA1: "No, I listened to old songs.", hintA2: "Yes, Spotify recommended a new album and I really enjoyed every song on it." }
  ],
  cafe: [
    { question: "Did you order a black coffee or a latte?", questionPt: "Você pediu um café preto ou um latte?", hintA1: "I ordered a black coffee.", hintA2: "I asked for an iced latte with oat milk because it is my favorite drink." },
    { question: "Do they sell sandwiches at this cafe?", questionPt: "Eles vendem sanduíches neste café?", hintA1: "Yes, they have sandwiches.", hintA2: "Yes, they have a great selection of paninis, croissants, and cakes too." },
    { question: "When did you start drinking coffee?", questionPt: "Quando você começou a beber café?", hintA1: "I started in college.", hintA2: "I did not like coffee until I started working. Now I drink it every morning." },
    { question: "Do you take sugar in your coffee?", questionPt: "Você coloca açúcar no seu café?", hintA1: "No, I drink it plain.", hintA2: "I used to add sugar, but now I prefer the natural taste of good coffee." },
    { question: "Did you pay in cash or by card?", questionPt: "Você pagou em dinheiro ou no cartão?", hintA1: "I paid by card.", hintA2: "I paid with my credit card because I never carry cash with me anymore." }
  ],
  tech: [
    { question: "When did you buy your current phone?", questionPt: "Quando você comprou o seu celular atual?", hintA1: "I bought it last year.", hintA2: "I got this phone about two years ago and it still works perfectly fine." },
    { question: "Do you use a smartwatch?", questionPt: "Você usa um relógio inteligente?", hintA1: "No, I use a regular watch.", hintA2: "Yes, I wear an Apple Watch every day to track my steps and heart rate." },
    { question: "Did you ever lose your phone?", questionPt: "Você já perdeu seu celular?", hintA1: "No, I never lost it.", hintA2: "Yes, I left it in a taxi once but the driver returned it the next day." },
    { question: "Do you spend a lot of time on social media?", questionPt: "Você passa muito tempo nas redes sociais?", hintA1: "Yes, I use Instagram a lot.", hintA2: "I try to limit my screen time but I still spend about two hours per day." },
    { question: "Did your computer crash recently?", questionPt: "O seu computador travou recentemente?", hintA1: "No, it works fine.", hintA2: "Yes, it froze right in the middle of an important video call last week." }
  ],
  smalltalk: [
    { question: "Did you have a good weekend?", questionPt: "Você teve um bom fim de semana?", hintA1: "Yes, it was very relaxing.", hintA2: "It was great! I went to the beach on Saturday and cooked a nice dinner on Sunday." },
    { question: "Do you follow any sports teams?", questionPt: "Você torce para algum time?", hintA1: "Yes, I like soccer.", hintA2: "Yes, I am a big fan of Flamengo and I try to watch every game on TV." },
    { question: "What time did you arrive at work today?", questionPt: "A que horas você chegou ao trabalho hoje?", hintA1: "I arrived at nine.", hintA2: "I got here around 8:45 because the traffic was surprisingly light today." },
    { question: "Do you know anyone in this neighborhood?", questionPt: "Você conhece alguém neste bairro?", hintA1: "Yes, my cousin lives here.", hintA2: "Not many people. I just moved here last month so I am still meeting my neighbors." },
    { question: "Did you watch the news this morning?", questionPt: "Você assistiu as notícias hoje de manhã?", hintA1: "No, I did not have time.", hintA2: "Yes, I quickly read the headlines on my phone while having breakfast." }
  ],
  slangs: [
    { question: "Did you learn any new slang words this week?", questionPt: "Você aprendeu alguma gíria nova esta semana?", hintA1: "Yes, I learned the word chill.", hintA2: "Yes, my friend taught me what 'no cap' means and now I use it all the time." },
    { question: "Do you think slang changes too quickly?", questionPt: "Você acha que as gírias mudam rápido demais?", hintA1: "Yes, very quickly.", hintA2: "Definitely. Young people on TikTok create new expressions every single week." },
    { question: "What slang did you use when you were a teenager?", questionPt: "Que gíria você usava quando era adolescente?", hintA1: "I used to say 'cool' a lot.", hintA2: "We used to say 'rad' and 'awesome' all the time back in high school." },
    { question: "Do you use emojis when you send messages?", questionPt: "Você usa emojis quando manda mensagens?", hintA1: "Yes, I love using emojis.", hintA2: "I use them in almost every message because they help show my feelings." },
    { question: "Did anyone ever misunderstand your slang?", questionPt: "Alguém já não entendeu a sua gíria?", hintA1: "Yes, my grandmother did not understand.", hintA2: "Yes, my boss was really confused when I accidentally used a very informal expression." }
  ],
  shopping: [
    { question: "Did you buy anything nice last weekend?", questionPt: "Você comprou algo legal no último fim de semana?", hintA1: "I bought a new shirt.", hintA2: "Yes, I found a beautiful pair of shoes that were on a fifty percent discount." },
    { question: "Do you try clothes on before buying them?", questionPt: "Você experimenta as roupas antes de comprá-las?", hintA1: "Yes, I always try them on.", hintA2: "Usually yes, unless I already know my exact size for that specific brand." },
    { question: "When did you last go to a shopping mall?", questionPt: "Quando foi a última vez que você foi a um shopping?", hintA1: "I went last Saturday.", hintA2: "I went to the mall three days ago to buy a gift for my friend's birthday." },
    { question: "Do you prefer shopping online or in stores?", questionPt: "Você prefere comprar online ou em lojas físicas?", hintA1: "I prefer shopping online.", hintA2: "I like both. I buy electronics online but I prefer trying on clothes in the store." },
    { question: "Did the store give you a receipt?", questionPt: "A loja te deu um recibo?", hintA1: "Yes, the receipt is in the bag.", hintA2: "Yes, they asked me if I wanted it printed or sent to my email address." }
  ],
  beauty: [
    { question: "Did you wash your hair this morning?", questionPt: "Você lavou o cabelo hoje de manhã?", hintA1: "Yes, I washed it.", hintA2: "No, I washed it last night so I could sleep a little more this morning." },
    { question: "Do you wear makeup every day?", questionPt: "Você usa maquiagem todos os dias?", hintA1: "No, only on special days.", hintA2: "I only put on a little bit of mascara and lip balm when I go to work." },
    { question: "When did you last change your hairstyle?", questionPt: "Quando foi a última vez que você mudou o corte de cabelo?", hintA1: "I changed it last month.", hintA2: "I completely changed my hairstyle about two years ago and everyone loved it." },
    { question: "Do you use sunscreen every day?", questionPt: "Você usa protetor solar todos os dias?", hintA1: "Yes, every morning.", hintA2: "I always apply sunscreen before leaving the house, even on cloudy days." },
    { question: "Did you go to a spa on your last vacation?", questionPt: "Você foi a um spa nas suas últimas férias?", hintA1: "No, but I want to go.", hintA2: "Yes, I got a relaxing massage and a facial treatment. It was absolutely amazing." }
  ],
  carrental: [
    { question: "Did you rent an automatic or manual car?", questionPt: "Você alugou um carro automático ou manual?", hintA1: "I rented an automatic car.", hintA2: "I always rent automatic cars because they are much easier to drive in the city." },
    { question: "Do you usually buy the extra insurance?", questionPt: "Você costuma comprar o seguro extra?", hintA1: "Yes, just to be safe.", hintA2: "I always buy the full coverage insurance because I do not want any surprises." },
    { question: "When did you learn to drive?", questionPt: "Quando você aprendeu a dirigir?", hintA1: "I learned at eighteen.", hintA2: "My father taught me how to drive when I was seventeen years old." },
    { question: "Does the rental car have GPS?", questionPt: "O carro alugado tem GPS?", hintA1: "Yes, it has a screen.", hintA2: "No, but I just use the navigation app on my phone. It works perfectly." },
    { question: "Did you return the car with a full tank?", questionPt: "Você devolveu o carro com o tanque cheio?", hintA1: "Yes, I filled the tank.", hintA2: "Yes, I stopped at a gas station right before returning it to the airport." }
  ],
  supermarket: [
    { question: "Did you forget anything on your shopping list?", questionPt: "Você esqueceu alguma coisa da sua lista de compras?", hintA1: "Yes, I forgot the eggs.", hintA2: "I completely forgot to buy milk, so I need to go back to the store tomorrow." },
    { question: "Do you check the expiration dates on products?", questionPt: "Você verifica as datas de validade dos produtos?", hintA1: "Yes, I always check.", hintA2: "I always check the dates, especially for dairy products like milk and yogurt." },
    { question: "When did you last buy fresh vegetables?", questionPt: "Quando foi a última vez que você comprou legumes frescos?", hintA1: "I bought them yesterday.", hintA2: "I buy fresh vegetables twice a week at the farmers market near my house." },
    { question: "Does this supermarket sell organic food?", questionPt: "Este supermercado vende comida orgânica?", hintA1: "Yes, they have a section.", hintA2: "Yes, they have a special aisle just for organic and natural products." },
    { question: "Did you bring your own reusable bags?", questionPt: "Você trouxe suas próprias sacolas reutilizáveis?", hintA1: "Yes, I always bring them.", hintA2: "I brought three bags because I do not like using plastic. It is better for the environment." }
  ]
};

// Read the file
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

let totalInserted = 0;

for (const id of Object.keys(extraQuestions)) {
  const marker = "id: '" + id + "'";
  const idIdx = content.indexOf(marker);
  if (idIdx === -1) {
    console.log('WARN: scenario ' + id + ' not found');
    continue;
  }

  // Find speakingQuestions: [ after this id
  const sqMarker = 'speakingQuestions: [';
  const sqIdx = content.indexOf(sqMarker, idIdx);
  if (sqIdx === -1 || sqIdx - idIdx > 500) {
    console.log('WARN: speakingQuestions not found for ' + id);
    continue;
  }

  // Find the matching ] for this array using bracket counting
  const openBracket = sqIdx + sqMarker.length - 1; // index of '['
  let depth = 1;
  let i = openBracket + 1;
  while (depth > 0 && i < content.length) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') depth--;
    i++;
  }
  // i is now one past the closing ']'
  const closingBracket = i - 1;

  // Build the new question objects as TypeScript source code
  let newQuestionsStr = '';
  for (const q of extraQuestions[id]) {
    newQuestionsStr += `,\n    {\n        "question": ${JSON.stringify(q.question)},\n        "questionPt": ${JSON.stringify(q.questionPt)},\n        "hintA1": ${JSON.stringify(q.hintA1)},\n        "hintA2": ${JSON.stringify(q.hintA2)}\n    }`;
  }

  // Insert before the closing bracket
  content = content.substring(0, closingBracket) + newQuestionsStr + '\n    ' + content.substring(closingBracket);
  totalInserted += extraQuestions[id].length;
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Done! Inserted ' + totalInserted + ' new questions across ' + Object.keys(extraQuestions).length + ' scenarios.');

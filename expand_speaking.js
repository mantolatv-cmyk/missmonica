const fs = require('fs');

const extraQuestions = {
  introduction: [
    { question: "Where did you live when you were a child?", questionPt: "Onde você morou quando era criança?", hintA1: "I lived in a small house.", hintA2: "When I was a child, I lived in a quiet neighborhood." },
    { question: "Do you have any pets?", questionPt: "Você tem algum animal de estimação?", hintA1: "Yes, I have a dog.", hintA2: "I have a cat, but I want to get a dog in the future." },
    { question: "What time do you usually wake up?", questionPt: "A que horas você costuma acordar?", hintA1: "I wake up at 7 AM.", hintA2: "I usually wake up at 6:30 AM to exercise before work." },
    { question: "Did you study yesterday?", questionPt: "Você estudou ontem?", hintA1: "Yes, I studied English.", hintA2: "Yes, I studied for about an hour after dinner." },
    { question: "Who do you live with?", questionPt: "Com quem você mora?", hintA1: "I live with my family.", hintA2: "I currently live with my parents and my younger brother." }
  ],
  numbers: [
    { question: "How much did you pay for your last haircut?", questionPt: "Quanto você pagou pelo seu último corte de cabelo?", hintA1: "I paid twenty dollars.", hintA2: "I paid around fifty dollars because it was a fancy salon." },
    { question: "Do you save money every month?", questionPt: "Você guarda dinheiro todo mês?", hintA1: "Yes, I save some money.", hintA2: "I always try to save at least ten percent of my salary." },
    { question: "When did you open your first bank account?", questionPt: "Quando você abriu sua primeira conta bancária?", hintA1: "I opened it five years ago.", hintA2: "I opened my first bank account when I started my first job." },
    { question: "How many friends did you invite to your last birthday?", questionPt: "Quantos amigos você convidou para o seu último aniversário?", hintA1: "I invited ten friends.", hintA2: "I only invited my five closest friends for a small dinner." },
    { question: "What time does your favorite store open?", questionPt: "A que horas a sua loja favorita abre?", hintA1: "It opens at nine.", hintA2: "It usually opens at 9 AM, but on weekends it opens at 10 AM." }
  ],
  airport: [
    { question: "Did you pack your bags yourself?", questionPt: "Você mesmo fez as malas?", hintA1: "Yes, I packed my bags.", hintA2: "Yes, I packed my bags last night to avoid rushing today." },
    { question: "What time does your flight leave?", questionPt: "A que horas seu voo sai?", hintA1: "It leaves at two.", hintA2: "My flight departs at 2:30 PM, so I need to be there early." },
    { question: "Did you buy any duty-free items last time you traveled?", questionPt: "Você comprou algum item no free shop da última vez que viajou?", hintA1: "No, I didn't buy anything.", hintA2: "Yes, I bought some chocolate and perfume." },
    { question: "Do you prefer window or aisle seats?", questionPt: "Você prefere assento na janela ou no corredor?", hintA1: "I prefer the window.", hintA2: "I definitely prefer the aisle so I can get up easily." },
    { question: "How did you arrive at the airport today?", questionPt: "Como você chegou ao aeroporto hoje?", hintA1: "I came by taxi.", hintA2: "My brother drove me here in his car this morning." }
  ],
  immigration: [
    { question: "Why did you choose to visit this country?", questionPt: "Por que você escolheu visitar este país?", hintA1: "Because it is beautiful.", hintA2: "I wanted to visit the famous museums and see the architecture." },
    { question: "Where do you plan to stay?", questionPt: "Onde você planeja ficar?", hintA1: "I will stay in a hotel.", hintA2: "I am staying at a hotel downtown for two weeks." },
    { question: "Did you apply for your visa online?", questionPt: "Você solicitou o seu visto online?", hintA1: "Yes, I did.", hintA2: "Yes, I filled out the forms online and it was very fast." },
    { question: "What do you do in your home country?", questionPt: "O que você faz no seu país de origem?", hintA1: "I am a teacher.", hintA2: "I work as a software engineer for a tech company back home." },
    { question: "Did you bring any food in your luggage?", questionPt: "Você trouxe alguma comida na sua bagagem?", hintA1: "No, I didn't.", hintA2: "No, I only packed clothes and personal items." }
  ],
  hotel: [
    { question: "Did you make a reservation in advance?", questionPt: "Você fez uma reserva com antecedência?", hintA1: "Yes, I made it online.", hintA2: "Yes, I booked the room two months ago on their website." },
    { question: "What time do you usually have breakfast?", questionPt: "A que horas você costuma tomar café da manhã?", hintA1: "I have breakfast at eight.", hintA2: "I usually go down for breakfast around 8:30 in the morning." },
    { question: "Did you use the hotel pool yesterday?", questionPt: "Você usou a piscina do hotel ontem?", hintA1: "No, I didn't have time.", hintA2: "No, I was too busy visiting the city, but maybe I will today." },
    { question: "Does the room have air conditioning?", questionPt: "O quarto tem ar condicionado?", hintA1: "Yes, it has.", hintA2: "Yes, and it works perfectly, which is great because it's hot outside." },
    { question: "When did you check into the hotel?", questionPt: "Quando você fez o check-in no hotel?", hintA1: "I checked in yesterday.", hintA2: "I arrived and checked in yesterday afternoon at 3 PM." }
  ],
  restaurant: [
    { question: "Did you try any local food on your last trip?", questionPt: "Você provou alguma comida local na sua última viagem?", hintA1: "Yes, I ate tacos.", hintA2: "Yes, I went to a local market and tried their famous street food." },
    { question: "Do you usually leave a tip?", questionPt: "Você costuma deixar gorjeta?", hintA1: "Yes, I leave a tip.", hintA2: "I always leave a 15 or 20 percent tip if the service is good." },
    { question: "What did you eat for dinner last night?", questionPt: "O que você comeu no jantar ontem à noite?", hintA1: "I ate a sandwich.", hintA2: "I went to a restaurant and had pasta with seafood." },
    { question: "Does this restaurant accept credit cards?", questionPt: "Este restaurante aceita cartões de crédito?", hintA1: "Yes, they do.", hintA2: "Yes, they take all major credit cards and mobile payments." },
    { question: "Did you book a table before coming here?", questionPt: "Você reservou uma mesa antes de vir aqui?", hintA1: "No, we just walked in.", hintA2: "Yes, I called them this morning to reserve a table for two." }
  ],
  directions: [
    { question: "Did you use a map to find this place?", questionPt: "Você usou um mapa para encontrar este lugar?", hintA1: "Yes, I used my phone.", hintA2: "Yes, I used Google Maps, but I still got a little confused." },
    { question: "Does this bus go to the city center?", questionPt: "Este ônibus vai para o centro da cidade?", hintA1: "Yes, it goes there.", hintA2: "I'm not sure, but the driver said it stops near the main square." },
    { question: "Where did you park your car?", questionPt: "Onde você estacionou o seu carro?", hintA1: "I parked on the street.", hintA2: "I parked in the public garage just two blocks away from here." },
    { question: "Do you know where the nearest subway station is?", questionPt: "Você sabe onde fica a estação de metrô mais próxima?", hintA1: "It is down the street.", hintA2: "It's very close, just go straight and turn right at the next corner." },
    { question: "Did you get lost yesterday?", questionPt: "Você se perdeu ontem?", hintA1: "No, I didn't.", hintA2: "Yes, a little bit, but a friendly local gave me directions." }
  ],
  transport: [
    { question: "Did you buy a ticket for the train?", questionPt: "Você comprou um bilhete para o trem?", hintA1: "Yes, I bought it online.", hintA2: "Yes, I bought a weekly pass at the station this morning." },
    { question: "What time does the subway close?", questionPt: "A que horas o metrô fecha?", hintA1: "It closes at midnight.", hintA2: "I think the last train leaves at around midnight on weekdays." },
    { question: "Did you take a taxi from the airport?", questionPt: "Você pegou um táxi do aeroporto?", hintA1: "No, I took the bus.", hintA2: "No, I decided to take an Uber because it was much cheaper." },
    { question: "Do you ride a bicycle in your city?", questionPt: "Você anda de bicicleta na sua cidade?", hintA1: "Sometimes on weekends.", hintA2: "Yes, I ride my bike to work every day when it's not raining." },
    { question: "How long did it take to get here?", questionPt: "Quanto tempo levou para chegar aqui?", hintA1: "It took thirty minutes.", hintA2: "It took about an hour because the traffic was really bad today." }
  ],
  medical: [
    { question: "When did you first feel sick?", questionPt: "Quando você se sentiu doente pela primeira vez?", hintA1: "I felt sick yesterday.", hintA2: "I started feeling sick two days ago, mostly a sore throat." },
    { question: "Do you take any medication every day?", questionPt: "Você toma algum medicamento todos os dias?", hintA1: "No, I don't.", hintA2: "I only take vitamins, but no prescription medication." },
    { question: "Did you check your temperature this morning?", questionPt: "Você checou sua temperatura hoje de manhã?", hintA1: "Yes, it was normal.", hintA2: "Yes, I had a slight fever, so I decided to see a doctor." },
    { question: "Do you have health insurance?", questionPt: "Você tem plano de saúde?", hintA1: "Yes, I have.", hintA2: "Yes, my company provides a very good health insurance plan." },
    { question: "Did you sleep well last night?", questionPt: "Você dormiu bem na noite passada?", hintA1: "No, I woke up a lot.", hintA2: "Not really, my cough kept waking me up during the night." }
  ],
  entertainment: [
    { question: "Did you watch any good movies last month?", questionPt: "Você assistiu a algum filme bom no mês passado?", hintA1: "Yes, I watched a comedy.", hintA2: "Yes, I went to the cinema and watched a great thriller." },
    { question: "Do you play any video games?", questionPt: "Você joga algum videogame?", hintA1: "Yes, I play on my phone.", hintA2: "I love gaming, I usually play on my PlayStation on weekends." },
    { question: "When did you last go to the theater?", questionPt: "Quando foi a última vez que você foi ao teatro?", hintA1: "I went last year.", hintA2: "I haven't been to the theater since before the pandemic started." },
    { question: "Do you prefer reading books or watching series?", questionPt: "Você prefere ler livros ou assistir séries?", hintA1: "I prefer series.", hintA2: "It depends on my mood, but I usually watch series before bed." },
    { question: "Did you listen to any new music today?", questionPt: "Você ouviu alguma música nova hoje?", hintA1: "No, I listened to old songs.", hintA2: "Yes, Spotify recommended a new album and I really liked it." }
  ],
  cafe: [
    { question: "Did you order a black coffee?", questionPt: "Você pediu um café preto?", hintA1: "No, I ordered a latte.", hintA2: "No, I asked for an Americano with a little bit of milk." },
    { question: "Do they sell sandwiches here?", questionPt: "Eles vendem sanduíches aqui?", hintA1: "Yes, they have sandwiches.", hintA2: "Yes, they have a great selection of paninis and croissants." },
    { question: "When did you start drinking coffee?", questionPt: "Quando você começou a beber café?", hintA1: "I started in college.", hintA2: "I didn't like it until I started working a few years ago." },
    { question: "Do you take sugar in your coffee?", questionPt: "Você coloca açúcar no café?", hintA1: "No, no sugar.", hintA2: "I used to, but now I prefer my coffee completely plain." },
    { question: "Did you pay in cash or by card?", questionPt: "Você pagou em dinheiro ou no cartão?", hintA1: "I paid by card.", hintA2: "I paid with my credit card because I didn't have any cash." }
  ],
  tech: [
    { question: "When did you buy your current phone?", questionPt: "Quando você comprou o seu celular atual?", hintA1: "I bought it last year.", hintA2: "I got this phone about two years ago, but it still works perfectly." },
    { question: "Do you use a smartwatch?", questionPt: "Você usa um relógio inteligente?", hintA1: "Yes, I have an Apple Watch.", hintA2: "No, I prefer classic watches, so I don't use a smartwatch." },
    { question: "Did you lose your phone recently?", questionPt: "Você perdeu seu celular recentemente?", hintA1: "No, I never lost it.", hintA2: "Yes, I lost it in a taxi last month and had to buy a new one." },
    { question: "Do you know how to code?", questionPt: "Você sabe programar?", hintA1: "No, I don't.", hintA2: "Just a little bit of Python that I learned in an online course." },
    { question: "Did your computer crash today?", questionPt: "O seu computador travou hoje?", hintA1: "No, it worked fine.", hintA2: "Yes, it froze right in the middle of a very important meeting." }
  ],
  smalltalk: [
    { question: "Did you have a good weekend?", questionPt: "Você teve um bom fim de semana?", hintA1: "Yes, it was relaxing.", hintA2: "It was great! I went to the beach with some friends on Saturday." },
    { question: "Do you follow any sports?", questionPt: "Você acompanha algum esporte?", hintA1: "I like soccer.", hintA2: "Yes, I'm a big fan of basketball and I try to watch every game." },
    { question: "What time did you arrive at work today?", questionPt: "A que horas você chegou ao trabalho hoje?", hintA1: "I arrived at nine.", hintA2: "I got here around 8:45 AM because the traffic was surprisingly light." },
    { question: "Do you know anyone in this city?", questionPt: "Você conhece alguém nesta cidade?", hintA1: "Yes, my sister lives here.", hintA2: "I don't know many people yet, I just moved here last month." },
    { question: "Did you watch the news this morning?", questionPt: "Você assistiu as notícias esta manhã?", hintA1: "No, I didn't have time.", hintA2: "Yes, I quickly checked the headlines while having breakfast." }
  ],
  slangs: [
    { question: "Did you learn any new slangs today?", questionPt: "Você aprendeu alguma gíria nova hoje?", hintA1: "Yes, I learned 'chill'.", hintA2: "Yes, my friend taught me what 'spill the tea' means today." },
    { question: "Do you think slang changes too fast?", questionPt: "Você acha que as gírias mudam rápido demais?", hintA1: "Yes, very fast.", hintA2: "Definitely, teenagers invent new words every week on TikTok." },
    { question: "What slang did you use when you were a teenager?", questionPt: "Que gíria você usava quando era adolescente?", hintA1: "I used to say 'cool'.", hintA2: "We used to say 'rad' and 'awesome' all the time in high school." },
    { question: "Do you use emojis when you text?", questionPt: "Você usa emojis quando manda mensagem?", hintA1: "Yes, I love emojis.", hintA2: "I use them in every single message to show my mood." },
    { question: "Did anyone misunderstand your slang before?", questionPt: "Alguém já não entendeu a sua gíria antes?", hintA1: "Yes, my grandmother.", hintA2: "Yes, my boss was very confused when I used a modern slang." }
  ],
  shopping: [
    { question: "Did you buy anything nice yesterday?", questionPt: "Você comprou algo legal ontem?", hintA1: "I bought a new shirt.", hintA2: "Yes, I bought a pair of shoes that were on a great discount." },
    { question: "Do you try clothes on before buying them?", questionPt: "Você experimenta as roupas antes de comprá-las?", hintA1: "Yes, always.", hintA2: "Usually yes, unless I already know my exact size for that brand." },
    { question: "When did you start shopping for Christmas?", questionPt: "Quando você começou a fazer compras de Natal?", hintA1: "I started in November.", hintA2: "I always leave it to the last minute and shop in December." },
    { question: "Do you prefer expensive brands or cheap clothes?", questionPt: "Você prefere marcas caras ou roupas baratas?", hintA1: "I prefer cheap clothes.", hintA2: "I like to mix both, but quality is more important than the brand." },
    { question: "Did the cashier give you a receipt?", questionPt: "O caixa te deu o recibo?", hintA1: "Yes, it is in the bag.", hintA2: "Yes, they asked if I wanted it printed or emailed to me." }
  ],
  beauty: [
    { question: "Did you wash your hair this morning?", questionPt: "Você lavou seu cabelo hoje de manhã?", hintA1: "Yes, I did.", hintA2: "No, I washed it last night so I could sleep a bit more today." },
    { question: "Do you wear makeup every day?", questionPt: "Você usa maquiagem todos os dias?", hintA1: "No, only on weekends.", hintA2: "I only put on a little bit of mascara and lip balm for work." },
    { question: "When did you change your hairstyle last?", questionPt: "Quando você mudou seu corte de cabelo pela última vez?", hintA1: "I cut it last month.", hintA2: "I changed my style completely about two years ago." },
    { question: "Do you use anti-aging creams?", questionPt: "Você usa cremes anti-idade?", hintA1: "Yes, every night.", hintA2: "I started using them recently as part of my night routine." },
    { question: "Did you go to a spa on your last vacation?", questionPt: "Você foi a um spa nas suas últimas férias?", hintA1: "No, I didn't.", hintA2: "Yes, I got a relaxing massage and it was amazing." }
  ],
  carrental: [
    { question: "Did you rent an automatic or a manual car?", questionPt: "Você alugou um carro automático ou manual?", hintA1: "I rented an automatic.", hintA2: "I rented an automatic because it's much easier to drive in the city." },
    { question: "Do you usually buy the extra insurance?", questionPt: "Você costuma comprar o seguro extra?", hintA1: "Yes, just in case.", hintA2: "I always buy full coverage insurance so I don't have to worry." },
    { question: "When did you learn to drive?", questionPt: "Quando você aprendeu a dirigir?", hintA1: "I learned at eighteen.", hintA2: "My dad taught me how to drive when I was 17 years old." },
    { question: "Does the rental car have GPS?", questionPt: "O carro alugado tem GPS?", hintA1: "Yes, it has a screen.", hintA2: "No, but I can just use the map app on my smartphone." },
    { question: "Did you return the car with a full tank?", questionPt: "Você devolveu o carro com o tanque cheio?", hintA1: "Yes, I went to the gas station.", hintA2: "Yes, I made sure to fill it up right before arriving at the airport." }
  ],
  supermarket: [
    { question: "Did you forget anything on your shopping list?", questionPt: "Você esqueceu alguma coisa da sua lista de compras?", hintA1: "Yes, I forgot the eggs.", hintA2: "I completely forgot to buy milk, so I have to go back tomorrow." },
    { question: "Do you check the expiration dates?", questionPt: "Você checa a data de validade?", hintA1: "Yes, always.", hintA2: "I always check them, especially for dairy products and meat." },
    { question: "When did you last buy fresh vegetables?", questionPt: "Quando foi a última vez que você comprou legumes frescos?", hintA1: "I bought them yesterday.", hintA2: "I buy them twice a week at the local farmer's market." },
    { question: "Does this supermarket sell organic food?", questionPt: "Este supermercado vende comida orgânica?", hintA1: "Yes, they have a lot.", hintA2: "Yes, they have a specific aisle just for organic and vegan products." },
    { question: "Did you bring your own reusable bags?", questionPt: "Você trouxe suas próprias sacolas reutilizáveis?", hintA1: "Yes, they are in the car.", hintA2: "I brought three reusable bags because I don't like using plastic." }
  ]
};

let content = fs.readFileSync('data/scenarios.ts', 'utf8');

for (const id in extraQuestions) {
  // Find the exact block in the file to append to
  // It looks like:
  // id: 'introduction',
  // speakingQuestions: [
  //    { ... }, { ... }, { ... }
  // ],
  
  const marker = "id: '" + id + "',";
  const startIdx = content.indexOf(marker);
  if (startIdx !== -1) {
    const questionsStart = content.indexOf("speakingQuestions: [", startIdx);
    const questionsEnd = content.indexOf("],", questionsStart);
    
    if (questionsStart !== -1 && questionsEnd !== -1) {
      let existingContent = content.substring(questionsStart + 20, questionsEnd);
      let extraContent = '';
    
    extraQuestions[id].forEach(q => {
      extraContent += ",\\n    " + JSON.stringify(q, null, 4).replace(/\\n/g, '\\n    ');
    });

    const newBlock = "id: '" + id + "',\\n    speakingQuestions: [" + existingContent + extraContent + "\\n    ],";
    
      const oldBlock = content.substring(startIdx, questionsEnd + 2);
      content = content.replace(oldBlock, newBlock);
    }
  } else {
    console.log("Could not find speakingQuestions for", id);
  }
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully expanded speakingQuestions to 8 per scenario!');

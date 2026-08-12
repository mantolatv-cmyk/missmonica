const fs = require('fs');
const path = require('path');

const scenariosData = {
  introduction: [
    { optionAEn: "Forget someone's name right after meeting them", optionAPt: "Esquecer o nome de alguém logo após conhecê-la", optionBEn: "Call someone by the wrong name all night", optionBPt: "Chamar alguém pelo nome errado a noite toda" },
    { optionAEn: "Always introduce yourself first", optionAPt: "Sempre se apresentar primeiro", optionBEn: "Wait for others to introduce themselves", optionBPt: "Esperar os outros se apresentarem" },
    { optionAEn: "Meet 10 new people every day", optionAPt: "Conhecer 10 pessoas novas todos os dias", optionBEn: "Only talk to people you already know", optionBPt: "Falar apenas com pessoas que você já conhece" },
    { optionAEn: "Have a firm handshake", optionAPt: "Ter um aperto de mão firme", optionBEn: "Have a weak handshake but a great smile", optionBPt: "Ter um aperto de mão fraco mas um ótimo sorriso" },
    { optionAEn: "Talk about your hobbies", optionAPt: "Falar sobre seus hobbies", optionBEn: "Talk about your job", optionBPt: "Falar sobre seu trabalho" },
    { optionAEn: "Make eye contact the whole time", optionAPt: "Fazer contato visual o tempo todo", optionBEn: "Look around while talking", optionBPt: "Olhar em volta enquanto conversa" },
    { optionAEn: "Say 'Nice to meet you' too early", optionAPt: "Dizer 'Prazer em conhecê-lo' muito cedo", optionBEn: "Forget to say 'Nice to meet you' at the end", optionBPt: "Esquecer de dizer 'Prazer em conhecê-lo' no final" }
  ],
  numbers: [
    { optionAEn: "Win a million dollars but you can't tell anyone", optionAPt: "Ganhar um milhão de dólares mas não poder contar a ninguém", optionBEn: "Win 100 dollars every day for the rest of your life", optionBPt: "Ganhar 100 dólares todos os dias pelo resto da sua vida" },
    { optionAEn: "Always be exactly 5 minutes late", optionAPt: "Estar sempre exatamente 5 minutos atrasado", optionBEn: "Always be exactly 30 minutes early", optionBPt: "Estar sempre exatamente 30 minutos adiantado" },
    { optionAEn: "Have only one close friend", optionAPt: "Ter apenas um amigo próximo", optionBEn: "Have 100 acquaintances but no close friends", optionBPt: "Ter 100 conhecidos mas nenhum amigo próximo" },
    { optionAEn: "Live to be 100 years old", optionAPt: "Viver até os 100 anos de idade", optionBEn: "Live to be 50 but be super healthy", optionBPt: "Viver até os 50 mas ser super saudável" },
    { optionAEn: "Pay double for everything", optionAPt: "Pagar o dobro por tudo", optionBEn: "Wait in line for 2 hours for everything", optionBPt: "Esperar na fila por 2 horas para tudo" },
    { optionAEn: "Memorize 100 phone numbers", optionAPt: "Memorizar 100 números de telefone", optionBEn: "Forget your own phone number", optionBPt: "Esquecer o seu próprio número de telefone" },
    { optionAEn: "Be 10 years younger", optionAPt: "Ser 10 anos mais jovem", optionBEn: "Have 10 million dollars", optionBPt: "Ter 10 milhões de dólares" }
  ],
  airport: [
    { optionAEn: "Lose your passport", optionAPt: "Perder seu passaporte", optionBEn: "Miss your flight", optionBPt: "Perder seu voo" },
    { optionAEn: "Sit in the middle seat on a 12-hour flight", optionAPt: "Sentar no assento do meio em um voo de 12 horas", optionBEn: "Have a 12-hour layover in a boring airport", optionBPt: "Ter uma escala de 12 horas em um aeroporto chato" },
    { optionAEn: "Have your luggage lost forever", optionAPt: "Ter sua bagagem perdida para sempre", optionBEn: "Have your flight delayed by 24 hours", optionBPt: "Ter seu voo atrasado em 24 horas" },
    { optionAEn: "Sit next to a crying baby", optionAPt: "Sentar ao lado de um bebê chorando", optionBEn: "Sit next to someone who talks the whole time", optionBPt: "Sentar ao lado de alguém que fala o tempo todo" },
    { optionAEn: "Forget your headphones", optionAPt: "Esquecer seus fones de ouvido", optionBEn: "Forget your phone charger", optionBPt: "Esquecer o carregador do seu celular" },
    { optionAEn: "Arrive at the airport 5 hours early", optionAPt: "Chegar ao aeroporto 5 horas adiantado", optionBEn: "Arrive at the airport 5 minutes before the gate closes", optionBPt: "Chegar ao aeroporto 5 minutos antes do portão fechar" },
    { optionAEn: "Only travel with a small backpack", optionAPt: "Viajar apenas com uma mochila pequena", optionBEn: "Travel with three huge suitcases", optionBPt: "Viajar com três malas enormes" }
  ],
  immigration: [
    { optionAEn: "Get questioned for 2 hours at immigration", optionAPt: "Ser interrogado por 2 horas na imigração", optionBEn: "Get your bags fully searched by customs", optionBPt: "Ter suas malas totalmente revistadas pela alfândega" },
    { optionAEn: "Forget the name of your hotel when asked", optionAPt: "Esquecer o nome do seu hotel quando perguntado", optionBEn: "Forget the address of where you are staying", optionBPt: "Esquecer o endereço de onde você vai ficar" },
    { optionAEn: "Have an unfriendly immigration officer", optionAPt: "Pegar um oficial de imigração antipático", optionBEn: "Wait in the immigration line for 3 hours", optionBPt: "Esperar na fila de imigração por 3 horas" },
    { optionAEn: "Accidentally say you are traveling for work instead of tourism", optionAPt: "Dizer sem querer que está viajando a trabalho em vez de turismo", optionBEn: "Accidentally say you plan to stay forever", optionBPt: "Dizer sem querer que planeja ficar para sempre" },
    { optionAEn: "Not speak English and rely on gestures", optionAPt: "Não falar inglês e depender de gestos", optionBEn: "Use a translation app that gives weird answers", optionBPt: "Usar um app de tradução que dá respostas estranhas" },
    { optionAEn: "Have an expired visa", optionAPt: "Estar com o visto expirado", optionBEn: "Have a passport that is falling apart", optionBPt: "Estar com o passaporte caindo aos pedaços" },
    { optionAEn: "Smile too much at the officer", optionAPt: "Sorrir demais para o oficial", optionBEn: "Look incredibly nervous and suspicious", optionBPt: "Parecer incrivelmente nervoso e suspeito" }
  ],
  hotel: [
    { optionAEn: "Have a room with no windows", optionAPt: "Ter um quarto sem janelas", optionBEn: "Have a room next to a noisy elevator", optionBPt: "Ter um quarto perto de um elevador barulhento" },
    { optionAEn: "Sleep on a terrible bed but have amazing breakfast", optionAPt: "Dormir em uma cama terrível mas ter um café da manhã incrível", optionBEn: "Sleep on a great bed but have no breakfast", optionBPt: "Dormir em uma ótima cama mas não ter café da manhã" },
    { optionAEn: "Lose your room key twice in one day", optionAPt: "Perder a chave do quarto duas vezes em um dia", optionBEn: "Forget your room number", optionBPt: "Esquecer o número do seu quarto" },
    { optionAEn: "Have no Wi-Fi in the room", optionAPt: "Não ter Wi-Fi no quarto", optionBEn: "Have no hot water in the shower", optionBPt: "Não ter água quente no chuveiro" },
    { optionAEn: "Stay in a luxury hotel for 1 night", optionAPt: "Ficar em um hotel de luxo por 1 noite", optionBEn: "Stay in a basic hostel for 7 nights", optionBPt: "Ficar em um hostel básico por 7 noites" },
    { optionAEn: "Have housekeeping wake you up at 7 AM", optionAPt: "Ter a arrumação te acordando às 7 da manhã", optionBEn: "Have no housekeeping for your entire stay", optionBPt: "Não ter arrumação durante toda a sua estadia" },
    { optionAEn: "Order very expensive room service", optionAPt: "Pedir um serviço de quarto muito caro", optionBEn: "Walk 30 minutes in the rain to find food", optionBPt: "Caminhar 30 minutos na chuva para encontrar comida" }
  ],
  restaurant: [
    { optionAEn: "Eat a delicious meal but with terrible service", optionAPt: "Comer uma refeição deliciosa mas com péssimo serviço", optionBEn: "Eat a bad meal but with excellent service", optionBPt: "Comer uma refeição ruim mas com excelente serviço" },
    { optionAEn: "Spill water on yourself", optionAPt: "Derrubar água em você mesmo", optionBEn: "Drop your fork on the floor 3 times", optionBPt: "Derrubar o garfo no chão 3 vezes" },
    { optionAEn: "Forget your wallet when the bill arrives", optionAPt: "Esquecer a carteira quando a conta chega", optionBEn: "Have your card declined", optionBPt: "Ter o seu cartão recusado" },
    { optionAEn: "Eat only appetizers for dinner", optionAPt: "Comer apenas entradas no jantar", optionBEn: "Eat only dessert for dinner", optionBPt: "Comer apenas sobremesa no jantar" },
    { optionAEn: "Wait 1 hour for a table", optionAPt: "Esperar 1 hora por uma mesa", optionBEn: "Share a table with strangers", optionBPt: "Dividir a mesa com estranhos" },
    { optionAEn: "Eat something extremely spicy", optionAPt: "Comer algo extremamente apimentado", optionBEn: "Eat something completely tasteless", optionBPt: "Comer algo completamente sem gosto" },
    { optionAEn: "Tip 50% by mistake", optionAPt: "Dar 50% de gorjeta por engano", optionBEn: "Forget to leave a tip", optionBPt: "Esquecer de deixar gorjeta" }
  ],
  directions: [
    { optionAEn: "Get lost in a safe city without a map", optionAPt: "Se perder em uma cidade segura sem um mapa", optionBEn: "Have a map but get lost in a dangerous city", optionBPt: "Ter um mapa mas se perder em uma cidade perigosa" },
    { optionAEn: "Ask a local for directions in bad English", optionAPt: "Pedir informações a um local em um inglês ruim", optionBEn: "Walk around for hours trying to find it yourself", optionBPt: "Andar por horas tentando encontrar sozinho" },
    { optionAEn: "Your phone battery dies while using GPS", optionAPt: "A bateria do celular acabar enquanto usa o GPS", optionBEn: "The GPS takes you to the completely wrong place", optionBPt: "O GPS te levar para o lugar completamente errado" },
    { optionAEn: "Walk 5 miles to your destination", optionAPt: "Caminhar 5 milhas até o seu destino", optionBEn: "Wait 2 hours for a bus", optionBPt: "Esperar 2 horas por um ônibus" },
    { optionAEn: "Follow someone else who is also lost", optionAPt: "Seguir outra pessoa que também está perdida", optionBEn: "Lead a group in the wrong direction", optionBPt: "Liderar um grupo na direção errada" },
    { optionAEn: "Always turn left when you should turn right", optionAPt: "Sempre virar à esquerda quando deveria virar à direita", optionBEn: "Always miss your stop on the train", optionBPt: "Sempre perder a sua parada no trem" },
    { optionAEn: "Use a paper map in the rain", optionAPt: "Usar um mapa de papel na chuva", optionBEn: "Use a broken compass", optionBPt: "Usar uma bússola quebrada" }
  ],
  transport: [
    { optionAEn: "Miss the last train home", optionAPt: "Perder o último trem para casa", optionBEn: "Get on the wrong train going the opposite way", optionBPt: "Pegar o trem errado indo no sentido oposto" },
    { optionAEn: "Stand on a crowded bus for 2 hours", optionAPt: "Ficar em pé em um ônibus lotado por 2 horas", optionBEn: "Sit on an empty bus but it has no AC in the summer", optionBPt: "Sentar em um ônibus vazio mas sem ar condicionado no verão" },
    { optionAEn: "Talk to a stranger on the subway", optionAPt: "Conversar com um estranho no metrô", optionBEn: "Pretend to sleep so nobody talks to you", optionBPt: "Fingir estar dormindo para ninguém falar com você" },
    { optionAEn: "Drop your ticket on the train tracks", optionAPt: "Derrubar seu bilhete nos trilhos do trem", optionBEn: "Lose your ticket inside the bus", optionBPt: "Perder o seu bilhete dentro do ônibus" },
    { optionAEn: "Take a fast but very expensive taxi", optionAPt: "Pegar um táxi rápido mas muito caro", optionBEn: "Take a cheap but very slow bus", optionBPt: "Pegar um ônibus barato mas muito lento" },
    { optionAEn: "Travel next to someone eating smelly food", optionAPt: "Viajar ao lado de alguém comendo comida fedorenta", optionBEn: "Travel next to someone playing loud music without headphones", optionBPt: "Viajar ao lado de alguém tocando música alta sem fones" },
    { optionAEn: "Have to run to catch the bus every day", optionAPt: "Ter que correr para pegar o ônibus todos os dias", optionBEn: "Wait 30 minutes in the cold every day", optionBPt: "Esperar 30 minutos no frio todos os dias" }
  ],
  medical: [
    { optionAEn: "Go to the dentist to pull a tooth", optionAPt: "Ir ao dentista para arrancar um dente", optionBEn: "Go to the hospital for a broken arm", optionBPt: "Ir ao hospital por um braço quebrado" },
    { optionAEn: "Have a terrible headache for 3 days", optionAPt: "Ter uma dor de cabeça terrível por 3 dias", optionBEn: "Have a bad stomachache for 1 day", optionBPt: "Ter uma dor de estômago forte por 1 dia" },
    { optionAEn: "Take medicine that tastes disgusting", optionAPt: "Tomar um remédio com gosto horrível", optionBEn: "Get an injection that hurts a lot", optionBPt: "Tomar uma injeção que dói muito" },
    { optionAEn: "Have to explain your symptoms in another language", optionAPt: "Ter que explicar seus sintomas em outro idioma", optionBEn: "Have the doctor explain your treatment in another language", optionBPt: "Ter o médico explicando seu tratamento em outro idioma" },
    { optionAEn: "Wait 4 hours in the waiting room", optionAPt: "Esperar 4 horas na sala de espera", optionBEn: "Pay a very high hospital bill", optionBPt: "Pagar uma conta de hospital altíssima" },
    { optionAEn: "Break your right hand", optionAPt: "Quebrar a mão direita", optionBEn: "Break your left leg", optionBPt: "Quebrar a perna esquerda" },
    { optionAEn: "Have a stuffy nose for a month", optionAPt: "Ter o nariz entupido por um mês", optionBEn: "Have a sore throat for a week", optionBPt: "Ter dor de garganta por uma semana" }
  ],
  entertainment: [
    { optionAEn: "Watch a great movie in a terrible seat", optionAPt: "Assistir a um ótimo filme em um assento horrível", optionBEn: "Watch a terrible movie in a VIP seat", optionBPt: "Assistir a um filme terrível em um assento VIP" },
    { optionAEn: "Spill your popcorn at the cinema", optionAPt: "Derrubar sua pipoca no cinema", optionBEn: "Spill your soda on your shirt", optionBPt: "Derrubar seu refrigerante na sua camisa" },
    { optionAEn: "Sit behind a very tall person", optionAPt: "Sentar atrás de uma pessoa muito alta", optionBEn: "Sit next to someone checking their bright phone", optionBPt: "Sentar ao lado de alguém mexendo no celular brilhante" },
    { optionAEn: "Go to a concert and stand in the very back", optionAPt: "Ir a um show e ficar no fundão", optionBEn: "Stand in the front row but get pushed constantly", optionBPt: "Ficar na primeira fila mas ser empurrado o tempo todo" },
    { optionAEn: "Only listen to 80s music forever", optionAPt: "Ouvir apenas música dos anos 80 para sempre", optionBEn: "Only listen to modern pop music forever", optionBPt: "Ouvir apenas música pop moderna para sempre" },
    { optionAEn: "Meet your favorite actor but they are rude", optionAPt: "Conhecer seu ator favorito mas ele ser rude", optionBEn: "Meet a famous actor you hate but they are super nice", optionBPt: "Conhecer um ator que você odeia mas ele ser super legal" },
    { optionAEn: "Go to the movies alone", optionAPt: "Ir ao cinema sozinho", optionBEn: "Go to the movies with someone who talks the whole time", optionBPt: "Ir ao cinema com alguém que fala o tempo todo" }
  ],
  cafe: [
    { optionAEn: "Drink cold coffee", optionAPt: "Beber café frio", optionBEn: "Drink hot juice", optionBPt: "Beber suco quente" },
    { optionAEn: "Spill coffee on your laptop", optionAPt: "Derrubar café no seu notebook", optionBEn: "Spill coffee on someone else", optionBPt: "Derrubar café em outra pessoa" },
    { optionAEn: "Have a barista mispronounce your name terribly", optionAPt: "Ter o barista pronunciando seu nome de forma terrível", optionBEn: "Have a barista give you the completely wrong drink", optionBPt: "Ter o barista te dando a bebida completamente errada" },
    { optionAEn: "Work in a noisy cafe", optionAPt: "Trabalhar em um café barulhento", optionBEn: "Work in a quiet cafe with no Wi-Fi", optionBPt: "Trabalhar em um café silencioso mas sem Wi-Fi" },
    { optionAEn: "Drink black coffee with no sugar for a year", optionAPt: "Beber café preto sem açúcar por um ano", optionBEn: "Never drink coffee again", optionBPt: "Nunca mais beber café" },
    { optionAEn: "Order a drink that takes 15 minutes to make", optionAPt: "Pedir uma bebida que demora 15 minutos para ser feita", optionBEn: "Order a basic drip coffee every single day", optionBPt: "Pedir um café coado básico todos os dias" },
    { optionAEn: "Share a small table with a stranger", optionAPt: "Dividir uma mesa pequena com um estranho", optionBEn: "Sit on a high stool with no back support", optionBPt: "Sentar em um banco alto sem encosto" }
  ],
  tech: [
    { optionAEn: "Have a fast computer with terrible internet", optionAPt: "Ter um computador rápido com internet horrível", optionBEn: "Have a very slow computer with gigabit internet", optionBPt: "Ter um computador muito lento com internet gigabit" },
    { optionAEn: "Lose your phone on a trip", optionAPt: "Perder seu celular em uma viagem", optionBEn: "Break your laptop screen before a presentation", optionBPt: "Quebrar a tela do notebook antes de uma apresentação" },
    { optionAEn: "Use a phone with a cracked screen forever", optionAPt: "Usar um celular com a tela trincada para sempre", optionBEn: "Use a phone that needs charging every 2 hours", optionBPt: "Usar um celular que precisa carregar a cada 2 horas" },
    { optionAEn: "Never use social media again", optionAPt: "Nunca mais usar redes sociais", optionBEn: "Never use a search engine (Google) again", optionBPt: "Nunca mais usar um buscador (Google)" },
    { optionAEn: "Have your search history leaked", optionAPt: "Ter seu histórico de pesquisa vazado", optionBEn: "Have your private photos leaked", optionBPt: "Ter suas fotos privadas vazadas" },
    { optionAEn: "Forget all your passwords", optionAPt: "Esquecer todas as suas senhas", optionBEn: "Have someone hack your email account", optionBPt: "Ter alguém hackeando sua conta de e-mail" },
    { optionAEn: "Use only a flip phone from 2005", optionAPt: "Usar apenas um celular de flip de 2005", optionBEn: "Use a heavy desktop computer for everything", optionBPt: "Usar um computador de mesa pesado para tudo" }
  ],
  smalltalk: [
    { optionAEn: "Be stuck in an elevator with your boss", optionAPt: "Ficar preso no elevador com o seu chefe", optionBEn: "Be stuck in an elevator with your ex", optionBPt: "Ficar preso no elevador com o seu ex" },
    { optionAEn: "Talk about the weather for 10 minutes", optionAPt: "Falar sobre o tempo por 10 minutos", optionBEn: "Stand in complete awkward silence", optionBPt: "Ficar em completo silêncio constrangedor" },
    { optionAEn: "Wave back at someone who was waving to the person behind you", optionAPt: "Acenar de volta para alguém que estava acenando para a pessoa atrás de você", optionBEn: "Call someone by the wrong name confidently", optionBPt: "Chamar alguém pelo nome errado com confiança" },
    { optionAEn: "Always overshare personal information", optionAPt: "Sempre compartilhar informações pessoais demais", optionBEn: "Never say anything about yourself", optionBPt: "Nunca dizer nada sobre você mesmo" },
    { optionAEn: "Laugh at a joke you didn't hear", optionAPt: "Rir de uma piada que você não ouviu", optionBEn: "Ask them to repeat the joke three times", optionBPt: "Pedir para repetirem a piada três vezes" },
    { optionAEn: "Have a very loud sneeze in a quiet room", optionAPt: "Dar um espirro muito alto em uma sala silenciosa", optionBEn: "Have a stomach growl loudly during a meeting", optionBPt: "Ter a barriga roncando alto durante uma reunião" },
    { optionAEn: "Accidentally say 'I love you' at the end of a work call", optionAPt: "Dizer sem querer 'eu te amo' no fim de uma ligação de trabalho", optionBEn: "Accidentally hang up on someone important", optionBPt: "Desligar sem querer na cara de alguém importante" }
  ],
  slangs: [
    { optionAEn: "Use outdated slang from the 90s all the time", optionAPt: "Usar gírias antigas dos anos 90 o tempo todo", optionBEn: "Use modern Gen Z slang but totally wrong", optionBPt: "Usar gírias modernas da Geração Z mas totalmente errado" },
    { optionAEn: "Call everyone 'bro' or 'dude'", optionAPt: "Chamar todo mundo de 'bro' ou 'dude'", optionBEn: "Call everyone 'boss' or 'chief'", optionBPt: "Chamar todo mundo de 'boss' ou 'chief'" },
    { optionAEn: "Misunderstand a slang word and get offended", optionAPt: "Entender mal uma gíria e ficar ofendido", optionBEn: "Use a slang word that accidentally offends someone", optionBPt: "Usar uma gíria que ofende alguém sem querer" },
    { optionAEn: "Say 'lit' in a serious business meeting", optionAPt: "Dizer 'lit' em uma reunião de negócios séria", optionBEn: "Say 'no cap' during a job interview", optionBPt: "Dizer 'no cap' durante uma entrevista de emprego" },
    { optionAEn: "Only speak using idioms", optionAPt: "Falar usando apenas expressões idiomáticas", optionBEn: "Never use any slang at all and sound like a robot", optionBPt: "Nunca usar gírias e soar como um robô" },
    { optionAEn: "Sound like a local but have bad grammar", optionAPt: "Soar como um nativo mas ter gramática ruim", optionBEn: "Have perfect grammar but a strong foreign accent", optionBPt: "Ter gramática perfeita mas um sotaque estrangeiro forte" },
    { optionAEn: "Have to explain American slang to your grandparents", optionAPt: "Ter que explicar gírias americanas para seus avós", optionBEn: "Have your grandparents use American slang on you", optionBPt: "Ter seus avós usando gírias americanas com você" }
  ],
  shopping: [
    { optionAEn: "Buy clothes that are too tight", optionAPt: "Comprar roupas que estão muito apertadas", optionBEn: "Buy clothes that are too loose", optionBPt: "Comprar roupas que estão muito largas" },
    { optionAEn: "Shop only at thrift stores forever", optionAPt: "Comprar apenas em brechós para sempre", optionBEn: "Shop only at high-end designer stores but have a strict budget", optionBPt: "Comprar apenas em lojas de grife mas ter um orçamento restrito" },
    { optionAEn: "Have a pushy salesperson follow you around", optionAPt: "Ter um vendedor insistente te seguindo pela loja", optionBEn: "Never find a salesperson when you need help", optionBPt: "Nunca encontrar um vendedor quando precisa de ajuda" },
    { optionAEn: "Realize you left your wallet after everything is scanned", optionAPt: "Perceber que esqueceu a carteira depois de tudo ser escaneado", optionBEn: "Realize you bought the wrong size when you get home", optionBPt: "Perceber que comprou o tamanho errado ao chegar em casa" },
    { optionAEn: "Only buy online without trying on", optionAPt: "Comprar apenas online sem experimentar", optionBEn: "Only buy in stores but wait in huge lines", optionBPt: "Comprar apenas em lojas físicas mas esperar em filas enormes" },
    { optionAEn: "Accidentally drop and break an expensive item", optionAPt: "Derrubar e quebrar um item caro sem querer", optionBEn: "Accidentally rip a piece of clothing while trying it on", optionBPt: "Rasgar uma roupa sem querer enquanto experimenta" },
    { optionAEn: "Have to wear neon colors every day", optionAPt: "Ter que usar cores neon todos os dias", optionBEn: "Have to wear only black and white every day", optionBPt: "Ter que usar apenas preto e branco todos os dias" }
  ],
  beauty: [
    { optionAEn: "Get a terrible haircut right before a big event", optionAPt: "Ter um corte de cabelo terrível logo antes de um grande evento", optionBEn: "Dye your hair a crazy color by mistake", optionBPt: "Pintar o cabelo de uma cor maluca por engano" },
    { optionAEn: "Never be able to wash your hair again", optionAPt: "Nunca mais poder lavar o cabelo", optionBEn: "Never be able to brush your teeth again", optionBPt: "Nunca mais poder escovar os dentes" },
    { optionAEn: "Have smudged makeup all day without knowing", optionAPt: "Ficar com a maquiagem borrada o dia todo sem saber", optionBEn: "Have lipstick on your teeth during a presentation", optionBPt: "Ficar com batom nos dentes durante uma apresentação" },
    { optionAEn: "Only use one skincare product forever", optionAPt: "Usar apenas um produto de skincare para sempre", optionBEn: "Have a 15-step skincare routine every night", optionBPt: "Ter uma rotina de skincare de 15 passos todas as noites" },
    { optionAEn: "Accidentally shave off an eyebrow", optionAPt: "Raspar uma sobrancelha por engano", optionBEn: "Have a bad sunburn on your face", optionBPt: "Ter uma queimadura de sol feia no rosto" },
    { optionAEn: "Wear heavy makeup to the gym", optionAPt: "Usar maquiagem pesada na academia", optionBEn: "Go to a formal party in sweatpants", optionBPt: "Ir a uma festa formal de calça de moletom" },
    { optionAEn: "Smell like garlic all day", optionAPt: "Cheirar a alho o dia todo", optionBEn: "Smell like too much cheap perfume all day", optionBPt: "Cheirar a perfume barato em excesso o dia todo" }
  ],
  carrental: [
    { optionAEn: "Rent a car with no AC in the summer", optionAPt: "Alugar um carro sem ar condicionado no verão", optionBEn: "Rent a car with no heater in the winter", optionBPt: "Alugar um carro sem aquecedor no inverno" },
    { optionAEn: "Get a flat tire in the middle of nowhere", optionAPt: "Ter um pneu furado no meio do nada", optionBEn: "Run out of gas on a busy highway", optionBPt: "Ficar sem gasolina em uma rodovia movimentada" },
    { optionAEn: "Scratch a rental car and lose your deposit", optionAPt: "Arranhar um carro alugado e perder seu depósito", optionBEn: "Get a speeding ticket on your vacation", optionBPt: "Levar uma multa por excesso de velocidade nas férias" },
    { optionAEn: "Drive an automatic car when you only know manual", optionAPt: "Dirigir um carro automático quando você só sabe manual", optionBEn: "Drive a manual car when you only know automatic", optionBPt: "Dirigir um carro manual quando você só sabe automático" },
    { optionAEn: "Have to drive on the left side of the road", optionAPt: "Ter que dirigir no lado esquerdo da rua", optionBEn: "Have to drive in chaotic city traffic", optionBPt: "Ter que dirigir no trânsito caótico da cidade" },
    { optionAEn: "Rent a tiny compact car for a family trip", optionAPt: "Alugar um carro compacto minúsculo para uma viagem em família", optionBEn: "Rent a huge van just for yourself", optionBPt: "Alugar uma van enorme apenas para você" },
    { optionAEn: "Listen to the same song on the radio for a 4-hour drive", optionAPt: "Ouvir a mesma música no rádio por uma viagem de 4 horas", optionBEn: "Drive in complete silence for 4 hours", optionBPt: "Dirigir em completo silêncio por 4 horas" }
  ],
  supermarket: [
    { optionAEn: "Drop a glass bottle of oil in the aisle", optionAPt: "Derrubar uma garrafa de vidro de óleo no corredor", optionBEn: "Knock over a huge display of toilet paper", optionBPt: "Derrubar uma prateleira enorme de papel higiênico" },
    { optionAEn: "Wait in a checkout line for 30 minutes", optionAPt: "Esperar em uma fila do caixa por 30 minutos", optionBEn: "Use self-checkout but the machine keeps freezing", optionBPt: "Usar o autoatendimento mas a máquina não para de travar" },
    { optionAEn: "Forget your reusable bags and carry everything in your arms", optionAPt: "Esquecer as sacolas retornáveis e carregar tudo nos braços", optionBEn: "Buy plastic bags but they break on the way home", optionBPt: "Comprar sacolas plásticas mas elas rasgarem no caminho" },
    { optionAEn: "Go grocery shopping when you are starving", optionAPt: "Fazer compras de supermercado quando você está morrendo de fome", optionBEn: "Go grocery shopping with a crying child", optionBPt: "Fazer compras de supermercado com uma criança chorando" },
    { optionAEn: "Accidentally buy expired milk", optionAPt: "Comprar leite vencido por engano", optionBEn: "Accidentally buy incredibly spicy peppers", optionBPt: "Comprar pimentas incrivelmente ardidas por engano" },
    { optionAEn: "Only be able to buy 5 items at a time", optionAPt: "Só poder comprar 5 itens de cada vez", optionBEn: "Have to buy 100 items every time you go", optionBPt: "Ter que comprar 100 itens toda vez que for" },
    { optionAEn: "Push a shopping cart with a squeaky, broken wheel", optionAPt: "Empurrar um carrinho de compras com uma roda barulhenta e quebrada", optionBEn: "Carry a heavy basket that hurts your hand", optionBPt: "Carregar uma cesta pesada que machuca sua mão" }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, tasks] of Object.entries(scenariosData)) {
  const injectString = `    wouldYouRather: ${JSON.stringify(tasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  let scenarioContent = fileContent.substring(scenarioStartIndex, searchScope);
  
  const injectTarget = '  },';
  const endOfScenarioMatch = scenarioContent.lastIndexOf(injectTarget);
  
  if (endOfScenarioMatch !== -1) {
    const globalIndex = scenarioStartIndex + endOfScenarioMatch;
    
    // Inserir the string right before the last closing bracket of the scenario
    fileContent = fileContent.substring(0, globalIndex) + injectString + ',\n' + fileContent.substring(globalIndex);
    console.log(`Atualizado wouldYouRather em ${id}`);
  }
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

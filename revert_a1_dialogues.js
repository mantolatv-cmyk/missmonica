const fs = require('fs');
const path = require('path');

const extraLines = {
  introduction: {
    1: [
      { speaker: 'native', english: "Are you from here?", portuguese: "Você é daqui?" },
      { speaker: 'student', english: "No, I am from Brazil. I am visiting.", portuguese: "Não, eu sou do Brasil. Estou visitando." },
      { speaker: 'native', english: "Oh, Brazil is beautiful! Welcome.", portuguese: "Ah, o Brasil é lindo! Bem-vindo." },
      { speaker: 'student', english: "Thank you very much. I love it here.", portuguese: "Muito obrigado. Eu amo aqui." },
      { speaker: 'native', english: "Do you like the food?", portuguese: "Você gosta da comida?" },
      { speaker: 'student', english: "Yes, the food is very good.", portuguese: "Sim, a comida é muito boa." },
      { speaker: 'native', english: "Great! Have a good day.", portuguese: "Ótimo! Tenha um bom dia." },
      { speaker: 'student', english: "You too. Goodbye!", portuguese: "Você também. Tchau!" }
    ],
    2: [
      { speaker: 'native', english: "How long are you staying here?", portuguese: "Quanto tempo você vai ficar aqui?" },
      { speaker: 'student', english: "I am staying for two weeks.", portuguese: "Eu vou ficar por duas semanas." },
      { speaker: 'native', english: "Are you traveling alone?", portuguese: "Você está viajando sozinho?" },
      { speaker: 'student', english: "No, I am with my family.", portuguese: "Não, estou com minha família." },
      { speaker: 'native', english: "That is nice. Is it your first time here?", portuguese: "Que legal. É a sua primeira vez aqui?" },
      { speaker: 'student', english: "Yes, it is my first time.", portuguese: "Sim, é a minha primeira vez." },
      { speaker: 'native', english: "I hope you have fun.", portuguese: "Espero que você se divirta." },
      { speaker: 'student', english: "Thank you! See you later.", portuguese: "Obrigado! Até logo." }
    ]
  },
  numbers: {
    1: [
      { speaker: 'native', english: "Can you repeat the number, please?", portuguese: "Você pode repetir o número, por favor?" },
      { speaker: 'student', english: "Yes. It is seven, four, two, one.", portuguese: "Sim. É sete, quatro, dois, um." },
      { speaker: 'native', english: "Thank you. And how much is the ticket?", portuguese: "Obrigado. E quanto custa o ingresso?" },
      { speaker: 'student', english: "It is fifty dollars.", portuguese: "Custa cinquenta dólares." },
      { speaker: 'native', english: "Do you accept credit cards?", portuguese: "Você aceita cartão de crédito?" },
      { speaker: 'student', english: "Yes, we accept cash and cards.", portuguese: "Sim, aceitamos dinheiro e cartões." },
      { speaker: 'native', english: "Here is my card.", portuguese: "Aqui está meu cartão." },
      { speaker: 'student', english: "Thank you very much.", portuguese: "Muito obrigado." }
    ],
    2: [
      { speaker: 'native', english: "What time is your train?", portuguese: "A que horas é o seu trem?" },
      { speaker: 'student', english: "It is at ten thirty.", portuguese: "É às dez e meia." },
      { speaker: 'native', english: "And what platform is it?", portuguese: "E qual é a plataforma?" },
      { speaker: 'student', english: "Platform number five.", portuguese: "Plataforma número cinco." },
      { speaker: 'native', english: "Is it a long trip?", portuguese: "É uma viagem longa?" },
      { speaker: 'student', english: "No, it takes only two hours.", portuguese: "Não, leva apenas duas horas." },
      { speaker: 'native', english: "Perfect. Have a safe trip.", portuguese: "Perfeito. Tenha uma viagem segura." },
      { speaker: 'student', english: "Thank you so much.", portuguese: "Muito obrigado." }
    ]
  },
  airport: {
    1: [
      { speaker: 'native', english: "Where is the bathroom?", portuguese: "Onde fica o banheiro?" },
      { speaker: 'student', english: "It is near gate number four.", portuguese: "É perto do portão número quatro." },
      { speaker: 'native', english: "Is there a coffee shop here?", portuguese: "Tem uma cafeteria aqui?" },
      { speaker: 'student', english: "Yes, there is one on the left.", portuguese: "Sim, tem uma à esquerda." },
      { speaker: 'native', english: "Can I buy water there?", portuguese: "Posso comprar água lá?" },
      { speaker: 'student', english: "Yes, you can.", portuguese: "Sim, você pode." },
      { speaker: 'native', english: "What time is the flight?", portuguese: "A que horas é o voo?" },
      { speaker: 'student', english: "It boards in twenty minutes.", portuguese: "Embarca em vinte minutos." }
    ],
    2: [
      { speaker: 'native', english: "Do you have hand luggage?", portuguese: "Você tem bagagem de mão?" },
      { speaker: 'student', english: "Yes, just this small backpack.", portuguese: "Sim, apenas esta mochila pequena." },
      { speaker: 'native', english: "Please put it under the seat.", portuguese: "Por favor, coloque embaixo do assento." },
      { speaker: 'student', english: "Okay, no problem.", portuguese: "Ok, sem problemas." },
      { speaker: 'native', english: "Do you want some water?", portuguese: "Você quer um pouco de água?" },
      { speaker: 'student', english: "Yes, please.", portuguese: "Sim, por favor." },
      { speaker: 'native', english: "Here you go.", portuguese: "Aqui está." },
      { speaker: 'student', english: "Thank you.", portuguese: "Obrigado." }
    ]
  },
  immigration: {
    1: [
      { speaker: 'native', english: "Where are you staying?", portuguese: "Onde você vai ficar?" },
      { speaker: 'student', english: "I am staying at a hotel downtown.", portuguese: "Eu vou ficar em um hotel no centro." },
      { speaker: 'native', english: "Do you have a return ticket?", portuguese: "Você tem uma passagem de volta?" },
      { speaker: 'student', english: "Yes, I have it right here.", portuguese: "Sim, eu tenho bem aqui." },
      { speaker: 'native', english: "How much money do you have?", portuguese: "Quanto dinheiro você tem?" },
      { speaker: 'student', english: "I have one thousand dollars.", portuguese: "Eu tenho mil dólares." },
      { speaker: 'native', english: "Okay, everything is fine. Welcome.", portuguese: "Ok, está tudo bem. Bem-vindo." },
      { speaker: 'student', english: "Thank you. Have a nice day.", portuguese: "Obrigado. Tenha um bom dia." }
    ],
    2: [
      { speaker: 'native', english: "Are you traveling for business or pleasure?", portuguese: "Você está viajando a negócios ou lazer?" },
      { speaker: 'student', english: "Just for pleasure. I am a tourist.", portuguese: "Apenas lazer. Eu sou um turista." },
      { speaker: 'native', english: "Do you have family here?", portuguese: "Você tem família aqui?" },
      { speaker: 'student', english: "No, I don't.", portuguese: "Não, eu não tenho." },
      { speaker: 'native', english: "What is your profession?", portuguese: "Qual é a sua profissão?" },
      { speaker: 'student', english: "I am an engineer in Brazil.", portuguese: "Eu sou engenheiro no Brasil." },
      { speaker: 'native', english: "Enjoy your stay.", portuguese: "Aproveite sua estadia." },
      { speaker: 'student', english: "Thanks a lot.", portuguese: "Muito obrigado." }
    ]
  },
  hotel: {
    1: [
      { speaker: 'native', english: "What time is breakfast?", portuguese: "A que horas é o café da manhã?" },
      { speaker: 'student', english: "Breakfast is from seven to ten in the morning.", portuguese: "O café da manhã é das sete às dez da manhã." },
      { speaker: 'native', english: "Where is the restaurant?", portuguese: "Onde é o restaurante?" },
      { speaker: 'student', english: "It is on the first floor.", portuguese: "É no primeiro andar." },
      { speaker: 'native', english: "Is there a gym?", portuguese: "Tem uma academia?" },
      { speaker: 'student', english: "Yes, the gym is on the second floor.", portuguese: "Sim, a academia é no segundo andar." },
      { speaker: 'native', english: "Do you need any help with your bags?", portuguese: "Você precisa de ajuda com suas malas?" },
      { speaker: 'student', english: "No, I am good. Thank you.", portuguese: "Não, estou bem. Obrigado." }
    ],
    2: [
      { speaker: 'native', english: "I need more towels, please.", portuguese: "Preciso de mais toalhas, por favor." },
      { speaker: 'student', english: "Of course. How many towels do you need?", portuguese: "Claro. De quantas toalhas você precisa?" },
      { speaker: 'native', english: "Two more towels.", portuguese: "Mais duas toalhas." },
      { speaker: 'student', english: "We will send them right now.", portuguese: "Nós vamos enviá-las agora mesmo." },
      { speaker: 'native', english: "Also, what is the Wi-Fi password?", portuguese: "Além disso, qual é a senha do Wi-Fi?" },
      { speaker: 'student', english: "The password is hotel123.", portuguese: "A senha é hotel123." },
      { speaker: 'native', english: "Thank you very much.", portuguese: "Muito obrigado." },
      { speaker: 'student', english: "You are welcome. Have a good evening.", portuguese: "De nada. Tenha uma boa noite." }
    ]
  },
  restaurant: {
    1: [
      { speaker: 'native', english: "Can I have some more water, please?", portuguese: "Pode me dar mais um pouco de água, por favor?" },
      { speaker: 'student', english: "Yes, I will bring it in a moment.", portuguese: "Sim, vou trazer em um momento." },
      { speaker: 'native', english: "How is the food?", portuguese: "Como está a comida?" },
      { speaker: 'student', english: "It is delicious. The chicken is very good.", portuguese: "Está deliciosa. O frango é muito bom." },
      { speaker: 'native', english: "Do you want to see the dessert menu?", portuguese: "Você quer ver o menu de sobremesas?" },
      { speaker: 'student', english: "No, thank you. Just the check, please.", portuguese: "Não, obrigado. Apenas a conta, por favor." },
      { speaker: 'native', english: "How would you like to pay?", portuguese: "Como você gostaria de pagar?" },
      { speaker: 'student', english: "I will pay with credit card.", portuguese: "Eu vou pagar com cartão de crédito." }
    ],
    2: [
      { speaker: 'native', english: "Are you ready to order?", portuguese: "Você está pronto para pedir?" },
      { speaker: 'student', english: "Yes. I want the pizza, please.", portuguese: "Sim. Eu quero a pizza, por favor." },
      { speaker: 'native', english: "Do you want a small or a large pizza?", portuguese: "Você quer uma pizza pequena ou grande?" },
      { speaker: 'student', english: "A large pizza to share.", portuguese: "Uma pizza grande para dividir." },
      { speaker: 'native', english: "Anything to drink?", portuguese: "Algo para beber?" },
      { speaker: 'student', english: "Two sodas, please.", portuguese: "Dois refrigerantes, por favor." },
      { speaker: 'native', english: "Your food will be ready soon.", portuguese: "Sua comida ficará pronta em breve." },
      { speaker: 'student', english: "Okay. I am very hungry.", portuguese: "Ok. Eu estou com muita fome." }
    ]
  },
  directions: {
    1: [
      { speaker: 'native', english: "Is it far from here?", portuguese: "É longe daqui?" },
      { speaker: 'student', english: "No, it is very close.", portuguese: "Não, é muito perto." },
      { speaker: 'native', english: "Can I walk there?", portuguese: "Posso ir a pé?" },
      { speaker: 'student', english: "Yes. It takes only five minutes.", portuguese: "Sim. Leva apenas cinco minutos." },
      { speaker: 'native', english: "Do I need to cross the street?", portuguese: "Preciso atravessar a rua?" },
      { speaker: 'student', english: "Yes, cross the street at the traffic light.", portuguese: "Sim, atravesse a rua no semáforo." },
      { speaker: 'native', english: "Thank you for your help.", portuguese: "Obrigado pela sua ajuda." },
      { speaker: 'student', english: "No problem. Have a nice day.", portuguese: "Sem problemas. Tenha um bom dia." }
    ],
    2: [
      { speaker: 'native', english: "Excuse me, where is the nearest ATM?", portuguese: "Com licença, onde fica o caixa eletrônico mais próximo?" },
      { speaker: 'student', english: "It is inside the supermarket.", portuguese: "Fica dentro do supermercado." },
      { speaker: 'native', english: "Where is the supermarket?", portuguese: "Onde é o supermercado?" },
      { speaker: 'student', english: "Go straight and turn left.", portuguese: "Siga reto e vire à esquerda." },
      { speaker: 'native', english: "Is it on the right side?", portuguese: "Fica no lado direito?" },
      { speaker: 'student', english: "No, it is on the left side.", portuguese: "Não, fica no lado esquerdo." },
      { speaker: 'native', english: "I understand now. Thanks.", portuguese: "Entendi agora. Obrigado." },
      { speaker: 'student', english: "You are welcome.", portuguese: "De nada." }
    ]
  },
  transport: {
    1: [
      { speaker: 'native', english: "Does this bus go to the museum?", portuguese: "Este ônibus vai para o museu?" },
      { speaker: 'student', english: "Yes, it stops right in front.", portuguese: "Sim, ele para bem em frente." },
      { speaker: 'native', english: "How much is the ticket?", portuguese: "Quanto custa a passagem?" },
      { speaker: 'student', english: "It is two dollars and fifty cents.", portuguese: "Custa dois dólares e cinquenta centavos." },
      { speaker: 'native', english: "Do I pay the driver?", portuguese: "Eu pago ao motorista?" },
      { speaker: 'student', english: "Yes, you can pay with cash.", portuguese: "Sim, você pode pagar com dinheiro." },
      { speaker: 'native', english: "Can you tell me when to get off?", portuguese: "Você pode me dizer quando descer?" },
      { speaker: 'student', english: "Sure. I will let you know.", portuguese: "Claro. Eu te aviso." }
    ],
    2: [
      { speaker: 'native', english: "What time is the next train?", portuguese: "A que horas é o próximo trem?" },
      { speaker: 'student', english: "The next train is at four fifteen.", portuguese: "O próximo trem é às quatro e quinze." },
      { speaker: 'native', english: "Is it a fast train?", portuguese: "É um trem rápido?" },
      { speaker: 'student', english: "No, it is the local train.", portuguese: "Não, é o trem local." },
      { speaker: 'native', english: "Does it stop at many stations?", portuguese: "Ele para em muitas estações?" },
      { speaker: 'student', english: "Yes, it stops at every station.", portuguese: "Sim, ele para em todas as estações." },
      { speaker: 'native', english: "Okay, I will buy a ticket.", portuguese: "Ok, eu vou comprar uma passagem." },
      { speaker: 'student', english: "The ticket machine is over there.", portuguese: "A máquina de passagens fica ali." }
    ]
  },
  medical: {
    1: [
      { speaker: 'native', english: "Do you have a fever?", portuguese: "Você tem febre?" },
      { speaker: 'student', english: "Yes, I feel very hot.", portuguese: "Sim, eu me sinto muito quente." },
      { speaker: 'native', english: "Are you coughing?", portuguese: "Você está tossindo?" },
      { speaker: 'student', english: "Yes, especially at night.", portuguese: "Sim, especialmente à noite." },
      { speaker: 'native', english: "You should rest and drink water.", portuguese: "Você deve descansar e beber água." },
      { speaker: 'student', english: "Do I need medicine?", portuguese: "Eu preciso de remédio?" },
      { speaker: 'native', english: "Yes, take this pill twice a day.", portuguese: "Sim, tome este comprimido duas vezes ao dia." },
      { speaker: 'student', english: "Okay, doctor. Thank you.", portuguese: "Ok, doutor. Obrigado." }
    ],
    2: [
      { speaker: 'native', english: "Where does it hurt?", portuguese: "Onde dói?" },
      { speaker: 'student', english: "My arm hurts a lot.", portuguese: "Meu braço dói muito." },
      { speaker: 'native', english: "Can you move your fingers?", portuguese: "Você consegue mover seus dedos?" },
      { speaker: 'student', english: "Yes, but it is painful.", portuguese: "Sim, mas é doloroso." },
      { speaker: 'native', english: "We need an X-ray.", portuguese: "Precisamos de um raio-X." },
      { speaker: 'student', english: "Is it broken?", portuguese: "Está quebrado?" },
      { speaker: 'native', english: "I will tell you after the X-ray.", portuguese: "Eu te direi depois do raio-X." },
      { speaker: 'student', english: "Okay, I am ready.", portuguese: "Ok, estou pronto." }
    ]
  },
  entertainment: {
    1: [
      { speaker: 'native', english: "What time does the movie finish?", portuguese: "A que horas o filme termina?" },
      { speaker: 'student', english: "It finishes at ten PM.", portuguese: "Ele termina às dez da noite." },
      { speaker: 'native', english: "Is it a good movie?", portuguese: "É um bom filme?" },
      { speaker: 'student', english: "Yes, it is very funny.", portuguese: "Sim, é muito engraçado." },
      { speaker: 'native', english: "Do you want to get popcorn?", portuguese: "Você quer comprar pipoca?" },
      { speaker: 'student', english: "Yes, a large popcorn, please.", portuguese: "Sim, uma pipoca grande, por favor." },
      { speaker: 'native', english: "Here is your popcorn and drink.", portuguese: "Aqui está sua pipoca e bebida." },
      { speaker: 'student', english: "Thanks. Let's find our seats.", portuguese: "Obrigado. Vamos encontrar nossos lugares." }
    ],
    2: [
      { speaker: 'native', english: "Do you like this music?", portuguese: "Você gosta desta música?" },
      { speaker: 'student', english: "Yes, the band is amazing.", portuguese: "Sim, a banda é incrível." },
      { speaker: 'native', english: "It is very loud here.", portuguese: "Está muito alto aqui." },
      { speaker: 'student', english: "Yes, but the concert is great.", portuguese: "Sim, mas o show é ótimo." },
      { speaker: 'native', english: "I am thirsty.", portuguese: "Estou com sede." },
      { speaker: 'student', english: "I can buy water for us.", portuguese: "Eu posso comprar água para nós." },
      { speaker: 'native', english: "Thank you. I will wait here.", portuguese: "Obrigado. Vou esperar aqui." },
      { speaker: 'student', english: "I will be right back.", portuguese: "Volto já." }
    ]
  },
  cafe: {
    1: [
      { speaker: 'native', english: "Do you want sugar in your coffee?", portuguese: "Você quer açúcar no seu café?" },
      { speaker: 'student', english: "No, just milk, please.", portuguese: "Não, apenas leite, por favor." },
      { speaker: 'native', english: "Do you want anything to eat?", portuguese: "Você quer algo para comer?" },
      { speaker: 'student', english: "I want a piece of cake.", portuguese: "Eu quero um pedaço de bolo." },
      { speaker: 'native', english: "Chocolate or vanilla?", portuguese: "Chocolate ou baunilha?" },
      { speaker: 'student', english: "Chocolate cake, please.", portuguese: "Bolo de chocolate, por favor." },
      { speaker: 'native', english: "Here is your order.", portuguese: "Aqui está o seu pedido." },
      { speaker: 'student', english: "Thank you so much.", portuguese: "Muito obrigado." }
    ],
    2: [
      { speaker: 'native', english: "Is this seat taken?", portuguese: "Este lugar está ocupado?" },
      { speaker: 'student', english: "No, it is free. You can sit.", portuguese: "Não, está livre. Você pode sentar." },
      { speaker: 'native', english: "Thank you. The cafe is very busy.", portuguese: "Obrigado. O café está muito cheio." },
      { speaker: 'student', english: "Yes, it is always busy in the morning.", portuguese: "Sim, está sempre cheio de manhã." },
      { speaker: 'native', english: "The coffee here is very good.", portuguese: "O café daqui é muito bom." },
      { speaker: 'student', english: "Yes, it is my favorite place.", portuguese: "Sim, é o meu lugar favorito." },
      { speaker: 'native', english: "Are you working today?", portuguese: "Você está trabalhando hoje?" },
      { speaker: 'student', english: "Yes, I am working on my computer.", portuguese: "Sim, estou trabalhando no meu computador." }
    ]
  },
  tech: {
    1: [
      { speaker: 'native', english: "Can you help me with my phone?", portuguese: "Você pode me ajudar com meu celular?" },
      { speaker: 'student', english: "Yes. What is the problem?", portuguese: "Sim. Qual é o problema?" },
      { speaker: 'native', english: "The battery dies very fast.", portuguese: "A bateria descarrega muito rápido." },
      { speaker: 'student', english: "You should close these apps.", portuguese: "Você deve fechar esses aplicativos." },
      { speaker: 'native', english: "How do I do that?", portuguese: "Como eu faço isso?" },
      { speaker: 'student', english: "Swipe up on the screen.", portuguese: "Deslize para cima na tela." },
      { speaker: 'native', english: "Oh, I see. Thank you.", portuguese: "Ah, entendi. Obrigado." },
      { speaker: 'student', english: "No problem. It is easy.", portuguese: "Sem problemas. É fácil." }
    ],
    2: [
      { speaker: 'native', english: "My computer is not working.", portuguese: "Meu computador não está funcionando." },
      { speaker: 'student', english: "Is it turned on?", portuguese: "Está ligado?" },
      { speaker: 'native', english: "Yes, but the screen is black.", portuguese: "Sim, mas a tela está preta." },
      { speaker: 'student', english: "Did you check the cable?", portuguese: "Você verificou o cabo?" },
      { speaker: 'native', english: "Yes, the cable is connected.", portuguese: "Sim, o cabo está conectado." },
      { speaker: 'student', english: "Let's restart the computer.", portuguese: "Vamos reiniciar o computador." },
      { speaker: 'native', english: "Okay, I will press the button.", portuguese: "Ok, vou apertar o botão." },
      { speaker: 'student', english: "Look, it is working now.", portuguese: "Olha, está funcionando agora." }
    ]
  },
  smalltalk: {
    1: [
      { speaker: 'native', english: "Do you have any pets?", portuguese: "Você tem animais de estimação?" },
      { speaker: 'student', english: "Yes, I have a dog.", portuguese: "Sim, eu tenho um cachorro." },
      { speaker: 'native', english: "What is your dog's name?", portuguese: "Qual é o nome do seu cachorro?" },
      { speaker: 'student', english: "His name is Max.", portuguese: "O nome dele é Max." },
      { speaker: 'native', english: "Is he a big dog?", portuguese: "Ele é um cachorro grande?" },
      { speaker: 'student', english: "No, he is very small.", portuguese: "Não, ele é muito pequeno." },
      { speaker: 'native', english: "I love dogs.", portuguese: "Eu amo cachorros." },
      { speaker: 'student', english: "Me too. They are great friends.", portuguese: "Eu também. Eles são ótimos amigos." }
    ],
    2: [
      { speaker: 'native', english: "What do you do on weekends?", portuguese: "O que você faz nos fins de semana?" },
      { speaker: 'student', english: "I like to watch movies and sleep.", portuguese: "Eu gosto de assistir filmes e dormir." },
      { speaker: 'native', english: "Do you play sports?", portuguese: "Você pratica esportes?" },
      { speaker: 'student', english: "I play soccer with my friends.", portuguese: "Eu jogo futebol com meus amigos." },
      { speaker: 'native', english: "That sounds fun.", portuguese: "Isso parece divertido." },
      { speaker: 'student', english: "Yes, it is very good exercise.", portuguese: "Sim, é um exercício muito bom." },
      { speaker: 'native', english: "I usually just read books.", portuguese: "Eu geralmente apenas leio livros." },
      { speaker: 'student', english: "Reading is good too.", portuguese: "Ler é bom também." }
    ]
  },
  slangs: {
    1: [
      { speaker: 'native', english: "The party was really cool.", portuguese: "A festa foi muito legal." },
      { speaker: 'student', english: "Yes, I had a great time.", portuguese: "Sim, eu me diverti muito." },
      { speaker: 'native', english: "The music was awesome.", portuguese: "A música estava incrível." },
      { speaker: 'student', english: "I agree. It was perfect.", portuguese: "Eu concordo. Foi perfeito." },
      { speaker: 'native', english: "Are you tired today?", portuguese: "Você está cansado hoje?" },
      { speaker: 'student', english: "Yes, I want to sleep.", portuguese: "Sim, eu quero dormir." },
      { speaker: 'native', english: "Go take a nap.", portuguese: "Vá tirar um cochilo." },
      { speaker: 'student', english: "I will do that now.", portuguese: "Eu farei isso agora." }
    ],
    2: [
      { speaker: 'native', english: "What's up?", portuguese: "E aí?" },
      { speaker: 'student', english: "Not much, just relaxing.", portuguese: "Não muito, só relaxando." },
      { speaker: 'native', english: "Do you want to hang out?", portuguese: "Você quer sair/fazer algo?" },
      { speaker: 'student', english: "Sure, let's grab some food.", portuguese: "Claro, vamos comer algo." },
      { speaker: 'native', english: "I know a nice place.", portuguese: "Eu conheço um lugar legal." },
      { speaker: 'student', english: "Is it expensive?", portuguese: "É caro?" },
      { speaker: 'native', english: "No, it is cheap.", portuguese: "Não, é barato." },
      { speaker: 'student', english: "Okay, let's go then.", portuguese: "Ok, vamos lá então." }
    ]
  },
  shopping: {
    1: [
      { speaker: 'native', english: "Can I try this on?", portuguese: "Posso experimentar isto?" },
      { speaker: 'student', english: "Yes, the fitting room is there.", portuguese: "Sim, o provador é ali." },
      { speaker: 'native', english: "Thank you. It is a nice shirt.", portuguese: "Obrigado. É uma camisa bonita." },
      { speaker: 'student', english: "It looks very good on you.", portuguese: "Fica muito bem em você." },
      { speaker: 'native', english: "Do you have it in blue?", portuguese: "Você tem na cor azul?" },
      { speaker: 'student', english: "Let me check for you.", portuguese: "Deixe-me verificar para você." },
      { speaker: 'native', english: "Please do.", portuguese: "Por favor, sim." },
      { speaker: 'student', english: "Here it is in blue.", portuguese: "Aqui está em azul." }
    ],
    2: [
      { speaker: 'native', english: "Are these shoes on sale?", portuguese: "Estes sapatos estão na promoção?" },
      { speaker: 'student', english: "Yes, they are twenty percent off.", portuguese: "Sim, eles têm vinte por cento de desconto." },
      { speaker: 'native', english: "Great, I will take them.", portuguese: "Ótimo, eu vou levá-los." },
      { speaker: 'student', english: "Do you need anything else?", portuguese: "Você precisa de mais alguma coisa?" },
      { speaker: 'native', english: "No, just the shoes.", portuguese: "Não, apenas os sapatos." },
      { speaker: 'student', english: "Your total is forty dollars.", portuguese: "O total é quarenta dólares." },
      { speaker: 'native', english: "Here is fifty dollars.", portuguese: "Aqui estão cinquenta dólares." },
      { speaker: 'student', english: "Here is your change. Thank you.", portuguese: "Aqui está o seu troco. Obrigado." }
    ]
  },
  beauty: {
    1: [
      { speaker: 'native', english: "I want to cut my hair.", portuguese: "Eu quero cortar meu cabelo." },
      { speaker: 'student', english: "How short do you want it?", portuguese: "Quão curto você quer?" },
      { speaker: 'native', english: "Just a little bit.", portuguese: "Apenas um pouco." },
      { speaker: 'student', english: "Okay. Wash your hair first.", portuguese: "Ok. Lave seu cabelo primeiro." },
      { speaker: 'native', english: "The water is too hot.", portuguese: "A água está muito quente." },
      { speaker: 'student', english: "Sorry, is it better now?", portuguese: "Desculpe, está melhor agora?" },
      { speaker: 'native', english: "Yes, that is perfect.", portuguese: "Sim, está perfeito." },
      { speaker: 'student', english: "Great, let's start.", portuguese: "Ótimo, vamos começar." }
    ],
    2: [
      { speaker: 'native', english: "Can you do my nails?", portuguese: "Você pode fazer minhas unhas?" },
      { speaker: 'student', english: "Yes. Choose a color, please.", portuguese: "Sim. Escolha uma cor, por favor." },
      { speaker: 'native', english: "I like this red color.", portuguese: "Eu gosto desta cor vermelha." },
      { speaker: 'student', english: "That is a beautiful color.", portuguese: "Essa é uma cor bonita." },
      { speaker: 'native', english: "How long does it take?", portuguese: "Quanto tempo demora?" },
      { speaker: 'student', english: "About thirty minutes.", portuguese: "Cerca de trinta minutos." },
      { speaker: 'native', english: "Okay, I have time.", portuguese: "Ok, eu tenho tempo." },
      { speaker: 'student', english: "Give me your hand, please.", portuguese: "Me dê a sua mão, por favor." }
    ]
  },
  carrental: {
    1: [
      { speaker: 'native', english: "Is the car clean?", portuguese: "O carro está limpo?" },
      { speaker: 'student', english: "Yes, it is clean and ready.", portuguese: "Sim, está limpo e pronto." },
      { speaker: 'native', english: "Does it have a GPS?", portuguese: "Ele tem um GPS?" },
      { speaker: 'student', english: "Yes, the GPS is included.", portuguese: "Sim, o GPS está incluído." },
      { speaker: 'native', english: "What type of gas does it need?", portuguese: "Que tipo de gasolina ele precisa?" },
      { speaker: 'student', english: "It uses regular gas.", portuguese: "Ele usa gasolina comum." },
      { speaker: 'native', english: "Do I return it full?", portuguese: "Eu devolvo com o tanque cheio?" },
      { speaker: 'student', english: "Yes, please bring it full.", portuguese: "Sim, por favor, traga-o cheio." }
    ],
    2: [
      { speaker: 'native', english: "I have a problem with the car.", portuguese: "Eu tenho um problema com o carro." },
      { speaker: 'student', english: "What is wrong?", portuguese: "O que está errado?" },
      { speaker: 'native', english: "The tire is flat.", portuguese: "O pneu está furado." },
      { speaker: 'student', english: "Where are you now?", portuguese: "Onde você está agora?" },
      { speaker: 'native', english: "I am near the airport.", portuguese: "Estou perto do aeroporto." },
      { speaker: 'student', english: "We will send someone to help.", portuguese: "Nós vamos mandar alguém para ajudar." },
      { speaker: 'native', english: "How long will it take?", portuguese: "Quanto tempo vai demorar?" },
      { speaker: 'student', english: "About twenty minutes.", portuguese: "Cerca de vinte minutos." }
    ]
  },
  supermarket: {
    1: [
      { speaker: 'native', english: "Where is the milk?", portuguese: "Onde está o leite?" },
      { speaker: 'student', english: "It is in aisle three.", portuguese: "Fica no corredor três." },
      { speaker: 'native', english: "Do you sell fresh bread?", portuguese: "Vocês vendem pão fresco?" },
      { speaker: 'student', english: "Yes, the bakery is in the back.", portuguese: "Sim, a padaria é lá no fundo." },
      { speaker: 'native', english: "Are these apples sweet?", portuguese: "Essas maçãs são doces?" },
      { speaker: 'student', english: "Yes, they are very good.", portuguese: "Sim, elas são muito boas." },
      { speaker: 'native', english: "I will take five apples.", portuguese: "Eu vou levar cinco maçãs." },
      { speaker: 'student', english: "Okay, you can weigh them there.", portuguese: "Ok, você pode pesá-las lá." }
    ],
    2: [
      { speaker: 'native', english: "Is this line open?", portuguese: "Este caixa está aberto?" },
      { speaker: 'student', english: "Yes, you can come here.", portuguese: "Sim, você pode vir aqui." },
      { speaker: 'native', english: "I forgot to buy water.", portuguese: "Eu esqueci de comprar água." },
      { speaker: 'student', english: "You can grab it quickly.", portuguese: "Você pode pegar rapidinho." },
      { speaker: 'native', english: "Okay, I am back. Sorry.", portuguese: "Ok, estou de volta. Desculpe." },
      { speaker: 'student', english: "No problem. Do you need a bag?", portuguese: "Sem problemas. Você precisa de uma sacola?" },
      { speaker: 'native', english: "Yes, two bags, please.", portuguese: "Sim, duas sacolas, por favor." },
      { speaker: 'student', english: "That will be thirty dollars.", portuguese: "Vai dar trinta dólares." }
    ]
  }
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, variations] of Object.entries(extraLines)) {
  for (const v of Object.values(variations)) {
    // Generate the exact injected string, and replace it with nothing.
    const injectStr = JSON.stringify(v, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:').slice(1, -1);
    
    // Some lines might have a comma injected before it. We'll just replace the injectStr.
    fileContent = fileContent.replace(',' + '\\n' + injectStr, '');
    fileContent = fileContent.replace(',\\n' + injectStr, '');
    fileContent = fileContent.replace(',\n' + injectStr, '');
    fileContent = fileContent.replace('\n' + injectStr, '');
    fileContent = fileContent.replace(injectStr, '');
  }
}

// Clean up trailing commas before closing brackets that might have been left
fileContent = fileContent.replace(/,\s*\]/g, '\n]');
fileContent = fileContent.replace(/,\s*\}/g, '\n}');

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Reverted rogue injections!');

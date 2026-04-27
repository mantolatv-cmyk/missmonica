// ============================================
// MinhaAula – Scenario Data & TypeScript Interfaces
// ============================================

export interface DialogueLine {
  speaker: 'native' | 'student' | 'tourist' | 'local';
  english: string;
  portuguese: string;
}

export interface VocabularyItem {
  english: string;
  portuguese: string;
}

export interface FlashcardItem {
  english: string;
  portuguese: string;
  icon: string;
}

export interface CulturalTipData {
  title: string;
  titlePt: string;
  content: string;
  contentPt: string;
}

export interface DialogueSet {
  title: string;
  titlePt: string;
  icon: string;
  dialogues: DialogueLine[];
}

export interface Scenario {
  id: string;
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose';
  imagePath: string;
  dialogues: DialogueLine[];
  vocabulary: VocabularyItem[];
  flashcards?: FlashcardItem[];
  culturalTip?: CulturalTipData;
  dialogueSets?: DialogueSet[];
}

export const scenarios: Scenario[] = [
  {
    id: 'introduction',
    title: 'Introducing Yourself',
    titlePt: 'Se Apresentando',
    description: 'Learn to say your name, where you are from, and make a great first impression.',
    descriptionPt: 'Aprenda a dizer seu nome, de onde você é e causar uma ótima primeira impressão.',
    icon: '👋',
    color: 'gold',
    imagePath: '/images/introduction_scene.png',
    dialogues: [
      { speaker: 'native', english: "Hi! What's your name?", portuguese: "Oi! Qual é o seu nome?" },
      { speaker: 'student', english: "Hi! My name is Ana.", portuguese: "Oi! Meu nome é Ana." },
      { speaker: 'native', english: "Nice to meet you, Ana! Where are you from?", portuguese: "Prazer em conhecê-la, Ana! De onde você é?" },
      { speaker: 'student', english: "I'm from Brazil. I'm Brazilian.", portuguese: "Eu sou do Brasil. Eu sou brasileira." },
      { speaker: 'native', english: "That's awesome! Is this your first time in the US?", portuguese: "Que legal! É a sua primeira vez nos EUA?" },
      { speaker: 'student', english: "Yes, it's my first time here. I'm very excited!", portuguese: "Sim, é minha primeira vez aqui. Estou muito animada!" },
      { speaker: 'native', english: "How old are you?", portuguese: "Quantos anos você tem?" },
      { speaker: 'student', english: "I'm 28 years old.", portuguese: "Eu tenho 28 anos." },
      { speaker: 'native', english: "What do you do for a living?", portuguese: "O que você faz da vida?" },
      { speaker: 'student', english: "I'm a teacher. I teach Portuguese.", portuguese: "Eu sou professora. Eu ensino português." },
      { speaker: 'native', english: "That's really cool! Welcome to the US!", portuguese: "Que legal! Bem-vinda aos EUA!" },
      { speaker: 'student', english: "Thank you! You are very kind.", portuguese: "Obrigada! Você é muito gentil." },
    ],
    vocabulary: [
      { english: "My name is...", portuguese: "Meu nome é..." },
      { english: "Nice to meet you", portuguese: "Prazer em conhecê-lo(a)" },
      { english: "I'm from Brazil", portuguese: "Eu sou do Brasil" },
      { english: "How old are you?", portuguese: "Quantos anos você tem?" },
      { english: "I'm ... years old", portuguese: "Eu tenho ... anos" },
      { english: "What do you do?", portuguese: "O que você faz?" },
      { english: "First time", portuguese: "Primeira vez" },
      { english: "I'm excited", portuguese: "Estou animado(a)" },
    ],
    culturalTip: {
      title: "Cultural Tip",
      titlePt: "Dica Cultural",
      content: "Americans love small talk! When meeting someone, they often ask 'How are you?' as a greeting — they expect a short answer like 'I'm good, thanks!' rather than a detailed response. A firm handshake, eye contact, and a smile go a long way!",
      contentPt: "Americanos adoram conversa fiada! Ao conhecer alguém, eles costumam perguntar 'How are you?' como saudação — esperam uma resposta curta como 'I'm good, thanks!' em vez de uma resposta detalhada. Um aperto de mão firme, contato visual e um sorriso fazem toda a diferença!",
    },
  },
  {
    id: 'numbers',
    title: 'Numbers, Prices & Shopping',
    titlePt: 'Números, Preços e Compras',
    description: 'Master numbers for prices, quantities, and everyday shopping situations.',
    descriptionPt: 'Domine os números para preços, quantidades e situações de compras do dia a dia.',
    icon: '💲',
    color: 'peach',
    imagePath: '/images/numbers_scene.png',
    dialogues: [
      { speaker: 'student', english: "Excuse me, how much is this?", portuguese: "Com licença, quanto custa isso?" },
      { speaker: 'native', english: "That one is twelve dollars and fifty cents.", portuguese: "Esse custa doze dólares e cinquenta centavos." },
      { speaker: 'student', english: "And how much are these apples?", portuguese: "E quanto custam essas maçãs?" },
      { speaker: 'native', english: "They are three dollars per pound.", portuguese: "Elas custam três dólares por libra." },
      { speaker: 'student', english: "I'd like five apples, please.", portuguese: "Eu gostaria de cinco maçãs, por favor." },
      { speaker: 'native', english: "Sure! That will be four dollars and twenty cents.", portuguese: "Claro! Vai ser quatro dólares e vinte centavos." },
      { speaker: 'student', english: "I also need two bottles of water.", portuguese: "Eu também preciso de duas garrafas de água." },
      { speaker: 'native', english: "Each bottle is one dollar and seventy-five cents.", portuguese: "Cada garrafa custa um dólar e setenta e cinco centavos." },
      { speaker: 'student', english: "OK. What is my total?", portuguese: "OK. Qual é o meu total?" },
      { speaker: 'native', english: "Your total is twenty dollars and twenty cents.", portuguese: "Seu total é vinte dólares e vinte centavos." },
      { speaker: 'student', english: "Can I pay with a credit card?", portuguese: "Posso pagar com cartão de crédito?" },
      { speaker: 'native', english: "Of course! Here is your receipt. Have a great day!", portuguese: "Claro! Aqui está seu recibo. Tenha um ótimo dia!" },
    ],
    vocabulary: [
      { english: "How much?", portuguese: "Quanto custa?" },
      { english: "Dollar", portuguese: "Dólar" },
      { english: "Cents", portuguese: "Centavos" },
      { english: "Receipt", portuguese: "Recibo" },
      { english: "Change", portuguese: "Troco" },
      { english: "Credit card", portuguese: "Cartão de crédito" },
      { english: "Per pound", portuguese: "Por libra" },
      { english: "Total", portuguese: "Total" },
    ],
    culturalTip: {
      title: "Cultural Tip",
      titlePt: "Dica Cultural",
      content: "In the US, prices displayed in stores do NOT include sales tax! The tax is added at the register, so your total will always be a little higher than the price on the tag. Tax varies by state — in New York it's about 8%, while some states like Oregon have no sales tax at all.",
      contentPt: "Nos EUA, os preços nas lojas NÃO incluem o imposto sobre vendas (sales tax)! O imposto é adicionado no caixa, então seu total será sempre um pouco mais alto que o preço na etiqueta. O imposto varia por estado — em Nova York é cerca de 8%, enquanto alguns estados como Oregon não têm imposto sobre vendas.",
    },
  },
  {
    id: 'airport',
    title: 'Airport & Immigration',
    titlePt: 'Aeroporto e Imigração',
    description: 'Navigate passport control, baggage claim, and customs with confidence.',
    descriptionPt: 'Navegue pelo controle de passaportes, retirada de bagagem e alfândega com confiança.',
    icon: '✈️',
    color: 'sky',
    imagePath: '/images/airport_scene.png',
    dialogues: [
      { speaker: 'native', english: "Good morning. Passport, please.", portuguese: "Bom dia. Passaporte, por favor." },
      { speaker: 'student', english: "Here you go.", portuguese: "Aqui está." },
      { speaker: 'native', english: "What is the purpose of your visit?", portuguese: "Qual é o propósito da sua visita?" },
      { speaker: 'student', english: "I'm here on vacation.", portuguese: "Estou aqui de férias." },
      { speaker: 'native', english: "How long will you stay?", portuguese: "Quanto tempo você vai ficar?" },
      { speaker: 'student', english: "Two weeks.", portuguese: "Duas semanas." },
      { speaker: 'native', english: "Where will you be staying?", portuguese: "Onde você vai ficar?" },
      { speaker: 'student', english: "At a hotel in Manhattan.", portuguese: "Em um hotel em Manhattan." },
      { speaker: 'native', english: "Welcome to the United States. Enjoy your trip!", portuguese: "Bem-vindo aos Estados Unidos. Aproveite sua viagem!" },
      { speaker: 'student', english: "Thank you very much!", portuguese: "Muito obrigado!" },
    ],
    vocabulary: [
      { english: "Passport", portuguese: "Passaporte" },
      { english: "Boarding pass", portuguese: "Cartão de embarque" },
      { english: "Baggage claim", portuguese: "Retirada de bagagem" },
      { english: "Customs", portuguese: "Alfândega" },
      { english: "Gate", portuguese: "Portão de embarque" },
      { english: "Flight", portuguese: "Voo" },
      { english: "Arrival", portuguese: "Chegada" },
      { english: "Departure", portuguese: "Partida" },
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel Check-in',
    titlePt: 'Check-in no Hotel',
    description: 'Check into your room, ask about amenities, and handle reservations.',
    descriptionPt: 'Faça check-in, pergunte sobre comodidades e gerencie reservas.',
    icon: '🏨',
    color: 'lavender',
    imagePath: '/images/hotel_scene.png',
    dialogues: [
      { speaker: 'student', english: "Hello! I have a reservation.", portuguese: "Olá! Eu tenho uma reserva." },
      { speaker: 'native', english: "Welcome! What name is the reservation under?", portuguese: "Bem-vindo! Em nome de quem está a reserva?" },
      { speaker: 'student', english: "It's under Maria Silva.", portuguese: "Está no nome de Maria Silva." },
      { speaker: 'native', english: "I found it. A double room for three nights, correct?", portuguese: "Encontrei. Um quarto duplo por três noites, correto?" },
      { speaker: 'student', english: "Yes, that's correct.", portuguese: "Sim, está correto." },
      { speaker: 'native', english: "May I see your ID and credit card?", portuguese: "Posso ver seu documento e cartão de crédito?" },
      { speaker: 'student', english: "Of course. Here they are.", portuguese: "Claro. Aqui estão." },
      { speaker: 'native', english: "Your room is on the 5th floor. Here is your key card.", portuguese: "Seu quarto é no 5º andar. Aqui está seu cartão-chave." },
      { speaker: 'student', english: "Is breakfast included?", portuguese: "O café da manhã está incluído?" },
      { speaker: 'native', english: "Yes! Breakfast is from 7 to 10 AM in the lobby.", portuguese: "Sim! O café da manhã é das 7 às 10 no lobby." },
    ],
    vocabulary: [
      { english: "Reservation", portuguese: "Reserva" },
      { english: "Room key", portuguese: "Chave do quarto" },
      { english: "Check-in", portuguese: "Check-in" },
      { english: "Check-out", portuguese: "Check-out" },
      { english: "Lobby", portuguese: "Lobby / Recepção" },
      { english: "Elevator", portuguese: "Elevador" },
      { english: "Single room", portuguese: "Quarto individual" },
      { english: "Towels", portuguese: "Toalhas" },
    ],
  },
  {
    id: 'restaurant',
    title: 'Ordering at a Restaurant',
    titlePt: 'Pedindo em um Restaurante',
    description: 'Order food, read menus, and ask for the check like a pro.',
    descriptionPt: 'Peça comida, leia cardápios e peça a conta como um profissional.',
    icon: '🍽️',
    color: 'peach',
    imagePath: '/images/restaurant_scene.png',
    dialogues: [
      { speaker: 'native', english: "Hi there! Welcome. Table for how many?", portuguese: "Olá! Bem-vindo. Mesa para quantos?" },
      { speaker: 'student', english: "Table for two, please.", portuguese: "Mesa para dois, por favor." },
      { speaker: 'native', english: "Here are your menus. Can I start you with some drinks?", portuguese: "Aqui estão os cardápios. Posso começar com algumas bebidas?" },
      { speaker: 'student', english: "I'll have a water, please.", portuguese: "Eu quero uma água, por favor." },
      { speaker: 'native', english: "Are you ready to order?", portuguese: "Vocês estão prontos para pedir?" },
      { speaker: 'student', english: "Yes! I'd like the cheeseburger, please.", portuguese: "Sim! Eu gostaria do cheeseburger, por favor." },
      { speaker: 'native', english: "Would you like fries with that?", portuguese: "Gostaria de batatas fritas com isso?" },
      { speaker: 'student', english: "Yes, please. And can I also get a milkshake?", portuguese: "Sim, por favor. E posso pedir um milkshake também?" },
      { speaker: 'native', english: "Of course! I'll bring that right out.", portuguese: "Claro! Já vou trazer." },
      { speaker: 'student', english: "Can I have the check, please?", portuguese: "Pode trazer a conta, por favor?" },
    ],
    vocabulary: [
      { english: "Menu", portuguese: "Cardápio" },
      { english: "Appetizer", portuguese: "Entrada" },
      { english: "Main course", portuguese: "Prato principal" },
      { english: "Dessert", portuguese: "Sobremesa" },
      { english: "Check / Bill", portuguese: "Conta" },
      { english: "Tip", portuguese: "Gorjeta" },
      { english: "Waiter", portuguese: "Garçom" },
      { english: "To go", portuguese: "Para viagem" },
    ],
  },
  {
    id: 'directions',
    title: 'Street Directions & Local Interactions',
    titlePt: 'Direções na Rua e Interações Locais',
    description: 'Ask for directions, understand navigation, and interact with friendly locals.',
    descriptionPt: 'Peça direções, entenda orientações e interaja com moradores locais.',
    icon: '🗺️',
    color: 'mint',
    imagePath: '/images/directions_scene.png',
    dialogues: [
      { speaker: 'tourist', english: "Excuse me, can you help me?", portuguese: "Com licença, você pode me ajudar?" },
      { speaker: 'local', english: "Of course! What do you need?", portuguese: "Claro! O que você precisa?" },
      { speaker: 'tourist', english: "I'm lost. How do I get to Central Park?", portuguese: "Estou perdido(a). Como eu chego ao Central Park?" },
      { speaker: 'local', english: "Sure! Go straight for two blocks.", portuguese: "Claro! Siga em frente por dois quarteirões." },
      { speaker: 'local', english: "Then turn left on Oak Street.", portuguese: "Depois vire à esquerda na Oak Street." },
      { speaker: 'local', english: "Walk one more block and turn right.", portuguese: "Ande mais um quarteirão e vire à direita." },
      { speaker: 'local', english: "You'll see it on the corner.", portuguese: "Você vai ver na esquina." },
      { speaker: 'tourist', english: "Thank you so much!", portuguese: "Muito obrigado(a)!" },
      { speaker: 'local', english: "You're welcome! Enjoy your visit!", portuguese: "De nada! Aproveite sua visita!" },
    ],
    vocabulary: [
      { english: "Turn left", portuguese: "Vire à esquerda" },
      { english: "Turn right", portuguese: "Vire à direita" },
      { english: "Go straight", portuguese: "Siga em frente" },
      { english: "Block", portuguese: "Quarteirão" },
      { english: "Corner", portuguese: "Esquina" },
      { english: "Cross the street", portuguese: "Atravesse a rua" },
      { english: "Traffic light", portuguese: "Semáforo" },
      { english: "Sidewalk", portuguese: "Calçada" },
    ],
    flashcards: [
      { english: "Turn Left", portuguese: "Vire à esquerda", icon: "⬅️" },
      { english: "Turn Right", portuguese: "Vire à direita", icon: "➡️" },
      { english: "Go Straight", portuguese: "Siga em frente", icon: "⬆️" },
      { english: "Cross the Street", portuguese: "Atravesse a rua", icon: "🚶" },
      { english: "Corner", portuguese: "Esquina", icon: "📐" },
      { english: "Block", portuguese: "Quarteirão", icon: "🏘️" },
      { english: "Traffic Light", portuguese: "Semáforo", icon: "🚦" },
      { english: "Sidewalk", portuguese: "Calçada", icon: "🛤️" },
    ],
    culturalTip: {
      title: "Cultural Tip",
      titlePt: "Dica Cultural",
      content: "Americans are generally very helpful to tourists, but they value personal space and directness. Always start with 'Excuse me' to get their attention, and it's perfectly fine to get straight to the point!",
      contentPt: "Americanos geralmente são muito prestativos com turistas, mas valorizam espaço pessoal e objetividade. Sempre comece com 'Excuse me' para chamar a atenção, e é perfeitamente aceitável ir direto ao ponto!",
    },
  },
  {
    id: 'transport',
    title: 'Uber, Taxi & Metro',
    titlePt: 'Uber, Táxi e Metrô',
    description: 'Get around the city using rideshares, taxis, and the subway system.',
    descriptionPt: 'Ande pela cidade usando aplicativos de transporte, táxi e metrô.',
    icon: '🚕',
    color: 'rose',
    imagePath: '/images/transport_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'Uber / Taxi Ride',
        titlePt: 'Corrida de Uber / Táxi',
        icon: '🚗',
        dialogues: [
          { speaker: 'student', english: "Hi! Are you my Uber driver?", portuguese: "Oi! Você é meu motorista do Uber?" },
          { speaker: 'native', english: "Yes! Are you Ana? Hop in!", portuguese: "Sim! Você é a Ana? Pode entrar!" },
          { speaker: 'student', english: "I'm going to Times Square, please.", portuguese: "Eu vou para a Times Square, por favor." },
          { speaker: 'native', english: "Sure thing. It's about fifteen minutes from here.", portuguese: "Claro. São cerca de quinze minutos daqui." },
          { speaker: 'student', english: "How much will the ride cost?", portuguese: "Quanto vai custar a corrida?" },
          { speaker: 'native', english: "The app shows eighteen dollars. The price might change with traffic.", portuguese: "O aplicativo mostra dezoito dólares. O preço pode mudar com o trânsito." },
          { speaker: 'student', english: "Can you drop me off near the entrance?", portuguese: "Você pode me deixar perto da entrada?" },
          { speaker: 'native', english: "Of course! I'll stop right at the corner.", portuguese: "Claro! Vou parar bem na esquina." },
          { speaker: 'student', english: "We're here already? That was fast!", portuguese: "Já chegamos? Foi rápido!" },
          { speaker: 'native', english: "Here you go! Don't forget to rate the ride. Have a great day!", portuguese: "Aqui está! Não esqueça de avaliar a corrida. Tenha um ótimo dia!" },
        ],
      },
      {
        title: 'Taking the Metro',
        titlePt: 'Pegando o Metrô',
        icon: '🚇',
        dialogues: [
          { speaker: 'student', english: "Excuse me, where can I buy a metro card?", portuguese: "Com licença, onde posso comprar um cartão de metrô?" },
          { speaker: 'native', english: "There's a machine right over there. You can pay with cash or card.", portuguese: "Tem uma máquina ali. Você pode pagar com dinheiro ou cartão." },
          { speaker: 'student', english: "Which line goes to Central Park?", portuguese: "Qual linha vai para o Central Park?" },
          { speaker: 'native', english: "Take the green line, direction uptown. It's three stops from here.", portuguese: "Pegue a linha verde, direção uptown. São três paradas daqui." },
          { speaker: 'student', english: "Do I need to transfer to another line?", portuguese: "Eu preciso fazer baldeação para outra linha?" },
          { speaker: 'native', english: "No, it's a direct ride. No transfers needed.", portuguese: "Não, é direto. Não precisa de baldeação." },
          { speaker: 'student', english: "Which platform is it?", portuguese: "Qual plataforma é?" },
          { speaker: 'native', english: "Platform B, on the right side. Follow the signs.", portuguese: "Plataforma B, do lado direito. Siga as placas." },
          { speaker: 'student', english: "Thank you so much for your help!", portuguese: "Muito obrigada pela sua ajuda!" },
          { speaker: 'native', english: "You're welcome! The train comes every five minutes.", portuguese: "De nada! O trem passa a cada cinco minutos." },
        ],
      },
    ],
    vocabulary: [
      { english: "Ride", portuguese: "Corrida / Carona" },
      { english: "Fare", portuguese: "Tarifa" },
      { english: "Driver", portuguese: "Motorista" },
      { english: "Subway / Metro", portuguese: "Metrô" },
      { english: "Platform", portuguese: "Plataforma" },
      { english: "Transfer", portuguese: "Baldeação" },
      { english: "Stop", portuguese: "Parada" },
      { english: "Metro card", portuguese: "Cartão de metrô" },
    ],
    culturalTip: {
      title: "Cultural Tip",
      titlePt: "Dica Cultural",
      content: "In the US, it's common to tip Uber and taxi drivers 15-20% of the fare. Many ride-share apps let you add the tip directly in the app after your ride. On the subway, keep to the right on escalators so people in a hurry can pass on the left!",
      contentPt: "Nos EUA, é comum dar gorjeta de 15-20% da tarifa para motoristas de Uber e táxi. Muitos apps permitem adicionar a gorjeta diretamente no aplicativo após a corrida. No metrô, fique à direita nas escadas rolantes para que pessoas com pressa possam passar pela esquerda!",
    },
  },
];

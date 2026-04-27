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
  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose' | 'orange' | 'blue' | 'indigo';
  imagePath: string;
  dialogues: DialogueLine[];
  vocabulary: VocabularyItem[];
  flashcards?: FlashcardItem[];
  culturalTips?: CulturalTipData[];
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
    culturalTips: [
      {
        title: "Small Talk",
        titlePt: "Conversa Fiada",
        content: "Americans love small talk! They often ask 'How are you?' as a greeting. They expect a short answer like 'I'm good, thanks!' rather than a detailed response.",
        contentPt: "Americanos adoram conversa fiada! Eles costumam perguntar 'How are you?' como saudação. Esperam uma resposta curta como 'I'm good, thanks!' em vez de detalhes.",
      },
      {
        title: "Personal Space",
        titlePt: "Espaço Pessoal",
        content: "Personal space is vital. Maintain an arm's length distance. Avoid touching someone's arm or shoulder unless you are close friends.",
        contentPt: "O espaço pessoal é vital. Mantenha a distância de um braço. Evite tocar no braço ou ombro de alguém, a menos que sejam amigos próximos.",
      },
      {
        title: "Eye Contact",
        titlePt: "Contato Visual",
        content: "Direct eye contact is seen as a sign of honesty and confidence in the US. When talking to someone, look them in the eyes!",
        contentPt: "O contato visual direto é visto como um sinal de honestidade e confiança nos EUA. Ao falar com alguém, olhe-os nos olhos!",
      }
    ],
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
    culturalTips: [
      {
        title: "Sales Tax",
        titlePt: "Imposto sobre Vendas",
        content: "Prices displayed in stores do NOT include sales tax! It's added at the register. Your total will always be higher than the price on the tag.",
        contentPt: "Os preços nas lojas NÃO incluem o imposto sobre vendas! Ele é adicionado no caixa. Seu total será sempre maior que o preço na etiqueta.",
      },
      {
        title: "Coins & Change",
        titlePt: "Moedas e Troco",
        content: "Get to know coins: Penny (1¢), Nickel (5¢), Dime (10¢), and Quarter (25¢). Quarters are essential for laundry and parking!",
        contentPt: "Conheça as moedas: Penny (1¢), Nickel (5¢), Dime (10¢) e Quarter (25¢). Quarters são essenciais para lavanderia e estacionamento!",
      },
      {
        title: "Paper Money",
        titlePt: "Notas de Papel",
        content: "All US bills are the same size and color (green)! Check the numbers carefully so you don't confuse a $1 bill with a $100 bill.",
        contentPt: "Todas as notas americanas têm o mesmo tamanho e cor (verde)! Verifique os números com cuidado para não confundir uma nota de $1 com uma de $100.",
      }
    ],
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
    culturalTips: [
      {
        title: "Immigration Interview",
        titlePt: "Entrevista de Imigração",
        content: "Be direct and honest with officers. Have your return ticket and hotel address ready. They may ask about your job in Brazil.",
        contentPt: "Seja direto e honesto com os oficiais. Tenha seu bilhete de volta e endereço do hotel prontos. Podem perguntar sobre seu trabalho no Brasil.",
      },
      {
        title: "TSA Rules",
        titlePt: "Regras do TSA",
        content: "You must remove shoes, belts, and jackets at security. Liquids must be 3.4oz (100ml) or less in a clear bag.",
        contentPt: "Você deve remover sapatos, cintos e casacos na segurança. Líquidos devem ter 100ml ou menos em um saco transparente.",
      },
      {
        title: "Ground Transport",
        titlePt: "Transporte Terrestre",
        content: "Follow 'Ground Transportation' signs for Uber/Lyft or Taxis. Do not accept rides from people inside the terminal; use official areas.",
        contentPt: "Siga as placas de 'Ground Transportation' para Uber/Lyft ou Táxis. Não aceite caronas de pessoas dentro do terminal; use as áreas oficiais.",
      }
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
    culturalTips: [
      {
        title: "Resort Fees",
        titlePt: "Taxas de Resort",
        content: "Many hotels charge a mandatory 'Resort Fee' (Wi-Fi, pool) not included in the booking price. You pay it at check-out.",
        contentPt: "Muitos hotéis cobram uma 'Taxa de Resort' obrigatória (Wi-Fi, piscina) não incluída na reserva. Você paga no check-out.",
      },
      {
        title: "Hotel Tipping",
        titlePt: "Gorjetas no Hotel",
        content: "Tip the bellhop $1-2 per bag and leave $2-5 per night for housekeeping on the bedside table.",
        contentPt: "Dê gorjeta ao carregador de $1-2 por mala e deixe $2-5 por noite para a limpeza no criado-mudo.",
      },
      {
        title: "Valet Parking",
        titlePt: "Valet (Estacionamento)",
        content: "Valet parking is common in US hotels but expensive. Tip the valet driver $2-5 every time they bring your car.",
        contentPt: "Estacionamento com manobrista é comum, mas caro. Dê $2-5 de gorjeta toda vez que trouxerem seu carro.",
      }
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
    culturalTips: [
      {
        title: "Tipping at Restaurants",
        titlePt: "Gorjetas em Restaurantes",
        content: "Tipping is mandatory! For table service, the standard is 18-20% before tax. Check if 'Gratuity' is already included.",
        contentPt: "Dar gorjeta é obrigatório! Para serviço de mesa, o padrão é 18-20%. Verifique se a 'Gratuity' já está incluída.",
      },
      {
        title: "Free Refills",
        titlePt: "Refil Grátis",
        content: "Most restaurants offer free refills on soda, iced tea, and coffee. You only pay for the first glass!",
        contentPt: "A maioria dos restaurantes oferece refil grátis para refrigerante, chá gelado e café. Você só paga pelo primeiro copo!",
      },
      {
        title: "Seating Policy",
        titlePt: "Política de Assentos",
        content: "Wait for the host/hostess to seat you. Look for signs that say 'Please wait to be seated' at the entrance.",
        contentPt: "Espere o anfitrião te acomodar. Procure por placas que dizem 'Please wait to be seated' na entrada.",
      }
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
    culturalTips: [
      {
        title: "Directness",
        titlePt: "Objetividade",
        content: "Americans value directness. Start with 'Excuse me' to get attention, then get straight to your question.",
        contentPt: "Americanos valorizam objetividade. Comece com 'Excuse me' para chamar atenção e vá direto ao ponto.",
      },
      {
        title: "Block Size",
        titlePt: "Tamanho do Quarteirão",
        content: "City blocks vary. In NYC, 'long blocks' (avenues) are much longer than 'short blocks' (streets). Walk accordingly!",
        contentPt: "Quarteirões variam. Em NYC, 'long blocks' (avenidas) são bem mais longos que 'short blocks' (ruas). Planeje sua caminhada!",
      },
      {
        title: "Public Safety",
        titlePt: "Segurança Pública",
        content: "If you are lost, go inside a store or cafe to check your map. Avoid looking at your phone in isolated areas at night.",
        contentPt: "Se estiver perdido, entre em uma loja ou café para checar o mapa. Evite ficar no celular em áreas isoladas à noite.",
      }
    ],
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
    culturalTips: [
      {
        title: "Transport Tipping",
        titlePt: "Gorjeta no Transporte",
        content: "Tip Uber and taxi drivers 15-20%. You can add the tip in the app after your ride.",
        contentPt: "Dê gorjeta de 15-20% para motoristas de Uber e táxi. Você pode adicionar no app após a corrida.",
      },
      {
        title: "Escalator Etiquette",
        titlePt: "Etiqueta na Escada Rolante",
        content: "On the subway, keep to the right on escalators. The left side is for people in a hurry to pass.",
        contentPt: "No metrô, fique à direita nas escadas rolantes. O lado esquerdo é para quem tem pressa passar.",
      },
      {
        title: "Safety First",
        titlePt: "Segurança Primeiro",
        content: "In the subway station, always stay behind the yellow line on the platform until the train stops.",
        contentPt: "Na estação de metrô, sempre fique atrás da linha amarela na plataforma até o trem parar.",
      }
    ],
  },
  {
    id: 'medical',
    title: 'Medical & Pharmacy',
    titlePt: 'Saúde e Farmácia',
    description: 'Explain symptoms, buy medicine, and handle medical emergencies.',
    descriptionPt: 'Explique sintomas, compre remédios e lide com emergências.',
    icon: '🏥',
    color: 'mint',
    imagePath: '/images/medical_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'At the Pharmacy',
        titlePt: 'Na Farmácia',
        icon: '💊',
        dialogues: [
          { speaker: 'student', english: "Hi, I'm not feeling well. I have a headache.", portuguese: "Oi, não estou me sentindo bem. Estou com dor de cabeça." },
          { speaker: 'local', english: "I'm sorry to hear that. Do you have a fever too?", portuguese: "Sinto muito por ouvir isso. Você também tem febre?" },
          { speaker: 'student', english: "No, just a headache and a sore throat.", portuguese: "Não, só dor de cabeça e dor de garganta." },
          { speaker: 'local', english: "I recommend this pain reliever. Take one pill every six hours.", portuguese: "Eu recomendo este analgésico. Tome um comprimido a cada seis horas." },
          { speaker: 'student', english: "Is this safe to take with food?", portuguese: "É seguro tomar com comida?" },
          { speaker: 'local', english: "Yes, it's better to take it after a meal.", portuguese: "Sim, é melhor tomar depois de uma refeição." },
        ],
      },
      {
        title: 'Medical Emergency',
        titlePt: 'Emergência Médica',
        icon: '🚑',
        dialogues: [
          { speaker: 'student', english: "Excuse me, I need help! It's an emergency!", portuguese: "Com licença, eu preciso de ajuda! É uma emergência!" },
          { speaker: 'local', english: "What happened? Are you hurt?", portuguese: "O que aconteceu? Você está machucado?" },
          { speaker: 'student', english: "My friend fell down and can't breathe well.", portuguese: "Minha amiga caiu e não está conseguindo respirar bem." },
          { speaker: 'local', english: "Stay calm. I'm calling 911 right now.", portuguese: "Fique calmo. Estou ligando para o 911 agora mesmo." },
          { speaker: 'student', english: "Where is the nearest hospital?", portuguese: "Onde fica o hospital mais próximo?" },
          { speaker: 'local', english: "It's just two blocks away. The ambulance is coming.", portuguese: "Fica a apenas dois quarteirões. A ambulância está chegando." },
        ],
      },
    ],
    vocabulary: [
      { english: "Headache", portuguese: "Dor de cabeça" },
      { english: "Sore throat", portuguese: "Dor de garganta" },
      { english: "Fever", portuguese: "Febre" },
      { english: "Pain reliever", portuguese: "Analgésico" },
      { english: "Emergency", portuguese: "Emergência" },
      { english: "Appointment", portuguese: "Consulta / Compromisso" },
      { english: "Prescription", portuguese: "Receita médica" },
      { english: "Insurance", portuguese: "Seguro saúde" },
    ],
    culturalTips: [
      {
        title: "Medical Costs",
        titlePt: "Custos Médicos",
        content: "US healthcare is expensive. Dial 911 only for life-threatening emergencies. Use 'Urgent Care' for minor issues.",
        contentPt: "A saúde nos EUA é cara. Ligue 911 apenas para emergências graves. Use 'Urgent Care' para problemas menores.",
      },
      {
        title: "Pharmacy vs Drugstore",
        titlePt: "Farmácia vs Drogaria",
        content: "Stores like CVS or Walgreens are 'drugstores' where you can buy snacks and makeup. The 'pharmacy' is just the counter for medicine.",
        contentPt: "Lojas como CVS ou Walgreens são 'drugstores' onde você compra lanches e maquiagem. A 'pharmacy' é apenas o balcão de remédios.",
      },
      {
        title: "Medicine Labels",
        titlePt: "Rótulos de Remédios",
        content: "Always read the 'Drug Facts' label on over-the-counter medicine. It tells you the dosage and active ingredients.",
        contentPt: "Sempre leia o rótulo 'Drug Facts' em remédios de venda livre. Ele informa a dosagem e os ingredientes ativos.",
      }
    ],
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Tickets',
    titlePt: 'Diversão e Ingressos',
    description: 'Buy tickets for Broadway, visit museums, and ask for local recommendations.',
    descriptionPt: 'Compre ingressos para a Broadway, visite museus e peça recomendações.',
    icon: '🎭',
    color: 'sky',
    imagePath: '/images/entertainment_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'Broadway Tickets',
        titlePt: 'Ingressos Broadway',
        icon: '🎟️',
        dialogues: [
          { speaker: 'student', english: "Hi! I'd like two tickets for the 7 PM show, please.", portuguese: "Oi! Eu gostaria de dois ingressos para o show das 19h, por favor." },
          { speaker: 'local', english: "We have seats in the Orchestra or the Mezzanine. Which do you prefer?", portuguese: "Temos assentos na Orquestra ou no Mezzanine. Qual você prefere?" },
          { speaker: 'student', english: "What's the difference in price?", portuguese: "Qual a diferença de preço?" },
          { speaker: 'local', english: "Orchestra is $150 and Mezzanine is $95.", portuguese: "Orquestra é $150 e Mezzanine é $95." },
          { speaker: 'student', english: "I'll take the Mezzanine, please.", portuguese: "Vou querer o Mezzanine, por favor." },
          { speaker: 'local', english: "Great choice! Here are your tickets. Enjoy the show!", portuguese: "Ótima escolha! Aqui estão seus ingressos. Aproveite o show!" },
        ],
      },
      {
        title: 'Asking for Tips',
        titlePt: 'Pedindo Dicas',
        icon: '📍',
        dialogues: [
          { speaker: 'student', english: "Excuse me, what is the best museum to visit near here?", portuguese: "Com licença, qual é o melhor museu para visitar perto daqui?" },
          { speaker: 'local', english: "The MET is amazing! You should definitely go there.", portuguese: "O MET é incrível! Você definitivamente deveria ir lá." },
          { speaker: 'student', english: "Is it open today?", portuguese: "Está aberto hoje?" },
          { speaker: 'local', english: "Yes, they open at 10 AM. You should buy tickets online.", portuguese: "Sim, eles abrem às 10h. Você deveria comprar os ingressos online." },
          { speaker: 'student', english: "Thank you! Do you have any restaurant recommendations?", portuguese: "Obrigada! Você tem alguma recomendação de restaurante?" },
          { speaker: 'local', english: "There's a great Italian place around the corner.", portuguese: "Tem um lugar italiano ótimo virando a esquina." },
        ],
      },
    ],
    vocabulary: [
      { english: "Tickets", portuguese: "Ingressos" },
      { english: "Show", portuguese: "Espetáculo / Show" },
      { english: "Box office", portuguese: "Bilheteria" },
      { english: "Recommendation", portuguese: "Recomendação" },
      { english: "Sold out", portuguese: "Esgotado" },
      { english: "Entrance", portuguese: "Entrada" },
      { english: "Performance", portuguese: "Apresentação" },
      { english: "Souvenir", portuguese: "Lembrancinha" },
    ],
    culturalTips: [
      {
        title: "TKTS Booths",
        titlePt: "Guichês TKTS",
        content: "Find discounted Broadway tickets at 'TKTS' booths in Times Square for same-day performances.",
        contentPt: "Encontre ingressos da Broadway com desconto nos guichês 'TKTS' na Times Square para shows no mesmo dia.",
      },
      {
        title: "Suggested Admission",
        titlePt: "Entrada Sugerida",
        content: "Some museums have 'suggested admission'. You can choose how much to pay, but most tourists pay the full amount.",
        contentPt: "Alguns museus têm 'entrada sugerida'. Você escolhe quanto pagar, mas a maioria dos turistas paga o valor total.",
      },
      {
        title: "Intermission",
        titlePt: "Intervalo",
        content: "Broadway shows usually have a 15-minute intermission. It's the perfect time for a quick bathroom break or to buy water.",
        contentPt: "Shows da Broadway costumam ter um intervalo de 15 minutos. É o momento ideal para ir ao banheiro ou comprar água.",
      }
    ],
  },
  {
    id: 'cafe',
    title: 'Café & Fast Food',
    titlePt: 'Café e Fast Food',
    description: 'Order at Starbucks, customize your coffee, and navigate fast food drive-thrus.',
    descriptionPt: 'Peça no Starbucks, personalize seu café e navegue pelo drive-thru.',
    icon: '☕',
    color: 'orange',
    imagePath: '/images/cafe_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'At Starbucks',
        titlePt: 'No Starbucks',
        icon: '🥤',
        dialogues: [
          { speaker: 'student', english: "Hi! Can I get a Grande Latte, please?", portuguese: "Oi! Pode me dar um Latte Grande, por favor?" },
          { speaker: 'native', english: "Sure! Would you like that hot or iced?", portuguese: "Claro! Você quer quente ou gelado?" },
          { speaker: 'student', english: "Iced, please. And can I have oat milk instead of whole milk?", portuguese: "Gelado, por favor. E posso querer leite de aveia em vez de leite integral?" },
          { speaker: 'native', english: "No problem. Any flavor? Vanilla or caramel?", portuguese: "Sem problema. Algum sabor? Baunilha ou caramelo?" },
          { speaker: 'student', english: "Just vanilla, please. And can I have it with less ice?", portuguese: "Só baunilha, por favor. E pode ser com menos gelo?" },
          { speaker: 'native', english: "Got it. What's your name for the cup?", portuguese: "Entendi. Qual o seu nome para o copo?" },
          { speaker: 'student', english: "It's Maria.", portuguese: "É Maria." },
        ],
      },
      {
        title: 'Fast Food Order',
        titlePt: 'Pedido Fast Food',
        icon: '🍔',
        dialogues: [
          { speaker: 'native', english: "Welcome to Burger King! Will this be for here or to go?", portuguese: "Bem-vindo ao Burger King! Vai ser para comer aqui ou para levar?" },
          { speaker: 'student', english: "To go, please. I'd like a number one combo.", portuguese: "Para levar, por favor. Eu queria o combo número um." },
          { speaker: 'native', english: "Would you like to medium or large your meal?", portuguese: "Você quer o combo médio ou grande?" },
          { speaker: 'student', english: "Medium is fine. Can I have a Coke with that?", portuguese: "Médio está bom. Pode ser uma Coca com isso?" },
          { speaker: 'native', english: "Sure. Anything else? Apple pie or cookies?", portuguese: "Claro. Algo mais? Torta de maçã ou cookies?" },
          { speaker: 'student', english: "No, thank you. That's all.", portuguese: "Não, obrigado. Só isso." },
        ],
      },
    ],
    vocabulary: [
      { english: "Tall / Grande / Venti", portuguese: "Pequeno / Médio / Grande (Starbucks)" },
      { english: "Whole milk", portuguese: "Leite integral" },
      { english: "Oat milk", portuguese: "Leite de aveia" },
      { english: "Decaf", portuguese: "Descafeinado" },
      { english: "Whipped cream", portuguese: "Chantilly" },
      { english: "Drive-thru", portuguese: "Drive-thru" },
      { english: "For here / To go", portuguese: "Para comer aqui / Para levar" },
      { english: "Combo / Meal", portuguese: "Combo / Refeição" },
    ],
    culturalTips: [
      {
        title: "Starbucks Sizes",
        titlePt: "Tamanhos Starbucks",
        content: "Starbucks uses unique names: Tall (12oz), Grande (16oz), and Venti (24oz). If you just say 'small' or 'medium', they will understand, but knowing the names is helpful!",
        contentPt: "O Starbucks usa nomes únicos: Tall (pequeno), Grande (médio) e Venti (grande). Se você disser 'small' ou 'medium', eles vão entender, mas saber os nomes ajuda!",
      },
      {
        title: "Customization is King",
        titlePt: "Personalização é Tudo",
        content: "In the US, you can customize EVERYTHING. Milk types, temperature, amount of ice, and extra shots of espresso. Don't be afraid to ask exactly how you want it!",
        contentPt: "Nos EUA, você pode personalizar TUDO. Tipos de leite, temperatura, quantidade de gelo e doses extras de café. Não tenha medo de pedir exatamente como você quer!",
      },
      {
        title: "Names on Cups",
        titlePt: "Nomes nos Copos",
        content: "Baristas will ask for your name. If your name is hard to spell, it's common to use a 'coffee name' (a simpler nickname) to avoid confusion and misspelling.",
        contentPt: "Os baristas vão pedir seu nome. Se seu nome for difícil de soletrar, é comum usar um 'coffee name' (um apelido simples) para evitar confusão e erros de grafia.",
      }
    ],
  },
  {
    id: 'tech',
    title: 'Phone & Wi-Fi',
    titlePt: 'Telefone e Wi-Fi',
    description: 'Ask for Wi-Fi passwords, buy a local SIM card, and stay connected.',
    descriptionPt: 'Peça senhas de Wi-Fi, compre um chip local e mantenha-se conectado.',
    icon: '📱',
    color: 'blue',
    imagePath: '/images/tech_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'Asking for Wi-Fi',
        titlePt: 'Pedindo Wi-Fi',
        icon: '📶',
        dialogues: [
          { speaker: 'student', english: "Excuse me, do you have Wi-Fi here?", portuguese: "Com licença, você tem Wi-Fi aqui?" },
          { speaker: 'native', english: "Yes, we do! It's free for customers.", portuguese: "Sim, temos! É grátis para clientes." },
          { speaker: 'student', english: "What's the network name?", portuguese: "Qual é o nome da rede?" },
          { speaker: 'native', english: "It's 'CoffeeHouse_Guest'.", portuguese: "É 'CoffeeHouse_Guest'." },
          { speaker: 'student', english: "And what's the password?", portuguese: "E qual é a senha?" },
          { speaker: 'native', english: "The password is 'latte2024'. All lowercase.", portuguese: "A senha é 'latte2024'. Tudo em minúsculo." },
          { speaker: 'student', english: "Thank you! The connection is very fast.", portuguese: "Obrigado! A conexão é muito rápida." },
        ],
      },
      {
        title: 'Buying a SIM Card',
        titlePt: 'Comprando um Chip',
        icon: '💳',
        dialogues: [
          { speaker: 'student', english: "Hi! I'd like to buy a prepaid SIM card, please.", portuguese: "Oi! Eu gostaria de comprar um chip pré-pago, por favor." },
          { speaker: 'native', english: "Sure! We have a travel plan with 10GB of data.", portuguese: "Claro! Temos um plano de viagem com 10GB de dados." },
          { speaker: 'student', english: "How much does it cost?", portuguese: "Quanto custa?" },
          { speaker: 'native', english: "It's thirty dollars and it lasts for thirty days.", portuguese: "Custa trinta dólares e dura trinta dias." },
          { speaker: 'student', english: "Does it include international calls?", portuguese: "Inclui ligações internacionais?" },
          { speaker: 'native', english: "No, but you get unlimited local texts and calls.", portuguese: "Não, mas você tem mensagens e ligações locais ilimitadas." },
          { speaker: 'student', english: "That works. Can you help me activate it?", portuguese: "Serve. Você pode me ajudar a ativar?" },
        ],
      },
    ],
    vocabulary: [
      { english: "Network", portuguese: "Rede" },
      { english: "Password", portuguese: "Senha" },
      { english: "SIM card / Chip", portuguese: "Chip de celular" },
      { english: "Prepaid", portuguese: "Pré-pago" },
      { english: "Data plan", portuguese: "Plano de dados" },
      { english: "Coverage", portuguese: "Cobertura" },
      { english: "Unlimited", portuguese: "Ilimitado" },
      { english: "Charger", portuguese: "Carregador" },
    ],
    culturalTips: [
      {
        title: "Public Wi-Fi",
        titlePt: "Wi-Fi Público",
        content: "Most cafes and airports offer free Wi-Fi. However, be careful with banking or sensitive apps on public networks. Using a VPN is recommended!",
        contentPt: "A maioria dos cafés e aeroportos oferece Wi-Fi grátis. No entanto, tenha cuidado com apps de banco em redes públicas. Usar uma VPN é recomendado!",
      },
      {
        title: "eSIM Convenience",
        titlePt: "Praticidade do eSIM",
        content: "Modern phones support eSIMs. You can buy a data plan online before you travel and activate it instantly when you land, without needing a physical chip.",
        contentPt: "Celulares modernos suportam eSIMs. Você pode comprar um plano de dados online antes de viajar e ativá-lo instantaneamente ao pousar, sem precisar de um chip físico.",
      },
      {
        title: "Power Outlets",
        titlePt: "Tomadas de Energia",
        content: "US outlets use Type A and Type B plugs (two flat pins). The voltage is 110V. Don't forget to bring a travel adapter for your Brazilian devices!",
        contentPt: "As tomadas nos EUA usam plugues Tipo A e B (dois pinos chatos). A voltagem é 110V. Não esqueça de levar um adaptador de viagem para seus aparelhos brasileiros!",
      }
    ],
  },
];

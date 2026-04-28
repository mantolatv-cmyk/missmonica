export interface Attraction {
  name: string;
  description: string;
  tip: string;
  icon: string;
}

export interface FoodSpot {
  name: string;
  type: string;
  mustTry: string;
  icon: string;
}

export interface EntertainmentSpot {
  name: string;
  description: string;
  icon: string;
}

export interface UsefulPhrase {
  english: string;
  portuguese: string;
  context: string;
}

export interface CityGuide {
  id: string;
  name: string;
  state: string;
  tagline: string;
  taglinePt: string;
  emoji: string;
  gradient: string;
  attractions: Attraction[];
  food: FoodSpot[];
  entertainment: EntertainmentSpot[];
  phrases: UsefulPhrase[];
  tips: string[];
  tipsPt: string[];
}

export const cities: CityGuide[] = [
  {
    id: 'new-york',
    name: 'New York City',
    state: 'New York',
    tagline: 'The city that never sleeps',
    taglinePt: 'A cidade que nunca dorme',
    emoji: '🗽',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    attractions: [
      { name: 'Statue of Liberty', description: 'Iconic symbol of freedom on Liberty Island.', tip: 'Book the crown tickets months in advance!', icon: '🗽' },
      { name: 'Central Park', description: '843 acres of green oasis in the heart of Manhattan.', tip: 'Rent a bike for just $15/hour to see more.', icon: '🌳' },
      { name: 'Times Square', description: 'The dazzling heart of NYC with giant LED billboards.', tip: 'Best visited at night for the full light show effect.', icon: '✨' },
      { name: 'The Metropolitan Museum', description: 'One of the world\'s greatest art museums.', tip: 'The suggested admission fee — you can pay less!', icon: '🏛️' },
      { name: 'Brooklyn Bridge', description: 'Iconic 1883 suspension bridge with stunning views.', tip: 'Walk from Manhattan to Brooklyn for the best photos.', icon: '🌉' },
    ],
    food: [
      { name: 'Katz\'s Delicatessen', type: 'Deli', mustTry: 'Pastrami on rye sandwich', icon: '🥪' },
      { name: 'Joe\'s Pizza', type: 'Pizza', mustTry: 'Classic NYC slice — $3 only!', icon: '🍕' },
      { name: 'Shake Shack', type: 'Burgers', mustTry: 'ShackBurger + crinkle fries', icon: '🍔' },
      { name: 'Chinatown', type: 'Asian Food', mustTry: 'Soup dumplings (xiaolongbao)', icon: '🥟' },
      { name: 'Chelsea Market', type: 'Food Hall', mustTry: 'Fresh lobster roll', icon: '🦞' },
    ],
    entertainment: [
      { name: 'Broadway Shows', description: 'World-class theater — get TKTS discounts in Times Square.', icon: '🎭' },
      { name: 'High Line', description: 'Elevated park on a historic rail line with city views.', icon: '🌿' },
      { name: 'Brooklyn Flea Market', description: 'Vintage finds and local street food every weekend.', icon: '🛍️' },
      { name: 'Comedy Cellar', description: 'Famous underground comedy club in Greenwich Village.', icon: '😂' },
      { name: 'One World Observatory', description: 'Breathtaking 360° views from the tallest building.', icon: '🏙️' },
    ],
    phrases: [
      { english: 'Which subway line goes to Times Square?', portuguese: 'Qual linha de metrô vai para a Times Square?', context: 'Transporte' },
      { english: 'Can I get a slice to go, please?', portuguese: 'Posso pegar uma fatia para viagem, por favor?', context: 'Restaurante' },
      { english: 'How far is it to walk?', portuguese: 'Qual a distância a pé?', context: 'Direções' },
      { english: 'Is the museum open on Mondays?', portuguese: 'O museu está aberto às segundas-feiras?', context: 'Turismo' },
      { english: 'Two tickets for tonight\'s show, please.', portuguese: 'Dois ingressos para o show de hoje à noite, por favor.', context: 'Entretenimento' },
    ],
    tips: [
      'The MTA subway runs 24/7 — get an unlimited MetroCard for $34/week.',
      'NYC is very walkable. Most attractions in Manhattan are within walking distance.',
      'Tip 18-20% at restaurants. It\'s non-negotiable in NYC culture.',
    ],
    tipsPt: [
      'O metrô MTA funciona 24h/7 dias — pegue um MetroCard ilimitado por $34/semana.',
      'NYC é muito caminhável. A maioria das atrações em Manhattan ficam a distância a pé.',
      'Gorjeta de 18-20% em restaurantes. É não-negociável na cultura de NYC.',
    ],
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'Florida',
    tagline: 'Sun, sea and endless energy',
    taglinePt: 'Sol, mar e energia infinita',
    emoji: '🌴',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #fda085 100%)',
    attractions: [
      { name: 'South Beach', description: 'World-famous beach with Art Deco architecture.', tip: 'Go on weekday mornings to avoid crowds.', icon: '🏖️' },
      { name: 'Wynwood Walls', description: 'Outdoor street art museum with 50+ murals.', tip: 'Free to walk the outdoor area anytime!', icon: '🎨' },
      { name: 'Little Havana', description: 'Vibrant Cuban neighborhood with culture and food.', tip: 'Calle Ocho is the main street — try a Cuban coffee!', icon: '🇨🇺' },
      { name: 'Everglades', description: 'Unique wetland ecosystem 1 hour from downtown.', tip: 'Airboat tours are a must-do experience.', icon: '🐊' },
      { name: 'Art Deco Historic District', description: 'Pink and pastel buildings from the 1930s on Ocean Drive.', tip: 'Join a free Art Deco walking tour on Saturdays.', icon: '🏛️' },
    ],
    food: [
      { name: 'Versailles Restaurant', type: 'Cuban', mustTry: 'Ropa vieja + Cuban bread', icon: '🍖' },
      { name: 'Joe\'s Stone Crab', type: 'Seafood', mustTry: 'Stone crab claws with mustard sauce', icon: '🦀' },
      { name: 'La Mar', type: 'Peruvian', mustTry: 'Ceviche and tiradito', icon: '🐟' },
      { name: 'Zak the Baker', type: 'Bakery/Café', mustTry: 'Sourdough bread and lattes', icon: '☕' },
      { name: 'Enriqueta\'s', type: 'Cuban', mustTry: 'Media noche sandwich + colada', icon: '🥪' },
    ],
    entertainment: [
      { name: 'Pérez Art Museum (PAMM)', description: 'World-class modern art museum on the Biscayne Bay.', icon: '🖼️' },
      { name: 'Bayside Marketplace', description: 'Waterfront shopping and dining with live music.', icon: '🎵' },
      { name: 'Jungle Island', description: 'Interactive animal park with flamingos and parrots.', icon: '🦜' },
      { name: 'Nightlife on Ocean Drive', description: 'Legendary bar and club strip along the beach.', icon: '🍹' },
      { name: 'Miami Seaquarium', description: 'Marine life shows and dolphin encounters.', icon: '🐬' },
    ],
    phrases: [
      { english: 'Where is the nearest beach access?', portuguese: 'Onde fica o acesso à praia mais próximo?', context: 'Praia' },
      { english: 'Is there a cover charge tonight?', portuguese: 'Tem couvert esta noite?', context: 'Balada' },
      { english: 'I\'d like a Cuban coffee, please.', portuguese: 'Eu gostaria de um café cubano, por favor.', context: 'Café' },
      { english: 'Can we get a table outside?', portuguese: 'Podemos pegar uma mesa do lado de fora?', context: 'Restaurante' },
      { english: 'Does the tour include transportation?', portuguese: 'O passeio inclui transporte?', context: 'Turismo' },
    ],
    tips: [
      'Miami is very car-dependent outside South Beach. Use Uber or rent a car.',
      'Sunscreen is essential — the Florida sun is extremely strong year-round.',
      'Spanish is widely spoken. Many locals appreciate a "Gracias" or "Por favor".',
    ],
    tipsPt: [
      'Miami depende muito de carro fora de South Beach. Use Uber ou alugue um carro.',
      'Protetor solar é essencial — o sol da Flórida é extremamente forte o ano todo.',
      'O espanhol é amplamente falado. Muitos locais apreciam um "Gracias" ou "Por favor".',
    ],
  },
  {
    id: 'orlando',
    name: 'Orlando',
    state: 'Florida',
    tagline: 'The theme park capital of the world',
    taglinePt: 'A capital dos parques temáticos do mundo',
    emoji: '🎢',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #4facfe 100%)',
    attractions: [
      { name: 'Walt Disney World', description: '4 theme parks, 2 water parks — pure magic!', tip: 'Book Genie+ for $20-30/day to skip most lines.', icon: '🏰' },
      { name: 'Universal Studios', description: 'Harry Potter world, Jurassic Park and more.', tip: 'Arrive at park opening to hit Hagrid\'s ride first.', icon: '🎬' },
      { name: 'EPCOT', description: 'World showcase with 11 countries + food & culture.', tip: 'The Food & Wine Festival (Aug-Nov) is unmissable.', icon: '🌍' },
      { name: 'Kennedy Space Center', description: '1 hour away — explore real NASA spacecraft.', tip: 'Check the launch schedule for a chance to see a rocket!', icon: '🚀' },
      { name: 'Disney Springs', description: 'Free shopping, dining, and entertainment complex.', tip: 'No park ticket needed — perfect for an evening out.', icon: '🛍️' },
    ],
    food: [
      { name: 'The Boathouse', type: 'American', mustTry: 'Lobster mac & cheese', icon: '🦞' },
      { name: 'Three Broomsticks (Harry Potter)', type: 'Themed Dining', mustTry: 'Butterbeer (frozen) + Great Feast platter', icon: '🍺' },
      { name: 'Epcot Food Kiosks', type: 'International', mustTry: 'Dishes from each country pavilion', icon: '🌍' },
      { name: 'Beefy King', type: 'Sandwiches', mustTry: 'Roast beef sandwich — local legend', icon: '🥩' },
      { name: 'Christner\'s Prime Steak', type: 'Steakhouse', mustTry: 'Prime ribeye + onion rings', icon: '🥩' },
    ],
    entertainment: [
      { name: 'Disney Fireworks (Wishes)', description: 'Nightly fireworks over Cinderella Castle.', icon: '🎆' },
      { name: 'SeaWorld Orlando', description: 'Marine life, rollercoasters, and animal shows.', icon: '🐋' },
      { name: 'ICON Park', description: 'Giant observation wheel + arcade and restaurants.', icon: '🎡' },
      { name: 'Andretti Indoor Karting', description: 'Go-kart racing, bowling, and VR games under one roof.', icon: '🏎️' },
      { name: 'Disney After Hours', description: 'Exclusive after-dark park access with shorter waits.', icon: '🌙' },
    ],
    phrases: [
      { english: 'How long is the wait for this ride?', portuguese: 'Qual é o tempo de espera para essa atração?', context: 'Parque' },
      { english: 'Where can I find the FastPass kiosk?', portuguese: 'Onde posso encontrar o quiosque de FastPass?', context: 'Parque' },
      { english: 'Do you have a gluten-free menu?', portuguese: 'Vocês têm cardápio sem glúten?', context: 'Restaurante' },
      { english: 'What time does the parade start?', portuguese: 'A que horas começa o desfile?', context: 'Shows' },
      { english: 'Can I take a photo here?', portuguese: 'Posso tirar uma foto aqui?', context: 'Geral' },
    ],
    tips: [
      'Buy multi-day park tickets — they get cheaper per day the more days you add.',
      'Ride the most popular attractions at park opening or in the last hour.',
      'Stay hydrated! The Florida heat can be brutal, especially in summer.',
    ],
    tipsPt: [
      'Compre ingressos para vários dias — ficam mais baratos por dia quanto mais dias você adiciona.',
      'Vá nas atrações mais populares na abertura do parque ou na última hora.',
      'Fique hidratado! O calor da Flórida pode ser brutal, especialmente no verão.',
    ],
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas',
    state: 'Nevada',
    tagline: 'The Entertainment Capital of the World',
    taglinePt: 'A Capital Mundial do Entretenimento',
    emoji: '🎰',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #f7971e 100%)',
    attractions: [
      { name: 'The Strip (Las Vegas Blvd)', description: '4.2 miles of world-class hotels, casinos, and spectacle.', tip: 'Walk The Strip at night — it\'s completely free!', icon: '🌃' },
      { name: 'Bellagio Fountains', description: 'Free choreographed water show every 30 minutes.', tip: 'Best viewed from the bridge across the street.', icon: '⛲' },
      { name: 'Grand Canyon (Day Trip)', description: 'A 4-hour drive or 45-min helicopter flight away.', tip: 'Many day tour companies offer combo deals from $200.', icon: '🏜️' },
      { name: 'Fremont Street Experience', description: 'Old Vegas with a massive LED canopy light show.', tip: 'Free live music and light show every hour after dark.', icon: '🎪' },
      { name: 'High Roller Observation Wheel', description: 'At 550 feet, it\'s the world\'s tallest observation wheel.', tip: 'The Happy Half Hour cabin includes unlimited drinks!', icon: '🎡' },
    ],
    food: [
      { name: 'Gordon Ramsay Hell\'s Kitchen', type: 'Celebrity Chef', mustTry: 'Beef Wellington — the signature dish', icon: '🍖' },
      { name: 'Joël Robuchon', type: 'French Fine Dining', mustTry: '16-course tasting menu', icon: '🍽️' },
      { name: 'Secret Pizza (Mirage)', type: 'Pizza', mustTry: 'Hidden gem — classic NY-style pizza', icon: '🍕' },
      { name: 'In-N-Out Burger', type: 'Burgers', mustTry: 'Double-Double Animal Style', icon: '🍔' },
      { name: 'Wicked Spoon (Cosmopolitan)', type: 'Buffet', mustTry: 'Upscale buffet — everything!', icon: '🍱' },
    ],
    entertainment: [
      { name: 'Cirque du Soleil (O)', description: 'Breathtaking aquatic acrobatics at the Bellagio.', icon: '🎪' },
      { name: 'Las Vegas Residencies', description: 'Top artists like Adele and Bruno Mars play monthly residencies.', icon: '🎤' },
      { name: 'Casinos', description: 'Try blackjack with a $10 minimum — it\'s an experience!', icon: '🎰' },
      { name: 'Mob Museum', description: 'Fascinating history of organized crime in America.', icon: '🕵️' },
      { name: 'Zak Bagans\' Haunted Museum', description: 'Creepy but captivating collection of paranormal artifacts.', icon: '👻' },
    ],
    phrases: [
      { english: 'What\'s the minimum bet at this table?', portuguese: 'Qual é a aposta mínima nesta mesa?', context: 'Cassino' },
      { english: 'I\'d like to make a reservation for two.', portuguese: 'Gostaria de fazer uma reserva para dois.', context: 'Restaurante' },
      { english: 'What shows are playing this weekend?', portuguese: 'Quais shows estão acontecendo nesse fim de semana?', context: 'Entretenimento' },
      { english: 'Is the buffet all-you-can-eat?', portuguese: 'O buffet é à vontade?', context: 'Comida' },
      { english: 'Where can I get complimentary drinks?', portuguese: 'Onde posso pegar drinks cortesia?', context: 'Cassino' },
    ],
    tips: [
      'Drinks are free while gambling at most casinos — tip your cocktail waitress $1 per drink.',
      'Most shows require purchasing tickets in advance. Check hotel concierges for last-minute deals.',
      'Las Vegas is scorching hot in summer (110°F/43°C). Plan outdoor activities for morning or evening.',
    ],
    tipsPt: [
      'Drinks são grátis enquanto se joga na maioria dos cassinos — gorjeta de $1 por drink para a garçonete.',
      'A maioria dos shows requer compra antecipada. Consulte o concierge do hotel para ofertas de última hora.',
      'Las Vegas é escaldante no verão (43°C). Planeje atividades ao ar livre para manhã ou noite.',
    ],
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    state: 'California',
    tagline: 'Where innovation meets natural beauty',
    taglinePt: 'Onde a inovação encontra a beleza natural',
    emoji: '🌉',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    attractions: [
      { name: 'Golden Gate Bridge', description: 'Iconic 1.7-mile suspension bridge — one of the wonders of the modern world.', tip: 'Walk or bike across it — the views are spectacular!', icon: '🌉' },
      { name: 'Alcatraz Island', description: 'Former maximum-security federal prison in the bay.', tip: 'Book tickets 2-3 weeks ahead — they sell out fast.', icon: '🏚️' },
      { name: 'Fisherman\'s Wharf', description: 'Lively waterfront with sea lions, seafood, and street performers.', tip: 'The sea lions at Pier 39 are always free to watch!', icon: '🦭' },
      { name: 'Lombard Street', description: 'The "crookedest street in the world" with 8 hairpin turns.', tip: 'Walk down (not drive) for the best experience.', icon: '🌹' },
      { name: 'Haight-Ashbury', description: '1960s hippie neighborhood with vintage shops and murals.', tip: 'Visit Amoeba Music — one of the last great record stores.', icon: '✌️' },
    ],
    food: [
      { name: 'Boudin Bakery', type: 'Bakery', mustTry: 'Clam chowder in a sourdough bread bowl', icon: '🍞' },
      { name: 'Swan Oyster Depot', type: 'Seafood', mustTry: 'Half-dozen oysters + Dungeness crab', icon: '🦪' },
      { name: 'Tartine Bakery', type: 'Bakery', mustTry: 'Country bread — worth the 1-hour wait!', icon: '🥖' },
      { name: 'Mission Burritos', type: 'Mexican', mustTry: 'Super burrito from La Taqueria', icon: '🌯' },
      { name: 'Ghirardelli Square', type: 'Chocolate', mustTry: 'Original hot fudge sundae', icon: '🍫' },
    ],
    entertainment: [
      { name: 'Golden Gate Park', description: '1,000 acres with museums, gardens, and buffalo!', icon: '🌳' },
      { name: 'SFMOMA', description: 'World-class modern and contemporary art museum.', icon: '🖼️' },
      { name: 'Cable Car Ride', description: 'Historic street cars — a quintessential SF experience.', icon: '🚃' },
      { name: 'Dolores Park', description: 'Vibrant weekend gathering spot with city skyline views.', icon: '☀️' },
      { name: 'Oracle Park (Giants game)', description: 'Stunning waterfront baseball park — even better with garlic fries.', icon: '⚾' },
    ],
    phrases: [
      { english: 'Where does the cable car stop?', portuguese: 'Onde é a parada do bonde/cable car?', context: 'Transporte' },
      { english: 'I\'d like a sourdough bread bowl, please.', portuguese: 'Gostaria de um pão de fermentação natural, por favor.', context: 'Comida' },
      { english: 'Is there parking near the bridge?', portuguese: 'Tem estacionamento perto da ponte?', context: 'Transporte' },
      { english: 'Can you recommend a good wine bar?', portuguese: 'Você pode recomendar um bom wine bar?', context: 'Entretenimento' },
      { english: 'What time does the ferry to Alcatraz depart?', portuguese: 'A que horas parte a balsa para Alcatraz?', context: 'Turismo' },
    ],
    tips: [
      'SF is famous for its microclimates. Carry a light jacket — it can be 20°F colder by the bay.',
      'Uber and Lyft are the easiest ways to get around. The BART subway connects the airport.',
      'Tech industry tipping culture is generous: 20-25% expected at most restaurants.',
    ],
    tipsPt: [
      'SF é famosa por seus microclimas. Leve um casaco leve — pode fazer 10°C mais frio perto da baía.',
      'Uber e Lyft são as formas mais fáceis de se locomover. O metrô BART conecta o aeroporto.',
      'A cultura de gorjeta da área de tecnologia é generosa: 20-25% esperado na maioria dos restaurantes.',
    ],
  },
  {
    id: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    tagline: 'The Windy City with big shoulders',
    taglinePt: 'A Cidade Ventosa com grandes ambições',
    emoji: '🏙️',
    gradient: 'linear-gradient(135deg, #2980b9 0%, #6dd5fa 50%, #ffffff 100%)',
    attractions: [
      { name: 'The Bean (Cloud Gate)', description: 'Giant reflective sculpture in Millennium Park — an icon.', tip: 'Go at sunrise for reflections without the crowds!', icon: '🫘' },
      { name: 'Chicago Architecture Boat Tour', description: 'The best way to see the world\'s most impressive skyline.', tip: 'Book Wendella Boats — the original and best company.', icon: '🚢' },
      { name: 'Art Institute of Chicago', description: 'One of America\'s oldest and largest art museums.', tip: 'Friday evenings are free for Illinois residents.', icon: '🎨' },
      { name: 'Navy Pier', description: 'Lakefront entertainment hub with Ferris wheel and gardens.', tip: 'The fireworks shows happen Wednesday and Saturday nights!', icon: '🎡' },
      { name: 'Chicago Riverwalk', description: '1.25 miles of waterfront cafes, bars, and kayaking.', tip: 'Rent a kayak for $25/hour for a unique city perspective.', icon: '🚣' },
    ],
    food: [
      { name: 'Lou Malnati\'s', type: 'Deep Dish Pizza', mustTry: 'Butter crust deep dish with sausage', icon: '🍕' },
      { name: 'Portillo\'s', type: 'Chicago Classics', mustTry: 'Chicago-style hot dog + Italian beef', icon: '🌭' },
      { name: 'Girl & The Goat', type: 'American', mustTry: 'Wood-fired pig face (yes, really!)', icon: '🐐' },
      { name: 'Garrett Popcorn', type: 'Snacks', mustTry: 'Chicago Mix: cheese + caramel popcorn', icon: '🍿' },
      { name: 'Gibson\'s Bar & Steakhouse', type: 'Steakhouse', mustTry: 'Bone-in ribeye + creamed spinach', icon: '🥩' },
    ],
    entertainment: [
      { name: 'Chicago Blues & Jazz Clubs', description: 'The city that birthed the blues — Kingston Mines is legendary.', icon: '🎷' },
      { name: 'Second City Comedy Club', description: 'Where Tina Fey, Bill Murray and Steve Carell got their starts.', icon: '🎭' },
      { name: 'Wrigley Field (Cubs)', description: 'Historic 1914 baseball stadium — a bucket list experience.', icon: '⚾' },
      { name: 'Chicago Cultural Center', description: 'Free gallery space with stunning Tiffany glass dome ceiling.', icon: '🏛️' },
      { name: 'Shedd Aquarium', description: 'World-class aquarium on the lakefront.', icon: '🐠' },
    ],
    phrases: [
      { english: 'Can I get a deep dish to go?', portuguese: 'Posso pegar uma pizza deep dish para viagem?', context: 'Comida' },
      { english: 'What time does the boat tour depart?', portuguese: 'A que horas parte o passeio de barco?', context: 'Turismo' },
      { english: 'Is it safe to walk by the lake at night?', portuguese: 'É seguro caminhar perto do lago à noite?', context: 'Segurança' },
      { english: 'Do you have tickets for tonight\'s game?', portuguese: 'Vocês têm ingressos para o jogo de hoje à noite?', context: 'Esportes' },
      { english: 'Which platform for the L train downtown?', portuguese: 'Qual plataforma para o trem L para o centro?', context: 'Transporte' },
    ],
    tips: [
      'Chicago winters are brutal — avoid January and February if possible. Spring and fall are perfect.',
      'The "L" (elevated train) covers most tourist areas for just $2.50/ride.',
      'Chicago deep dish is a knife-and-fork meal, not a handheld slice — embrace it!',
    ],
    tipsPt: [
      'Os invernos de Chicago são brutais — evite janeiro e fevereiro se possível. Primavera e outono são perfeitos.',
      'O "L" (trem elevado) cobre a maioria das áreas turísticas por apenas $2,50 por viagem.',
      'A pizza deep dish de Chicago é uma refeição de faca e garfo, não uma fatia para segurar — abrace isso!',
    ],
  },
];

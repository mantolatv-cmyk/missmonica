// inject_vocab_sentences.js
// Adds sentenceA1, sentenceA1Pt, sentenceA2, sentenceA2Pt to every vocabulary item
// across all 18 scenarios.

const fs = require('fs');

// All sentences organized by scenario ID, keyed by the english word
const sentences = {
  introduction: {
    "My name is...": { a1: "My name is Maria.", a1pt: "Meu nome é Maria.", a2: "My name is Maria and I am from São Paulo.", a2pt: "Meu nome é Maria e eu sou de São Paulo." },
    "Nice to meet you": { a1: "Nice to meet you, John.", a1pt: "Prazer em conhecê-lo, John.", a2: "Nice to meet you! I heard a lot about you.", a2pt: "Prazer em conhecê-lo! Eu ouvi muito sobre você." },
    "How old are you?": { a1: "How old are you? I am 25.", a1pt: "Quantos anos você tem? Eu tenho 25.", a2: "How old are you? You look very young for your age.", a2pt: "Quantos anos você tem? Você parece muito jovem para a sua idade." },
    "What do you do?": { a1: "What do you do? I am a teacher.", a1pt: "O que você faz? Eu sou professor(a).", a2: "What do you do for a living? I work in marketing.", a2pt: "O que você faz profissionalmente? Eu trabalho com marketing." },
    "First time": { a1: "Is this your first time here?", a1pt: "É a sua primeira vez aqui?", a2: "Is this your first time visiting the United States?", a2pt: "É a sua primeira vez visitando os Estados Unidos?" },
    "Last name / Surname": { a1: "My last name is Silva.", a1pt: "Meu sobrenome é Silva.", a2: "Could you spell your last name for me, please?", a2pt: "Você poderia soletrar seu sobrenome para mim, por favor?" },
    "Nickname": { a1: "My nickname is Leo.", a1pt: "Meu apelido é Leo.", a2: "Everyone calls me by my nickname instead of my full name.", a2pt: "Todo mundo me chama pelo apelido em vez do meu nome completo." },
    "Married": { a1: "I am married.", a1pt: "Eu sou casado(a).", a2: "I have been married for five years and we have two kids.", a2pt: "Eu sou casado(a) há cinco anos e temos dois filhos." },
    "Single": { a1: "I am single.", a1pt: "Eu sou solteiro(a).", a2: "I am single right now, but I am not looking for a relationship.", a2pt: "Eu sou solteiro(a) agora, mas não estou procurando um relacionamento." },
    "Hometown": { a1: "My hometown is Rio.", a1pt: "Minha cidade natal é o Rio.", a2: "My hometown is a small city in the south of Brazil.", a2pt: "Minha cidade natal é uma cidade pequena no sul do Brasil." },
    "Nice to meet you too": { a1: "Nice to meet you too!", a1pt: "Prazer em conhecê-lo(a) também!", a2: "Nice to meet you too! I hope we can work together.", a2pt: "Prazer em conhecê-lo(a) também! Espero que possamos trabalhar juntos." },
  },
  numbers: {
    "How much?": { a1: "How much is this?", a1pt: "Quanto custa isso?", a2: "How much does this shirt cost with the discount?", a2pt: "Quanto custa esta camisa com o desconto?" },
    "Dollar": { a1: "It costs ten dollars.", a1pt: "Custa dez dólares.", a2: "The exchange rate is five reais per dollar today.", a2pt: "A taxa de câmbio é de cinco reais por dólar hoje." },
    "Cents": { a1: "That is fifty cents.", a1pt: "São cinquenta centavos.", a2: "Your change is seventy-five cents.", a2pt: "Seu troco é de setenta e cinco centavos." },
    "Receipt": { a1: "Can I have the receipt?", a1pt: "Posso ter o recibo?", a2: "I need the receipt for my expense report at work.", a2pt: "Preciso do recibo para o relatório de despesas do trabalho." },
    "Change": { a1: "Here is your change.", a1pt: "Aqui está o seu troco.", a2: "Keep the change, please. It is your tip.", a2pt: "Fique com o troco, por favor. É a sua gorjeta." },
    "Credit card": { a1: "I pay with credit card.", a1pt: "Eu pago com cartão de crédito.", a2: "Do you accept credit cards or only cash here?", a2pt: "Vocês aceitam cartões de crédito ou apenas dinheiro aqui?" },
    "Per pound": { a1: "It is two dollars per pound.", a1pt: "São dois dólares por libra.", a2: "The fresh salmon is twelve dollars per pound at this market.", a2pt: "O salmão fresco custa doze dólares por libra neste mercado." },
    "Total": { a1: "The total is twenty dollars.", a1pt: "O total é vinte dólares.", a2: "Your total comes to forty-five dollars and thirty cents.", a2pt: "Seu total é de quarenta e cinco dólares e trinta centavos." },
    "Cash": { a1: "I pay in cash.", a1pt: "Eu pago em dinheiro.", a2: "I prefer to pay in cash because I can control my spending better.", a2pt: "Prefiro pagar em dinheiro porque consigo controlar meus gastos melhor." },
    "Discount": { a1: "Is there a discount?", a1pt: "Tem desconto?", a2: "Students get a twenty percent discount on all items.", a2pt: "Estudantes ganham vinte por cento de desconto em todos os itens." },
    "On sale": { a1: "This is on sale.", a1pt: "Isto está em promoção.", a2: "These shoes are on sale this weekend for half price.", a2pt: "Estes sapatos estão em promoção neste fim de semana pela metade do preço." },
    "Expensive": { a1: "This is very expensive.", a1pt: "Isto é muito caro.", a2: "The restaurant is expensive but the food is absolutely delicious.", a2pt: "O restaurante é caro, mas a comida é absolutamente deliciosa." },
    "Cheap": { a1: "This is very cheap.", a1pt: "Isto é muito barato.", a2: "The street food here is cheap and really tasty.", a2pt: "A comida de rua aqui é barata e muito saborosa." },
    "Cashier": { a1: "The cashier is over there.", a1pt: "O caixa é ali.", a2: "Please pay the cashier at the front of the store.", a2pt: "Por favor, pague no caixa na frente da loja." },
    "Shopping cart": { a1: "I need a shopping cart.", a1pt: "Eu preciso de um carrinho.", a2: "Could you grab a shopping cart? We have a lot to buy.", a2pt: "Pode pegar um carrinho? Temos muita coisa para comprar." },
  },
  airport: {
    "Boarding pass": { a1: "Here is my boarding pass.", a1pt: "Aqui está meu cartão de embarque.", a2: "You can download your boarding pass on the airline app.", a2pt: "Você pode baixar seu cartão de embarque no app da companhia aérea." },
    "Baggage claim": { a1: "Where is baggage claim?", a1pt: "Onde é a esteira de bagagem?", a2: "My suitcase was not at the baggage claim when I arrived.", a2pt: "Minha mala não estava na esteira de bagagem quando eu cheguei." },
    "Gate": { a1: "The gate is B5.", a1pt: "O portão é B5.", a2: "They changed the gate from A3 to B12 at the last minute.", a2pt: "Eles mudaram o portão de A3 para B12 no último minuto." },
    "Flight": { a1: "My flight is at 3 PM.", a1pt: "Meu voo é às 15h.", a2: "My connecting flight leaves in two hours from terminal C.", a2pt: "Meu voo de conexão sai em duas horas do terminal C." },
    "Luggage / Suitcase": { a1: "I have one suitcase.", a1pt: "Eu tenho uma mala.", a2: "I packed all my luggage last night to avoid rushing this morning.", a2pt: "Eu fiz todas as malas ontem à noite para não correr hoje de manhã." },
    "Carry-on": { a1: "This is my carry-on.", a1pt: "Esta é minha bagagem de mão.", a2: "You are only allowed one carry-on and one personal item.", a2pt: "Só é permitida uma bagagem de mão e um item pessoal." },
    "Security check": { a1: "Where is security check?", a1pt: "Onde é a segurança?", a2: "The security check line was very long this morning.", a2pt: "A fila da segurança estava muito longa hoje de manhã." },
    "X-ray machine": { a1: "Put your bag on the X-ray machine.", a1pt: "Coloque sua bolsa na máquina de raio-X.", a2: "The officer asked me to send my laptop through the X-ray machine separately.", a2pt: "O agente pediu para eu passar meu notebook na máquina de raio-X separadamente." },
    "Liquids": { a1: "No liquids over 100ml.", a1pt: "Sem líquidos acima de 100ml.", a2: "All liquids must be in containers of 100ml or less in a clear plastic bag.", a2pt: "Todos os líquidos devem estar em recipientes de 100ml ou menos em um saco plástico transparente." },
    "Electronics": { a1: "Remove your electronics.", a1pt: "Retire seus eletrônicos.", a2: "Please take all large electronics out of your bag for screening.", a2pt: "Por favor, retire todos os eletrônicos grandes da sua bolsa para inspeção." },
    "Take off your shoes": { a1: "Take off your shoes, please.", a1pt: "Tire seus sapatos, por favor.", a2: "At some airports you need to take off your shoes before passing through security.", a2pt: "Em alguns aeroportos você precisa tirar os sapatos antes de passar pela segurança." },
    "Belt": { a1: "Remove your belt.", a1pt: "Retire o seu cinto.", a2: "I always forget to remove my belt and it sets off the alarm.", a2pt: "Eu sempre esqueço de tirar meu cinto e ele dispara o alarme." },
    "Overweight baggage": { a1: "My bag is overweight.", a1pt: "Minha mala está com excesso de peso.", a2: "They charged me fifty dollars for overweight baggage at check-in.", a2pt: "Eles me cobraram cinquenta dólares por excesso de bagagem no check-in." },
    "Delayed": { a1: "My flight is delayed.", a1pt: "Meu voo está atrasado.", a2: "The flight was delayed by three hours due to bad weather.", a2pt: "O voo atrasou três horas por causa do mau tempo." },
    "On time": { a1: "The flight is on time.", a1pt: "O voo está no horário.", a2: "I checked the app and my flight is on time for departure.", a2pt: "Verifiquei o app e meu voo está no horário para a partida." },
    "Aisle seat": { a1: "I want an aisle seat.", a1pt: "Eu quero um assento no corredor.", a2: "Can I switch to an aisle seat? I need to get up frequently.", a2pt: "Posso trocar para um assento no corredor? Preciso levantar frequentemente." },
    "Window seat": { a1: "I prefer a window seat.", a1pt: "Eu prefiro um assento na janela.", a2: "I always book a window seat so I can enjoy the view during takeoff.", a2pt: "Eu sempre reservo um assento na janela para aproveitar a vista durante a decolagem." },
  },
  immigration: {
    "Passport": { a1: "Here is my passport.", a1pt: "Aqui está meu passaporte.", a2: "My passport is valid for another three years before I need to renew it.", a2pt: "Meu passaporte é válido por mais três anos antes de precisar renovar." },
    "Customs": { a1: "Where is customs?", a1pt: "Onde é a alfândega?", a2: "I had to declare two bottles of wine at customs when I arrived.", a2pt: "Tive que declarar duas garrafas de vinho na alfândega quando cheguei." },
    "Arrival": { a1: "My arrival is today.", a1pt: "Minha chegada é hoje.", a2: "The arrival terminal is on the first floor, next to the information desk.", a2pt: "O terminal de chegada é no primeiro andar, ao lado do balcão de informações." },
    "Departure": { a1: "My departure is on Friday.", a1pt: "Minha partida é na sexta-feira.", a2: "The departure lounge has comfortable seats and free Wi-Fi.", a2pt: "A sala de embarque tem assentos confortáveis e Wi-Fi gratuito." },
    "Purpose of visit": { a1: "I am here for tourism.", a1pt: "Estou aqui para turismo.", a2: "The purpose of my visit is to attend a business conference downtown.", a2pt: "O propósito da minha visita é participar de uma conferência de negócios no centro." },
    "Duration of stay": { a1: "I will stay for two weeks.", a1pt: "Vou ficar por duas semanas.", a2: "The duration of my stay is approximately fifteen days.", a2pt: "A duração da minha estadia é de aproximadamente quinze dias." },
    "Currency": { a1: "I need to exchange currency.", a1pt: "Preciso trocar moeda.", a2: "What is the best place to exchange currency near the hotel?", a2pt: "Qual é o melhor lugar para trocar moeda perto do hotel?" },
    "Customs declaration": { a1: "I filled out the customs declaration.", a1pt: "Eu preenchi a declaração de alfândega.", a2: "Do I need to fill out a customs declaration for personal electronics?", a2pt: "Preciso preencher uma declaração de alfândega para eletrônicos pessoais?" },
    "Immigration officer": { a1: "The immigration officer checked my passport.", a1pt: "O oficial de imigração verificou meu passaporte.", a2: "The immigration officer asked me several questions about my trip.", a2pt: "O oficial de imigração me fez várias perguntas sobre minha viagem." },
    "Tourist visa": { a1: "I have a tourist visa.", a1pt: "Eu tenho um visto de turista.", a2: "My tourist visa allows me to stay in the country for up to ninety days.", a2pt: "Meu visto de turista me permite ficar no país por até noventa dias." },
    "Return ticket": { a1: "Here is my return ticket.", a1pt: "Aqui está minha passagem de volta.", a2: "The officer asked to see my return ticket before letting me through.", a2pt: "O oficial pediu para ver minha passagem de volta antes de me deixar passar." },
    "Fingerprint scanner": { a1: "Place your finger on the scanner.", a1pt: "Coloque seu dedo no scanner.", a2: "The fingerprint scanner at immigration did not recognize my print at first.", a2pt: "O scanner de impressão digital na imigração não reconheceu minha digital de primeira." },
  },
  hotel: {
    "Reservation": { a1: "I have a reservation.", a1pt: "Eu tenho uma reserva.", a2: "I made a reservation online for a double room with breakfast included.", a2pt: "Fiz uma reserva online para um quarto duplo com café da manhã incluído." },
    "Room key": { a1: "I lost my room key.", a1pt: "Eu perdi a chave do quarto.", a2: "The room key stopped working so I went back to the front desk.", a2pt: "A chave do quarto parou de funcionar então voltei à recepção." },
    "Check-in": { a1: "I want to check in.", a1pt: "Eu quero fazer o check-in.", a2: "What time is check-in? We arrived earlier than expected.", a2pt: "A que horas é o check-in? Chegamos mais cedo do que o esperado." },
    "Check-out": { a1: "I want to check out.", a1pt: "Eu quero fazer o check-out.", a2: "Can I get a late check-out? I need to stay until 2 PM.", a2pt: "Posso fazer um check-out tardio? Preciso ficar até as 14h." },
    "Lobby": { a1: "I will wait in the lobby.", a1pt: "Vou esperar no lobby.", a2: "The hotel lobby has beautiful decorations and comfortable sofas.", a2pt: "O lobby do hotel tem decorações bonitas e sofás confortáveis." },
    "Elevator": { a1: "Where is the elevator?", a1pt: "Onde é o elevador?", a2: "The elevator is out of order so we need to take the stairs.", a2pt: "O elevador está fora de serviço então precisamos usar as escadas." },
    "Single room": { a1: "I need a single room.", a1pt: "Preciso de um quarto de solteiro.", a2: "A single room with a queen bed and a city view, please.", a2pt: "Um quarto de solteiro com cama queen e vista para a cidade, por favor." },
    "Towels": { a1: "I need more towels.", a1pt: "Preciso de mais toalhas.", a2: "Could you send extra towels and toiletries to room 405?", a2pt: "Poderia enviar toalhas e amenidades extras para o quarto 405?" },
    "Front desk": { a1: "Ask at the front desk.", a1pt: "Pergunte na recepção.", a2: "The front desk is open twenty-four hours for any questions or requests.", a2pt: "A recepção fica aberta vinte e quatro horas para quaisquer perguntas ou solicitações." },
    "Bellhop": { a1: "The bellhop carried my bags.", a1pt: "O carregador levou minhas malas.", a2: "The bellhop helped us with our luggage and showed us to our room.", a2pt: "O carregador nos ajudou com a bagagem e nos levou ao quarto." },
    "Housekeeping": { a1: "Call housekeeping, please.", a1pt: "Chame a arrumação, por favor.", a2: "Housekeeping comes every morning to clean the room and make the bed.", a2pt: "A arrumação vem toda manhã para limpar o quarto e arrumar a cama." },
    "Room service": { a1: "I want room service.", a1pt: "Eu quero serviço de quarto.", a2: "We ordered room service because we were too tired to go to the restaurant.", a2pt: "Pedimos serviço de quarto porque estávamos cansados demais para ir ao restaurante." },
    "Deposit": { a1: "Is there a deposit?", a1pt: "Tem um depósito?", a2: "The hotel requires a two hundred dollar deposit at check-in.", a2pt: "O hotel exige um depósito de duzentos dólares no check-in." },
  },
  restaurant: {
    "Menu": { a1: "Can I see the menu?", a1pt: "Posso ver o cardápio?", a2: "The menu has a great variety of local and international dishes.", a2pt: "O cardápio tem uma grande variedade de pratos locais e internacionais." },
    "Appetizer": { a1: "I want an appetizer.", a1pt: "Eu quero uma entrada.", a2: "We ordered a cheese appetizer to share while we wait for the main course.", a2pt: "Pedimos uma entrada de queijo para dividir enquanto esperamos o prato principal." },
    "Main course": { a1: "The main course is steak.", a1pt: "O prato principal é bife.", a2: "For my main course, I would like the grilled salmon with vegetables.", a2pt: "Para meu prato principal, eu gostaria do salmão grelhado com legumes." },
    "Dessert": { a1: "I want a dessert.", a1pt: "Eu quero uma sobremesa.", a2: "The chocolate lava cake is the best dessert on the menu.", a2pt: "O petit gâteau de chocolate é a melhor sobremesa do cardápio." },
    "Check / Bill": { a1: "Can I have the check?", a1pt: "Pode trazer a conta?", a2: "Could we have the check, please? We need to leave soon.", a2pt: "Pode trazer a conta, por favor? Precisamos sair logo." },
    "Tip": { a1: "I left a tip.", a1pt: "Eu deixei uma gorjeta.", a2: "In the United States it is common to leave a fifteen to twenty percent tip.", a2pt: "Nos Estados Unidos é comum deixar uma gorjeta de quinze a vinte por cento." },
    "Waiter": { a1: "The waiter is very nice.", a1pt: "O garçom é muito gentil.", a2: "The waiter recommended the fish and it was an excellent choice.", a2pt: "O garçom recomendou o peixe e foi uma excelente escolha." },
    "To go": { a1: "I want this to go.", a1pt: "Eu quero isso para levar.", a2: "Can I get a box to go? I could not finish my meal.", a2pt: "Posso pegar uma caixa para levar? Não consegui terminar minha refeição." },
    "Napkin": { a1: "I need a napkin.", a1pt: "Eu preciso de um guardanapo.", a2: "Excuse me, could you bring some extra napkins to our table?", a2pt: "Com licença, poderia trazer alguns guardanapos extras para nossa mesa?" },
    "Fork": { a1: "I need a fork.", a1pt: "Eu preciso de um garfo.", a2: "I dropped my fork on the floor. Could I have a clean one?", a2pt: "Eu derrubei meu garfo no chão. Poderia me dar um limpo?" },
    "Knife": { a1: "I need a knife.", a1pt: "Eu preciso de uma faca.", a2: "This steak is tough. Do you have a sharper knife?", a2pt: "Este bife está duro. Vocês têm uma faca mais afiada?" },
    "Spoon": { a1: "I need a spoon for the soup.", a1pt: "Preciso de uma colher para a sopa.", a2: "She asked for a small spoon to stir her coffee.", a2pt: "Ela pediu uma colher pequena para mexer o café." },
    "Tap water": { a1: "Can I have tap water?", a1pt: "Posso ter água da torneira?", a2: "In many countries, tap water is perfectly safe to drink.", a2pt: "Em muitos países, a água da torneira é perfeitamente segura para beber." },
    "Spicy": { a1: "This is very spicy!", a1pt: "Isso é muito apimentado!", a2: "I love spicy food, but this dish is too hot even for me.", a2pt: "Eu adoro comida apimentada, mas este prato é picante demais até para mim." },
    "Vegetarian": { a1: "I am vegetarian.", a1pt: "Eu sou vegetariano(a).", a2: "Do you have any vegetarian options on the menu?", a2pt: "Vocês têm alguma opção vegetariana no cardápio?" },
  },
  directions: {
    "Turn left": { a1: "Turn left at the corner.", a1pt: "Vire à esquerda na esquina.", a2: "Turn left after the traffic light and walk two more blocks.", a2pt: "Vire à esquerda depois do semáforo e ande mais dois quarteirões." },
    "Turn right": { a1: "Turn right here.", a1pt: "Vire à direita aqui.", a2: "Turn right at the next intersection and you will see the bank.", a2pt: "Vire à direita na próxima interseção e você verá o banco." },
    "Go straight": { a1: "Go straight two blocks.", a1pt: "Vá em frente dois quarteirões.", a2: "Go straight for about five minutes and the museum is on your left.", a2pt: "Vá em frente por cerca de cinco minutos e o museu fica à sua esquerda." },
    "Block": { a1: "It is two blocks away.", a1pt: "Fica a dois quarteirões.", a2: "The pharmacy is about three blocks from here, past the school.", a2pt: "A farmácia fica a cerca de três quarteirões daqui, depois da escola." },
    "Corner": { a1: "It is on the corner.", a1pt: "Fica na esquina.", a2: "There is a great coffee shop right on the corner of Fifth Avenue.", a2pt: "Tem uma ótima cafeteria bem na esquina da Quinta Avenida." },
    "Cross the street": { a1: "Cross the street here.", a1pt: "Atravesse a rua aqui.", a2: "Cross the street at the crosswalk and the store is right there.", a2pt: "Atravesse a rua na faixa de pedestres e a loja fica bem ali." },
    "Traffic light": { a1: "Stop at the traffic light.", a1pt: "Pare no semáforo.", a2: "Wait for the traffic light to turn green before you cross.", a2pt: "Espere o semáforo ficar verde antes de atravessar." },
    "Sidewalk": { a1: "Walk on the sidewalk.", a1pt: "Ande na calçada.", a2: "The sidewalk is very wide here so it is easy to walk with a stroller.", a2pt: "A calçada aqui é bem larga então é fácil andar com um carrinho de bebê." },
    "Crosswalk": { a1: "Use the crosswalk.", a1pt: "Use a faixa de pedestres.", a2: "Always use the crosswalk to cross the street safely.", a2pt: "Sempre use a faixa de pedestres para atravessar a rua com segurança." },
    "Intersection": { a1: "It is at the intersection.", a1pt: "Fica na interseção.", a2: "The accident happened at the intersection of Main Street and Oak Avenue.", a2pt: "O acidente aconteceu na interseção da Rua Principal e Avenida Carvalho." },
    "Across from": { a1: "It is across from the park.", a1pt: "Fica em frente ao parque.", a2: "The restaurant is directly across from the movie theater.", a2pt: "O restaurante fica diretamente em frente ao cinema." },
    "Next to": { a1: "It is next to the bank.", a1pt: "Fica ao lado do banco.", a2: "The post office is next to the pharmacy on the main street.", a2pt: "O correio fica ao lado da farmácia na rua principal." },
    "Downtown": { a1: "I am going downtown.", a1pt: "Estou indo ao centro.", a2: "Downtown is always crowded on weekends because of all the shops.", a2pt: "O centro está sempre lotado nos fins de semana por causa das lojas." },
  },
  transport: {
    "Ride": { a1: "I need a ride.", a1pt: "Eu preciso de uma carona.", a2: "Can you give me a ride to the airport tomorrow morning?", a2pt: "Você pode me dar uma carona ao aeroporto amanhã de manhã?" },
    "Fare": { a1: "How much is the fare?", a1pt: "Quanto é a tarifa?", a2: "The bus fare increased by ten percent since last month.", a2pt: "A tarifa do ônibus aumentou dez por cento desde o mês passado." },
    "Driver": { a1: "The driver is very nice.", a1pt: "O motorista é muito gentil.", a2: "The taxi driver took the fastest route to avoid the traffic jam.", a2pt: "O taxista pegou a rota mais rápida para evitar o engarrafamento." },
    "Subway / Metro": { a1: "I take the subway every day.", a1pt: "Eu pego o metrô todo dia.", a2: "The subway is the fastest way to get around the city during rush hour.", a2pt: "O metrô é a forma mais rápida de se locomover pela cidade na hora do rush." },
    "Platform": { a1: "Wait on platform 3.", a1pt: "Espere na plataforma 3.", a2: "The train to the airport departs from platform 5 in ten minutes.", a2pt: "O trem para o aeroporto parte da plataforma 5 em dez minutos." },
    "Transfer": { a1: "I need to transfer.", a1pt: "Preciso fazer baldeação.", a2: "You need to transfer at the next station to take the blue line.", a2pt: "Você precisa fazer baldeação na próxima estação para pegar a linha azul." },
    "Stop": { a1: "The next stop is mine.", a1pt: "A próxima parada é a minha.", a2: "Could you tell me when we reach the stop near the hospital?", a2pt: "Pode me avisar quando chegarmos na parada perto do hospital?" },
    "Metro card": { a1: "I need a metro card.", a1pt: "Preciso de um cartão de metrô.", a2: "You can recharge your metro card at any station machine.", a2pt: "Você pode recarregar seu cartão de metrô em qualquer máquina da estação." },
    "Rush hour": { a1: "It is rush hour now.", a1pt: "É hora do rush agora.", a2: "I always try to avoid traveling during rush hour because the trains are packed.", a2pt: "Sempre tento evitar viajar na hora do rush porque os trens ficam lotados." },
    "Passenger": { a1: "I am a passenger.", a1pt: "Eu sou um passageiro.", a2: "The bus was full of passengers going to work in the morning.", a2pt: "O ônibus estava cheio de passageiros indo trabalhar de manhã." },
    "Ticket": { a1: "I bought a ticket.", a1pt: "Eu comprei uma passagem.", a2: "A round-trip ticket is cheaper than buying two one-way tickets.", a2pt: "Uma passagem de ida e volta é mais barata do que comprar duas de ida." },
    "To get on": { a1: "I get on the bus here.", a1pt: "Eu pego o ônibus aqui.", a2: "We need to get on the next train or we will be late for the meeting.", a2pt: "Precisamos pegar o próximo trem ou vamos nos atrasar para a reunião." },
    "To get off": { a1: "I get off at the next stop.", a1pt: "Eu desço na próxima parada.", a2: "Remember to get off at Central Station if you want to go to the museum.", a2pt: "Lembre-se de descer na Estação Central se quiser ir ao museu." },
    "Traffic jam": { a1: "There is a traffic jam.", a1pt: "Tem um engarrafamento.", a2: "We were stuck in a traffic jam for over an hour on the highway.", a2pt: "Ficamos presos em um engarrafamento por mais de uma hora na rodovia." },
  },
  medical: {
    "Headache": { a1: "I have a headache.", a1pt: "Estou com dor de cabeça.", a2: "I have had a terrible headache since yesterday and nothing helps.", a2pt: "Estou com uma dor de cabeça terrível desde ontem e nada ajuda." },
    "Sore throat": { a1: "I have a sore throat.", a1pt: "Estou com dor de garganta.", a2: "My sore throat makes it very difficult to swallow food.", a2pt: "Minha dor de garganta torna muito difícil engolir comida." },
    "Fever": { a1: "I have a fever.", a1pt: "Estou com febre.", a2: "The doctor said I have a mild fever and should rest for a few days.", a2pt: "O médico disse que estou com uma febre leve e devo descansar por alguns dias." },
    "Pain reliever": { a1: "I need a pain reliever.", a1pt: "Preciso de um analgésico.", a2: "Can you recommend a good pain reliever for muscle pain?", a2pt: "Pode recomendar um bom analgésico para dor muscular?" },
    "Emergency": { a1: "This is an emergency!", a1pt: "Isto é uma emergência!", a2: "Call an ambulance! This is a medical emergency.", a2pt: "Chame uma ambulância! Isto é uma emergência médica." },
    "Appointment": { a1: "I have a doctor appointment.", a1pt: "Tenho uma consulta médica.", a2: "I need to schedule an appointment with a specialist for next week.", a2pt: "Preciso marcar uma consulta com um especialista para a próxima semana." },
    "Prescription": { a1: "I have a prescription.", a1pt: "Eu tenho uma receita.", a2: "The doctor wrote me a prescription for antibiotics and vitamins.", a2pt: "O médico me passou uma receita de antibióticos e vitaminas." },
    "Insurance": { a1: "I have health insurance.", a1pt: "Eu tenho plano de saúde.", a2: "My insurance covers most of the costs for regular check-ups.", a2pt: "Meu plano de saúde cobre a maior parte dos custos de check-ups regulares." },
    "Insurance card": { a1: "Here is my insurance card.", a1pt: "Aqui está meu cartão do plano.", a2: "Please bring your insurance card and photo ID to the appointment.", a2pt: "Por favor, traga seu cartão do plano e identidade com foto para a consulta." },
    "Symptoms": { a1: "What are your symptoms?", a1pt: "Quais são seus sintomas?", a2: "My symptoms started three days ago with a cough and runny nose.", a2pt: "Meus sintomas começaram três dias atrás com tosse e nariz escorrendo." },
    "Pain": { a1: "I feel pain here.", a1pt: "Eu sinto dor aqui.", a2: "The pain in my back gets worse when I sit for a long time.", a2pt: "A dor nas costas piora quando fico sentado por muito tempo." },
    "Bandage": { a1: "I need a bandage.", a1pt: "Preciso de uma bandagem.", a2: "The nurse put a clean bandage on my cut after disinfecting it.", a2pt: "A enfermeira colocou uma bandagem limpa no meu corte depois de desinfetá-lo." },
    "Cough": { a1: "I have a bad cough.", a1pt: "Estou com uma tosse forte.", a2: "My cough keeps me awake at night and I cannot sleep properly.", a2pt: "Minha tosse me mantém acordado à noite e não consigo dormir direito." },
    "Cold": { a1: "I have a cold.", a1pt: "Estou resfriado(a).", a2: "I caught a cold last week and I am still recovering from it.", a2pt: "Peguei um resfriado semana passada e ainda estou me recuperando." },
  },
  entertainment: {
    "Tickets": { a1: "I bought two tickets.", a1pt: "Eu comprei dois ingressos.", a2: "I bought the tickets online because they were cheaper than at the box office.", a2pt: "Comprei os ingressos online porque eram mais baratos do que na bilheteria." },
    "Show": { a1: "The show starts at 8 PM.", a1pt: "O show começa às 20h.", a2: "The comedy show last night was amazing and the audience loved it.", a2pt: "O show de comédia ontem à noite foi incrível e o público adorou." },
    "Box office": { a1: "The box office is closed.", a1pt: "A bilheteria está fechada.", a2: "You can buy tickets at the box office or on their official website.", a2pt: "Você pode comprar ingressos na bilheteria ou no site oficial deles." },
    "Recommendation": { a1: "Do you have a recommendation?", a1pt: "Você tem uma recomendação?", a2: "The hotel staff gave me a great recommendation for a local jazz club.", a2pt: "A equipe do hotel me deu uma ótima recomendação de um clube de jazz local." },
    "Sold out": { a1: "The show is sold out.", a1pt: "O show está esgotado.", a2: "All the good seats are sold out so we might have to sit in the back.", a2pt: "Todos os bons lugares estão esgotados então talvez tenhamos que sentar no fundo." },
    "Entrance": { a1: "Where is the entrance?", a1pt: "Onde é a entrada?", a2: "The main entrance is on the left side of the building, near the parking lot.", a2pt: "A entrada principal fica do lado esquerdo do prédio, perto do estacionamento." },
    "Performance": { a1: "The performance was great.", a1pt: "A apresentação foi ótima.", a2: "The ballet performance was breathtaking and everyone stood up to applaud.", a2pt: "A apresentação de balé foi espetacular e todos levantaram para aplaudir." },
    "Souvenir": { a1: "I bought a souvenir.", a1pt: "Eu comprei uma lembrança.", a2: "I always buy a small souvenir from every city I visit as a memory.", a2pt: "Eu sempre compro uma pequena lembrança de cada cidade que visito como recordação." },
    "Row": { a1: "We are in row five.", a1pt: "Estamos na fileira cinco.", a2: "Our seats are in row ten, right in the center of the theater.", a2pt: "Nossos assentos ficam na fileira dez, bem no centro do teatro." },
    "Stage": { a1: "The stage is very big.", a1pt: "O palco é muito grande.", a2: "The singer walked across the entire stage while performing her biggest hit.", a2pt: "A cantora andou por todo o palco enquanto cantava seu maior sucesso." },
    "Main entrance": { a1: "Go to the main entrance.", a1pt: "Vá para a entrada principal.", a2: "The main entrance opens thirty minutes before the show starts.", a2pt: "A entrada principal abre trinta minutos antes do show começar." },
    "Restroom": { a1: "Where is the restroom?", a1pt: "Onde é o banheiro?", a2: "The restrooms are located on the second floor near the elevator.", a2pt: "Os banheiros ficam no segundo andar perto do elevador." },
    "Coat check": { a1: "Is there a coat check?", a1pt: "Tem um guarda-volumes?", a2: "You can leave your jacket at the coat check near the entrance.", a2pt: "Você pode deixar sua jaqueta no guarda-volumes perto da entrada." },
  },
  cafe: {
    "Tall / Grande / Venti": { a1: "I want a tall coffee.", a1pt: "Eu quero um café pequeno.", a2: "Can I have a grande iced latte with an extra shot of espresso?", a2pt: "Posso pedir um latte gelado médio com uma dose extra de espresso?" },
    "Whole milk": { a1: "With whole milk, please.", a1pt: "Com leite integral, por favor.", a2: "I prefer whole milk in my cappuccino because it makes it creamier.", a2pt: "Prefiro leite integral no meu cappuccino porque fica mais cremoso." },
    "Oat milk": { a1: "I want oat milk.", a1pt: "Eu quero leite de aveia.", a2: "Could you replace the regular milk with oat milk? I am lactose intolerant.", a2pt: "Pode substituir o leite normal por leite de aveia? Sou intolerante à lactose." },
    "Decaf": { a1: "I want decaf coffee.", a1pt: "Eu quero café descafeinado.", a2: "I switched to decaf because regular coffee was keeping me awake at night.", a2pt: "Mudei para descafeinado porque o café normal me mantinha acordado à noite." },
    "Whipped cream": { a1: "With whipped cream, please.", a1pt: "Com chantilly, por favor.", a2: "Can I add extra whipped cream on top of my hot chocolate?", a2pt: "Posso adicionar chantilly extra no meu chocolate quente?" },
    "Drive-thru": { a1: "Let us go to the drive-thru.", a1pt: "Vamos ao drive-thru.", a2: "The drive-thru line is always long in the morning before work.", a2pt: "A fila do drive-thru é sempre longa de manhã antes do trabalho." },
    "For here / To go": { a1: "For here, please.", a1pt: "Para consumir aqui, por favor.", a2: "Is this for here or to go? I will have it to go today.", a2pt: "É para aqui ou para levar? Hoje vou levar." },
    "Combo / Meal": { a1: "I want the combo.", a1pt: "Eu quero o combo.", a2: "The breakfast combo includes a coffee, a sandwich, and a cookie.", a2pt: "O combo de café da manhã inclui um café, um sanduíche e um biscoito." },
    "Napkin": { a1: "I need a napkin.", a1pt: "Preciso de um guardanapo.", a2: "Could you give me a few extra napkins? My coffee spilled a little.", a2pt: "Pode me dar alguns guardanapos extras? Meu café derramou um pouco." },
    "Straw": { a1: "I need a straw.", a1pt: "Preciso de um canudo.", a2: "They only offer paper straws now because of the environmental policy.", a2pt: "Eles só oferecem canudos de papel agora por causa da política ambiental." },
    "Sugar packet": { a1: "I need a sugar packet.", a1pt: "Preciso de um pacotinho de açúcar.", a2: "Could you pass me two sugar packets and a stirrer, please?", a2pt: "Pode me passar dois pacotinhos de açúcar e um mexedor, por favor?" },
    "To go bag": { a1: "Can I have a to go bag?", a1pt: "Posso ter uma sacola para levar?", a2: "Put the pastries in a to go bag. I will eat them at the office.", a2pt: "Coloque os doces em uma sacola para levar. Vou comer no escritório." },
    "Extra hot": { a1: "Extra hot, please.", a1pt: "Bem quente, por favor.", a2: "I like my latte extra hot because it stays warm longer.", a2pt: "Gosto do meu latte bem quente porque fica quentinho por mais tempo." },
  },
  tech: {
    "Network": { a1: "I have no network.", a1pt: "Estou sem rede.", a2: "The mobile network coverage is very poor in this rural area.", a2pt: "A cobertura de rede móvel é muito fraca nesta área rural." },
    "Password": { a1: "What is the password?", a1pt: "Qual é a senha?", a2: "I changed my password because someone tried to access my account.", a2pt: "Mudei minha senha porque alguém tentou acessar minha conta." },
    "SIM card / Chip": { a1: "I need a SIM card.", a1pt: "Preciso de um chip.", a2: "I bought a local SIM card at the airport to avoid expensive roaming charges.", a2pt: "Comprei um chip local no aeroporto para evitar taxas caras de roaming." },
    "Prepaid": { a1: "I want a prepaid plan.", a1pt: "Quero um plano pré-pago.", a2: "The prepaid plan includes five gigabytes of data and unlimited texts.", a2pt: "O plano pré-pago inclui cinco gigabytes de dados e mensagens ilimitadas." },
    "Data plan": { a1: "I need a data plan.", a1pt: "Preciso de um plano de dados.", a2: "My data plan ran out so I cannot use the internet on my phone.", a2pt: "Meu plano de dados acabou então não consigo usar a internet no celular." },
    "Coverage": { a1: "Is there coverage here?", a1pt: "Tem cobertura aqui?", a2: "The coverage is excellent in the city center but weak in the suburbs.", a2pt: "A cobertura é excelente no centro da cidade mas fraca nos subúrbios." },
    "Unlimited": { a1: "I want unlimited data.", a1pt: "Quero dados ilimitados.", a2: "The unlimited plan costs more but it is worth it if you stream videos a lot.", a2pt: "O plano ilimitado custa mais mas vale a pena se você assiste muitos vídeos." },
    "Charger": { a1: "I need a charger.", a1pt: "Preciso de um carregador.", a2: "I forgot my charger at the hotel and my phone battery is at five percent.", a2pt: "Esqueci meu carregador no hotel e a bateria do meu celular está em cinco por cento." },
    "Plug / Outlet": { a1: "Where is the outlet?", a1pt: "Onde fica a tomada?", a2: "The outlet in this country uses a different plug so I need an adapter.", a2pt: "A tomada neste país usa um plugue diferente então preciso de um adaptador." },
    "Power bank": { a1: "I have a power bank.", a1pt: "Tenho um carregador portátil.", a2: "I always carry a power bank when I travel in case my phone dies.", a2pt: "Sempre levo um carregador portátil quando viajo caso meu celular descarregue." },
    "To charge": { a1: "I need to charge my phone.", a1pt: "Preciso carregar meu celular.", a2: "Can I charge my phone here? The battery is almost dead.", a2pt: "Posso carregar meu celular aqui? A bateria está quase acabando." },
    "Free Wi-Fi": { a1: "Is there free Wi-Fi?", a1pt: "Tem Wi-Fi grátis?", a2: "This cafe offers free Wi-Fi but you need to ask the cashier for the password.", a2pt: "Esta cafeteria oferece Wi-Fi grátis mas você precisa pedir a senha ao caixa." },
    "No signal": { a1: "I have no signal.", a1pt: "Estou sem sinal.", a2: "There is no signal in the elevator so I will call you back when I get out.", a2pt: "Não tem sinal no elevador então vou te ligar de volta quando sair." },
  },
  smalltalk: {
    "Small talk": { a1: "I like small talk.", a1pt: "Eu gosto de conversa informal.", a2: "Making small talk with strangers is a great way to practice English.", a2pt: "Fazer conversa informal com desconhecidos é uma ótima forma de praticar inglês." },
    "Fingers crossed": { a1: "Fingers crossed!", a1pt: "Estou torcendo!", a2: "I have a job interview tomorrow. Fingers crossed it goes well!", a2pt: "Tenho uma entrevista de emprego amanhã. Estou torcendo para que vá bem!" },
    "Catch the game": { a1: "Did you catch the game?", a1pt: "Você assistiu o jogo?", a2: "Did you catch the game last night? The final score was incredible.", a2pt: "Você assistiu o jogo ontem à noite? O placar final foi incrível." },
    "Overtime": { a1: "I worked overtime today.", a1pt: "Fiz hora extra hoje.", a2: "I had to work overtime this week to finish the project before the deadline.", a2pt: "Tive que fazer hora extra essa semana para terminar o projeto antes do prazo." },
    "For a living": { a1: "What do you do for a living?", a1pt: "O que você faz da vida?", a2: "She designs websites for a living and absolutely loves her job.", a2pt: "Ela cria sites como profissão e ama absolutamente o trabalho dela." },
    "Keep things exciting": { a1: "I like to keep things exciting.", a1pt: "Gosto de manter as coisas interessantes.", a2: "We try new restaurants every weekend to keep things exciting.", a2pt: "Experimentamos restaurantes novos todo fim de semana para manter as coisas interessantes." },
    "Attitude": { a1: "She has a great attitude.", a1pt: "Ela tem uma ótima atitude.", a2: "Having a positive attitude makes a big difference at work.", a2pt: "Ter uma atitude positiva faz uma grande diferença no trabalho." },
    "Conference": { a1: "I went to a conference.", a1pt: "Fui a uma conferência.", a2: "The technology conference I attended last month had amazing speakers.", a2pt: "A conferência de tecnologia que participei mês passado teve palestrantes incríveis." },
    "How": { a1: "How are you today?", a1pt: "Como você está hoje?", a2: "How was your vacation? I heard you went to Europe.", a2pt: "Como foram suas férias? Soube que você foi para a Europa." },
    "What": { a1: "What is your name?", a1pt: "Qual é o seu nome?", a2: "What do you think about the new project plan?", a2pt: "O que você acha do novo plano do projeto?" },
    "Have a good one!": { a1: "Have a good one!", a1pt: "Tenha um bom dia!", a2: "It was nice chatting with you. Have a good one!", a2pt: "Foi bom conversar com você. Tenha um bom dia!" },
    "Awesome": { a1: "That is awesome!", a1pt: "Isso é incrível!", a2: "Your presentation was awesome! Everyone really enjoyed it.", a2pt: "Sua apresentação foi incrível! Todo mundo gostou muito." },
    "Make sense": { a1: "Does that make sense?", a1pt: "Faz sentido?", a2: "I explained the directions twice. Does that make sense now?", a2pt: "Expliquei as direções duas vezes. Faz sentido agora?" },
  },
  slangs: {
    "Lit / Fire": { a1: "That party was lit!", a1pt: "Aquela festa foi demais!", a2: "The concert last night was absolutely lit. Everyone was dancing.", a2pt: "O show ontem à noite foi absolutamente demais. Todo mundo estava dançando." },
    "No cap": { a1: "No cap, it was amazing.", a1pt: "Sem mentira, foi incrível.", a2: "No cap, that was the best pizza I have ever tasted in my life.", a2pt: "Sem mentira, essa foi a melhor pizza que já comi na vida." },
    "Hyped": { a1: "I am so hyped!", a1pt: "Estou muito empolgado!", a2: "Everyone is hyped about the new Marvel movie coming out next month.", a2pt: "Todo mundo está empolgado com o novo filme da Marvel que estreia mês que vem." },
    "Down (to do something)": { a1: "I am down to go.", a1pt: "Estou a fim de ir.", a2: "Are you down to try the new sushi restaurant downtown this weekend?", a2pt: "Você está a fim de experimentar o novo restaurante de sushi no centro neste fim de semana?" },
    "Deets": { a1: "Give me the deets.", a1pt: "Me dá os detalhes.", a2: "Send me the deets about the party. What time does it start?", a2pt: "Manda os detalhes sobre a festa. Que horas começa?" },
    "Heads up": { a1: "Heads up, it is raining.", a1pt: "Só avisando, está chovendo.", a2: "Heads up, the boss is in a bad mood today so be careful.", a2pt: "Só avisando, o chefe está de mau humor hoje então tome cuidado." },
    "Spaced out": { a1: "Sorry, I spaced out.", a1pt: "Desculpa, me distraí.", a2: "I completely spaced out during the meeting and missed the important part.", a2pt: "Me distraí completamente durante a reunião e perdi a parte importante." },
    "Swamped": { a1: "I am swamped with work.", a1pt: "Estou atolado de trabalho.", a2: "I cannot go out tonight because I am totally swamped with deadlines.", a2pt: "Não posso sair hoje à noite porque estou totalmente atolado com prazos." },
    "Chill": { a1: "Let us chill at home.", a1pt: "Vamos relaxar em casa.", a2: "We just stayed home and chilled all weekend watching movies.", a2pt: "Ficamos em casa e relaxamos o fim de semana inteiro assistindo filmes." },
    "Ghost": { a1: "He ghosted me.", a1pt: "Ele me deixou no vácuo.", a2: "She ghosted me after our second date and never responded to my messages.", a2pt: "Ela me deixou no vácuo depois do segundo encontro e nunca respondeu minhas mensagens." },
    "Flex": { a1: "Stop flexing!", a1pt: "Para de se exibir!", a2: "He always flexes his new sneakers on social media to impress people.", a2pt: "Ele sempre se exibe com seus tênis novos nas redes sociais para impressionar as pessoas." },
    "Salty": { a1: "Why are you so salty?", a1pt: "Por que você está tão irritado?", a2: "She got salty because nobody liked her photo on Instagram.", a2pt: "Ela ficou irritada porque ninguém curtiu a foto dela no Instagram." },
    "Tea": { a1: "Spill the tea!", a1pt: "Conta a fofoca!", a2: "I heard some tea about our neighbors. Do you want to know?", a2pt: "Soube de uma fofoca sobre nossos vizinhos. Quer saber?" },
  },
  shopping: {
    "Fitting room": { a1: "Where is the fitting room?", a1pt: "Onde é o provador?", a2: "The fitting rooms are at the back of the store, next to the mirror wall.", a2pt: "Os provadores ficam no fundo da loja, ao lado da parede de espelhos." },
    "Size (Small, Medium, Large)": { a1: "I need a medium.", a1pt: "Preciso de um médio.", a2: "Do you have this dress in a size small? The medium is too loose on me.", a2pt: "Vocês têm este vestido no tamanho P? O M está muito largo em mim." },
    "Tight / Loose": { a1: "This is too tight.", a1pt: "Isto está muito apertado.", a2: "The pants are a little tight around the waist. Do you have a larger size?", a2pt: "A calça está um pouco apertada na cintura. Vocês têm um tamanho maior?" },
    "Receipt": { a1: "I need the receipt.", a1pt: "Preciso do recibo.", a2: "Keep your receipt in case you need to exchange the item later.", a2pt: "Guarde o recibo caso precise trocar o item depois." },
    "Tags": { a1: "Please remove the tags.", a1pt: "Por favor retire as etiquetas.", a2: "Do not remove the tags if you are not sure you want to keep the item.", a2pt: "Não remova as etiquetas se você não tem certeza de que quer ficar com o item." },
    "Trying on": { a1: "I am trying on this shirt.", a1pt: "Estou experimentando esta camisa.", a2: "Can I try on these jeans? I am not sure about the size.", a2pt: "Posso experimentar estas calças jeans? Não tenho certeza do tamanho." },
    "Hanger": { a1: "Put it on the hanger.", a1pt: "Coloque no cabide.", a2: "Please put the clothes back on the hanger after trying them on.", a2pt: "Por favor, coloque as roupas de volta no cabide depois de experimentar." },
    "Sold out": { a1: "This size is sold out.", a1pt: "Este tamanho esgotou.", a2: "The sneakers I wanted are sold out in my size. Maybe next week.", a2pt: "Os tênis que eu queria esgotaram no meu tamanho. Talvez semana que vem." },
    "Mannequin": { a1: "I want what is on the mannequin.", a1pt: "Quero o que está no manequim.", a2: "The outfit on the mannequin in the window looks really stylish.", a2pt: "A roupa no manequim da vitrine está muito estilosa." },
    "Out of stock": { a1: "This item is out of stock.", a1pt: "Este item está fora de estoque.", a2: "The jacket is currently out of stock but they can order it for you.", a2pt: "A jaqueta está fora de estoque no momento mas podem encomendar para você." },
    "T-shirt / Shirt": { a1: "I like this t-shirt.", a1pt: "Eu gosto desta camiseta.", a2: "I bought a white t-shirt and a blue button-down shirt for the trip.", a2pt: "Comprei uma camiseta branca e uma camisa social azul para a viagem." },
    "Pants / Jeans": { a1: "I need new pants.", a1pt: "Preciso de calças novas.", a2: "These jeans fit perfectly. I do not even need to try another pair.", a2pt: "Estas calças jeans servem perfeitamente. Nem preciso experimentar outro par." },
    "Dress": { a1: "This dress is beautiful.", a1pt: "Este vestido é lindo.", a2: "She wore a red dress to the party and everyone complimented her.", a2pt: "Ela usou um vestido vermelho na festa e todos a elogiaram." },
    "Skirt": { a1: "I want to buy a skirt.", a1pt: "Quero comprar uma saia.", a2: "This plaid skirt goes really well with a black blouse and boots.", a2pt: "Esta saia xadrez combina muito bem com uma blusa preta e botas." },
    "Jacket": { a1: "I need a jacket.", a1pt: "Preciso de uma jaqueta.", a2: "This leather jacket is on sale for half price this weekend only.", a2pt: "Esta jaqueta de couro está na promoção pela metade do preço só neste fim de semana." },
    "Coat": { a1: "This coat is warm.", a1pt: "Este casaco é quente.", a2: "You should bring a heavy coat because the temperature will drop tonight.", a2pt: "Você deveria levar um casaco pesado porque a temperatura vai cair esta noite." },
    "Sneakers": { a1: "I love these sneakers.", a1pt: "Amo estes tênis.", a2: "I saved money for two months to buy these limited edition sneakers.", a2pt: "Economizei por dois meses para comprar estes tênis de edição limitada." },
    "High heels": { a1: "These high heels are pretty.", a1pt: "Estes saltos altos são bonitos.", a2: "I can only wear high heels for a few hours before my feet start hurting.", a2pt: "Só consigo usar salto alto por algumas horas antes dos meus pés começarem a doer." },
  },
  beauty: {
    "Foundation": { a1: "I need foundation.", a1pt: "Preciso de base.", a2: "I use a light foundation that matches my skin tone perfectly.", a2pt: "Uso uma base leve que combina perfeitamente com meu tom de pele." },
    "Concealer": { a1: "I use concealer every day.", a1pt: "Uso corretivo todo dia.", a2: "This concealer covers dark circles very well and lasts all day.", a2pt: "Este corretivo cobre olheiras muito bem e dura o dia inteiro." },
    "Moisturizer": { a1: "I need a good moisturizer.", a1pt: "Preciso de um bom hidratante.", a2: "I apply moisturizer every morning after washing my face.", a2pt: "Aplico hidratante toda manhã depois de lavar o rosto." },
    "Cleanser": { a1: "I use a gentle cleanser.", a1pt: "Uso um limpador suave.", a2: "A good cleanser removes all the makeup without drying your skin.", a2pt: "Um bom limpador remove toda a maquiagem sem ressecar a pele." },
    "Heat protectant": { a1: "Use heat protectant first.", a1pt: "Use protetor térmico primeiro.", a2: "Always spray heat protectant before using a flat iron on your hair.", a2pt: "Sempre borrife protetor térmico antes de usar a chapinha no cabelo." },
    "Leave-in conditioner": { a1: "I use leave-in conditioner.", a1pt: "Uso condicionador sem enxágue.", a2: "Leave-in conditioner keeps my curly hair soft and frizz-free all day.", a2pt: "O condicionador sem enxágue mantém meu cabelo cacheado macio e sem frizz o dia todo." },
    "Cruelty-free": { a1: "This product is cruelty-free.", a1pt: "Este produto não testa em animais.", a2: "I only buy cruelty-free brands because I care about animal welfare.", a2pt: "Só compro marcas cruelty-free porque me preocupo com o bem-estar animal." },
    "Skincare routine": { a1: "I have a skincare routine.", a1pt: "Tenho uma rotina de cuidados com a pele.", a2: "My skincare routine includes cleanser, toner, serum, and moisturizer.", a2pt: "Minha rotina de skincare inclui limpador, tônico, sérum e hidratante." },
  },
  carrental: {
    "Insurance": { a1: "I want insurance.", a1pt: "Eu quero seguro.", a2: "The insurance covers any damage to the car during the rental period.", a2pt: "O seguro cobre qualquer dano ao carro durante o período de aluguel." },
    "Toll pass": { a1: "Do I need a toll pass?", a1pt: "Preciso de um passe de pedágio?", a2: "The toll pass is very convenient because you do not need to stop and pay.", a2pt: "O passe de pedágio é muito conveniente porque você não precisa parar e pagar." },
    "Deposit": { a1: "How much is the deposit?", a1pt: "Quanto é o depósito?", a2: "They charged a five hundred dollar deposit on my credit card.", a2pt: "Eles cobraram um depósito de quinhentos dólares no meu cartão de crédito." },
    "Full tank": { a1: "The tank is full.", a1pt: "O tanque está cheio.", a2: "Please return the car with a full tank or you will be charged extra.", a2pt: "Por favor devolva o carro com o tanque cheio ou será cobrado a mais." },
    "Additional driver": { a1: "I want to add a driver.", a1pt: "Quero adicionar um motorista.", a2: "Adding an additional driver costs twenty dollars per day.", a2pt: "Adicionar um motorista extra custa vinte dólares por dia." },
    "Automatic transmission": { a1: "I want automatic.", a1pt: "Quero automático.", a2: "I prefer automatic transmission because I am not used to driving stick shift.", a2pt: "Prefiro câmbio automático porque não estou acostumado com câmbio manual." },
    "Trunk": { a1: "Open the trunk, please.", a1pt: "Abra o porta-malas, por favor.", a2: "The trunk is large enough to fit three suitcases and a backpack.", a2pt: "O porta-malas é grande o suficiente para três malas e uma mochila." },
    "Prepaid fuel": { a1: "I chose prepaid fuel.", a1pt: "Escolhi combustível pré-pago.", a2: "With prepaid fuel you do not need to refill before returning the car.", a2pt: "Com combustível pré-pago você não precisa reabastecer antes de devolver o carro." },
    "Flat tire": { a1: "I have a flat tire.", a1pt: "Estou com um pneu furado.", a2: "We got a flat tire on the highway and had to call roadside assistance.", a2pt: "Tivemos um pneu furado na rodovia e precisamos ligar para a assistência." },
    "Roadside assistance": { a1: "Call roadside assistance.", a1pt: "Ligue para a assistência.", a2: "The rental includes free roadside assistance twenty-four hours a day.", a2pt: "O aluguel inclui assistência na estrada gratuita vinte e quatro horas por dia." },
    "Scratched": { a1: "The car is scratched.", a1pt: "O carro está arranhado.", a2: "Make sure to report any scratches before you leave the rental lot.", a2pt: "Certifique-se de relatar quaisquer arranhões antes de sair do estacionamento da locadora." },
    "Dented": { a1: "The door is dented.", a1pt: "A porta está amassada.", a2: "I noticed the car was already dented when I picked it up.", a2pt: "Percebi que o carro já estava amassado quando o peguei." },
    "Collision Damage Waiver (CDW)": { a1: "I want the CDW.", a1pt: "Quero o seguro contra colisão.", a2: "The Collision Damage Waiver covers the full cost of repairs in case of an accident.", a2pt: "O seguro contra colisão cobre o custo total de reparos em caso de acidente." },
    "Liability Insurance": { a1: "I need liability insurance.", a1pt: "Preciso de seguro contra terceiros.", a2: "Liability insurance protects you if you cause damage to another vehicle.", a2pt: "O seguro contra terceiros protege você se causar dano a outro veículo." },
  },
  supermarket: {
    "Grocery store / Supermarket": { a1: "I go to the supermarket.", a1pt: "Eu vou ao supermercado.", a2: "The grocery store near my house has a great selection of organic products.", a2pt: "O supermercado perto da minha casa tem uma ótima seleção de produtos orgânicos." },
    "Produce section": { a1: "The fruits are in the produce section.", a1pt: "As frutas estão na seção de hortifrúti.", a2: "I always start my shopping in the produce section to get fresh vegetables.", a2pt: "Sempre começo minhas compras na seção de hortifrúti para pegar legumes frescos." },
    "Bakery": { a1: "The bakery smells great.", a1pt: "A padaria cheira muito bem.", a2: "The bakery inside the supermarket makes fresh bread every morning.", a2pt: "A padaria dentro do supermercado faz pão fresco toda manhã." },
    "Deli counter": { a1: "I want cheese from the deli.", a1pt: "Quero queijo do balcão de frios.", a2: "The deli counter has a wide variety of imported cheeses and cold cuts.", a2pt: "O balcão de frios tem uma grande variedade de queijos importados e frios." },
    "Dairy section": { a1: "The milk is in the dairy section.", a1pt: "O leite está na seção de laticínios.", a2: "I need to pick up yogurt and butter from the dairy section.", a2pt: "Preciso pegar iogurte e manteiga na seção de laticínios." },
    "Frozen foods aisle": { a1: "The ice cream is in the frozen aisle.", a1pt: "O sorvete fica no corredor de congelados.", a2: "The frozen foods aisle has pre-made meals that are perfect for busy nights.", a2pt: "O corredor de congelados tem refeições prontas que são perfeitas para noites corridas." },
    "Meat department / Butcher": { a1: "I need meat from the butcher.", a1pt: "Preciso de carne do açougueiro.", a2: "The butcher at this supermarket can cut the meat any way you prefer.", a2pt: "O açougueiro deste supermercado pode cortar a carne do jeito que você preferir." },
    "Grocery cart / Shopping cart": { a1: "I need a cart.", a1pt: "Preciso de um carrinho.", a2: "The shopping carts are right at the entrance of the supermarket.", a2pt: "Os carrinhos de compras ficam bem na entrada do supermercado." },
    "Shopping basket": { a1: "I only need a basket.", a1pt: "Só preciso de uma cesta.", a2: "I grabbed a shopping basket because I only needed a few items.", a2pt: "Peguei uma cesta de compras porque só precisava de alguns itens." },
    "Grocery aisle": { a1: "It is in aisle three.", a1pt: "Está no corredor três.", a2: "The pasta and sauces are in grocery aisle number seven.", a2pt: "As massas e molhos estão no corredor de mercearia número sete." },
    "Checkout lane / Register": { a1: "Go to the checkout.", a1pt: "Vá ao caixa.", a2: "The express checkout lane is for customers with ten items or fewer.", a2pt: "O caixa rápido é para clientes com dez itens ou menos." },
    "Cashier": { a1: "The cashier is very fast.", a1pt: "O caixa é muito rápido.", a2: "The cashier asked me if I wanted to pay with cash or card.", a2pt: "O caixa perguntou se eu queria pagar em dinheiro ou cartão." },
    "Self-checkout": { a1: "I prefer self-checkout.", a1pt: "Prefiro o caixa de autoatendimento.", a2: "The self-checkout machines are quicker when you have only a few items.", a2pt: "As máquinas de autoatendimento são mais rápidas quando você tem poucos itens." },
    "Receipt": { a1: "I want the receipt.", a1pt: "Quero o recibo.", a2: "Always check your receipt to make sure you were charged correctly.", a2pt: "Sempre confira seu recibo para ter certeza de que foi cobrado corretamente." },
    "Paper bag / Plastic bag": { a1: "Paper bag, please.", a1pt: "Sacola de papel, por favor.", a2: "Many stores now charge for plastic bags to encourage reusable ones.", a2pt: "Muitas lojas agora cobram pelas sacolas plásticas para incentivar as reutilizáveis." },
    "Organic": { a1: "I buy organic food.", a1pt: "Eu compro comida orgânica.", a2: "Organic vegetables are a little more expensive but they taste much better.", a2pt: "Legumes orgânicos são um pouco mais caros mas o sabor é muito melhor." },
    "Loyalty card": { a1: "I have a loyalty card.", a1pt: "Tenho um cartão fidelidade.", a2: "Use your loyalty card at checkout to earn points and get discounts.", a2pt: "Use seu cartão fidelidade no caixa para acumular pontos e ganhar descontos." },
  },
};

// Now inject into the file
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

let totalUpdated = 0;

for (const id of Object.keys(sentences)) {
  const scenarioSentences = sentences[id];
  
  for (const englishWord of Object.keys(scenarioSentences)) {
    const s = scenarioSentences[englishWord];
    
    // Find the vocab item by english word
    const escaped = englishWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp("english:\\s*'" + escaped + "'");
    
    // Find the position after the scenario id
    const idIdx = content.indexOf("id: '" + id + "'");
    if (idIdx === -1) continue;
    
    // Search for the word after the scenario id
    const searchStart = idIdx;
    const vocEnd = content.indexOf('speakingQuestions:', idIdx);
    const searchArea = vocEnd !== -1 ? content.substring(searchStart, vocEnd) : content.substring(searchStart, searchStart + 5000);
    
    const match = searchArea.match(pattern);
    if (!match) {
      console.log('WARN: could not find "' + englishWord + '" in scenario ' + id);
      continue;
    }
    
    const wordPos = searchStart + match.index;
    
    // Find the closing } of this vocabulary object
    // Look for "portuguese:" line, then find the closing }
    let braceDepth = 0;
    let objStart = wordPos;
    // Go backward to find the opening {
    while (objStart > 0 && content[objStart] !== '{') objStart--;
    
    let objEnd = objStart + 1;
    braceDepth = 1;
    while (braceDepth > 0 && objEnd < content.length) {
      if (content[objEnd] === '{') braceDepth++;
      if (content[objEnd] === '}') braceDepth--;
      objEnd++;
    }
    // objEnd is now one past the closing }
    
    const objContent = content.substring(objStart, objEnd);
    
    // Check if sentences already exist
    if (objContent.includes('sentenceA1:')) continue;
    
    // Insert sentence fields before the closing }
    const insertPos = objEnd - 1; // position of the closing }
    const indent = '      ';
    const newFields = ',\n' + indent + "sentenceA1: " + JSON.stringify(s.a1) + ",\n" + indent + "sentenceA2: " + JSON.stringify(s.a2) + ",\n" + indent + "sentenceA1Pt: " + JSON.stringify(s.a1pt) + ",\n" + indent + "sentenceA2Pt: " + JSON.stringify(s.a2pt) + "\n    ";
    
    content = content.substring(0, insertPos) + newFields + content.substring(insertPos);
    totalUpdated++;
  }
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Done! Added sentences to ' + totalUpdated + ' vocabulary items.');

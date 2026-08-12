const fs = require('fs');
const path = require('path');

const scenariosData = {
  introduction: [
    { promptPt: "Você quer dizer o seu nome", expectedEn: "My name is [Name]." },
    { promptPt: "Você quer perguntar o nome da pessoa", expectedEn: "What is your name?" },
    { promptPt: "Você quer dizer de onde você é", expectedEn: "I am from Brazil." },
    { promptPt: "Você quer perguntar de onde a pessoa é", expectedEn: "Where are you from?" },
    { promptPt: "Você quer dizer que foi um prazer conhecer a pessoa", expectedEn: "Nice to meet you." }
  ],
  numbers: [
    { promptPt: "Você quer perguntar quanto custa algo", expectedEn: "How much is this?" },
    { promptPt: "Você quer dizer que tem 30 anos", expectedEn: "I am thirty years old." },
    { promptPt: "Você quer pedir dois ingressos", expectedEn: "I would like two tickets, please." },
    { promptPt: "Você quer perguntar qual é o número de telefone da pessoa", expectedEn: "What is your phone number?" },
    { promptPt: "Você quer dizer que o seu número de telefone é 555-1234", expectedEn: "My phone number is 555-1234." }
  ],
  airport: [
    { promptPt: "Você quer entregar o seu passaporte para o atendente", expectedEn: "Here is my passport." },
    { promptPt: "Você quer dizer que tem uma mala para despachar", expectedEn: "I have one bag to check." },
    { promptPt: "Você quer perguntar onde é o portão de embarque", expectedEn: "Where is the boarding gate?" },
    { promptPt: "Você quer perguntar a que horas é o voo", expectedEn: "What time is the flight?" },
    { promptPt: "Você quer pedir um assento no corredor", expectedEn: "Can I get an aisle seat, please?" }
  ],
  immigration: [
    { promptPt: "Você quer entregar o seu passaporte para o oficial", expectedEn: "Here is my passport." },
    { promptPt: "Você quer dizer que está viajando a turismo", expectedEn: "I am here on vacation." },
    { promptPt: "Você quer dizer que vai ficar por 10 dias", expectedEn: "I will stay for ten days." },
    { promptPt: "Você quer dizer onde vai se hospedar", expectedEn: "I am staying at a hotel downtown." },
    { promptPt: "Você quer dizer que está viajando com a sua família", expectedEn: "I am traveling with my family." }
  ],
  hotel: [
    { promptPt: "Você quer dizer que tem uma reserva", expectedEn: "I have a reservation under the name [Name]." },
    { promptPt: "Você quer entregar o seu passaporte para o check-in", expectedEn: "Here is my passport." },
    { promptPt: "Você quer perguntar a que horas é o café da manhã", expectedEn: "What time is breakfast?" },
    { promptPt: "Você quer pedir a senha do Wi-Fi", expectedEn: "What is the Wi-Fi password?" },
    { promptPt: "Você quer pedir mais toalhas", expectedEn: "Could I get some extra towels, please?" },
    { promptPt: "Você quer fazer o check-out", expectedEn: "I would like to check out, please." }
  ],
  restaurant: [
    { promptPt: "Você quer uma mesa para 4 pessoas", expectedEn: "I would like a table for four, please." },
    { promptPt: "Você tem uma reserva?", expectedEn: "Yes, I have a reservation under the name [Name]." },
    { promptPt: "Você quer pedir o menu", expectedEn: "Could we have the menu, please?" },
    { promptPt: "Você quer perguntar qual prato o garçom recomenda", expectedEn: "What do you recommend?" },
    { promptPt: "Você quer fazer o seu pedido", expectedEn: "I will have the steak and a salad, please." },
    { promptPt: "Você quer perguntar se tem Coca Cola", expectedEn: "Do you have Coca-Cola?" },
    { promptPt: "Você quer pedir um canudo e um guardanapo", expectedEn: "Could I get a straw and a napkin, please?" },
    { promptPt: "Você quer pedir a conta", expectedEn: "Could we get the check, please?" },
    { promptPt: "Você quer perguntar se pode dividir a conta com o seu amigo", expectedEn: "Can we split the bill?" }
  ],
  directions: [
    { promptPt: "Você quer perguntar onde fica o banheiro", expectedEn: "Where is the restroom?" },
    { promptPt: "Você quer perguntar como chegar à estação de trem", expectedEn: "How do I get to the train station?" },
    { promptPt: "Você quer perguntar se é longe daqui", expectedEn: "Is it far from here?" },
    { promptPt: "Você quer pedir para a pessoa mostrar no mapa", expectedEn: "Can you show me on the map?" },
    { promptPt: "Você quer agradecer pela ajuda", expectedEn: "Thank you for your help." }
  ],
  transport: [
    { promptPt: "Você quer comprar uma passagem para o centro", expectedEn: "I would like a ticket to downtown, please." },
    { promptPt: "Você quer perguntar de qual plataforma o trem sai", expectedEn: "Which platform does the train leave from?" },
    { promptPt: "Você quer perguntar que horas o ônibus chega", expectedEn: "What time does the bus arrive?" },
    { promptPt: "Você quer perguntar se este ônibus vai para o aeroporto", expectedEn: "Does this bus go to the airport?" },
    { promptPt: "Você quer pedir para o motorista parar no próximo ponto", expectedEn: "Next stop, please." }
  ],
  medical: [
    { promptPt: "Você quer dizer que não se sente bem", expectedEn: "I do not feel well." },
    { promptPt: "Você quer dizer que está com dor de cabeça", expectedEn: "I have a headache." },
    { promptPt: "Você quer dizer que precisa de um médico", expectedEn: "I need to see a doctor." },
    { promptPt: "Você quer perguntar onde fica a farmácia", expectedEn: "Where is the pharmacy?" },
    { promptPt: "Você quer perguntar se precisa de receita para o remédio", expectedEn: "Do I need a prescription for this?" }
  ],
  entertainment: [
    { promptPt: "Você quer pedir dois ingressos para o filme", expectedEn: "Two tickets for the movie, please." },
    { promptPt: "Você quer perguntar a que horas o show começa", expectedEn: "What time does the show start?" },
    { promptPt: "Você quer perguntar se tem pipoca doce", expectedEn: "Do you have sweet popcorn?" },
    { promptPt: "Você quer perguntar onde fica o seu assento", expectedEn: "Where is my seat?" },
    { promptPt: "Você quer dizer que adorou o filme", expectedEn: "I loved the movie." }
  ],
  cafe: [
    { promptPt: "Você quer pedir um café grande", expectedEn: "I would like a large coffee, please." },
    { promptPt: "Você quer pedir para ser para levar", expectedEn: "To go, please." },
    { promptPt: "Você quer perguntar se eles têm leite sem lactose", expectedEn: "Do you have lactose-free milk?" },
    { promptPt: "Você quer pedir um pedaço de bolo", expectedEn: "Can I have a slice of cake?" },
    { promptPt: "Você quer perguntar onde fica o açúcar", expectedEn: "Where is the sugar?" }
  ],
  tech: [
    { promptPt: "Você quer dizer que a internet não está funcionando", expectedEn: "The internet is not working." },
    { promptPt: "Você quer perguntar onde pode carregar o seu celular", expectedEn: "Where can I charge my phone?" },
    { promptPt: "Você quer dizer que esqueceu a sua senha", expectedEn: "I forgot my password." },
    { promptPt: "Você quer perguntar como se conecta ao Wi-Fi", expectedEn: "How do I connect to the Wi-Fi?" },
    { promptPt: "Você quer pedir ajuda com o seu computador", expectedEn: "Can you help me with my computer?" }
  ],
  smalltalk: [
    { promptPt: "Você quer perguntar como está o tempo hoje", expectedEn: "How is the weather today?" },
    { promptPt: "Você quer dizer que está um dia lindo", expectedEn: "It is a beautiful day." },
    { promptPt: "Você quer perguntar o que a pessoa gosta de fazer no tempo livre", expectedEn: "What do you like to do in your free time?" },
    { promptPt: "Você quer perguntar se a pessoa mora aqui há muito tempo", expectedEn: "Have you lived here long?" },
    { promptPt: "Você quer dizer que precisa ir agora", expectedEn: "I have to go now." }
  ],
  slangs: [
    { promptPt: "Você quer dizer que a comida está muito boa (usando gíria)", expectedEn: "This food is awesome!" },
    { promptPt: "Você quer dizer que está muito cansado", expectedEn: "I am exhausted." },
    { promptPt: "Você quer dizer que não sabe de algo", expectedEn: "I have no idea." },
    { promptPt: "Você quer perguntar o que está acontecendo (What's up)", expectedEn: "What's up?" },
    { promptPt: "Você quer dizer para não se preocupar (No worries)", expectedEn: "No worries." }
  ],
  shopping: [
    { promptPt: "Você quer dizer que está apenas olhando", expectedEn: "I am just looking, thank you." },
    { promptPt: "Você quer perguntar quanto custa a camiseta", expectedEn: "How much is this t-shirt?" },
    { promptPt: "Você quer perguntar onde fica o provador", expectedEn: "Where is the fitting room?" },
    { promptPt: "Você quer dizer que vai levar o produto", expectedEn: "I will take it." },
    { promptPt: "Você quer perguntar se aceitam cartão de crédito", expectedEn: "Do you accept credit cards?" },
    { promptPt: "Você quer pedir um tamanho maior", expectedEn: "Do you have this in a larger size?" }
  ],
  beauty: [
    { promptPt: "Você quer pedir para cortar apenas as pontas", expectedEn: "Just a trim, please." },
    { promptPt: "Você quer perguntar o preço da manicure", expectedEn: "How much is a manicure?" },
    { promptPt: "Você quer pedir para pintar o cabelo de loiro", expectedEn: "I would like to dye my hair blonde." },
    { promptPt: "Você quer perguntar se eles têm esse perfume", expectedEn: "Do you have this perfume?" },
    { promptPt: "Você quer agendar um horário para amanhã", expectedEn: "Can I book an appointment for tomorrow?" }
  ],
  carrental: [
    { promptPt: "Você quer dizer que quer alugar um carro por três dias", expectedEn: "I would like to rent a car for three days." },
    { promptPt: "Você quer entregar a sua carteira de motorista", expectedEn: "Here is my driver's license." },
    { promptPt: "Você quer perguntar se o seguro está incluído", expectedEn: "Is insurance included?" },
    { promptPt: "Você quer perguntar que tipo de combustível o carro usa", expectedEn: "What kind of gas does it take?" },
    { promptPt: "Você quer perguntar a que horas precisa devolver o carro", expectedEn: "What time do I need to return the car?" }
  ],
  supermarket: [
    { promptPt: "Você quer perguntar onde fica a seção de frutas", expectedEn: "Where is the fruit section?" },
    { promptPt: "Você quer pedir uma sacola de plástico", expectedEn: "Can I have a plastic bag, please?" },
    { promptPt: "Você quer perguntar se o leite está em promoção", expectedEn: "Is the milk on sale?" },
    { promptPt: "Você quer perguntar onde pode pagar", expectedEn: "Where can I pay?" },
    { promptPt: "Você quer dizer que vai pagar com dinheiro", expectedEn: "I will pay in cash." }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, tasks] of Object.entries(scenariosData)) {
  const simulationString = `    simulationTasks: ${JSON.stringify(tasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')},`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  const hasSimul = fileContent.substring(scenarioStartIndex, searchScope).indexOf('simulationTasks:');
  
  if (hasSimul !== -1) {
    console.log(`Cenário ${id} já possui simulationTasks.`);
  } else {
    const endOfScenarioMatch = fileContent.substring(scenarioStartIndex, searchScope).lastIndexOf('  },');
    if (endOfScenarioMatch !== -1) {
       const globalIndex = scenarioStartIndex + endOfScenarioMatch;
       fileContent = fileContent.substring(0, globalIndex) + simulationString + '\n' + fileContent.substring(globalIndex);
       console.log(`Injetado simulationTasks em ${id}`);
    } else {
       console.log(`Não encontrou final do cenário para ${id}`);
    }
  }
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

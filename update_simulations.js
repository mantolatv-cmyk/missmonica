const fs = require('fs');
const path = require('path');

// Array of updated tasks for all 18 scenarios, including what the OTHER person says (Attendant, Waiter, Officer, etc)
const scenariosData = {
  introduction: [
    { promptPt: "[Pessoa] \"Qual é o seu nome?\"", expectedEn: "What is your name?" },
    { promptPt: "[Você] Você quer dizer o seu nome", expectedEn: "My name is [Name]." },
    { promptPt: "[Pessoa] \"De onde você é?\"", expectedEn: "Where are you from?" },
    { promptPt: "[Você] Você quer dizer de onde você é", expectedEn: "I am from Brazil." },
    { promptPt: "[Você] Você quer dizer que foi um prazer conhecer a pessoa", expectedEn: "Nice to meet you." }
  ],
  numbers: [
    { promptPt: "[Você] Você quer perguntar quanto custa algo", expectedEn: "How much is this?" },
    { promptPt: "[Atendente] \"Custa 30 dólares.\"", expectedEn: "It is thirty dollars." },
    { promptPt: "[Você] Você quer pedir dois ingressos", expectedEn: "I would like two tickets, please." },
    { promptPt: "[Atendente] \"Qual é o seu número de telefone?\"", expectedEn: "What is your phone number?" },
    { promptPt: "[Você] Você quer dizer que o seu número de telefone é 555-1234", expectedEn: "My phone number is 555-1234." }
  ],
  airport: [
    { promptPt: "[Atendente] \"Seu passaporte, por favor.\"", expectedEn: "Your passport, please." },
    { promptPt: "[Você] Você quer entregar o seu passaporte para o atendente", expectedEn: "Here is my passport." },
    { promptPt: "[Atendente] \"Quantas malas você vai despachar?\"", expectedEn: "How many bags are you checking in?" },
    { promptPt: "[Você] Você quer dizer que tem uma mala para despachar", expectedEn: "I have one bag to check." },
    { promptPt: "[Você] Você quer pedir um assento no corredor", expectedEn: "Can I get an aisle seat, please?" },
    { promptPt: "[Você] Você quer perguntar onde é o portão de embarque", expectedEn: "Where is the boarding gate?" }
  ],
  immigration: [
    { promptPt: "[Oficial] \"Passaporte e passagem, por favor.\"", expectedEn: "Passport and ticket, please." },
    { promptPt: "[Você] Você quer entregar o seu passaporte para o oficial", expectedEn: "Here is my passport." },
    { promptPt: "[Oficial] \"Qual é o motivo da sua viagem?\"", expectedEn: "What is the purpose of your visit?" },
    { promptPt: "[Você] Você quer dizer que está viajando a turismo", expectedEn: "I am here on vacation." },
    { promptPt: "[Oficial] \"Quanto tempo você vai ficar?\"", expectedEn: "How long will you be staying?" },
    { promptPt: "[Você] Você quer dizer que vai ficar por 10 dias", expectedEn: "I will stay for ten days." },
    { promptPt: "[Oficial] \"Onde você vai se hospedar?\"", expectedEn: "Where will you be staying?" },
    { promptPt: "[Você] Você quer dizer que vai se hospedar em um hotel", expectedEn: "I am staying at a hotel." }
  ],
  hotel: [
    { promptPt: "[Recepcionista] \"Bom dia, como posso ajudar?\"", expectedEn: "Good morning, how can I help you?" },
    { promptPt: "[Você] Você quer dizer que tem uma reserva", expectedEn: "I have a reservation under the name [Name]." },
    { promptPt: "[Recepcionista] \"Posso ver sua identidade e cartão de crédito?\"", expectedEn: "Can I see your ID and credit card?" },
    { promptPt: "[Você] Você quer entregar o seu passaporte e cartão", expectedEn: "Here is my passport and card." },
    { promptPt: "[Você] Você quer perguntar a que horas é o café da manhã", expectedEn: "What time is breakfast?" },
    { promptPt: "[Você] Você quer pedir a senha do Wi-Fi", expectedEn: "What is the Wi-Fi password?" },
    { promptPt: "[Você] Você quer pedir mais toalhas depois", expectedEn: "Could I get some extra towels, please?" }
  ],
  restaurant: [
    { promptPt: "[Recepcionista] \"Você tem uma reserva?\"", expectedEn: "Do you have a reservation?" },
    { promptPt: "[Você] Você responde que não, e pede uma mesa para 4 pessoas", expectedEn: "No, I would like a table for four, please." },
    { promptPt: "[Garçom] \"Aqui está o menu. O que vocês gostariam de beber?\"", expectedEn: "Here is the menu. What would you like to drink?" },
    { promptPt: "[Você] Você quer perguntar se tem Coca Cola", expectedEn: "Do you have Coca-Cola?" },
    { promptPt: "[Garçom] \"Estão prontos para pedir a comida?\"", expectedEn: "Are you ready to order?" },
    { promptPt: "[Você] Você quer perguntar qual prato o garçom recomenda", expectedEn: "What do you recommend?" },
    { promptPt: "[Você] Você quer fazer o seu pedido (um bife e uma salada)", expectedEn: "I will have the steak and a salad, please." },
    { promptPt: "[Você] Você quer pedir um canudo e um guardanapo", expectedEn: "Could I get a straw and a napkin, please?" },
    { promptPt: "[Você] Você quer pedir a conta", expectedEn: "Could we get the check, please?" }
  ],
  directions: [
    { promptPt: "[Você] Você quer perguntar onde fica o banheiro", expectedEn: "Where is the restroom?" },
    { promptPt: "[Pessoa] \"Fica no fim do corredor, à esquerda.\"", expectedEn: "It is at the end of the hall, on the left." },
    { promptPt: "[Você] Você quer perguntar como chegar à estação de trem", expectedEn: "How do I get to the train station?" },
    { promptPt: "[Pessoa] \"Vire à direita na próxima esquina.\"", expectedEn: "Turn right at the next corner." },
    { promptPt: "[Você] Você quer perguntar se é longe daqui", expectedEn: "Is it far from here?" },
    { promptPt: "[Você] Você quer pedir para a pessoa mostrar no mapa", expectedEn: "Can you show me on the map?" }
  ],
  transport: [
    { promptPt: "[Atendente] \"Para onde você vai hoje?\"", expectedEn: "Where are you going today?" },
    { promptPt: "[Você] Você quer comprar uma passagem para o centro", expectedEn: "I would like a ticket to downtown, please." },
    { promptPt: "[Atendente] \"Só ida ou ida e volta?\"", expectedEn: "One way or round trip?" },
    { promptPt: "[Você] Você responde apenas ida", expectedEn: "One way, please." },
    { promptPt: "[Você] Você quer perguntar de qual plataforma o trem sai", expectedEn: "Which platform does the train leave from?" },
    { promptPt: "[Você] Você quer perguntar se este ônibus vai para o aeroporto", expectedEn: "Does this bus go to the airport?" }
  ],
  medical: [
    { promptPt: "[Médico] \"O que está sentindo hoje?\"", expectedEn: "What seems to be the problem today?" },
    { promptPt: "[Você] Você quer dizer que não se sente bem", expectedEn: "I do not feel well." },
    { promptPt: "[Você] Você quer dizer que está com dor de cabeça e febre", expectedEn: "I have a headache and a fever." },
    { promptPt: "[Médico] \"Você tem alguma alergia a medicamentos?\"", expectedEn: "Do you have any allergies to medication?" },
    { promptPt: "[Você] Você responde que não", expectedEn: "No, I don't." },
    { promptPt: "[Você] Você quer perguntar se precisa de receita para o remédio", expectedEn: "Do I need a prescription for this?" }
  ],
  entertainment: [
    { promptPt: "[Atendente] \"Bem-vindo! Qual filme você quer ver?\"", expectedEn: "Welcome! Which movie would you like to see?" },
    { promptPt: "[Você] Você quer pedir dois ingressos", expectedEn: "Two tickets, please." },
    { promptPt: "[Você] Você quer perguntar a que horas o filme começa", expectedEn: "What time does the movie start?" },
    { promptPt: "[Atendente] \"Você gostaria de pipoca ou bebida?\"", expectedEn: "Would you like any popcorn or drinks?" },
    { promptPt: "[Você] Você quer perguntar se tem pipoca doce", expectedEn: "Do you have sweet popcorn?" },
    { promptPt: "[Você] Você quer perguntar onde fica o seu assento", expectedEn: "Where is my seat?" }
  ],
  cafe: [
    { promptPt: "[Atendente] \"Olá, qual vai ser o seu pedido?\"", expectedEn: "Hi, what can I get for you?" },
    { promptPt: "[Você] Você quer pedir um café grande", expectedEn: "I would like a large coffee, please." },
    { promptPt: "[Atendente] \"Para tomar aqui ou para levar?\"", expectedEn: "For here or to go?" },
    { promptPt: "[Você] Você quer pedir para ser para levar", expectedEn: "To go, please." },
    { promptPt: "[Você] Você quer perguntar se eles têm leite sem lactose", expectedEn: "Do you have lactose-free milk?" },
    { promptPt: "[Você] Você quer perguntar onde fica o açúcar", expectedEn: "Where is the sugar?" }
  ],
  tech: [
    { promptPt: "[Suporte] \"Como posso ajudar com o seu problema hoje?\"", expectedEn: "How can I help you with your issue today?" },
    { promptPt: "[Você] Você quer dizer que a internet não está funcionando", expectedEn: "The internet is not working." },
    { promptPt: "[Você] Você quer perguntar onde pode carregar o seu celular", expectedEn: "Where can I charge my phone?" },
    { promptPt: "[Suporte] \"Você já tentou reiniciar o aparelho?\"", expectedEn: "Have you tried restarting the device?" },
    { promptPt: "[Você] Você quer dizer que esqueceu a sua senha do Wi-Fi", expectedEn: "I forgot my Wi-Fi password." },
    { promptPt: "[Você] Você quer perguntar como se conecta à rede", expectedEn: "How do I connect to the network?" }
  ],
  smalltalk: [
    { promptPt: "[Colega] \"Como você está hoje?\"", expectedEn: "How are you doing today?" },
    { promptPt: "[Você] Você responde que está bem e pergunta como está o tempo lá fora", expectedEn: "I am fine. How is the weather today?" },
    { promptPt: "[Colega] \"O que você gosta de fazer no tempo livre?\"", expectedEn: "What do you like to do in your free time?" },
    { promptPt: "[Você] Você responde que gosta de ler e assistir filmes", expectedEn: "I like to read and watch movies." },
    { promptPt: "[Você] Você quer perguntar se a pessoa mora aqui há muito tempo", expectedEn: "Have you lived here long?" },
    { promptPt: "[Você] Você quer se despedir dizendo que precisa ir agora", expectedEn: "I have to go now." }
  ],
  slangs: [
    { promptPt: "[Amigo] \"E aí, beleza?\" (usando gíria)", expectedEn: "What's up?" },
    { promptPt: "[Você] Você responde que está apenas relaxando", expectedEn: "Just chilling." },
    { promptPt: "[Você] Você quer dizer que a comida está muito boa (usando gíria)", expectedEn: "This food is awesome!" },
    { promptPt: "[Amigo] \"Você vai à festa hoje à noite?\"", expectedEn: "Are you going to the party tonight?" },
    { promptPt: "[Você] Você quer dizer que não sabe, pois está muito cansado (gíria)", expectedEn: "I have no idea. I am exhausted." },
    { promptPt: "[Você] Você quer dizer para o amigo não se preocupar", expectedEn: "No worries." }
  ],
  shopping: [
    { promptPt: "[Vendedor] \"Posso te ajudar a encontrar algo?\"", expectedEn: "Can I help you find something?" },
    { promptPt: "[Você] Você quer dizer que está apenas olhando", expectedEn: "I am just looking, thank you." },
    { promptPt: "[Você] Você quer perguntar quanto custa a camiseta", expectedEn: "How much is this t-shirt?" },
    { promptPt: "[Você] Você quer perguntar onde fica o provador", expectedEn: "Where is the fitting room?" },
    { promptPt: "[Vendedor] \"Ficou bom em você?\"", expectedEn: "Did it fit well?" },
    { promptPt: "[Você] Você quer pedir um tamanho maior", expectedEn: "Do you have this in a larger size?" },
    { promptPt: "[Você] Você quer dizer que vai levar e perguntar se aceitam cartão", expectedEn: "I will take it. Do you accept credit cards?" }
  ],
  beauty: [
    { promptPt: "[Atendente] \"Olá, você tem horário marcado?\"", expectedEn: "Hello, do you have an appointment?" },
    { promptPt: "[Você] Você quer agendar um horário para amanhã", expectedEn: "Can I book an appointment for tomorrow?" },
    { promptPt: "[Cabeleireiro] \"Como você quer cortar hoje?\"", expectedEn: "How would you like your hair cut today?" },
    { promptPt: "[Você] Você quer pedir para cortar apenas as pontas", expectedEn: "Just a trim, please." },
    { promptPt: "[Você] Você quer perguntar o preço da manicure", expectedEn: "How much is a manicure?" }
  ],
  carrental: [
    { promptPt: "[Atendente] \"Como posso te ajudar?\"", expectedEn: "How can I help you?" },
    { promptPt: "[Você] Você quer dizer que quer alugar um carro por três dias", expectedEn: "I would like to rent a car for three days." },
    { promptPt: "[Atendente] \"Posso ver sua carteira de motorista?\"", expectedEn: "Can I see your driver's license?" },
    { promptPt: "[Você] Você quer entregar a sua carteira de motorista", expectedEn: "Here is my driver's license." },
    { promptPt: "[Você] Você quer perguntar se o seguro está incluído", expectedEn: "Is insurance included?" },
    { promptPt: "[Você] Você quer perguntar a que horas precisa devolver o carro", expectedEn: "What time do I need to return the car?" }
  ],
  supermarket: [
    { promptPt: "[Você] Você quer perguntar onde fica a seção de frutas", expectedEn: "Where is the fruit section?" },
    { promptPt: "[Funcionário] \"Fica no corredor 4.\"", expectedEn: "It is in aisle four." },
    { promptPt: "[Caixa] \"Você encontrou tudo que precisava?\"", expectedEn: "Did you find everything you needed?" },
    { promptPt: "[Caixa] \"Você precisa de uma sacola?\"", expectedEn: "Do you need a bag?" },
    { promptPt: "[Você] Você quer pedir uma sacola de plástico", expectedEn: "Can I have a plastic bag, please?" },
    { promptPt: "[Você] Você quer dizer que vai pagar com dinheiro", expectedEn: "I will pay in cash." }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, tasks] of Object.entries(scenariosData)) {
  const simulationString = `    simulationTasks: ${JSON.stringify(tasks, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  // Find the exact block to replace. We know it starts with "simulationTasks:" and ends with "]," before the "}"
  const regex = new RegExp(`simulationTasks:\\s*\\[[\\s\\S]*?\\],\\n\\s*}\\s*`, 'g');
  
  // Actually, standard regex might match too much. Let's find the scenario by ID, then replace its simulationTasks block.
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  let scenarioContent = fileContent.substring(scenarioStartIndex, searchScope);
  
  const simStart = scenarioContent.indexOf('simulationTasks:');
  if (simStart !== -1) {
    // find the end bracket of simulationTasks
    const simEnd = scenarioContent.indexOf('],', simStart);
    if (simEnd !== -1) {
       const before = scenarioContent.substring(0, simStart);
       const after = scenarioContent.substring(simEnd + 2);
       const newScenarioContent = before + simulationString + ',' + after;
       fileContent = fileContent.substring(0, scenarioStartIndex) + newScenarioContent + fileContent.substring(searchScope);
       console.log(`Atualizado simulationTasks em ${id}`);
    }
  }
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

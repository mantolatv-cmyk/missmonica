const fs = require('fs');
const path = require('path');

const phrasesData = {
  introduction: [
    { pt: "Qual é a sua profissão?", en: "What is your profession?" },
    { pt: "Eu moro com minha família.", en: "I live with my family." },
    { pt: "Gosto de ler livros.", en: "I like to read books." },
    { pt: "Onde você cresceu?", en: "Where did you grow up?" },
    { pt: "Você tem irmãos?", en: "Do you have siblings?" },
    { pt: "Eu estudo inglês todos os dias.", en: "I study English every day." }
  ],
  numbers: [
    { pt: "Pode me dar um desconto?", en: "Can you give me a discount?" },
    { pt: "Aceita dinheiro?", en: "Do you accept cash?" },
    { pt: "São cinco e meia.", en: "It is half past five." },
    { pt: "Qual é o preço total?", en: "What is the total price?" },
    { pt: "Você tem troco para cem?", en: "Do you have change for a hundred?" },
    { pt: "Eu preciso do meu recibo.", en: "I need my receipt." }
  ],
  airport: [
    { pt: "Onde fica a loja duty-free?", en: "Where is the duty-free shop?" },
    { pt: "O voo foi cancelado.", en: "The flight was canceled." },
    { pt: "Preciso de uma cadeira de rodas.", en: "I need a wheelchair." },
    { pt: "Onde posso encontrar um carrinho?", en: "Where can I find a trolley?" },
    { pt: "Você tem bagagem de mão?", en: "Do you have a carry-on bag?" },
    { pt: "Onde é o banheiro mais próximo?", en: "Where is the nearest restroom?" }
  ],
  immigration: [
    { pt: "Viajo sozinho.", en: "I travel alone." },
    { pt: "Tenho passagem de volta.", en: "I have a return ticket." },
    { pt: "Não tenho nada a declarar.", en: "I have nothing to declare." },
    { pt: "Este é meu primeiro visto.", en: "This is my first visa." },
    { pt: "Visito amigos e família.", en: "I visit friends and family." },
    { pt: "Minha ocupação é estudante.", en: "My occupation is student." }
  ],
  hotel: [
    { pt: "Posso ter um travesseiro extra?", en: "Can I have an extra pillow?" },
    { pt: "O ar condicionado não funciona.", en: "The air conditioning does not work." },
    { pt: "Você pode chamar um táxi?", en: "Can you call a taxi?" },
    { pt: "Há uma academia no hotel?", en: "Is there a gym in the hotel?" },
    { pt: "Onde fica a piscina?", en: "Where is the pool?" },
    { pt: "Eu perdi a chave do quarto.", en: "I lost my room key." }
  ],
  restaurant: [
    { pt: "Onde é o banheiro?", en: "Where is the bathroom?" },
    { pt: "A comida está fria.", en: "The food is cold." },
    { pt: "Tem opções vegetarianas?", en: "Are there vegetarian options?" },
    { pt: "Posso ter um copo de água?", en: "Can I have a glass of water?" },
    { pt: "Eu não pedi isso.", en: "I did not order this." },
    { pt: "O serviço foi excelente.", en: "The service was excellent." }
  ],
  directions: [
    { pt: "Pode mostrar no mapa?", en: "Can you show me on the map?" },
    { pt: "Fica do lado esquerdo.", en: "It is on the left side." },
    { pt: "Fica perto do banco?", en: "Is it near the bank?" },
    { pt: "Atravesse a rua.", en: "Cross the street." },
    { pt: "É seguro caminhar aqui?", en: "Is it safe to walk here?" },
    { pt: "Estou procurando o museu.", en: "I am looking for the museum." }
  ],
  transport: [
    { pt: "Quanto tempo dura a viagem?", en: "How long is the trip?" },
    { pt: "Qual é a próxima parada?", en: "What is the next stop?" },
    { pt: "Preciso trocar de linha?", en: "Do I need to change lines?" },
    { pt: "Onde alugo uma bicicleta?", en: "Where do I rent a bike?" },
    { pt: "Tem ar condicionado no trem?", en: "Is there air conditioning on the train?" },
    { pt: "Esqueci minha mala no ônibus.", en: "I forgot my bag on the bus." }
  ],
  medical: [
    { pt: "Preciso de um dentista.", en: "I need a dentist." },
    { pt: "Eu torci meu tornozelo.", en: "I sprained my ankle." },
    { pt: "Tem seguro saúde?", en: "Do you have health insurance?" },
    { pt: "Minha garganta dói.", en: "My throat hurts." },
    { pt: "Preciso de uma receita médica.", en: "I need a prescription." },
    { pt: "Você pode medir minha pressão?", en: "Can you check my blood pressure?" }
  ],
  entertainment: [
    { pt: "Onde compro as bebidas?", en: "Where do I buy drinks?" },
    { pt: "Posso tirar fotos?", en: "Can I take photos?" },
    { pt: "O museu está fechado hoje?", en: "Is the museum closed today?" },
    { pt: "A peça foi muito engraçada.", en: "The play was very funny." },
    { pt: "O som está muito alto.", en: "The sound is too loud." },
    { pt: "Tem legenda em português?", en: "Are there Portuguese subtitles?" }
  ],
  cafe: [
    { pt: "Tem wi-fi gratuito aqui?", en: "Is there free wi-fi here?" },
    { pt: "Um chá verde, por favor.", en: "A green tea, please." },
    { pt: "Pode aquecer meu sanduíche?", en: "Can you heat up my sandwich?" },
    { pt: "Tem bolo sem glúten?", en: "Do you have gluten-free cake?" },
    { pt: "Onde estão os guardanapos?", en: "Where are the napkins?" },
    { pt: "Eu prefiro café expresso.", en: "I prefer espresso." }
  ],
  tech: [
    { pt: "A tela está quebrada.", en: "The screen is broken." },
    { pt: "Esqueci minha senha.", en: "I forgot my password." },
    { pt: "Tem tomada aqui?", en: "Is there an outlet here?" },
    { pt: "O arquivo não quer abrir.", en: "The file will not open." },
    { pt: "A ligação caiu.", en: "The call dropped." },
    { pt: "Como eu conecto no bluetooth?", en: "How do I connect to bluetooth?" }
  ],
  smalltalk: [
    { pt: "Você gosta de esportes?", en: "Do you like sports?" },
    { pt: "Assisti a um filme ótimo.", en: "I watched a great movie." },
    { pt: "A comida estava deliciosa.", en: "The food was delicious." },
    { pt: "Eu amo cachorros.", en: "I love dogs." },
    { pt: "Qual é sua música favorita?", en: "What is your favorite song?" },
    { pt: "Tem planos para o feriado?", en: "Do you have plans for the holiday?" }
  ],
  slangs: [
    { pt: "Estou exausto (beat).", en: "I am beat." },
    { pt: "Isso é loucura (nuts).", en: "That is nuts." },
    { pt: "Me dá um tempo (give me a break).", en: "Give me a break." },
    { pt: "Bora (let's go).", en: "Let's go." },
    { pt: "Tô de boa (I am chilling).", en: "I am chilling." },
    { pt: "Isso é incrível (dope).", en: "That is dope." }
  ],
  shopping: [
    { pt: "Qual é o horário de funcionamento?", en: "What are the opening hours?" },
    { pt: "Onde é o caixa eletrônico?", en: "Where is the ATM?" },
    { pt: "Posso experimentar isso?", en: "Can I try this on?" },
    { pt: "Não serviu bem.", en: "It did not fit well." },
    { pt: "Tem desconto para estudante?", en: "Is there a student discount?" },
    { pt: "Eu procuro um presente.", en: "I am looking for a gift." }
  ],
  beauty: [
    { pt: "Quero pintar o cabelo.", en: "I want to dye my hair." },
    { pt: "Minha pele é muito seca.", en: "My skin is very dry." },
    { pt: "Posso ver o catálogo de cores?", en: "Can I see the color catalog?" },
    { pt: "O esmalte está descascando.", en: "The nail polish is peeling." },
    { pt: "Você faz sobrancelhas?", en: "Do you do eyebrows?" },
    { pt: "Eu uso protetor solar.", en: "I wear sunscreen." }
  ],
  carrental: [
    { pt: "Preciso de uma cadeirinha de bebê.", en: "I need a baby seat." },
    { pt: "O carro é automático ou manual?", en: "Is the car automatic or manual?" },
    { pt: "Tem limite de quilometragem?", en: "Is there a mileage limit?" },
    { pt: "O que acontece se eu bater?", en: "What happens if I crash?" },
    { pt: "Aonde fica o posto de gasolina?", en: "Where is the gas station?" },
    { pt: "Tem arranhões na porta.", en: "There are scratches on the door." }
  ],
  supermarket: [
    { pt: "Onde ficam os laticínios?", en: "Where is the dairy section?" },
    { pt: "Esta carne está fresca?", en: "Is this meat fresh?" },
    { pt: "Pode me ajudar a alcançar isso?", en: "Can you help me reach this?" },
    { pt: "A validade expirou.", en: "The expiration date passed." },
    { pt: "Vocês entregam em casa?", en: "Do you deliver at home?" },
    { pt: "Eu trouxe minha sacola.", en: "I brought my bag." }
  ]
};

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

for (const [id, phrases] of Object.entries(phrasesData)) {
  const injectionString = `    importantPhrases: ${JSON.stringify(phrases, null, 6).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:')}`;
  
  const scenarioStartIndex = fileContent.indexOf(`id: '${id}',`);
  if (scenarioStartIndex === -1) {
    console.log(`Cenário ${id} não encontrado!`);
    continue;
  }
  
  const nextScenarioStartIndex = fileContent.indexOf(`id: '`, scenarioStartIndex + 10);
  const searchScope = nextScenarioStartIndex !== -1 ? nextScenarioStartIndex : fileContent.length;
  
  let scenarioContent = fileContent.substring(scenarioStartIndex, searchScope);
  
  // Replace existing importantPhrases completely
  const regex = /importantPhrases:\s*\[[\s\S]*?\],\n\s*/g;
  
  if (regex.test(scenarioContent)) {
      scenarioContent = scenarioContent.replace(regex, injectionString + ',\n    ');
  } else {
      // Just fallback to old logic if not found (though it should be there from previous run)
      const vocabStart = scenarioContent.indexOf('vocabulary:');
      if (vocabStart !== -1) {
          const before = scenarioContent.substring(0, vocabStart);
          const after = scenarioContent.substring(vocabStart);
          scenarioContent = before + injectionString + ',\n    ' + after;
      }
  }

  fileContent = fileContent.substring(0, scenarioStartIndex) + scenarioContent + fileContent.substring(searchScope);
  console.log(`Atualizado importantPhrases em ${id}`);
}

fs.writeFileSync(filePath, fileContent, 'utf-8');
console.log('Finalizado!');

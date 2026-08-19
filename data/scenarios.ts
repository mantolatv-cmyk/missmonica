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
  sentenceA1?: string;
  sentenceA2?: string;
  sentenceA1Pt?: string;
  sentenceA2Pt?: string;
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
  contentA1?: string;
  contentA2?: string;
  contentA1Pt?: string;
  contentA2Pt?: string;
}

export interface DialogueSet {
  title: string;
  titlePt: string;
  icon: string;
  dialogues: DialogueLine[];
  dialogues2?: DialogueLine[];
  dialoguesBeginner?: DialogueLine[];
  dialoguesBeginner2?: DialogueLine[];
}


export interface SpeakingQuestion {
  question?: string;
  questionPt?: string;
  questionA1?: string;
  questionA2?: string;
  questionA1Pt?: string;
  questionA2Pt?: string;
  hintA1?: string;
  hintA2?: string;
  sampleAnswerA1?: string;
  sampleAnswerA2?: string;
}

export interface ReadingQuestion {
  question: string;
  questionPt: string;
  options: string[];
  correctIndex: number;
}

export interface ReadingComprehension {
  textA1: string;
  textA1Pt: string;
  textA2: string;
  textA2Pt: string;
  questionsA1: ReadingQuestion[];
  questionsA2: ReadingQuestion[];
}

export interface SimulationTask {
  promptPt: string;
  expectedEn: string;
}

export interface WouldYouRatherQuestion {
  optionAEn: string;
  optionAPt: string;
  optionBEn: string;
  optionBPt: string;
}

export interface ImportantPhrase {
  pt: string;
  en: string;
}

export interface ProblemSituation {
  descriptionPt: string;
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
  dialogues2?: DialogueLine[];
  dialoguesBeginner?: DialogueLine[];
  dialoguesBeginner2?: DialogueLine[];
  vocabulary: VocabularyItem[];
  flashcards?: FlashcardItem[];
  culturalTips?: CulturalTipData[];
  culturalTipsEurope?: CulturalTipData[];
  speakingQuestions?: SpeakingQuestion[];
  reading?: ReadingComprehension;
  dialogueSets?: DialogueSet[];
  simulationTasks?: SimulationTask[];
  wouldYouRather?: WouldYouRatherQuestion[];
  importantPhrases?: ImportantPhrase[];
  problems?: ProblemSituation[];
}

export const scenarios: Scenario[] = [
  {
    id: 'introduction',
    speakingQuestions: [
    {
        "question": "What do you like to do on weekends?",
        "questionPt": "O que você gosta de fazer nos fins de semana?",
        "hintA1": "I like to sleep and watch TV.",
        "hintA2": "On weekends, I usually go out with friends or relax at home."
    },
    {
        "question": "How long have you been studying English?",
        "questionPt": "Há quanto tempo você estuda inglês?",
        "hintA1": "I study English for one year.",
        "hintA2": "I have been studying English for about a year now."
    },
    {
        "question": "What is your dream job?",
        "questionPt": "Qual é o emprego dos seus sonhos?",
        "hintA1": "My dream job is to be a doctor.",
        "hintA2": "I would love to work as a software engineer in a big tech company."
    }
,
    {
        "question": "Where did you live when you were a child?",
        "questionPt": "Onde você morou quando era criança?",
        "hintA1": "I lived in a small city.",
        "hintA2": "When I was a child, I lived in a quiet neighborhood near the park."
    },
    {
        "question": "Do you have any pets at home?",
        "questionPt": "Você tem algum animal de estimação em casa?",
        "hintA1": "Yes, I have a dog.",
        "hintA2": "I have two cats. I adopted them three years ago."
    },
    {
        "question": "What time do you usually wake up?",
        "questionPt": "A que horas você costuma acordar?",
        "hintA1": "I wake up at seven.",
        "hintA2": "I usually wake up at 6:30 because I like to exercise before work."
    },
    {
        "question": "Did you study English yesterday?",
        "questionPt": "Você estudou inglês ontem?",
        "hintA1": "Yes, I studied for one hour.",
        "hintA2": "Yes, I reviewed vocabulary and practiced speaking with a friend."
    },
    {
        "question": "Who do you live with?",
        "questionPt": "Com quem você mora?",
        "hintA1": "I live with my family.",
        "hintA2": "I currently live with my parents and my younger sister in an apartment."
    }
    ],
    title: 'Introducing Yourself',
    titlePt: 'Se Apresentando',
    description: 'Learn to say your name, where you are from, and make a great first impression.',
    descriptionPt: 'Aprenda a dizer seu nome, de onde você é e causar uma ótima primeira impressão.',
    icon: '👋',
    color: 'gold',
    imagePath: '/images/introduction_scene.png',
    dialogues: [
      { speaker: 'native', english: "Hi! What's your name?", portuguese: "Oi! Qual é o seu nome?" },
      { speaker: 'student', english: "Hi! My name is Ana. And you?", portuguese: "Oi! Meu nome é Ana. E você?" },
      { speaker: 'native', english: "I'm Mark. Nice to meet you, Ana! Where are you from?", portuguese: "Eu sou Mark. Prazer em conhecê-la, Ana! De onde você é?" },
      { speaker: 'student', english: "I'm from Brazil. I live in Rio de Janeiro.", portuguese: "Eu sou do Brasil. Eu moro no Rio de Janeiro." },
      { speaker: 'native', english: "Rio! That's awesome. I've always wanted to visit. Is this your first time in the US?", portuguese: "Rio! Que legal. Sempre quis visitar. É a sua primeira vez nos EUA?" },
      { speaker: 'student', english: "Yes, it's my first time here. I arrived yesterday.", portuguese: "Sim, é minha primeira vez aqui. Cheguei ontem." },
      { speaker: 'native', english: "Are you here for work or vacation?", portuguese: "Você está aqui a trabalho ou de férias?" },
      { speaker: 'student', english: "I'm on vacation. I plan to stay for two weeks.", portuguese: "Estou de férias. Pretendo ficar por duas semanas." },
      { speaker: 'native', english: "That's great. How old are you, by the way?", portuguese: "Isso é ótimo. Quantos anos você tem, a propósito?" },
      { speaker: 'student', english: "I'm 28 years old. What about you?", portuguese: "Eu tenho 28 anos. E você?" },
      { speaker: 'native', english: "I'm 32. What do you do for a living in Brazil?", portuguese: "Tenho 32. O que você faz da vida no Brasil?" },
      { speaker: 'student', english: "I'm a teacher. I teach Portuguese to high school students.", portuguese: "Eu sou professora. Eu ensino português para alunos do ensino médio." },
      { speaker: 'native', english: "That's really cool! Teaching is a tough job.", portuguese: "Que legal! Ensinar é um trabalho difícil." },
      { speaker: 'student', english: "It is, but I love it. What do you do, Mark?", portuguese: "É sim, mas eu adoro. O que você faz, Mark?" },
      { speaker: 'native', english: "I'm an engineer. Well, I hope you enjoy your trip here!", portuguese: "Eu sou engenheiro. Bem, espero que você aproveite sua viagem aqui!" },
      { speaker: 'student', english: "Thank you so much! It was great talking to you.", portuguese: "Muito obrigada! Foi ótimo falar com você." },
      { speaker: 'native', english: "You too! Welcome to the US and have fun!", portuguese: "Com você também! Bem-vinda aos EUA e divirta-se!" }
],
    dialoguesBeginner: [
      { speaker: 'native', english: "Hi! What's your name?", portuguese: "Oi! Qual é o seu nome?" },
      { speaker: 'student', english: "Hi! My name is Ana.", portuguese: "Oi! Meu nome é Ana." },
      { speaker: 'native', english: "Nice to meet you. I am Mark.", portuguese: "Prazer em conhecê-lo. Eu sou Mark." },
      { speaker: 'student', english: "I am from Brazil. Where are you from?", portuguese: "Eu sou do Brasil. De onde você é?" },
      { speaker: 'native', english: "I am from New York. Is this your first trip?", portuguese: "Eu sou de Nova York. Esta é sua primeira viagem?" },
      { speaker: 'student', english: "Yes. I am on vacation.", portuguese: "Sim. Estou de férias." },
      { speaker: 'native', english: "How old are you?", portuguese: "Quantos anos você tem?" },
      { speaker: 'student', english: "I am 28 years old.", portuguese: "Eu tenho 28 anos." },
      { speaker: 'native', english: "What is your job?", portuguese: "Qual é o seu trabalho?" },
      { speaker: 'student', english: "I am a teacher.", portuguese: "Eu sou professora." },
      { speaker: 'native', english: "Nice! Have a good trip!", portuguese: "Legal! Tenha uma boa viagem!" },
      { speaker: 'student', english: "Thank you! Goodbye!", portuguese: "Obrigada! Tchau!" }
,

      {
            speaker: "native",
            english: "Are you from here?",
            portuguese: "Você é daqui?"
      },
      {
            speaker: "student",
            english: "No, I am from Brazil. I am visiting.",
            portuguese: "Não, eu sou do Brasil. Estou visitando."
      },
      {
            speaker: "native",
            english: "Oh, Brazil is beautiful! Welcome.",
            portuguese: "Ah, o Brasil é lindo! Bem-vindo."
      },
      {
            speaker: "student",
            english: "Thank you very much. I love it here.",
            portuguese: "Muito obrigado. Eu amo aqui."
      },
      {
            speaker: "native",
            english: "Do you like the food?",
            portuguese: "Você gosta da comida?"
      },
      {
            speaker: "student",
            english: "Yes, the food is very good.",
            portuguese: "Sim, a comida é muito boa."
      },
      {
            speaker: "native",
            english: "Great! Have a good day.",
            portuguese: "Ótimo! Tenha um bom dia."
      },
      {
            speaker: "student",
            english: "You too. Goodbye!",
            portuguese: "Você também. Tchau!"
      }
],
    dialogues2: [
      { speaker: 'native', english: "Hey there! Are you enjoying the party?", portuguese: "Ei! Você está gostando da festa?" },
      { speaker: 'student', english: "Yes, it's great! My name is Ana, by the way.", portuguese: "Sim, está ótima! Meu nome é Ana, a propósito." },
      { speaker: 'native', english: "I'm Chris. Nice to meet you, Ana. How do you know the host?", portuguese: "Eu sou o Chris. Prazer em te conhecer, Ana. Como você conhece o anfitrião?" },
      { speaker: 'student', english: "We went to university together in Brazil. We've been friends for years.", portuguese: "Nós fizemos faculdade juntos no Brasil. Somos amigos há anos." },
      { speaker: 'native', english: "That's cool. So, you're visiting from Brazil?", portuguese: "Que legal. Então, você está visitando do Brasil?" },
      { speaker: 'student', english: "Yes, I'm here for a few weeks. It's my first time in this city.", portuguese: "Sim, estou aqui por algumas semanas. É minha primeira vez nesta cidade." },
      { speaker: 'native', english: "Well, welcome! What do you think of the food here?", portuguese: "Bem, bem-vinda! O que você está achando da comida aqui?" },
      { speaker: 'student', english: "It's delicious! I really like these snacks.", portuguese: "Está deliciosa! Gostei muito desses petiscos." },
      { speaker: 'native', english: "I agree. Anyway, it was nice meeting you, Ana. Enjoy the rest of the night!", portuguese: "Concordo. Enfim, foi bom te conhecer, Ana. Aproveite o resto da noite!" },
      { speaker: 'student', english: "You too, Chris! See you around.", portuguese: "Você também, Chris! A gente se vê por aí." }
],
    dialoguesBeginner2: [
      { speaker: 'native', english: "Hello! Do you like the party?", portuguese: "Olá! Você gosta da festa?" },
      { speaker: 'student', english: "Yes, I do. My name is Ana.", portuguese: "Sim, gosto. Meu nome é Ana." },
      { speaker: 'native', english: "I am Chris. Nice to meet you.", portuguese: "Eu sou o Chris. Prazer em te conhecer." },
      { speaker: 'student', english: "Nice to meet you too. Are you from here?", portuguese: "Prazer em te conhecer também. Você é daqui?" },
      { speaker: 'native', english: "Yes, I am. Are you from Brazil?", portuguese: "Sim, eu sou. Você é do Brasil?" },
      { speaker: 'student', english: "Yes. I am visiting my friend.", portuguese: "Sim. Estou visitando meu amigo." },
      { speaker: 'native', english: "Great! Have fun!", portuguese: "Legal! Divirta-se!" },
      { speaker: 'student', english: "Thank you! Bye!", portuguese: "Obrigado! Tchau!" }
,

      {
            speaker: "native",
            english: "How long are you staying here?",
            portuguese: "Quanto tempo você vai ficar aqui?"
      },
      {
            speaker: "student",
            english: "I am staying for two weeks.",
            portuguese: "Eu vou ficar por duas semanas."
      },
      {
            speaker: "native",
            english: "Are you traveling alone?",
            portuguese: "Você está viajando sozinho?"
      },
      {
            speaker: "student",
            english: "No, I am with my family.",
            portuguese: "Não, estou com minha família."
      },
      {
            speaker: "native",
            english: "That is nice. Is it your first time here?",
            portuguese: "Que legal. É a sua primeira vez aqui?"
      },
      {
            speaker: "student",
            english: "Yes, it is my first time.",
            portuguese: "Sim, é a minha primeira vez."
      },
      {
            speaker: "native",
            english: "I hope you have fun.",
            portuguese: "Espero que você se divirta."
      },
      {
            speaker: "student",
            english: "Thank you! See you later.",
            portuguese: "Obrigado! Até logo."
      }
],
            importantPhrases: [
      {
            pt: "Qual é a sua profissão?",
            en: "What is your profession?"
      },
      {
            pt: "Eu moro com minha família.",
            en: "I live with my family."
      },
      {
            pt: "Gosto de ler livros.",
            en: "I like to read books."
      },
      {
            pt: "Onde você cresceu?",
            en: "Where did you grow up?"
      },
      {
            pt: "Você tem irmãos?",
            en: "Do you have siblings?"
      },
      {
            pt: "Eu estudo inglês todos os dias.",
            en: "I study English every day."
      }
],
        problems: [
      {
            descriptionPt: "Alguém pergunta de onde você é, mas você não entende a pergunta de primeira."
      },
      {
            descriptionPt: "Você esqueceu o nome da pessoa com quem acabou de ser apresentado e precisa perguntar de novo."
      }
],
    vocabulary: [
      { english: "My name is...", portuguese: "Meu nome é...",
        sentenceA1: "My name is Maria.",
        sentenceA2: "My name is Maria and I am from São Paulo.",
        sentenceA1Pt: "Meu nome é Maria.",
        sentenceA2Pt: "Meu nome é Maria e eu sou de São Paulo."
      },
      { english: "Nice to meet you", portuguese: "Prazer em conhecê-lo(a)",
        sentenceA1: "Nice to meet you, John.",
        sentenceA2: "Nice to meet you! I heard a lot about you.",
        sentenceA1Pt: "Prazer em conhecê-lo, John.",
        sentenceA2Pt: "Prazer em conhecê-lo! Eu ouvi muito sobre você."
      },
      { english: "I'm from Brazil", portuguese: "Eu sou do Brasil",
        sentenceA1: "I'm from Brazil.",
        sentenceA2: "I'm from Brazil, but I have been living in the US for two years.",
        sentenceA1Pt: "Eu sou do Brasil.",
        sentenceA2Pt: "Sou do Brasil, mas moro nos EUA há dois anos."
      },
      { english: "How old are you?", portuguese: "Quantos anos você tem?",
        sentenceA1: "How old are you? I am 25.",
        sentenceA2: "How old are you? You look very young for your age.",
        sentenceA1Pt: "Quantos anos você tem? Eu tenho 25.",
        sentenceA2Pt: "Quantos anos você tem? Você parece muito jovem para a sua idade."
      },
      { english: "I'm ... years old", portuguese: "Eu tenho ... anos",
        sentenceA1: "I'm 30 years old.",
        sentenceA2: "I'm 28 years old and I work as an engineer.",
        sentenceA1Pt: "Eu tenho 30 anos.",
        sentenceA2Pt: "Tenho 28 anos e trabalho como engenheiro(a)."
      },
      { english: "What do you do?", portuguese: "O que você faz?",
        sentenceA1: "What do you do? I am a teacher.",
        sentenceA2: "What do you do for a living? I work in marketing.",
        sentenceA1Pt: "O que você faz? Eu sou professor(a).",
        sentenceA2Pt: "O que você faz profissionalmente? Eu trabalho com marketing."
      },
      { english: "First time", portuguese: "Primeira vez",
        sentenceA1: "Is this your first time here?",
        sentenceA2: "Is this your first time visiting the United States?",
        sentenceA1Pt: "É a sua primeira vez aqui?",
        sentenceA2Pt: "É a sua primeira vez visitando os Estados Unidos?"
      },
      { english: "I'm excited", portuguese: "Estou animado(a)",
        sentenceA1: "I'm excited about this trip!",
        sentenceA2: "I'm really excited to be here for the first time.",
        sentenceA1Pt: "Estou animado(a) com esta viagem!",
        sentenceA2Pt: "Estou muito animado(a) de estar aqui pela primeira vez."
      },
      { english: "Last name / Surname", portuguese: "Sobrenome",
        sentenceA1: "My last name is Silva.",
        sentenceA2: "Could you spell your last name for me, please?",
        sentenceA1Pt: "Meu sobrenome é Silva.",
        sentenceA2Pt: "Você poderia soletrar seu sobrenome para mim, por favor?"
      },
      { english: "Nickname", portuguese: "Apelido",
        sentenceA1: "My nickname is Leo.",
        sentenceA2: "Everyone calls me by my nickname instead of my full name.",
        sentenceA1Pt: "Meu apelido é Leo.",
        sentenceA2Pt: "Todo mundo me chama pelo apelido em vez do nome completo."
      },
      { english: "Married", portuguese: "Casado(a)",
        sentenceA1: "I am married.",
        sentenceA2: "I have been married for five years and we have two kids.",
        sentenceA1Pt: "Eu sou casado(a).",
        sentenceA2Pt: "Eu sou casado(a) há cinco anos e temos dois filhos."
      },
      { english: "Single", portuguese: "Solteiro(a)",
        sentenceA1: "I am single.",
        sentenceA2: "I am single right now, but I am not looking for a relationship.",
        sentenceA1Pt: "Eu sou solteiro(a).",
        sentenceA2Pt: "Eu sou solteiro(a) agora, mas não estou procurando um relacionamento."
      },
      { english: "Hometown", portuguese: "Cidade natal",
        sentenceA1: "My hometown is Rio.",
        sentenceA2: "My hometown is a small city in the south of Brazil.",
        sentenceA1Pt: "Minha cidade natal é o Rio.",
        sentenceA2Pt: "Minha cidade natal é uma cidade pequena no sul do Brasil."
      },
      { english: "Nice to meet you too", portuguese: "Prazer em conhecê-lo(a) também",
        sentenceA1: "Nice to meet you too!",
        sentenceA2: "Nice to meet you too! I hope we can work together.",
        sentenceA1Pt: "Prazer em conhecê-lo(a) também!",
        sentenceA2Pt: "Prazer em conhecê-lo(a) também! Espero que possamos trabalhar juntos."
      },
      { english: "Occupation", portuguese: "Profissão / Ocupação",
        sentenceA1: "What is your occupation?",
        sentenceA2: "Please write your current occupation on this form.",
        sentenceA1Pt: "Qual é a sua profissão?",
        sentenceA2Pt: "Por favor, escreva sua profissão atual neste formulário."
      },
      { english: "Country of origin", portuguese: "País de origem",
        sentenceA1: "My country of origin is Brazil.",
        sentenceA2: "You must state your country of origin on your passport profile.",
        sentenceA1Pt: "Meu país de origem é o Brasil.",
        sentenceA2Pt: "Você deve declarar seu país de origem no perfil do seu passaporte."
      },
      { english: "Full name", portuguese: "Nome completo",
        sentenceA1: "What is your full name?",
        sentenceA2: "Please write your full name as it appears on your passport.",
        sentenceA1Pt: "Qual é o seu nome completo?",
        sentenceA2Pt: "Por favor, escreva seu nome completo como aparece no seu passaporte."
      },
      { english: "Address", portuguese: "Endereço",
        sentenceA1: "What is your address?",
        sentenceA2: "I need to confirm your temporary address during your stay.",
        sentenceA1Pt: "Qual é o seu endereço?",
        sentenceA2Pt: "Preciso confirmar seu endereço temporário durante a sua estadia."
      },
      { english: "Phone number", portuguese: "Número de telefone",
        sentenceA1: "My phone number is 555-1234.",
        sentenceA2: "Can you give me your international phone number?",
        sentenceA1Pt: "Meu número de telefone é 555-1234.",
        sentenceA2Pt: "Você pode me dar o seu número de telefone internacional?"
      },
      { english: "Email address", portuguese: "Endereço de e-mail",
        sentenceA1: "What is your email address?",
        sentenceA2: "We will send the confirmation to your email address.",
        sentenceA1Pt: "Qual é o seu e-mail?",
        sentenceA2Pt: "Nós enviaremos a confirmação para o seu endereço de e-mail."
      },
      { english: "Divorced", portuguese: "Divorciado(a)",
        sentenceA1: "She is divorced.",
        sentenceA2: "He got divorced last year but remains good friends with his ex-wife.",
        sentenceA1Pt: "Ela é divorciada.",
        sentenceA2Pt: "Ele se divorciou ano passado mas continua muito amigo da ex-esposa."
      },
      { english: "Date of birth", portuguese: "Data de nascimento",
        sentenceA1: "My date of birth is July 4th.",
        sentenceA2: "Please verify that your date of birth is correct on the document.",
        sentenceA1Pt: "Minha data de nascimento é 4 de julho.",
        sentenceA2Pt: "Por favor, verifique se a sua data de nascimento está correta no documento."
      }
],
    culturalTips: [
      {
        title: "Small Talk",
        titlePt: "Conversa Fiada",
        content: "Americans love small talk! They often ask 'How are you?' as a greeting. They expect a short answer like 'I'm good, thanks!' rather than a detailed response.",
        contentPt: "Americanos adoram conversa fiada! Eles costumam perguntar 'How are you?' como saudação. Esperam uma resposta curta como 'I'm good, thanks!' em vez de detalhes."
},
      {
        title: "Personal Space",
        titlePt: "Espaço Pessoal",
        content: "Personal space is vital. Maintain an arm's length distance. Avoid touching someone's arm or shoulder unless you are close friends.",
        contentPt: "O espaço pessoal é vital. Mantenha a distância de um braço. Evite tocar no braço ou ombro de alguém, a menos que sejam amigos próximos."
},
      {
        title: "Eye Contact",
        titlePt: "Contato Visual",
        content: "Direct eye contact is seen as a sign of honesty and confidence in the US. When talking to someone, look them in the eyes!",
        contentPt: "O contato visual direto é visto como um sinal de honestidade e confiança nos EUA. Ao falar com alguém, olhe-os nos olhos!"
}
    ],
  reading: {
      textA1: 'My name is Maria. I am from Brazil. I am 25 years old. I live in São Paulo, but now I am in New York. I am a student. I study English every day. I like music and movies. I have one brother and one sister. My brother is older. His name is Pedro. My sister is younger. Her name is Ana. My parents are very nice. My father is a teacher. My mother is a nurse. I miss my family, but I am happy here. I want to learn English and make new friends. Today is my first day at school. I am nervous but excited. I hope my classmates are friendly.',
      textA1Pt: 'Meu nome é Maria. Eu sou do Brasil. Eu tenho 25 anos. Eu moro em São Paulo, mas agora estou em Nova York. Eu sou estudante. Eu estudo inglês todo dia. Eu gosto de música e filmes. Eu tenho um irmão e uma irmã. Meu irmão é mais velho. O nome dele é Pedro. Minha irmã é mais nova. O nome dela é Ana. Meus pais são muito legais. Meu pai é professor. Minha mãe é enfermeira. Eu sinto falta da minha família, mas estou feliz aqui. Eu quero aprender inglês e fazer novos amigos. Hoje é meu primeiro dia na escola. Estou nervosa mas animada. Espero que meus colegas sejam simpáticos.',
      textA2: 'Maria arrived in New York three weeks ago with nothing but a suitcase and a dream of becoming fluent in English. Originally from São Paulo, she had always been fascinated by American culture through movies and music. Back home, she worked as a marketing assistant, but she decided to take a gap year to fully immerse herself in an English-speaking environment. She enrolled in an intensive language program at a school in Manhattan. On her first morning, she felt a mix of excitement and anxiety as she walked through the busy streets. The city was overwhelming — the noise, the speed, the diversity of people. At the school, she introduced herself to her classmates, who came from all over the world: Japan, France, Colombia, Turkey, and South Korea. Despite her initial shyness, she quickly realized everyone was in the same situation, trying to find the right words and build confidence. Her teacher, Mr. Thompson, was patient and encouraging, always reminding the class that making mistakes is the fastest way to learn.',
      textA2Pt: 'Maria chegou em Nova York três semanas atrás com nada além de uma mala e o sonho de se tornar fluente em inglês. Originalmente de São Paulo, ela sempre foi fascinada pela cultura americana através de filmes e música. Em casa, ela trabalhava como assistente de marketing, mas decidiu tirar um ano sabático para se imergir totalmente em um ambiente de língua inglesa. Ela se matriculou em um programa intensivo de idiomas em uma escola em Manhattan. Na sua primeira manhã, ela sentiu uma mistura de empolgação e ansiedade enquanto caminhava pelas ruas movimentadas. A cidade era avassaladora — o barulho, a velocidade, a diversidade de pessoas. Na escola, ela se apresentou aos colegas de classe, que vinham de todo o mundo: Japão, França, Colômbia, Turquia e Coreia do Sul. Apesar de sua timidez inicial, ela rapidamente percebeu que todos estavam na mesma situação, tentando encontrar as palavras certas e construir confiança. Seu professor, Sr. Thompson, era paciente e encorajador, sempre lembrando a turma de que cometer erros é a forma mais rápida de aprender.',
      questionsA1: [
        { question: 'What is the main topic of this text?', questionPt: 'Qual é o tópico principal deste texto?', options: ['Her job in Brazil', 'Her new life as a student in New York', 'Her parents\' professions', 'Her siblings'], correctIndex: 1 },
        { question: 'What does "nervous but excited" mean in the text?', questionPt: 'O que significa "nervous but excited" no texto?', options: ['She is sad and tired', 'She is angry and bored', 'She is anxious but happy', 'She is sick and cold'], correctIndex: 2 },
        { question: 'Why does Maria miss her family?', questionPt: 'Por que Maria sente falta de sua família?', options: ['Because she is far from them', 'Because they are angry at her', 'Because they live in New York', 'Because they are teachers'], correctIndex: 0 },
        { question: 'What can we infer about Maria\'s family?', questionPt: 'O que podemos inferir sobre a família de Maria?', options: ['They all live in New York', 'She is the middle child', 'Her father is older than her mother', 'They do not like her'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'What was Maria\'s job in São Paulo?', questionPt: 'Qual era o trabalho de Maria em São Paulo?', options: ['English teacher', 'Marketing assistant', 'Nurse', 'Student'], correctIndex: 1 },
        { question: 'Why did Maria come to New York?', questionPt: 'Por que Maria veio para Nova York?', options: ['For a vacation', 'To work in marketing', 'To immerse herself in English', 'To visit family'], correctIndex: 2 },
        { question: 'Where did Maria\'s classmates come from?', questionPt: 'De onde os colegas de Maria vieram?', options: ['Only from Brazil', 'From all over the world', 'Only from Europe', 'From the US'], correctIndex: 1 },
        { question: 'What did Mr. Thompson remind the class?', questionPt: 'O que o Sr. Thompson lembrava à turma?', options: ['To never speak Portuguese', 'That mistakes help you learn faster', 'To study 10 hours a day', 'That English is easy'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Pessoa] \"Qual é o seu nome?\"",
            expectedEn: "What is your name?"
      },
      {
            promptPt: "[Você] Você quer dizer o seu nome",
            expectedEn: "My name is [Name]."
      },
      {
            promptPt: "[Pessoa] \"De onde você é?\"",
            expectedEn: "Where are you from?"
      },
      {
            promptPt: "[Você] Você quer dizer de onde você é",
            expectedEn: "I am from Brazil."
      },
      {
            promptPt: "[Você] Você quer dizer que foi um prazer conhecer a pessoa",
            expectedEn: "Nice to meet you."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Forget someone's name right after meeting them",
            optionAPt: "Esquecer o nome de alguém logo após conhecê-la",
            optionBEn: "Call someone by the wrong name all night",
            optionBPt: "Chamar alguém pelo nome errado a noite toda"
      },
      {
            optionAEn: "Always introduce yourself first",
            optionAPt: "Sempre se apresentar primeiro",
            optionBEn: "Wait for others to introduce themselves",
            optionBPt: "Esperar os outros se apresentarem"
      },
      {
            optionAEn: "Meet 10 new people every day",
            optionAPt: "Conhecer 10 pessoas novas todos os dias",
            optionBEn: "Only talk to people you already know",
            optionBPt: "Falar apenas com pessoas que você já conhece"
      },
      {
            optionAEn: "Have a firm handshake",
            optionAPt: "Ter um aperto de mão firme",
            optionBEn: "Have a weak handshake but a great smile",
            optionBPt: "Ter um aperto de mão fraco mas um ótimo sorriso"
      },
      {
            optionAEn: "Talk about your hobbies",
            optionAPt: "Falar sobre seus hobbies",
            optionBEn: "Talk about your job",
            optionBPt: "Falar sobre seu trabalho"
      },
      {
            optionAEn: "Make eye contact the whole time",
            optionAPt: "Fazer contato visual o tempo todo",
            optionBEn: "Look around while talking",
            optionBPt: "Olhar em volta enquanto conversa"
      },
      {
            optionAEn: "Say 'Nice to meet you' too early",
            optionAPt: "Dizer 'Prazer em conhecê-lo' muito cedo",
            optionBEn: "Forget to say 'Nice to meet you' at the end",
            optionBPt: "Esquecer de dizer 'Prazer em conhecê-lo' no final"
      }
]
},
  {
    id: 'numbers',
    speakingQuestions: [
    {
        "question": "Do you prefer to pay with cash or a credit card?",
        "questionPt": "Você prefere pagar com dinheiro ou cartão de crédito?",
        "hintA1": "I prefer credit card.",
        "hintA2": "I usually pay with my credit card because it's much safer and more convenient."
    },
    {
        "question": "How often do you go shopping for clothes?",
        "questionPt": "Com que frequência você faz compras de roupas?",
        "hintA1": "I buy clothes every month.",
        "hintA2": "I don't go shopping very often, maybe just a few times a year."
    },
    {
        "question": "What is the most expensive thing you bought recently?",
        "questionPt": "Qual foi a coisa mais cara que você comprou recentemente?",
        "hintA1": "I bought a new phone.",
        "hintA2": "The most expensive thing I bought recently was a new laptop for my work."
    }
,
    {
        "question": "How much did you pay for your last haircut?",
        "questionPt": "Quanto você pagou pelo seu último corte de cabelo?",
        "hintA1": "I paid thirty dollars.",
        "hintA2": "I paid around fifty reais because I went to a new salon downtown."
    },
    {
        "question": "Do you save money every month?",
        "questionPt": "Você guarda dinheiro todo mês?",
        "hintA1": "Yes, I save a little.",
        "hintA2": "I always try to save at least ten percent of my salary every month."
    },
    {
        "question": "When did you open your first bank account?",
        "questionPt": "Quando você abriu sua primeira conta bancária?",
        "hintA1": "I opened it five years ago.",
        "hintA2": "I opened my first bank account when I got my first job at eighteen."
    },
    {
        "question": "How many friends did you invite to your last birthday?",
        "questionPt": "Quantos amigos você convidou para o seu último aniversário?",
        "hintA1": "I invited ten friends.",
        "hintA2": "I only invited my five closest friends for a small dinner at home."
    },
    {
        "question": "What time does your favorite store close?",
        "questionPt": "A que horas a sua loja favorita fecha?",
        "hintA1": "It closes at nine PM.",
        "hintA2": "It usually closes at 10 PM on weekdays and 8 PM on Sundays."
    }
    ],
    title: 'Numbers, Prices & Shopping',
    titlePt: 'Números, Preços e Compras',
    description: 'Master numbers for prices, quantities, and everyday shopping situations.',
    descriptionPt: 'Domine os números para preços, quantidades e situações de compras do dia a dia.',
    icon: '💲',
    color: 'peach',
    imagePath: '/images/numbers_scene.png',
    dialogues: [
      { speaker: 'student', english: "Excuse me, how much is this sweatshirt?", portuguese: "Com licença, quanto custa este moletom?" },
      { speaker: 'native', english: "That one is twenty-five dollars and fifty cents.", portuguese: "Esse custa vinte e cinco dólares e cinquenta centavos." },
      { speaker: 'student', english: "Is it on sale? I saw a sign outside.", portuguese: "Está em promoção? Eu vi uma placa lá fora." },
      { speaker: 'native', english: "Yes, all sweatshirts are twenty percent off today.", portuguese: "Sim, todos os moletons estão com vinte por cento de desconto hoje." },
      { speaker: 'student', english: "That's a good deal. I'll take it.", portuguese: "É um bom negócio. Eu vou levar." },
      { speaker: 'native', english: "Great. Did you find everything you were looking for?", portuguese: "Ótimo. Você encontrou tudo o que procurava?" },
      { speaker: 'student', english: "Actually, how much are these socks?", portuguese: "Na verdade, quanto custam estas meias?" },
      { speaker: 'native', english: "They are three dollars a pair, or three pairs for eight dollars.", portuguese: "Elas custam três dólares o par, ou três pares por oito dólares." },
      { speaker: 'student', english: "I'll take three pairs, please. And I also need a bottle of water.", portuguese: "Eu vou levar três pares, por favor. E também preciso de uma garrafa de água." },
      { speaker: 'native', english: "The water is one dollar and seventy-five cents.", portuguese: "A água custa um dólar e setenta e cinco centavos." },
      { speaker: 'student', english: "OK. What is my total with the tax?", portuguese: "OK. Qual é o meu total com as taxas?" },
      { speaker: 'native', english: "Let me scan everything. Your subtotal is thirty dollars and fifteen cents.", portuguese: "Deixe-me escanear tudo. Seu subtotal é trinta dólares e quinze centavos." },
      { speaker: 'native', english: "With the sales tax, your total comes to thirty-two dollars and forty cents.", portuguese: "Com o imposto sobre vendas, seu total dá trinta e dois dólares e quarenta centavos." },
      { speaker: 'student', english: "Can I pay with a credit card, or do you prefer cash?", portuguese: "Posso pagar com cartão de crédito, ou você prefere dinheiro?" },
      { speaker: 'native', english: "Credit card is perfectly fine. You can insert your card in the machine.", portuguese: "Cartão de crédito está ótimo. Você pode inserir seu cartão na máquina." },
      { speaker: 'student', english: "Do I need to sign the receipt?", portuguese: "Eu preciso assinar o recibo?" },
      { speaker: 'native', english: "No signature needed. Would you like your receipt printed or emailed?", portuguese: "Não precisa de assinatura. Você gostaria do seu recibo impresso ou por e-mail?" },
      { speaker: 'student', english: "Printed, please. Thank you!", portuguese: "Impresso, por favor. Obrigado!" },
      { speaker: 'native', english: "Here is your bag and your receipt. Have a great day!", portuguese: "Aqui está sua sacola e seu recibo. Tenha um ótimo dia!" }
],
    dialoguesBeginner: [
      { speaker: 'student', english: "How much is this?", portuguese: "Quanto custa isto?" },
      { speaker: 'native', english: "It is twenty dollars.", portuguese: "Custa vinte dólares." },
      { speaker: 'student', english: "Is it on sale?", portuguese: "Está em promoção?" },
      { speaker: 'native', english: "Yes, it is. Ten percent off.", portuguese: "Sim, está. Dez por cento de desconto." },
      { speaker: 'student', english: "I will take it.", portuguese: "Eu vou levar." },
      { speaker: 'native', english: "Anything else?", portuguese: "Algo mais?" },
      { speaker: 'student', english: "Yes. I need a bottle of water.", portuguese: "Sim. Preciso de uma garrafa de água." },
      { speaker: 'native', english: "Water is two dollars.", portuguese: "A água custa dois dólares." },
      { speaker: 'student', english: "Can I pay with card?", portuguese: "Posso pagar com cartão?" },
      { speaker: 'native', english: "Yes. Insert your card here.", portuguese: "Sim. Insira seu cartão aqui." },
      { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" },
      { speaker: 'native', english: "Have a nice day!", portuguese: "Tenha um bom dia!" }
,

      {
            speaker: "native",
            english: "Can you repeat the number, please?",
            portuguese: "Você pode repetir o número, por favor?"
      },
      {
            speaker: "student",
            english: "Yes. It is seven, four, two, one.",
            portuguese: "Sim. É sete, quatro, dois, um."
      },
      {
            speaker: "native",
            english: "Thank you. And how much is the ticket?",
            portuguese: "Obrigado. E quanto custa o ingresso?"
      },
      {
            speaker: "student",
            english: "It is fifty dollars.",
            portuguese: "Custa cinquenta dólares."
      },
      {
            speaker: "native",
            english: "Do you accept credit cards?",
            portuguese: "Você aceita cartão de crédito?"
      },
      {
            speaker: "student",
            english: "Yes, we accept cash and cards.",
            portuguese: "Sim, aceitamos dinheiro e cartões."
      },
      {
            speaker: "native",
            english: "Here is my card.",
            portuguese: "Aqui está meu cartão."
      },
      {
            speaker: "student",
            english: "Thank you very much.",
            portuguese: "Muito obrigado."
      }
],
    dialogues2: [
      { speaker: 'student', english: "Excuse me, can I get the check, please?", portuguese: "Com licença, pode me trazer a conta, por favor?" },
      { speaker: 'native', english: "Of course. Here it is. Your total is forty-five dollars.", portuguese: "Claro. Aqui está. Seu total é quarenta e cinco dólares." },
      { speaker: 'student', english: "Does this include the tip?", portuguese: "Isso inclui a gorjeta?" },
      { speaker: 'native', english: "No, the tip is not included. A standard tip is around fifteen to twenty percent.", portuguese: "Não, a gorjeta não está incluída. Uma gorjeta padrão é de cerca de quinze a vinte por cento." },
      { speaker: 'student', english: "Okay. Can I pay for the meal and the tip together on my card?", portuguese: "Ok. Posso pagar a refeição e a gorjeta juntas no meu cartão?" },
      { speaker: 'native', english: "Yes, you can. Just write the tip amount on the receipt after I swipe your card.", portuguese: "Sim, pode. Apenas escreva o valor da gorjeta no recibo depois que eu passar o seu cartão." },
      { speaker: 'student', english: "Got it. Here is my card.", portuguese: "Entendi. Aqui está meu cartão." },
      { speaker: 'native', english: "Thank you. Here is the receipt. Have a wonderful evening!", portuguese: "Obrigado. Aqui está o recibo. Tenha uma noite maravilhosa!" },
      { speaker: 'student', english: "Thank you, you too!", portuguese: "Obrigado, você também!" }
],
    dialoguesBeginner2: [
      { speaker: 'student', english: "The check, please.", portuguese: "A conta, por favor." },
      { speaker: 'native', english: "Here it is. It is forty dollars.", portuguese: "Aqui está. São quarenta dólares." },
      { speaker: 'student', english: "Is the tip included?", portuguese: "A gorjeta está incluída?" },
      { speaker: 'native', english: "No, it is not.", portuguese: "Não, não está." },
      { speaker: 'student', english: "I will pay fifty dollars. Keep the change.", portuguese: "Vou pagar cinquenta dólares. Fique com o troco." },
      { speaker: 'native', english: "Thank you very much!", portuguese: "Muito obrigado!" },
      { speaker: 'student', english: "You are welcome. Goodbye!", portuguese: "De nada. Tchau!" }
,

      {
            speaker: "native",
            english: "What time is your train?",
            portuguese: "A que horas é o seu trem?"
      },
      {
            speaker: "student",
            english: "It is at ten thirty.",
            portuguese: "É às dez e meia."
      },
      {
            speaker: "native",
            english: "And what platform is it?",
            portuguese: "E qual é a plataforma?"
      },
      {
            speaker: "student",
            english: "Platform number five.",
            portuguese: "Plataforma número cinco."
      },
      {
            speaker: "native",
            english: "Is it a long trip?",
            portuguese: "É uma viagem longa?"
      },
      {
            speaker: "student",
            english: "No, it takes only two hours.",
            portuguese: "Não, leva apenas duas horas."
      },
      {
            speaker: "native",
            english: "Perfect. Have a safe trip.",
            portuguese: "Perfeito. Tenha uma viagem segura."
      },
      {
            speaker: "student",
            english: "Thank you so much.",
            portuguese: "Muito obrigado."
      }
],
            importantPhrases: [
      {
            pt: "Pode me dar um desconto?",
            en: "Can you give me a discount?"
      },
      {
            pt: "Aceita dinheiro?",
            en: "Do you accept cash?"
      },
      {
            pt: "São cinco e meia.",
            en: "It is half past five."
      },
      {
            pt: "Qual é o preço total?",
            en: "What is the total price?"
      },
      {
            pt: "Você tem troco para cem?",
            en: "Do you have change for a hundred?"
      },
      {
            pt: "Eu preciso do meu recibo.",
            en: "I need my receipt."
      }
],
        problems: [
      {
            descriptionPt: "O vendedor fala o preço muito rápido e você precisa que ele repita mais devagar."
      },
      {
            descriptionPt: "Você acha que recebeu o troco errado."
      }
],
    vocabulary: [
      { english: "How much?", portuguese: "Quanto?",
        sentenceA1: "How much is this?",
        sentenceA2: "How much does this shirt cost with the discount?",
        sentenceA1Pt: "Quanto custa isso?",
        sentenceA2Pt: "Quanto custa esta camisa com o desconto?"
      },
      { english: "Dollar", portuguese: "Dólar",
        sentenceA1: "It costs ten dollars.",
        sentenceA2: "The exchange rate is five reais per dollar today.",
        sentenceA1Pt: "Custa dez dólares.",
        sentenceA2Pt: "La taxa de câmbio é de cinco reais por dólar hoje."
      },
      { english: "Cents", portuguese: "Centavos",
        sentenceA1: "That is fifty cents.",
        sentenceA2: "Your change is seventy-five cents.",
        sentenceA1Pt: "São cinquenta centavos.",
        sentenceA2Pt: "Seu troco é de setenta e cinco centavos."
      },
      { english: "Receipt", portuguese: "Recibo / Nota fiscal",
        sentenceA1: "Can I have the receipt?",
        sentenceA2: "I need the receipt for my expense report.",
        sentenceA1Pt: "Posso ter o recibo?",
        sentenceA2Pt: "Preciso do recibo para o relatório de despesas."
      },
      { english: "Change", portuguese: "Troco",
        sentenceA1: "Here is your change.",
        sentenceA2: "Keep the change, please. It is your tip.",
        sentenceA1Pt: "Aqui está o seu troco.",
        sentenceA2Pt: "Fique com o troco, por favor. É a sua gorjeta."
      },
      { english: "Credit card", portuguese: "Cartão de crédito",
        sentenceA1: "I pay with credit card.",
        sentenceA2: "Do you accept credit cards or only cash?",
        sentenceA1Pt: "Eu pago com cartão.",
        sentenceA2Pt: "Vocês aceitam cartões de crédito ou apenas dinheiro?"
      },
      { english: "Per pound", portuguese: "Por libra",
        sentenceA1: "It is two dollars per pound.",
        sentenceA2: "The fresh salmon is twelve dollars per pound.",
        sentenceA1Pt: "São dois dólares por libra.",
        sentenceA2Pt: "O salmão fresco custa doze dólares por libra."
      },
      { english: "Total", portuguese: "Total",
        sentenceA1: "The total is twenty dollars.",
        sentenceA2: "Your total comes to forty-five dollars and thirty cents.",
        sentenceA1Pt: "O total é vinte dólares.",
        sentenceA2Pt: "Seu total é de quarenta e cinco dólares e trinta centavos."
      },
      { english: "Cash", portuguese: "Dinheiro em espécie",
        sentenceA1: "I pay in cash.",
        sentenceA2: "I prefer to pay in cash so I can control my spending.",
        sentenceA1Pt: "Eu pago em dinheiro.",
        sentenceA2Pt: "Prefiro pagar em dinheiro para controlar meus gastos."
      },
      { english: "Discount", portuguese: "Desconto",
        sentenceA1: "Is there a discount?",
        sentenceA2: "Students get a twenty percent discount on all items.",
        sentenceA1Pt: "Tem desconto?",
        sentenceA2Pt: "Estudantes ganham vinte por cento de desconto em todos os itens."
      },
      { english: "On sale", portuguese: "Em promoção",
        sentenceA1: "This is on sale.",
        sentenceA2: "These shoes are on sale this weekend for half price.",
        sentenceA1Pt: "Isto está em promoção.",
        sentenceA2Pt: "Estes sapatos estão em promoção pela metade do preço."
      },
      { english: "Expensive", portuguese: "Caro",
        sentenceA1: "This is very expensive.",
        sentenceA2: "The restaurant is expensive but the food is delicious.",
        sentenceA1Pt: "Isto é muito caro.",
        sentenceA2Pt: "O restaurante é caro, mas a comida é deliciosa."
      },
      { english: "Cheap", portuguese: "Barato",
        sentenceA1: "This is very cheap.",
        sentenceA2: "The street food here is cheap and really tasty.",
        sentenceA1Pt: "Isto é muito barato.",
        sentenceA2Pt: "A comida de rua aqui é barata e muito saborosa."
      },
      { english: "Cashier", portuguese: "Caixa / Atendente",
        sentenceA1: "The cashier is over there.",
        sentenceA2: "Please pay the cashier at the front of the store.",
        sentenceA1Pt: "O caixa é ali.",
        sentenceA2Pt: "Por favor, pague no caixa na frente da loja."
      },
      { english: "Shopping cart", portuguese: "Carrinho de compras",
        sentenceA1: "I need a shopping cart.",
        sentenceA2: "Could you grab a shopping cart? We have a lot to buy.",
        sentenceA1Pt: "Preciso de um carrinho.",
        sentenceA2Pt: "Pode pegar um carrinho? Temos muita coisa para comprar."
      },
      { english: "Price tag", portuguese: "Etiqueta de preço",
        sentenceA1: "Where is the price tag?",
        sentenceA2: "This shirt doesn't have a price tag. Could you check the price for me?",
        sentenceA1Pt: "Onde está a etiqueta?",
        sentenceA2Pt: "Esta camisa está sem etiqueta. Você poderia checar o preço para mim?"
      },
      { english: "Debit card", portuguese: "Cartão de débito",
        sentenceA1: "Can I pay by debit card?",
        sentenceA2: "My debit card didn't work, so I had to pay with cash.",
        sentenceA1Pt: "Posso pagar com cartão de débito?",
        sentenceA2Pt: "Meu cartão de débito não funcionou, então precisei pagar em dinheiro."
      },
      { english: "Sales tax", portuguese: "Imposto sobre vendas",
        sentenceA1: "How much is the sales tax?",
        sentenceA2: "Remember that the sales tax is added at the register, not on the tag.",
        sentenceA1Pt: "Quanto é o imposto de vendas?",
        sentenceA2Pt: "Lembre-se de que o imposto de vendas é adicionado no caixa, não na etiqueta."
      },
      { english: "Refund", portuguese: "Reembolso",
        sentenceA1: "I want a refund.",
        sentenceA2: "If you bring the receipt, you can get a full refund within thirty days.",
        sentenceA1Pt: "Quero um reembolso.",
        sentenceA2Pt: "Se você trouxer o recibo, pode receber um reembolso total em trinta dias."
      },
      { english: "Billing address", portuguese: "Endereço de cobrança",
        sentenceA1: "What is your billing address?",
        sentenceA2: "The system requires your billing address to process the credit card.",
        sentenceA1Pt: "Qual é o endereço de cobrança?",
        sentenceA2Pt: "O sistema exige seu endereço de cobrança para processar o cartão de crédito."
      }
],
    culturalTips: [
      {
        title: "Sales Tax",
        titlePt: "Imposto sobre Vendas",
        content: "Prices displayed in stores do NOT include sales tax! It's added at the register. Your total will always be higher than the price on the tag.",
        contentPt: "Os preços nas lojas NÃO incluem o imposto sobre vendas! Ele é adicionado no caixa. Seu total será sempre maior que o preço na etiqueta."
},
      {
        title: "Coins & Change",
        titlePt: "Moedas e Troco",
        content: "Get to know coins: Penny (1¢), Nickel (5¢), Dime (10¢), and Quarter (25¢). Quarters are essential for laundry and parking!",
        contentPt: "Conheça as moedas: Penny (1¢), Nickel (5¢), Dime (10¢) e Quarter (25¢). Quarters são essenciais para lavanderia e estacionamento!"
},
      {
        title: "Paper Money",
        titlePt: "Notas de Papel",
        content: "All US bills are the same size and color (green)! Check the numbers carefully so you don't confuse a $1 bill with a $100 bill.",
        contentPt: "Todas as notas americanas têm o mesmo tamanho e cor (verde)! Verifique os números com cuidado para não confundir uma nota de $1 com uma de $100."
}
    ],
  reading: {
      textA1: 'Lisa goes to a store. She wants to buy a new phone. The phone costs 299 dollars. She also wants a phone case. The case costs 15 dollars. The total is 314 dollars. She gives the cashier her credit card. The cashier says the PIN has 4 numbers. Lisa types her PIN. The receipt shows the total. Lisa also buys headphones for 49 dollars. Now she spent 363 dollars today. She checks her bank account on her phone. She still has 1,200 dollars. She is happy because she saved money this month. She walks home and calls her mother. Her mother\'s phone number starts with 555.',
      textA1Pt: 'Lisa vai a uma loja. Ela quer comprar um celular novo. O celular custa 299 dólares. Ela também quer uma capinha de celular. A capinha custa 15 dólares. O total é 314 dólares. Ela dá seu cartão de crédito ao caixa. O caixa diz que a senha tem 4 números. Lisa digita sua senha. O recibo mostra o total. Lisa também compra fones de ouvido por 49 dólares. Agora ela gastou 363 dólares hoje. Ela verifica sua conta bancária no celular. Ela ainda tem 1.200 dólares. Ela está feliz porque economizou dinheiro este mês. Ela vai para casa andando e liga para sua mãe. O número de telefone da mãe começa com 555.',
      textA2: 'Understanding numbers in English is one of the most practical skills a traveler can develop. Last Tuesday, Lisa went to the electronics store on Fifth Avenue to replace her old phone. She compared three different models: the first was priced at $299, the second at $499, and the premium model at $899. She decided on the mid-range option. At the counter, the cashier asked for her phone number to register the warranty. She said her number was 917-555-0384, carefully pronouncing each digit to avoid any confusion. The sales tax in New York is 8.875%, so her final total came to $543.28. She also asked about the store\'s return policy and learned she had 30 days to return the item with the original receipt. On her way home, she stopped at a café where a large latte cost $6.75. She left a $2 tip, bringing her total daily expenses to over $550. Managing money in a foreign currency requires constant mental math, but Lisa found that practicing with real transactions was the best way to get comfortable with English numbers.',
      textA2Pt: 'Entender números em inglês é uma das habilidades mais práticas que um viajante pode desenvolver. Na última terça-feira, Lisa foi à loja de eletrônicos na Quinta Avenida para trocar seu celular antigo. Ela comparou três modelos diferentes: o primeiro custava $299, o segundo $499, e o modelo premium $899. Ela decidiu pela opção intermediária. No caixa, o atendente pediu seu número de telefone para registrar a garantia. Ela disse que seu número era 917-555-0384, pronunciando cada dígito cuidadosamente para evitar confusão. O imposto sobre vendas em Nova York é de 8,875%, então seu total final ficou em $543,28. Ela também perguntou sobre a política de devolução da loja e soube que tinha 30 dias para devolver o item com o recibo original. No caminho para casa, ela parou em um café onde um latte grande custava $6,75. Ela deixou $2 de gorjeta, elevando seus gastos diários totais para mais de $550. Lidar com dinheiro em moeda estrangeira exige cálculo mental constante, mas Lisa percebeu que praticar com transações reais era a melhor forma de se sentir confortável com números em inglês.',
      questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Lisa buys things and checks her money', 'Lisa works at a store', 'Lisa calls her mother', 'Lisa loses her credit card'], correctIndex: 0 },
        { question: 'What does "saved money" mean in the text?', questionPt: 'O que significa "saved money" no texto?', options: ['She spent all her money', 'She kept some money in the bank', 'She gave money to her mother', 'She lost money'], correctIndex: 1 },
        { question: 'Why is Lisa happy?', questionPt: 'Por que Lisa está feliz?', options: ['Because she bought headphones', 'Because the store was closed', 'Because she still has a good amount of money left', 'Because she saw her mother'], correctIndex: 2 },
        { question: 'What can we infer about Lisa\'s purchases?', questionPt: 'O que podemos inferir sobre as compras de Lisa?', options: ['She only bought one item', 'She bought everything with cash', 'She bought a phone and accessories for it', 'She bought food'], correctIndex: 2 }
      ],
      questionsA2: [
        { question: 'How much was the sales tax rate?', questionPt: 'Qual era a taxa de imposto?', options: ['5%', '7.5%', '8.875%', '10%'], correctIndex: 2 },
        { question: 'What was Lisa\'s final total for the phone?', questionPt: 'Qual foi o total final de Lisa pelo celular?', options: ['$499.00', '$543.28', '$550.00', '$899.00'], correctIndex: 1 },
        { question: 'How many days does the return policy allow?', questionPt: 'Quantos dias a política de devolução permite?', options: ['7 days', '14 days', '30 days', '60 days'], correctIndex: 2 },
        { question: 'How much tip did Lisa leave at the café?', questionPt: 'Quanto de gorjeta Lisa deixou no café?', options: ['$1', '$2', '$3', '$5'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Você] Você quer perguntar quanto custa algo",
            expectedEn: "How much is this?"
      },
      {
            promptPt: "[Atendente] \"Custa 30 dólares.\"",
            expectedEn: "It is thirty dollars."
      },
      {
            promptPt: "[Você] Você quer pedir dois ingressos",
            expectedEn: "I would like two tickets, please."
      },
      {
            promptPt: "[Atendente] \"Qual é o seu número de telefone?\"",
            expectedEn: "What is your phone number?"
      },
      {
            promptPt: "[Você] Você quer dizer que o seu número de telefone é 555-1234",
            expectedEn: "My phone number is 555-1234."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Win a million dollars but you can't tell anyone",
            optionAPt: "Ganhar um milhão de dólares mas não poder contar a ninguém",
            optionBEn: "Win 100 dollars every day for the rest of your life",
            optionBPt: "Ganhar 100 dólares todos os dias pelo resto da sua vida"
      },
      {
            optionAEn: "Always be exactly 5 minutes late",
            optionAPt: "Estar sempre exatamente 5 minutos atrasado",
            optionBEn: "Always be exactly 30 minutes early",
            optionBPt: "Estar sempre exatamente 30 minutos adiantado"
      },
      {
            optionAEn: "Have only one close friend",
            optionAPt: "Ter apenas um amigo próximo",
            optionBEn: "Have 100 acquaintances but no close friends",
            optionBPt: "Ter 100 conhecidos mas nenhum amigo próximo"
      },
      {
            optionAEn: "Live to be 100 years old",
            optionAPt: "Viver até os 100 anos de idade",
            optionBEn: "Live to be 50 but be super healthy",
            optionBPt: "Viver até os 50 mas ser super saudável"
      },
      {
            optionAEn: "Pay double for everything",
            optionAPt: "Pagar o dobro por tudo",
            optionBEn: "Wait in line for 2 hours for everything",
            optionBPt: "Esperar na fila por 2 horas para tudo"
      },
      {
            optionAEn: "Memorize 100 phone numbers",
            optionAPt: "Memorizar 100 números de telefone",
            optionBEn: "Forget your own phone number",
            optionBPt: "Esquecer o seu próprio número de telefone"
      },
      {
            optionAEn: "Be 10 years younger",
            optionAPt: "Ser 10 anos mais jovem",
            optionBEn: "Have 10 million dollars",
            optionBPt: "Ter 10 milhões de dólares"
      }
]
},
  {
    id: 'airport',
    speakingQuestions: [
    {
        "question": "Do you like traveling by plane? Why or why not?",
        "questionPt": "Você gosta de viajar de avião? Por que ou por que não?",
        "hintA1": "Yes, I like planes. It is fast.",
        "hintA2": "Yes, I love it because it's fast, but I hate waiting at the airport."
    },
    {
        "question": "What do you usually do during a long flight?",
        "questionPt": "O que você costuma fazer durante um voo longo?",
        "hintA1": "I sleep and watch movies.",
        "hintA2": "During a long flight, I usually read a book or watch a couple of movies."
    },
    {
        "question": "Do you prefer to travel light or with a lot of luggage?",
        "questionPt": "Você prefere viajar leve ou com muita bagagem?",
        "hintA1": "I prefer to travel light.",
        "hintA2": "I always try to travel light so I don't have to check any bags."
    }
,
    {
        "question": "Did you pack your bags yourself?",
        "questionPt": "Você mesmo fez as malas?",
        "hintA1": "Yes, I packed them last night.",
        "hintA2": "Yes, I always pack my bags carefully the day before I travel."
    },
    {
        "question": "What time does your flight leave?",
        "questionPt": "A que horas o seu voo sai?",
        "hintA1": "It leaves at two PM.",
        "hintA2": "My flight departs at 2:30 PM, so I need to be at the gate by 2:00."
    },
    {
        "question": "Did you buy anything at duty-free last time?",
        "questionPt": "Você comprou algo no duty-free da última vez?",
        "hintA1": "No, I did not buy anything.",
        "hintA2": "Yes, I bought some chocolate and a bottle of perfume for my mother."
    },
    {
        "question": "Do you prefer window or aisle seats?",
        "questionPt": "Você prefere assento na janela ou no corredor?",
        "hintA1": "I prefer the window seat.",
        "hintA2": "I always choose the aisle because I like to stand up and walk during long flights."
    },
    {
        "question": "How did you get to the airport today?",
        "questionPt": "Como você chegou ao aeroporto hoje?",
        "hintA1": "I came by taxi.",
        "hintA2": "My brother drove me here early in the morning to avoid the traffic."
    }
    ],
    title: 'Airport Logistics & Baggage',
    titlePt: 'Logística de Aeroporto e Bagagem',
    description: 'Navigate check-in, security rules, baggage claim, and terminal directions.',
    descriptionPt: 'Navegue pelo check-in, regras de segurança, retirada de bagagem e direções no terminal.',
    icon: '✈️',
    color: 'sky',
    imagePath: '/images/airport_scene.png',
    dialogues: [
      { speaker: 'student', english: "Hello! I'd like to check in for my flight to New York. Is it on time?", portuguese: "Olá! Eu gostaria de fazer o check-in para o meu voo para Nova York. Ele está no horário?" },
      { speaker: 'native', english: "Good morning! Yes, flight AA123 is on time. May I have your passport and boarding pass, please?", portuguese: "Bom dia! Sim, o voo AA123 está no horário. Posso ver seu passaporte e cartão de embarque, por favor?" },
      { speaker: 'student', english: "Here they are. I checked in online, but I would prefer a window seat instead of an aisle seat, if possible.", portuguese: "Aqui estão. Eu fiz o check-in online, mas preferia um assento na janela em vez de um assento no corredor, se possível." },
      { speaker: 'native', english: "Let me see... Yes, we have a window seat available in row 15. Are you checking any luggage?", portuguese: "Deixe-me ver... Sim, temos um assento na janela disponível na fileira 15. Você vai despachar alguma bagagem?" },
      { speaker: 'student', english: "Yes, I have this large suitcase to check, and a small carry-on bag with me.", portuguese: "Sim, tenho esta mala grande para despachar, e uma pequena mala de mão comigo." },
      { speaker: 'native', english: "Please place your suitcase on the scale. Oh, it weighs 55 pounds. I'm afraid it's overweight baggage.", portuguese: "Por favor, coloque sua mala na balança. Oh, ela pesa 55 libras. Receio que seja uma bagagem acima do peso." },
      { speaker: 'student', english: "Oh no! The limit is 50 pounds, right? Can I move some clothes to my carry-on to avoid the fee?", portuguese: "Ah não! O limite é de 50 libras, certo? Posso passar algumas roupas para a minha mala de mão para evitar a taxa?" },
      { speaker: 'native', english: "Sure, go ahead and adjust it. Once it's ready, your gate is B22. You must go through security check next.", portuguese: "Claro, vá em frente e ajuste-a. Assim que estiver pronta, seu portão é o B22. Você deve passar pelo controle de segurança a seguir." },
      { speaker: 'student', english: "Great, thank you. Excuse me, where is the main security check entrance?", portuguese: "Ótimo, obrigado. Com licença, onde fica a entrada principal do controle de segurança?" },
      { speaker: 'native', english: "Just walk straight down and turn left. Make sure to put all your belongings in the bins for the X-ray machine.", portuguese: "Basta caminhar em frente e virar à esquerda. Certifique-se de colocar todos os seus pertences nas caixas para a máquina de raio-X." },
      { speaker: 'student', english: "Hello, do I need to take out my laptop and tablet from my carry-on?", portuguese: "Olá, eu preciso tirar meu notebook e tablet da minha mala de mão?" },
      { speaker: 'native', english: "Yes, please place all electronics and liquids in a separate bin. And you must take off your shoes and belt.", portuguese: "Sim, por favor, coloque todos os eletrônicos e líquidos em uma caixa separada. E você deve tirar os sapatos e o cinto." },
      { speaker: 'student', english: "Okay. Should I keep my boarding pass in my hand while going through the scanner?", portuguese: "Ok. Devo usar meu cartão de embarque na mão enquanto passo pelo scanner?" },
      { speaker: 'native', english: "No, put it in the bin too. Empty your pockets completely. Alright, step through... You're all clear!", portuguese: "Não, coloque-o na caixa também. Esvazie seus bolsos completamente. Certo, pode passar... Tudo limpo!" },
      { speaker: 'student', english: "Thank you. Now I just need to find gate B22. Is it very far from here?", portuguese: "Obrigada. Agora só preciso encontrar o portão B22. É muito longe daqui?" },
      { speaker: 'native', english: "It's about a five-minute walk. Once you land in New York, follow the signs to the baggage claim area to collect your suitcase.", portuguese: "Fica a cerca de cinco minutos de caminhada. Assim que pousar em Nova York, siga as placas para a área de retirada de bagagens para pegar sua mala." },
      { speaker: 'student', english: "Perfect. My boarding pass says boarding starts at 10:15. I should head to the gate now.", portuguese: "Perfeito. Meu cartão de embarque diz que o embarque começa às 10h15. Devo ir para o portão agora." },
      { speaker: 'native', english: "Exactly. Have a safe flight and enjoy your trip to the US!", portuguese: "Exatamente. Tenha um voo seguro e aproveite sua viagem aos EUA!" }
],
    dialoguesBeginner: [
      { speaker: 'student', english: "Hello! Is my flight to New York on time or delayed?", portuguese: "Olá! Meu voo para Nova York está no horário ou atrasado?" },
      { speaker: 'native', english: "It is on time! Can I see your passport and boarding pass?", portuguese: "Está no horário! Posso ver seu passaporte e cartão de embarque?" },
      { speaker: 'student', english: "Here they are. Can I have a window seat, please? I do not want an aisle seat.", portuguese: "Aqui estão. Posso pegar um assento na janela, por favor? Não quero um assento no corredor." },
      { speaker: 'native', english: "Yes, window seat 15A. Do you have any luggage to check?", portuguese: "Sim, assento na janela 15A. Você tem alguma bagagem para despachar?" },
      { speaker: 'student', english: "Yes, this large suitcase. And I have one small carry-on.", portuguese: "Sim, esta mala grande. E tenho uma pequena mala de mão." },
      { speaker: 'native', english: "Oh, your suitcase is 55 pounds. It is overweight baggage.", portuguese: "Oh, sua mala pesa 55 libras. É uma bagagem acima do peso." },
      { speaker: 'student', english: "Oh no! Can I put some clothes in my carry-on?", portuguese: "Ah não! Posso colocar algumas roupas na minha mala de mão?" },
      { speaker: 'native', english: "Yes, you can. Your gate is B22. Go to the security check now.", portuguese: "Sim, você pode. Seu portão é o B22. Vá para o controle de segurança agora." },
      { speaker: 'student', english: "Thank you. What do I do at the X-ray machine?", portuguese: "Obrigado. O que eu faço na máquina de raio-X?" },
      { speaker: 'native', english: "Please take out all electronics and liquids. Put them in the bin.", portuguese: "Por favor, tire todos os eletrônicos e líquidos. Coloque-os na caixa." },
      { speaker: 'student', english: "Do I need to take off my shoes and belt?", portuguese: "Preciso tirar meus sapatos e o cinto?" },
      { speaker: 'native', english: "Yes, take off your shoes and belt, please. Step through the scanner.", portuguese: "Sim, tire os sapatos e o cinto, por favor. Passe pelo scanner." },
      { speaker: 'student', english: "All done. Where do I get my suitcase in New York?", portuguese: "Tudo pronto. Onde eu pego minha mala em Nova York?" },
      { speaker: 'native', english: "Follow the signs to the baggage claim. Have a great flight!", portuguese: "Siga as placas para a retirada de bagagem. Tenha um ótimo voo!" },
      { speaker: 'student', english: "Thank you very much for your help! Goodbye!", portuguese: "Muito obrigado pela sua ajuda! Tchau!" }
,

      {
            speaker: "native",
            english: "Where is the bathroom?",
            portuguese: "Onde fica o banheiro?"
      },
      {
            speaker: "student",
            english: "It is near gate number four.",
            portuguese: "É perto do portão número quatro."
      },
      {
            speaker: "native",
            english: "Is there a coffee shop here?",
            portuguese: "Tem uma cafeteria aqui?"
      },
      {
            speaker: "student",
            english: "Yes, there is one on the left.",
            portuguese: "Sim, tem uma à esquerda."
      },
      {
            speaker: "native",
            english: "Can I buy water there?",
            portuguese: "Posso comprar água lá?"
      },
      {
            speaker: "student",
            english: "Yes, you can.",
            portuguese: "Sim, você pode."
      },
      {
            speaker: "native",
            english: "What time is the flight?",
            portuguese: "A que horas é o voo?"
      },
      {
            speaker: "student",
            english: "It boards in twenty minutes.",
            portuguese: "Embarca em vinte minutos."
      }
],
            importantPhrases: [
      {
            pt: "Onde fica a loja duty-free?",
            en: "Where is the duty-free shop?"
      },
      {
            pt: "O voo foi cancelado.",
            en: "The flight was canceled."
      },
      {
            pt: "Preciso de uma cadeira de rodas.",
            en: "I need a wheelchair."
      },
      {
            pt: "Onde posso encontrar um carrinho?",
            en: "Where can I find a trolley?"
      },
      {
            pt: "Você tem bagagem de mão?",
            en: "Do you have a carry-on bag?"
      },
      {
            pt: "Onde é o banheiro mais próximo?",
            en: "Where is the nearest restroom?"
      }
],
        problems: [
      {
            descriptionPt: "Sua mala não apareceu na esteira de bagagens."
      },
      {
            descriptionPt: "Seu voo foi cancelado e você precisa saber o que fazer agora."
      }
],
    vocabulary: [
      { english: "Boarding pass", portuguese: "Cartão de embarque",
        sentenceA1: "Here is my boarding pass.",
        sentenceA2: "You can download your boarding pass on the airline app.",
        sentenceA1Pt: "Aqui está meu cartão de embarque.",
        sentenceA2Pt: "Você pode baixar o cartão de embarque no app da companhia."
      },
      { english: "Baggage claim", portuguese: "Esteira de bagagem",
        sentenceA1: "Where is baggage claim?",
        sentenceA2: "My suitcase was not at the baggage claim when I arrived.",
        sentenceA1Pt: "Onde é a esteira de bagagem?",
        sentenceA2Pt: "Minha mala não estava na esteira quando cheguei."
      },
      { english: "Gate", portuguese: "Portão",
        sentenceA1: "The gate is B5.",
        sentenceA2: "They changed the gate from A3 to B12 at the last minute.",
        sentenceA1Pt: "O portão é B5.",
        sentenceA2Pt: "Mudaram o portão de A3 para B12 no último minuto."
      },
      { english: "Flight", portuguese: "Voo",
        sentenceA1: "My flight is at 3 PM.",
        sentenceA2: "My connecting flight leaves in two hours from terminal C.",
        sentenceA1Pt: "Meu voo é às 15h.",
        sentenceA2Pt: "Meu voo de conexão sai em duas horas do terminal C."
      },
      { english: "Luggage / Suitcase", portuguese: "Mala / Bagagem",
        sentenceA1: "I have one suitcase.",
        sentenceA2: "I packed all my luggage last night to avoid rushing.",
        sentenceA1Pt: "Eu tenho uma mala.",
        sentenceA2Pt: "Fiz todas as malas ontem à noite para não correr."
      },
      { english: "Carry-on", portuguese: "Bagagem de mão",
        sentenceA1: "This is my carry-on.",
        sentenceA2: "You are only allowed one carry-on and one personal item.",
        sentenceA1Pt: "Esta é minha bagagem de mão.",
        sentenceA2Pt: "Só é permitida uma bagagem de mão e um item pessoal."
      },
      { english: "Security check", portuguese: "Segurança / Controle",
        sentenceA1: "Where is security check?",
        sentenceA2: "The security check line was very long this morning.",
        sentenceA1Pt: "Onde é a segurança?",
        sentenceA2Pt: "A fila da segurança estava muito longa hoje de manhã."
      },
      { english: "X-ray machine", portuguese: "Máquina de raio-X",
        sentenceA1: "Put your bag on the X-ray.",
        sentenceA2: "The officer asked me to send my laptop through the X-ray separately.",
        sentenceA1Pt: "Coloque a bolsa no raio-X.",
        sentenceA2Pt: "O agente pediu para passar meu notebook no raio-X separadamente."
      },
      { english: "Liquids", portuguese: "Líquidos",
        sentenceA1: "No liquids over 100ml.",
        sentenceA2: "All liquids must be in containers of 100ml or less.",
        sentenceA1Pt: "Sem líquidos acima de 100ml.",
        sentenceA2Pt: "Todos os líquidos devem estar em recipientes de 100ml ou menos."
      },
      { english: "Electronics", portuguese: "Eletrônicos",
        sentenceA1: "Remove your electronics.",
        sentenceA2: "Please take all large electronics out of your bag.",
        sentenceA1Pt: "Retire seus eletrônicos.",
        sentenceA2Pt: "Retire todos os eletrônicos grandes da sua bolsa."
      },
      { english: "Take off your shoes", portuguese: "Tirar os sapatos",
        sentenceA1: "Take off your shoes, please.",
        sentenceA2: "At some airports you need to take off your shoes at security.",
        sentenceA1Pt: "Tire seus sapatos, por favor.",
        sentenceA2Pt: "Em alguns aeroportos você precisa tirar os sapatos na segurança."
      },
      { english: "Belt", portuguese: "Cinto",
        sentenceA1: "Remove your belt.",
        sentenceA2: "I always forget to remove my belt and it sets off the alarm.",
        sentenceA1Pt: "Retire o cinto.",
        sentenceA2Pt: "Sempre esqueço de tirar meu cinto e ele dispara o alarme."
      },
      { english: "Overweight baggage", portuguese: "Excesso de peso",
        sentenceA1: "My bag is overweight.",
        sentenceA2: "They charged me fifty dollars for overweight baggage.",
        sentenceA1Pt: "Minha mala está com excesso de peso.",
        sentenceA2Pt: "Me cobraram cinquenta dólares por excesso de bagagem."
      },
      { english: "Delayed", portuguese: "Atrasado",
        sentenceA1: "My flight is delayed.",
        sentenceA2: "The flight was delayed by three hours due to bad weather.",
        sentenceA1Pt: "Meu voo está atrasado.",
        sentenceA2Pt: "O voo atrasou três horas por causa do mau tempo."
      },
      { english: "On time", portuguese: "No horário / Pontual",
        sentenceA1: "The flight is on time.",
        sentenceA2: "I checked the app and my flight is on time.",
        sentenceA1Pt: "O voo está no horário.",
        sentenceA2Pt: "Verifiquei o app e meu voo está no horário."
      },
      { english: "Aisle seat", portuguese: "Assento no corredor",
        sentenceA1: "I want an aisle seat.",
        sentenceA2: "Can I switch to an aisle seat? I need to get up frequently.",
        sentenceA1Pt: "Quero assento no corredor.",
        sentenceA2Pt: "Posso trocar para corredor? Preciso levantar frequentemente."
      },
      { english: "Window seat", portuguese: "Assento na janela",
        sentenceA1: "I prefer a window seat.",
        sentenceA2: "I always book a window seat to enjoy the view.",
        sentenceA1Pt: "Prefiro assento na janela.",
        sentenceA2Pt: "Sempre reservo janela para aproveitar a vista."
      },
      { english: "Customs declaration", portuguese: "Declaração de alfândega",
        sentenceA1: "Do I need a customs card?",
        sentenceA2: "You must complete a customs declaration form before exiting.",
        sentenceA1Pt: "Preciso de um cartão de alfândega?",
        sentenceA2Pt: "Você deve preencher um formulário de declaração de alfândega antes de sair."
      },
      { english: "Layover", portuguese: "Conexão / Escala",
        sentenceA1: "I have a three-hour layover.",
        sentenceA2: "Our layover in Atlanta is very short, so we have to run.",
        sentenceA1Pt: "Tenho uma escala de três horas.",
        sentenceA2Pt: "Nossa escala em Atlanta é muito curta, então temos que correr."
      },
      { english: "Terminal", portuguese: "Terminal",
        sentenceA1: "Which terminal is it?",
        sentenceA2: "International flights depart from Terminal 4 at this airport.",
        sentenceA1Pt: "Qual terminal é?",
        sentenceA2Pt: "Voos internacionais partem do Terminal 4 neste aeroporto."
      },
      { english: "Boarding group", portuguese: "Grupo de embarque",
        sentenceA1: "My boarding group is C.",
        sentenceA2: "Please wait until your boarding group is called by the gate agent.",
        sentenceA1Pt: "Meu grupo de embarque é C.",
        sentenceA2Pt: "Por favor, aguarde até que seu grupo de embarque seja chamado pelo agente do portão."
      },
      { english: "Duty-free shop", portuguese: "Loja franca / Duty-free",
        sentenceA1: "Where is the duty-free?",
        sentenceA2: "I bought some chocolate at the duty-free shop before boarding.",
        sentenceA1Pt: "Onde é o duty-free?",
        sentenceA2Pt: "Comprei chocolate na loja duty-free antes de embarcar."
      }
],
    culturalTips: [
      {
        title: "TSA Rules",
        titlePt: "Regras do TSA",
        content: "You must remove shoes, belts, and jackets at security. Liquids must be 3.4oz (100ml) or less in a clear bag.",
        contentPt: "Você deve remover sapatos, cintos e casacos na segurança. Líquidos devem ter 100ml ou menos em um saco transparente."
},
      {
        title: "Ground Transport",
        titlePt: "Transporte Terrestre",
        content: "Follow 'Ground Transportation' signs for Uber/Lyft or Taxis. Do not accept rides from people inside the terminal; use official areas.",
        contentPt: "Siga as placas de 'Ground Transportation' para Uber/Lyft ou Táxis. Não aceite caronas de pessoas dentro do terminal; use as áreas oficiais."
}
    ],
  reading: {
      textA1: 'Anna goes to the airport. She has a big bag. She looks for the check-in desk. The airport is very busy. There are many people. She finds the desk and gives her passport. The woman takes her bag. Anna gets her ticket. She goes to the security line. The line is long. She takes off her shoes. After security, she looks for her gate. Her gate is number 12. She walks to the gate and sits down. She waits for her plane. She is excited to fly.',
      textA1Pt: 'Anna vai ao aeroporto. Ela tem uma mala grande. Ela procura o balcão de check-in. O aeroporto está muito movimentado. Há muitas pessoas. Ela encontra o balcão e entrega seu passaporte. A mulher pega sua mala. Anna recebe sua passagem. Ela vai para a fila de segurança. A fila é longa. Ela tira os sapatos. Depois da segurança, ela procura seu portão. Seu portão é o número 12. Ela caminha até o portão e se senta. Ela espera pelo seu avião. Ela está animada para voar.',
      textA2: 'Anna arrived at the international airport early in the morning for her long-haul flight. The terminal was already packed with travelers rushing with their luggage. She quickly located her airline\'s check-in counter and waited in a short line. The friendly attendant weighed her heavy suitcase, checked her passport, and handed over her boarding pass. Next, she proceeded to the security checkpoint, which was surprisingly crowded. She had to take off her jacket and shoes and place her laptop in a separate bin. Once she finally cleared security, she checked the large departure board to find her gate number. Her flight was departing from Gate 45, which was on the other side of the terminal. She hurried through the duty-free shops and finally reached the waiting area with plenty of time to spare. Relieved, she grabbed a quick coffee and waited for the boarding announcement.',
      textA2Pt: 'Anna chegou ao aeroporto internacional de manhã cedo para o seu voo longo. O terminal já estava lotado de viajantes correndo com suas bagagens. Ela localizou rapidamente o balcão de check-in de sua companhia aérea e esperou em uma fila curta. O atendente amigável pesou sua mala pesada, verificou seu passaporte e entregou seu cartão de embarque. Em seguida, ela seguiu para o posto de segurança, que estava surpreendentemente cheio. Ela teve que tirar a jaqueta e os sapatos e colocar o laptop em uma bandeja separada. Assim que finalmente passou pela segurança, ela verificou o grande painel de partidas para encontrar o número do seu portão. Seu voo partiria do Portão 45, que ficava do outro lado do terminal. Ela se apressou pelas lojas duty-free e finalmente chegou à área de espera com tempo de sobra. Aliviada, ela pegou um café rápido e esperou pelo anúncio de embarque.',
      questionsA1: [
        { question: 'What is the main event in this text?', questionPt: 'Qual é o evento principal neste texto?', options: ['Anna is working at the airport', 'Anna is going through the airport steps to fly', 'Anna is lost in the city', 'Anna is buying a big bag'], correctIndex: 1 },
        { question: 'What does "busy" mean when talking about the airport?', questionPt: 'O que "busy" significa ao falar sobre o aeroporto?', options: ['It is closed', 'It is very quiet', 'It has many people', 'It is very small'], correctIndex: 2 },
        { question: 'Why does Anna take off her shoes?', questionPt: 'Por que Anna tira os sapatos?', options: ['Because she is tired', 'Because it is hot', 'Because it is a rule at the security line', 'Because she wants to sleep'], correctIndex: 2 },
        { question: 'What can we infer about Anna\'s feelings at the end?', questionPt: 'O que podemos inferir sobre os sentimentos de Anna no final?', options: ['She is angry', 'She is sad', 'She is ready and looking forward to her trip', 'She is hungry'], correctIndex: 2 }
      ],
      questionsA2: [
        { question: 'Why did Anna arrive early in the morning?', questionPt: 'Por que Anna chegou de manhã cedo?', options: ['To buy coffee', 'For her long-haul flight', 'To meet a friend', 'To work'], correctIndex: 1 },
        { question: 'What did the attendant do at the check-in counter?', questionPt: 'O que o atendente fez no balcão de check-in?', options: ['Gave her a free upgrade', 'Lost her bag', 'Weighed her suitcase and checked her passport', 'Ignored her'], correctIndex: 2 },
        { question: 'What did she have to place in a separate bin at security?', questionPt: 'O que ela teve que colocar em uma bandeja separada na segurança?', options: ['Her shoes only', 'Her phone', 'Her laptop', 'Her passport'], correctIndex: 2 },
        { question: 'What did she do after reaching the waiting area?', questionPt: 'O que ela fez depois de chegar à área de espera?', options: ['She grabbed a coffee', 'She went shopping', 'She called her mom', 'She fell asleep'], correctIndex: 0 }
]
},
            simulationTasks: [
      {
            promptPt: "[Atendente] \"Seu passaporte, por favor.\"",
            expectedEn: "Your passport, please."
      },
      {
            promptPt: "[Você] Você quer entregar o seu passaporte para o atendente",
            expectedEn: "Here is my passport."
      },
      {
            promptPt: "[Atendente] \"Quantas malas você vai despachar?\"",
            expectedEn: "How many bags are you checking in?"
      },
      {
            promptPt: "[Você] Você quer dizer que tem uma mala para despachar",
            expectedEn: "I have one bag to check."
      },
      {
            promptPt: "[Você] Você quer pedir um assento no corredor",
            expectedEn: "Can I get an aisle seat, please?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde é o portão de embarque",
            expectedEn: "Where is the boarding gate?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde é a esteira de retirada de bagagem",
            expectedEn: "Where is the baggage claim?"
      },
      {
            promptPt: "[Você] Você quer dizer que tem um voo de conexão",
            expectedEn: "I have a connecting flight."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Lose your passport",
            optionAPt: "Perder seu passaporte",
            optionBEn: "Miss your flight",
            optionBPt: "Perder seu voo"
      },
      {
            optionAEn: "Sit in the middle seat on a 12-hour flight",
            optionAPt: "Sentar no assento do meio em um voo de 12 horas",
            optionBEn: "Have a 12-hour layover in a boring airport",
            optionBPt: "Ter uma escala de 12 horas em um aeroporto chato"
      },
      {
            optionAEn: "Have your luggage lost forever",
            optionAPt: "Ter sua bagagem perdida para sempre",
            optionBEn: "Have your flight delayed by 24 hours",
            optionBPt: "Ter seu voo atrasado em 24 horas"
      },
      {
            optionAEn: "Sit next to a crying baby",
            optionAPt: "Sentar ao lado de um bebê chorando",
            optionBEn: "Sit next to someone who talks the whole time",
            optionBPt: "Sentar ao lado de alguém que fala o tempo todo"
      },
      {
            optionAEn: "Forget your headphones",
            optionAPt: "Esquecer seus fones de ouvido",
            optionBEn: "Forget your phone charger",
            optionBPt: "Esquecer o carregador do seu celular"
      },
      {
            optionAEn: "Arrive at the airport 5 hours early",
            optionAPt: "Chegar ao aeroporto 5 horas adiantado",
            optionBEn: "Arrive at the airport 5 minutes before the gate closes",
            optionBPt: "Chegar ao aeroporto 5 minutos antes do portão fechar"
      },
      {
            optionAEn: "Only travel with a small backpack",
            optionAPt: "Viajar apenas com uma mochila pequena",
            optionBEn: "Travel with three huge suitcases",
            optionBPt: "Viajar com três malas enormes"
      }
]
},
  {
    id: 'immigration',
    speakingQuestions: [
    {
        "question": "Have you ever traveled to a foreign country? Which one?",
        "questionPt": "Você já viajou para um país estrangeiro? Qual?",
        "hintA1": "Yes, I traveled to Argentina.",
        "hintA2": "Yes, I have been to a few countries in Europe and South America."
    },
    {
        "question": "What is the best country you have ever visited?",
        "questionPt": "Qual é o melhor país que você já visitou?",
        "hintA1": "The best country is Italy.",
        "hintA2": "I think Japan is the most amazing country I have visited because of the culture."
    },
    {
        "question": "If you could live in any country, where would you choose?",
        "questionPt": "Se você pudesse morar em qualquer país, qual escolheria?",
        "hintA1": "I want to live in the USA.",
        "hintA2": "I would love to live in Canada because it's very safe and beautiful."
    }
,
    {
        "question": "Why did you choose to visit this country?",
        "questionPt": "Por que você escolheu visitar este país?",
        "hintA1": "Because it is very beautiful.",
        "hintA2": "I wanted to visit the famous museums and try the local food."
    },
    {
        "question": "Where do you plan to stay during your trip?",
        "questionPt": "Onde você planeja ficar durante a viagem?",
        "hintA1": "I plan to stay in a hotel.",
        "hintA2": "I booked a hotel downtown for the first week and then I move to an Airbnb."
    },
    {
        "question": "Did you apply for your visa online?",
        "questionPt": "Você solicitou o seu visto online?",
        "hintA1": "Yes, I applied online.",
        "hintA2": "Yes, I filled out all the forms on the website and it was quite simple."
    },
    {
        "question": "What do you do for a living in your country?",
        "questionPt": "O que você faz profissionalmente no seu país?",
        "hintA1": "I am a teacher.",
        "hintA2": "I work as a marketing manager for a technology company in São Paulo."
    },
    {
        "question": "Did you bring any food in your luggage?",
        "questionPt": "Você trouxe alguma comida na sua bagagem?",
        "hintA1": "No, I did not bring food.",
        "hintA2": "No, I only packed clothes and personal items because food is not allowed."
    }
    ],
    title: 'Immigration & Customs',
    titlePt: 'Imigração e Alfândega',
    description: 'Master passport control questions, state your purpose of travel, and pass customs smoothly.',
    descriptionPt: 'Domine perguntas do controle de passaportes, explique seu motivo de viagem e passe pela alfândega.',
    icon: '🛂',
    color: 'blue',
    imagePath: '/images/immigration_scene.png',
    dialogues: [
      { speaker: 'native', english: "Good morning. Please step forward. Passport and customs declaration, please.", portuguese: "Bom dia. Dê um passo à frente. Passaporte e declaração da alfândega, por favor." },
      { speaker: 'student', english: "Good morning. Here you go.", portuguese: "Bom dia. Aqui estão." },
      { speaker: 'native', english: "Thank you. What is the main purpose of your visit to the United States?", portuguese: "Obrigado. Qual é o propósito principal da sua visita aos Estados Unidos?" },
      { speaker: 'student', english: "I'm here purely on vacation. I want to do some sightseeing.", portuguese: "Estou aqui puramente de férias. Quero fazer passeios turísticos." },
      { speaker: 'native', english: "How long will you be staying in the country?", portuguese: "Quanto tempo você vai ficar no país?" },
      { speaker: 'student', english: "I will be here for exactly two weeks. My return flight is on the 15th.", portuguese: "Estarei aqui por exatamente duas semanas. Meu voo de volta é no dia 15." },
      { speaker: 'native', english: "Where will you be staying during your trip?", portuguese: "Onde você vai ficar durante a sua viagem?" },
      { speaker: 'student', english: "I booked a room at the Central Hotel in Manhattan. Here is the confirmation.", portuguese: "Eu reservei um quarto no Central Hotel em Manhattan. Aqui está a confirmação." },
      { speaker: 'native', english: "That won't be necessary right now. Are you traveling alone or with someone?", portuguese: "Não será necessário agora. Você está viajando sozinho ou com alguém?" },
      { speaker: 'student', english: "I'm traveling by myself.", portuguese: "Estou viajando sozinho." },
      { speaker: 'native', english: "Do you have any family or friends living in the US?", portuguese: "Você tem família ou amigos morando nos EUA?" },
      { speaker: 'student', english: "No, I don't know anyone here.", portuguese: "Não, eu não conheço ninguém aqui." },
      { speaker: 'native', english: "How much currency are you bringing with you?", portuguese: "Quanta moeda você está trazendo com você?" },
      { speaker: 'student', english: "I have about one thousand dollars in cash, and my credit cards.", portuguese: "Tenho cerca de mil dólares em dinheiro, e meus cartões de crédito." },
      { speaker: 'native', english: "Are you bringing any food, plants, or agricultural products?", portuguese: "Você está trazendo alguma comida, plantas ou produtos agrícolas?" },
      { speaker: 'student', english: "Just some chocolate and a bag of coffee in my suitcase.", portuguese: "Apenas um pouco de chocolate e um pacote de café na minha mala." },
      { speaker: 'native', english: "That's fine. Please look at the camera and place your right hand on the scanner.", portuguese: "Está bem. Por favor, olhe para a câmera e coloque sua mão direita no scanner." },
      { speaker: 'student', english: "Like this?", portuguese: "Assim?" },
      { speaker: 'native', english: "Yes. Alright, you're all set. Welcome to the United States. Enjoy your trip!", portuguese: "Sim. Certo, tudo pronto. Bem-vindo aos Estados Unidos. Aproveite sua viagem!" },
      { speaker: 'student', english: "Thank you very much! Have a good day.", portuguese: "Muito obrigado! Tenha um bom dia." }
],
    dialoguesBeginner: [
      { speaker: 'native', english: "Passport, please.", portuguese: "Passaporte, por favor." },
      { speaker: 'student', english: "Here it is.", portuguese: "Aqui está." },
      { speaker: 'native', english: "Why are you here?", portuguese: "Por que você está aqui?" },
      { speaker: 'student', english: "I am on vacation.", portuguese: "Estou de férias." },
      { speaker: 'native', english: "How long will you stay?", portuguese: "Quanto tempo você vai ficar?" },
      { speaker: 'student', english: "I will stay for 10 days.", portuguese: "Vou ficar por 10 dias." },
      { speaker: 'native', english: "Where is your hotel?", portuguese: "Onde é seu hotel?" },
      { speaker: 'student', english: "It is in Manhattan.", portuguese: "É em Manhattan." },
      { speaker: 'native', english: "Are you alone?", portuguese: "Você está sozinho(a)?" },
      { speaker: 'student', english: "Yes, I am alone.", portuguese: "Sim, estou sozinho(a)." },
      { speaker: 'native', english: "Welcome to the US!", portuguese: "Bem-vindo aos EUA!" },
      { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Where are you staying?",
            portuguese: "Onde você vai ficar?"
      },
      {
            speaker: "student",
            english: "I am staying at a hotel downtown.",
            portuguese: "Eu vou ficar em um hotel no centro."
      },
      {
            speaker: "native",
            english: "Do you have a return ticket?",
            portuguese: "Você tem uma passagem de volta?"
      },
      {
            speaker: "student",
            english: "Yes, I have it right here.",
            portuguese: "Sim, eu tenho bem aqui."
      },
      {
            speaker: "native",
            english: "How much money do you have?",
            portuguese: "Quanto dinheiro você tem?"
      },
      {
            speaker: "student",
            english: "I have one thousand dollars.",
            portuguese: "Eu tenho mil dólares."
      },
      {
            speaker: "native",
            english: "Okay, everything is fine. Welcome.",
            portuguese: "Ok, está tudo bem. Bem-vindo."
      },
      {
            speaker: "student",
            english: "Thank you. Have a nice day.",
            portuguese: "Obrigado. Tenha um bom dia."
      }
],
            importantPhrases: [
      {
            pt: "Viajo sozinho.",
            en: "I travel alone."
      },
      {
            pt: "Tenho passagem de volta.",
            en: "I have a return ticket."
      },
      {
            pt: "Não tenho nada a declarar.",
            en: "I have nothing to declare."
      },
      {
            pt: "Este é meu primeiro visto.",
            en: "This is my first visa."
      },
      {
            pt: "Visito amigos e família.",
            en: "I visit friends and family."
      },
      {
            pt: "Minha ocupação é estudante.",
            en: "My occupation is student."
      }
],
        problems: [
      {
            descriptionPt: "O oficial de imigração diz que não encontra sua reserva de hotel."
      },
      {
            descriptionPt: "Eles pedem para ver sua passagem de volta, mas você não tem ela impressa."
      }
],
    vocabulary: [
      { english: "Passport", portuguese: "Passaporte",
        sentenceA1: "Here is my passport.",
        sentenceA2: "My passport is valid for another three years.",
        sentenceA1Pt: "Aqui está meu passaporte.",
        sentenceA2Pt: "Meu passaporte é válido por mais três anos."
      },
      { english: "Customs", portuguese: "Alfândega",
        sentenceA1: "Where is customs?",
        sentenceA2: "I declared two bottles of wine at customs.",
        sentenceA1Pt: "Onde é a alfândega?",
        sentenceA2Pt: "Declarei duas garrafas de vinho na alfândega."
      },
      { english: "Arrival", portuguese: "Chegada",
        sentenceA1: "My arrival is today.",
        sentenceA2: "The arrival terminal is on the first floor.",
        sentenceA1Pt: "Minha chegada é hoje.",
        sentenceA2Pt: "O terminal de chegada é no primeiro andar."
      },
      { english: "Departure", portuguese: "Partida",
        sentenceA1: "My departure is Friday.",
        sentenceA2: "The departure lounge has free Wi-Fi.",
        sentenceA1Pt: "Minha partida é sexta.",
        sentenceA2Pt: "A sala de embarque tem Wi-Fi gratuito."
      },
      { english: "Purpose of visit", portuguese: "Motivo da visita",
        sentenceA1: "I am here for tourism.",
        sentenceA2: "The purpose of my visit is to attend a conference.",
        sentenceA1Pt: "Estou aqui para turismo.",
        sentenceA2Pt: "O propósito da minha visita é participar de uma conferência."
      },
      { english: "Duration of stay", portuguese: "Duração da estadia",
        sentenceA1: "I will stay two weeks.",
        sentenceA2: "The duration of my stay is approximately fifteen days.",
        sentenceA1Pt: "Vou ficar duas semanas.",
        sentenceA2Pt: "A duração da minha estadia é de aproximadamente quinze dias."
      },
      { english: "Currency", portuguese: "Moeda / Dinheiro",
        sentenceA1: "I need to exchange currency.",
        sentenceA2: "What is the best place to exchange currency near the hotel?",
        sentenceA1Pt: "Preciso trocar moeda.",
        sentenceA2Pt: "Qual é o melhor lugar para trocar moeda perto do hotel?"
      },
      { english: "Customs declaration", portuguese: "Declaração alfandegária",
        sentenceA1: "I filled out the form.",
        sentenceA2: "Do I need a customs declaration for personal electronics?",
        sentenceA1Pt: "Preenchi o formulário.",
        sentenceA2Pt: "Preciso de declaração alfandegária para eletrônicos pessoais?"
      },
      { english: "Immigration officer", portuguese: "Oficial de imigração",
        sentenceA1: "The officer checked my passport.",
        sentenceA2: "The immigration officer asked me several questions about my trip.",
        sentenceA1Pt: "O oficial verificou meu passaporte.",
        sentenceA2Pt: "O oficial de imigração me fez várias perguntas sobre minha viagem."
      },
      { english: "Tourist visa", portuguese: "Visto de turista",
        sentenceA1: "I have a tourist visa.",
        sentenceA2: "My tourist visa allows me to stay for up to ninety days.",
        sentenceA1Pt: "Tenho um visto de turista.",
        sentenceA2Pt: "Meu visto de turista permite ficar por até noventa dias."
      },
      { english: "Return ticket", portuguese: "Passagem de volta",
        sentenceA1: "Here is my return ticket.",
        sentenceA2: "The officer asked to see my return ticket.",
        sentenceA1Pt: "Aqui está minha passagem de volta.",
        sentenceA2Pt: "O oficial pediu para ver minha passagem de volta."
      },
      { english: "Fingerprint scanner", portuguese: "Scanner de digital",
        sentenceA1: "Place your finger here.",
        sentenceA2: "The fingerprint scanner did not recognize my print at first.",
        sentenceA1Pt: "Coloque o dedo aqui.",
        sentenceA2Pt: "O scanner não reconheceu minha digital de primeira."
      },
      { english: "Declaring goods", portuguese: "Declaração de mercadorias",
        sentenceA1: "Do I need to declare this?",
        sentenceA2: "You have to go to the red channel if you are declaring goods.",
        sentenceA1Pt: "Preciso declarar isso?",
        sentenceA2Pt: "Você tem que ir para o canal vermelho se estiver declarando mercadorias."
      },
      { english: "Business trip", portuguese: "Viagem de negócios",
        sentenceA1: "I am on a business trip.",
        sentenceA2: "During my business trip, I have to visit three major clients.",
        sentenceA1Pt: "Estou em viagem de negócios.",
        sentenceA2Pt: "Durante minha viagem de negócios, tenho que visitar três clientes importantes."
      },
      { english: "Green card", portuguese: "Residência permanente",
        sentenceA1: "He has a green card.",
        sentenceA2: "She applied for a green card after working in the US for five years.",
        sentenceA1Pt: "Ele tem green card.",
        sentenceA2Pt: "Ela solicitou residência permanente após trabalhar nos EUA por cinco anos."
      },
      { english: "Landed", portuguese: "Pousou / Aterrissou",
        sentenceA1: "The plane landed.",
        sentenceA2: "We landed safely at JFK Airport despite the heavy wind.",
        sentenceA1Pt: "O avião pousou.",
        sentenceA2Pt: "Pousamos em segurança no aeroporto JFK apesar do vento forte."
      },
      { english: "Luggage inspection", portuguese: "Inspeção de bagagem",
        sentenceA1: "They did an inspection.",
        sentenceA2: "I had to open my suitcase for a random luggage inspection at customs.",
        sentenceA1Pt: "Eles fizeram uma inspeção.",
        sentenceA2Pt: "Tive que abrir minha mala para uma inspeção de bagagem aleatória na alfândega."
      }
],
    culturalTips: [
      {
        title: "Immigration Interview",
        titlePt: "Entrevista de Imigração",
        content: "Be direct and honest with officers. Have your return ticket and hotel address ready. They may ask about your job in Brazil.",
        contentPt: "Seja direto e honesto com os oficiais. Tenha seu bilhete de volta e endereço do hotel prontos. Podem perguntar sobre seu trabalho no Brasil."
},
      {
        title: "Customs Declarations",
        titlePt: "Declaração de Bens",
        content: "Always declare fresh food, plants, or cash amounts over $10,000. Failure to declare can result in heavy fines or seizure of items.",
        contentPt: "Sempre declare alimentos frescos, plantas ou valores em espécie acima de $10.000. A não declaração pode resultar em multas pesadas ou apreensão."
}
    ],
  reading: {
      textA1: 'Carlos arrives at the airport in the United States. He goes to the immigration line. The line is very long. He waits for 30 minutes. The officer asks for his passport. Carlos gives him the passport. The officer asks where he is from. Carlos says he is from Brazil. The officer asks how long he will stay. Carlos says two weeks. The officer asks where he will stay. Carlos says at a hotel in Manhattan. The officer asks if he has a return ticket. Carlos says yes and shows his ticket. The officer stamps his passport. Carlos is very happy. He can now enter the country. He picks up his bags and walks to the exit.',
      textA1Pt: 'Carlos chega ao aeroporto nos Estados Unidos. Ele vai para a fila de imigração. A fila é muito longa. Ele espera por 30 minutos. O oficial pede seu passaporte. Carlos entrega o passaporte. O oficial pergunta de onde ele é. Carlos diz que é do Brasil. O oficial pergunta quanto tempo ele ficará. Carlos diz duas semanas. O oficial pergunta onde ele ficará. Carlos diz num hotel em Manhattan. O oficial pergunta se ele tem passagem de volta. Carlos diz que sim e mostra a passagem. O oficial carimba seu passaporte. Carlos está muito feliz. Ele agora pode entrar no país. Ele pega suas malas e caminha para a saída.',
      textA2: 'Going through immigration in the United States can be an intimidating experience, especially for first-time visitors who are not fluent in English. Carlos, a 32-year-old architect from Curitiba, had heard many stories about strict immigration officers, so he made sure to have all his documents organized before landing at JFK Airport. When he reached the immigration counter after a 40-minute wait, the officer greeted him with a neutral expression and began the standard questions. He asked Carlos the purpose of his visit, to which Carlos replied that he was on vacation and planned to visit several cities on the East Coast. The officer then asked about his accommodation, and Carlos showed his hotel reservation confirmation on his phone. Next came the question about his financial means: how much money was he bringing into the country? Carlos explained that he had $3,000 in his bank account and a credit card with a sufficient limit. The officer also wanted to know if Carlos had any food items or agricultural products in his luggage, as these are strictly regulated. After reviewing all the documents, the officer finally stamped his passport with a 90-day tourist visa and wished him a pleasant stay.',
      textA2Pt: 'Passar pela imigração nos Estados Unidos pode ser uma experiência intimidante, especialmente para visitantes de primeira viagem que não são fluentes em inglês. Carlos, um arquiteto de 32 anos de Curitiba, tinha ouvido muitas histórias sobre oficiais de imigração rigorosos, então ele se certificou de ter todos os documentos organizados antes de pousar no Aeroporto JFK. Quando chegou ao balcão de imigração após uma espera de 40 minutos, o oficial o cumprimentou com uma expressão neutra e começou as perguntas padrão. Ele perguntou a Carlos o motivo de sua visita, ao que Carlos respondeu que estava de férias e planejava visitar várias cidades na Costa Leste. O oficial então perguntou sobre sua acomodação, e Carlos mostrou a confirmação da reserva do hotel no celular. Em seguida veio a pergunta sobre seus meios financeiros: quanto dinheiro ele estava trazendo para o país? Carlos explicou que tinha $3.000 em sua conta bancária e um cartão de crédito com limite suficiente. O oficial também quis saber se Carlos tinha algum item alimentar ou produto agrícola em sua bagagem, pois estes são rigorosamente regulamentados. Após revisar todos os documentos, o oficial finalmente carimbou seu passaporte com um visto de turista de 90 dias e desejou-lhe uma estadia agradável.',
      questionsA1: [
        { question: 'What is the main purpose of this text?', questionPt: 'Qual é o propósito principal deste texto?', options: ['To show how Carlos buys tickets', 'To describe Carlos\'s interview at immigration', 'To teach how to speak Portuguese', 'To talk about Carlos\'s hotel'], correctIndex: 1 },
        { question: 'What does "stamps his passport" mean here?', questionPt: 'O que significa "stamps his passport" aqui?', options: ['The officer breaks the passport', 'The officer puts an official mark of approval', 'The officer reads the passport aloud', 'The officer throws the passport away'], correctIndex: 1 },
        { question: 'Why does the officer ask so many questions?', questionPt: 'Por que o oficial faz tantas perguntas?', options: ['To know if Carlos can enter the country safely', 'Because he is Carlos\'s friend', 'Because he wants to go to Brazil', 'Because he is bored'], correctIndex: 0 },
        { question: 'How do Carlos\'s feelings change during the text?', questionPt: 'Como os sentimentos de Carlos mudam durante o texto?', options: ['From happy to angry', 'From tired to sad', 'From waiting patiently to very happy', 'From excited to sick'], correctIndex: 2 }
      ],
      questionsA2: [
        { question: 'What is Carlos\'s profession?', questionPt: 'Qual é a profissão de Carlos?', options: ['Teacher', 'Engineer', 'Architect', 'Doctor'], correctIndex: 2 },
        { question: 'How much money did Carlos have in his bank account?', questionPt: 'Quanto dinheiro Carlos tinha na conta?', options: ['$1,000', '$2,000', '$3,000', '$5,000'], correctIndex: 2 },
        { question: 'What kind of visa did Carlos receive?', questionPt: 'Que tipo de visto Carlos recebeu?', options: ['Student visa', 'Work visa', '90-day tourist visa', 'Permanent resident'], correctIndex: 2 },
        { question: 'What items are strictly regulated at immigration?', questionPt: 'Quais itens são rigorosamente regulamentados na imigração?', options: ['Electronics', 'Clothes', 'Food and agricultural products', 'Books'], correctIndex: 2 }
]
},
        simulationTasks: [
      {
            promptPt: "[Oficial] \"Passaporte e passagem, por favor.\"",
            expectedEn: "Passport and ticket, please."
      },
      {
            promptPt: "[Você] Você quer entregar o seu passaporte para o oficial",
            expectedEn: "Here is my passport."
      },
      {
            promptPt: "[Oficial] \"Qual é o motivo da sua viagem?\"",
            expectedEn: "What is the purpose of your visit?"
      },
      {
            promptPt: "[Você] Você quer dizer que está viajando a turismo",
            expectedEn: "I am here on vacation."
      },
      {
            promptPt: "[Oficial] \"Quanto tempo você vai ficar?\"",
            expectedEn: "How long will you be staying?"
      },
      {
            promptPt: "[Você] Você quer dizer que vai ficar por 10 dias",
            expectedEn: "I will stay for ten days."
      },
      {
            promptPt: "[Oficial] \"Onde você vai se hospedar?\"",
            expectedEn: "Where will you be staying?"
      },
      {
            promptPt: "[Você] Você quer dizer que vai se hospedar em um hotel",
            expectedEn: "I am staying at a hotel."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Get questioned for 2 hours at immigration",
            optionAPt: "Ser interrogado por 2 horas na imigração",
            optionBEn: "Get your bags fully searched by customs",
            optionBPt: "Ter suas malas totalmente revistadas pela alfândega"
      },
      {
            optionAEn: "Forget the name of your hotel when asked",
            optionAPt: "Esquecer o nome do seu hotel quando perguntado",
            optionBEn: "Forget the address of where you are staying",
            optionBPt: "Esquecer o endereço de onde você vai ficar"
      },
      {
            optionAEn: "Have an unfriendly immigration officer",
            optionAPt: "Pegar um oficial de imigração antipático",
            optionBEn: "Wait in the immigration line for 3 hours",
            optionBPt: "Esperar na fila de imigração por 3 horas"
      },
      {
            optionAEn: "Accidentally say you are traveling for work instead of tourism",
            optionAPt: "Dizer sem querer que está viajando a trabalho em vez de turismo",
            optionBEn: "Accidentally say you plan to stay forever",
            optionBPt: "Dizer sem querer que planeja ficar para sempre"
      },
      {
            optionAEn: "Not speak English and rely on gestures",
            optionAPt: "Não falar inglês e depender de gestos",
            optionBEn: "Use a translation app that gives weird answers",
            optionBPt: "Usar um app de tradução que dá respostas estranhas"
      },
      {
            optionAEn: "Have an expired visa",
            optionAPt: "Estar com o visto expirado",
            optionBEn: "Have a passport that is falling apart",
            optionBPt: "Estar com o passaporte caindo aos pedaços"
      },
      {
            optionAEn: "Smile too much at the officer",
            optionAPt: "Sorrir demais para o oficial",
            optionBEn: "Look incredibly nervous and suspicious",
            optionBPt: "Parecer incrivelmente nervoso e suspeito"
      }
]
},
  {
    id: 'hotel',
    speakingQuestions: [
    {
        "question": "Do you prefer staying in hotels or renting Airbnbs?",
        "questionPt": "Você prefere ficar em hotéis ou alugar Airbnbs?",
        "hintA1": "I prefer hotels. It is easy.",
        "hintA2": "I usually prefer Airbnb because it feels more like home and has a kitchen."
    },
    {
        "question": "What is the most important thing for you in a hotel room?",
        "questionPt": "Qual é a coisa mais importante para você em um quarto de hotel?",
        "hintA1": "A clean bed and good shower.",
        "hintA2": "For me, the most important things are a comfortable bed and fast Wi-Fi."
    },
    {
        "question": "Have you ever had a bad experience at a hotel?",
        "questionPt": "Você já teve uma experiência ruim em um hotel?",
        "hintA1": "No, never.",
        "hintA2": "Yes, once the room was very noisy and the air conditioning was broken."
    }
,
    {
        "question": "Did you make a reservation in advance?",
        "questionPt": "Você fez uma reserva com antecedência?",
        "hintA1": "Yes, I booked it online.",
        "hintA2": "Yes, I reserved the room two months ago on the hotel website."
    },
    {
        "question": "What time do you usually have breakfast at the hotel?",
        "questionPt": "A que horas você costuma tomar café da manhã no hotel?",
        "hintA1": "I eat breakfast at eight.",
        "hintA2": "I usually go down to the restaurant around 8:30 in the morning."
    },
    {
        "question": "Did you use the hotel pool yesterday?",
        "questionPt": "Você usou a piscina do hotel ontem?",
        "hintA1": "No, I did not have time.",
        "hintA2": "No, I was too busy exploring the city, but I plan to swim today."
    },
    {
        "question": "Does the room have a nice view?",
        "questionPt": "O quarto tem uma vista bonita?",
        "hintA1": "Yes, I can see the beach.",
        "hintA2": "Yes, it has an amazing view of the ocean and I love watching the sunset."
    },
    {
        "question": "When did you check into the hotel?",
        "questionPt": "Quando você fez o check-in no hotel?",
        "hintA1": "I checked in yesterday.",
        "hintA2": "I arrived and checked in yesterday afternoon around three o'clock."
    }
    ],
    title: 'Hotel Check-in',
    titlePt: 'Check-in no Hotel',
    description: 'Check into your room, ask about amenities, and handle reservations.',
    descriptionPt: 'Faça check-in, pergunte sobre comodidades e gerencie reservas.',
    icon: '🏨',
    color: 'lavender',
    imagePath: '/images/hotel_scene.png',
    dialogues: [
      { speaker: 'student', english: "Hello! I'd like to check in, please. I have a reservation.", portuguese: "Olá! Eu gostaria de fazer o check-in, por favor. Eu tenho uma reserva." },
      { speaker: 'native', english: "Welcome to the Grand Hotel! What name is the reservation under?", portuguese: "Bem-vindo ao Grand Hotel! Em nome de quem está a reserva?" },
      { speaker: 'student', english: "It's under Maria Silva. M-A-R-I-A.", portuguese: "Está no nome de Maria Silva. M-A-R-I-A." },
      { speaker: 'native', english: "Let me pull that up. Yes, I found it. A double room for three nights, correct?", portuguese: "Deixe-me procurar. Sim, encontrei. Um quarto duplo por três noites, correto?" },
      { speaker: 'student', english: "Yes, that's correct. I also requested a room with a view, if possible.", portuguese: "Sim, está correto. Eu também solicitei um quarto com vista, se possível." },
      { speaker: 'native', english: "Let me see... Yes, we have a room on the 12th floor facing the park. May I see your ID and credit card?", portuguese: "Deixe-me ver... Sim, temos um quarto no 12º andar de frente para o parque. Posso ver seu documento e cartão de crédito?" },
      { speaker: 'student', english: "Of course. Here is my passport and my card.", portuguese: "Claro. Aqui está meu passaporte e meu cartão." },
      { speaker: 'native', english: "Thank you. Just so you know, we hold a fifty-dollar deposit on the card for incidentals.", portuguese: "Obrigado. Só para você saber, nós retemos um depósito de cinquenta dólares no cartão para despesas extras." },
      { speaker: 'student', english: "That's fine. When will it be refunded?", portuguese: "Tudo bem. Quando será reembolsado?" },
      { speaker: 'native', english: "It will be released at check-out if there are no extra charges. Here is your key card.", portuguese: "Será liberado no check-out se não houver cobranças extras. Aqui está seu cartão-chave." },
      { speaker: 'student', english: "Thank you. Is breakfast included in my stay?", portuguese: "Obrigada. O café da manhã está incluído na minha estadia?" },
      { speaker: 'native', english: "Yes, complimentary breakfast is served from 7 to 10 AM in the restaurant downstairs.", portuguese: "Sim, o café da manhã cortesia é servido das 7 às 10 da manhã no restaurante no andar de baixo." },
      { speaker: 'student', english: "Do you have a gym or a pool here?", portuguese: "Vocês têm academia ou piscina aqui?" },
      { speaker: 'native', english: "We have a 24-hour fitness center on the second floor. The pool is currently closed for maintenance.", portuguese: "Temos um centro de ginástica 24 horas no segundo andar. A piscina está atualmente fechada para manutenção." },
      { speaker: 'student', english: "Got it. One last thing, what time is check-out?", portuguese: "Entendi. Uma última coisa, que horas é o check-out?" },
      { speaker: 'native', english: "Check-out is at 11 AM. Do you need help with your luggage?", portuguese: "O check-out é às 11 da manhã. Você precisa de ajuda com sua bagagem?" },
      { speaker: 'student', english: "No, I can manage. Thank you for your help!", portuguese: "Não, eu consigo levar. Obrigada pela sua ajuda!" },
      { speaker: 'native', english: "You're very welcome. Enjoy your stay, Maria!", portuguese: "De nada. Aproveite sua estadia, Maria!" }
],
    dialoguesBeginner: [
      { speaker: 'student', english: "Hello. I have a reservation.", portuguese: "Olá. Eu tenho uma reserva." },
      { speaker: 'native', english: "What is your name?", portuguese: "Qual é o seu nome?" },
      { speaker: 'student', english: "Maria Silva.", portuguese: "Maria Silva." },
      { speaker: 'native', english: "Welcome! Here is your key card.", portuguese: "Bem-vinda! Aqui está seu cartão-chave." },
      { speaker: 'student', english: "Is breakfast free?", portuguese: "O café da manhã é grátis?" },
      { speaker: 'native', english: "Yes, from 7 to 10 AM.", portuguese: "Sim, das 7 às 10 da manhã." },
      { speaker: 'student', english: "What time is check-out?", portuguese: "Que horas é o check-out?" },
      { speaker: 'native', english: "Check-out is at 11 AM.", portuguese: "O check-out é às 11 da manhã." },
      { speaker: 'student', english: "Thank you!", portuguese: "Obrigada!" }
,

      {
            speaker: "native",
            english: "What time is breakfast?",
            portuguese: "A que horas é o café da manhã?"
      },
      {
            speaker: "student",
            english: "Breakfast is from seven to ten in the morning.",
            portuguese: "O café da manhã é das sete às dez da manhã."
      },
      {
            speaker: "native",
            english: "Where is the restaurant?",
            portuguese: "Onde é o restaurante?"
      },
      {
            speaker: "student",
            english: "It is on the first floor.",
            portuguese: "É no primeiro andar."
      },
      {
            speaker: "native",
            english: "Is there a gym?",
            portuguese: "Tem uma academia?"
      },
      {
            speaker: "student",
            english: "Yes, the gym is on the second floor.",
            portuguese: "Sim, a academia é no segundo andar."
      },
      {
            speaker: "native",
            english: "Do you need any help with your bags?",
            portuguese: "Você precisa de ajuda com suas malas?"
      },
      {
            speaker: "student",
            english: "No, I am good. Thank you.",
            portuguese: "Não, estou bem. Obrigado."
      }
],
    dialogues2: [
      { speaker: 'student', english: "Good morning! I'd like to check out, please.", portuguese: "Bom dia! Eu gostaria de fazer o check-out, por favor." },
      { speaker: 'native', english: "Good morning! I hope you enjoyed your stay. What was your room number?", portuguese: "Bom dia! Espero que tenha gostado da sua estadia. Qual era o número do seu quarto?" },
      { speaker: 'student', english: "I was in room 1204. Everything was great, thank you.", portuguese: "Eu estava no quarto 1204. Tudo foi ótimo, obrigada." },
      { speaker: 'native', english: "I'm glad to hear that. Let me check your final bill. Did you have anything from the minibar last night?", portuguese: "Fico feliz em ouvir isso. Deixe-me verificar sua conta final. Você consumiu algo do frigobar ontem à noite?" },
      { speaker: 'student', english: "Just a bottle of water.", portuguese: "Apenas uma garrafa de água." },
      { speaker: 'native', english: "Okay. The total for your stay including the water is already paid via your credit card on file.", portuguese: "Ok. O total da sua estadia, incluindo a água, já foi pago através do cartão de crédito que temos registrado." },
      { speaker: 'student', english: "Perfect. Can I leave my luggage here for a few hours? My flight is in the afternoon.", portuguese: "Perfeito. Posso deixar minha bagagem aqui por algumas horas? Meu voo é à tarde." },
      { speaker: 'native', english: "Certainly! You can leave your bags with the bellhop in the lobby. Here is your claim tag.", portuguese: "Com certeza! Você pode deixar suas malas com o carregador no saguão. Aqui está sua etiqueta de retirada." },
      { speaker: 'student', english: "Thank you. And could you call a taxi for me in about two hours?", portuguese: "Obrigada. E você poderia chamar um táxi para mim em cerca de duas horas?" },
      { speaker: 'native', english: "Of course. Just come to the front desk when you're ready to leave.", portuguese: "Claro. É só vir à recepção quando estiver pronta para partir." },
      { speaker: 'student', english: "Thanks for everything! Goodbye.", portuguese: "Obrigada por tudo! Tchau." }
],
    dialoguesBeginner2: [
      { speaker: 'student', english: "Hello. I want to check out.", portuguese: "Olá. Eu quero fazer o check-out." },
      { speaker: 'native', english: "What is your room number?", portuguese: "Qual é o número do seu quarto?" },
      { speaker: 'student', english: "Room 1204.", portuguese: "Quarto 1204." },
      { speaker: 'native', english: "Did you use the minibar?", portuguese: "Você usou o frigobar?" },
      { speaker: 'student', english: "Yes, one water.", portuguese: "Sim, uma água." },
      { speaker: 'native', english: "Okay. Your bill is paid.", portuguese: "Ok. Sua conta está paga." },
      { speaker: 'student', english: "Can I leave my bags here?", portuguese: "Posso deixar minhas malas aqui?" },
      { speaker: 'native', english: "Yes. Give them to the bellhop.", portuguese: "Sim. Entregue-as ao carregador." },
      { speaker: 'student', english: "Thank you! Bye!", portuguese: "Obrigado! Tchau!" }
,

      {
            speaker: "native",
            english: "I need more towels, please.",
            portuguese: "Preciso de mais toalhas, por favor."
      },
      {
            speaker: "student",
            english: "Of course. How many towels do you need?",
            portuguese: "Claro. De quantas toalhas você precisa?"
      },
      {
            speaker: "native",
            english: "Two more towels.",
            portuguese: "Mais duas toalhas."
      },
      {
            speaker: "student",
            english: "We will send them right now.",
            portuguese: "Nós vamos enviá-las agora mesmo."
      },
      {
            speaker: "native",
            english: "Also, what is the Wi-Fi password?",
            portuguese: "Além disso, qual é a senha do Wi-Fi?"
      },
      {
            speaker: "student",
            english: "The password is hotel123.",
            portuguese: "A senha é hotel123."
      },
      {
            speaker: "native",
            english: "Thank you very much.",
            portuguese: "Muito obrigado."
      },
      {
            speaker: "student",
            english: "You are welcome. Have a good evening.",
            portuguese: "De nada. Tenha uma boa noite."
      }
],
            importantPhrases: [
      {
            pt: "Posso ter um travesseiro extra?",
            en: "Can I have an extra pillow?"
      },
      {
            pt: "O ar condicionado não funciona.",
            en: "The air conditioning does not work."
      },
      {
            pt: "Você pode chamar um táxi?",
            en: "Can you call a taxi?"
      },
      {
            pt: "Há uma academia no hotel?",
            en: "Is there a gym in the hotel?"
      },
      {
            pt: "Onde fica a piscina?",
            en: "Where is the pool?"
      },
      {
            pt: "Eu perdi a chave do quarto.",
            en: "I lost my room key."
      }
],
        problems: [
      {
            descriptionPt: "O ar condicionado do seu quarto está quebrado."
      },
      {
            descriptionPt: "Eles não encontram sua reserva no sistema."
      }
],
    vocabulary: [
      { english: "Parking", portuguese: "Estacionamento",
        sentenceA1: "Where is the parking?",
        sentenceA2: "The hotel offers free underground parking for all guests.",
        sentenceA1Pt: "Onde fica o estacionamento?",
        sentenceA2Pt: "O hotel oferece estacionamento subterrâneo gratuito para todos os hóspedes."
      },
      { english: "Bathroom", portuguese: "Banheiro",
        sentenceA1: "I need a bathroom.",
        sentenceA2: "The bathroom in our suite has a large bathtub and a shower.",
        sentenceA1Pt: "Preciso de um banheiro.",
        sentenceA2Pt: "O banheiro da nossa suíte tem uma banheira grande e um chuveiro."
      },
      { english: "Reservation", portuguese: "Reserva",
        sentenceA1: "I have a reservation.",
        sentenceA2: "I made a reservation online for a double room with breakfast.",
        sentenceA1Pt: "Tenho uma reserva.",
        sentenceA2Pt: "Fiz uma reserva online para quarto duplo com café da manhã."
      },
      { english: "Room key", portuguese: "Chave do quarto",
        sentenceA1: "I lost my room key.",
        sentenceA2: "The room key stopped working so I went to the front desk.",
        sentenceA1Pt: "Perdi a chave do quarto.",
        sentenceA2Pt: "A chave do quarto parou de funcionar e voltei à recepção."
      },
      { english: "Check-in", portuguese: "Entrada / Check-in",
        sentenceA1: "I want to check in.",
        sentenceA2: "What time is check-in? We arrived earlier than expected.",
        sentenceA1Pt: "Quero fazer o check-in.",
        sentenceA2Pt: "A que horas é o check-in? Chegamos mais cedo que o esperado."
      },
      { english: "Check-out", portuguese: "Saída / Check-out",
        sentenceA1: "I want to check out.",
        sentenceA2: "Can I get a late check-out until 2 PM?",
        sentenceA1Pt: "Quero fazer o check-out.",
        sentenceA2Pt: "Posso fazer check-out tardio até as 14h?"
      },
      { english: "Lobby", portuguese: "Saguão / Lobby",
        sentenceA1: "I will wait in the lobby.",
        sentenceA2: "The hotel lobby has beautiful decorations and comfortable sofas.",
        sentenceA1Pt: "Vou esperar no lobby.",
        sentenceA2Pt: "O lobby do hotel tem decorações bonitas e sofás confortáveis."
      },
      { english: "Elevator", portuguese: "Elevador",
        sentenceA1: "Where is the elevator?",
        sentenceA2: "The elevator is out of order so we need to take the stairs.",
        sentenceA1Pt: "Onde é o elevador?",
        sentenceA2Pt: "O elevador está fora de serviço e precisamos usar as escadas."
      },
      { english: "Single room", portuguese: "Quarto individual",
        sentenceA1: "I need a single room.",
        sentenceA2: "A single room with a queen bed and city view, please.",
        sentenceA1Pt: "Preciso de um quarto de solteiro.",
        sentenceA2Pt: "Um quarto com cama queen e vista para a cidade, por favor."
      },
      { english: "Towels", portuguese: "Toalhas",
        sentenceA1: "I need more towels.",
        sentenceA2: "Could you send extra towels to room 405?",
        sentenceA1Pt: "Preciso de mais toalhas.",
        sentenceA2Pt: "Poderia enviar toalhas extras para o quarto 405?"
      },
      { english: "Front desk", portuguese: "Recepção",
        sentenceA1: "Ask at the front desk.",
        sentenceA2: "The front desk is open twenty-four hours.",
        sentenceA1Pt: "Pergunte na recepção.",
        sentenceA2Pt: "A recepção fica aberta vinte e quatro horas."
      },
      { english: "Bellhop", portuguese: "Carregador",
        sentenceA1: "The bellhop carried my bags.",
        sentenceA2: "The bellhop helped us with our luggage and showed us the room.",
        sentenceA1Pt: "O carregador levou minhas malas.",
        sentenceA2Pt: "O carregador nos ajudou com a bagagem e nos levou ao quarto."
      },
      { english: "Housekeeping", portuguese: "Arrumação de quarto",
        sentenceA1: "Call housekeeping, please.",
        sentenceA2: "Housekeeping comes every morning to clean and make the bed.",
        sentenceA1Pt: "Chame a arrumação, por favor.",
        sentenceA2Pt: "A arrumação vem toda manhã para limpar e arrumar a cama."
      },
      { english: "Room service", portuguese: "Serviço de quarto",
        sentenceA1: "I want room service.",
        sentenceA2: "We ordered room service because we were too tired to go out.",
        sentenceA1Pt: "Quero serviço de quarto.",
        sentenceA2Pt: "Pedimos serviço de quarto porque estávamos cansados demais."
      },
      { english: "Deposit", portuguese: "Depósito / Caução",
        sentenceA1: "Is there a deposit?",
        sentenceA2: "The hotel requires a two hundred dollar deposit at check-in.",
        sentenceA1Pt: "Tem um depósito?",
        sentenceA2Pt: "O hotel exige um depósito de duzentos dólares no check-in."
      },
      { english: "Pillow", portuguese: "Travesseiro",
        sentenceA1: "I need an extra pillow.",
        sentenceA2: "Could you send a softer pillow to my room, please?",
        sentenceA1Pt: "Preciso de um travesseiro extra.",
        sentenceA2Pt: "Poderia enviar um travesseiro mais macio para o meu quarto, por favor?"
      },
      { english: "Blanket", portuguese: "Cobertor",
        sentenceA1: "It is cold. I need a blanket.",
        sentenceA2: "Is there an extra blanket in the closet?",
        sentenceA1Pt: "Está frio. Preciso de um cobertor.",
        sentenceA2Pt: "Tem um cobertor extra no armário?"
      },
      { english: "Swimming pool", portuguese: "Piscina",
        sentenceA1: "Where is the swimming pool?",
        sentenceA2: "The outdoor swimming pool is open from 8 AM to 10 PM.",
        sentenceA1Pt: "Onde fica a piscina?",
        sentenceA2Pt: "A piscina externa fica aberta das 8h às 22h."
      },
      { english: "Hair dryer", portuguese: "Secador de cabelo",
        sentenceA1: "Does the bathroom have a hair dryer?",
        sentenceA2: "The hair dryer in my room is not working properly.",
        sentenceA1Pt: "O banheiro tem secador de cabelo?",
        sentenceA2Pt: "O secador de cabelo do meu quarto não está funcionando direito."
      },
      { english: "Safe", portuguese: "Cofre",
        sentenceA1: "Where is the room safe?",
        sentenceA2: "You can keep your passport and valuables in the electronic safe.",
        sentenceA1Pt: "Onde fica o cofre do quarto?",
        sentenceA2Pt: "Você pode guardar seu passaporte e objetos de valor no cofre eletrônico."
      },
      { english: "Double room", portuguese: "Quarto de casal",
        sentenceA1: "I reserved a double room.",
        sentenceA2: "A double room with two twin beds is also available.",
        sentenceA1Pt: "Eu reservei um quarto de casal.",
        sentenceA2Pt: "Um quarto duplo com duas camas de solteiro também está disponível."
      },
      { english: "Luggage storage", portuguese: "Guarda-volumes",
        sentenceA1: "Can I leave my bags?",
        sentenceA2: "The hotel offers luggage storage for guests after check-out.",
        sentenceA1Pt: "Posso deixar minhas malas?",
        sentenceA2Pt: "O hotel oferece serviço de guarda-volumes para hóspedes após o check-out."
      },
      { english: "Wake-up call", portuguese: "Serviço de despertar",
        sentenceA1: "I need a wake-up call.",
        sentenceA2: "Could you schedule a wake-up call for me tomorrow at 6:30 AM?",
        sentenceA1Pt: "Preciso de um serviço de despertar.",
        sentenceA2Pt: "Você poderia programar para me despertarem amanhã às 6h30?"
      },
      { english: "Air conditioning", portuguese: "Ar condicionado",
        sentenceA1: "The AC is not cold.",
        sentenceA2: "Can you send someone to fix the air conditioning in my room?",
        sentenceA1Pt: "O ar condicionado não gela.",
        sentenceA2Pt: "Pode mandar alguém consertar o ar condicionado do meu quarto?"
      }
],
    culturalTips: [
      {
        title: "Resort Fees",
        titlePt: "Taxas de Resort",
        content: "Many hotels charge a mandatory 'Resort Fee' (Wi-Fi, pool) not included in the booking price. You pay it at check-out.",
        contentPt: "Muitos hotéis cobram uma 'Taxa de Resort' obrigatória (Wi-Fi, piscina) não incluída na reserva. Você paga no check-out."
},
      {
        title: "Hotel Tipping",
        titlePt: "Gorjetas no Hotel",
        content: "Tip the bellhop $1-2 per bag and leave $2-5 per night for housekeeping on the bedside table.",
        contentPt: "Dê gorjeta ao carregador de $1-2 por mala e deixe $2-5 por noite para a limpeza no criado-mudo."
},
      {
        title: "Valet Parking",
        titlePt: "Valet (Estacionamento)",
        content: "Valet parking is common in US hotels but expensive. Tip the valet driver $2-5 every time they bring your car.",
        contentPt: "Estacionamento com manobrista é comum, mas caro. Dê $2-5 de gorjeta toda vez que trouxerem seu carro."
}
    ],
  reading: {
      textA1: 'Tom arrives at the hotel. The hotel is very tall. He goes to the reception. He wants a room for two nights. The receptionist asks for his name. Tom gives his passport. The receptionist gives him a key card. His room is on the third floor. Tom takes the elevator. He finds his room. The room is very clean. It has a big bed and a TV. Tom puts his bag on the bed. He opens the window. He sees the city. He is very tired. He goes to sleep.',
      textA1Pt: 'Tom chega ao hotel. O hotel é muito alto. Ele vai para a recepção. Ele quer um quarto por duas noites. O recepcionista pergunta seu nome. Tom entrega seu passaporte. O recepcionista lhe dá um cartão-chave. Seu quarto fica no terceiro andar. Tom pega o elevador. Ele encontra seu quarto. O quarto é muito limpo. Tem uma cama grande e uma TV. Tom coloca sua mala na cama. Ele abre a janela. Ele vê a cidade. Ele está muito cansado. Ele vai dormir.',
      textA2: 'Tom arrived at the luxury resort after a long and exhausting drive. The lobby was beautifully decorated with modern art and a large chandelier. He approached the front desk to check in for his weekend stay. The receptionist warmly welcomed him, asked for his reservation details, and requested a credit card for incidentals. After a quick process, she handed him a digital key card and explained that his suite was located on the top floor with a panoramic ocean view. She also mentioned that breakfast was served from 7 to 10 AM in the main dining hall. Tom took the glass elevator up to the 15th floor and swiped his card to enter the room. The suite was breathtaking, featuring a king-size bed, a spacious balcony, and a complimentary minibar. He unpacked his suitcase, connected his phone to the free Wi-Fi, and stepped onto the balcony to enjoy the stunning sunset before ordering room service.',
      textA2Pt: 'Tom chegou ao resort de luxo após uma longa e cansativa viagem de carro. O saguão era lindamente decorado com arte moderna e um grande lustre. Ele se aproximou da recepção para fazer o check-in de sua estadia de fim de semana. A recepcionista o recebeu calorosamente, pediu os detalhes da sua reserva e solicitou um cartão de crédito para despesas imprevistas. Após um processo rápido, ela entregou-lhe um cartão-chave digital e explicou que sua suíte ficava no último andar com vista panorâmica para o oceano. Ela também mencionou que o café da manhã era servido das 7 às 10 da manhã no refeitório principal. Tom pegou o elevador de vidro até o 15º andar e passou o cartão para entrar no quarto. A suíte era de tirar o fôlego, com uma cama king-size, uma varanda espaçosa e um frigobar de cortesia. Ele desfez as malas, conectou seu telefone ao Wi-Fi gratuito e saiu para a varanda para apreciar o deslumbrante pôr do sol antes de pedir serviço de quarto.',
      questionsA1: [
        { question: 'What is the general idea of this text?', questionPt: 'Qual é a ideia geral deste texto?', options: ['Tom is checking out of a hotel', 'Tom is arriving and checking into his hotel room', 'Tom is buying a house in the city', 'Tom is sleeping on the street'], correctIndex: 1 },
        { question: 'What does "very tired" mean?', questionPt: 'O que significa "very tired"?', options: ['He has a lot of energy', 'He is hungry', 'He needs to rest or sleep', 'He is angry'], correctIndex: 2 },
        { question: 'Why does Tom give the receptionist his passport?', questionPt: 'Por que Tom entrega seu passaporte ao recepcionista?', options: ['To prove who he is for check-in', 'Because he wants to sell it', 'Because it is a rule in the city', 'Because the receptionist asked for money'], correctIndex: 0 },
        { question: 'What can we guess about the hotel?', questionPt: 'O que podemos adivinhar sobre o hotel?', options: ['It is very small and dirty', 'It is a nice place with an elevator and a city view', 'It has no beds', 'It is located in a forest'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'Why did the receptionist ask for a credit card?', questionPt: 'Por que a recepcionista pediu um cartão de crédito?', options: ['To pay for the room', 'For incidentals', 'To buy breakfast', 'To upgrade the room'], correctIndex: 1 },
        { question: 'Where is Tom\'s suite located?', questionPt: 'Onde fica a suíte de Tom?', options: ['On the ground floor', 'Near the dining hall', 'On the top floor', 'In the basement'], correctIndex: 2 },
        { question: 'What did Tom do immediately after entering the room?', questionPt: 'O que Tom fez imediatamente após entrar no quarto?', options: ['He ordered room service', 'He took a shower', 'He unpacked his suitcase', 'He went to sleep'], correctIndex: 2 },
        { question: 'What time is breakfast served?', questionPt: 'A que horas o café da manhã é servido?', options: ['6 to 9 AM', '7 to 10 AM', '8 to 11 AM', 'It is not served'], correctIndex: 1 }
]
},
            simulationTasks: [
      {
            promptPt: "[Recepcionista] \"Bom dia, como posso ajudar?\"",
            expectedEn: "Good morning, how can I help you?"
      },
      {
            promptPt: "[Você] Você quer dizer que tem uma reserva",
            expectedEn: "I have a reservation under the name [Name]."
      },
      {
            promptPt: "[Recepcionista] \"Posso ver sua identidade e cartão de crédito?\"",
            expectedEn: "Can I see your ID and credit card?"
      },
      {
            promptPt: "[Você] Você quer entregar o seu passaporte e cartão",
            expectedEn: "Here is my passport and card."
      },
      {
            promptPt: "[Você] Você quer perguntar a que horas é o café da manhã",
            expectedEn: "What time is breakfast?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde fica o elevador",
            expectedEn: "Where is the elevator?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde fica o estacionamento",
            expectedEn: "Where is the parking?"
      },
      {
            promptPt: "[Você] Você quer pedir a senha do Wi-Fi",
            expectedEn: "What is the Wi-Fi password?"
      },
      {
            promptPt: "[Você] Você quer pedir mais toalhas depois",
            expectedEn: "Could I get some extra towels, please?"
      },
      {
            promptPt: "[Você] Você quer perguntar a que horas é o check-out",
            expectedEn: "What time is check-out?"
      },
      {
            promptPt: "[Você] Você quer perguntar se pode deixar as malas no hotel após o check-out",
            expectedEn: "Can I leave my bags here?"
      },
      {
            promptPt: "[Você] Você quer confirmar se o café da manhã está incluso",
            expectedEn: "Is breakfast included?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Have a room with no windows",
            optionAPt: "Ter um quarto sem janelas",
            optionBEn: "Have a room next to a noisy elevator",
            optionBPt: "Ter um quarto perto de um elevador barulhento"
      },
      {
            optionAEn: "Sleep on a terrible bed but have amazing breakfast",
            optionAPt: "Dormir em uma cama terrível mas ter um café da manhã incrível",
            optionBEn: "Sleep on a great bed but have no breakfast",
            optionBPt: "Dormir em uma ótima cama mas não ter café da manhã"
      },
      {
            optionAEn: "Lose your room key twice in one day",
            optionAPt: "Perder a chave do quarto duas vezes em um dia",
            optionBEn: "Forget your room number",
            optionBPt: "Esquecer o número do seu quarto"
      },
      {
            optionAEn: "Have no Wi-Fi in the room",
            optionAPt: "Não ter Wi-Fi no quarto",
            optionBEn: "Have no hot water in the shower",
            optionBPt: "Não ter água quente no chuveiro"
      },
      {
            optionAEn: "Stay in a luxury hotel for 1 night",
            optionAPt: "Ficar em um hotel de luxo por 1 noite",
            optionBEn: "Stay in a basic hostel for 7 nights",
            optionBPt: "Ficar em um hostel básico por 7 noites"
      },
      {
            optionAEn: "Have housekeeping wake you up at 7 AM",
            optionAPt: "Ter a arrumação te acordando às 7 da manhã",
            optionBEn: "Have no housekeeping for your entire stay",
            optionBPt: "Não ter arrumação durante toda a sua estadia"
      },
      {
            optionAEn: "Order very expensive room service",
            optionAPt: "Pedir um serviço de quarto muito caro",
            optionBEn: "Walk 30 minutes in the rain to find food",
            optionBPt: "Caminhar 30 minutos na chuva para encontrar comida"
      }
]
},
  {
    id: 'restaurant',
    speakingQuestions: [
    {
        "question": "How often do you eat out at a restaurant?",
        "questionPt": "Com que frequência você come fora em um restaurante?",
        "hintA1": "I eat out once a week.",
        "hintA2": "I usually eat out on weekends when I want to relax with my friends."
    },
    {
        "question": "What is your favorite type of food?",
        "questionPt": "Qual é o seu tipo de comida favorito?",
        "hintA1": "I love Italian food and pizza.",
        "hintA2": "My favorite type of food is Japanese. I absolutely love sushi."
    },
    {
        "question": "Do you prefer cooking at home or ordering delivery?",
        "questionPt": "Você prefere cozinhar em casa ou pedir delivery?",
        "hintA1": "I prefer delivery. It is fast.",
        "hintA2": "I prefer cooking at home because it's much healthier and cheaper."
    }
,
    {
        "question": "Did you try any local food on your last trip?",
        "questionPt": "Você experimentou alguma comida local na sua última viagem?",
        "hintA1": "Yes, I tried the pasta.",
        "hintA2": "Yes, I went to a local market and tried their famous street tacos."
    },
    {
        "question": "Do you usually leave a tip at restaurants?",
        "questionPt": "Você costuma deixar gorjeta nos restaurantes?",
        "hintA1": "Yes, I always leave a tip.",
        "hintA2": "I usually leave about fifteen percent if the service is good."
    },
    {
        "question": "What did you eat for dinner last night?",
        "questionPt": "O que você comeu no jantar ontem à noite?",
        "hintA1": "I ate a big salad.",
        "hintA2": "I went to an Italian restaurant and had seafood risotto. It was delicious."
    },
    {
        "question": "Do you prefer eating at home or at a restaurant?",
        "questionPt": "Você prefere comer em casa ou no restaurante?",
        "hintA1": "I prefer eating at home.",
        "hintA2": "I like both, but I cook at home during the week and eat out on weekends."
    },
    {
        "question": "Did you book a table before coming here?",
        "questionPt": "Você reservou uma mesa antes de vir aqui?",
        "hintA1": "No, we just walked in.",
        "hintA2": "Yes, I called the restaurant this morning and reserved a table for four."
    }
    ],
    title: 'Ordering at a Restaurant',
    titlePt: 'Pedindo em um Restaurante',
    description: 'Order food, read menus, and ask for the check like a pro.',
    descriptionPt: 'Peça comida, leia cardápios e peça a conta como um profissional.',
    icon: '🍽️',
    color: 'peach',
    imagePath: '/images/restaurant_scene.png',
    dialogues: [
      { speaker: 'native', english: "Hi there! Welcome to The Grill. Table for how many?", portuguese: "Olá! Bem-vindo ao The Grill. Mesa para quantos?" },
      { speaker: 'student', english: "Table for two, please. Do you have a table by the window?", portuguese: "Mesa para dois, por favor. Você tem uma mesa perto da janela?" },
      { speaker: 'native', english: "Yes, right this way. Here are your menus. Can I start you off with something to drink?", portuguese: "Sim, por aqui. Aqui estão seus cardápios. Posso começar com algo para beber?" },
      { speaker: 'student', english: "I'll have a tap water with ice and lemon, please.", portuguese: "Eu vou querer água da torneira com gelo e limão, por favor." },
      { speaker: 'native', english: "Sure thing. I'll be right back with your water. Take your time to look at the menu.", portuguese: "Claro. Já volto com sua água. Fiquem à vontade para olhar o cardápio." },
      { speaker: 'native', english: "(A few minutes later) Are you ready to order, or do you need a few more minutes?", portuguese: "(Alguns minutos depois) Vocês estão prontos para pedir, ou precisam de mais alguns minutos?" },
      { speaker: 'student', english: "We are ready. I'd like the classic cheeseburger, please.", portuguese: "Nós estamos prontos. Eu gostaria do cheeseburger clássico, por favor." },
      { speaker: 'native', english: "How would you like your burger cooked?", portuguese: "Como você gostaria do ponto do seu hambúrguer?" },
      { speaker: 'student', english: "Medium-well, please.", portuguese: "Ao ponto para bem passado, por favor." },
      { speaker: 'native', english: "Would you like regular fries, sweet potato fries, or a side salad with that?", portuguese: "Você gostaria de batatas fritas normais, batatas doces fritas ou uma salada de acompanhamento com isso?" },
      { speaker: 'student', english: "Regular fries, please. Does the burger come with onions?", portuguese: "Batatas fritas normais, por favor. O hambúrguer vem com cebolas?" },
      { speaker: 'native', english: "Yes, it comes with red onions. Do you have any allergies?", portuguese: "Sim, vem com cebolas vermelhas. Você tem alguma alergia?" },
      { speaker: 'student', english: "No allergies, but can I have it without onions? And can I also get a vanilla milkshake?", portuguese: "Sem alergias, mas pode vir sem cebolas? E posso pedir um milkshake de baunilha também?" },
      { speaker: 'native', english: "No onions, and a vanilla milkshake. Got it! I'll put that order in right away.", portuguese: "Sem cebolas, e um milkshake de baunilha. Entendido! Vou enviar esse pedido agora mesmo." },
      { speaker: 'native', english: "(After the meal) How was everything? Did you enjoy the food?", portuguese: "(Após a refeição) Como estava tudo? Vocês gostaram da comida?" },
      { speaker: 'student', english: "It was delicious, thank you! But I couldn't finish it all. Can I get a box to go?", portuguese: "Estava delicioso, obrigado! Mas eu não consegui terminar tudo. Posso pegar uma caixa para viagem?" },
      { speaker: 'native', english: "Absolutely, I'll bring you a to-go box. Can I get you any dessert?", portuguese: "Com certeza, vou trazer uma caixa para viagem. Posso trazer alguma sobremesa?" },
      { speaker: 'student', english: "No, we are full. Just the check, please.", portuguese: "Não, estamos cheios. Apenas a conta, por favor." },
      { speaker: 'native', english: "I'll be right back with the check. No rush!", portuguese: "Já volto com a conta. Sem pressa!" }
],
    dialoguesBeginner: [
      { speaker: 'native', english: "Table for how many?", portuguese: "Mesa para quantos?" },
      { speaker: 'student', english: "Table for two, please.", portuguese: "Mesa para dois, por favor." },
      { speaker: 'native', english: "What do you want to drink?", portuguese: "O que você quer beber?" },
      { speaker: 'student', english: "Water, please.", portuguese: "Água, por favor." },
      { speaker: 'native', english: "Are you ready to order?", portuguese: "Você está pronto para pedir?" },
      { speaker: 'student', english: "I want a cheeseburger and fries.", portuguese: "Eu quero um cheeseburger e batatas fritas." },
      { speaker: 'native', english: "How was the food?", portuguese: "Como estava a comida?" },
      { speaker: 'student', english: "It was good! The check, please.", portuguese: "Estava boa! A conta, por favor." }
,

      {
            speaker: "native",
            english: "Can I have some more water, please?",
            portuguese: "Pode me dar mais um pouco de água, por favor?"
      },
      {
            speaker: "student",
            english: "Yes, I will bring it in a moment.",
            portuguese: "Sim, vou trazer em um momento."
      },
      {
            speaker: "native",
            english: "How is the food?",
            portuguese: "Como está a comida?"
      },
      {
            speaker: "student",
            english: "It is delicious. The chicken is very good.",
            portuguese: "Está deliciosa. O frango é muito bom."
      },
      {
            speaker: "native",
            english: "Do you want to see the dessert menu?",
            portuguese: "Você quer ver o menu de sobremesas?"
      },
      {
            speaker: "student",
            english: "No, thank you. Just the check, please.",
            portuguese: "Não, obrigado. Apenas a conta, por favor."
      },
      {
            speaker: "native",
            english: "How would you like to pay?",
            portuguese: "Como você gostaria de pagar?"
      },
      {
            speaker: "student",
            english: "I will pay with credit card.",
            portuguese: "Eu vou pagar com cartão de crédito."
      }
],
    dialogues2: [
      { speaker: 'native', english: "Good morning! Welcome to Sunshine Cafe. For here or to go?", portuguese: "Bom dia! Bem-vindo ao Sunshine Cafe. Para comer aqui ou para levar?" },
      { speaker: 'student', english: "Good morning! For here, please. Do you serve breakfast all day?", portuguese: "Bom dia! Para comer aqui, por favor. Vocês servem café da manhã o dia todo?" },
      { speaker: 'native', english: "Yes, we do. Our most popular dish is the eggs and bacon combo.", portuguese: "Sim, servimos. Nosso prato mais popular é o combo de ovos e bacon." },
      { speaker: 'student', english: "That sounds good. How are the eggs prepared?", portuguese: "Parece bom. Como os ovos são preparados?" },
      { speaker: 'native', english: "They can be scrambled, fried, or poached. It also comes with toast and jam.", portuguese: "Eles podem ser mexidos, fritos ou pochê. Também acompanha torrada e geleia." },
      { speaker: 'student', english: "I'll take the scrambled eggs, please. And can I get a large orange juice?", portuguese: "Vou querer os ovos mexidos, por favor. E pode me trazer um suco de laranja grande?" },
      { speaker: 'native', english: "Of course. Would you like to add some avocado or sausages to your plate?", portuguese: "Claro. Gostaria de adicionar abacate ou linguiças ao seu prato?" },
      { speaker: 'student', english: "Avocado, please. And can I have my toast extra crispy?", portuguese: "Abacate, por favor. E pode trazer minha torrada bem crocante?" },
      { speaker: 'native', english: "No problem at all. I'll bring your juice right away.", portuguese: "Sem problemas. Já trago o seu suco." },
      { speaker: 'student', english: "Thank you. Oh, do you have free Wi-Fi here?", portuguese: "Obrigado. Ah, vocês têm Wi-Fi gratuito aqui?" },
      { speaker: 'native', english: "Yes, the password is 'sunshine2024'.", portuguese: "Sim, a senha é 'sunshine2024'." }
],
    dialoguesBeginner2: [
      { speaker: 'native', english: "Good morning! For here or to go?", portuguese: "Bom dia! Para comer aqui ou para levar?" },
      { speaker: 'student', english: "For here, please. Do you have breakfast?", portuguese: "Para comer aqui, por favor. Vocês têm café da manhã?" },
      { speaker: 'native', english: "Yes. We have eggs, bacon, and toast.", portuguese: "Sim. Temos ovos, bacon e torrada." },
      { speaker: 'student', english: "I want scrambled eggs and toast, please.", portuguese: "Quero ovos mexidos e torrada, por favor." },
      { speaker: 'native', english: "Anything to drink?", portuguese: "Algo para beber?" },
      { speaker: 'student', english: "Orange juice, please.", portuguese: "Suco de laranja, por favor." },
      { speaker: 'native', english: "Okay. What is the Wi-Fi password?", portuguese: "Ok. Qual é a senha do Wi-Fi?" },
      { speaker: 'native', english: "It is 'sunshine2024'.", portuguese: "É 'sunshine2024'." },
      { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Are you ready to order?",
            portuguese: "Você está pronto para pedir?"
      },
      {
            speaker: "student",
            english: "Yes. I want the pizza, please.",
            portuguese: "Sim. Eu quero a pizza, por favor."
      },
      {
            speaker: "native",
            english: "Do you want a small or a large pizza?",
            portuguese: "Você quer uma pizza pequena ou grande?"
      },
      {
            speaker: "student",
            english: "A large pizza to share.",
            portuguese: "Uma pizza grande para dividir."
      },
      {
            speaker: "native",
            english: "Anything to drink?",
            portuguese: "Algo para beber?"
      },
      {
            speaker: "student",
            english: "Two sodas, please.",
            portuguese: "Dois refrigerantes, por favor."
      },
      {
            speaker: "native",
            english: "Your food will be ready soon.",
            portuguese: "Sua comida ficará pronta em breve."
      },
      {
            speaker: "student",
            english: "Okay. I am very hungry.",
            portuguese: "Ok. Eu estou com muita fome."
      }
],
            importantPhrases: [
      {
            pt: "Onde é o banheiro?",
            en: "Where is the bathroom?"
      },
      {
            pt: "A comida está fria.",
            en: "The food is cold."
      },
      {
            pt: "Tem opções vegetarianas?",
            en: "Are there vegetarian options?"
      },
      {
            pt: "Posso ter um copo de água?",
            en: "Can I have a glass of water?"
      },
      {
            pt: "Eu não pedi isso.",
            en: "I did not order this."
      },
      {
            pt: "O serviço foi excelente.",
            en: "The service was excellent."
      }
],
        problems: [
      {
            descriptionPt: "Sua comida veio fria."
      },
      {
            descriptionPt: "O seu pedido veio errado, não foi o prato que você pediu."
      }
],
    vocabulary: [
      { english: "Menu", portuguese: "Cardápio",
        sentenceA1: "Can I see the menu?",
        sentenceA2: "The menu has a great variety of local and international dishes.",
        sentenceA1Pt: "Posso ver o cardápio?",
        sentenceA2Pt: "O cardápio tem grande variedade de pratos locais e internacionais."
      },
      { english: "Appetizer", portuguese: "Entrada",
        sentenceA1: "I want an appetizer.",
        sentenceA2: "We ordered a cheese appetizer to share while we wait.",
        sentenceA1Pt: "Quero uma entrada.",
        sentenceA2Pt: "Pedimos uma entrada de queijo para dividir enquanto esperamos."
      },
      { english: "Main course", portuguese: "Prato principal",
        sentenceA1: "The main course is steak.",
        sentenceA2: "For my main course, I would like the grilled salmon.",
        sentenceA1Pt: "O prato principal é bife.",
        sentenceA2Pt: "Para o prato principal, gostaria do salmão grelhado."
      },
      { english: "Dessert", portuguese: "Sobremesa",
        sentenceA1: "I want a dessert.",
        sentenceA2: "The chocolate lava cake is the best dessert on the menu.",
        sentenceA1Pt: "Quero uma sobremesa.",
        sentenceA2Pt: "O petit gâteau de chocolate é a melhor sobremesa do cardápio."
      },
      { english: "Check / Bill", portuguese: "Conta",
        sentenceA1: "Can I have the check?",
        sentenceA2: "Could we have the check? We need to leave soon.",
        sentenceA1Pt: "Pode trazer a conta?",
        sentenceA2Pt: "Pode trazer a conta? Precisamos sair logo."
      },
      { english: "Tip", portuguese: "Gorjeta",
        sentenceA1: "I left a tip.",
        sentenceA2: "In the US it is common to leave a fifteen to twenty percent tip.",
        sentenceA1Pt: "Deixei gorjeta.",
        sentenceA2Pt: "Nos EUA é comum deixar gorjeta de quinze a vinte por cento."
      },
      { english: "Waiter", portuguese: "Garçom",
        sentenceA1: "The waiter is very nice.",
        sentenceA2: "The waiter recommended the fish and it was excellent.",
        sentenceA1Pt: "O garçom é muito gentil.",
        sentenceA2Pt: "O garçom recomendou o peixe e foi excelente."
      },
      { english: "To go", portuguese: "Para levar",
        sentenceA1: "I want this to go.",
        sentenceA2: "Can I get a box? I could not finish my meal.",
        sentenceA1Pt: "Quero isso para levar.",
        sentenceA2Pt: "Posso pegar uma caixa? Não consegui terminar a refeição."
      },
      { english: "Napkin", portuguese: "Guardanapo",
        sentenceA1: "I need a napkin.",
        sentenceA2: "Could you bring some extra napkins to our table?",
        sentenceA1Pt: "Preciso de um guardanapo.",
        sentenceA2Pt: "Poderia trazer guardanapos extras para nossa mesa?"
      },
      { english: "Fork", portuguese: "Garfo",
        sentenceA1: "I need a fork.",
        sentenceA2: "I dropped my fork. Could I have a clean one?",
        sentenceA1Pt: "Preciso de um garfo.",
        sentenceA2Pt: "Derrubei meu garfo. Poderia me dar um limpo?"
      },
      { english: "Knife", portuguese: "Faca",
        sentenceA1: "I need a knife.",
        sentenceA2: "This steak is tough. Do you have a sharper knife?",
        sentenceA1Pt: "Preciso de uma faca.",
        sentenceA2Pt: "Este bife está duro. Tem uma faca mais afiada?"
      },
      { english: "Spoon", portuguese: "Colher",
        sentenceA1: "I need a spoon.",
        sentenceA2: "She asked for a small spoon to stir her coffee.",
        sentenceA1Pt: "Preciso de uma colher.",
        sentenceA2Pt: "Ela pediu uma colher pequena para mexer o café."
      },
      { english: "Tap water", portuguese: "Água da torneira",
        sentenceA1: "Can I have tap water?",
        sentenceA2: "In many countries, tap water is safe to drink.",
        sentenceA1Pt: "Posso ter água da torneira?",
        sentenceA2Pt: "Em muitos países, a água da torneira é segura para beber."
      },
      { english: "Spicy", portuguese: "Apimentado",
        sentenceA1: "This is very spicy!",
        sentenceA2: "I love spicy food, but this dish is too hot for me.",
        sentenceA1Pt: "Isso é muito apimentado!",
        sentenceA2Pt: "Adoro comida apimentada, mas esse prato é demais para mim."
      },
      { english: "Vegetarian", portuguese: "Vegetariano",
        sentenceA1: "I am vegetarian.",
        sentenceA2: "Do you have any vegetarian options on the menu?",
        sentenceA1Pt: "Sou vegetariano(a).",
        sentenceA2Pt: "Vocês têm opções vegetarianas no cardápio?"
      },
      { english: "Allergy", portuguese: "Alergia",
        sentenceA1: "Tenho alergia a amendoim.",
        sentenceA2: "Por favor, avise o chef sobre a minha alergia a glúten.",
        sentenceA1Pt: "Tenho alergia a amendoim.",
        sentenceA2Pt: "Por favor, avise o chef sobre a minha alergia a glúten."
      },
      { english: "Side dish", portuguese: "Acompanhamento",
        sentenceA1: "What side dish comes with it?",
        sentenceA2: "I ordered french fries as a side dish for my hamburger.",
        sentenceA1Pt: "Qual acompanhamento vem?",
        sentenceA2Pt: "Pedi batatas fritas como acompanhamento para o meu hambúrguer."
      },
      { english: "Still water / Sparkling water", portuguese: "Água sem gás / Água com gás",
        sentenceA1: "Sparkling water, please.",
        sentenceA2: "Would you like still water or sparkling water with your meal?",
        sentenceA1Pt: "Água com gás, por favor.",
        sentenceA2Pt: "Você gostaria de água sem gás ou com gás com a refeição?"
      },
      { english: "Rare", portuguese: "Mal passado",
        sentenceA1: "I like my steak rare.",
        sentenceA2: "She ordered a rare steak, so it is very red in the middle.",
        sentenceA1Pt: "Gosto do meu bife mal passado.",
        sentenceA2Pt: "Ela pediu um bife mal passado, então ele está bem vermelho no meio."
      },
      { english: "Medium rare", portuguese: "Ao ponto para mal passada",
        sentenceA1: "I want my steak medium rare.",
        sentenceA2: "He prefers his meat medium rare, so please don't overcook it.",
        sentenceA1Pt: "Quero meu bife ao ponto para mal passado.",
        sentenceA2Pt: "Ele prefere a carne ao ponto para mal passada, então por favor não passe do ponto."
      },
      { english: "Medium", portuguese: "Ao ponto",
        sentenceA1: "A medium steak, please.",
        sentenceA2: "I usually order my meat medium because it is juicy but not too red.",
        sentenceA1Pt: "Um bife ao ponto, por favor.",
        sentenceA2Pt: "Eu costumo pedir minha carne ao ponto porque ela fica suculenta mas não muito vermelha."
      },
      { english: "Medium well", portuguese: "Ao ponto para bem passada",
        sentenceA1: "I prefer medium well steak.",
        sentenceA2: "Please make my steak medium well, with just a hint of pink in the center.",
        sentenceA1Pt: "Prefiro bife ao ponto para bem passado.",
        sentenceA2Pt: "Por favor, faça meu bife ao ponto para bem passado, com apenas um toque de rosa no centro."
      },
      { english: "Well done", portuguese: "Bem passado",
        sentenceA1: "I want my meat well done.",
        sentenceA2: "My mother always eats her steak well done with no pink showing.",
        sentenceA1Pt: "Quero minha carne bem passada.",
        sentenceA2Pt: "Minha mãe sempre come o bife bem passado, sem nenhuma parte rosada aparecendo."
      },
      { english: "Soft drink", portuguese: "Refrigerante",
        sentenceA1: "I want a soft drink.",
        sentenceA2: "Do you have any sugar-free soft drinks available?",
        sentenceA1Pt: "Quero um refrigerante.",
        sentenceA2Pt: "Você tem algum refrigerante sem açúcar disponível?"
      },
      // --- Comidas Práticas (Parte 2 do Vocabulário) ---
      { english: "Mashed potatoes", portuguese: "Purê de batatas",
        sentenceA1: "I want mashed potatoes.",
        sentenceA2: "The roasted chicken is served with a side of creamy mashed potatoes.",
        sentenceA1Pt: "Eu quero purê de batatas.",
        sentenceA2Pt: "O frango assado é servido com um acompanhamento de purê de batatas cremoso."
      },
      { english: "Scrambled eggs", portuguese: "Ovos mexidos",
        sentenceA1: "I eat scrambled eggs.",
        sentenceA2: "I usually have scrambled eggs and toast for breakfast.",
        sentenceA1Pt: "Eu como ovos mexidos.",
        sentenceA2Pt: "Eu costumo comer ovos mexidos e torrada no café da manhã."
      },
      { english: "Seafood", portuguese: "Frutos do mar",
        sentenceA1: "I do not eat seafood.",
        sentenceA2: "This restaurant is famous for its fresh seafood and grilled fish.",
        sentenceA1Pt: "Eu não como frutos do mar.",
        sentenceA2Pt: "Este restaurante é famoso pelos seus frutos do mar frescos e peixe grelhado."
      },
      { english: "Steak", portuguese: "Bife / Carne vermelha",
        sentenceA1: "The steak is delicious.",
        sentenceA2: "We ordered a ribeye steak to share during dinner.",
        sentenceA1Pt: "O bife está delicioso.",
        sentenceA2Pt: "Nós pedimos um filé de costela para dividir durante o jantar."
      },
      { english: "Soup", portuguese: "Sopa",
        sentenceA1: "I want a warm soup.",
        sentenceA2: "The soup of the day is tomato and basil.",
        sentenceA1Pt: "Eu quero uma sopa quente.",
        sentenceA2Pt: "A sopa do dia é tomate com manjericão."
      },
      { english: "Salad", portuguese: "Salada",
        sentenceA1: "A small salad, please.",
        sentenceA2: "I will have a Caesar salad with grilled chicken for my lunch.",
        sentenceA1Pt: "Uma salada pequena, por favor.",
        sentenceA2Pt: "Vou querer uma salada Caesar com frango grelhado no almoço."
      },
      { english: "Pancakes", portuguese: "Panquecas americanas",
        sentenceA1: "I love sweet pancakes.",
        sentenceA2: "They serve fluffy pancakes with maple syrup and butter.",
        sentenceA1Pt: "Eu amo panquecas doces.",
        sentenceA2Pt: "Eles servem panquecas fofinhas com xarope de bordo e manteiga."
      },
      { english: "Waffles", portuguese: "Waffles",
        sentenceA1: "I want waffles with berries.",
        sentenceA2: "Would you like whipped cream or chocolate sauce on your waffles?",
        sentenceA1Pt: "Quero waffles com frutas vermelhas.",
        sentenceA2Pt: "Você gostaria de chantilly ou calda de chocolate nos seus waffles?"
      },
      { english: "Fried chicken", portuguese: "Frango frito",
        sentenceA1: "We ordered fried chicken.",
        sentenceA2: "The crispy fried chicken is served with a spicy dipping sauce.",
        sentenceA1Pt: "Nós pedimos frango frito.",
        sentenceA2Pt: "O frango frito crocante é servido com um molho picante."
      },
      { english: "Meatballs", portuguese: "Almôndegas",
        sentenceA1: "I like spaghetti with meatballs.",
        sentenceA2: "My grandmother makes the best meatballs in tomato sauce.",
        sentenceA1Pt: "Gosto de espaguete com almôndegas.",
        sentenceA2Pt: "Minha avó faz as melhores almôndegas ao molho de tomate."
      }
],
    culturalTips: [
      {
        title: "Tipping at Restaurants",
        titlePt: "Gorjetas em Restaurantes",
        content: "Tipping is mandatory! For table service, the standard is 18-20% before tax. Check if 'Gratuity' is already included.",
        contentPt: "Dar gorjeta é obrigatório! Para serviço de mesa, o padrão é 18-20%. Verifique se a 'Gratuity' já está incluída."
},
      {
        title: "Free Refills",
        titlePt: "Refil Grátis",
        content: "Most restaurants offer free refills on soda, iced tea, and coffee. You only pay for the first glass!",
        contentPt: "A maioria dos restaurantes oferece refil grátis para refrigerante, chá gelado e café. Você só paga pelo primeiro copo!"
},
      {
        title: "Seating Policy",
        titlePt: "Política de Assentos",
        content: "Wait for the host/hostess to seat you. Look for signs that say 'Please wait to be seated' at the entrance.",
        contentPt: "Espere o anfitrião te acomodar. Procure por placas que dizem 'Please wait to be seated' na entrada."
}
    ],
  reading: {
    textA1: "John goes to a restaurant. He wants a hamburger and fries. The waiter brings the menu. John orders his food. The food is very good. After eating, he asks for the check. He leaves a tip and goes home.",
    textA1Pt: "John vai a um restaurante. Ele quer um hambúrguer e batatas fritas. O garçom traz o cardápio. John pede sua comida. A comida é muito boa. Depois de comer, ele pede a conta. Ele deixa uma gorjeta e vai para casa.",
    textA2: "John decides to dine out at a popular downtown restaurant. When the waiter brings the menu, he quickly orders a cheeseburger and a side dish of fries. The main course is delicious, and the service is excellent. When he finishes his meal, he asks for the check, leaves a generous 20% tip for the waiter, and heads home.",
    textA2Pt: "John decide comer fora em um restaurante popular no centro da cidade. Quando o garçom traz o cardápio, ele rapidamente pede um cheeseburger e um acompanhamento de batatas fritas. O prato principal é delicioso, e o serviço é excelente. Quando ele termina sua refeição, pede a conta, deixa uma generosa gorjeta de 20% para o garçom, e vai para casa.",
    questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['John cooking at home', 'John\'s experience eating at a restaurant', 'John working as a waiter', 'John buying groceries'], correctIndex: 1 },
        { question: 'What does "leaves a tip" mean?', questionPt: 'O que significa "leaves a tip"?', options: ['He leaves extra money for the good service', 'He leaves his hat on the table', 'He leaves without paying', 'He gives a piece of advice'], correctIndex: 0 },
        { question: 'Why does John ask for the check?', questionPt: 'Por que John pede a conta?', options: ['Because he wants more food', 'Because he is ready to pay and leave', 'Because he didn\'t like the food', 'Because he wants to read it'], correctIndex: 1 },
        { question: 'What can we infer about John\'s meal?', questionPt: 'O que podemos inferir sobre a refeição de John?', options: ['He hated it', 'He didn\'t finish it', 'He enjoyed it very much', 'It was too spicy'], correctIndex: 2 }
      ],
      questionsA2: [
        { question: 'What is the main idea of this short passage?', questionPt: 'Qual é a ideia principal desta curta passagem?', options: ['A positive dining out experience', 'A complaint about bad service', 'A recipe for a cheeseburger', 'Directions to a restaurant'], correctIndex: 0 },
        { question: 'What is the best synonym for "generous" as used in the text?', questionPt: 'Qual é o melhor sinônimo para "generous" como usado no texto?', options: ['Mean', 'Small', 'Plentiful / Liberal', 'Selfish'], correctIndex: 2 },
        { question: 'Why did John leave a 20% tip?', questionPt: 'Por que John deixou uma gorjeta de 20%?', options: ['Because it was mandatory', 'Because the service was excellent', 'Because the food was bad', 'Because he didn\'t know the math'], correctIndex: 1 },
        { question: 'What does "dine out" mean?', questionPt: 'O que significa "dine out"?', options: ['Eat outside in the park', 'Eat a meal at a restaurant', 'Cook a meal at home', 'Skip a meal'], correctIndex: 1 }
      ]
    },
            simulationTasks: [
      {
            promptPt: "[Recepcionista] \"Você tem uma reserva?\"",
            expectedEn: "Do you have a reservation?"
      },
      {
            promptPt: "[Você] Você responde que não, e pede uma mesa para 4 pessoas",
            expectedEn: "No, I would like a table for four, please."
      },
      {
            promptPt: "[Garçom] \"Aqui está o menu. O que vocês gostariam de beber?\"",
            expectedEn: "Here is the menu. What would you like to drink?"
      },
      {
            promptPt: "[Você] Você quer perguntar se tem Coca Cola",
            expectedEn: "Do you have Coca-Cola?"
      },
      {
            promptPt: "[Garçom] \"Estão prontos para pedir a comida?\"",
            expectedEn: "Are you ready to order?"
      },
      {
            promptPt: "[Você] Você quer perguntar qual prato o garçom recomenda",
            expectedEn: "What do you recommend?"
      },
      {
            promptPt: "[Você] Você quer fazer o seu pedido (um bife e uma salada)",
            expectedEn: "I will have the steak and a salad, please."
      },
      {
            promptPt: "[Você] Você quer pedir um canudo e um guardanapo",
            expectedEn: "Could I get a straw and a napkin, please?"
      },
      {
            promptPt: "[Você] Você quer pedir a conta",
            expectedEn: "Could we get the check, please?"
      },
      {
            promptPt: "[Você] Você quer perguntar se podem dividir a conta",
            expectedEn: "Can we have separate checks?"
      },
      {
            promptPt: "[Você] Você quer pedir para embrulhar a sobra para viagem",
            expectedEn: "Can I get this to go?"
      },
      {
            promptPt: "[Você] Você quer avisar que tem alergia a amendoim",
            expectedEn: "I am allergic to peanuts."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Eat a delicious meal but with terrible service",
            optionAPt: "Comer uma refeição deliciosa mas com péssimo serviço",
            optionBEn: "Eat a bad meal but with excellent service",
            optionBPt: "Comer uma refeição ruim mas com excelente serviço"
      },
      {
            optionAEn: "Spill water on yourself",
            optionAPt: "Derrubar água em você mesmo",
            optionBEn: "Drop your fork on the floor 3 times",
            optionBPt: "Derrubar o garfo no chão 3 vezes"
      },
      {
            optionAEn: "Forget your wallet when the bill arrives",
            optionAPt: "Esquecer a carteira quando a conta chega",
            optionBEn: "Have your card declined",
            optionBPt: "Ter o seu cartão recusado"
      },
      {
            optionAEn: "Eat only appetizers for dinner",
            optionAPt: "Comer apenas entradas no jantar",
            optionBEn: "Eat only dessert for dinner",
            optionBPt: "Comer apenas sobremesa no jantar"
      },
      {
            optionAEn: "Wait 1 hour for a table",
            optionAPt: "Esperar 1 hora por uma mesa",
            optionBEn: "Share a table with strangers",
            optionBPt: "Dividir a mesa com estranhos"
      },
      {
            optionAEn: "Eat something extremely spicy",
            optionAPt: "Comer algo extremamente apimentado",
            optionBEn: "Eat something completely tasteless",
            optionBPt: "Comer algo completamente sem gosto"
      },
      {
            optionAEn: "Tip 50% by mistake",
            optionAPt: "Dar 50% de gorjeta por engano",
            optionBEn: "Forget to leave a tip",
            optionBPt: "Esquecer de deixar gorjeta"
      }
]
},
  {
    id: 'cafe',
    speakingQuestions: [
    {
        "question": "How many cups of coffee do you drink a day?",
        "questionPt": "Quantas xícaras de café você bebe por dia?",
        "hintA1": "I drink two cups of coffee.",
        "hintA2": "I usually drink one cup in the morning and sometimes another one after lunch."
    },
    {
        "question": "What is your favorite order at a coffee shop?",
        "questionPt": "Qual é o seu pedido favorito em uma cafeteria?",
        "hintA1": "I like cappuccino with chocolate.",
        "hintA2": "My go-to order is an iced latte with a slice of carrot cake."
    },
    {
        "question": "Do you like to study or work in cafes?",
        "questionPt": "Você gosta de estudar ou trabalhar em cafés?",
        "hintA1": "No, it is very noisy.",
        "hintA2": "Yes, I enjoy the atmosphere and the background noise helps me focus."
    }
,
    {
        "question": "Did you order a black coffee or a latte?",
        "questionPt": "Você pediu um café preto ou um latte?",
        "hintA1": "I ordered a black coffee.",
        "hintA2": "I asked for an iced latte with oat milk because it is my favorite drink."
    },
    {
        "question": "Do they sell sandwiches at this cafe?",
        "questionPt": "Eles vendem sanduíches neste café?",
        "hintA1": "Yes, they have sandwiches.",
        "hintA2": "Yes, they have a great selection of paninis, croissants, and cakes too."
    },
    {
        "question": "When did you start drinking coffee?",
        "questionPt": "Quando você começou a beber café?",
        "hintA1": "I started in college.",
        "hintA2": "I did not like coffee until I started working. Now I drink it every morning."
    },
    {
        "question": "Do you take sugar in your coffee?",
        "questionPt": "Você coloca açúcar no seu café?",
        "hintA1": "No, I drink it plain.",
        "hintA2": "I used to add sugar, but now I prefer the natural taste of good coffee."
    },
    {
        "question": "Did you pay in cash or by card?",
        "questionPt": "Você pagou em dinheiro ou no cartão?",
        "hintA1": "I paid by card.",
        "hintA2": "I paid with my credit card because I never carry cash with me anymore."
    }
    ],
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
          { speaker: 'native', english: "Hi, welcome to Starbucks! What can I get started for you today?", portuguese: "Oi, bem-vindo ao Starbucks! O que posso preparar para você hoje?" },
          { speaker: 'student', english: "Hi! Can I get a Grande Latte, please?", portuguese: "Oi! Pode me dar um Latte Grande, por favor?" },
          { speaker: 'native', english: "Sure! Would you like that hot or iced?", portuguese: "Claro! Você quer quente ou gelado?" },
          { speaker: 'student', english: "Iced, please. And can I have oat milk instead of whole milk?", portuguese: "Gelado, por favor. E posso querer leite de aveia em vez de leite integral?" },
          { speaker: 'native', english: "No problem, iced Grande oat milk latte. Would you like any flavors in that? We have vanilla, caramel, or hazelnut.", portuguese: "Sem problema, latte grande gelado com leite de aveia. Gostaria de algum sabor? Temos baunilha, caramelo ou avelã." },
          { speaker: 'student', english: "Two pumps of vanilla, please. And can I have it with light ice?", portuguese: "Dois jatos de baunilha, por favor. E pode ser com pouco gelo?" },
          { speaker: 'native', english: "Light ice, got it. Do you want any whipped cream on top?", portuguese: "Pouco gelo, entendi. Você quer chantilly por cima?" },
          { speaker: 'student', english: "No whipped cream, thank you. Can I also get a blueberry muffin?", portuguese: "Sem chantilly, obrigada. Posso pedir também um muffin de mirtilo?" },
          { speaker: 'native', english: "I'm sorry, we are completely sold out of blueberry muffins. We have chocolate chip or banana nut.", portuguese: "Sinto muito, estamos totalmente sem muffins de mirtilo. Temos de gotas de chocolate ou de banana com nozes." },
          { speaker: 'student', english: "I'll take the chocolate chip one. Could you warm it up for me?", portuguese: "Vou levar o de gotas de chocolate. Você poderia esquentá-lo para mim?" },
          { speaker: 'native', english: "Absolutely. That will be nine dollars and fifty cents.", portuguese: "Com certeza. Vai dar nove dólares e cinquenta centavos." },
          { speaker: 'student', english: "Here is ten dollars. Oh, I have the Starbucks app if you need to scan it.", portuguese: "Aqui estão dez dólares. Ah, eu tenho o aplicativo do Starbucks se você precisar escanear." },
          { speaker: 'native', english: "Go ahead and scan it right here. Alright, out of ten, here is your change. What's your name for the cup?", portuguese: "Pode escanear bem aqui. Certo, de dez, aqui está o seu troco. Qual o seu nome para o copo?" },
          { speaker: 'student', english: "It's Maria. M-A-R-I-A.", portuguese: "É Maria. M-A-R-I-A." },
          { speaker: 'native', english: "Thanks, Maria! They'll call your name down at the end of the bar.", portuguese: "Obrigada, Maria! Eles vão chamar seu nome no final do balcão." }
],
        dialoguesBeginner: [
          { speaker: 'native', english: "Welcome! What do you want to drink?", portuguese: "Bem-vindo! O que você quer beber?" },
          { speaker: 'student', english: "A latte, please.", portuguese: "Um latte, por favor." },
          { speaker: 'native', english: "Hot or iced?", portuguese: "Quente ou gelado?" },
          { speaker: 'student', english: "Iced, please.", portuguese: "Gelado, por favor." },
          { speaker: 'native', english: "What is your name?", portuguese: "Qual é o seu nome?" },
          { speaker: 'student', english: "Maria.", portuguese: "Maria." },
          { speaker: 'native', english: "That is five dollars.", portuguese: "São cinco dólares." },
          { speaker: 'student', english: "Here you go. Thank you!", portuguese: "Aqui está. Obrigado!" }
,

      {
            speaker: "native",
            english: "Do you want sugar in your coffee?",
            portuguese: "Você quer açúcar no seu café?"
      },
      {
            speaker: "student",
            english: "No, just milk, please.",
            portuguese: "Não, apenas leite, por favor."
      },
      {
            speaker: "native",
            english: "Do you want anything to eat?",
            portuguese: "Você quer algo para comer?"
      },
      {
            speaker: "student",
            english: "I want a piece of cake.",
            portuguese: "Eu quero um pedaço de bolo."
      },
      {
            speaker: "native",
            english: "Chocolate or vanilla?",
            portuguese: "Chocolate ou baunilha?"
      },
      {
            speaker: "student",
            english: "Chocolate cake, please.",
            portuguese: "Bolo de chocolate, por favor."
      },
      {
            speaker: "native",
            english: "Here is your order.",
            portuguese: "Aqui está o seu pedido."
      },
      {
            speaker: "student",
            english: "Thank you so much.",
            portuguese: "Muito obrigado."
      }
],
        dialogues2: [
          { speaker: 'native', english: "Good morning! Are you ready to order?", portuguese: "Bom dia! Você está pronto para pedir?" },
          { speaker: 'student', english: "Yes, I'd like a medium Americano and a chocolate croissant.", portuguese: "Sim, eu gostaria de um Americano médio e um croissant de chocolate." },
          { speaker: 'native', english: "Sure. Do you want any room for cream in your Americano?", portuguese: "Claro. Você quer espaço para o creme no seu Americano?" },
          { speaker: 'student', english: "No, black is fine. Also, can you tell me what the soup of the day is?", portuguese: "Não, puro está bom. Além disso, você pode me dizer qual é a sopa do dia?" },
          { speaker: 'native', english: "Today we have tomato basil. It's served with a side of bread.", portuguese: "Hoje temos tomate com manjericão. É servida com um acompanhamento de pão." },
          { speaker: 'student', english: "That sounds delicious. I'll have a bowl of that too.", portuguese: "Parece delicioso. Vou querer uma tigela disso também." },
          { speaker: 'native', english: "Perfect. Anything else? A dessert, perhaps?", portuguese: "Perfeito. Algo mais? Uma sobremesa, talvez?" },
          { speaker: 'student', english: "Maybe later. I'll just start with this. How much do I owe you?", portuguese: "Talvez mais tarde. Vou começar com isso. Quanto eu te devo?" }
],
        dialoguesBeginner2: [
          { speaker: 'native', english: "Hello! What do you want?", portuguese: "Olá! O que você quer?" },
          { speaker: 'student', english: "I want an Americano and a croissant.", portuguese: "Quero um Americano e um croissant." },
          { speaker: 'native', english: "Do you want cream?", portuguese: "Você quer creme?" },
          { speaker: 'student', english: "No, thank you.", portuguese: "Não, obrigado." },
          { speaker: 'native', english: "We have tomato soup today.", portuguese: "Temos sopa de tomate hoje." },
          { speaker: 'student', english: "I want a bowl of soup, please.", portuguese: "Quero uma tigela de sopa, por favor." },
          { speaker: 'native', english: "Okay. That is fifteen dollars.", portuguese: "Ok. São quinze dólares." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Is this seat taken?",
            portuguese: "Este lugar está ocupado?"
      },
      {
            speaker: "student",
            english: "No, it is free. You can sit.",
            portuguese: "Não, está livre. Você pode sentar."
      },
      {
            speaker: "native",
            english: "Thank you. The cafe is very busy.",
            portuguese: "Obrigado. O café está muito cheio."
      },
      {
            speaker: "student",
            english: "Yes, it is always busy in the morning.",
            portuguese: "Sim, está sempre cheio de manhã."
      },
      {
            speaker: "native",
            english: "The coffee here is very good.",
            portuguese: "O café daqui é muito bom."
      },
      {
            speaker: "student",
            english: "Yes, it is my favorite place.",
            portuguese: "Sim, é o meu lugar favorito."
      },
      {
            speaker: "native",
            english: "Are you working today?",
            portuguese: "Você está trabalhando hoje?"
      },
      {
            speaker: "student",
            english: "Yes, I am working on my computer.",
            portuguese: "Sim, estou trabalhando no meu computador."
      }
]
},
      {
        title: 'Fast Food Order',
        titlePt: 'Pedido Fast Food',
        icon: '🍔',
        dialogues: [
          { speaker: 'native', english: "Welcome to Burger King! Will this order be for here or to go?", portuguese: "Bem-vindo ao Burger King! Este pedido vai ser para comer aqui ou para levar?" },
          { speaker: 'student', english: "To go, please. I'm ready to order.", portuguese: "Para levar, por favor. Estou pronto para pedir." },
          { speaker: 'native', english: "Whenever you're ready, go ahead.", portuguese: "Quando estiver pronto, vá em frente." },
          { speaker: 'student', english: "I'd like a number one combo, but with no pickles on the burger, please.", portuguese: "Eu queria o combo número um, mas sem picles no hambúrguer, por favor." },
          { speaker: 'native', english: "Number one, no pickles. Would you like to medium or large your meal for an extra dollar?", portuguese: "Número um, sem picles. Você quer aumentar o combo para médio ou grande por um dólar extra?" },
          { speaker: 'student', english: "A medium size is fine. Can I have a Coke with that?", portuguese: "O tamanho médio está bom. Pode ser uma Coca com isso?" },
          { speaker: 'native', english: "Diet Coke or regular Coke?", portuguese: "Coca Diet ou Coca normal?" },
          { speaker: 'student', english: "Regular Coke, please. Also, can I get a side of onion rings instead of fries?", portuguese: "Coca normal, por favor. Além disso, posso pedir uma porção de anéis de cebola em vez de batatas fritas?" },
          { speaker: 'native', english: "Sure, we can substitute the fries for onion rings. Any sauces with that? We have BBQ, ranch, and honey mustard.", portuguese: "Claro, podemos substituir as batatas por anéis de cebola. Algum molho com isso? Temos BBQ, ranch e mostarda com mel." },
          { speaker: 'student', english: "Two BBQ sauces, please.", portuguese: "Dois molhos BBQ, por favor." },
          { speaker: 'native', english: "Okay. Anything else? Would you like to try our new apple pie?", portuguese: "Ok. Algo mais? Gostaria de provar nossa nova torta de maçã?" },
          { speaker: 'student', english: "No, thank you. Just the combo.", portuguese: "Não, obrigado. Apenas o combo." },
          { speaker: 'native', english: "Your total comes to twelve dollars and forty cents. Please pull up to the second window to pay.", portuguese: "Seu total dá doze dólares e quarenta centavos. Por favor, avance para a segunda janela para pagar." },
          { speaker: 'student', english: "Thank you.", portuguese: "Obrigado." }
],
        dialoguesBeginner: [
          { speaker: 'native', english: "For here or to go?", portuguese: "Para comer aqui ou para levar?" },
          { speaker: 'student', english: "To go, please.", portuguese: "Para levar, por favor." },
          { speaker: 'student', english: "I want a number one combo.", portuguese: "Eu quero o combo número um." },
          { speaker: 'native', english: "What drink do you want?", portuguese: "Qual bebida você quer?" },
          { speaker: 'student', english: "A Coke, please.", portuguese: "Uma Coca, por favor." },
          { speaker: 'native', english: "Anything else?", portuguese: "Algo mais?" },
          { speaker: 'student', english: "No, thank you.", portuguese: "Não, obrigado." },
          { speaker: 'native', english: "Twelve dollars, please.", portuguese: "Doze dólares, por favor." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Do you want sugar in your coffee?",
            portuguese: "Você quer açúcar no seu café?"
      },
      {
            speaker: "student",
            english: "No, just milk, please.",
            portuguese: "Não, apenas leite, por favor."
      },
      {
            speaker: "native",
            english: "Do you want anything to eat?",
            portuguese: "Você quer algo para comer?"
      },
      {
            speaker: "student",
            english: "I want a piece of cake.",
            portuguese: "Eu quero um pedaço de bolo."
      },
      {
            speaker: "native",
            english: "Chocolate or vanilla?",
            portuguese: "Chocolate ou baunilha?"
      },
      {
            speaker: "student",
            english: "Chocolate cake, please.",
            portuguese: "Bolo de chocolate, por favor."
      },
      {
            speaker: "native",
            english: "Here is your order.",
            portuguese: "Aqui está o seu pedido."
      },
      {
            speaker: "student",
            english: "Thank you so much.",
            portuguese: "Muito obrigado."
      }
],
        dialogues2: [
          { speaker: 'native', english: "Welcome! What can I get for you?", portuguese: "Bem-vindo! O que posso te oferecer?" },
          { speaker: 'student', english: "I'd like a chicken sandwich, but without the mayo, please.", portuguese: "Eu gostaria de um sanduíche de frango, mas sem maionese, por favor." },
          { speaker: 'native', english: "Chicken sandwich, no mayo. Do you want to make it a meal with fries and a drink?", portuguese: "Sanduíche de frango, sem maionese. Você quer transformar em um combo com batatas fritas e uma bebida?" },
          { speaker: 'student', english: "Yes, please. I'll have a Sprite for the drink.", portuguese: "Sim, por favor. Vou querer uma Sprite para a bebida." },
          { speaker: 'native', english: "Sure. Would you like any extra toppings like cheese or bacon on your sandwich?", portuguese: "Claro. Gostaria de algum acompanhamento extra como queijo ou bacon no seu sanduíche?" },
          { speaker: 'student', english: "Just some cheese, please. How much extra is that?", portuguese: "Apenas queijo, por favor. Quanto custa a mais?" },
          { speaker: 'native', english: "Cheese is fifty cents extra. Your total will be eleven dollars and twenty cents.", portuguese: "O queijo custa cinquenta centavos a mais. Seu total será onze dólares e vinte centavos." },
          { speaker: 'student', english: "Okay. Here's a twenty-dollar bill.", portuguese: "Ok. Aqui está uma nota de vinte dólares." },
          { speaker: 'native', english: "Thank you. Here is your change and your order number. We'll call you when it's ready.", portuguese: "Obrigado. Aqui está o seu troco e o seu número de pedido. Chamaremos quando estiver pronto." }
],
        dialoguesBeginner2: [
          { speaker: 'native', english: "Hello! What do you want?", portuguese: "Olá! O que você quer?" },
          { speaker: 'student', english: "A chicken sandwich, please.", portuguese: "Um sanduíche de frango, por favor." },
          { speaker: 'native', english: "No mayo?", portuguese: "Sem maionese?" },
          { speaker: 'student', english: "Yes, no mayo.", portuguese: "Sim, sem maionese." },
          { speaker: 'native', english: "Do you want fries and a drink?", portuguese: "Você quer batatas fritas e uma bebida?" },
          { speaker: 'student', english: "Yes. A Sprite, please.", portuguese: "Sim. Uma Sprite, por favor." },
          { speaker: 'native', english: "That is eleven dollars.", portuguese: "São onze dólares." },
          { speaker: 'student', english: "Here is twenty dollars.", portuguese: "Aqui estão vinte dólares." },
          { speaker: 'native', english: "Thank you. Here is your change.", portuguese: "Obrigado. Aqui está o seu troco." }
,

      {
            speaker: "native",
            english: "Is this seat taken?",
            portuguese: "Este lugar está ocupado?"
      },
      {
            speaker: "student",
            english: "No, it is free. You can sit.",
            portuguese: "Não, está livre. Você pode sentar."
      },
      {
            speaker: "native",
            english: "Thank you. The cafe is very busy.",
            portuguese: "Obrigado. O café está muito cheio."
      },
      {
            speaker: "student",
            english: "Yes, it is always busy in the morning.",
            portuguese: "Sim, está sempre cheio de manhã."
      },
      {
            speaker: "native",
            english: "The coffee here is very good.",
            portuguese: "O café daqui é muito bom."
      },
      {
            speaker: "student",
            english: "Yes, it is my favorite place.",
            portuguese: "Sim, é o meu lugar favorito."
      },
      {
            speaker: "native",
            english: "Are you working today?",
            portuguese: "Você está trabalhando hoje?"
      },
      {
            speaker: "student",
            english: "Yes, I am working on my computer.",
            portuguese: "Sim, estou trabalhando no meu computador."
      }
]
}
],
            importantPhrases: [
      {
            pt: "Tem wi-fi gratuito aqui?",
            en: "Is there free wi-fi here?"
      },
      {
            pt: "Um chá verde, por favor.",
            en: "A green tea, please."
      },
      {
            pt: "Pode aquecer meu sanduíche?",
            en: "Can you heat up my sandwich?"
      },
      {
            pt: "Tem bolo sem glúten?",
            en: "Do you have gluten-free cake?"
      },
      {
            pt: "Onde estão os guardanapos?",
            en: "Where are the napkins?"
      },
      {
            pt: "Eu prefiro café expresso.",
            en: "I prefer espresso."
      }
],
        problems: [
      {
            descriptionPt: "Você pediu sem leite, mas colocaram leite no seu café."
      },
      {
            descriptionPt: "A internet Wi-Fi da cafeteria parou de funcionar e você precisa dela."
      }
],
    vocabulary: [
      { english: "Tall / Grande / Venti", portuguese: "Tamanhos de copo",
        sentenceA1: "I want a tall coffee.",
        sentenceA2: "Can I have a grande iced latte with extra espresso?",
        sentenceA1Pt: "Quero um café pequeno.",
        sentenceA2Pt: "Posso pedir um latte gelado médio com espresso extra?"
      },
      { english: "Whole milk", portuguese: "Leite integral",
        sentenceA1: "With whole milk, please.",
        sentenceA2: "I prefer whole milk because it makes my cappuccino creamier.",
        sentenceA1Pt: "Com leite integral, por favor.",
        sentenceA2Pt: "Prefiro leite integral porque fica mais cremoso."
      },
      { english: "Oat milk", portuguese: "Leite de aveia",
        sentenceA1: "I want oat milk.",
        sentenceA2: "Could you replace the regular milk with oat milk?",
        sentenceA1Pt: "Quero leite de aveia.",
        sentenceA2Pt: "Pode trocar o leite normal por leite de aveia?"
      },
      { english: "Decaf", portuguese: "Descafeinado",
        sentenceA1: "I want decaf coffee.",
        sentenceA2: "I switched to decaf because coffee was keeping me awake.",
        sentenceA1Pt: "Quero café descafeinado.",
        sentenceA2Pt: "Mudei para descafeinado porque o café me mantinha acordado."
      },
      { english: "Whipped cream", portuguese: "Chantilly",
        sentenceA1: "With whipped cream, please.",
        sentenceA2: "Can I add extra whipped cream on my hot chocolate?",
        sentenceA1Pt: "Com chantilly, por favor.",
        sentenceA2Pt: "Posso adicionar chantilly extra no meu chocolate quente?"
      },
      { english: "Drive-thru", portuguese: "Drive-thru",
        sentenceA1: "Let us go to the drive-thru.",
        sentenceA2: "The drive-thru line is always long in the morning.",
        sentenceA1Pt: "Vamos ao drive-thru.",
        sentenceA2Pt: "A fila do drive-thru é sempre longa de manhã."
      },
      { english: "For here / To go", portuguese: "Para consumir aqui / Para levar",
        sentenceA1: "For here, please.",
        sentenceA2: "Is this for here or to go? I will have it to go.",
        sentenceA1Pt: "Para consumir aqui, por favor.",
        sentenceA2Pt: "É para aqui ou para levar? Hoje vou levar."
      },
      { english: "Combo / Meal", portuguese: "Combo",
        sentenceA1: "I want the combo.",
        sentenceA2: "The breakfast combo includes coffee, a sandwich, and a cookie.",
        sentenceA1Pt: "Quero o combo.",
        sentenceA2Pt: "O combo inclui café, sanduíche e biscoito."
      },
      { english: "Napkin", portuguese: "Guardanapo",
        sentenceA1: "I need a napkin.",
        sentenceA2: "Could you give me extra napkins? My coffee spilled.",
        sentenceA1Pt: "Preciso de um guardanapo.",
        sentenceA2Pt: "Pode me dar guardanapos extras? Meu café derramou."
      },
      { english: "Straw", portuguese: "Canudo",
        sentenceA1: "I need a straw.",
        sentenceA2: "They only offer paper straws now for the environment.",
        sentenceA1Pt: "Preciso de um canudo.",
        sentenceA2Pt: "Eles só oferecem canudos de papel agora pelo meio ambiente."
      },
      { english: "Sugar packet", portuguese: "Pacote de açúcar",
        sentenceA1: "I need a sugar packet.",
        sentenceA2: "Could you pass me two sugar packets and a stirrer?",
        sentenceA1Pt: "Preciso de açúcar.",
        sentenceA2Pt: "Pode me passar dois açúcares e um mexedor?"
      },
      { english: "To go bag", portuguese: "Sacola para levar",
        sentenceA1: "Can I have a bag?",
        sentenceA2: "Put the pastries in a bag. I will eat them at the office.",
        sentenceA1Pt: "Posso ter uma sacola?",
        sentenceA2Pt: "Coloque os doces em uma sacola. Vou comer no escritório."
      },
      { english: "Extra hot", portuguese: "Muito quente",
        sentenceA1: "Extra hot, please.",
        sentenceA2: "I like my latte extra hot because it stays warm longer.",
        sentenceA1Pt: "Bem quente, por favor.",
        sentenceA2Pt: "Gosto do meu latte bem quente porque dura mais."
      },
      { english: "Pastry", portuguese: "Folhado / Doce / Salgado",
        sentenceA1: "I want a sweet pastry.",
        sentenceA2: "They serve fresh pastries like croissants and muffins every morning.",
        sentenceA1Pt: "Quero um doce folhado.",
        sentenceA2Pt: "Eles servem salgados e doces frescos como croissants e muffins todas as manhãs."
      },
      { english: "Espresso shot", portuguese: "Dose de espresso",
        sentenceA1: "Add a shot of espresso.",
        sentenceA2: "I need a double shot of espresso to wake up today.",
        sentenceA1Pt: "Adicione uma dose de espresso.",
        sentenceA2Pt: "Preciso de uma dose dupla de espresso para acordar hoje."
      },
      { english: "Sweetener", portuguese: "Adoçante",
        sentenceA1: "Do you have sweetener?",
        sentenceA2: "I prefer to use sweetener instead of sugar in my coffee.",
        sentenceA1Pt: "Você tem adoçante?",
        sentenceA2Pt: "Prefiro usar adoçante em vez de açúcar no meu café."
      },
      { english: "Iced coffee", portuguese: "Café gelado",
        sentenceA1: "An iced coffee, please.",
        sentenceA2: "I always order an iced coffee when the weather gets warm.",
        sentenceA1Pt: "Um café gelado, por favor.",
        sentenceA2Pt: "Eu sempre peço um café gelado quando o tempo esquenta."
      }
],
    culturalTips: [
      {
        title: "Starbucks Sizes",
        titlePt: "Tamanhos Starbucks",
        content: "Starbucks uses unique names: Tall (12oz), Grande (16oz), and Venti (24oz). If you just say 'small' or 'medium', they will understand, but knowing the names is helpful!",
        contentPt: "O Starbucks usa nomes únicos: Tall (pequeno), Grande (médio) e Venti (grande). Se você disser 'small' ou 'medium', eles vão entender, mas saber os nomes ajuda!"
},
      {
        title: "Customization is King",
        titlePt: "Personalização é Tudo",
        content: "In the US, you can customize EVERYTHING. Milk types, temperature, amount of ice, and extra shots of espresso. Don't be afraid to ask exactly how you want it!",
        contentPt: "Nos EUA, você pode personalizar TUDO. Tipos de leite, temperatura, quantidade de gelo e doses extras de café. Não tenha medo de pedir exatamente como você quer!"
},
      {
        title: "Names on Cups",
        titlePt: "Nomes nos Copos",
        content: "Baristas will ask for your name. If your name is hard to spell, it's common to use a 'coffee name' (a simpler nickname) to avoid confusion and misspelling.",
        contentPt: "Os baristas vão pedir seu nome. Se seu nome for difícil de soletrar, é comum usar um 'coffee name' (um apelido simples) para evitar confusão e erros de grafia."
}
    ],
  reading: {
      textA1: 'Emily goes to a coffee shop every morning. She loves coffee. She stands in line. It is her turn. She orders a large hot coffee and a chocolate muffin. The cashier asks for her name. She says, \'Emily\'. The cashier writes it on the cup. Emily pays 7 dollars. She waits near the counter. After two minutes, the barista calls her name. She takes her coffee and muffin. She sits at a small table near the window. She drinks her coffee and reads a book. It is a good morning.',
      textA1Pt: 'Emily vai a uma cafeteria toda manhã. Ela adora café. Ela fica na fila. É a vez dela. Ela pede um café quente grande e um muffin de chocolate. O caixa pergunta o nome dela. Ela diz: \'Emily\'. O caixa escreve no copo. Emily paga 7 dólares. Ela espera perto do balcão. Após dois minutos, o barista chama seu nome. Ela pega seu café e muffin. Ela se senta em uma pequena mesa perto da janela. Ela bebe seu café e lê um livro. É uma boa manhã.',
      textA2: 'Every weekday morning before heading to the office, Emily stopped by her favorite artisanal café on Elm Street. The place was always buzzing with commuters and the rich aroma of freshly roasted beans. When it was finally her turn to order, she asked for an iced caramel macchiato with oat milk and an extra shot of espresso. She also grabbed a freshly baked almond croissant from the pastry display. The cashier took her order, punched it into the system, and asked for a name for the cup. Emily paid contactless using her smartphone and stepped aside to the waiting area. The baristas were working at lightning speed, pulling shots and steaming milk. Within minutes, a barista called out \'Iced macchiato for Emily!\'. She picked up her customized drink, popped in a reusable straw, and hurried out the door to catch her train, completely energized for the day.',
      textA2Pt: 'Toda manhã de dia de semana, antes de ir para o escritório, Emily parava em seu café artesanal favorito na Elm Street. O lugar estava sempre zumbindo de passageiros e do rico aroma de grãos recém-torrados. Quando finalmente chegou sua vez de pedir, ela pediu um macchiato de caramelo gelado com leite de aveia e uma dose extra de café expresso. Ela também pegou um croissant de amêndoas recém-assado do balcão de confeitaria. O caixa anotou seu pedido, digitou no sistema e perguntou um nome para o copo. Emily pagou por aproximação usando seu smartphone e foi para a área de espera. Os baristas estavam trabalhando na velocidade da luz, tirando cafés e vaporizando leite. Em poucos minutos, um barista chamou \'Macchiato gelado para Emily!\'. Ela pegou sua bebida personalizada, colocou um canudo reutilizável e correu para a porta para pegar seu trem, completamente energizada para o dia.',
      questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Emily\'s morning routine at the coffee shop', 'Emily cooking breakfast at home', 'Emily working as a barista', 'Emily buying a book'], correctIndex: 0 },
        { question: 'What does "it is her turn" mean?', questionPt: 'O que significa "it is her turn"?', options: ['She is spinning around', 'She is leaving the shop', 'She is the next person in line to order', 'She is sleeping'], correctIndex: 2 },
        { question: 'Why does the cashier ask for her name?', questionPt: 'Por que o caixa pergunta o nome dela?', options: ['To be her friend', 'To write it on the cup so they know it\'s her order', 'To call the police', 'Because it is a test'], correctIndex: 1 },
        { question: 'What can we infer about Emily\'s feelings?', questionPt: 'O que podemos inferir sobre os sentimentos de Emily?', options: ['She is enjoying a peaceful morning', 'She is angry about the price', 'She is in a rush and stressed', 'She hates coffee'], correctIndex: 0 }
      ],
      questionsA2: [
        { question: 'What specific modifications did Emily make to her drink?', questionPt: 'Que modificações específicas Emily fez em sua bebida?', options: ['Decaf with soy milk', 'Oat milk and an extra shot', 'Extra caramel and no ice', 'Sugar-free syrup'], correctIndex: 1 },
        { question: 'What pastry did she select from the display?', questionPt: 'Qual confeitaria ela selecionou do balcão?', options: ['Chocolate muffin', 'Blueberry scone', 'Almond croissant', 'Cinnamon roll'], correctIndex: 2 },
        { question: 'How did Emily pay for her order?', questionPt: 'Como Emily pagou pelo seu pedido?', options: ['With cash', 'With a physical credit card', 'Contactless with her smartphone', 'With a gift card'], correctIndex: 2 },
        { question: 'Why did she hurry out the door after getting her drink?', questionPt: 'Por que ela saiu correndo pela porta depois de pegar sua bebida?', options: ['She was late for a meeting', 'To catch her train', 'It was raining', 'She didn\'t like the café'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Atendente] \"Olá, qual vai ser o seu pedido?\"",
            expectedEn: "Hi, what can I get for you?"
      },
      {
            promptPt: "[Você] Você quer pedir um café grande",
            expectedEn: "I would like a large coffee, please."
      },
      {
            promptPt: "[Atendente] \"Para tomar aqui ou para levar?\"",
            expectedEn: "For here or to go?"
      },
      {
            promptPt: "[Você] Você quer pedir para ser para levar",
            expectedEn: "To go, please."
      },
      {
            promptPt: "[Você] Você quer perguntar se eles têm leite sem lactose",
            expectedEn: "Do you have lactose-free milk?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde fica o açúcar",
            expectedEn: "Where is the sugar?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Drink cold coffee",
            optionAPt: "Beber café frio",
            optionBEn: "Drink hot juice",
            optionBPt: "Beber suco quente"
      },
      {
            optionAEn: "Spill coffee on your laptop",
            optionAPt: "Derrubar café no seu notebook",
            optionBEn: "Spill coffee on someone else",
            optionBPt: "Derrubar café em outra pessoa"
      },
      {
            optionAEn: "Have a barista mispronounce your name terribly",
            optionAPt: "Ter o barista pronunciando seu nome de forma terrível",
            optionBEn: "Have a barista give you the completely wrong drink",
            optionBPt: "Ter o barista te dando a bebida completamente errada"
      },
      {
            optionAEn: "Work in a noisy cafe",
            optionAPt: "Trabalhar em um café barulhento",
            optionBEn: "Work in a quiet cafe with no Wi-Fi",
            optionBPt: "Trabalhar em um café silencioso mas sem Wi-Fi"
      },
      {
            optionAEn: "Drink black coffee with no sugar for a year",
            optionAPt: "Beber café preto sem açúcar por um ano",
            optionBEn: "Never drink coffee again",
            optionBPt: "Nunca mais beber café"
      },
      {
            optionAEn: "Order a drink that takes 15 minutes to make",
            optionAPt: "Pedir uma bebida que demora 15 minutos para ser feita",
            optionBEn: "Order a basic drip coffee every single day",
            optionBPt: "Pedir um café coado básico todos os dias"
      },
      {
            optionAEn: "Share a small table with a stranger",
            optionAPt: "Dividir uma mesa pequena com um estranho",
            optionBEn: "Sit on a high stool with no back support",
            optionBPt: "Sentar em um banco alto sem encosto"
      }
]
},
  {
  id: "review-1",
  title: "Review 1",
  titlePt: "Revisão 1",
  description: "Review what you've learned in the last 5 scenarios.",
  descriptionPt: "Revise o que você aprendeu nos últimos 5 cenários.",
  icon: "🔄",
  imagePath: "/images/review_1_scene.jpg",
  color: 'indigo',
  vocabulary: [
    {
      english: "Boarding pass",
      portuguese: "Cartão de embarque",
      sentenceA1: "Here is my boarding pass.",
      sentenceA2: "You can download your boarding pass on the airline app.",
      sentenceA1Pt: "Aqui está meu cartão de embarque.",
      sentenceA2Pt: "Você pode baixar o cartão de embarque no app da companhia."
    },
    {
      english: "Baggage claim",
      portuguese: "Esteira de bagagem",
      sentenceA1: "Where is baggage claim?",
      sentenceA2: "My suitcase was not at the baggage claim when I arrived.",
      sentenceA1Pt: "Onde é a esteira de bagagem?",
      sentenceA2Pt: "Minha mala não estava na esteira quando cheguei."
    },
    {
      english: "Gate",
      portuguese: "Portão",
      sentenceA1: "The gate is B5.",
      sentenceA2: "They changed the gate from A3 to B12 at the last minute.",
      sentenceA1Pt: "O portão é B5.",
      sentenceA2Pt: "Mudaram o portão de A3 para B12 no último minuto."
    },
    {
      english: "Flight",
      portuguese: "Voo",
      sentenceA1: "My flight is at 3 PM.",
      sentenceA2: "My connecting flight leaves in two hours from terminal C.",
      sentenceA1Pt: "Meu voo é às 15h.",
      sentenceA2Pt: "Meu voo de conexão sai em duas horas do terminal C."
    },
    {
      english: "Passport",
      portuguese: "Passaporte",
      sentenceA1: "Here is my passport.",
      sentenceA2: "My passport is valid for another three years.",
      sentenceA1Pt: "Aqui está meu passaporte.",
      sentenceA2Pt: "Meu passaporte é válido por mais três anos."
    },
    {
      english: "Customs",
      portuguese: "Alfândega",
      sentenceA1: "Where is customs?",
      sentenceA2: "I declared two bottles of wine at customs.",
      sentenceA1Pt: "Onde é a alfândega?",
      sentenceA2Pt: "Declarei duas garrafas de vinho na alfândega."
    },
    {
      english: "Arrival",
      portuguese: "Chegada",
      sentenceA1: "My arrival is today.",
      sentenceA2: "The arrival terminal is on the first floor.",
      sentenceA1Pt: "Minha chegada é hoje.",
      sentenceA2Pt: "O terminal de chegada é no primeiro andar."
    },
    {
      english: "Departure",
      portuguese: "Partida",
      sentenceA1: "My departure is Friday.",
      sentenceA2: "The departure lounge has free Wi-Fi.",
      sentenceA1Pt: "Minha partida é sexta.",
      sentenceA2Pt: "A sala de embarque tem Wi-Fi gratuito."
    },
    {
      english: "Parking",
      portuguese: "Estacionamento",
      sentenceA1: "Where is the parking?",
      sentenceA2: "The hotel offers free underground parking for all guests.",
      sentenceA1Pt: "Onde fica o estacionamento?",
      sentenceA2Pt: "O hotel oferece estacionamento subterrâneo gratuito para todos os hóspedes."
    },
    {
      english: "Bathroom",
      portuguese: "Banheiro",
      sentenceA1: "I need a bathroom.",
      sentenceA2: "The bathroom in our suite has a large bathtub and a shower.",
      sentenceA1Pt: "Preciso de um banheiro.",
      sentenceA2Pt: "O banheiro da nossa suíte tem uma banheira grande e um chuveiro."
    },
    {
      english: "Reservation",
      portuguese: "Reserva",
      sentenceA1: "I have a reservation.",
      sentenceA2: "I made a reservation online for a double room with breakfast.",
      sentenceA1Pt: "Tenho uma reserva.",
      sentenceA2Pt: "Fiz uma reserva online para quarto duplo com café da manhã."
    },
    {
      english: "Room key",
      portuguese: "Chave do quarto",
      sentenceA1: "I lost my room key.",
      sentenceA2: "The room key stopped working so I went to the front desk.",
      sentenceA1Pt: "Perdi a chave do quarto.",
      sentenceA2Pt: "A chave do quarto parou de funcionar e voltei à recepção."
    },
    {
      english: "Menu",
      portuguese: "Cardápio",
      sentenceA1: "Can I see the menu?",
      sentenceA2: "The menu has a great variety of local and international dishes.",
      sentenceA1Pt: "Posso ver o cardápio?",
      sentenceA2Pt: "O cardápio tem grande variedade de pratos locais e internacionais."
    },
    {
      english: "Appetizer",
      portuguese: "Entrada",
      sentenceA1: "I want an appetizer.",
      sentenceA2: "We ordered a cheese appetizer to share while we wait.",
      sentenceA1Pt: "Quero uma entrada.",
      sentenceA2Pt: "Pedimos uma entrada de queijo para dividir enquanto esperamos."
    },
    {
      english: "Main course",
      portuguese: "Prato principal",
      sentenceA1: "The main course is steak.",
      sentenceA2: "For my main course, I would like the grilled salmon.",
      sentenceA1Pt: "O prato principal é bife.",
      sentenceA2Pt: "Para o prato principal, gostaria do salmão grelhado."
    },
    {
      english: "Dessert",
      portuguese: "Sobremesa",
      sentenceA1: "I want a dessert.",
      sentenceA2: "The chocolate lava cake is the best dessert on the menu.",
      sentenceA1Pt: "Quero uma sobremesa.",
      sentenceA2Pt: "O petit gâteau de chocolate é a melhor sobremesa do cardápio."
    },
    {
      english: "Tall / Grande / Venti",
      portuguese: "Tamanhos de copo",
      sentenceA1: "I want a tall coffee.",
      sentenceA2: "Can I have a grande iced latte with extra espresso?",
      sentenceA1Pt: "Quero um café pequeno.",
      sentenceA2Pt: "Posso pedir um latte gelado médio com espresso extra?"
    },
    {
      english: "Whole milk",
      portuguese: "Leite integral",
      sentenceA1: "With whole milk, please.",
      sentenceA2: "I prefer whole milk because it makes my cappuccino creamier.",
      sentenceA1Pt: "Com leite integral, por favor.",
      sentenceA2Pt: "Prefiro leite integral porque fica mais cremoso."
    },
    {
      english: "Oat milk",
      portuguese: "Leite de aveia",
      sentenceA1: "I want oat milk.",
      sentenceA2: "Could you replace the regular milk with oat milk?",
      sentenceA1Pt: "Quero leite de aveia.",
      sentenceA2Pt: "Pode trocar o leite normal por leite de aveia?"
    },
    {
      english: "Decaf",
      portuguese: "Descafeinado",
      sentenceA1: "I want decaf coffee.",
      sentenceA2: "I switched to decaf because coffee was keeping me awake.",
      sentenceA1Pt: "Quero café descafeinado.",
      sentenceA2Pt: "Mudei para descafeinado porque o café me mantinha acordado."
    }
  ],
  dialogues: [
    {
      speaker: "student",
      english: "Hello! I'd like to check in for my flight to New York. Is it on time?",
      portuguese: "Olá! Eu gostaria de fazer o check-in para o meu voo para Nova York. Ele está no horário?"
    },
    {
      speaker: "native",
      english: "Good morning! Yes, flight AA123 is on time. May I have your passport and boarding pass, please?",
      portuguese: "Bom dia! Sim, o voo AA123 está no horário. Posso ver seu passaporte e cartão de embarque, por favor?"
    },
    {
      speaker: "native",
      english: "Good morning. Please step forward. Passport and customs declaration, please.",
      portuguese: "Bom dia. Dê um passo à frente. Passaporte e declaração da alfândega, por favor."
    },
    {
      speaker: "student",
      english: "Good morning. Here you go.",
      portuguese: "Bom dia. Aqui estão."
    },
    {
      speaker: "student",
      english: "Hello! I'd like to check in, please. I have a reservation.",
      portuguese: "Olá! Eu gostaria de fazer o check-in, por favor. Eu tenho uma reserva."
    },
    {
      speaker: "native",
      english: "Welcome to the Grand Hotel! What name is the reservation under?",
      portuguese: "Bem-vindo ao Grand Hotel! Em nome de quem está a reserva?"
    },
    {
      speaker: "native",
      english: "Hi there! Welcome to The Grill. Table for how many?",
      portuguese: "Olá! Bem-vindo ao The Grill. Mesa para quantos?"
    },
    {
      speaker: "student",
      english: "Table for two, please. Do you have a table by the window?",
      portuguese: "Mesa para dois, por favor. Você tem uma mesa perto da janela?"
    }
  ],
  dialogues2: [
    {
      speaker: "student",
      english: "Good morning! I'd like to check out, please.",
      portuguese: "Bom dia! Eu gostaria de fazer o check-out, por favor."
    },
    {
      speaker: "native",
      english: "Good morning! Welcome to Sunshine Cafe. For here or to go?",
      portuguese: "Bom dia! Bem-vindo ao Sunshine Cafe. Para comer aqui ou para levar?"
    }
  ],
  importantPhrases: [
    {
      pt: "Onde fica a loja duty-free?",
      en: "Where is the duty-free shop?"
    },
    {
      pt: "O voo foi cancelado.",
      en: "The flight was canceled."
    },
    {
      pt: "Preciso de uma cadeira de rodas.",
      en: "I need a wheelchair."
    },
    {
      pt: "Viajo sozinho.",
      en: "I travel alone."
    },
    {
      pt: "Tenho passagem de volta.",
      en: "I have a return ticket."
    },
    {
      pt: "Não tenho nada a declarar.",
      en: "I have nothing to declare."
    },
    {
      pt: "Posso ter um travesseiro extra?",
      en: "Can I have an extra pillow?"
    },
    {
      pt: "O ar condicionado não funciona.",
      en: "The air conditioning does not work."
    },
    {
      pt: "Você pode chamar um táxi?",
      en: "Can you call a taxi?"
    },
    {
      pt: "Onde é o banheiro?",
      en: "Where is the bathroom?"
    },
    {
      pt: "A comida está fria.",
      en: "The food is cold."
    },
    {
      pt: "Tem opções vegetarianas?",
      en: "Are there vegetarian options?"
    },
    {
      pt: "Tem wi-fi gratuito aqui?",
      en: "Is there free wi-fi here?"
    },
    {
      pt: "Um chá verde, por favor.",
      en: "A green tea, please."
    },
    {
      pt: "Pode aquecer meu sanduíche?",
      en: "Can you heat up my sandwich?"
    }
  ],
  problems: [
    {
      descriptionPt: "Sua mala não apareceu na esteira de bagagens."
    },
    {
      descriptionPt: "Seu voo foi cancelado e você precisa saber o que fazer agora."
    },
    {
      descriptionPt: "O oficial de imigração diz que não encontra sua reserva de hotel."
    },
    {
      descriptionPt: "Eles pedem para ver sua passagem de volta, mas você não tem ela impressa."
    },
    {
      descriptionPt: "O ar condicionado do seu quarto está quebrado."
    },
    {
      descriptionPt: "Eles não encontram sua reserva no sistema."
    },
    {
      descriptionPt: "Sua comida veio fria."
    },
    {
      descriptionPt: "O seu pedido veio errado, não foi o prato que você pediu."
    },
    {
      descriptionPt: "Você pediu sem leite, mas colocaram leite no seu café."
    },
    {
      descriptionPt: "A internet Wi-Fi da cafeteria parou de funcionar e você precisa dela."
    }
  ]
},
  {
    id: 'directions',
    speakingQuestions: [
    {
        "question": "Are you good at finding places or do you easily get lost?",
        "questionPt": "Você é bom em encontrar lugares ou se perde facilmente?",
        "hintA1": "I get lost very easily.",
        "hintA2": "I'm terrible with directions, so I always rely on Google Maps."
    },
    {
        "question": "Do you use maps on your phone every day?",
        "questionPt": "Você usa mapas no celular todos os dias?",
        "hintA1": "Yes, I use maps every day.",
        "hintA2": "I only use maps when I need to go to a new place I've never visited before."
    },
    {
        "question": "What places do you usually go to on foot in your city?",
        "questionPt": "Quais lugares você costuma ir a pé na sua cidade?",
        "hintA1": "I walk to the supermarket.",
        "hintA2": "I usually walk to the bakery, the gym, and the local park near my house."
    }
,
    {
        "question": "Did you use a map to find this place?",
        "questionPt": "Você usou um mapa para encontrar este lugar?",
        "hintA1": "Yes, I used my phone.",
        "hintA2": "Yes, I used Google Maps but I still got a little confused at the intersection."
    },
    {
        "question": "Do you know where the nearest subway station is?",
        "questionPt": "Você sabe onde fica a estação de metrô mais próxima?",
        "hintA1": "It is down the street.",
        "hintA2": "I think it is about two blocks from here if you turn right at the corner."
    },
    {
        "question": "Where did you park your car?",
        "questionPt": "Onde você estacionou o seu carro?",
        "hintA1": "I parked on the street.",
        "hintA2": "I parked in the public garage because there were no spots on the street."
    },
    {
        "question": "Do you usually walk or drive to work?",
        "questionPt": "Você costuma ir a pé ou de carro para o trabalho?",
        "hintA1": "I walk to work.",
        "hintA2": "I drive when it rains, but I usually prefer to walk because it is only fifteen minutes."
    },
    {
        "question": "Did you get lost yesterday in the city?",
        "questionPt": "Você se perdeu ontem na cidade?",
        "hintA1": "Yes, a little bit.",
        "hintA2": "Yes, I took the wrong bus and ended up in a completely different neighborhood."
    }
    ],
    title: 'Street Directions & Local Interactions',
    titlePt: 'Direções na Rua e Interações Locais',
    description: 'Ask for directions, understand navigation, and interact with friendly locals.',
    descriptionPt: 'Peça direções, entenda orientações e interaja com moradores locais.',
    icon: '🗺️',
    color: 'mint',
    imagePath: '/images/directions_scene.png',
    dialogues: [
      { speaker: 'tourist', english: "Excuse me, do you speak English? Could you help me?", portuguese: "Com licença, você fala inglês? Você poderia me ajudar?" },
      { speaker: 'local', english: "Yes, I do! Of course, what do you need?", portuguese: "Sim, eu falo! Claro, do que você precisa?" },
      { speaker: 'tourist', english: "My phone died and I'm a bit lost. How do I get to the Natural History Museum from here?", portuguese: "Meu celular descarregou e estou um pouco perdido. Como eu chego ao Museu de História Natural daqui?" },
      { speaker: 'local', english: "Oh, the museum! It's actually not too far. You can walk there in about fifteen minutes.", portuguese: "Ah, o museu! Na verdade, não é muito longe. Você pode ir andando em cerca de quinze minutos." },
      { speaker: 'tourist', english: "That's perfect. Which way should I go?", portuguese: "Isso é perfeito. Para que lado devo ir?" },
      { speaker: 'local', english: "First, go straight down this street for three blocks until you see a big pharmacy on the corner.", portuguese: "Primeiro, siga direto por esta rua por três quarteirões até ver uma grande farmácia na esquina." },
      { speaker: 'tourist', english: "Straight for three blocks, pharmacy on the corner. Got it.", portuguese: "Direto por três quarteirões, farmácia na esquina. Entendi." },
      { speaker: 'local', english: "Exactly. Then, turn left and cross the street at the traffic light.", portuguese: "Exatamente. Então, vire à esquerda e atravesse a rua no semáforo." },
      { speaker: 'local', english: "Keep walking past the subway station, and the museum will be on your right-hand side.", portuguese: "Continue andando passando pela estação de metrô, e o museu estará do seu lado direito." },
      { speaker: 'tourist', english: "Is it a big building? Will it be easy to see?", portuguese: "É um prédio grande? Será fácil de ver?" },
      { speaker: 'local', english: "You can't miss it! It's a huge building right across from the park.", portuguese: "Não tem como errar! É um prédio enorme bem em frente ao parque." },
      { speaker: 'tourist', english: "Thank you so much for your help. I really appreciate it.", portuguese: "Muito obrigado pela sua ajuda. Eu agradeço muito." },
      { speaker: 'local', english: "No problem at all! Where are you visiting from?", portuguese: "Sem problemas! De onde você está visitando?" },
      { speaker: 'tourist', english: "I'm visiting from Brazil.", portuguese: "Estou visitando do Brasil." },
      { speaker: 'local', english: "Oh, cool! Well, I hope you enjoy the museum and have a great time in the city!", portuguese: "Ah, legal! Bem, espero que você aproveite o museu e se divirta muito na cidade!" },
      { speaker: 'tourist', english: "Thanks again. Have a good day!", portuguese: "Obrigado de novo. Tenha um bom dia!" }
],
    dialoguesBeginner: [
      { speaker: 'tourist', english: "Excuse me. Can you help me?", portuguese: "Com licença. Você pode me ajudar?" },
      { speaker: 'local', english: "Yes. How can I help?", portuguese: "Sim. Como posso ajudar?" },
      { speaker: 'tourist', english: "Where is the museum?", portuguese: "Onde é o museu?" },
      { speaker: 'local', english: "Go straight for two blocks.", portuguese: "Siga direto por dois quarteirões." },
      { speaker: 'local', english: "Then, turn left.", portuguese: "Então, vire à esquerda." },
      { speaker: 'tourist', english: "Is it near here?", portuguese: "É perto daqui?" },
      { speaker: 'local', english: "Yes. It is next to the park.", portuguese: "Sim. É ao lado do parque." },
      { speaker: 'tourist', english: "Thank you very much!", portuguese: "Muito obrigado!" },
      { speaker: 'local', english: "You are welcome!", portuguese: "De nada!" }
,

      {
            speaker: "native",
            english: "Is it far from here?",
            portuguese: "É longe daqui?"
      },
      {
            speaker: "student",
            english: "No, it is very close.",
            portuguese: "Não, é muito perto."
      },
      {
            speaker: "native",
            english: "Can I walk there?",
            portuguese: "Posso ir a pé?"
      },
      {
            speaker: "student",
            english: "Yes. It takes only five minutes.",
            portuguese: "Sim. Leva apenas cinco minutos."
      },
      {
            speaker: "native",
            english: "Do I need to cross the street?",
            portuguese: "Preciso atravessar a rua?"
      },
      {
            speaker: "student",
            english: "Yes, cross the street at the traffic light.",
            portuguese: "Sim, atravesse a rua no semáforo."
      },
      {
            speaker: "native",
            english: "Thank you for your help.",
            portuguese: "Obrigado pela sua ajuda."
      },
      {
            speaker: "student",
            english: "No problem. Have a nice day.",
            portuguese: "Sem problemas. Tenha um bom dia."
      }
],
    dialogues2: [
      { speaker: 'tourist', english: "Excuse me, I'm looking for a pharmacy. Is there one nearby?", portuguese: "Com licença, estou procurando uma farmácia. Existe alguma por perto?" },
      { speaker: 'local', english: "Yes, there is a CVS just around the corner.", portuguese: "Sim, tem uma CVS logo ali na esquina." },
      { speaker: 'tourist', english: "Which way is that? I'm not familiar with the area.", portuguese: "Para que lado fica? Não conheço bem a área." },
      { speaker: 'local', english: "Walk to the end of this block and turn right at the traffic lights.", portuguese: "Caminhe até o final deste quarteirão e vire à direita nos semáforos." },
      { speaker: 'tourist', english: "Right at the lights. And then?", portuguese: "Direita nos semáforos. E depois?" },
      { speaker: 'local', english: "Keep going for about fifty yards. It's right next to the bank.", portuguese: "Continue por cerca de cinquenta metros. Fica bem ao lado do banco." },
      { speaker: 'tourist', english: "Is it open 24 hours? I really need some medicine.", portuguese: "Fica aberta 24 horas? Preciso muito de um remédio." },
      { speaker: 'local', english: "Yes, that one is open 24/7. You should be able to find everything you need.", portuguese: "Sim, essa fica aberta 24 horas por dia, 7 dias por semana. Você deve encontrar tudo o que precisa." },
      { speaker: 'tourist', english: "Thank you so much. You've been very helpful.", portuguese: "Muito obrigado. Você foi muito prestativo." },
      { speaker: 'local', english: "No problem. Hope you feel better soon!", portuguese: "Sem problemas. Espero que você se sinta melhor logo!" }
],
    dialoguesBeginner2: [
      { speaker: 'tourist', english: "Excuse me. Is there a pharmacy near here?", portuguese: "Com licença. Tem uma farmácia perto daqui?" },
      { speaker: 'local', english: "Yes. Go to the corner.", portuguese: "Sim. Vá até a esquina." },
      { speaker: 'local', english: "Then, turn right.", portuguese: "Então, vire à direita." },
      { speaker: 'tourist', english: "Is it next to the bank?", portuguese: "É ao lado do banco?" },
      { speaker: 'local', english: "Yes, it is. It is open 24 hours.", portuguese: "Sim, é. Fica aberta 24 horas." },
      { speaker: 'tourist', english: "Thank you!", portuguese: "Obrigado!" },
      { speaker: 'local', english: "You are welcome!", portuguese: "De nada!" }
,

      {
            speaker: "native",
            english: "Excuse me, where is the nearest ATM?",
            portuguese: "Com licença, onde fica o caixa eletrônico mais próximo?"
      },
      {
            speaker: "student",
            english: "It is inside the supermarket.",
            portuguese: "Fica dentro do supermercado."
      },
      {
            speaker: "native",
            english: "Where is the supermarket?",
            portuguese: "Onde é o supermercado?"
      },
      {
            speaker: "student",
            english: "Go straight and turn left.",
            portuguese: "Siga reto e vire à esquerda."
      },
      {
            speaker: "native",
            english: "Is it on the right side?",
            portuguese: "Fica no lado direito?"
      },
      {
            speaker: "student",
            english: "No, it is on the left side.",
            portuguese: "Não, fica no lado esquerdo."
      },
      {
            speaker: "native",
            english: "I understand now. Thanks.",
            portuguese: "Entendi agora. Obrigado."
      },
      {
            speaker: "student",
            english: "You are welcome.",
            portuguese: "De nada."
      }
],
            importantPhrases: [
      {
            pt: "Pode mostrar no mapa?",
            en: "Can you show me on the map?"
      },
      {
            pt: "Fica do lado esquerdo.",
            en: "It is on the left side."
      },
      {
            pt: "Fica perto do banco?",
            en: "Is it near the bank?"
      },
      {
            pt: "Atravesse a rua.",
            en: "Cross the street."
      },
      {
            pt: "É seguro caminhar aqui?",
            en: "Is it safe to walk here?"
      },
      {
            pt: "Estou procurando o museu.",
            en: "I am looking for the museum."
      }
],
        problems: [
      {
            descriptionPt: "Você seguiu as instruções, mas se perdeu completamente."
      },
      {
            descriptionPt: "Seu celular ficou sem bateria e você precisa perguntar como chegar ao hotel."
      }
],
    vocabulary: [
      { english: "Turn left", portuguese: "Vire à esquerda",
        sentenceA1: "Turn left at the corner.",
        sentenceA2: "Turn left after the traffic light and walk two more blocks.",
        sentenceA1Pt: "Vire à esquerda na esquina.",
        sentenceA2Pt: "Vire à esquerda depois do semáforo e ande mais dois quarteirões."
      },
      { english: "Turn right", portuguese: "Vire à direita",
        sentenceA1: "Turn right here.",
        sentenceA2: "Turn right at the next intersection and you will see the bank.",
        sentenceA1Pt: "Vire à direita aqui.",
        sentenceA2Pt: "Vire à direita na próxima interseção e verá o banco."
      },
      { english: "Go straight", portuguese: "Siga em frente",
        sentenceA1: "Go straight two blocks.",
        sentenceA2: "Go straight for five minutes and the museum is on your left.",
        sentenceA1Pt: "Siga em frente dois quarteirões.",
        sentenceA2Pt: "Siga em frente por cinco minutos e o museu fica à sua esquerda."
      },
      { english: "Block", portuguese: "Quarteirão / Bloco",
        sentenceA1: "It is two blocks away.",
        sentenceA2: "The pharmacy is about three blocks from here.",
        sentenceA1Pt: "Fica a dois quarteirões.",
        sentenceA2Pt: "A farmácia fica a três quarteirões daqui."
      },
      { english: "Corner", portuguese: "Esquina",
        sentenceA1: "It is on the corner.",
        sentenceA2: "There is a great coffee shop on the corner of Fifth Avenue.",
        sentenceA1Pt: "Fica na esquina.",
        sentenceA2Pt: "Tem uma ótima cafeteria na esquina da Quinta Avenida."
      },
      { english: "Cross the street", portuguese: "Atravessar a rua",
        sentenceA1: "Cross the street here.",
        sentenceA2: "Cross the street at the crosswalk and the store is right there.",
        sentenceA1Pt: "Atravesse a rua aqui.",
        sentenceA2Pt: "Atravesse na faixa de pedestres e a loja fica ali."
      },
      { english: "Traffic light", portuguese: "Semáforo",
        sentenceA1: "Stop at the traffic light.",
        sentenceA2: "Wait for the traffic light to turn green before you cross.",
        sentenceA1Pt: "Pare no semáforo.",
        sentenceA2Pt: "Espere o semáforo ficar verde antes de atravessar."
      },
      { english: "Sidewalk", portuguese: "Calçada",
        sentenceA1: "Walk on the sidewalk.",
        sentenceA2: "The sidewalk is very wide here so it is easy to walk.",
        sentenceA1Pt: "Ande na calçada.",
        sentenceA2Pt: "A calçada aqui é bem larga então é fácil andar."
      },
      { english: "Crosswalk", portuguese: "Faixa de pedestres",
        sentenceA1: "Use the crosswalk.",
        sentenceA2: "Always use the crosswalk to cross the street safely.",
        sentenceA1Pt: "Use a faixa de pedestres.",
        sentenceA2Pt: "Sempre use a faixa de pedestres para atravessar com segurança."
      },
      { english: "Intersection", portuguese: "Interseção / Cruzamento",
        sentenceA1: "It is at the intersection.",
        sentenceA2: "The accident happened at the intersection of Main and Oak.",
        sentenceA1Pt: "Fica na interseção.",
        sentenceA2Pt: "O acidente aconteceu na interseção da Main com a Oak."
      },
      { english: "Across from", portuguese: "Em frente a",
        sentenceA1: "It is across from the park.",
        sentenceA2: "The restaurant is directly across from the movie theater.",
        sentenceA1Pt: "Fica em frente ao parque.",
        sentenceA2Pt: "O restaurante fica em frente ao cinema."
      },
      { english: "Next to", portuguese: "Ao lado de",
        sentenceA1: "It is next to the bank.",
        sentenceA2: "The post office is next to the pharmacy on the main street.",
        sentenceA1Pt: "Fica ao lado do banco.",
        sentenceA2Pt: "O correio fica ao lado da farmácia na rua principal."
      },
      { english: "Downtown", portuguese: "Centro da cidade",
        sentenceA1: "I am going downtown.",
        sentenceA2: "Downtown is always crowded on weekends because of the shops.",
        sentenceA1Pt: "Estou indo ao centro.",
        sentenceA2Pt: "O centro está sempre lotado nos fins de semana por causa das lojas."
      },
      { english: "Lost", portuguese: "Perdido(a)",
        sentenceA1: "Help me, I am lost.",
        sentenceA2: "I got lost in the subway station because it has too many exits.",
        sentenceA1Pt: "Ajude-me, estou perdido.",
        sentenceA2Pt: "Eu me perdi na estação de metrô porque ela tem saídas demais."
      },
      { english: "Map", portuguese: "Mapa",
        sentenceA1: "Olhe no mapa.",
        sentenceA2: "Você pode me mostrar nossa localização atual neste mapa de papel?",
        sentenceA1Pt: "Olhe no mapa.",
        sentenceA2Pt: "Você pode me mostrar nossa localização atual neste mapa de papel?"
      },
      { english: "Behind", portuguese: "Atrás de",
        sentenceA1: "It is behind the hotel.",
        sentenceA2: "The parking lot is located right behind the main building.",
        sentenceA1Pt: "Fica atrás do hotel.",
        sentenceA2Pt: "O estacionamento fica localizado bem atrás do prédio principal."
      },
      { english: "Far", portuguese: "Longe",
        sentenceA1: "Is the station far?",
        sentenceA2: "The airport is quite far from here, you should take a highway.",
        sentenceA1Pt: "A estação é longe?",
        sentenceA2Pt: "O aeroporto é bastante longe daqui, você deveria pegar a rodovia."
      },
      { english: "Nearby", portuguese: "Perto / Próximo",
        sentenceA1: "Is there a café nearby?",
        sentenceA2: "There are several good restaurants nearby within walking distance.",
        sentenceA1Pt: "Tem alguma cafeteria perto?",
        sentenceA2Pt: "Há vários bons restaurantes próximos a uma curta caminhada de distância."
      }
],
    flashcards: [
      { english: "Turn Left", portuguese: "Vire à esquerda", icon: "⬅️" },
      { english: "Turn Right", portuguese: "Vire à direita", icon: "➡️" },
      { english: "Go Straight", portuguese: "Siga em frente", icon: "⬆️" },
      { english: "Cross the Street", portuguese: "Atravesse a rua", icon: "🚶" },
      { english: "Corner", portuguese: "Esquina", icon: "📐" },
      { english: "Block", portuguese: "Quarteirão", icon: "🏘️" },
      { english: "Traffic Light", portuguese: "Semáforo", icon: "🚦" },
      { english: "Sidewalk", portuguese: "Calçada", icon: "🛤️" }
],
    culturalTips: [
      {
        title: "Directness",
        titlePt: "Objetividade",
        content: "Americans value directness. Start with 'Excuse me' to get attention, then get straight to your question.",
        contentPt: "Americanos valorizam objetividade. Comece com 'Excuse me' para chamar atenção e vá direto ao ponto."
},
      {
        title: "Block Size",
        titlePt: "Tamanho do Quarteirão",
        content: "City blocks vary. In NYC, 'long blocks' (avenues) are much longer than 'short blocks' (streets). Walk accordingly!",
        contentPt: "Quarteirões variam. Em NYC, 'long blocks' (avenidas) são bem mais longos que 'short blocks' (ruas). Planeje sua caminhada!"
},
      {
        title: "Public Safety",
        titlePt: "Segurança Pública",
        content: "If you are lost, go inside a store or cafe to check your map. Avoid looking at your phone in isolated areas at night.",
        contentPt: "Se estiver perdido, entre em uma loja ou café para checar o mapa. Evite ficar no celular em áreas isoladas à noite."
}
    ],
  reading: {
      textA1: 'Sarah is lost in the city. She wants to go to the museum. She sees a police officer. She asks for help. She says, \'Excuse me, where is the museum?\' The officer smiles. He points down the street. He says, \'Go straight for two blocks. Then, turn left at the traffic light. The museum is on the right.\' Sarah says thank you. She walks down the street. She passes a bank and a park. She turns left at the light. She sees the big museum. She is very happy.',
      textA1Pt: 'Sarah está perdida na cidade. Ela quer ir ao museu. Ela vê um policial. Ela pede ajuda. Ela diz: \'Com licença, onde fica o museu?\'. O policial sorri. Ele aponta para a rua. Ele diz: \'Siga em frente por dois quarteirões. Então, vire à esquerda no semáforo. O museu fica à direita.\' Sarah agradece. Ela desce a rua. Ela passa por um banco e um parque. Ela vira à esquerda no semáforo. Ela vê o grande museu. Ela está muito feliz.',
      textA2: 'Sarah found herself completely disoriented while exploring the historic district of the city. She was trying to locate the famous modern art museum but her phone battery had just died. Spotting a friendly local walking a dog, she approached and asked for directions. \'Excuse me, could you point me towards the modern art museum?\' she asked politely. The local paused and thought for a moment. \'Sure! You need to head straight down this avenue until you reach the central roundabout. Take the second exit onto Elm Street. Keep walking past the old library and the cathedral. Take a sharp right at the pedestrian crossing, and you\'ll see the museum right across from the subway station.\' Sarah repeated the instructions to make sure she understood, thanked the local profusely, and started walking. She carefully followed the landmarks, navigating through the busy sidewalks. After about ten minutes of brisk walking, she spotted the striking glass architecture of the museum right where the local had promised.',
      textA2Pt: 'Sarah se viu completamente desorientada enquanto explorava o distrito histórico da cidade. Ela estava tentando localizar o famoso museu de arte moderna, mas a bateria do seu telefone tinha acabado de morrer. Avistando um morador simpático passeando com um cachorro, ela se aproximou e pediu informações. \'Com licença, você poderia me indicar a direção do museu de arte moderna?\' ela perguntou educadamente. O morador parou e pensou por um momento. \'Claro! Você precisa seguir direto por esta avenida até chegar à rotatória central. Pegue a segunda saída para a Elm Street. Continue andando passando pela velha biblioteca e a catedral. Faça uma curva fechada à direita na faixa de pedestres, e você verá o museu bem em frente à estação de metrô.\' Sarah repetiu as instruções para ter certeza de que entendeu, agradeceu profusamente ao morador e começou a caminhar. Ela seguiu cuidadosamente os pontos de referência, navegando pelas calçadas movimentadas. Após cerca de dez minutos de caminhada rápida, ela avistou a impressionante arquitetura de vidro do museu exatamente onde o morador havia prometido.',
      questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Sarah is eating at a restaurant', 'Sarah is lost and asking for directions to the museum', 'Sarah is looking for a police station', 'Sarah is going home'], correctIndex: 1 },
        { question: 'What does "lost" mean in this story?', questionPt: 'O que significa "lost" nesta história?', options: ['She won a prize', 'She does not know where she is', 'She found a new friend', 'She is very hungry'], correctIndex: 1 },
        { question: 'Why does Sarah ask a police officer for help?', questionPt: 'Por que Sarah pede ajuda a um policial?', options: ['Because he is a police officer and can give directions', 'Because she wants to buy something from him', 'Because she knows him', 'Because she wants to arrest someone'], correctIndex: 0 },
        { question: 'What can we guess about the museum\'s location?', questionPt: 'O que podemos adivinhar sobre a localização do museu?', options: ['It is very far away', 'It is near a park and a bank', 'It is inside a police station', 'It is not in the city'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'Why did Sarah ask a local for directions?', questionPt: 'Por que Sarah pediu informações a um morador local?', options: ['She wanted to talk', 'Her phone battery died', 'She lost her map', 'She was blind'], correctIndex: 1 },
        { question: 'What is the first major landmark she needs to reach?', questionPt: 'Qual é o primeiro grande ponto de referência que ela precisa alcançar?', options: ['The central roundabout', 'The old library', 'The cathedral', 'The subway station'], correctIndex: 0 },
        { question: 'Which street does she need to take from the roundabout?', questionPt: 'Qual rua ela precisa pegar a partir da rotatória?', options: ['Oak Street', 'Main Street', 'Elm Street', 'Pine Street'], correctIndex: 2 },
        { question: 'Where exactly is the museum located?', questionPt: 'Onde exatamente o museu está localizado?', options: ['Behind the library', 'Across from the subway station', 'Next to the cathedral', 'Inside the roundabout'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Você] Você quer perguntar onde fica o banheiro",
            expectedEn: "Where is the restroom?"
      },
      {
            promptPt: "[Pessoa] \"Fica no fim do corredor, à esquerda.\"",
            expectedEn: "It is at the end of the hall, on the left."
      },
      {
            promptPt: "[Você] Você quer perguntar como chegar à estação de trem",
            expectedEn: "How do I get to the train station?"
      },
      {
            promptPt: "[Pessoa] \"Vire à direita na próxima esquina.\"",
            expectedEn: "Turn right at the next corner."
      },
      {
            promptPt: "[Você] Você quer perguntar se é longe daqui",
            expectedEn: "Is it far from here?"
      },
      {
            promptPt: "[Você] Você quer pedir para a pessoa mostrar no mapa",
            expectedEn: "Can you show me on the map?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Get lost in a safe city without a map",
            optionAPt: "Se perder em uma cidade segura sem um mapa",
            optionBEn: "Have a map but get lost in a dangerous city",
            optionBPt: "Ter um mapa mas se perder em uma cidade perigosa"
      },
      {
            optionAEn: "Ask a local for directions in bad English",
            optionAPt: "Pedir informações a um local em um inglês ruim",
            optionBEn: "Walk around for hours trying to find it yourself",
            optionBPt: "Andar por horas tentando encontrar sozinho"
      },
      {
            optionAEn: "Your phone battery dies while using GPS",
            optionAPt: "A bateria do celular acabar enquanto usa o GPS",
            optionBEn: "The GPS takes you to the completely wrong place",
            optionBPt: "O GPS te levar para o lugar completamente errado"
      },
      {
            optionAEn: "Walk 5 miles to your destination",
            optionAPt: "Caminhar 5 milhas até o seu destino",
            optionBEn: "Wait 2 hours for a bus",
            optionBPt: "Esperar 2 horas por um ônibus"
      },
      {
            optionAEn: "Follow someone else who is also lost",
            optionAPt: "Seguir outra pessoa que também está perdida",
            optionBEn: "Lead a group in the wrong direction",
            optionBPt: "Liderar um grupo na direção errada"
      },
      {
            optionAEn: "Always turn left when you should turn right",
            optionAPt: "Sempre virar à esquerda quando deveria virar à direita",
            optionBEn: "Always miss your stop on the train",
            optionBPt: "Sempre perder a sua parada no trem"
      },
      {
            optionAEn: "Use a paper map in the rain",
            optionAPt: "Usar um mapa de papel na chuva",
            optionBEn: "Use a broken compass",
            optionBPt: "Usar uma bússola quebrada"
      }
]
},
  {
    id: 'transport',
    speakingQuestions: [
    {
        "question": "How many times a month do you use a taxi or Uber?",
        "questionPt": "Quantas vezes por mês você usa um táxi ou Uber?",
        "hintA1": "I use Uber two times a month.",
        "hintA2": "I use ride apps about five times a month, mostly when it's raining or late at night."
    },
    {
        "question": "Do you prefer taking a taxi or an Uber? Why?",
        "questionPt": "Você prefere pegar um táxi ou um Uber? Por quê?",
        "hintA1": "I prefer Uber because it is cheap.",
        "hintA2": "I prefer Uber because I can see the price before the ride starts."
    },
    {
        "question": "In what situations do you choose to use public transportation?",
        "questionPt": "Em quais situações você escolhe usar o transporte público?",
        "hintA1": "I use the bus to go to work.",
        "hintA2": "I use public transport every day to go to work to avoid the heavy traffic."
    }
,
    {
        "question": "Did you buy a ticket for the train?",
        "questionPt": "Você comprou um bilhete para o trem?",
        "hintA1": "Yes, I bought it online.",
        "hintA2": "Yes, I bought a weekly pass at the station this morning. It saves money."
    },
    {
        "question": "What time does the last subway leave?",
        "questionPt": "A que horas sai o último metrô?",
        "hintA1": "It leaves at midnight.",
        "hintA2": "The last train departs at around midnight on weekdays and 1 AM on weekends."
    },
    {
        "question": "Did you take a taxi from the airport?",
        "questionPt": "Você pegou um táxi do aeroporto?",
        "hintA1": "No, I took the bus.",
        "hintA2": "No, I decided to use Uber because it was much cheaper than a regular taxi."
    },
    {
        "question": "Do you ride a bicycle in your city?",
        "questionPt": "Você anda de bicicleta na sua cidade?",
        "hintA1": "Sometimes on weekends.",
        "hintA2": "Yes, I ride my bike to work every day when the weather is nice."
    },
    {
        "question": "How long did it take to get here today?",
        "questionPt": "Quanto tempo levou para chegar aqui hoje?",
        "hintA1": "It took thirty minutes.",
        "hintA2": "It took about an hour because the traffic was really bad this morning."
    }
    ],
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
          { speaker: 'student', english: "Hi! Are you Jonathan for Ana?", portuguese: "Oi! Você é o Jonathan para a Ana?" },
          { speaker: 'native', english: "Yes, that's me! Are you Ana? Hop in!", portuguese: "Sim, sou eu! Você é a Ana? Pode entrar!" },
          { speaker: 'student', english: "I'm going to Times Square, please. Specifically near the TKTS booth.", portuguese: "Eu vou para a Times Square, por favor. Especificamente perto do guichê TKTS." },
          { speaker: 'native', english: "Sure thing. It's about fifteen minutes from here. Do you have a preferred route?", portuguese: "Claro. São cerca de quinze minutos daqui. Você tem uma rota preferida?" },
          { speaker: 'student', english: "No, whatever the GPS says is fine.", portuguese: "Não, o que o GPS disser está ótimo." },
          { speaker: 'native', english: "Alright. Is the air conditioning okay for you?", portuguese: "Certo. O ar condicionado está bom para você?" },
          { speaker: 'student', english: "Could you turn it down a little bit, please?", portuguese: "Você poderia abaixar um pouquinho, por favor?" },
          { speaker: 'native', english: "No problem. Are you visiting New York for the first time?", portuguese: "Sem problema. Você está visitando Nova York pela primeira vez?" },
          { speaker: 'student', english: "Yes! It's very busy, but I love it.", portuguese: "Sim! É muito movimentada, mas estou adorando." },
          { speaker: 'native', english: "It is! The traffic gets pretty bad around this time. Looks like we are hitting a traffic jam.", portuguese: "É sim! O trânsito fica bem ruim por essa hora. Parece que estamos pegando um engarrafamento." },
          { speaker: 'student', english: "How much longer do you think it will take?", portuguese: "Quanto tempo mais você acha que vai levar?" },
          { speaker: 'native', english: "Maybe an extra five minutes. We are almost there.", portuguese: "Talvez mais uns cinco minutos. Estamos quase lá." },
          { speaker: 'student', english: "Can you drop me off right at this corner, before the light?", portuguese: "Você pode me deixar bem nesta esquina, antes do semáforo?" },
          { speaker: 'native', english: "Sure, I'll pull over here. Please watch out for bikes when you open the door.", portuguese: "Claro, vou encostar aqui. Por favor, cuidado com as bicicletas ao abrir a porta." },
          { speaker: 'student', english: "Thank you so much! Have a great day.", portuguese: "Muito obrigada! Tenha um ótimo dia." },
          { speaker: 'native', english: "You too! Don't forget all your belongings.", portuguese: "Você também! Não esqueça todos os seus pertences." }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "Hi! I am Ana. Are you my Uber?", portuguese: "Oi! Eu sou a Ana. Você é meu Uber?" },
          { speaker: 'native', english: "Yes. Get in, please.", portuguese: "Sim. Entre, por favor." },
          { speaker: 'student', english: "I am going to Times Square.", portuguese: "Vou para a Times Square." },
          { speaker: 'native', english: "Okay. It takes 15 minutes.", portuguese: "Ok. Leva 15 minutos." },
          { speaker: 'student', english: "Can you turn off the air conditioning?", portuguese: "Você pode desligar o ar condicionado?" },
          { speaker: 'native', english: "Yes, of course.", portuguese: "Sim, claro." },
          { speaker: 'student', english: "Stop here, please.", portuguese: "Pare aqui, por favor." },
          { speaker: 'native', english: "We are here. Have a good day!", portuguese: "Chegamos. Tenha um bom dia!" },
          { speaker: 'student', english: "Thank you! Goodbye!", portuguese: "Obrigado! Tchau!" }
,

      {
            speaker: "native",
            english: "Does this bus go to the museum?",
            portuguese: "Este ônibus vai para o museu?"
      },
      {
            speaker: "student",
            english: "Yes, it stops right in front.",
            portuguese: "Sim, ele para bem em frente."
      },
      {
            speaker: "native",
            english: "How much is the ticket?",
            portuguese: "Quanto custa a passagem?"
      },
      {
            speaker: "student",
            english: "It is two dollars and fifty cents.",
            portuguese: "Custa dois dólares e cinquenta centavos."
      },
      {
            speaker: "native",
            english: "Do I pay the driver?",
            portuguese: "Eu pago ao motorista?"
      },
      {
            speaker: "student",
            english: "Yes, you can pay with cash.",
            portuguese: "Sim, você pode pagar com dinheiro."
      },
      {
            speaker: "native",
            english: "Can you tell me when to get off?",
            portuguese: "Você pode me dizer quando descer?"
      },
      {
            speaker: "student",
            english: "Sure. I will let you know.",
            portuguese: "Claro. Eu te aviso."
      }
],
        dialogues2: [
          { speaker: 'native', english: "Hi, I'm your Uber driver. Are you John?", portuguese: "Oi, sou seu motorista do Uber. Você é o John?" },
          { speaker: 'student', english: "No, I'm Ana. Oh, wait, the app says my driver is Mark in a silver Toyota.", portuguese: "Não, eu sou a Ana. Ah, espere, o app diz que meu motorista é o Mark em um Toyota prata." },
          { speaker: 'native', english: "My apologies, I'm Mark. The silver Toyota is right behind this car.", portuguese: "Peço desculpas, eu sou o Mark. O Toyota prata está logo atrás deste carro." },
          { speaker: 'student', english: "Oh, I see it now! Sorry for the confusion.", portuguese: "Ah, estou vendo agora! Desculpe pela confusão." },
          { speaker: 'native', english: "No problem. Are we still heading to the airport?", portuguese: "Sem problemas. Ainda vamos para o aeroporto?" },
          { speaker: 'student', english: "Yes, JFK Terminal 4, please. I'm a bit running late for my flight.", portuguese: "Sim, JFK Terminal 4, por favor. Estou um pouco atrasada para o meu voo." },
          { speaker: 'native', english: "I'll do my best to get you there quickly. The traffic is a bit heavy on the highway today.", portuguese: "Farei o meu melhor para te levar lá rápido. O trânsito está um pouco pesado na rodovia hoje." },
          { speaker: 'student', english: "Thank you. Do you have a phone charger I could use?", portuguese: "Obrigada. Você tem um carregador de celular que eu possa usar?" },
          { speaker: 'native', english: "Sure, there's one in the center console. Feel free to use it.", portuguese: "Claro, tem um no console central. Sinta-se à vontade para usar." }
],
        dialoguesBeginner2: [
          { speaker: 'native', english: "Are you Ana?", portuguese: "Você é a Ana?" },
          { speaker: 'student', english: "Yes, I am. Are you Mark?", portuguese: "Sim, eu sou. Você é o Mark?" },
          { speaker: 'native', english: "Yes. I am your driver.", portuguese: "Sim. Eu sou seu motorista." },
          { speaker: 'student', english: "I am going to the airport, please.", portuguese: "Vou para o aeroporto, por favor." },
          { speaker: 'native', english: "Okay. Put your bag in the trunk.", portuguese: "Ok. Coloque sua mala no porta-malas." },
          { speaker: 'student', english: "Thank you. Can I charge my phone?", portuguese: "Obrigada. Posso carregar meu celular?" },
          { speaker: 'native', english: "Yes. The charger is here.", portuguese: "Sim. O carregador está aqui." },
          { speaker: 'student', english: "Great. Thank you!", portuguese: "Legal. Obrigada!" }
,

      {
            speaker: "native",
            english: "What time is the next train?",
            portuguese: "A que horas é o próximo trem?"
      },
      {
            speaker: "student",
            english: "The next train is at four fifteen.",
            portuguese: "O próximo trem é às quatro e quinze."
      },
      {
            speaker: "native",
            english: "Is it a fast train?",
            portuguese: "É um trem rápido?"
      },
      {
            speaker: "student",
            english: "No, it is the local train.",
            portuguese: "Não, é o trem local."
      },
      {
            speaker: "native",
            english: "Does it stop at many stations?",
            portuguese: "Ele para em muitas estações?"
      },
      {
            speaker: "student",
            english: "Yes, it stops at every station.",
            portuguese: "Sim, ele para em todas as estações."
      },
      {
            speaker: "native",
            english: "Okay, I will buy a ticket.",
            portuguese: "Ok, eu vou comprar uma passagem."
      },
      {
            speaker: "student",
            english: "The ticket machine is over there.",
            portuguese: "A máquina de passagens fica ali."
      }
]
},
      {
        title: 'Taking the Metro',
        titlePt: 'Pegando o Metrô',
        icon: '🚇',
        dialogues: [
          { speaker: 'student', english: "Excuse me, where can I buy a metro card?", portuguese: "Com licença, onde posso comprar um cartão de metrô?" },
          { speaker: 'native', english: "There's a kiosk right over there, next to the entrance. You can pay with cash or card.", portuguese: "Tem um quiosque bem ali, perto da entrada. Você pode pagar com dinheiro ou cartão." },
          { speaker: 'student', english: "Thank you. By the way, which line goes to Central Park?", portuguese: "Obrigada. A propósito, qual linha vai para o Central Park?" },
          { speaker: 'native', english: "You'll want to take the 1 train, direction uptown. It's about five stops from here.", portuguese: "Você vai querer pegar o trem 1, direção uptown. São umas cinco paradas daqui." },
          { speaker: 'student', english: "Is it an express train or a local train?", portuguese: "É um trem expresso ou um trem local?" },
          { speaker: 'native', english: "It's a local train, so it stops at every station. Make sure you don't take the 2 or 3, those are express.", portuguese: "É um trem local, então para em todas as estações. Certifique-se de não pegar o 2 ou 3, esses são expressos." },
          { speaker: 'student', english: "Got it. Do I need to transfer to another line?", portuguese: "Entendi. Eu preciso fazer baldeação para outra linha?" },
          { speaker: 'native', english: "No, it's a direct ride. Just get off at 72nd Street.", portuguese: "Não, é viagem direta. Apenas desça na 72nd Street." },
          { speaker: 'student', english: "Perfect. And which platform should I go to?", portuguese: "Perfeito. E para qual plataforma eu devo ir?" },
          { speaker: 'native', english: "Go down those stairs and head to the uptown platform on the right side.", portuguese: "Desça aquelas escadas e vá para a plataforma uptown do lado direito." },
          { speaker: 'student', english: "Is it safe to ride the subway at this time?", portuguese: "É seguro andar de metrô a esta hora?" },
          { speaker: 'native', english: "Yes, it's rush hour so there are plenty of people. Just keep an eye on your belongings.", portuguese: "Sim, é hora do rush então tem muita gente. Apenas fique de olho nos seus pertences." },
          { speaker: 'student', english: "Thank you so much for your help! Have a good one.", portuguese: "Muito obrigada pela sua ajuda! Tenha um bom dia." },
          { speaker: 'native', english: "You're welcome! Stand clear of the closing doors!", portuguese: "De nada! Afaste-se das portas fechando!" }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "Where can I buy a ticket?", portuguese: "Onde posso comprar um bilhete?" },
          { speaker: 'native', english: "At the kiosk, over there.", portuguese: "No quiosque, ali." },
          { speaker: 'student', english: "Which train goes to Central Park?", portuguese: "Qual trem vai para o Central Park?" },
          { speaker: 'native', english: "Take the Number 1 train.", portuguese: "Pegue o trem número 1." },
          { speaker: 'student', english: "How many stops?", portuguese: "Quantas paradas?" },
          { speaker: 'native', english: "Five stops.", portuguese: "Cinco paradas." },
          { speaker: 'student', english: "Thank you for your help!", portuguese: "Obrigado pela sua ajuda!" },
          { speaker: 'native', english: "You are welcome!", portuguese: "De nada!" }
,

      {
            speaker: "native",
            english: "Does this bus go to the museum?",
            portuguese: "Este ônibus vai para o museu?"
      },
      {
            speaker: "student",
            english: "Yes, it stops right in front.",
            portuguese: "Sim, ele para bem em frente."
      },
      {
            speaker: "native",
            english: "How much is the ticket?",
            portuguese: "Quanto custa a passagem?"
      },
      {
            speaker: "student",
            english: "It is two dollars and fifty cents.",
            portuguese: "Custa dois dólares e cinquenta centavos."
      },
      {
            speaker: "native",
            english: "Do I pay the driver?",
            portuguese: "Eu pago ao motorista?"
      },
      {
            speaker: "student",
            english: "Yes, you can pay with cash.",
            portuguese: "Sim, você pode pagar com dinheiro."
      },
      {
            speaker: "native",
            english: "Can you tell me when to get off?",
            portuguese: "Você pode me dizer quando descer?"
      },
      {
            speaker: "student",
            english: "Sure. I will let you know.",
            portuguese: "Claro. Eu te aviso."
      }
],
        dialogues2: [
          { speaker: 'student', english: "Excuse me, does this train go to Brooklyn?", portuguese: "Com licença, este trem vai para o Brooklyn?" },
          { speaker: 'native', english: "No, this is the downtown train. You need to take the uptown train on the other platform.", portuguese: "Não, este é o trem que vai para o centro. Você precisa pegar o trem sentido subúrbio na outra plataforma." },
          { speaker: 'student', english: "Oh, I see. How do I get to the other side?", portuguese: "Ah, entendi. Como chego ao outro lado?" },
          { speaker: 'native', english: "Go back up the stairs, cross the overpass, and go down to platform 4.", portuguese: "Suba as escadas de volta, atravesse a passarela e desça para a plataforma 4." },
          { speaker: 'student', english: "Thank you. Is there an extra charge to change platforms?", portuguese: "Obrigado. Tem alguma taxa extra para mudar de plataforma?" },
          { speaker: 'native', english: "No, as long as you don't leave the station, your ticket is still valid.", portuguese: "Não, desde que você não saia da estação, seu bilhete ainda é válido." },
          { speaker: 'student', english: "Great. How often do the trains run on weekends?", portuguese: "Ótimo. Com que frequência os trens passam nos fins de semana?" },
          { speaker: 'native', english: "On Sundays, they usually run every fifteen to twenty minutes.", portuguese: "Aos domingos, eles costumam passar a cada quinze ou vinte minutos." }
],
        dialoguesBeginner2: [
          { speaker: 'student', english: "Does this train go to Brooklyn?", portuguese: "Este trem vai para o Brooklyn?" },
          { speaker: 'native', english: "No. Go to platform 4.", portuguese: "Não. Vá para a plataforma 4." },
          { speaker: 'student', english: "How do I go there?", portuguese: "Como eu vou para lá?" },
          { speaker: 'native', english: "Use the stairs over there.", portuguese: "Use as escadas ali." },
          { speaker: 'student', english: "Is my ticket valid?", portuguese: "Meu bilhete é válido?" },
          { speaker: 'native', english: "Yes, it is.", portuguese: "Sim, é." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "What time is the next train?",
            portuguese: "A que horas é o próximo trem?"
      },
      {
            speaker: "student",
            english: "The next train is at four fifteen.",
            portuguese: "O próximo trem é às quatro e quinze."
      },
      {
            speaker: "native",
            english: "Is it a fast train?",
            portuguese: "É um trem rápido?"
      },
      {
            speaker: "student",
            english: "No, it is the local train.",
            portuguese: "Não, é o trem local."
      },
      {
            speaker: "native",
            english: "Does it stop at many stations?",
            portuguese: "Ele para em muitas estações?"
      },
      {
            speaker: "student",
            english: "Yes, it stops at every station.",
            portuguese: "Sim, ele para em todas as estações."
      },
      {
            speaker: "native",
            english: "Okay, I will buy a ticket.",
            portuguese: "Ok, eu vou comprar uma passagem."
      },
      {
            speaker: "student",
            english: "The ticket machine is over there.",
            portuguese: "A máquina de passagens fica ali."
      }
]
}
],
            importantPhrases: [
      {
            pt: "Quanto tempo dura a viagem?",
            en: "How long is the trip?"
      },
      {
            pt: "Qual é a próxima parada?",
            en: "What is the next stop?"
      },
      {
            pt: "Preciso trocar de linha?",
            en: "Do I need to change lines?"
      },
      {
            pt: "Onde alugo uma bicicleta?",
            en: "Where do I rent a bike?"
      },
      {
            pt: "Tem ar condicionado no trem?",
            en: "Is there air conditioning on the train?"
      },
      {
            pt: "Esqueci minha mala no ônibus.",
            en: "I forgot my bag on the bus."
      }
],
        problems: [
      {
            descriptionPt: "Você pegou o trem na direção errada."
      },
      {
            descriptionPt: "Você perdeu o último ônibus da noite."
      }
],
    vocabulary: [
      { english: "Ride", portuguese: "Carona / Corrida",
        sentenceA1: "I need a ride.",
        sentenceA2: "Can you give me a ride to the airport tomorrow?",
        sentenceA1Pt: "Preciso de uma carona.",
        sentenceA2Pt: "Pode me dar uma carona ao aeroporto amanhã?"
      },
      { english: "Fare", portuguese: "Tarifa / Preço da passagem",
        sentenceA1: "How much is the fare?",
        sentenceA2: "The bus fare increased by ten percent last month.",
        sentenceA1Pt: "Quanto é a tarifa?",
        sentenceA2Pt: "A tarifa do ônibus aumentou dez por cento mês passado."
      },
      { english: "Driver", portuguese: "Motorista",
        sentenceA1: "The driver is nice.",
        sentenceA2: "The taxi driver took the fastest route to avoid traffic.",
        sentenceA1Pt: "O motorista é gentil.",
        sentenceA2Pt: "O taxista pegou a rota mais rápida para evitar trânsito."
      },
      { english: "Subway / Metro", portuguese: "Metrô",
        sentenceA1: "I take the subway every day.",
        sentenceA2: "The subway is the fastest way to get around during rush hour.",
        sentenceA1Pt: "Pego o metrô todo dia.",
        sentenceA2Pt: "O metrô é a forma mais rápida de se locomover na hora do rush."
      },
      { english: "Platform", portuguese: "Plataforma",
        sentenceA1: "Wait on platform 3.",
        sentenceA2: "The train to the airport departs from platform 5.",
        sentenceA1Pt: "Espere na plataforma 3.",
        sentenceA2Pt: "O trem para o aeroporto sai da plataforma 5."
      },
      { english: "Transfer", portuguese: "Baldeação / Conexão",
        sentenceA1: "I need to transfer here.",
        sentenceA2: "You need to transfer at the next station to the blue line.",
        sentenceA1Pt: "Preciso fazer baldeação aqui.",
        sentenceA2Pt: "Precisa fazer baldeação na próxima estação para a linha azul."
      },
      { english: "Stop", portuguese: "Parada / Ponto",
        sentenceA1: "The next stop is mine.",
        sentenceA2: "Could you tell me when we reach the stop near the hospital?",
        sentenceA1Pt: "A próxima parada é a minha.",
        sentenceA2Pt: "Pode me avisar quando chegarmos na parada perto do hospital?"
      },
      { english: "Metro card", portuguese: "Cartão do metrô",
        sentenceA1: "I need a metro card.",
        sentenceA2: "You can recharge your metro card at any station.",
        sentenceA1Pt: "Preciso de um cartão de metrô.",
        sentenceA2Pt: "Pode recarregar seu cartão em qualquer estação."
      },
      { english: "Rush hour", portuguese: "Hora do rush",
        sentenceA1: "It is rush hour now.",
        sentenceA2: "I avoid traveling during rush hour because the trains are packed.",
        sentenceA1Pt: "É hora do rush agora.",
        sentenceA2Pt: "Evito viajar na hora do rush porque os trens ficam lotados."
      },
      { english: "Passenger", portuguese: "Passageiro",
        sentenceA1: "I am a passenger.",
        sentenceA2: "The bus was full of passengers going to work.",
        sentenceA1Pt: "Sou um passageiro.",
        sentenceA2Pt: "O ônibus estava cheio de passageiros indo trabalhar."
      },
      { english: "Ticket", portuguese: "Passagem / Bilhete",
        sentenceA1: "I bought a ticket.",
        sentenceA2: "A round-trip ticket is cheaper than two one-way tickets.",
        sentenceA1Pt: "Comprei uma passagem.",
        sentenceA2Pt: "Uma passagem de ida e volta é mais barata que duas de ida."
      },
      { english: "To get on", portuguese: "Embarcar / Subir",
        sentenceA1: "I get on the bus here.",
        sentenceA2: "We need to get on the next train or we will be late.",
        sentenceA1Pt: "Pego o ônibus aqui.",
        sentenceA2Pt: "Precisamos pegar o próximo trem ou vamos nos atrasar."
      },
      { english: "To get off", portuguese: "Desembarcar / Descer",
        sentenceA1: "I get off at the next stop.",
        sentenceA2: "Remember to get off at Central Station for the museum.",
        sentenceA1Pt: "Desço na próxima parada.",
        sentenceA2Pt: "Lembre-se de descer na Estação Central para o museu."
      },
      { english: "Traffic jam", portuguese: "Engarrafamento",
        sentenceA1: "There is a traffic jam.",
        sentenceA2: "We were stuck in a traffic jam for over an hour.",
        sentenceA1Pt: "Tem um engarrafamento.",
        sentenceA2Pt: "Ficamos presos em um engarrafamento por mais de uma hora."
      },
      { english: "One-way ticket", portuguese: "Passagem de ida",
        sentenceA1: "I need a one-way ticket.",
        sentenceA2: "Buying a one-way ticket is more expensive than buying a round-trip one.",
        sentenceA1Pt: "Preciso de uma passagem de ida.",
        sentenceA2Pt: "Comprar uma passagem só de ida é mais caro do que comprar uma de ida e volta."
      },
      { english: "Round-trip ticket", portuguese: "Passagem de ida e volta",
        sentenceA1: "A round-trip ticket, please.",
        sentenceA2: "The round-trip ticket costs eighty dollars and is valid for a month.",
        sentenceA1Pt: "Passagem de ida e volta, por favor.",
        sentenceA2Pt: "A passagem de ida e volta custa oitenta dólares e é válida por um mês."
      },
      { english: "Schedule / Timetable", portuguese: "Cronograma / Horários",
        sentenceA1: "Where is the train schedule?",
        sentenceA2: "You should check the bus timetable online to see the frequency.",
        sentenceA1Pt: "Onde está o horário dos trens?",
        sentenceA2Pt: "Você deveria verificar os horários de ônibus online para ver a frequência."
      },
      { english: "Delay", portuguese: "Atraso",
        sentenceA1: "Is there a delay?",
        sentenceA2: "There is a twenty-minute delay on the red line due to mechanical issues.",
        sentenceA1Pt: "Tem algum atraso?",
        sentenceA2Pt: "Há um atraso de vinte minutos na linha vermelha devido a problemas mecânicos."
      }
],
    culturalTips: [
      {
        title: "Transport Tipping",
        titlePt: "Gorjeta no Transporte",
        content: "Tip Uber and taxi drivers 15-20%. You can add the tip in the app after your ride.",
        contentPt: "Dê gorjeta de 15-20% para motoristas de Uber e táxi. Você pode adicionar no app após a corrida."
},
      {
        title: "Escalator Etiquette",
        titlePt: "Etiqueta na Escada Rolante",
        content: "On the subway, keep to the right on escalators. The left side is for people in a hurry to pass.",
        contentPt: "No metrô, fique à direita nas escadas rolantes. O lado esquerdo é para quem tem pressa passar."
},
      {
        title: "Safety First",
        titlePt: "Segurança Primeiro",
        content: "In the subway station, always stay behind the yellow line on the platform until the train stops.",
        contentPt: "Na estação de metrô, sempre fique atrás da linha amarela na plataforma até o trem parar."
}
    ],
  reading: {
      textA1: 'Mark is at the airport. He needs to go to his hotel. He goes outside and sees a yellow taxi. He waves his hand. The taxi stops. Mark opens the door and gets in. He says, \'Take me to the Grand Hotel, please.\' The driver nods. The traffic is very bad. The car goes slowly. Mark looks out the window. He sees big buildings and many cars. After 30 minutes, they arrive at the hotel. The meter says 25 dollars. Mark pays the driver and says thank you. He takes his bags and goes inside the hotel.',
      textA1Pt: 'Mark está no aeroporto. Ele precisa ir para o seu hotel. Ele vai lá fora e vê um táxi amarelo. Ele acena com a mão. O táxi para. Mark abre a porta e entra. Ele diz: \'Leve-me ao Grand Hotel, por favor.\' O motorista assente. O trânsito está muito ruim. O carro anda devagar. Mark olha pela janela. Ele vê prédios grandes e muitos carros. Após 30 minutos, eles chegam ao hotel. O taxímetro diz 25 dólares. Mark paga o motorista e agradece. Ele pega suas malas e entra no hotel.',
      textA2: 'After collecting his luggage, Mark stepped out of the busy airport terminal and headed straight to the official taxi rank. He hopped into the back seat of a clean, yellow cab and told the driver, \'I need to go to the Grand Hotel downtown, please. Can you take the highway to avoid the local traffic?\' The driver nodded, started the meter, and merged onto the busy freeway. Despite taking the highway, they encountered bumper-to-bumper traffic near the city center due to road construction. Mark used the downtime to check his emails and admire the city skyline. Forty minutes later, the taxi pulled up smoothly to the hotel entrance. The fare on the meter read 35 dollars. Mark handed the driver a 50 dollar bill, asked him to keep the change as a tip, and quickly grabbed his heavy suitcase from the trunk.',
      textA2Pt: 'Após pegar sua bagagem, Mark saiu do movimentado terminal do aeroporto e foi direto para o ponto oficial de táxi. Ele pulou no banco de trás de um táxi amarelo limpo e disse ao motorista: \'Preciso ir para o Grand Hotel no centro, por favor. Você pode pegar a rodovia para evitar o trânsito local?\' O motorista assentiu, ligou o taxímetro e entrou na movimentada rodovia. Apesar de pegar a rodovia, eles enfrentaram trânsito intenso perto do centro da cidade devido a obras na estrada. Mark usou o tempo ocioso para verificar seus e-mails e admirar o horizonte da cidade. Quarenta minutos depois, o táxi parou suavemente na entrada do hotel. O valor no taxímetro marcava 35 dólares. Mark entregou ao motorista uma nota de 50 dólares, pediu que ficasse com o troco como gorjeta e rapidamente pegou sua mala pesada do porta-malas.',
      questionsA1: [
        { question: 'What is the main event in the text?', questionPt: 'Qual é o evento principal no texto?', options: ['Mark taking a taxi from the airport to his hotel', 'Mark buying a car', 'Mark going to a restaurant', 'Mark taking a train'], correctIndex: 0 },
        { question: 'What does "traffic is very bad" mean?', questionPt: 'O que significa "traffic is very bad"?', options: ['The cars are moving very fast', 'There are many cars and they are moving slowly', 'There are no cars on the road', 'The roads are broken'], correctIndex: 1 },
        { question: 'Why does Mark pay 25 dollars?', questionPt: 'Por que Mark paga 25 dólares?', options: ['To buy the taxi', 'Because it is the cost of the ride shown on the meter', 'To buy food', 'Because the driver is his friend'], correctIndex: 1 },
        { question: 'What can we infer about Mark\'s trip?', questionPt: 'O que podemos inferir sobre a viagem de Mark?', options: ['It was very quick', 'It took 30 minutes because of the traffic', 'He drove the car himself', 'He didn\'t arrive at the hotel'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'Where did Mark find the taxi?', questionPt: 'Onde Mark encontrou o táxi?', options: ['On the street corner', 'At the official taxi rank', 'At a bus stop', 'In a parking garage'], correctIndex: 1 },
        { question: 'What route did Mark ask the driver to take?', questionPt: 'Que rota Mark pediu ao motorista para fazer?', options: ['The scenic route', 'The local roads', 'The highway', 'The back streets'], correctIndex: 2 },
        { question: 'Why was there traffic in the city center?', questionPt: 'Por que havia trânsito no centro da cidade?', options: ['An accident', 'A parade', 'Road construction', 'Rush hour'], correctIndex: 2 },
        { question: 'How much tip did the driver get?', questionPt: 'Quanta gorjeta o motorista recebeu?', options: ['No tip', '5 dollars', '10 dollars', '15 dollars'], correctIndex: 3 }
]
},
            simulationTasks: [
      {
            promptPt: "[Atendente] \"Para onde você vai hoje?\"",
            expectedEn: "Where are you going today?"
      },
      {
            promptPt: "[Você] Você quer comprar uma passagem para o centro",
            expectedEn: "I would like a ticket to downtown, please."
      },
      {
            promptPt: "[Atendente] \"Só ida ou ida e volta?\"",
            expectedEn: "One way or round trip?"
      },
      {
            promptPt: "[Você] Você responde apenas ida",
            expectedEn: "One way, please."
      },
      {
            promptPt: "[Você] Você quer perguntar de qual plataforma o trem sai",
            expectedEn: "Which platform does the train leave from?"
      },
      {
            promptPt: "[Você] Você quer perguntar se este ônibus vai para o aeroporto",
            expectedEn: "Does this bus go to the airport?"
      },
      {
            promptPt: "[Você] Você quer perguntar quanto vai custar a corrida",
            expectedEn: "How much will the ride cost?"
      },
      {
            promptPt: "[Você] Você quer pedir para o motorista parar na próxima esquina",
            expectedEn: "Could you drop me off at the next corner?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Miss the last train home",
            optionAPt: "Perder o último trem para casa",
            optionBEn: "Get on the wrong train going the opposite way",
            optionBPt: "Pegar o trem errado indo no sentido oposto"
      },
      {
            optionAEn: "Stand on a crowded bus for 2 hours",
            optionAPt: "Ficar em pé em um ônibus lotado por 2 horas",
            optionBEn: "Sit on an empty bus but it has no AC in the summer",
            optionBPt: "Sentar em um ônibus vazio mas sem ar condicionado no verão"
      },
      {
            optionAEn: "Talk to a stranger on the subway",
            optionAPt: "Conversar com um estranho no metrô",
            optionBEn: "Pretend to sleep so nobody talks to you",
            optionBPt: "Fingir estar dormindo para ninguém falar com você"
      },
      {
            optionAEn: "Drop your ticket on the train tracks",
            optionAPt: "Derrubar seu bilhete nos trilhos do trem",
            optionBEn: "Lose your ticket inside the bus",
            optionBPt: "Perder o seu bilhete dentro do ônibus"
      },
      {
            optionAEn: "Take a fast but very expensive taxi",
            optionAPt: "Pegar um táxi rápido mas muito caro",
            optionBEn: "Take a cheap but very slow bus",
            optionBPt: "Pegar um ônibus barato mas muito lento"
      },
      {
            optionAEn: "Travel next to someone eating smelly food",
            optionAPt: "Viajar ao lado de alguém comendo comida fedorenta",
            optionBEn: "Travel next to someone playing loud music without headphones",
            optionBPt: "Viajar ao lado de alguém tocando música alta sem fones"
      },
      {
            optionAEn: "Have to run to catch the bus every day",
            optionAPt: "Ter que correr para pegar o ônibus todos os dias",
            optionBEn: "Wait 30 minutes in the cold every day",
            optionBPt: "Esperar 30 minutos no frio todos os dias"
      }
]
},
  {
    id: 'medical',
    speakingQuestions: [
    {
        "question": "How often do you go to the doctor?",
        "questionPt": "Com que frequência você vai ao médico?",
        "hintA1": "I go to the doctor once a year.",
        "hintA2": "I usually go once a year for a general check-up."
    },
    {
        "question": "What do you usually do when you have a headache?",
        "questionPt": "O que você costuma fazer quando tem dor de cabeça?",
        "hintA1": "I sleep and drink water.",
        "hintA2": "When I have a headache, I take some medicine and try to rest in a dark room."
    },
    {
        "question": "Do you think you have a healthy lifestyle?",
        "questionPt": "Você acha que tem um estilo de vida saudável?",
        "hintA1": "Yes, I eat fruits and exercise.",
        "hintA2": "I try to be healthy by working out and eating vegetables, but I love junk food sometimes."
    }
,
    {
        "question": "When did you first feel sick?",
        "questionPt": "Quando você se sentiu doente pela primeira vez?",
        "hintA1": "I felt sick yesterday.",
        "hintA2": "I started feeling sick two days ago with a sore throat and a headache."
    },
    {
        "question": "Do you take any medication every day?",
        "questionPt": "Você toma algum medicamento todos os dias?",
        "hintA1": "No, I do not take any.",
        "hintA2": "I only take vitamins in the morning but no prescription medication."
    },
    {
        "question": "Did you check your temperature this morning?",
        "questionPt": "Você verificou sua temperatura hoje de manhã?",
        "hintA1": "Yes, it was normal.",
        "hintA2": "Yes, I had a slight fever of 37.8 degrees so I decided to see a doctor."
    },
    {
        "question": "Do you have health insurance?",
        "questionPt": "Você tem plano de saúde?",
        "hintA1": "Yes, I have insurance.",
        "hintA2": "Yes, my company provides a very good health insurance plan for all employees."
    },
    {
        "question": "Did you sleep well last night?",
        "questionPt": "Você dormiu bem na noite passada?",
        "hintA1": "No, I woke up many times.",
        "hintA2": "Not really. My cough kept waking me up every couple of hours during the night."
    }
    ],
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
          { speaker: 'student', english: "Hi, I'm looking for the pharmacy counter.", portuguese: "Oi, estou procurando o balcão da farmácia." },
          { speaker: 'local', english: "You are in the right place. How can I help you today?", portuguese: "Você está no lugar certo. Como posso ajudá-lo hoje?" },
          { speaker: 'student', english: "I'm not feeling very well. I have a terrible headache and a runny nose.", portuguese: "Não estou me sentindo muito bem. Tenho uma dor de cabeça terrível e o nariz escorrendo." },
          { speaker: 'local', english: "I'm sorry to hear that. How long have you had these symptoms?", portuguese: "Sinto muito por ouvir isso. Há quanto tempo você tem esses sintomas?" },
          { speaker: 'student', english: "They started yesterday evening. Do you think it's a cold?", portuguese: "Eles começaram ontem à noite. Você acha que é um resfriado?" },
          { speaker: 'local', english: "It sounds like a common cold. Have you been checking your temperature? Do you have a fever?", portuguese: "Parece um resfriado comum. Você tem checado sua temperatura? Tem febre?" },
          { speaker: 'student', english: "No fever, just the headache and a sore throat when I swallow.", portuguese: "Sem febre, apenas a dor de cabeça e dor de garganta ao engolir." },
          { speaker: 'local', english: "For the headache, I recommend ibuprofen. And for the sore throat, we have these lozenges in aisle 4.", portuguese: "Para a dor de cabeça, recomendo ibuprofeno. E para a garganta, temos essas pastilhas no corredor 4." },
          { speaker: 'student', english: "Do I need a prescription for the ibuprofen?", portuguese: "Eu preciso de receita médica para o ibuprofeno?" },
          { speaker: 'local', english: "No, it's over-the-counter. You can just pick it up from the shelf right behind you.", portuguese: "Não, é de venda livre. Você pode apenas pegar na prateleira logo atrás de você." },
          { speaker: 'student', english: "Great. How often should I take it?", portuguese: "Ótimo. Com que frequência devo tomá-lo?" },
          { speaker: 'local', english: "Take one pill every six to eight hours, but do not exceed four pills in 24 hours.", portuguese: "Tome um comprimido a cada seis a oito horas, mas não exceda quatro comprimidos em 24 horas." },
          { speaker: 'student', english: "Is it safe to take on an empty stomach?", portuguese: "É seguro tomar com o estômago vazio?" },
          { speaker: 'local', english: "It's much better to take it with food or milk to avoid an upset stomach.", portuguese: "É muito melhor tomar com comida ou leite para evitar dor de estômago." },
          { speaker: 'student', english: "Thank you for your help. I'll go grab them now.", portuguese: "Obrigada pela sua ajuda. Vou pegá-los agora." },
          { speaker: 'local', english: "Feel better soon! The cash registers are at the front of the store.", portuguese: "Melhore logo! Os caixas ficam na frente da loja." }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "I am not feeling well.", portuguese: "Não estou me sentindo bem." },
          { speaker: 'local', english: "What is the problem?", portuguese: "Qual é o problema?" },
          { speaker: 'student', english: "I have a headache and a sore throat.", portuguese: "Tenho dor de cabeça e dor de garganta." },
          { speaker: 'local', english: "I recommend this medicine.", portuguese: "Eu recomendo este remédio." },
          { speaker: 'student', english: "Do I need a prescription?", portuguese: "Eu preciso de receita?" },
          { speaker: 'local', english: "No, you don't.", portuguese: "Não, você não precisa." },
          { speaker: 'student', english: "How many pills should I take?", portuguese: "Quantos comprimidos devo tomar?" },
          { speaker: 'local', english: "Take one pill every 8 hours.", portuguese: "Tome um comprimido a cada 8 horas." },
          { speaker: 'student', english: "Thank you very much.", portuguese: "Muito obrigado." }
,

      {
            speaker: "native",
            english: "Do you have a fever?",
            portuguese: "Você tem febre?"
      },
      {
            speaker: "student",
            english: "Yes, I feel very hot.",
            portuguese: "Sim, eu me sinto muito quente."
      },
      {
            speaker: "native",
            english: "Are you coughing?",
            portuguese: "Você está tossindo?"
      },
      {
            speaker: "student",
            english: "Yes, especially at night.",
            portuguese: "Sim, especialmente à noite."
      },
      {
            speaker: "native",
            english: "You should rest and drink water.",
            portuguese: "Você deve descansar e beber água."
      },
      {
            speaker: "student",
            english: "Do I need medicine?",
            portuguese: "Eu preciso de remédio?"
      },
      {
            speaker: "native",
            english: "Yes, take this pill twice a day.",
            portuguese: "Sim, tome este comprimido duas vezes ao dia."
      },
      {
            speaker: "student",
            english: "Okay, doctor. Thank you.",
            portuguese: "Ok, doutor. Obrigado."
      }
],
        dialogues2: [
          { speaker: 'student', english: "Hi, I'm looking for some sunscreen and maybe something for a sunburn.", portuguese: "Oi, estou procurando protetor solar e talvez algo para queimadura de sol." },
          { speaker: 'local', english: "Sunscreen is in aisle 3. Do you prefer a specific SPF level?", portuguese: "O protetor solar está no corredor 3. Você prefere um nível de FPS específico?" },
          { speaker: 'student', english: "Probably SPF 50. My skin is quite sensitive.", portuguese: "Provavelmente FPS 50. Minha pele é bem sensível." },
          { speaker: 'local', english: "Good choice. For the sunburn, I recommend this aloe vera gel. It's very cooling.", portuguese: "Boa escolha. Para a queimadura de sol, recomendo este gel de aloe vera. É bem refrescante." },
          { speaker: 'student', english: "That looks perfect. Do you also have any lip balm with sun protection?", portuguese: "Parece perfeito. Vocês também têm protetor labial com proteção solar?" },
          { speaker: 'local', english: "Yes, they are right next to the checkout counter.", portuguese: "Sim, estão logo ali ao lado do balcão do caixa." },
          { speaker: 'student', english: "Thank you. How much is the total for these three items?", portuguese: "Obrigada. Quanto é o total por esses três itens?" },
          { speaker: 'local', english: "Let's see... that will be eighteen dollars and ninety cents.", portuguese: "Vejamos... vai dar dezoito dólares e noventa centavos." }
],
        dialoguesBeginner2: [
          { speaker: 'student', english: "I need sunscreen, please.", portuguese: "Preciso de protetor solar, por favor." },
          { speaker: 'local', english: "It is in aisle 3.", portuguese: "Está no corredor 3." },
          { speaker: 'student', english: "I also have a sunburn.", portuguese: "Também estou com queimadura de sol." },
          { speaker: 'local', english: "Use this aloe vera gel.", portuguese: "Use este gel de aloe vera." },
          { speaker: 'student', english: "How much is it?", portuguese: "Quanto custa?" },
          { speaker: 'local', english: "Nineteen dollars for everything.", portuguese: "Dezenove dólares por tudo." },
          { speaker: 'student', english: "Okay. Thank you!", portuguese: "Ok. Obrigado!" }
,

      {
            speaker: "native",
            english: "Where does it hurt?",
            portuguese: "Onde dói?"
      },
      {
            speaker: "student",
            english: "My arm hurts a lot.",
            portuguese: "Meu braço dói muito."
      },
      {
            speaker: "native",
            english: "Can you move your fingers?",
            portuguese: "Você consegue mover seus dedos?"
      },
      {
            speaker: "student",
            english: "Yes, but it is painful.",
            portuguese: "Sim, mas é doloroso."
      },
      {
            speaker: "native",
            english: "We need an X-ray.",
            portuguese: "Precisamos de um raio-X."
      },
      {
            speaker: "student",
            english: "Is it broken?",
            portuguese: "Está quebrado?"
      },
      {
            speaker: "native",
            english: "I will tell you after the X-ray.",
            portuguese: "Eu te direi depois do raio-X."
      },
      {
            speaker: "student",
            english: "Okay, I am ready.",
            portuguese: "Ok, estou pronto."
      }
]
},
      {
        title: 'Medical Emergency',
        titlePt: 'Emergência Médica',
        icon: '🚑',
        dialogues: [
          { speaker: 'student', english: "Excuse me, I need help right away! It's an emergency!", portuguese: "Com licença, preciso de ajuda imediatamente! É uma emergência!" },
          { speaker: 'local', english: "Oh my gosh, what happened? Are you hurt?", portuguese: "Oh meu Deus, o que aconteceu? Você está machucado?" },
          { speaker: 'student', english: "It's not me, it's my friend. She tripped and fell down hard.", portuguese: "Não sou eu, é minha amiga. Ela tropeçou e caiu feio." },
          { speaker: 'local', english: "Is she conscious? Can she speak to you?", portuguese: "Ela está consciente? Ela consegue falar com você?" },
          { speaker: 'student', english: "Yes, but she is holding her arm and crying in pain. I think it might be broken.", portuguese: "Sim, mas ela está segurando o braço e chorando de dor. Acho que pode estar quebrado." },
          { speaker: 'local', english: "Okay, try to keep her still. Don't move her arm. I'm calling 911 right now.", portuguese: "Ok, tente mantê-la imóvel. Não mova o braço dela. Estou ligando para o 911 agora mesmo." },
          { speaker: 'student', english: "Please tell them to hurry. Where is the nearest hospital?", portuguese: "Por favor, diga a eles para se apressarem. Onde fica o hospital mais próximo?" },
          { speaker: 'local', english: "There is an Urgent Care center just two blocks away, but the ambulance will take her to the emergency room.", portuguese: "Tem um centro de 'Urgent Care' a apenas dois quarteirões, mas a ambulância a levará para a emergência." },
          { speaker: 'student', english: "Do you know if my travel insurance will cover the ambulance?", portuguese: "Você sabe se meu seguro viagem cobrirá a ambulância?" },
          { speaker: 'local', english: "I'm not sure, but health is more important right now. They are dispatching an ambulance.", portuguese: "Não tenho certeza, mas a saúde é mais importante agora. Eles estão enviando uma ambulância." },
          { speaker: 'student', english: "Okay. Ana, stay with me, help is on the way.", portuguese: "Ok. Ana, fique comigo, a ajuda está a caminho." },
          { speaker: 'local', english: "The operator said they will be here in less than five minutes. Is she bleeding at all?", portuguese: "A operadora disse que eles estarão aqui em menos de cinco minutos. Ela está sangrando?" },
          { speaker: 'student', english: "Just a small scrape on her knee, but her arm is swelling.", portuguese: "Apenas um pequeno arranhão no joelho, mas o braço dela está inchando." },
          { speaker: 'local', english: "I hear the sirens. They are coming down the street now.", portuguese: "Estou ouvindo as sirenes. Eles estão descendo a rua agora." },
          { speaker: 'student', english: "Thank you so much for your help. I didn't know what to do.", portuguese: "Muito obrigada pela sua ajuda. Eu não sabia o que fazer." }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "Help! It is an emergency!", portuguese: "Socorro! É uma emergência!" },
          { speaker: 'local', english: "What happened?", portuguese: "O que aconteceu?" },
          { speaker: 'student', english: "My friend fell down. I think her arm is broken.", portuguese: "Minha amiga caiu. Acho que o braço dela está quebrado." },
          { speaker: 'local', english: "I am calling 911 now.", portuguese: "Estou ligando para o 911 agora." },
          { speaker: 'student', english: "Is there a hospital near here?", portuguese: "Tem um hospital perto daqui?" },
          { speaker: 'local', english: "Yes. The ambulance is coming.", portuguese: "Sim. A ambulância está vindo." },
          { speaker: 'student', english: "Thank you for your help.", portuguese: "Obrigado pela sua ajuda." }
,

      {
            speaker: "native",
            english: "Do you have a fever?",
            portuguese: "Você tem febre?"
      },
      {
            speaker: "student",
            english: "Yes, I feel very hot.",
            portuguese: "Sim, eu me sinto muito quente."
      },
      {
            speaker: "native",
            english: "Are you coughing?",
            portuguese: "Você está tossindo?"
      },
      {
            speaker: "student",
            english: "Yes, especially at night.",
            portuguese: "Sim, especialmente à noite."
      },
      {
            speaker: "native",
            english: "You should rest and drink water.",
            portuguese: "Você deve descansar e beber água."
      },
      {
            speaker: "student",
            english: "Do I need medicine?",
            portuguese: "Eu preciso de remédio?"
      },
      {
            speaker: "native",
            english: "Yes, take this pill twice a day.",
            portuguese: "Sim, tome este comprimido duas vezes ao dia."
      },
      {
            speaker: "student",
            english: "Okay, doctor. Thank you.",
            portuguese: "Ok, doutor. Obrigado."
      }
],
        dialogues2: [
          { speaker: 'student', english: "Excuse me, I've lost my passport! I think I left it in a taxi.", portuguese: "Com licença, perdi meu passaporte! Acho que o deixei em um táxi." },
          { speaker: 'local', english: "Oh no, that is a serious problem. Do you have the taxi receipt?", portuguese: "Ah não, isso é um problema sério. Você tem o recibo do táxi?" },
          { speaker: 'student', english: "No, I paid in cash and didn't ask for one. What should I do?", portuguese: "Não, paguei em dinheiro e não pedi um. O que devo fazer?" },
          { speaker: 'local', english: "You need to report it to the police first. There is a station on 42nd Street.", portuguese: "Você precisa relatar à polícia primeiro. Tem uma delegacia na 42nd Street." },
          { speaker: 'student', english: "And then? I have a flight tomorrow!", portuguese: "E depois? Eu tenho um voo amanhã!" },
          { speaker: 'local', english: "You will also need to contact your embassy immediately. They can issue an emergency travel document.", portuguese: "Você também precisará entrar em contato com sua embaixada imediatamente. Eles podem emitir um documento de viagem de emergência." },
          { speaker: 'student', english: "Thank you for the advice. I'm so stressed right now.", portuguese: "Obrigado pelo conselho. Estou tão estressado agora." },
          { speaker: 'local', english: "Stay calm. Take a deep breath and go to the police station now.", portuguese: "Mantenha a calma. Respire fundo e vá para a delegacia agora." }
],
        dialoguesBeginner2: [
          { speaker: 'student', english: "I lost my passport!", portuguese: "Perdi meu passaporte!" },
          { speaker: 'local', english: "That is bad. Go to the police.", portuguese: "Isso é ruim. Vá para a polícia." },
          { speaker: 'student', english: "Where is the police station?", portuguese: "Onde fica a delegacia?" },
          { speaker: 'local', english: "It is on 42nd Street.", portuguese: "Fica na 42nd Street." },
          { speaker: 'student', english: "I have a flight tomorrow.", portuguese: "Tenho um voo amanhã." },
          { speaker: 'local', english: "Call your embassy now.", portuguese: "Ligue para sua embaixada agora." },
          { speaker: 'student', english: "Thank you for your help.", portuguese: "Obrigado pela sua ajuda." }
,

      {
            speaker: "native",
            english: "Where does it hurt?",
            portuguese: "Onde dói?"
      },
      {
            speaker: "student",
            english: "My arm hurts a lot.",
            portuguese: "Meu braço dói muito."
      },
      {
            speaker: "native",
            english: "Can you move your fingers?",
            portuguese: "Você consegue mover seus dedos?"
      },
      {
            speaker: "student",
            english: "Yes, but it is painful.",
            portuguese: "Sim, mas é doloroso."
      },
      {
            speaker: "native",
            english: "We need an X-ray.",
            portuguese: "Precisamos de um raio-X."
      },
      {
            speaker: "student",
            english: "Is it broken?",
            portuguese: "Está quebrado?"
      },
      {
            speaker: "native",
            english: "I will tell you after the X-ray.",
            portuguese: "Eu te direi depois do raio-X."
      },
      {
            speaker: "student",
            english: "Okay, I am ready.",
            portuguese: "Ok, estou pronto."
      }
]
}
],
            importantPhrases: [
      {
            pt: "Preciso de um dentista.",
            en: "I need a dentist."
      },
      {
            pt: "Eu torci meu tornozelo.",
            en: "I sprained my ankle."
      },
      {
            pt: "Tem seguro saúde?",
            en: "Do you have health insurance?"
      },
      {
            pt: "Minha garganta dói.",
            en: "My throat hurts."
      },
      {
            pt: "Preciso de uma receita médica.",
            en: "I need a prescription."
      },
      {
            pt: "Você pode medir minha pressão?",
            en: "Can you check my blood pressure?"
      }
],
        problems: [
      {
            descriptionPt: "Você precisa comprar um remédio, mas esqueceu o nome dele em inglês."
      },
      {
            descriptionPt: "Você começou a sentir uma dor muito forte no estômago durante a noite."
      }
],
    vocabulary: [
      { english: "Headache", portuguese: "Dor de cabeça",
        sentenceA1: "I have a headache.",
        sentenceA2: "I have had a terrible headache since yesterday.",
        sentenceA1Pt: "Estou com dor de cabeça.",
        sentenceA2Pt: "Estou com uma dor de cabeça terrível desde ontem."
      },
      { english: "Sore throat", portuguese: "Dor de garganta",
        sentenceA1: "I have a sore throat.",
        sentenceA2: "My sore throat makes it difficult to swallow food.",
        sentenceA1Pt: "Estou com dor de garganta.",
        sentenceA2Pt: "Minha dor de garganta dificulta engolir comida."
      },
      { english: "Fever", portuguese: "Febre",
        sentenceA1: "I have a fever.",
        sentenceA2: "The doctor said I have a mild fever and should rest.",
        sentenceA1Pt: "Estou com febre.",
        sentenceA2Pt: "O médico disse que estou com febre leve e devo descansar."
      },
      { english: "Pain reliever", portuguese: "Analgésico",
        sentenceA1: "I need a pain reliever.",
        sentenceA2: "Can you recommend a good pain reliever for muscle pain?",
        sentenceA1Pt: "Preciso de um analgésico.",
        sentenceA2Pt: "Pode recomendar um bom analgésico para dor muscular?"
      },
      { english: "Emergency", portuguese: "Emergência",
        sentenceA1: "This is an emergency!",
        sentenceA2: "Call an ambulance! This is a medical emergency.",
        sentenceA1Pt: "Isto é uma emergência!",
        sentenceA2Pt: "Chame uma ambulância! Isto é uma emergência médica."
      },
      { english: "Appointment", portuguese: "Consulta médica",
        sentenceA1: "I have a doctor appointment.",
        sentenceA2: "I need to schedule an appointment with a specialist.",
        sentenceA1Pt: "Tenho uma consulta médica.",
        sentenceA2Pt: "Preciso marcar consulta com um especialista."
      },
      { english: "Prescription", portuguese: "Receita médica",
        sentenceA1: "I have a prescription.",
        sentenceA2: "The doctor wrote a prescription for antibiotics.",
        sentenceA1Pt: "Tenho uma receita.",
        sentenceA2Pt: "O médico passou uma receita de antibióticos."
      },
      { english: "Insurance", portuguese: "Plano de saúde",
        sentenceA1: "I have health insurance.",
        sentenceA2: "My insurance covers most of the costs for check-ups.",
        sentenceA1Pt: "Tenho plano de saúde.",
        sentenceA2Pt: "Meu plano cobre a maior parte dos custos de check-ups."
      },
      { english: "Insurance card", portuguese: "Cartão do plano",
        sentenceA1: "Here is my insurance card.",
        sentenceA2: "Please bring your insurance card and photo ID.",
        sentenceA1Pt: "Aqui está meu cartão do plano.",
        sentenceA2Pt: "Traga seu cartão do plano e identidade com foto."
      },
      { english: "Symptoms", portuguese: "Sintomas",
        sentenceA1: "What are your symptoms?",
        sentenceA2: "My symptoms started three days ago with a cough.",
        sentenceA1Pt: "Quais são seus sintomas?",
        sentenceA2Pt: "Meus sintomas começaram três dias atrás com tosse."
      },
      { english: "Pain", portuguese: "Dor",
        sentenceA1: "I feel pain here.",
        sentenceA2: "The pain in my back gets worse when I sit too long.",
        sentenceA1Pt: "Sinto dor aqui.",
        sentenceA2Pt: "A dor nas costas piora quando fico sentado muito tempo."
      },
      { english: "Bandage", portuguese: "Curativo / Bandagem",
        sentenceA1: "I need a bandage.",
        sentenceA2: "The nurse put a clean bandage on my cut.",
        sentenceA1Pt: "Preciso de uma bandagem.",
        sentenceA2Pt: "A enfermeira colocou uma bandagem limpa no meu corte."
      },
      { english: "Cough", portuguese: "Tosse",
        sentenceA1: "I have a bad cough.",
        sentenceA2: "My cough keeps me awake at night.",
        sentenceA1Pt: "Estou com tosse forte.",
        sentenceA2Pt: "Minha tosse me mantém acordado à noite."
      },
      { english: "Cold", portuguese: "Resfriado",
        sentenceA1: "I have a cold.",
        sentenceA2: "I caught a cold last week and I am still recovering.",
        sentenceA1Pt: "Estou resfriado(a).",
        sentenceA2Pt: "Peguei um resfriado semana passada e ainda estou me recuperando."
      },
      { english: "Pharmacy / Drugstore", portuguese: "Farmácia",
        sentenceA1: "Where is the pharmacy?",
        sentenceA2: "You can buy over-the-counter medicine at the local drugstore.",
        sentenceA1Pt: "Onde fica a farmácia?",
        sentenceA2Pt: "Você pode comprar medicamentos sem receita na farmácia local."
      },
      { english: "Pills / Tablets", portuguese: "Pílulas / Comprimidos",
        sentenceA1: "Take two pills.",
        sentenceA2: "The doctor told me to take these pills with meals twice a day.",
        sentenceA1Pt: "Tome duas pílulas.",
        sentenceA2Pt: "O médico me disse para tomar essas pílulas com as refeições duas vezes ao dia."
      },
      { english: "Side effects", portuguese: "Efeitos colaterais",
        sentenceA1: "Are there side effects?",
        sentenceA2: "This medicine may cause mild side effects like drowsiness.",
        sentenceA1Pt: "Tem efeitos colaterais?",
        sentenceA2Pt: "Este medicamento pode causar efeitos colaterais leves, como sonolência."
      },
      { english: "Ointment", portuguese: "Pomada",
        sentenceA1: "Apply the ointment.",
        sentenceA2: "You should apply this ointment to the skin allergy twice a day.",
        sentenceA1Pt: "Aplique a pomada.",
        sentenceA2Pt: "Você deve aplicar esta pomada na alergia cutânea duas vezes ao dia."
      }
],
    culturalTips: [
      {
        title: "Medical Costs",
        titlePt: "Custos Médicos",
        content: "US healthcare is expensive. Dial 911 only for life-threatening emergencies. Use 'Urgent Care' for minor issues.",
        contentPt: "A saúde nos EUA é cara. Ligue 911 apenas para emergências graves. Use 'Urgent Care' para problemas menores."
},
      {
        title: "Pharmacy vs Drugstore",
        titlePt: "Farmácia vs Drogaria",
        content: "Stores like CVS or Walgreens are 'drugstores' where you can buy snacks and makeup. The 'pharmacy' is just the counter for medicine.",
        contentPt: "Lojas como CVS ou Walgreens são 'drugstores' onde você compra lanches e maquiagem. A 'pharmacy' é apenas o balcão de remédios."
},
      {
        title: "Medicine Labels",
        titlePt: "Rótulos de Remédios",
        content: "Always read the 'Drug Facts' label on over-the-counter medicine. It tells you the dosage and active ingredients.",
        contentPt: "Sempre leia o rótulo 'Drug Facts' em remédios de venda livre. Ele informa a dosagem e os ingredientes ativos."
}
    ],
  reading: {
      textA1: 'Peter has a bad headache. His head hurts a lot. He goes to the pharmacy on the corner. The pharmacy is small and bright. He talks to the pharmacist. He says, \'I have a headache. Do you have medicine?\' The pharmacist smiles and gives him a box of pills. The box is blue. She says, \'Take two pills with water.\' Peter buys the medicine. He also buys a bottle of water. He pays 10 dollars. He opens the bottle and takes the pills right away. He hopes to feel better soon.',
      textA1Pt: 'Peter está com uma forte dor de cabeça. A cabeça dele dói muito. Ele vai à farmácia da esquina. A farmácia é pequena e bem iluminada. Ele fala com a farmacêutica. Ele diz: \'Estou com dor de cabeça. Você tem remédio?\'. A farmacêutica sorri e lhe dá uma caixa de comprimidos. A caixa é azul. Ela diz: \'Tome dois comprimidos com água.\' Peter compra o remédio. Ele também compra uma garrafa de água. Ele paga 10 dólares. Ele abre a garrafa e toma os comprimidos imediatamente. Ele espera se sentir melhor em breve.',
      textA2: 'Peter woke up with a severe migraine and a stuffy nose that completely ruined his morning plans. Unable to tolerate the pain, he dragged himself to the nearest drugstore down the street. He approached the consultation counter and described his symptoms to the pharmacist on duty. \'I have a terrible throbbing headache and sinus pressure,\' he explained, rubbing his temples. The pharmacist recommended a strong over-the-counter painkiller that also acted as a decongestant. She instructed him explicitly, \'Take one tablet every six hours with a full glass of water, and do not exceed four doses in a day. It might cause mild drowsiness.\' Peter thanked her, grabbed a large bottle of water from the fridge aisle, and paid for his items at the register. He took his first dose immediately outside the store, praying for some quick relief.',
      textA2Pt: 'Peter acordou com uma severa enxaqueca e nariz entupido que arruinaram completamente seus planos matinais. Incapaz de tolerar a dor, ele se arrastou até a farmácia mais próxima no final da rua. Ele se aproximou do balcão de consulta e descreveu seus sintomas para a farmacêutica de plantão. \'Estou com uma dor de cabeça latejante terrível e pressão nos seios da face,\' ele explicou, esfregando as têmporas. A farmacêutica recomendou um analgésico forte de venda livre que também atuava como descongestionante. Ela o instruiu explicitamente: \'Tome um comprimido a cada seis horas com um copo cheio de água e não exceda quatro doses em um dia. Pode causar sonolência leve.\' Peter agradeceu, pegou uma garrafa grande de água no corredor da geladeira e pagou pelos itens no caixa. Ele tomou sua primeira dose imediatamente do lado de fora da loja, rezando por um alívio rápido.',
      questionsA1: [
        { question: 'What is the main topic of the story?', questionPt: 'Qual é o tópico principal da história?', options: ['Peter going to the doctor', 'Peter buying medicine at the pharmacy for his headache', 'Peter working at the pharmacy', 'Peter buying food'], correctIndex: 1 },
        { question: 'What does "head hurts a lot" mean?', questionPt: 'O que significa "head hurts a lot"?', options: ['He is very happy', 'He has a strong headache', 'His head is very big', 'He is wearing a hat'], correctIndex: 1 },
        { question: 'Why does Peter buy a bottle of water?', questionPt: 'Por que Peter compra uma garrafa de água?', options: ['To wash his face', 'To take his pills right away', 'To give to the pharmacist', 'To cook'], correctIndex: 1 },
        { question: 'What can we infer about Peter\'s pain?', questionPt: 'O que podemos inferir sobre a dor de Peter?', options: ['It is very strong because he takes the pills immediately', 'It is very light', 'He is pretending to be sick', 'It went away before he took the medicine'], correctIndex: 0 }
      ],
      questionsA2: [
        { question: 'What symptoms was Peter experiencing?', questionPt: 'Quais sintomas Peter estava sentindo?', options: ['Fever and cough', 'Stomach ache', 'Migraine and stuffy nose', 'Sore throat'], correctIndex: 2 },
        { question: 'What did the pharmacist recommend?', questionPt: 'O que a farmacêutica recomendou?', options: ['Antibiotics', 'A painkiller and decongestant', 'Vitamins', 'Cough syrup'], correctIndex: 1 },
        { question: 'How often should he take the tablet?', questionPt: 'Com que frequência ele deve tomar o comprimido?', options: ['Every hour', 'Every four hours', 'Every six hours', 'Once a day'], correctIndex: 2 },
        { question: 'What side effect did the pharmacist mention?', questionPt: 'Que efeito colateral a farmacêutica mencionou?', options: ['Nausea', 'Mild drowsiness', 'Dizziness', 'Loss of appetite'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Médico] \"O que está sentindo hoje?\"",
            expectedEn: "What seems to be the problem today?"
      },
      {
            promptPt: "[Você] Você quer dizer que não se sente bem",
            expectedEn: "I do not feel well."
      },
      {
            promptPt: "[Você] Você quer dizer que está com dor de cabeça e febre",
            expectedEn: "I have a headache and a fever."
      },
      {
            promptPt: "[Médico] \"Você tem alguma alergia a medicamentos?\"",
            expectedEn: "Do you have any allergies to medication?"
      },
      {
            promptPt: "[Você] Você responde que não",
            expectedEn: "No, I don't."
      },
      {
            promptPt: "[Você] Você quer perguntar se precisa de receita para o remédio",
            expectedEn: "Do I need a prescription for this?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Go to the dentist to pull a tooth",
            optionAPt: "Ir ao dentista para arrancar um dente",
            optionBEn: "Go to the hospital for a broken arm",
            optionBPt: "Ir ao hospital por um braço quebrado"
      },
      {
            optionAEn: "Have a terrible headache for 3 days",
            optionAPt: "Ter uma dor de cabeça terrível por 3 dias",
            optionBEn: "Have a bad stomachache for 1 day",
            optionBPt: "Ter uma dor de estômago forte por 1 dia"
      },
      {
            optionAEn: "Take medicine that tastes disgusting",
            optionAPt: "Tomar um remédio com gosto horrível",
            optionBEn: "Get an injection that hurts a lot",
            optionBPt: "Tomar uma injeção que dói muito"
      },
      {
            optionAEn: "Have to explain your symptoms in another language",
            optionAPt: "Ter que explicar seus sintomas em outro idioma",
            optionBEn: "Have the doctor explain your treatment in another language",
            optionBPt: "Ter o médico explicando seu tratamento em outro idioma"
      },
      {
            optionAEn: "Wait 4 hours in the waiting room",
            optionAPt: "Esperar 4 horas na sala de espera",
            optionBEn: "Pay a very high hospital bill",
            optionBPt: "Pagar uma conta de hospital altíssima"
      },
      {
            optionAEn: "Break your right hand",
            optionAPt: "Quebrar a mão direita",
            optionBEn: "Break your left leg",
            optionBPt: "Quebrar a perna esquerda"
      },
      {
            optionAEn: "Have a stuffy nose for a month",
            optionAPt: "Ter o nariz entupido por um mês",
            optionBEn: "Have a sore throat for a week",
            optionBPt: "Ter dor de garganta por uma semana"
      }
]
},
  {
    id: 'entertainment',
    speakingQuestions: [
    {
        "question": "What kind of movies do you like to watch?",
        "questionPt": "Que tipo de filmes você gosta de assistir?",
        "hintA1": "I like comedy and action movies.",
        "hintA2": "I really enjoy science fiction and thrillers with a good plot twist."
    },
    {
        "question": "Do you prefer going to the cinema or watching movies at home?",
        "questionPt": "Você prefere ir ao cinema ou assistir a filmes em casa?",
        "hintA1": "I prefer watching movies at home.",
        "hintA2": "I prefer the cinema for the big screen and the popcorn."
    },
    {
        "question": "Have you ever been to a big music concert?",
        "questionPt": "Você já foi a um grande show de música?",
        "hintA1": "Yes, I went to a rock concert.",
        "hintA2": "Yes, I saw my favorite band live last year and it was an amazing experience."
    }
,
    {
        "question": "Did you watch any good movies last month?",
        "questionPt": "Você assistiu a algum filme bom no mês passado?",
        "hintA1": "Yes, I watched a comedy.",
        "hintA2": "Yes, I went to the cinema and watched a great thriller with my friends."
    },
    {
        "question": "Do you play any video games?",
        "questionPt": "Você joga algum videogame?",
        "hintA1": "Yes, I play on my phone.",
        "hintA2": "I love gaming. I usually play on my PlayStation every weekend after lunch."
    },
    {
        "question": "When did you last go to a concert?",
        "questionPt": "Quando foi a última vez que você foi a um show?",
        "hintA1": "I went last year.",
        "hintA2": "I went to an amazing rock concert about six months ago at the stadium."
    },
    {
        "question": "Do you prefer reading books or watching series?",
        "questionPt": "Você prefere ler livros ou assistir séries?",
        "hintA1": "I prefer watching series.",
        "hintA2": "It depends on my mood. I usually watch series before bed but read on weekends."
    },
    {
        "question": "Did you listen to any new music today?",
        "questionPt": "Você ouviu alguma música nova hoje?",
        "hintA1": "No, I listened to old songs.",
        "hintA2": "Yes, Spotify recommended a new album and I really enjoyed every song on it."
    }
    ],
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
          { speaker: 'student', english: "Hi! I'm looking to buy two tickets for The Lion King tonight.", portuguese: "Oi! Estou querendo comprar dois ingressos para O Rei Leão hoje à noite." },
          { speaker: 'local', english: "Let me check availability for the 7 PM show. It's almost sold out.", portuguese: "Deixe-me verificar a disponibilidade para o show das 19h. Está quase esgotado." },
          { speaker: 'student', english: "Oh really? Do you have any seats left together?", portuguese: "Ah, é mesmo? Vocês têm alguns assentos juntos ainda?" },
          { speaker: 'local', english: "Yes, we have a pair in the Orchestra section, and another pair in the Mezzanine.", portuguese: "Sim, temos um par na seção da Orquestra, e outro par no Mezzanine." },
          { speaker: 'student', english: "What is the difference in price between them?", portuguese: "Qual é a diferença de preço entre eles?" },
          { speaker: 'local', english: "The Orchestra seats are in the fifth row and cost $185 each. The Mezzanine seats are $110.", portuguese: "Os assentos da Orquestra ficam na quinta fileira e custam $185 cada. Os do Mezzanine são $110." },
          { speaker: 'student', english: "Are the Mezzanine seats good? Will we be able to see the stage well?", portuguese: "Os assentos do Mezzanine são bons? Conseguiremos ver bem o palco?" },
          { speaker: 'local', english: "Absolutely. In this theater, the Mezzanine actually gives you a fantastic overall view of the choreography.", portuguese: "Com certeza. Neste teatro, o Mezzanine na verdade dá uma vista geral fantástica da coreografia." },
          { speaker: 'student', english: "That sounds perfect. I'll take the two Mezzanine tickets, please.", portuguese: "Isso parece perfeito. Vou querer os dois ingressos do Mezzanine, por favor." },
          { speaker: 'local', english: "Great choice. That will be $220 total. Cash or card?", portuguese: "Ótima escolha. O total será $220. Dinheiro ou cartão?" },
          { speaker: 'student', english: "Card, please. What time should we arrive at the theater?", portuguese: "Cartão, por favor. A que horas devemos chegar ao teatro?" },
          { speaker: 'local', english: "The doors open at 6:30 PM. I suggest arriving early to get a drink and find your seats.", portuguese: "As portas abrem às 18:30. Sugiro chegar cedo para pegar uma bebida e encontrar seus lugares." },
          { speaker: 'student', english: "Is there a dress code for the show?", portuguese: "Há um código de vestimenta para o show?" },
          { speaker: 'local', english: "There is no official dress code. Smart casual is perfectly fine. You can even wear jeans.", portuguese: "Não há código de vestimenta oficial. Esporte fino está perfeitamente bem. Pode até usar jeans." },
          { speaker: 'student', english: "Awesome. Thank you for the tips!", portuguese: "Incrível. Obrigado pelas dicas!" },
          { speaker: 'local', english: "Here are your tickets. Enjoy the performance!", portuguese: "Aqui estão seus ingressos. Aproveitem a apresentação!" }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "I want two tickets for The Lion King.", portuguese: "Eu quero dois ingressos para O Rei Leão." },
          { speaker: 'local', english: "For 7 PM? It is almost full.", portuguese: "Para as 19h? Está quase cheio." },
          { speaker: 'student', english: "Yes. How much are the tickets?", portuguese: "Sim. Quanto custam os ingressos?" },
          { speaker: 'local', english: "One hundred and ten dollars each.", portuguese: "Cento e dez dólares cada." },
          { speaker: 'student', english: "Okay. Can I pay with card?", portuguese: "Ok. Posso pagar com cartão?" },
          { speaker: 'local', english: "Yes. Here are your tickets.", portuguese: "Sim. Aqui estão seus ingressos." },
          { speaker: 'student', english: "What time does it start?", portuguese: "Que horas começa?" },
          { speaker: 'local', english: "It starts at 7 PM.", portuguese: "Começa às 19h." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "What time does the movie finish?",
            portuguese: "A que horas o filme termina?"
      },
      {
            speaker: "student",
            english: "It finishes at ten PM.",
            portuguese: "Ele termina às dez da noite."
      },
      {
            speaker: "native",
            english: "Is it a good movie?",
            portuguese: "É um bom filme?"
      },
      {
            speaker: "student",
            english: "Yes, it is very funny.",
            portuguese: "Sim, é muito engraçado."
      },
      {
            speaker: "native",
            english: "Do you want to get popcorn?",
            portuguese: "Você quer comprar pipoca?"
      },
      {
            speaker: "student",
            english: "Yes, a large popcorn, please.",
            portuguese: "Sim, uma pipoca grande, por favor."
      },
      {
            speaker: "native",
            english: "Here is your popcorn and drink.",
            portuguese: "Aqui está sua pipoca e bebida."
      },
      {
            speaker: "student",
            english: "Thanks. Let's find our seats.",
            portuguese: "Obrigado. Vamos encontrar nossos lugares."
      }
],
        dialogues2: [
          { speaker: 'student', english: "Hi, I'm interested in the sightseeing bus tour. Where does it stop?", portuguese: "Oi, estou interessado no tour de ônibus turístico. Onde ele para?" },
          { speaker: 'local', english: "The tour has 20 stops including Central Park, the Empire State Building, and Wall Street.", portuguese: "O tour tem 20 paradas, incluindo o Central Park, o Empire State Building e a Wall Street." },
          { speaker: 'student', english: "How long does the whole circuit take if I don't get off?", portuguese: "Quanto tempo leva o circuito inteiro se eu não descer?" },
          { speaker: 'local', english: "It takes about two and a half hours without traffic.", portuguese: "Leva cerca de duas horas e meia sem trânsito." },
          { speaker: 'student', english: "Can I hop on and off as much as I want with one ticket?", portuguese: "Posso subir e descer quantas vezes quiser com um único bilhete?" },
          { speaker: 'local', english: "Yes, the ticket is valid for 24 hours from the time you first scan it.", portuguese: "Sim, o bilhete é válido por 24 horas a partir do momento em que você o escaneia pela primeira vez." },
          { speaker: 'student', english: "That sounds great. How much is it for an adult?", portuguese: "Parece ótimo. Quanto custa para um adulto?" },
          { speaker: 'local', english: "It's fifty-five dollars. We also have a 48-hour pass for seventy-five dollars.", portuguese: "Custa cinquenta e cinco dólares. Também temos um passe de 48 horas por setenta e cinco dólares." },
          { speaker: 'student', english: "I'll just take the 24-hour pass, please.", portuguese: "Vou levar apenas o passe de 24 horas, por favor." }
],
        dialoguesBeginner2: [
          { speaker: 'student', english: "I want a bus tour ticket.", portuguese: "Quero um bilhete para o tour de ônibus." },
          { speaker: 'local', english: "It stops at Central Park and Wall Street.", portuguese: "Ele para no Central Park e na Wall Street." },
          { speaker: 'student', english: "Can I get off and get on again?", portuguese: "Posso descer e subir de novo?" },
          { speaker: 'local', english: "Yes. The ticket is for 24 hours.", portuguese: "Sim. O bilhete é por 24 horas." },
          { speaker: 'student', english: "How much is it?", portuguese: "Quanto custa?" },
          { speaker: 'local', english: "Fifty-five dollars.", portuguese: "Cinquenta e cinco dólares." },
          { speaker: 'student', english: "Okay. One ticket, please.", portuguese: "Ok. Um bilhete, por favor." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Do you like this music?",
            portuguese: "Você gosta desta música?"
      },
      {
            speaker: "student",
            english: "Yes, the band is amazing.",
            portuguese: "Sim, a banda é incrível."
      },
      {
            speaker: "native",
            english: "It is very loud here.",
            portuguese: "Está muito alto aqui."
      },
      {
            speaker: "student",
            english: "Yes, but the concert is great.",
            portuguese: "Sim, mas o show é ótimo."
      },
      {
            speaker: "native",
            english: "I am thirsty.",
            portuguese: "Estou com sede."
      },
      {
            speaker: "student",
            english: "I can buy water for us.",
            portuguese: "Eu posso comprar água para nós."
      },
      {
            speaker: "native",
            english: "Thank you. I will wait here.",
            portuguese: "Obrigado. Vou esperar aqui."
      },
      {
            speaker: "student",
            english: "I will be right back.",
            portuguese: "Volto já."
      }
]
},
      {
        title: 'Asking for Tips',
        titlePt: 'Pedindo Dicas',
        icon: '📍',
        dialogues: [
          { speaker: 'student', english: "Excuse me, I have a free afternoon. What is the best museum to visit near here?", portuguese: "Com licença, eu tenho uma tarde livre. Qual é o melhor museu para visitar perto daqui?" },
          { speaker: 'local', english: "Well, you are very close to the Museum Mile. The MET is amazing! You should definitely go there.", portuguese: "Bem, você está bem perto da Museum Mile. O MET é incrível! Você definitivamente deveria ir lá." },
          { speaker: 'student', english: "I've heard of it. Is it open today?", portuguese: "Já ouvi falar. Está aberto hoje?" },
          { speaker: 'local', english: "Yes, they open at 10 AM and close at 5 PM. But you should probably buy tickets online to skip the line.", portuguese: "Sim, eles abrem às 10h e fecham às 17h. Mas você provavelmente deveria comprar os ingressos online para pular a fila." },
          { speaker: 'student', english: "That's a good idea. Is there a student discount?", portuguese: "É uma boa ideia. Tem desconto para estudantes?" },
          { speaker: 'local', english: "Yes, if you have a valid student ID, the admission is much cheaper.", portuguese: "Sim, se você tiver uma identidade estudantil válida, a entrada é muito mais barata." },
          { speaker: 'student', english: "Perfect, I have my university ID with me.", portuguese: "Perfeito, eu tenho minha carteirinha da universidade comigo." },
          { speaker: 'local', english: "Awesome! The Egyptian art wing is breathtaking. Don't miss it.", portuguese: "Incrível! A ala de arte egípcia é de tirar o fôlego. Não perca." },
          { speaker: 'student', english: "I will make sure to see it. Also, do you have any restaurant recommendations for after the museum?", portuguese: "Farei questão de ver. Além disso, você tem alguma recomendação de restaurante para depois do museu?" },
          { speaker: 'local', english: "Are you looking for something casual or a nice sit-down dinner?", portuguese: "Você está procurando algo casual ou um jantar agradável sentado?" },
          { speaker: 'student', english: "Just something casual and not too expensive. Maybe pizza or burgers?", portuguese: "Apenas algo casual e não muito caro. Talvez pizza ou hambúrgueres?" },
          { speaker: 'local', english: "There's a great slice shop just two blocks from the museum entrance. It's called Joe's Pizza.", portuguese: "Tem uma ótima pizzaria a apenas dois quarteirões da entrada do museu. Chama-se Joe's Pizza." },
          { speaker: 'student', english: "That sounds delicious. I'll check it out. Thanks for your help!", portuguese: "Parece delicioso. Vou dar uma olhada. Obrigado pela sua ajuda!" },
          { speaker: 'local', english: "You're very welcome! Enjoy your afternoon in the city.", portuguese: "De nada! Aproveite sua tarde na cidade." }
],
        dialoguesBeginner: [
          { speaker: 'student', english: "What is a good museum near here?", portuguese: "Qual é um bom museu perto daqui?" },
          { speaker: 'local', english: "The MET is very good.", portuguese: "O MET é muito bom." },
          { speaker: 'student', english: "Is it open today?", portuguese: "Está aberto hoje?" },
          { speaker: 'local', english: "Yes. It opens at 10 AM.", portuguese: "Sim. Abre às 10 da manhã." },
          { speaker: 'student', english: "Is there a student discount?", portuguese: "Tem desconto para estudante?" },
          { speaker: 'local', english: "Yes. Use your ID card.", portuguese: "Sim. Use seu cartão de identidade." },
          { speaker: 'student', english: "Where is a good pizza place?", portuguese: "Onde tem uma boa pizzaria?" },
          { speaker: 'local', english: "Joe's Pizza is near here.", portuguese: "Joe's Pizza é perto daqui." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "What time does the movie finish?",
            portuguese: "A que horas o filme termina?"
      },
      {
            speaker: "student",
            english: "It finishes at ten PM.",
            portuguese: "Ele termina às dez da noite."
      },
      {
            speaker: "native",
            english: "Is it a good movie?",
            portuguese: "É um bom filme?"
      },
      {
            speaker: "student",
            english: "Yes, it is very funny.",
            portuguese: "Sim, é muito engraçado."
      },
      {
            speaker: "native",
            english: "Do you want to get popcorn?",
            portuguese: "Você quer comprar pipoca?"
      },
      {
            speaker: "student",
            english: "Yes, a large popcorn, please.",
            portuguese: "Sim, uma pipoca grande, por favor."
      },
      {
            speaker: "native",
            english: "Here is your popcorn and drink.",
            portuguese: "Aqui está sua pipoca e bebida."
      },
      {
            speaker: "student",
            english: "Thanks. Let's find our seats.",
            portuguese: "Obrigado. Vamos encontrar nossos lugares."
      }
],
        dialogues2: [
          { speaker: 'student', english: "Excuse me, where is the nearest post office?", portuguese: "Com licença, onde fica o correio mais próximo?" },
          { speaker: 'local', english: "There is one on the next block, right across from the library.", portuguese: "Tem um no próximo quarteirão, bem em frente à biblioteca." },
          { speaker: 'student', english: "Thank you. I need to send some postcards to Brazil. Do you know how much a stamp costs?", portuguese: "Obrigado. Preciso enviar alguns cartões-postais para o Brasil. Você sabe quanto custa um selo?" },
          { speaker: 'local', english: "I think international stamps are about one dollar and fifty cents each.", portuguese: "Acho que os selos internacionais custam cerca de um dólar e cinquenta centavos cada." },
          { speaker: 'student', english: "Okay. Do they also sell envelopes and packaging materials there?", portuguese: "Ok. Eles também vendem envelopes e materiais de embalagem lá?" },
          { speaker: 'local', english: "Yes, they have a wide variety of mailing supplies.", portuguese: "Sim, eles têm uma grande variedade de suprimentos para correio." },
          { speaker: 'student', english: "Perfect. And is there a mailbox nearby where I can drop them off after?", portuguese: "Perfeito. E tem uma caixa de correio por perto onde eu possa deixá-los depois?" },
          { speaker: 'local', english: "Yes, there is a blue mailbox right at the corner of this street.", portuguese: "Sim, tem uma caixa de correio azul bem na esquina desta rua." }
],
        dialoguesBeginner2: [
          { speaker: 'student', english: "Where is the post office?", portuguese: "Onde fica o correio?" },
          { speaker: 'local', english: "It is on the next block.", portuguese: "Fica no próximo quarteirão." },
          { speaker: 'student', english: "I want to send a postcard.", portuguese: "Quero enviar um cartão-postal." },
          { speaker: 'local', english: "A stamp is one dollar and fifty cents.", portuguese: "Um selo custa um dólar e cinquenta centavos." },
          { speaker: 'student', english: "Do they sell envelopes?", portuguese: "Eles vendem envelopes?" },
          { speaker: 'local', english: "Yes, they do.", portuguese: "Sim, eles vendem." },
          { speaker: 'student', english: "Is there a mailbox here?", portuguese: "Tem uma caixa de correio aqui?" },
          { speaker: 'local', english: "Yes, on the corner.", portuguese: "Sim, na esquina." },
          { speaker: 'student', english: "Thank you!", portuguese: "Obrigado!" }
,

      {
            speaker: "native",
            english: "Do you like this music?",
            portuguese: "Você gosta desta música?"
      },
      {
            speaker: "student",
            english: "Yes, the band is amazing.",
            portuguese: "Sim, a banda é incrível."
      },
      {
            speaker: "native",
            english: "It is very loud here.",
            portuguese: "Está muito alto aqui."
      },
      {
            speaker: "student",
            english: "Yes, but the concert is great.",
            portuguese: "Sim, mas o show é ótimo."
      },
      {
            speaker: "native",
            english: "I am thirsty.",
            portuguese: "Estou com sede."
      },
      {
            speaker: "student",
            english: "I can buy water for us.",
            portuguese: "Eu posso comprar água para nós."
      },
      {
            speaker: "native",
            english: "Thank you. I will wait here.",
            portuguese: "Obrigado. Vou esperar aqui."
      },
      {
            speaker: "student",
            english: "I will be right back.",
            portuguese: "Volto já."
      }
]
}
],
            importantPhrases: [
      {
            pt: "Onde compro as bebidas?",
            en: "Where do I buy drinks?"
      },
      {
            pt: "Posso tirar fotos?",
            en: "Can I take photos?"
      },
      {
            pt: "O museu está fechado hoje?",
            en: "Is the museum closed today?"
      },
      {
            pt: "A peça foi muito engraçada.",
            en: "The play was very funny."
      },
      {
            pt: "O som está muito alto.",
            en: "The sound is too loud."
      },
      {
            pt: "Tem legenda em português?",
            en: "Are there Portuguese subtitles?"
      }
],
        problems: [
      {
            descriptionPt: "Você comprou ingressos online, mas o scanner não está lendo o QR Code."
      },
      {
            descriptionPt: "Alguém está sentado no seu lugar numerado no cinema."
      }
],
    vocabulary: [
      { english: "Tickets", portuguese: "Ingressos",
        sentenceA1: "I bought two tickets.",
        sentenceA2: "I bought the tickets online because they were cheaper.",
        sentenceA1Pt: "Comprei dois ingressos.",
        sentenceA2Pt: "Comprei os ingressos online porque eram mais baratos."
      },
      { english: "Show", portuguese: "Apresentação / Show",
        sentenceA1: "The show starts at 8 PM.",
        sentenceA2: "The comedy show last night was amazing.",
        sentenceA1Pt: "O show começa às 20h.",
        sentenceA2Pt: "O show de comédia ontem à noite foi incrível."
      },
      { english: "Box office", portuguese: "Bilheteria",
        sentenceA1: "The box office is closed.",
        sentenceA2: "You can buy tickets at the box office or online.",
        sentenceA1Pt: "A bilheteria está fechada.",
        sentenceA2Pt: "Pode comprar ingressos na bilheteria ou online."
      },
      { english: "Recommendation", portuguese: "Recomendação",
        sentenceA1: "Do you have a recommendation?",
        sentenceA2: "The staff gave me a great recommendation for a jazz club.",
        sentenceA1Pt: "Tem uma recomendação?",
        sentenceA2Pt: "A equipe me deu uma ótima recomendação de um clube de jazz."
      },
      { english: "Sold out", portuguese: "Esgotado",
        sentenceA1: "The show is sold out.",
        sentenceA2: "All the good seats are sold out.",
        sentenceA1Pt: "O show está esgotado.",
        sentenceA2Pt: "Todos os bons lugares estão esgotados."
      },
      { english: "Entrance", portuguese: "Entrada",
        sentenceA1: "Where is the entrance?",
        sentenceA2: "The main entrance is on the left side of the building.",
        sentenceA1Pt: "Onde é a entrada?",
        sentenceA2Pt: "A entrada principal fica do lado esquerdo do prédio."
      },
      { english: "Performance", portuguese: "Performance / Show",
        sentenceA1: "The performance was great.",
        sentenceA2: "The ballet performance was breathtaking.",
        sentenceA1Pt: "A apresentação foi ótima.",
        sentenceA2Pt: "A apresentação de balé foi espetacular."
      },
      { english: "Souvenir", portuguese: "Lembrança / Souvenir",
        sentenceA1: "I bought a souvenir.",
        sentenceA2: "I always buy a souvenir from every city I visit.",
        sentenceA1Pt: "Comprei uma lembrança.",
        sentenceA2Pt: "Sempre compro uma lembrança de cada cidade que visito."
      },
      { english: "Row", portuguese: "Fileira",
        sentenceA1: "We are in row five.",
        sentenceA2: "Our seats are in row ten, right in the center.",
        sentenceA1Pt: "Estamos na fileira cinco.",
        sentenceA2Pt: "Nossos assentos ficam na fileira dez, no centro."
      },
      { english: "Stage", portuguese: "Palco",
        sentenceA1: "The stage is very big.",
        sentenceA2: "The singer walked across the entire stage.",
        sentenceA1Pt: "O palco é muito grande.",
        sentenceA2Pt: "A cantora andou por todo o palco."
      },
      { english: "Main entrance", portuguese: "Entrada principal",
        sentenceA1: "Vá para a entrada principal.",
        sentenceA2: "Encontre-me na entrada principal trinta minutos antes do show.",
        sentenceA1Pt: "Vá para a entrada principal.",
        sentenceA2Pt: "Encontre-me na entrada principal trinta minutos antes do show."
      },
      { english: "Restroom", portuguese: "Banheiro",
        sentenceA1: "Where is the restroom?",
        sentenceA2: "The restrooms are on the second floor near the elevator.",
        sentenceA1Pt: "Onde é o banheiro?",
        sentenceA2Pt: "Os banheiros ficam no segundo andar perto do elevador."
      },
      { english: "Coat check", portuguese: "Guarda-volumes",
        sentenceA1: "Is there a coat check?",
        sentenceA2: "You can leave your jacket at the coat check near the entrance.",
        sentenceA1Pt: "Tem um guarda-volumes?",
        sentenceA2Pt: "Pode deixar sua jaqueta no guarda-volumes perto da entrada."
      },
      { english: "Concert", portuguese: "Show / Concerto",
        sentenceA1: "I am going to a concert.",
        sentenceA2: "The outdoor concert was canceled because of the storm warning.",
        sentenceA1Pt: "Vou a um show.",
        sentenceA2Pt: "O show ao ar livre foi cancelado devido ao alerta de tempestade."
      },
      { english: "Seat number", portuguese: "Número do assento",
        sentenceA1: "My seat number is 14.",
        sentenceA2: "Please check your ticket to find your exact seat number.",
        sentenceA1Pt: "Meu assento é o 14.",
        sentenceA2Pt: "Por favor, verifique sua passagem para encontrar o número exato do seu assento."
      },
      { english: "Schedule", portuguese: "Programação / Horário",
        sentenceA1: "Where is the show schedule?",
        sentenceA2: "The theater schedule lists all the plays and times for this month.",
        sentenceA1Pt: "Onde está a programação?",
        sentenceA2Pt: "A programação do teatro lista todas as peças e horários para este mês."
      },
      { english: "Opening act", portuguese: "Show de abertura",
        sentenceA1: "Who is the opening act?",
        sentenceA2: "The opening act started playing at 7:30 PM, before the main band.",
        sentenceA1Pt: "Quem é a abertura?",
        sentenceA2Pt: "O show de abertura começou às 19h30, antes da banda principal."
      }
],
    culturalTips: [
      {
        title: "TKTS Booths",
        titlePt: "Guichês TKTS",
        content: "Find discounted Broadway tickets at 'TKTS' booths in Times Square for same-day performances.",
        contentPt: "Encontre ingressos da Broadway com desconto nos guichês 'TKTS' na Times Square para shows no mesmo dia."
},
      {
        title: "Suggested Admission",
        titlePt: "Entrada Sugerida",
        content: "Some museums have 'suggested admission'. You can choose how much to pay, but most tourists pay the full amount.",
        contentPt: "Alguns museus têm 'entrada sugerida'. Você escolhe quanto pagar, mas a maioria dos turistas paga o valor total."
},
      {
        title: "Intermission",
        titlePt: "Intervalo",
        content: "Broadway shows usually have a 15-minute intermission. It's the perfect time for a quick bathroom break or to buy water.",
        contentPt: "Shows da Broadway costumam ter um intervalo de 15 minutos. É o momento ideal para ir ao banheiro ou comprar água."
}
    ],
  reading: {
      textA1: 'Tom and his friend go to see a show on Broadway. They buy two tickets online. Each ticket costs 85 dollars. They arrive at the theater at 6 PM. The show starts at 7 PM. They have time to get a drink. Tom buys a soda for 5 dollars. His friend buys water. They find their seats. The seats are in row G. The show is a musical. There is singing and dancing. The actors are very talented. Tom loves the music. His friend takes a photo during intermission. The show ends at 9:30 PM. They walk outside and talk about their favorite parts. Tom says it was the best night of his trip.',
      textA1Pt: 'Tom e seu amigo vão assistir a um show na Broadway. Eles compram dois ingressos online. Cada ingresso custa 85 dólares. Eles chegam ao teatro às 18h. O show começa às 19h. Eles têm tempo de pegar uma bebida. Tom compra um refrigerante por 5 dólares. Seu amigo compra água. Eles encontram seus assentos. Os assentos ficam na fileira G. O show é um musical. Tem canto e dança. Os atores são muito talentosos. Tom ama a música. Seu amigo tira uma foto durante o intervalo. O show termina às 21:30. Eles caminham para fora e conversam sobre suas partes favoritas. Tom diz que foi a melhor noite da viagem dele.',
      textA2: 'New York City offers an incredible range of entertainment options that can suit any taste and budget. Tom had been dreaming of seeing a Broadway show ever since he started learning English, and he finally got the chance during his two-week vacation. He spent hours researching different shows online, comparing reviews, prices, and available dates. He eventually settled on a classic musical that had been running for over twenty years. He purchased his tickets through a discount website called TKTS, which offers same-day tickets at 30-50% off the regular price. He managed to get orchestra seats for just $95 each instead of the original $175. On the night of the show, he arrived at the theater district around Times Square, which was absolutely buzzing with energy: bright neon signs, street performers, tourists snapping photos, and the smell of roasted peanuts from the vendors. Inside the theater, the atmosphere was magical. The live orchestra began playing the overture, and Tom felt chills run down his spine. During the intermission, he grabbed a glass of champagne at the lobby bar and chatted with an American couple sitting next to him. They recommended visiting the Museum of Modern Art and a jazz club in the Village. After the show ended with a standing ovation, Tom walked out into the glittering streets feeling utterly inspired.',
      textA2Pt: 'Nova York oferece uma gama incrível de opções de entretenimento que podem atender a qualquer gosto e orçamento. Tom sonhava em assistir a um show da Broadway desde que começou a aprender inglês, e finalmente teve a chance durante suas férias de duas semanas. Ele passou horas pesquisando diferentes shows online, comparando avaliações, preços e datas disponíveis. Ele acabou escolhendo um musical clássico que estava em cartaz há mais de vinte anos. Ele comprou seus ingressos através de um site de desconto chamado TKTS, que oferece ingressos para o mesmo dia com 30-50% de desconto do preço normal. Ele conseguiu assentos na orquestra por apenas $95 cada, em vez dos $175 originais. Na noite do show, ele chegou ao distrito dos teatros perto da Times Square, que estava absolutamente vibrante com energia: letreiros de neon brilhantes, artistas de rua, turistas tirando fotos e o cheiro de amendoins torrados dos vendedores ambulantes. Dentro do teatro, a atmosfera era mágica. A orquestra ao vivo começou a tocar a abertura, e Tom sentiu arrepios na espinha. Durante o intervalo, ele pegou uma taça de champanhe no bar do lobby e conversou com um casal americano sentado ao lado dele. Eles recomendaram visitar o Museu de Arte Moderna e um clube de jazz no Village. Depois que o show terminou com uma ovação de pé, Tom saiu para as ruas brilhantes se sentindo completamente inspirado.',
      questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Tom hates musicals', 'Tom and his friend have a great night watching a Broadway show', 'Tom and his friend get lost in the theater', 'Tom works as an actor'], correctIndex: 1 },
        { question: 'What does "talented" mean?', questionPt: 'O que significa "talented"?', options: ['Very bad at singing', 'Having a natural ability or skill to act and sing well', 'Being very tall', 'Being very old'], correctIndex: 1 },
        { question: 'Why do they buy water and soda?', questionPt: 'Por que eles compram água e refrigerante?', options: ['Because they have time before the show starts', 'Because it is mandatory', 'Because they want to throw it', 'Because they are outside'], correctIndex: 0 },
        { question: 'What can we conclude about Tom\'s trip?', questionPt: 'O que podemos concluir sobre a viagem de Tom?', options: ['He didn\'t like the theater', 'The show was the highlight of his trip', 'He fell asleep', 'He wants to go home early'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'How did Tom buy discount tickets?', questionPt: 'Como Tom comprou ingressos com desconto?', options: ['From a friend', 'At the box office', 'Through the TKTS website', 'On social media'], correctIndex: 2 },
        { question: 'How much did Tom save per ticket?', questionPt: 'Quanto Tom economizou por ingresso?', options: ['$40', '$60', '$80', '$100'], correctIndex: 2 },
        { question: 'What did Tom do during intermission?', questionPt: 'O que Tom fez durante o intervalo?', options: ['He left the theater', 'He grabbed champagne and chatted with strangers', 'He called his mother', 'He took a nap'], correctIndex: 1 },
        { question: 'How did the show end?', questionPt: 'Como o show terminou?', options: ['Quietly', 'With a standing ovation', 'People left early', 'It was cancelled'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Atendente] \"Bem-vindo! Qual filme você quer ver?\"",
            expectedEn: "Welcome! Which movie would you like to see?"
      },
      {
            promptPt: "[Você] Você quer pedir dois ingressos",
            expectedEn: "Two tickets, please."
      },
      {
            promptPt: "[Você] Você quer perguntar a que horas o filme começa",
            expectedEn: "What time does the movie start?"
      },
      {
            promptPt: "[Atendente] \"Você gostaria de pipoca ou bebida?\"",
            expectedEn: "Would you like any popcorn or drinks?"
      },
      {
            promptPt: "[Você] Você quer perguntar se tem pipoca doce",
            expectedEn: "Do you have sweet popcorn?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde fica o seu assento",
            expectedEn: "Where is my seat?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Watch a great movie in a terrible seat",
            optionAPt: "Assistir a um ótimo filme em um assento horrível",
            optionBEn: "Watch a terrible movie in a VIP seat",
            optionBPt: "Assistir a um filme terrível em um assento VIP"
      },
      {
            optionAEn: "Spill your popcorn at the cinema",
            optionAPt: "Derrubar sua pipoca no cinema",
            optionBEn: "Spill your soda on your shirt",
            optionBPt: "Derrubar seu refrigerante na sua camisa"
      },
      {
            optionAEn: "Sit behind a very tall person",
            optionAPt: "Sentar atrás de uma pessoa muito alta",
            optionBEn: "Sit next to someone checking their bright phone",
            optionBPt: "Sentar ao lado de alguém mexendo no celular brilhante"
      },
      {
            optionAEn: "Go to a concert and stand in the very back",
            optionAPt: "Ir a um show e ficar no fundão",
            optionBEn: "Stand in the front row but get pushed constantly",
            optionBPt: "Ficar na primeira fila mas ser empurrado o tempo todo"
      },
      {
            optionAEn: "Only listen to 80s music forever",
            optionAPt: "Ouvir apenas música dos anos 80 para sempre",
            optionBEn: "Only listen to modern pop music forever",
            optionBPt: "Ouvir apenas música pop moderna para sempre"
      },
      {
            optionAEn: "Meet your favorite actor but they are rude",
            optionAPt: "Conhecer seu ator favorito mas ele ser rude",
            optionBEn: "Meet a famous actor you hate but they are super nice",
            optionBPt: "Conhecer um ator que você odeia mas ele ser super legal"
      },
      {
            optionAEn: "Go to the movies alone",
            optionAPt: "Ir ao cinema sozinho",
            optionBEn: "Go to the movies with someone who talks the whole time",
            optionBPt: "Ir ao cinema com alguém que fala o tempo todo"
      }
]
},
  
  {
    id: 'tech',
    speakingQuestions: [
    {
        "question": "How many hours a day do you spend on your phone?",
        "questionPt": "Quantas horas por dia você passa no celular?",
        "hintA1": "I spend four hours on my phone.",
        "hintA2": "I probably spend around five hours a day, mostly scrolling through social media."
    },
    {
        "question": "What are your three favorite mobile apps?",
        "questionPt": "Quais são seus três aplicativos de celular favoritos?",
        "hintA1": "WhatsApp, Instagram, and YouTube.",
        "hintA2": "My favorite apps are Spotify for music, Instagram for photos, and WhatsApp to chat."
    },
    {
        "question": "Do you prefer using a laptop or a smartphone?",
        "questionPt": "Você prefere usar um notebook ou um smartphone?",
        "hintA1": "I prefer my smartphone.",
        "hintA2": "I prefer my laptop for working, but for everything else, my smartphone is better."
    }
,
    {
        "question": "When did you buy your current phone?",
        "questionPt": "Quando você comprou o seu celular atual?",
        "hintA1": "I bought it last year.",
        "hintA2": "I got this phone about two years ago and it still works perfectly fine."
    },
    {
        "question": "Do you use a smartwatch?",
        "questionPt": "Você usa um relógio inteligente?",
        "hintA1": "No, I use a regular watch.",
        "hintA2": "Yes, I wear an Apple Watch every day to track my steps and heart rate."
    },
    {
        "question": "Did you ever lose your phone?",
        "questionPt": "Você já perdeu seu celular?",
        "hintA1": "No, I never lost it.",
        "hintA2": "Yes, I left it in a taxi once but the driver returned it the next day."
    },
    {
        "question": "Do you spend a lot of time on social media?",
        "questionPt": "Você passa muito tempo nas redes sociais?",
        "hintA1": "Yes, I use Instagram a lot.",
        "hintA2": "I try to limit my screen time but I still spend about two hours per day."
    },
    {
        "question": "Did your computer crash recently?",
        "questionPt": "O seu computador travou recentemente?",
        "hintA1": "No, it works fine.",
        "hintA2": "Yes, it froze right in the middle of an important video call last week."
    }
    ],
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
          { speaker: 'student', english: "Excuse me, do you offer free Wi-Fi here?", portuguese: "Com licença, vocês oferecem Wi-Fi grátis aqui?" },
          { speaker: 'native', english: "Yes, we do! It's completely free for all our customers.", portuguese: "Sim, oferecemos! É totalmente grátis para todos os nossos clientes." },
          { speaker: 'student', english: "That's great. What is the network name I should look for?", portuguese: "Isso é ótimo. Qual é o nome da rede que devo procurar?" },
          { speaker: 'native', english: "You should see two networks. Connect to 'CoffeeHouse_Guest'. Don't use the 'Staff' one.", portuguese: "Você deve ver duas redes. Conecte-se a 'CoffeeHouse_Guest'. Não use a 'Staff'." },
          { speaker: 'student', english: "I see it. Is there a password to join?", portuguese: "Estou vendo. Tem uma senha para entrar?" },
          { speaker: 'native', english: "Yes, the password is 'latte2024'. It's all lowercase, no spaces.", portuguese: "Sim, a senha é 'latte2024'. É tudo em minúsculo, sem espaços." },
          { speaker: 'student', english: "Okay, let me type that in... It says 'Incorrect password'.", portuguese: "Ok, deixe-me digitar isso... Está dizendo 'Senha incorreta'." },
          { speaker: 'native', english: "Oh, my bad! We changed it yesterday. It's 'latte2025' now.", portuguese: "Ah, erro meu! Nós mudamos ontem. É 'latte2025' agora." },
          { speaker: 'student', english: "Ah, it worked! Thank you. By the way, do you have any power outlets near the tables?", portuguese: "Ah, funcionou! Obrigado. A propósito, vocês têm tomadas perto das mesas?" },
          { speaker: 'native', english: "Yes, there are outlets under the booths against the wall.", portuguese: "Sim, tem tomadas debaixo dos sofás encostados na parede." },
          { speaker: 'student', english: "I have a Brazilian plug. Do you happen to sell travel adapters?", portuguese: "Eu tenho um plugue brasileiro. Por acaso vocês vendem adaptadores de viagem?" },
          { speaker: 'native', english: "We don't, but there is an electronics store just across the street. They definitely have them.", portuguese: "Nós não, mas tem uma loja de eletrônicos bem do outro lado da rua. Eles definitivamente têm." },
          { speaker: 'student', english: "I'll go check it out later. Thanks again for your help!", portuguese: "Vou dar uma olhada lá mais tarde. Obrigado novamente pela sua ajuda!" }
]
},
      {
        title: 'Buying a SIM Card',
        titlePt: 'Comprando um Chip',
        icon: '💳',
        dialogues: [
          { speaker: 'student', english: "Hi! I'm visiting from Brazil and I need to buy a prepaid SIM card, please.", portuguese: "Oi! Estou visitando do Brasil e preciso comprar um chip pré-pago, por favor." },
          { speaker: 'native', english: "Welcome to the US! Is your phone unlocked?", portuguese: "Bem-vindo aos EUA! Seu celular é desbloqueado?" },
          { speaker: 'student', english: "Yes, it's completely unlocked. What data plans do you have?", portuguese: "Sim, é totalmente desbloqueado. Quais planos de dados vocês têm?" },
          { speaker: 'native', english: "We have a tourist package that gives you 15 gigabytes of 5G data for thirty-five dollars.", portuguese: "Temos um pacote de turista que te dá 15 gigabytes de dados 5G por trinta e cinco dólares." },
          { speaker: 'student', english: "How long does that plan last?", portuguese: "Quanto tempo dura esse plano?" },
          { speaker: 'native', english: "It is valid for 30 days. After that, it automatically expires unless you top it up.", portuguese: "É válido por 30 dias. Depois disso, expira automaticamente a menos que você faça uma recarga." },
          { speaker: 'student', english: "Does the plan include any international calls to Brazil?", portuguese: "O plano inclui alguma ligação internacional para o Brasil?" },
          { speaker: 'native', english: "No international calls, unfortunately. But you get unlimited local calls and texts across the US.", portuguese: "Nenhuma ligação internacional, infelizmente. Mas você tem ligações e mensagens locais ilimitadas por todos os EUA." },
          { speaker: 'student', english: "That's perfectly fine, I can just use WhatsApp to call home. I'll take it.", portuguese: "Está perfeitamente bem, eu posso usar o WhatsApp para ligar para casa. Eu vou levar." },
          { speaker: 'native', english: "Great. Can I see your passport to register the line?", portuguese: "Ótimo. Posso ver seu passaporte para registrar a linha?" },
          { speaker: 'student', english: "Here is my passport. Could you also help me activate the SIM card on my phone?", portuguese: "Aqui está meu passaporte. Você também poderia me ajudar a ativar o chip no meu celular?" },
          { speaker: 'native', english: "Of course. Let me pop the tray out. Okay, the new SIM is in. Let's wait a minute for the signal.", portuguese: "Claro. Deixe-me tirar a bandeja. Ok, o novo chip está dentro. Vamos esperar um minuto pelo sinal." },
          { speaker: 'student', english: "I see the 5G icon now. It's working!", portuguese: "Estou vendo o ícone do 5G agora. Está funcionando!" },
          { speaker: 'native', english: "Awesome. Here is your new phone number printed on the receipt. Have a great trip!", portuguese: "Incrível. Aqui está o seu novo número de telefone impresso no recibo. Tenha uma ótima viagem!" }
]
}
],
            importantPhrases: [
      {
            pt: "A tela está quebrada.",
            en: "The screen is broken."
      },
      {
            pt: "Esqueci minha senha.",
            en: "I forgot my password."
      },
      {
            pt: "Tem tomada aqui?",
            en: "Is there an outlet here?"
      },
      {
            pt: "O arquivo não quer abrir.",
            en: "The file will not open."
      },
      {
            pt: "A ligação caiu.",
            en: "The call dropped."
      },
      {
            pt: "Como eu conecto no bluetooth?",
            en: "How do I connect to bluetooth?"
      }
],
        problems: [
      {
            descriptionPt: "Você quebrou a tela do celular e precisa de um conserto urgente."
      },
      {
            descriptionPt: "O adaptador de tomada que você comprou não encaixa."
      }
],
    vocabulary: [
      { english: "Network", portuguese: "Rede",
        sentenceA1: "I have no network.",
        sentenceA2: "The network coverage is very poor in this area.",
        sentenceA1Pt: "Estou sem rede.",
        sentenceA2Pt: "A cobertura de rede é muito fraca nesta área."
      },
      { english: "Password", portuguese: "Senha",
        sentenceA1: "What is the password?",
        sentenceA2: "I changed my password because someone tried to access my account.",
        sentenceA1Pt: "Qual é a senha?",
        sentenceA2Pt: "Mudei minha senha porque alguém tentou acessar minha conta."
      },
      { english: "SIM card / Chip", portuguese: "Chip de celular",
        sentenceA1: "I need a SIM card.",
        sentenceA2: "I bought a local SIM card at the airport to avoid roaming.",
        sentenceA1Pt: "Preciso de um chip.",
        sentenceA2Pt: "Comprei um chip local no aeroporto para evitar roaming."
      },
      { english: "Prepaid", portuguese: "Pré-pago",
        sentenceA1: "I want a prepaid plan.",
        sentenceA2: "The prepaid plan includes five gigabytes of data.",
        sentenceA1Pt: "Quero um plano pré-pago.",
        sentenceA2Pt: "O plano pré-pago inclui cinco gigabytes de dados."
      },
      { english: "Data plan", portuguese: "Plano de dados",
        sentenceA1: "I need a data plan.",
        sentenceA2: "My data plan ran out so I cannot use the internet.",
        sentenceA1Pt: "Preciso de um plano de dados.",
        sentenceA2Pt: "Meu plano de dados acabou e não consigo usar a internet."
      },
      { english: "Coverage", portuguese: "Cobertura",
        sentenceA1: "Is there coverage here?",
        sentenceA2: "The coverage is excellent in the city center.",
        sentenceA1Pt: "Tem cobertura aqui?",
        sentenceA2Pt: "A cobertura é excelente no centro da cidade."
      },
      { english: "Unlimited", portuguese: "Ilimitado",
        sentenceA1: "I want unlimited data.",
        sentenceA2: "The unlimited plan is worth it if you stream a lot.",
        sentenceA1Pt: "Quero dados ilimitados.",
        sentenceA2Pt: "O plano ilimitado vale a pena se você assiste muitos vídeos."
      },
      { english: "Charger", portuguese: "Carregador",
        sentenceA1: "I need a charger.",
        sentenceA2: "I forgot my charger and my battery is at five percent.",
        sentenceA1Pt: "Preciso de um carregador.",
        sentenceA2Pt: "Esqueci meu carregador e a bateria está em cinco por cento."
      },
      { english: "Plug / Outlet", portuguese: "Tomada",
        sentenceA1: "Where is the outlet?",
        sentenceA2: "The outlet here uses a different plug so I need an adapter.",
        sentenceA1Pt: "Onde fica a tomada?",
        sentenceA2Pt: "A tomada aqui usa um plugue diferente, preciso de um adaptador."
      },
      { english: "Power bank", portuguese: "Carregador portátil",
        sentenceA1: "I have a power bank.",
        sentenceA2: "I always carry a power bank when I travel.",
        sentenceA1Pt: "Tenho um carregador portátil.",
        sentenceA2Pt: "Sempre levo um carregador portátil quando viajo."
      },
      { english: "To charge", portuguese: "Carregar",
        sentenceA1: "I need to charge my phone.",
        sentenceA2: "Can I charge my phone here? The battery is almost dead.",
        sentenceA1Pt: "Preciso carregar meu celular.",
        sentenceA2Pt: "Posso carregar meu celular aqui? A bateria está quase acabando."
      },
      { english: "Free Wi-Fi", portuguese: "Wi-Fi gratuito",
        sentenceA1: "Is there free Wi-Fi?",
        sentenceA2: "This cafe has free Wi-Fi but you need the password.",
        sentenceA1Pt: "Tem Wi-Fi grátis?",
        sentenceA2Pt: "Este café tem Wi-Fi grátis mas você precisa da senha."
      },
      { english: "No signal", portuguese: "Sem sinal",
        sentenceA1: "I have no signal.",
        sentenceA2: "There is no signal in the elevator so I will call you back.",
        sentenceA1Pt: "Estou sem sinal.",
        sentenceA2Pt: "Não tem sinal no elevador, vou te ligar de volta."
      },
      { english: "Hotspot", portuguese: "Roteador / Compartilhar internet",
        sentenceA1: "Turn on your hotspot.",
        sentenceA2: "I used my phone as a mobile hotspot so my laptop could connect.",
        sentenceA1Pt: "Ligue o seu roteador.",
        sentenceA2Pt: "Usei meu celular como roteador portátil para meu notebook se conectar."
      },
      { english: "To download", portuguese: "Baixar / Fazer download",
        sentenceA1: "Download the app.",
        sentenceA2: "You should download the offline map before you start hiking.",
        sentenceA1Pt: "Baixe o aplicativo.",
        sentenceA2Pt: "Você deveria baixar o mapa offline antes de começar a caminhar."
      },
      { english: "App / Application", portuguese: "Aplicativo",
        sentenceA1: "This app is very useful.",
        sentenceA2: "The airline app allows you to track your luggage in real time.",
        sentenceA1Pt: "Este aplicativo é muito útil.",
        sentenceA2Pt: "O app da companhia aérea permite rastrear sua bagagem em tempo real."
      },
      { english: "Adapter", portuguese: "Adaptador",
        sentenceA1: "I need an adapter.",
        sentenceA2: "You will need a universal adapter to plug in your electronics abroad.",
        sentenceA1Pt: "Preciso de um adaptador.",
        sentenceA2Pt: "Você precisará de um adaptador universal para ligar seus eletrônicos no exterior."
      }
],
    culturalTips: [
      {
        title: "Public Wi-Fi",
        titlePt: "Wi-Fi Público",
        content: "Most cafes and airports offer free Wi-Fi. However, be careful with banking or sensitive apps on public networks. Using a VPN is recommended!",
        contentPt: "A maioria dos cafés e aeroportos oferece Wi-Fi grátis. No entanto, tenha cuidado com apps de banco em redes públicas. Usar uma VPN é recomendado!"
},
      {
        title: "eSIM Convenience",
        titlePt: "Praticidade do eSIM",
        content: "Modern phones support eSIMs. You can buy a data plan online before you travel and activate it instantly when you land, without needing a physical chip.",
        contentPt: "Celulares modernos suportam eSIMs. Você pode comprar um plano de dados online antes de viajar e ativá-lo instantaneamente ao pousar, sem precisar de um chip físico."
},
      {
        title: "Power Outlets",
        titlePt: "Tomadas de Energia",
        content: "US outlets use Type A and Type B plugs (two flat pins). The voltage is 110V. Don't forget to bring a travel adapter for your Brazilian devices!",
        contentPt: "As tomadas nos EUA usam plugues Tipo A e B (dois pinos chatos). A voltagem é 110V. Não esqueça de levar um adaptador de viagem para seus aparelhos brasileiros!"
}
    ],
  reading: {
      textA1: 'Ana needs to use her phone in the US. She goes to a phone store. She asks about a SIM card. The SIM card costs 30 dollars for one month. It includes calls, texts, and data. She also needs Wi-Fi at her hotel. The hotel Wi-Fi is free, but it is slow. She asks the front desk for the password. The password is hotel2024. She connects her phone to the Wi-Fi. Now she can use WhatsApp to call her family. She also downloads a map app. The map app works without internet. She charges her phone every night. She brought a power adapter because the plugs are different in the US.',
      textA1Pt: 'Ana precisa usar seu celular nos EUA. Ela vai a uma loja de celular. Ela pergunta sobre um chip. O chip custa 30 dólares por um mês. Inclui ligações, mensagens e dados. Ela também precisa de Wi-Fi no hotel. O Wi-Fi do hotel é gratuito, mas é lento. Ela pede a senha na recepção. A senha é hotel2024. Ela conecta o celular ao Wi-Fi. Agora ela pode usar o WhatsApp para ligar para a família. Ela também baixa um aplicativo de mapa. O aplicativo de mapa funciona sem internet. Ela carrega o celular toda noite. Ela trouxe um adaptador de tomada porque as tomadas são diferentes nos EUA.',
      textA2: 'Staying connected while traveling abroad has become essential in the modern world, and Ana discovered this firsthand when she arrived in the United States. Her Brazilian phone plan did not include international roaming, so she needed to find a local solution immediately. She visited a T-Mobile store near her hotel and was presented with several prepaid options. The basic plan offered unlimited calls and texts with 5GB of high-speed data for $30 a month, while the premium plan included 15GB of data and a mobile hotspot feature for $50. She opted for the premium plan since she needed to use GPS navigation constantly and wanted to share her Wi-Fi with her travel companion. The store associate helped her configure the eSIM on her phone, which meant she did not even need a physical SIM card. She was also surprised to learn that most public places in New York, including subway stations, offered free Wi-Fi, although the connection speed varied significantly. At coffee shops, she learned to always ask for the Wi-Fi password and a power outlet before ordering, as these were precious resources for digital nomads and travelers alike. She also discovered that her Brazilian power adapter needed an American plug converter, as the US uses Type A and B outlets with 110 volts, unlike Brazil\'s 220-volt system.',
      textA2Pt: 'Manter-se conectado enquanto viaja para o exterior tornou-se essencial no mundo moderno, e Ana descobriu isso em primeira mão quando chegou nos Estados Unidos. Seu plano de celular brasileiro não incluía roaming internacional, então ela precisou encontrar uma solução local imediatamente. Ela visitou uma loja T-Mobile perto do hotel e recebeu várias opções pré-pagas. O plano básico oferecia ligações e mensagens ilimitadas com 5GB de dados de alta velocidade por $30 ao mês, enquanto o plano premium incluía 15GB de dados e recurso de hotspot móvel por $50. Ela optou pelo plano premium já que precisava usar a navegação GPS constantemente e queria compartilhar seu Wi-Fi com sua companheira de viagem. O associado da loja a ajudou a configurar o eSIM no celular, o que significava que ela nem precisava de um chip físico. Ela também ficou surpresa ao saber que a maioria dos lugares públicos em Nova York, incluindo estações de metrô, oferecia Wi-Fi gratuito, embora a velocidade de conexão variasse significativamente. Em cafeterias, ela aprendeu a sempre pedir a senha do Wi-Fi e uma tomada antes de fazer o pedido, pois estes eram recursos preciosos para nômades digitais e viajantes. Ela também descobriu que seu adaptador de tomada brasileiro precisava de um conversor de plugue americano, já que os EUA usam tomadas Tipo A e B com 110 volts, diferente do sistema de 220 volts do Brasil.',
      questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Ana setting up her phone to use in the US', 'Ana buying a new smartphone', 'Ana fixing a broken TV', 'Ana taking photos in the park'], correctIndex: 0 },
        { question: 'What does "slow" mean in the text?', questionPt: 'O que significa "slow" no texto?', options: ['It is working very well and fast', 'It is brand new', 'It takes a long time to load things', 'It is very cheap'], correctIndex: 2 },
        { question: 'Why does Ana need a power adapter?', questionPt: 'Por que Ana precisa de um adaptador de tomada?', options: ['Because the plugs in the US are different from her country', 'Because she likes the color black', 'Because it is cheaper', 'Because her phone is broken'], correctIndex: 0 },
        { question: 'What can we infer about the map app?', questionPt: 'O que podemos inferir sobre o aplicativo de mapa?', options: ['It uses a lot of internet data', 'It is very useful because she can use it offline', 'It is a game', 'It doesn\'t work'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'Why did Ana choose the premium plan?', questionPt: 'Por que Ana escolheu o plano premium?', options: ['It was the cheapest', 'She needed GPS and hotspot sharing', 'The store forced her', 'She wanted unlimited data'], correctIndex: 1 },
        { question: 'What type of SIM technology did Ana use?', questionPt: 'Que tipo de tecnologia SIM Ana usou?', options: ['Physical SIM card', 'eSIM', 'Prepaid card', 'No SIM'], correctIndex: 1 },
        { question: 'What voltage do US outlets use?', questionPt: 'Que voltagem as tomadas americanas usam?', options: ['220 volts', '110 volts', '240 volts', '100 volts'], correctIndex: 1 },
        { question: 'What did Ana learn to ask for at coffee shops?', questionPt: 'O que Ana aprendeu a pedir nas cafeterias?', options: ['Free coffee', 'Wi-Fi password and power outlet', 'The menu', 'A window seat'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Suporte] \"Como posso ajudar com o seu problema hoje?\"",
            expectedEn: "How can I help you with your issue today?"
      },
      {
            promptPt: "[Você] Você quer dizer que a internet não está funcionando",
            expectedEn: "The internet is not working."
      },
      {
            promptPt: "[Você] Você quer perguntar onde pode carregar o seu celular",
            expectedEn: "Where can I charge my phone?"
      },
      {
            promptPt: "[Suporte] \"Você já tentou reiniciar o aparelho?\"",
            expectedEn: "Have you tried restarting the device?"
      },
      {
            promptPt: "[Você] Você quer dizer que esqueceu a sua senha do Wi-Fi",
            expectedEn: "I forgot my Wi-Fi password."
      },
      {
            promptPt: "[Você] Você quer perguntar como se conecta à rede",
            expectedEn: "How do I connect to the network?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Have a fast computer with terrible internet",
            optionAPt: "Ter um computador rápido com internet horrível",
            optionBEn: "Have a very slow computer with gigabit internet",
            optionBPt: "Ter um computador muito lento com internet gigabit"
      },
      {
            optionAEn: "Lose your phone on a trip",
            optionAPt: "Perder seu celular em uma viagem",
            optionBEn: "Break your laptop screen before a presentation",
            optionBPt: "Quebrar a tela do notebook antes de uma apresentação"
      },
      {
            optionAEn: "Use a phone with a cracked screen forever",
            optionAPt: "Usar um celular com a tela trincada para sempre",
            optionBEn: "Use a phone that needs charging every 2 hours",
            optionBPt: "Usar um celular que precisa carregar a cada 2 horas"
      },
      {
            optionAEn: "Never use social media again",
            optionAPt: "Nunca mais usar redes sociais",
            optionBEn: "Never use a search engine (Google) again",
            optionBPt: "Nunca mais usar um buscador (Google)"
      },
      {
            optionAEn: "Have your search history leaked",
            optionAPt: "Ter seu histórico de pesquisa vazado",
            optionBEn: "Have your private photos leaked",
            optionBPt: "Ter suas fotos privadas vazadas"
      },
      {
            optionAEn: "Forget all your passwords",
            optionAPt: "Esquecer todas as suas senhas",
            optionBEn: "Have someone hack your email account",
            optionBPt: "Ter alguém hackeando sua conta de e-mail"
      },
      {
            optionAEn: "Use only a flip phone from 2005",
            optionAPt: "Usar apenas um celular de flip de 2005",
            optionBEn: "Use a heavy desktop computer for everything",
            optionBPt: "Usar um computador de mesa pesado para tudo"
      }
]
},
  {
  id: "review-2",
  title: "Review 2",
  titlePt: "Revisão 2",
  description: "Review what you've learned in the last 5 scenarios.",
  descriptionPt: "Revise o que você aprendeu nos últimos 5 cenários.",
  icon: "🔄",
  imagePath: "/images/review_2_scene.jpg",
  color: 'orange',
  vocabulary: [
    {
      english: "Turn left",
      portuguese: "Vire à esquerda",
      sentenceA1: "Turn left at the corner.",
      sentenceA2: "Turn left after the traffic light and walk two more blocks.",
      sentenceA1Pt: "Vire à esquerda na esquina.",
      sentenceA2Pt: "Vire à esquerda depois do semáforo e ande mais dois quarteirões."
    },
    {
      english: "Turn right",
      portuguese: "Vire à direita",
      sentenceA1: "Turn right here.",
      sentenceA2: "Turn right at the next intersection and you will see the bank.",
      sentenceA1Pt: "Vire à direita aqui.",
      sentenceA2Pt: "Vire à direita na próxima interseção e verá o banco."
    },
    {
      english: "Go straight",
      portuguese: "Siga em frente",
      sentenceA1: "Go straight two blocks.",
      sentenceA2: "Go straight for five minutes and the museum is on your left.",
      sentenceA1Pt: "Siga em frente dois quarteirões.",
      sentenceA2Pt: "Siga em frente por cinco minutos e o museu fica à sua esquerda."
    },
    {
      english: "Block",
      portuguese: "Quarteirão / Bloco",
      sentenceA1: "It is two blocks away.",
      sentenceA2: "The pharmacy is about three blocks from here.",
      sentenceA1Pt: "Fica a dois quarteirões.",
      sentenceA2Pt: "A farmácia fica a três quarteirões daqui."
    },
    {
      english: "Ride",
      portuguese: "Carona / Corrida",
      sentenceA1: "I need a ride.",
      sentenceA2: "Can you give me a ride to the airport tomorrow?",
      sentenceA1Pt: "Preciso de uma carona.",
      sentenceA2Pt: "Pode me dar uma carona ao aeroporto amanhã?"
    },
    {
      english: "Fare",
      portuguese: "Tarifa / Preço da passagem",
      sentenceA1: "How much is the fare?",
      sentenceA2: "The bus fare increased by ten percent last month.",
      sentenceA1Pt: "Quanto é a tarifa?",
      sentenceA2Pt: "A tarifa do ônibus aumentou dez por cento mês passado."
    },
    {
      english: "Driver",
      portuguese: "Motorista",
      sentenceA1: "The driver is nice.",
      sentenceA2: "The taxi driver took the fastest route to avoid traffic.",
      sentenceA1Pt: "O motorista é gentil.",
      sentenceA2Pt: "O taxista pegou a rota mais rápida para evitar trânsito."
    },
    {
      english: "Subway / Metro",
      portuguese: "Metrô",
      sentenceA1: "I take the subway every day.",
      sentenceA2: "The subway is the fastest way to get around during rush hour.",
      sentenceA1Pt: "Pego o metrô todo dia.",
      sentenceA2Pt: "O metrô é a forma mais rápida de se locomover na hora do rush."
    },
    {
      english: "Headache",
      portuguese: "Dor de cabeça",
      sentenceA1: "I have a headache.",
      sentenceA2: "I have had a terrible headache since yesterday.",
      sentenceA1Pt: "Estou com dor de cabeça.",
      sentenceA2Pt: "Estou com uma dor de cabeça terrível desde ontem."
    },
    {
      english: "Sore throat",
      portuguese: "Dor de garganta",
      sentenceA1: "I have a sore throat.",
      sentenceA2: "My sore throat makes it difficult to swallow food.",
      sentenceA1Pt: "Estou com dor de garganta.",
      sentenceA2Pt: "Minha dor de garganta dificulta engolir comida."
    },
    {
      english: "Fever",
      portuguese: "Febre",
      sentenceA1: "I have a fever.",
      sentenceA2: "The doctor said I have a mild fever and should rest.",
      sentenceA1Pt: "Estou com febre.",
      sentenceA2Pt: "O médico disse que estou com febre leve e devo descansar."
    },
    {
      english: "Pain reliever",
      portuguese: "Analgésico",
      sentenceA1: "I need a pain reliever.",
      sentenceA2: "Can you recommend a good pain reliever for muscle pain?",
      sentenceA1Pt: "Preciso de um analgésico.",
      sentenceA2Pt: "Pode recomendar um bom analgésico para dor muscular?"
    },
    {
      english: "Tickets",
      portuguese: "Ingressos",
      sentenceA1: "I bought two tickets.",
      sentenceA2: "I bought the tickets online because they were cheaper.",
      sentenceA1Pt: "Comprei dois ingressos.",
      sentenceA2Pt: "Comprei os ingressos online porque eram mais baratos."
    },
    {
      english: "Show",
      portuguese: "Apresentação / Show",
      sentenceA1: "The show starts at 8 PM.",
      sentenceA2: "The comedy show last night was amazing.",
      sentenceA1Pt: "O show começa às 20h.",
      sentenceA2Pt: "O show de comédia ontem à noite foi incrível."
    },
    {
      english: "Box office",
      portuguese: "Bilheteria",
      sentenceA1: "The box office is closed.",
      sentenceA2: "You can buy tickets at the box office or online.",
      sentenceA1Pt: "A bilheteria está fechada.",
      sentenceA2Pt: "Pode comprar ingressos na bilheteria ou online."
    },
    {
      english: "Recommendation",
      portuguese: "Recomendação",
      sentenceA1: "Do you have a recommendation?",
      sentenceA2: "The staff gave me a great recommendation for a jazz club.",
      sentenceA1Pt: "Tem uma recomendação?",
      sentenceA2Pt: "A equipe me deu uma ótima recomendação de um clube de jazz."
    },
    {
      english: "Network",
      portuguese: "Rede",
      sentenceA1: "I have no network.",
      sentenceA2: "The network coverage is very poor in this area.",
      sentenceA1Pt: "Estou sem rede.",
      sentenceA2Pt: "A cobertura de rede é muito fraca nesta área."
    },
    {
      english: "Password",
      portuguese: "Senha",
      sentenceA1: "What is the password?",
      sentenceA2: "I changed my password because someone tried to access my account.",
      sentenceA1Pt: "Qual é a senha?",
      sentenceA2Pt: "Mudei minha senha porque alguém tentou acessar minha conta."
    },
    {
      english: "SIM card / Chip",
      portuguese: "Chip de celular",
      sentenceA1: "I need a SIM card.",
      sentenceA2: "I bought a local SIM card at the airport to avoid roaming.",
      sentenceA1Pt: "Preciso de um chip.",
      sentenceA2Pt: "Comprei um chip local no aeroporto para evitar roaming."
    },
    {
      english: "Prepaid",
      portuguese: "Pré-pago",
      sentenceA1: "I want a prepaid plan.",
      sentenceA2: "The prepaid plan includes five gigabytes of data.",
      sentenceA1Pt: "Quero um plano pré-pago.",
      sentenceA2Pt: "O plano pré-pago inclui cinco gigabytes de dados."
    }
  ],
  dialogues: [
    {
      speaker: "tourist",
      english: "Excuse me, do you speak English? Could you help me?",
      portuguese: "Com licença, você fala inglês? Você poderia me ajudar?"
    },
    {
      speaker: "local",
      english: "Yes, I do! Of course, what do you need?",
      portuguese: "Sim, eu falo! Claro, do que você precisa?"
    }
  ],
  dialogues2: [
    {
      speaker: "tourist",
      english: "Excuse me, I'm looking for a pharmacy. Is there one nearby?",
      portuguese: "Com licença, estou procurando uma farmácia. Existe alguma por perto?"
    }
  ],
  importantPhrases: [
    {
      pt: "Pode mostrar no mapa?",
      en: "Can you show me on the map?"
    },
    {
      pt: "Fica do lado esquerdo.",
      en: "It is on the left side."
    },
    {
      pt: "Fica perto do banco?",
      en: "Is it near the bank?"
    },
    {
      pt: "Quanto tempo dura a viagem?",
      en: "How long is the trip?"
    },
    {
      pt: "Qual é a próxima parada?",
      en: "What is the next stop?"
    },
    {
      pt: "Preciso trocar de linha?",
      en: "Do I need to change lines?"
    },
    {
      pt: "Preciso de um dentista.",
      en: "I need a dentist."
    },
    {
      pt: "Eu torci meu tornozelo.",
      en: "I sprained my ankle."
    },
    {
      pt: "Tem seguro saúde?",
      en: "Do you have health insurance?"
    },
    {
      pt: "Onde compro as bebidas?",
      en: "Where do I buy drinks?"
    },
    {
      pt: "Posso tirar fotos?",
      en: "Can I take photos?"
    },
    {
      pt: "O museu está fechado hoje?",
      en: "Is the museum closed today?"
    },
    {
      pt: "A tela está quebrada.",
      en: "The screen is broken."
    },
    {
      pt: "Esqueci minha senha.",
      en: "I forgot my password."
    },
    {
      pt: "Tem tomada aqui?",
      en: "Is there an outlet here?"
    }
  ],
  problems: [
    {
      descriptionPt: "Você seguiu as instruções, mas se perdeu completamente."
    },
    {
      descriptionPt: "Seu celular ficou sem bateria e você precisa perguntar como chegar ao hotel."
    },
    {
      descriptionPt: "Você pegou o trem na direção errada."
    },
    {
      descriptionPt: "Você perdeu o último ônibus da noite."
    },
    {
      descriptionPt: "Você precisa comprar um remédio, mas esqueceu o nome dele em inglês."
    },
    {
      descriptionPt: "Você começou a sentir uma dor muito forte no estômago durante a noite."
    },
    {
      descriptionPt: "Você comprou ingressos online, mas o scanner não está lendo o QR Code."
    },
    {
      descriptionPt: "Alguém está sentado no seu lugar numerado no cinema."
    },
    {
      descriptionPt: "Você quebrou a tela do celular e precisa de um conserto urgente."
    },
    {
      descriptionPt: "O adaptador de tomada que você comprou não encaixa."
    }
  ]
},
  
  
  {
    id: 'shopping',
    speakingQuestions: [
    {
        "question": "Do you prefer shopping online or in a physical store?",
        "questionPt": "Você prefere fazer compras online ou em loja física?",
        "hintA1": "I prefer online shopping.",
        "hintA2": "I prefer shopping online because I can easily compare prices without leaving home."
    },
    {
        "question": "When was the last time you went to a shopping mall?",
        "questionPt": "Quando foi a última vez que você foi a um shopping center?",
        "hintA1": "I went to the mall last week.",
        "hintA2": "I went to the mall two weeks ago to buy a gift for my friend's birthday."
    },
    {
        "question": "Are you the type of person who waits for sales (Black Friday, etc)?",
        "questionPt": "Você é o tipo de pessoa que espera por promoções (Black Friday, etc)?",
        "hintA1": "Yes, I love sales and discounts.",
        "hintA2": "Definitely, I always wait for big sales to buy expensive electronics or shoes."
    }
,
    {
        "question": "Did you buy anything nice last weekend?",
        "questionPt": "Você comprou algo legal no último fim de semana?",
        "hintA1": "I bought a new shirt.",
        "hintA2": "Yes, I found a beautiful pair of shoes that were on a fifty percent discount."
    },
    {
        "question": "Do you try clothes on before buying them?",
        "questionPt": "Você experimenta as roupas antes de comprá-las?",
        "hintA1": "Yes, I always try them on.",
        "hintA2": "Usually yes, unless I already know my exact size for that specific brand."
    },
    {
        "question": "When did you last go to a shopping mall?",
        "questionPt": "Quando foi a última vez que você foi a um shopping?",
        "hintA1": "I went last Saturday.",
        "hintA2": "I went to the mall three days ago to buy a gift for my friend's birthday."
    },
    {
        "question": "Do you prefer shopping online or in stores?",
        "questionPt": "Você prefere comprar online ou em lojas físicas?",
        "hintA1": "I prefer shopping online.",
        "hintA2": "I like both. I buy electronics online but I prefer trying on clothes in the store."
    },
    {
        "question": "Did the store give you a receipt?",
        "questionPt": "A loja te deu um recibo?",
        "hintA1": "Yes, the receipt is in the bag.",
        "hintA2": "Yes, they asked me if I wanted it printed or sent to my email address."
    }
    ],
    title: 'Shopping & Outlet',
    titlePt: 'Compras e Outlet',
    description: 'Master clothing store interactions, fitting rooms, shoe sizes, and return policies.',
    descriptionPt: 'Domine interações em lojas de roupas, provadores, tamanhos de sapatos e trocas.',
    icon: '🛍️',
    color: 'orange',
    imagePath: '/images/shopping_scene.png',
    dialogues: [
      { speaker: 'student', english: "Excuse me, do you happen to have this sweater in a smaller size?", portuguese: "Com licença, por acaso você tem este suéter em um tamanho menor?" },
      { speaker: 'native', english: "Let me check the back for you. What size are you currently holding?", portuguese: "Deixe-me checar no estoque para você. Qual tamanho você está segurando agora?" },
      { speaker: 'student', english: "This is a large, but it looks a bit oversized. I think I need a size small.", portuguese: "Este é um G, mas parece um pouco grande demais. Acho que preciso de um P." },
      { speaker: 'native', english: "Okay, I'll go look. Are there any other colors you'd like me to grab just in case?", portuguese: "Ok, vou dar uma olhada. Tem alguma outra cor que você gostaria que eu pegasse por precaução?" },
      { speaker: 'student', english: "If you have it in navy blue or charcoal gray, that would be great.", portuguese: "Se você tiver em azul marinho ou cinza escuro, seria ótimo." },
      { speaker: 'native', english: "(A few minutes later) I found the small in gray! The fitting rooms are right behind you.", portuguese: "(Alguns minutos depois) Eu achei o P em cinza! Os provadores estão logo atrás de você." },
      { speaker: 'student', english: "Perfect, thank you! I'll try it on right now.", portuguese: "Perfeito, obrigada! Vou provar agora mesmo." },
      { speaker: 'native', english: "How did it work out for you?", portuguese: "Como ficou para você?" },
      { speaker: 'student', english: "It fits perfectly! I'll take it. I also found this pair of jeans.", portuguese: "Serviu perfeitamente! Vou levar. Também achei este par de jeans." },
      { speaker: 'native', english: "Awesome. I can ring you up over here at this register.", portuguese: "Incrível. Eu posso cobrar você por aqui neste caixa." },
      { speaker: 'student', english: "Quick question: what is your return policy? I might buy a shirt for my sister.", portuguese: "Uma pergunta rápida: qual é a política de devolução? Talvez eu compre uma blusa para minha irmã." },
      { speaker: 'native', english: "You have 30 days to return or exchange it for a full refund.", portuguese: "Você tem 30 dias para devolver ou trocar por um reembolso total." },
      { speaker: 'student', english: "Do I need the original packaging?", portuguese: "Preciso da embalagem original?" },
      { speaker: 'native', english: "Just bring the receipt, and make sure the tags are still attached.", portuguese: "Apenas traga o recibo, e certifique-se de que as etiquetas ainda estejam afixadas." },
      { speaker: 'student', english: "Sounds good. Let's add the shirt then.", portuguese: "Parece bom. Vamos adicionar a blusa então." }
],
            importantPhrases: [
      {
            pt: "Qual é o horário de funcionamento?",
            en: "What are the opening hours?"
      },
      {
            pt: "Onde é o caixa eletrônico?",
            en: "Where is the ATM?"
      },
      {
            pt: "Posso experimentar isso?",
            en: "Can I try this on?"
      },
      {
            pt: "Não serviu bem.",
            en: "It did not fit well."
      },
      {
            pt: "Tem desconto para estudante?",
            en: "Is there a student discount?"
      },
      {
            pt: "Eu procuro um presente.",
            en: "I am looking for a gift."
      }
],
        problems: [
      {
            descriptionPt: "O seu cartão de crédito foi recusado na maquininha."
      },
      {
            descriptionPt: "Você comprou uma roupa ontem, mas ela descosturou na primeira vez que usou."
      }
],
    vocabulary: [
      { english: "Fitting room", portuguese: "Provador",
        sentenceA1: "Where is the fitting room?",
        sentenceA2: "The fitting rooms are at the back of the store.",
        sentenceA1Pt: "Onde é o provador?",
        sentenceA2Pt: "Os provadores ficam no fundo da loja."
      },
      { english: "Size (Small, Medium, Large)", portuguese: "Tamanho (P, M, G)",
        sentenceA1: "I need a medium.",
        sentenceA2: "Do you have this in a size small? The medium is too loose.",
        sentenceA1Pt: "Preciso de um médio.",
        sentenceA2Pt: "Tem no tamanho P? O M está muito largo."
      },
      { english: "Tight / Loose", portuguese: "Apertado / Largo",
        sentenceA1: "This is too tight.",
        sentenceA2: "The pants are tight around the waist. Do you have a larger size?",
        sentenceA1Pt: "Está muito apertado.",
        sentenceA2Pt: "A calça está apertada na cintura. Tem tamanho maior?"
      },
      { english: "Receipt", portuguese: "Recibo / Nota fiscal",
        sentenceA1: "I need the receipt.",
        sentenceA2: "Keep your receipt in case you need to exchange the item.",
        sentenceA1Pt: "Preciso do recibo.",
        sentenceA2Pt: "Guarde o recibo caso precise trocar o item."
      },
      { english: "Tags", portuguese: "Etiquetas",
        sentenceA1: "Remove the tags, please.",
        sentenceA2: "Do not remove the tags if you are not sure you want to keep it.",
        sentenceA1Pt: "Retire as etiquetas, por favor.",
        sentenceA2Pt: "Não remova as etiquetas se não tem certeza que quer ficar com o item."
      },
      { english: "Trying on", portuguese: "Experimentando",
        sentenceA1: "I am trying this on.",
        sentenceA2: "Can I try on these jeans? I am not sure about the size.",
        sentenceA1Pt: "Estou experimentando isto.",
        sentenceA2Pt: "Posso experimentar estas calças? Não tenho certeza do tamanho."
      },
      { english: "Hanger", portuguese: "Cabide",
        sentenceA1: "Put it on the hanger.",
        sentenceA2: "Please put the clothes back on the hanger after trying them.",
        sentenceA1Pt: "Coloque no cabide.",
        sentenceA2Pt: "Coloque as roupas de volta no cabide depois de experimentar."
      },
      { english: "Sold out", portuguese: "Esgotado",
        sentenceA1: "This size is sold out.",
        sentenceA2: "The sneakers I wanted are sold out in my size.",
        sentenceA1Pt: "Este tamanho esgotou.",
        sentenceA2Pt: "Os tênis que eu queria esgotaram no meu tamanho."
      },
      { english: "Mannequin", portuguese: "Manequim",
        sentenceA1: "I want that outfit.",
        sentenceA2: "The outfit on the mannequin in the window looks really stylish.",
        sentenceA1Pt: "Quero aquela roupa.",
        sentenceA2Pt: "A roupa no manequim da vitrine está muito estilosa."
      },
      { english: "Out of stock", portuguese: "Fora de estoque",
        sentenceA1: "It is out of stock.",
        sentenceA2: "The jacket is out of stock but they can order it for you.",
        sentenceA1Pt: "Está fora de estoque.",
        sentenceA2Pt: "A jaqueta está fora de estoque mas podem encomendar."
      },
      { english: "T-shirt / Shirt", portuguese: "Camiseta / Camisa",
        sentenceA1: "I like this t-shirt.",
        sentenceA2: "I bought a white t-shirt and a blue shirt for the trip.",
        sentenceA1Pt: "Gosto desta camiseta.",
        sentenceA2Pt: "Comprei uma camiseta branca e uma camisa azul para a viagem."
      },
      { english: "Pants / Jeans", portuguese: "Calças / Jeans",
        sentenceA1: "I need new pants.",
        sentenceA2: "These jeans fit perfectly. I do not need another pair.",
        sentenceA1Pt: "Preciso de calças novas.",
        sentenceA2Pt: "Estas calças servem perfeitamente. Não preciso de outro par."
      },
      { english: "Dress", portuguese: "Vestido",
        sentenceA1: "This dress is beautiful.",
        sentenceA2: "She wore a red dress to the party and everyone complimented her.",
        sentenceA1Pt: "Este vestido é lindo.",
        sentenceA2Pt: "Ela usou um vestido vermelho e todos a elogiaram."
      },
      { english: "Skirt", portuguese: "Saia",
        sentenceA1: "I want to buy a skirt.",
        sentenceA2: "This plaid skirt goes well with a black blouse and boots.",
        sentenceA1Pt: "Quero comprar uma saia.",
        sentenceA2Pt: "Esta saia xadrez combina com blusa preta e botas."
      },
      { english: "Jacket", portuguese: "Jaqueta",
        sentenceA1: "I need a jacket.",
        sentenceA2: "This leather jacket is on sale for half price.",
        sentenceA1Pt: "Preciso de uma jaqueta.",
        sentenceA2Pt: "Esta jaqueta de couro está na promoção pela metade do preço."
      },
      { english: "Coat", portuguese: "Casaco",
        sentenceA1: "This coat is warm.",
        sentenceA2: "Bring a heavy coat because the temperature will drop tonight.",
        sentenceA1Pt: "Este casaco é quente.",
        sentenceA2Pt: "Leve um casaco pesado porque a temperatura vai cair hoje à noite."
      },
      { english: "Sneakers", portuguese: "Tênis",
        sentenceA1: "I love these sneakers.",
        sentenceA2: "I saved money for two months to buy these limited edition sneakers.",
        sentenceA1Pt: "Amo estes tênis.",
        sentenceA2Pt: "Economizei por dois meses para comprar estes tênis de edição limitada."
      },
      { english: "High heels", portuguese: "Salto alto",
        sentenceA1: "These heels are pretty.",
        sentenceA2: "I can only wear high heels for a few hours before my feet hurt.",
        sentenceA1Pt: "Estes saltos são bonitos.",
        sentenceA2Pt: "Só consigo usar salto alto por algumas horas antes dos pés doerem."
      },
      { english: "To exchange", portuguese: "Trocar",
        sentenceA1: "Can I exchange this?",
        sentenceA2: "I need to exchange this shirt for a smaller size.",
        sentenceA1Pt: "Posso trocar isso?",
        sentenceA2Pt: "Preciso trocar esta camisa por um tamanho menor."
      },
      { english: "Clearance / Sale", portuguese: "Liquidação / Saldo",
        sentenceA1: "Is this on clearance?",
        sentenceA2: "The winter coats are on clearance now since spring is starting.",
        sentenceA1Pt: "Isto está na liquidação?",
        sentenceA2Pt: "Os casacos de inverno estão na liquidação agora que a primavera está começando."
      },
      { english: "Store credit", portuguese: "Crédito na loja",
        sentenceA1: "Can I get store credit?",
        sentenceA2: "Since I didn't have the receipt, they gave me store credit instead of a refund.",
        sentenceA1Pt: "Posso receber crédito na loja?",
        sentenceA2Pt: "Como eu não tinha o recibo, eles me deram crédito na loja em vez de um reembolso."
      }
],
    culturalTips: [
      {
        title: "Sizing Differences",
        titlePt: "Diferenças de Tamanho",
        content: "US shoe sizes are very different. A Brazilian 36 is usually a US 6 or 6.5. Always check a conversion chart before buying!",
        contentPt: "Os tamanhos de sapato nos EUA são muito diferentes. Um 36 no Brasil geralmente é 6 ou 6.5 nos EUA. Sempre verifique uma tabela de conversão antes de comprar!"
},
      {
        title: "Sales Tax on Clothing",
        titlePt: "Imposto sobre Roupas",
        content: "Some states don't charge sales tax on clothing under a certain amount. In New York, for example, clothing items under $110 are tax-exempt!",
        contentPt: "Alguns estados não cobram imposto sobre vendas em roupas abaixo de um certo valor. Em Nova York, por exemplo, peças de roupa abaixo de $110 são isentas de impostos!"
}
],
  reading: {
      textA1: 'Lisa is at the mall. She wants to buy a new dress. She goes into a big clothes store. She looks at many dresses. She finds a red dress. It is very pretty. She asks the shop assistant for the price. The assistant says it is 50 dollars. Lisa wants to try it on. The assistant shows her the fitting room. Lisa puts on the dress. It fits perfectly. She looks in the mirror and smiles. She takes off the dress and goes to the cashier. She pays in cash. She leaves the store with her new dress.',
      textA1Pt: 'Lisa está no shopping. Ela quer comprar um vestido novo. Ela entra em uma grande loja de roupas. Ela olha muitos vestidos. Ela encontra um vestido vermelho. É muito bonito. Ela pergunta ao vendedor o preço. O vendedor diz que custa 50 dólares. Lisa quer provar. O vendedor mostra a ela o provador. Lisa veste o vestido. Serve perfeitamente. Ela se olha no espelho e sorri. Ela tira o vestido e vai ao caixa. Ela paga em dinheiro. Ela sai da loja com seu vestido novo.',
      textA2: 'Lisa decided to hit the shopping mall on Saturday afternoon to update her summer wardrobe. The mall was bustling with weekend shoppers and promotional sales. She walked into her favorite boutique and immediately spotted a stunning floral dress displayed on a mannequin. She approached a sales assistant and asked if they had it in a medium size. The assistant checked the inventory in the back room and returned a few minutes later with the dress. \'You\'re in luck, this is our last piece in medium,\' the assistant smiled, guiding Lisa to the fitting rooms. Once inside, Lisa tried on the dress and was delighted to see that it fit like a glove and complemented her skin tone perfectly. She stepped out, grabbed a matching pair of sunglasses from a nearby rack, and headed straight to the checkout counter. The total came to 85 dollars. She handed over her debit card and happily carried her chic new purchases out of the store.',
      textA2Pt: 'Lisa decidiu ir ao shopping no sábado à tarde para atualizar seu guarda-roupa de verão. O shopping estava agitado com compradores de fim de semana e vendas promocionais. Ela entrou em sua boutique favorita e imediatamente avistou um vestido floral deslumbrante exibido em um manequim. Ela se aproximou de uma vendedora e perguntou se eles tinham no tamanho médio. A vendedora verificou o estoque nos fundos e voltou alguns minutos depois com o vestido. \'Você está com sorte, esta é a nossa última peça no tamanho médio,\' a vendedora sorriu, guiando Lisa até os provadores. Uma vez lá dentro, Lisa provou o vestido e ficou encantada ao ver que servia perfeitamente e complementava seu tom de pele maravilhosamente. Ela saiu, pegou um par de óculos de sol combinando de uma prateleira próxima e foi direto para o caixa. O total deu 85 dólares. Ela entregou seu cartão de débito e carregou alegremente suas novas e elegantes compras para fora da loja.',
      questionsA1: [
        { question: 'What is the main event in the story?', questionPt: 'Qual é o evento principal da história?', options: ['Lisa buys a pretty red dress at the mall', 'Lisa works at a clothes store', 'Lisa buys food', 'Lisa buys a mirror'], correctIndex: 0 },
        { question: 'What does "try it on" mean?', questionPt: 'O que significa "try it on"?', options: ['To wash the dress', 'To put the dress on to see if it fits', 'To tear the dress', 'To return the dress'], correctIndex: 1 },
        { question: 'Why does Lisa smile when she looks in the mirror?', questionPt: 'Por que Lisa sorri quando se olha no espelho?', options: ['Because the mirror is funny', 'Because she likes how the dress looks on her', 'Because she sees a friend', 'Because the dress is too big'], correctIndex: 1 },
        { question: 'What can we infer about the price?', questionPt: 'O que podemos inferir sobre o preço?', options: ['She couldn\'t afford it', 'She paid for it in cash', 'It was free', 'She paid with a credit card'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'When did Lisa go to the mall?', questionPt: 'Quando Lisa foi ao shopping?', options: ['Friday morning', 'Saturday afternoon', 'Sunday evening', 'Monday morning'], correctIndex: 1 },
        { question: 'What pattern was on the dress she wanted?', questionPt: 'Qual era a estampa do vestido que ela queria?', options: ['Striped', 'Polka dot', 'Floral', 'Solid color'], correctIndex: 2 },
        { question: 'What else did Lisa grab before checking out?', questionPt: 'O que mais Lisa pegou antes de pagar?', options: ['A purse', 'A pair of shoes', 'A matching belt', 'A pair of sunglasses'], correctIndex: 3 },
        { question: 'How did she pay for her items?', questionPt: 'Como ela pagou pelos seus itens?', options: ['Debit card', 'Credit card', 'Cash', 'Gift card'], correctIndex: 0 }
]
},
            simulationTasks: [
      {
            promptPt: "[Vendedor] \"Posso te ajudar a encontrar algo?\"",
            expectedEn: "Can I help you find something?"
      },
      {
            promptPt: "[Você] Você quer dizer que está apenas olhando",
            expectedEn: "I am just looking, thank you."
      },
      {
            promptPt: "[Você] Você quer perguntar quanto custa a camiseta",
            expectedEn: "How much is this t-shirt?"
      },
      {
            promptPt: "[Você] Você quer perguntar onde fica o provador",
            expectedEn: "Where is the fitting room?"
      },
      {
            promptPt: "[Vendedor] \"Ficou bom em você?\"",
            expectedEn: "Did it fit well?"
      },
      {
            promptPt: "[Você] Você quer pedir um tamanho maior",
            expectedEn: "Do you have this in a larger size?"
      },
      {
            promptPt: "[Você] Você quer dizer que vai levar e perguntar se aceitam cartão",
            expectedEn: "I will take it. Do you accept credit cards?"
      },
      {
            promptPt: "[Você] Você quer perguntar se tem essa peça em outra cor",
            expectedEn: "Do you have this in a different color?"
      },
      {
            promptPt: "[Você] Você quer perguntar qual é a política de devolução",
            expectedEn: "What is the return policy?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Buy clothes that are too tight",
            optionAPt: "Comprar roupas que estão muito apertadas",
            optionBEn: "Buy clothes that are too loose",
            optionBPt: "Comprar roupas que estão muito largas"
      },
      {
            optionAEn: "Shop only at thrift stores forever",
            optionAPt: "Comprar apenas em brechós para sempre",
            optionBEn: "Shop only at high-end designer stores but have a strict budget",
            optionBPt: "Comprar apenas em lojas de grife mas ter um orçamento restrito"
      },
      {
            optionAEn: "Have a pushy salesperson follow you around",
            optionAPt: "Ter um vendedor insistente te seguindo pela loja",
            optionBEn: "Never find a salesperson when you need help",
            optionBPt: "Nunca encontrar um vendedor quando precisa de ajuda"
      },
      {
            optionAEn: "Realize you left your wallet after everything is scanned",
            optionAPt: "Perceber que esqueceu a carteira depois de tudo ser escaneado",
            optionBEn: "Realize you bought the wrong size when you get home",
            optionBPt: "Perceber que comprou o tamanho errado ao chegar em casa"
      },
      {
            optionAEn: "Only buy online without trying on",
            optionAPt: "Comprar apenas online sem experimentar",
            optionBEn: "Only buy in stores but wait in huge lines",
            optionBPt: "Comprar apenas em lojas físicas mas esperar em filas enormes"
      },
      {
            optionAEn: "Accidentally drop and break an expensive item",
            optionAPt: "Derrubar e quebrar um item caro sem querer",
            optionBEn: "Accidentally rip a piece of clothing while trying it on",
            optionBPt: "Rasgar uma roupa sem querer enquanto experimenta"
      },
      {
            optionAEn: "Have to wear neon colors every day",
            optionAPt: "Ter que usar cores neon todos os dias",
            optionBEn: "Have to wear only black and white every day",
            optionBPt: "Ter que usar apenas preto e branco todos os dias"
      }
]
},
  {
    id: 'beauty',
    speakingQuestions: [
    {
        "question": "What is your daily skincare routine?",
        "questionPt": "Qual é a sua rotina diária de cuidados com a pele?",
        "hintA1": "I wash my face and use sunscreen.",
        "hintA2": "I usually wash my face with a cleanser, apply moisturizer, and then sunscreen."
    },
    {
        "question": "How often do you get a haircut or go to a salon?",
        "questionPt": "Com que frequência você corta o cabelo ou vai a um salão?",
        "hintA1": "I cut my hair every two months.",
        "hintA2": "I go to the salon about every two months to keep my hair healthy."
    },
    {
        "question": "Do you like to wear perfume or cologne?",
        "questionPt": "Você gosta de usar perfume ou colônia?",
        "hintA1": "Yes, I love sweet perfumes.",
        "hintA2": "Yes, I never leave the house without wearing my favorite woody cologne."
    }
,
    {
        "question": "Did you wash your hair this morning?",
        "questionPt": "Você lavou o cabelo hoje de manhã?",
        "hintA1": "Yes, I washed it.",
        "hintA2": "No, I washed it last night so I could sleep a little more this morning."
    },
    {
        "question": "Do you wear makeup every day?",
        "questionPt": "Você usa maquiagem todos os dias?",
        "hintA1": "No, only on special days.",
        "hintA2": "I only put on a little bit of mascara and lip balm when I go to work."
    },
    {
        "question": "When did you last change your hairstyle?",
        "questionPt": "Quando foi a última vez que você mudou o corte de cabelo?",
        "hintA1": "I changed it last month.",
        "hintA2": "I completely changed my hairstyle about two years ago and everyone loved it."
    },
    {
        "question": "Do you use sunscreen every day?",
        "questionPt": "Você usa protetor solar todos os dias?",
        "hintA1": "Yes, every morning.",
        "hintA2": "I always apply sunscreen before leaving the house, even on cloudy days."
    },
    {
        "question": "Did you go to a spa on your last vacation?",
        "questionPt": "Você foi a um spa nas suas últimas férias?",
        "hintA1": "No, but I want to go.",
        "hintA2": "Yes, I got a relaxing massage and a facial treatment. It was absolutely amazing."
    }
    ],
    title: 'Beauty & Cosmetics',
    titlePt: 'Beleza e Cosméticos',
    description: 'Practice shade matching, skincare essentials, hair products, and buying at drugstores.',
    descriptionPt: 'Pratique tons de maquiagem, essenciais de skincare, produtos capilares e compras em farmácias.',
    icon: '💄',
    color: 'rose',
    imagePath: '/images/beauty_scene.png',
    dialogues: [
      { speaker: 'student', english: "Hi there, could you help me? I'm having trouble matching my foundation shade.", portuguese: "Olá, você poderia me ajudar? Estou tendo dificuldade em encontrar o tom da minha base." },
      { speaker: 'native', english: "Of course! Foundation matching can be tricky. Are you looking for full coverage or something light?", portuguese: "Claro! Encontrar a base pode ser complicado. Você procura cobertura total ou algo leve?" },
      { speaker: 'student', english: "Something lightweight, like a tinted moisturizer or a BB cream.", portuguese: "Algo leve, como um hidratante com cor ou um BB cream." },
      { speaker: 'native', english: "Great choice for an everyday look. Let's try three different swatches on your jawline.", portuguese: "Ótima escolha para um look do dia a dia. Vamos testar três amostras diferentes na sua linha do maxilar." },
      { speaker: 'student', english: "I think the middle one matches my undertone the best.", portuguese: "Acho que o do meio combina melhor com o subtom da minha pele." },
      { speaker: 'native', english: "I agree, it blends seamlessly. Now, do you need anything for skincare?", portuguese: "Concordo, ele se mistura perfeitamente. Agora, você precisa de algo para skincare?" },
      { speaker: 'student', english: "Yes, I need a good hydrating moisturizer. My skin gets really dry in the winter.", portuguese: "Sim, preciso de um bom hidratante. Minha pele fica muito seca no inverno." },
      { speaker: 'native', english: "I highly recommend this hyaluronic acid cream. It locks in moisture all day.", portuguese: "Recomendo muito este creme de ácido hialurônico. Ele retém a hidratação o dia todo." },
      { speaker: 'student', english: "That sounds perfect. Is this brand cruelty-free?", portuguese: "Isso soa perfeito. Esta marca é cruelty-free?" },
      { speaker: 'native', english: "Yes, they are 100% vegan, cruelty-free, and they don't use parabens.", portuguese: "Sim, eles são 100% veganos, cruelty-free e não usam parabenos." },
      { speaker: 'student', english: "Awesome. One last thing — do you have a tester for this matte lipstick?", portuguese: "Incrível. Uma última coisa — você tem um provador para este batom matte?" },
      { speaker: 'native', english: "Yes, we do. Let me grab a disposable wand for you so you can try it safely.", portuguese: "Temos sim. Deixe-me pegar um aplicador descartável para que você possa provar com segurança." },
      { speaker: 'student', english: "Thank you. I love the color, I'll take it too.", portuguese: "Obrigada. Adorei a cor, vou levar também." }
],
    dialogues2: [
      { speaker: 'student', english: "Excuse me, could you point me to the hair care section? I'm looking for a heat protectant spray.", portuguese: "Com licença, você poderia me indicar a seção de cuidados com o cabelo? Estou procurando um spray protetor térmico." },
      { speaker: 'native', english: "Sure thing! They are down aisle four, right next to the leave-in conditioners and hair masks.", portuguese: "Claro! Eles estão no corredor quatro, bem ao lado dos cremes de pentear e máscaras capilares." },
      { speaker: 'student', english: "Great, thank you. While I have you here, do you recommend anything specifically for frizzy hair?", portuguese: "Ótimo, obrigada. Aproveitando que você está aqui, você recomenda algo específico para cabelo com frizz?" },
      { speaker: 'native', english: "Absolutely. Do you blow-dry your hair often, or let it air dry?", portuguese: "Com certeza. Você seca o cabelo com secador com frequência, ou deixa secar naturalmente?" },
      { speaker: 'student', english: "I usually blow-dry it, which makes the frizz even worse.", portuguese: "Eu geralmente seco com secador, o que piora o frizz ainda mais." },
      { speaker: 'native', english: "Then I highly suggest this argan oil serum. You put a few drops in before drying.", portuguese: "Então eu sugiro fortemente este sérum de óleo de argan. Você coloca algumas gotas antes de secar." },
      { speaker: 'student', english: "Does it make the hair look greasy?", portuguese: "Isso deixa o cabelo com aspecto oleoso?" },
      { speaker: 'native', english: "Not at all. It's very lightweight, works wonders for humidity, and adds a beautiful shine.", portuguese: "De jeito nenhum. É muito leve, faz milagres para a umidade, e adiciona um brilho lindo." },
      { speaker: 'student', english: "Perfect, I'll take a bottle. Do you have travel sizes? I can't take full liquids on the plane.", portuguese: "Perfeito, vou levar um frasco. Vocês têm tamanhos de viagem? Não posso levar líquidos grandes no avião." },
      { speaker: 'native', english: "Yes, the travel-sized bins are right by the registers. You'll find mini versions of almost everything there.", portuguese: "Sim, os cestos com tamanhos de viagem ficam logo nos caixas. Você achará versões mini de quase tudo lá." },
      { speaker: 'student', english: "You've been so helpful. Thank you!", portuguese: "Você foi tão prestativa. Obrigada!" }
],
            importantPhrases: [
      {
            pt: "Quero pintar o cabelo.",
            en: "I want to dye my hair."
      },
      {
            pt: "Minha pele é muito seca.",
            en: "My skin is very dry."
      },
      {
            pt: "Posso ver o catálogo de cores?",
            en: "Can I see the color catalog?"
      },
      {
            pt: "O esmalte está descascando.",
            en: "The nail polish is peeling."
      },
      {
            pt: "Você faz sobrancelhas?",
            en: "Do you do eyebrows?"
      },
      {
            pt: "Eu uso protetor solar.",
            en: "I wear sunscreen."
      }
],
        problems: [
      {
            descriptionPt: "O cabeleireiro cortou seu cabelo muito mais curto do que você pediu."
      },
      {
            descriptionPt: "Você teve uma reação alérgica a um creme que aplicaram na sua pele."
      }
],
    vocabulary: [
      { english: "Foundation", portuguese: "Base de maquiagem",
        sentenceA1: "I need foundation.",
        sentenceA2: "I use a light foundation that matches my skin tone.",
        sentenceA1Pt: "Preciso de base.",
        sentenceA2Pt: "Uso uma base leve que combina com meu tom de pele."
      },
      { english: "Concealer", portuguese: "Corretivo",
        sentenceA1: "I use concealer.",
        sentenceA2: "This concealer covers dark circles very well.",
        sentenceA1Pt: "Uso corretivo.",
        sentenceA2Pt: "Este corretivo cobre olheiras muito bem."
      },
      { english: "Moisturizer", portuguese: "Hidratante",
        sentenceA1: "I need a moisturizer.",
        sentenceA2: "I apply moisturizer every morning after washing my face.",
        sentenceA1Pt: "Preciso de hidratante.",
        sentenceA2Pt: "Aplico hidratante toda manhã depois de lavar o rosto."
      },
      { english: "Cleanser", portuguese: "Gel de limpeza / Sabonete facial",
        sentenceA1: "I use a gentle cleanser.",
        sentenceA2: "A good cleanser removes all makeup without drying your skin.",
        sentenceA1Pt: "Uso um limpador suave.",
        sentenceA2Pt: "Um bom limpador remove toda a maquiagem sem ressecar a pele."
      },
      { english: "Heat protectant", portuguese: "Protetor térmico",
        sentenceA1: "Use heat protectant first.",
        sentenceA2: "Always spray heat protectant before using a flat iron.",
        sentenceA1Pt: "Use protetor térmico primeiro.",
        sentenceA2Pt: "Sempre borrife protetor térmico antes de usar a chapinha."
      },
      { english: "Leave-in conditioner", portuguese: "Condicionador leave-in",
        sentenceA1: "I use leave-in conditioner.",
        sentenceA2: "Leave-in conditioner keeps my curly hair soft all day.",
        sentenceA1Pt: "Uso condicionador sem enxágue.",
        sentenceA2Pt: "O condicionador sem enxágue mantém meu cabelo macio o dia todo."
      },
      { english: "Cruelty-free", portuguese: "Livre de crueldade / Não testado em animais",
        sentenceA1: "This is cruelty-free.",
        sentenceA2: "I only buy cruelty-free brands because I care about animals.",
        sentenceA1Pt: "Não testa em animais.",
        sentenceA2Pt: "Só compro marcas cruelty-free porque me preocupo com animais."
      },
      { english: "Skincare routine", portuguese: "Rotina de cuidados com a pele",
        sentenceA1: "I have a skincare routine.",
        sentenceA2: "My skincare routine includes cleanser, toner, serum, and moisturizer.",
        sentenceA1Pt: "Tenho uma rotina de skincare.",
        sentenceA2Pt: "Minha rotina inclui limpador, tônico, sérum e hidratante."
      },
      { english: "Sunscreen", portuguese: "Protetor solar",
        sentenceA1: "Apply sunscreen daily.",
        sentenceA2: "You should apply sunscreen every day, even when it is cloudy.",
        sentenceA1Pt: "Aplique protetor solar diariamente.",
        sentenceA2Pt: "Você deveria aplicar protetor solar todos os dias, mesmo quando está nublado."
      },
      { english: "Primer", portuguese: "Primer",
        sentenceA1: "Apply primer first.",
        sentenceA2: "A makeup primer helps your foundation stay on longer throughout the day.",
        sentenceA1Pt: "Aplique o primer primeiro.",
        sentenceA2Pt: "O primer facial ajuda a base a durar mais tempo durante o dia."
      },
      { english: "Micellar water", portuguese: "Água micelar",
        sentenceA1: "Clean with micellar water.",
        sentenceA2: "I use micellar water on a cotton pad to remove makeup before washing my face.",
        sentenceA1Pt: "Limpe com água micelar.",
        sentenceA2Pt: "Uso água micelar em um algodão para remover a maquiagem antes de lavar o rosto."
      },
      { english: "Shampoo / Conditioner", portuguese: "Shampoo / Condicionador",
        sentenceA1: "I need shampoo.",
        sentenceA2: "This moisturizing shampoo and conditioner set is great for dry hair.",
        sentenceA1Pt: "Preciso de shampoo.",
        sentenceA2Pt: "Este conjunto de shampoo e condicionador hidratantes é ótimo para cabelos secos."
      },
      { english: "Lip balm", portuguese: "Protetor labial",
        sentenceA1: "My lips are dry. I need lip balm.",
        sentenceA2: "This organic lip balm prevents dry lips during the winter months.",
        sentenceA1Pt: "Meus lábios estão secos. Preciso de protetor labial.",
        sentenceA2Pt: "Este protetor labial orgânico previne lábios secos durante os meses de inverno."
      }
],
    culturalTips: [
      {
        title: "Return Policy",
        titlePt: "Política de Devolução",
        content: "In the US, most stores (like Sephora, Ulta, Zara) allow you to return products, even slightly used makeup, if you don't like it. Just make sure you have the receipt!",
        contentPt: "Nos EUA, a maioria das lojas (como Sephora, Ulta, Zara) permite devolver produtos, até mesmo maquiagem ligeiramente usada, se você não gostar. Basta ter o recibo!"
}
],
  reading: {
      textA1: 'Julia wants a new look. She goes to the beauty salon. She sits in a big chair. The hairdresser asks, \'What do you want today?\' Julia says, \'I want short hair and blonde color.\' The hairdresser washes her hair with shampoo. It smells like apples. Then, she cuts the hair with scissors. After that, she puts the blonde color on her hair. Julia waits for 30 minutes. The hairdresser washes her hair again. Finally, she dries her hair. Julia looks in the mirror. She loves her new blonde, short hair.',
      textA1Pt: 'Julia quer um novo visual. Ela vai ao salão de beleza. Ela se senta em uma cadeira grande. A cabeleireira pergunta: \'O que você quer hoje?\' Julia diz: \'Eu quero cabelo curto e loiro.\' A cabeleireira lava o cabelo dela com xampu. Cheira a maçã. Então, ela corta o cabelo com tesoura. Depois disso, ela coloca a cor loira no cabelo dela. Julia espera por 30 minutos. A cabeleireira lava o cabelo dela novamente. Finalmente, ela seca o cabelo. Julia se olha no espelho. Ela ama seu novo cabelo loiro e curto.',
      textA2: 'Julia felt it was time for a drastic makeover, so she booked an appointment at a high-end beauty salon downtown. Upon arrival, a receptionist offered her a cup of herbal tea while she waited for her stylist. When she finally sat in the styling chair, the hairdresser suggested a trendy layered bob and some subtle blonde highlights to brighten her complexion. Julia agreed enthusiastically. The process began with a relaxing scalp massage at the washbasin using a deeply moisturizing shampoo and conditioner. Back in the chair, the stylist skillfully chopped off several inches of hair with sharp shears. The highlighting process took almost an hour, as the stylist carefully wrapped thin sections of hair in foil. After a final rinse and a professional blowout with a round brush, the transformation was complete. Julia stared at the mirror, completely thrilled with her chic and modern new look.',
      textA2Pt: 'Julia sentiu que era hora de uma mudança drástica, então ela marcou uma hora em um salão de beleza sofisticado no centro da cidade. Ao chegar, uma recepcionista ofereceu a ela uma xícara de chá de ervas enquanto ela esperava por seu estilista. Quando ela finalmente se sentou na cadeira de estilo, a cabeleireira sugeriu um corte bob em camadas moderno e algumas mechas loiras sutis para iluminar sua pele. Julia concordou com entusiasmo. O processo começou com uma massagem relaxante no couro cabeludo no lavatório, usando um xampu e condicionador profundamente hidratantes. De volta à cadeira, a estilista habilmente cortou vários centímetros de cabelo com tesouras afiadas. O processo de mechas levou quase uma hora, pois a estilista cuidadosamente embrulhou mechas finas de cabelo em papel alumínio. Após um enxágue final e uma secagem profissional com uma escova redonda, a transformação estava completa. Julia olhou para o espelho, completamente emocionada com seu novo visual chique e moderno.',
      questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['Julia getting a new haircut and color at the salon', 'Julia buying a new dress', 'Julia washing her hair at home', 'Julia going to a party'], correctIndex: 0 },
        { question: 'What does "new look" mean in the text?', questionPt: 'O que significa "new look" no texto?', options: ['A new pair of glasses', 'A change in her appearance', 'A new book', 'A new job'], correctIndex: 1 },
        { question: 'Why does she wait for 30 minutes?', questionPt: 'Por que ela espera por 30 minutes?', options: ['For the blonde color to set in her hair', 'Because the hairdresser is on a break', 'To read a magazine', 'Because it is raining'], correctIndex: 0 },
        { question: 'What can we infer about the result?', questionPt: 'O que podemos inferir sobre o resultado?', options: ['She hates it', 'She thinks it is too short', 'She is very happy with her new hair', 'She wants to change it back'], correctIndex: 2 }
      ],
      questionsA2: [
        { question: 'What did the receptionist offer Julia?', questionPt: 'O que a recepcionista ofereceu a Julia?', options: ['A magazine', 'A cup of coffee', 'A cup of herbal tea', 'A glass of wine'], correctIndex: 2 },
        { question: 'What specific hairstyle did the hairdresser suggest?', questionPt: 'Qual penteado específico a cabeleireira sugeriu?', options: ['A long braid', 'A trendy layered bob with highlights', 'A buzz cut', 'Straight black hair'], correctIndex: 1 },
        { question: 'What relaxing treatment did Julia receive at the washbasin?', questionPt: 'Que tratamento relaxante Julia recebeu no lavatório?', options: ['A facial scrub', 'A neck massage', 'A deep scalp massage', 'A hot towel wrap'], correctIndex: 2 },
        { question: 'How were the highlights applied?', questionPt: 'Como as mechas foram aplicadas?', options: ['With a spray bottle', 'By wrapping thin sections in foil', 'With a thick brush', 'By dipping the hair in a bowl'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Atendente] \"Olá, você tem horário marcado?\"",
            expectedEn: "Hello, do you have an appointment?"
      },
      {
            promptPt: "[Você] Você quer agendar um horário para amanhã",
            expectedEn: "Can I book an appointment for tomorrow?"
      },
      {
            promptPt: "[Cabeleireiro] \"Como você quer cortar hoje?\"",
            expectedEn: "How would you like your hair cut today?"
      },
      {
            promptPt: "[Você] Você quer pedir para cortar apenas as pontas",
            expectedEn: "Just a trim, please."
      },
      {
            promptPt: "[Você] Você quer perguntar o preço da manicure",
            expectedEn: "How much is a manicure?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Get a terrible haircut right before a big event",
            optionAPt: "Ter um corte de cabelo terrível logo antes de um grande evento",
            optionBEn: "Dye your hair a crazy color by mistake",
            optionBPt: "Pintar o cabelo de uma cor maluca por engano"
      },
      {
            optionAEn: "Never be able to wash your hair again",
            optionAPt: "Nunca mais poder lavar o cabelo",
            optionBEn: "Never be able to brush your teeth again",
            optionBPt: "Nunca mais poder escovar os dentes"
      },
      {
            optionAEn: "Have smudged makeup all day without knowing",
            optionAPt: "Ficar com a maquiagem borrada o dia todo sem saber",
            optionBEn: "Have lipstick on your teeth during a presentation",
            optionBPt: "Ficar com batom nos dentes durante uma apresentação"
      },
      {
            optionAEn: "Only use one skincare product forever",
            optionAPt: "Usar apenas um produto de skincare para sempre",
            optionBEn: "Have a 15-step skincare routine every night",
            optionBPt: "Ter uma rotina de skincare de 15 passos todas as noites"
      },
      {
            optionAEn: "Accidentally shave off an eyebrow",
            optionAPt: "Raspar uma sobrancelha por engano",
            optionBEn: "Have a bad sunburn on your face",
            optionBPt: "Ter uma queimadura de sol feia no rosto"
      },
      {
            optionAEn: "Wear heavy makeup to the gym",
            optionAPt: "Usar maquiagem pesada na academia",
            optionBEn: "Go to a formal party in sweatpants",
            optionBPt: "Ir a uma festa formal de calça de moletom"
      },
      {
            optionAEn: "Smell like garlic all day",
            optionAPt: "Cheirar a alho o dia todo",
            optionBEn: "Smell like too much cheap perfume all day",
            optionBPt: "Cheirar a perfume barato em excesso o dia todo"
      }
]
},
  {
    id: 'carrental',
    speakingQuestions: [
    {
        "question": "Do you know how to drive?",
        "questionPt": "Você sabe dirigir?",
        "hintA1": "Yes, I have a driver's license.",
        "hintA2": "Yes, I've had my driver's license for five years, and I drive every day."
    },
    {
        "question": "Have you ever rented a car on a trip?",
        "questionPt": "Você já alugou um carro em uma viagem?",
        "hintA1": "No, I never rented a car.",
        "hintA2": "Yes, I rented a car last summer when I traveled to California."
    },
    {
        "question": "What is your dream car?",
        "questionPt": "Qual é o carro dos seus sonhos?",
        "hintA1": "My dream car is a Ferrari.",
        "hintA2": "My dream car is an electric SUV, like a Tesla, because it's good for the environment."
    }
,
    {
        "question": "Did you rent an automatic or manual car?",
        "questionPt": "Você alugou um carro automático ou manual?",
        "hintA1": "I rented an automatic car.",
        "hintA2": "I always rent automatic cars because they are much easier to drive in the city."
    },
    {
        "question": "Do you usually buy the extra insurance?",
        "questionPt": "Você costuma comprar o seguro extra?",
        "hintA1": "Yes, just to be safe.",
        "hintA2": "I always buy the full coverage insurance because I do not want any surprises."
    },
    {
        "question": "When did you learn to drive?",
        "questionPt": "Quando você aprendeu a dirigir?",
        "hintA1": "I learned at eighteen.",
        "hintA2": "My father taught me how to drive when I was seventeen years old."
    },
    {
        "question": "Does the rental car have GPS?",
        "questionPt": "O carro alugado tem GPS?",
        "hintA1": "Yes, it has a screen.",
        "hintA2": "No, but I just use the navigation app on my phone. It works perfectly."
    },
    {
        "question": "Did you return the car with a full tank?",
        "questionPt": "Você devolveu o carro com o tanque cheio?",
        "hintA1": "Yes, I filled the tank.",
        "hintA2": "Yes, I stopped at a gas station right before returning it to the airport."
    }
    ],
    title: 'Rental Car & Driving',
    titlePt: 'Aluguel de Carros e Direção',
    description: 'Rent a vehicle, navigate insurance options, fuel policies, toll passes, and roadside issues.',
    descriptionPt: 'Alugue um veículo, entenda seguros, combustível, pedágios eletrônicos e imprevistos na estrada.',
    icon: '🚗',
    color: 'gold',
    imagePath: '/images/carrental_scene.png',
    dialogues: [
      { speaker: 'native', english: "Good afternoon! Welcome to FastDrive Rental. Do you have a reservation?", portuguese: "Boa tarde! Bem-vindo à FastDrive Rental. Você tem uma reserva?" },
      { speaker: 'student', english: "Good afternoon. Yes, I have a reservation under the name Tati. Here is my confirmation number.", portuguese: "Boa tarde. Sim, tenho uma reserva em nome de Tati. Aqui está meu número de confirmação." },
      { speaker: 'native', english: "Thank you. May I see your passport, driver's license, and credit card, please?", portuguese: "Obrigado. Posso ver seu passaporte, carteira de motorista e cartão de crédito, por favor?" },
      { speaker: 'student', english: "Here you go. My driver's license from Brazil and my passport.", portuguese: "Aqui estão. Minha carteira de motorista do Brasil e meu passaporte." },
      { speaker: 'native', english: "Perfect. I see you reserved a midsize SUV with automatic transmission. Is that okay, or would you like to upgrade to a luxury car?", portuguese: "Perfeito. Vejo que reservou um SUV médio com transmissão automática. Está bom assim, ou gostaria de fazer um upgrade para um carro de luxo?" },
      { speaker: 'student', english: "The midsize SUV is perfect for my luggage. Does it have GPS and a large trunk?", portuguese: "O SUV médio é perfeito para minha bagagem. Ele tem GPS e um porta-malas grande?" },
      { speaker: 'native', english: "Yes, it comes with Apple CarPlay and Android Auto. Would you like to add full coverage insurance?", portuguese: "Sim, ele vem com Apple CarPlay e Android Auto. Gostaria de adicionar o seguro de cobertura total?" },
      { speaker: 'student', english: "What does the full coverage include? How much is it per day?", portuguese: "O que a cobertura total inclui? Quanto custa por dia?" },
      { speaker: 'native', english: "It includes the Collision Damage Waiver (CDW) and Roadside Assistance. It costs twenty dollars per day. It covers scratches, dents, or flat tires.", portuguese: "Inclui a isenção de danos por colisão (CDW) e assistência na estrada. Custa vinte dólares por dia. Cobre riscos, amassados ou pneus furados." },
      { speaker: 'student', english: "I am already covered by my credit card insurance, so I'll take the basic coverage only.", portuguese: "Já sou coberta pelo seguro do meu cartão de crédito, então vou ficar apenas com a cobertura básica." },
      { speaker: 'native', english: "Alright. Will you be using toll roads during your trip? We offer an unlimited toll pass for fifteen dollars per day.", portuguese: "Certo. Você usará rodovias com pedágio durante a viagem? Oferecemos um passe de pedágio ilimitado por quinze dólares por dia." },
      { speaker: 'student', english: "Yes, I plan to visit the outlets and national parks. How does the toll pass work?", portuguese: "Sim, planejo visitar os outlets e parques nacionais. Como funciona o passe de pedágio?" },
      { speaker: 'native', english: "It's an electronic device on the windshield. You can drive through all toll lanes without stopping.", portuguese: "É um dispositivo eletrônico no para-brisa. Você pode passar por todas as faixas de pedágio sem parar." },
      { speaker: 'student', english: "That sounds very convenient. Please add the toll pass to my contract.", portuguese: "Parece muito conveniente. Por favor, adicione o passe de pedágio ao meu contrato." },
      { speaker: 'native', english: "Great. Lastly, for fuel options, would you like prepaid fuel, or would you prefer to return the car with a full tank?", portuguese: "Ótimo. Por último, sobre o combustível, você gostaria de combustível pré-pago ou prefere devolver o carro com o tanque cheio?" },
      { speaker: 'student', english: "I'll return it with a full tank. Where is the nearest gas station to the airport?", portuguese: "Vou devolver com o tanque cheio. Onde fica o posto de gasolina mais próximo do aeroporto?" },
      { speaker: 'native', english: "There is one just two miles down the main highway. I'll place a temporary deposit hold on your card for security.", portuguese: "Há um a apenas duas milhas na rodovia principal. Farei uma retenção temporária de depósito no seu cartão por segurança." },
      { speaker: 'student', english: "Okay, no problem. Before I sign, can you show me the document showing the car's condition?", portuguese: "Ok, sem problemas. Antes de assinar, você pode me mostrar o documento com as condições do carro?" },
      { speaker: 'native', english: "Yes, the pre-inspection report is attached. Your car is in parking area B12. Just exit the glass doors to your right.", portuguese: "Sim, o relatório de pré-inspeção está anexado. Seu carro está na área de estacionamento B12. Basta sair pelas portas de vidro à sua direita." },
      { speaker: 'student', english: "Thank you very much for all the explanations. Have a wonderful day!", portuguese: "Muito obrigada por todas as explicações. Tenha um excelente dia!" }
],
    dialoguesBeginner: [
      { speaker: 'native', english: "Do you have a reservation?", portuguese: "Você tem uma reserva?" },
      { speaker: 'student', english: "Yes, my name is Tati.", portuguese: "Sim, meu nome é Tati." },
      { speaker: 'native', english: "Driver's license and credit card, please.", portuguese: "Carteira de motorista e cartão de crédito, por favor." },
      { speaker: 'student', english: "Here they are.", portuguese: "Aqui estão." },
      { speaker: 'native', english: "Would you like to add insurance?", portuguese: "Gostaria de adicionar seguro?" },
      { speaker: 'student', english: "What does the basic coverage include?", portuguese: "O que a cobertura básica inclui?" },
      { speaker: 'native', english: "It covers accidents. Would you like a toll pass?", portuguese: "Cobre acidentes. Gostaria de um passe de pedágio?" },
      { speaker: 'student', english: "Yes, how much is it per day?", portuguese: "Sim, quanto custa por dia?" },
      { speaker: 'native', english: "It is $15 per day. Please return the car with a full tank.", portuguese: "Custa $15 por dia. Por favor, devolva o carro com o tanque cheio." },
      { speaker: 'student', english: "Okay, no problem. Thank you!", portuguese: "Ok, sem problemas. Obrigado!" }
,

      {
            speaker: "native",
            english: "Is the car clean?",
            portuguese: "O carro está limpo?"
      },
      {
            speaker: "student",
            english: "Yes, it is clean and ready.",
            portuguese: "Sim, está limpo e pronto."
      },
      {
            speaker: "native",
            english: "Does it have a GPS?",
            portuguese: "Ele tem um GPS?"
      },
      {
            speaker: "student",
            english: "Yes, the GPS is included.",
            portuguese: "Sim, o GPS está incluído."
      },
      {
            speaker: "native",
            english: "What type of gas does it need?",
            portuguese: "Que tipo de gasolina ele precisa?"
      },
      {
            speaker: "student",
            english: "It uses regular gas.",
            portuguese: "Ele usa gasolina comum."
      },
      {
            speaker: "native",
            english: "Do I return it full?",
            portuguese: "Eu devolvo com o tanque cheio?"
      },
      {
            speaker: "student",
            english: "Yes, please bring it full.",
            portuguese: "Sim, por favor, traga-o cheio."
      }
],
    dialogues2: [
      { speaker: 'student', english: "Hello, I need assistance. I picked up a rental car this morning, but it's making a strange noise.", portuguese: "Olá, preciso de ajuda. Peguei um carro alugado hoje de manhã, mas ele está fazendo um barulho estranho." },
      { speaker: 'native', english: "I'm sorry to hear that. Are you currently driving, or are you safely parked?", portuguese: "Sinto muito por ouvir isso. Você está dirigindo no momento ou está estacionado em segurança?" },
      { speaker: 'student', english: "I am parked at a gas station. I also think there's a problem with the front right tire. It looks flat.", portuguese: "Estou estacionado em um posto de gasolina. Também acho que há um problema com o pneu dianteiro direito. Parece murcho." },
      { speaker: 'native', english: "Do you have Roadside Assistance included in your contract? Let me pull up your agreement.", portuguese: "Você tem Assistência na Estrada incluída no seu contrato? Deixe-me abrir seu acordo." },
      { speaker: 'student', english: "Yes, I added full coverage. Can someone come and help me change the tire?", portuguese: "Sim, adicionei cobertura total. Alguém pode vir me ajudar a trocar o pneu?" },
      { speaker: 'native', english: "Absolutely. We will send a technician to your location within thirty minutes. What is your exact address?", portuguese: "Com certeza. Enviaremos um técnico para o seu local em até trinta minutos. Qual é o seu endereço exato?" },
      { speaker: 'student', english: "I am at the corner of Main Street and 5th Avenue. The GPS isn't working properly either.", portuguese: "Estou na esquina da Main Street com a 5th Avenue. O GPS também não está funcionando direito." },
      { speaker: 'native', english: "Since the vehicle has multiple issues, the technician will bring a replacement car for you.", portuguese: "Como o veículo apresenta vários problemas, o técnico levará um carro substituto para você." },
      { speaker: 'student', english: "That would be excellent. By the way, I noticed the rear bumper was already scratched and dented.", portuguese: "Isso seria excelente. Por falar nisso, notei que o para-choque traseiro já estava riscado e amassado." },
      { speaker: 'native', english: "Don't worry, the pre-inspection report documents those scratches. You won't be held responsible.", portuguese: "Não se preocupe, o relatório de pré-inspeção documenta esses riscos. Você não será responsabilizado." },
      { speaker: 'student', english: "Thank you for the quick support. I will wait for the technician inside the convenience store.", portuguese: "Obrigado pelo suporte rápido. Vou esperar pelo técnico dentro da loja de conveniência." }
],
            importantPhrases: [
      {
            pt: "Preciso de uma cadeirinha de bebê.",
            en: "I need a baby seat."
      },
      {
            pt: "O carro é automático ou manual?",
            en: "Is the car automatic or manual?"
      },
      {
            pt: "Tem limite de quilometragem?",
            en: "Is there a mileage limit?"
      },
      {
            pt: "O que acontece se eu bater?",
            en: "What happens if I crash?"
      },
      {
            pt: "Aonde fica o posto de gasolina?",
            en: "Where is the gas station?"
      },
      {
            pt: "Tem arranhões na porta.",
            en: "There are scratches on the door."
      }
],
        problems: [
      {
            descriptionPt: "O pneu do carro alugado furou no meio da estrada."
      },
      {
            descriptionPt: "Quando você foi pegar o carro, ele já tinha um grande arranhão na porta."
      }
],
    vocabulary: [
      { english: "Insurance", portuguese: "Seguro",
        sentenceA1: "I want insurance.",
        sentenceA2: "The insurance covers any damage during the rental period.",
        sentenceA1Pt: "Quero seguro.",
        sentenceA2Pt: "O seguro cobre qualquer dano durante o período de aluguel."
      },
      { english: "Toll pass", portuguese: "Passe de pedágio",
        sentenceA1: "Do I need a toll pass?",
        sentenceA2: "The toll pass is convenient because you do not need to stop.",
        sentenceA1Pt: "Preciso de passe de pedágio?",
        sentenceA2Pt: "O passe de pedágio é prático porque não precisa parar."
      },
      { english: "Deposit", portuguese: "Depósito / Caução",
        sentenceA1: "How much is the deposit?",
        sentenceA2: "They charged a five hundred dollar deposit on my credit card.",
        sentenceA1Pt: "Quanto é o depósito?",
        sentenceA2Pt: "Cobraram um depósito de quinhentos dólares no meu cartão."
      },
      { english: "Full tank", portuguese: "Tanque cheio",
        sentenceA1: "The tank is full.",
        sentenceA2: "Please return the car with a full tank or you will be charged.",
        sentenceA1Pt: "O tanque está cheio.",
        sentenceA2Pt: "Devolva o carro com o tanque cheio senão será cobrado a mais."
      },
      { english: "Additional driver", portuguese: "Motorista adicional",
        sentenceA1: "I want to add a driver.",
        sentenceA2: "Adding an additional driver costs twenty dollars per day.",
        sentenceA1Pt: "Quero adicionar um motorista.",
        sentenceA2Pt: "Adicionar um motorista extra custa vinte dólares por dia."
      },
      { english: "Automatic transmission", portuguese: "Câmbio automático",
        sentenceA1: "I want automatic.",
        sentenceA2: "I prefer automatic transmission because I am not used to manual.",
        sentenceA1Pt: "Quero automático.",
        sentenceA2Pt: "Prefiro automático porque não estou acostumado com manual."
      },
      { english: "Trunk", portuguese: "Porta-malas",
        sentenceA1: "Open the trunk, please.",
        sentenceA2: "The trunk is large enough for three suitcases.",
        sentenceA1Pt: "Abra o porta-malas.",
        sentenceA2Pt: "O porta-malas é grande o suficiente para três malas."
      },
      { english: "Prepaid fuel", portuguese: "Combustível pré-pago",
        sentenceA1: "I chose prepaid fuel.",
        sentenceA2: "With prepaid fuel you do not need to refill before returning.",
        sentenceA1Pt: "Escolhi combustível pré-pago.",
        sentenceA2Pt: "Com combustível pré-pago não precisa reabastecer antes de devolver."
      },
      { english: "Flat tire", portuguese: "Pneu furado",
        sentenceA1: "I have a flat tire.",
        sentenceA2: "We got a flat tire on the highway and had to call for help.",
        sentenceA1Pt: "Estou com pneu furado.",
        sentenceA2Pt: "Tivemos um pneu furado na rodovia e ligamos para assistência."
      },
      { english: "Roadside assistance", portuguese: "Assistência na estrada",
        sentenceA1: "Call roadside assistance.",
        sentenceA2: "The rental includes free roadside assistance twenty-four hours.",
        sentenceA1Pt: "Ligue para a assistência.",
        sentenceA2Pt: "O aluguel inclui assistência na estrada gratuita 24 horas."
      },
      { english: "Scratched", portuguese: "Arranhado",
        sentenceA1: "The car is scratched.",
        sentenceA2: "Make sure to report any scratches before you leave.",
        sentenceA1Pt: "O carro está arranhado.",
        sentenceA2Pt: "Relate quaisquer arranhões antes de sair da locadora."
      },
      { english: "Dented", portuguese: "Amassado",
        sentenceA1: "The door is dented.",
        sentenceA2: "The car was already dented when I picked it up.",
        sentenceA1Pt: "A porta está amassada.",
        sentenceA2Pt: "O carro já estava amassado quando peguei."
      },
      { english: "Collision Damage Waiver (CDW)", portuguese: "Isenção de responsabilidade por danos por colisão",
        sentenceA1: "I want the CDW.",
        sentenceA2: "The CDW covers the full cost of repairs in case of an accident.",
        sentenceA1Pt: "Quero o seguro contra colisão.",
        sentenceA2Pt: "O CDW cobre o custo total de reparos em caso de acidente."
      },
      { english: "Liability Insurance", portuguese: "Seguro contra terceiros",
        sentenceA1: "I need liability insurance.",
        sentenceA2: "Liability insurance protects you if you damage another vehicle.",
        sentenceA1Pt: "Preciso de seguro contra terceiros.",
        sentenceA2Pt: "Liability insurance protege se causar dano a outro veículo."
      },
      { english: "GPS navigation", portuguese: "Navegador GPS",
        sentenceA1: "Does the car have GPS?",
        sentenceA2: "I paid an extra ten dollars for a GPS navigation system.",
        sentenceA1Pt: "O carro tem GPS?",
        sentenceA2Pt: "Paguei dez dólares extras por um sistema de navegação GPS."
      },
      { english: "Rental agreement", portuguese: "Contrato de aluguel",
        sentenceA1: "Sign the agreement.",
        sentenceA2: "Please read the rental agreement carefully before signing.",
        sentenceA1Pt: "Assine o contrato.",
        sentenceA2Pt: "Por favor, leia o contrato de aluguel atentamente antes de assinar."
      },
      { english: "SUV", portuguese: "Carro utilitário esportivo / SUV",
        sentenceA1: "I rented an SUV.",
        sentenceA2: "We upgraded to an SUV because we needed more space for our ski gear.",
        sentenceA1Pt: "Aluguei um SUV.",
        sentenceA2Pt: "Nós fizemos um upgrade para um SUV porque precisávamos de mais espaço para nossos equipamentos de esqui."
      },
      { english: "Unlimited mileage", portuguese: "Quilometragem ilimitada",
        sentenceA1: "Does it have unlimited mileage?",
        sentenceA2: "Our rental has unlimited mileage, so we can drive as far as we want.",
        sentenceA1Pt: "Tem quilometragem ilimitada?",
        sentenceA2Pt: "Nosso aluguel tem quilometragem ilimitada, então podemos dirigir o quanto quisermos."
      }
],
    culturalTips: [
      {
        title: "Insurance Types",
        titlePt: "Tipos de Seguros",
        content: "CDW covers the rental car itself. Liability covers damage to other cars or people. Check if your credit card already offers CDW to save money!",
        contentPt: "O CDW cobre o próprio carro alugado. O Liability cobre danos a outros carros ou pessoas. Verifique se seu cartão de crédito já oferece CDW para economizar!"
},
      {
        title: "Toll Passes",
        titlePt: "Pedágios Eletrônicos",
        content: "Systems like SunPass or E-ZPass let you use automatic toll lanes. Passing without one can result in costly administrative fees charged directly to your card.",
        contentPt: "Sistemas como SunPass ou E-ZPass permitem usar faixas automáticas. Passar sem o passe pode gerar taxas administrativas caras cobradas no seu cartão."
},
      {
        title: "Fuel Policies",
        titlePt: "Políticas de Combustível",
        content: "Returning the car with a full tank yourself is almost always cheaper than buying prepaid fuel at the counter. Find a gas station near the airport before returning.",
        contentPt: "Devolver o carro com o tanque cheio por conta própria é quase sempre mais barato do que comprar combustível pré-pago no balcão. Ache um posto próximo ao aeroporto."
},
      {
        title: "Pre-Inspection Reports",
        titlePt: "Vistoria Prévia",
        content: "Always check the car for existing scratches or dents before driving away. Ensure any prior damage is written in the inspection report to avoid unfair fees.",
        contentPt: "Sempre verifique riscos ou amassados antes de sair com o carro. Garanta que danos prévios estejam no relatório de vistoria para evitar cobranças indevidas."
}
],
  reading: {
      textA1: 'Roberto wants to rent a car. He goes to a car rental office at the airport. He shows his driver\'s license and passport. The agent asks how many days he needs the car. Roberto says five days. The agent shows him three options: a small car, a medium car, and a big SUV. The small car is 35 dollars per day. Roberto chooses the medium car for 50 dollars per day. The agent asks if he wants insurance. Roberto says yes. The insurance is 15 dollars per day extra. The total is 325 dollars. The agent gives him the keys. Roberto checks the car for scratches. He takes photos with his phone. He is ready for his road trip.',
      textA1Pt: 'Roberto quer alugar um carro. Ele vai a uma locadora de carros no aeroporto. Ele mostra sua carteira de motorista e passaporte. O agente pergunta quantos dias ele precisa do carro. Roberto diz cinco dias. O agente mostra três opções: um carro pequeno, um carro médio e um SUV grande. O carro pequeno é 35 dólares por dia. Roberto escolhe o carro médio por 50 dólares por dia. O agente pergunta se ele quer seguro. Roberto diz que sim. O seguro é 15 dólares por dia extra. O total é 325 dólares. O agente entrega as chaves. Roberto verifica o carro procurando arranhões. Ele tira fotos com o celular. Ele está pronto para sua viagem de carro.',
      textA2: 'Renting a car in the United States can open up incredible travel opportunities, but it also comes with its own set of challenges and considerations. Roberto, a 35-year-old engineer from Recife, decided to rent a car at Miami International Airport for a week-long road trip along the Florida coast. At the rental counter, the agent explained the different vehicle categories and pricing tiers. Roberto was initially drawn to the economy option at $39 per day, but when the agent mentioned that the midsize sedan came with better fuel efficiency and a larger trunk for luggage, he upgraded for an additional $15 per day. The agent then went through a detailed explanation of insurance options: the Loss Damage Waiver (LDW) at $22 per day would cover any damage to the vehicle, while the Supplemental Liability Insurance (SLI) at $14 per day would cover third-party claims. Roberto also learned about additional driver fees — his wife wanted to drive too, which cost an extra $12 per day. Before picking up the car, the agent asked whether he wanted to prepay for a full tank of gas or return the car with a full tank himself. Roberto chose the latter option to save money. He carefully inspected the vehicle with the agent, noting every scratch and dent on the condition report, and took photos as evidence. He also confirmed that the car had GPS navigation and a USB port for his phone.',
      textA2Pt: 'Alugar um carro nos Estados Unidos pode abrir oportunidades incríveis de viagem, mas também vem com seu próprio conjunto de desafios e considerações. Roberto, um engenheiro de 35 anos de Recife, decidiu alugar um carro no Aeroporto Internacional de Miami para uma viagem de carro de uma semana ao longo da costa da Flórida. No balcão de locação, o agente explicou as diferentes categorias de veículos e faixas de preço. Roberto inicialmente se interessou pela opção econômica a $39 por dia, mas quando o agente mencionou que o sedan médio tinha melhor eficiência de combustível e um porta-malas maior para bagagem, ele fez upgrade por $15 adicionais por dia. O agente então passou por uma explicação detalhada das opções de seguro: o Loss Damage Waiver (LDW) a $22 por dia cobriria qualquer dano ao veículo, enquanto o Supplemental Liability Insurance (SLI) a $14 por dia cobriria reclamações de terceiros. Roberto também soube sobre taxas de motorista adicional — sua esposa queria dirigir também, o que custava $12 extras por dia. Antes de pegar o carro, o agente perguntou se ele queria pagar antecipadamente por um tanque cheio ou devolver o carro com o tanque cheio. Roberto escolheu a segunda opção para economizar. Ele inspecionou cuidadosamente o veículo com o agente, anotando cada arranhão e amassado no relatório de condição, e tirou fotos como evidência. Ele também confirmou que o carro tinha navegação GPS e uma porta USB para seu celular.',
      questionsA1: [
        { question: 'What is the main event in the text?', questionPt: 'Qual é o evento principal no texto?', options: ['Roberto buying a new car', 'Roberto renting a car for a trip', 'Roberto fixing a scratch on his car', 'Roberto taking a taxi'], correctIndex: 1 },
        { question: 'What does "insurance" mean in this story?', questionPt: 'O que significa "insurance" nesta história?', options: ['Extra money to protect him if the car gets damaged', 'Gasoline for the car', 'Food for the trip', 'A type of car'], correctIndex: 0 },
        { question: 'Why does Roberto take photos of the car?', questionPt: 'Por que Roberto tira fotos do carro?', options: ['Because he likes photography', 'To have proof of the scratches before he drives it', 'Because it is a rule', 'To send to his friend'], correctIndex: 1 },
        { question: 'What can we guess about Roberto\'s trip?', questionPt: 'O que podemos adivinhar sobre a viagem de Roberto?', options: ['It is a one-day trip', 'It will last five days', 'He will walk', 'He doesn\'t have a driver\'s license'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'Why did Roberto upgrade from the economy car?', questionPt: 'Por que Roberto fez upgrade do carro econômico?', options: ['It was broken', 'Better fuel efficiency and larger trunk', 'The agent forced him', 'It was the same price'], correctIndex: 1 },
        { question: 'How much was the Loss Damage Waiver per day?', questionPt: 'Quanto custava o LDW por dia?', options: ['$12', '$14', '$22', '$39'], correctIndex: 2 },
        { question: 'How much did the additional driver fee cost?', questionPt: 'Quanto custou a taxa de motorista adicional?', options: ['$8/day', '$10/day', '$12/day', '$15/day'], correctIndex: 2 },
        { question: 'What option did Roberto choose for the gas tank?', questionPt: 'Que opção Roberto escolheu para o tanque?', options: ['Prepay for full tank', 'Return the car with a full tank', 'Pay nothing extra', 'Share costs'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Atendente] \"Como posso te ajudar?\"",
            expectedEn: "How can I help you?"
      },
      {
            promptPt: "[Você] Você quer dizer que quer alugar um carro por três dias",
            expectedEn: "I would like to rent a car for three days."
      },
      {
            promptPt: "[Atendente] \"Posso ver sua carteira de motorista?\"",
            expectedEn: "Can I see your driver's license?"
      },
      {
            promptPt: "[Você] Você quer entregar a sua carteira de motorista",
            expectedEn: "Here is my driver's license."
      },
      {
            promptPt: "[Você] Você quer perguntar se o seguro está incluído",
            expectedEn: "Is insurance included?"
      },
      {
            promptPt: "[Você] Você quer perguntar a que horas precisa devolver o carro",
            expectedEn: "What time do I need to return the car?"
      }
],
    wouldYouRather: [
      {
            optionAEn: "Rent a car with no AC in the summer",
            optionAPt: "Alugar um carro sem ar condicionado no verão",
            optionBEn: "Rent a car with no heater in the winter",
            optionBPt: "Alugar um carro sem aquecedor no inverno"
      },
      {
            optionAEn: "Get a flat tire in the middle of nowhere",
            optionAPt: "Ter um pneu furado no meio do nada",
            optionBEn: "Run out of gas on a busy highway",
            optionBPt: "Ficar sem gasolina em uma rodovia movimentada"
      },
      {
            optionAEn: "Scratch a rental car and lose your deposit",
            optionAPt: "Arranhar um carro alugado e perder seu depósito",
            optionBEn: "Get a speeding ticket on your vacation",
            optionBPt: "Levar uma multa por excesso de velocidade nas férias"
      },
      {
            optionAEn: "Drive an automatic car when you only know manual",
            optionAPt: "Dirigir um carro automático quando você só sabe manual",
            optionBEn: "Drive a manual car when you only know automatic",
            optionBPt: "Dirigir um carro manual quando você só sabe automático"
      },
      {
            optionAEn: "Have to drive on the left side of the road",
            optionAPt: "Ter que dirigir no lado esquerdo da rua",
            optionBEn: "Have to drive in chaotic city traffic",
            optionBPt: "Ter que dirigir no trânsito caótico da cidade"
      },
      {
            optionAEn: "Rent a tiny compact car for a family trip",
            optionAPt: "Alugar um carro compacto minúsculo para uma viagem em família",
            optionBEn: "Rent a huge van just for yourself",
            optionBPt: "Alugar uma van enorme apenas para você"
      },
      {
            optionAEn: "Listen to the same song on the radio for a 4-hour drive",
            optionAPt: "Ouvir a mesma música no rádio por uma viagem de 4 horas",
            optionBEn: "Drive in complete silence for 4 hours",
            optionBPt: "Dirigir em completo silêncio por 4 horas"
      }
]
},
  {
    id: 'supermarket',
    speakingQuestions: [
    {
        "question": "Who does the grocery shopping in your house?",
        "questionPt": "Quem faz as compras de supermercado na sua casa?",
        "hintA1": "I do the shopping on Saturdays.",
        "hintA2": "My mom usually does it, but I go with her sometimes to help carry the bags."
    },
    {
        "question": "Do you make a list before going to the supermarket?",
        "questionPt": "Você faz uma lista antes de ir ao supermercado?",
        "hintA1": "Yes, I write everything on my phone.",
        "hintA2": "I always make a list, otherwise I end up buying a lot of snacks I don't need."
    },
    {
        "question": "What is one item you always buy at the supermarket?",
        "questionPt": "Qual é um item que você sempre compra no supermercado?",
        "hintA1": "I always buy milk and bread.",
        "hintA2": "I can't leave the supermarket without buying fresh fruit and some chocolate."
    }
,
    {
        "question": "Did you forget anything on your shopping list?",
        "questionPt": "Você esqueceu alguma coisa da sua lista de compras?",
        "hintA1": "Yes, I forgot the eggs.",
        "hintA2": "I completely forgot to buy milk, so I need to go back to the store tomorrow."
    },
    {
        "question": "Do you check the expiration dates on products?",
        "questionPt": "Você verifica as datas de validade dos produtos?",
        "hintA1": "Yes, I always check.",
        "hintA2": "I always check the dates, especially for dairy products like milk and yogurt."
    },
    {
        "question": "When did you last buy fresh vegetables?",
        "questionPt": "Quando foi a última vez que você comprou legumes frescos?",
        "hintA1": "I bought them yesterday.",
        "hintA2": "I buy fresh vegetables twice a week at the farmers market near my house."
    },
    {
        "question": "Does this supermarket sell organic food?",
        "questionPt": "Este supermercado vende comida orgânica?",
        "hintA1": "Yes, they have a section.",
        "hintA2": "Yes, they have a special aisle just for organic and natural products."
    },
    {
        "question": "Did you bring your own reusable bags?",
        "questionPt": "Você trouxe suas próprias sacolas reutilizáveis?",
        "hintA1": "Yes, I always bring them.",
        "hintA2": "I brought three bags because I do not like using plastic. It is better for the environment."
    }
    ],
    title: 'Supermarket & Groceries',
    titlePt: 'Supermercado e Compras',
    description: 'Find grocery items, navigate different supermarket departments, and checkout with a cashier.',
    descriptionPt: 'Encontre mantimentos, navegue pelos setores do supermercado e passe pelo caixa de pagamento.',
    icon: '🛒',
    color: 'mint',
    imagePath: '/images/supermarket_scene.png',
    dialogues: [
      { speaker: 'student', english: "Excuse me, I'm looking for the produce section. Where can I find fresh vegetables?", portuguese: "Com licença, estou procurando o setor de hortifrúti. Onde posso encontrar verduras frescas?" },
      { speaker: 'native', english: "It's right at the entrance, on your left. We have a great selection of organic lettuce, tomatoes, and apples today.", portuguese: "Fica logo na entrada, à sua esquerda. Temos uma ótima seleção de alface, tomates e maçãs orgânicas hoje." },
      { speaker: 'student', english: "Perfect. And where is the bakery? I need to get some fresh bread and a chocolate cake.", portuguese: "Perfeito. E onde fica a padaria? Preciso comprar pão fresco e um bolo de chocolate." },
      { speaker: 'native', english: "The bakery is in the back-right corner, next to the deli counter. You can also get sliced ham and cheese there.", portuguese: "A padaria fica no canto traseiro direito, ao lado do balcão de frios. Você também pode comprar presunto e queijo fatiados lá." },
      { speaker: 'student', english: "Great! I also have milk and yogurt on my grocery list. Is the dairy section nearby?", portuguese: "Ótimo! Também tenho leite e iogurte na minha lista de compras. O setor de laticínios fica por perto?" },
      { speaker: 'native', english: "Yes, the dairy section is just past the meat department, along the back wall.", portuguese: "Sim, o setor de laticínios fica logo depois do açougue, ao longo da parede do fundo." },
      { speaker: 'student', english: "Thank you. Which grocery aisle has olive oil and pasta?", portuguese: "Obrigada. Qual corredor de mercearia tem azeite de oliva e macarrão?" },
      { speaker: 'native', english: "That would be aisle 4. Right next to the frozen foods aisle.", portuguese: "Esse seria o corredor 4. Bem ao lado do corredor de congelados." },
      { speaker: 'student', english: "Excellent. I've filled my grocery cart. Can I pay at the self-checkout, or should I go to a cashier?", portuguese: "Excelente. Enchi meu carrinho de compras. Posso pagar no self-checkout ou devo ir a um caixa?" },
      { speaker: 'native', english: "You can use either! If you have less than ten items, the self-checkout lane is usually faster.", portuguese: "Você pode usar qualquer um dos dois! Se tiver menos de dez itens, a fila do self-checkout geralmente é mais rápida." },
      { speaker: 'student', english: "I have quite a few items in my shopping cart, so I'll go to register 3 with the cashier.", portuguese: "Tenho bastantes itens no meu carrinho de compras, então vou para o caixa 3 com o atendente." },
      { speaker: 'native', english: "Hello! Did you find everything okay today? Do you have a store loyalty card?", portuguese: "Olá! Encontrou tudo certinho hoje? Você tem o cartão fidelidade da loja?" },
      { speaker: 'student', english: "Yes, I found everything. I don't have a loyalty card, but I'd like to pay with my credit card.", portuguese: "Sim, encontrei tudo. Não tenho o cartão fidelidade, mas gostaria de pagar com meu cartão de crédito." },
      { speaker: 'native', english: "Sure. Would you prefer a paper bag or a plastic bag for your groceries?", portuguese: "Claro. Você prefere sacola de papel ou sacola plástica para suas compras?" },
      { speaker: 'student', english: "A paper bag is fine, thank you. Can you double-bag the heavy glass bottles, please?", portuguese: "Uma sacola de papel está bom, obrigado. Você pode colocar sacola dupla nas garrafas pesadas de vidro, por favor?" },
      { speaker: 'native', english: "No problem. Please swipe or tap your card on the terminal. Here is your receipt. Have a great day!", portuguese: "Sem problemas. Por favor, passe ou aproxime o seu cartão no terminal. Aqui está o seu recibo. Tenha um ótimo dia!" },
      { speaker: 'student', english: "Thank you so much! Goodbye!", portuguese: "Muito obrigado! Tchau!" }
],
    dialoguesBeginner: [
      { speaker: 'student', english: "Excuse me, where is the produce section for fruit?", portuguese: "Com licença, onde fica o setor de hortifrúti para frutas?" },
      { speaker: 'native', english: "It is near the entrance. The organic apples are there.", portuguese: "Fica perto da entrada. As maçãs orgânicas estão lá." },
      { speaker: 'student', english: "Great. Where is the dairy section for milk and cheese?", portuguese: "Ótimo. Onde fica o setor de laticínios para leite e queijo?" },
      { speaker: 'native', english: "It is in the back, next to the meat department.", portuguese: "Fica no fundo, ao lado do açougue." },
      { speaker: 'student', english: "And where is the bread? Is it in the bakery?", portuguese: "E onde está o pão? Fica na padaria?" },
      { speaker: 'native', english: "Yes, the bakery is in aisle 5, next to the frozen foods.", portuguese: "Sim, a padaria fica no corredor 5, ao lado dos congelados." },
      { speaker: 'student', english: "Thank you. I have a shopping cart. Where do I pay?", portuguese: "Obrigado. Eu tenho um carrinho de compras. Onde eu pago?" },
      { speaker: 'native', english: "You can pay at register 3 with the cashier, or use self-checkout.", portuguese: "Você pode pagar no caixa 3 com o atendente, ou usar o self-checkout." },
      { speaker: 'student', english: "I will use register 3. Hello! I want a paper bag, please.", portuguese: "Vou usar o caixa 3. Olá! Quero uma sacola de papel, por favor." },
      { speaker: 'native', english: "Sure. Do you want your receipt in the bag?", portuguese: "Claro. Você quer o seu recibo na sacola?" },
      { speaker: 'student', english: "Yes, please. Thank you very much!", portuguese: "Sim, por favor. Muito obrigado!" },
      { speaker: 'native', english: "You're welcome! Have a good day!", portuguese: "De nada! Tenha um bom dia!" }
,

      {
            speaker: "native",
            english: "Where is the milk?",
            portuguese: "Onde está o leite?"
      },
      {
            speaker: "student",
            english: "It is in aisle three.",
            portuguese: "Fica no corredor três."
      },
      {
            speaker: "native",
            english: "Do you sell fresh bread?",
            portuguese: "Vocês vendem pão fresco?"
      },
      {
            speaker: "student",
            english: "Yes, the bakery is in the back.",
            portuguese: "Sim, a padaria é lá no fundo."
      },
      {
            speaker: "native",
            english: "Are these apples sweet?",
            portuguese: "Essas maçãs são doces?"
      },
      {
            speaker: "student",
            english: "Yes, they are very good.",
            portuguese: "Sim, elas são muito boas."
      },
      {
            speaker: "native",
            english: "I will take five apples.",
            portuguese: "Eu vou levar cinco maçãs."
      },
      {
            speaker: "student",
            english: "Okay, you can weigh them there.",
            portuguese: "Ok, você pode pesá-las lá."
      }
],
            importantPhrases: [
      {
            pt: "Onde ficam os laticínios?",
            en: "Where is the dairy section?"
      },
      {
            pt: "Esta carne está fresca?",
            en: "Is this meat fresh?"
      },
      {
            pt: "Pode me ajudar a alcançar isso?",
            en: "Can you help me reach this?"
      },
      {
            pt: "A validade expirou.",
            en: "The expiration date passed."
      },
      {
            pt: "Vocês entregam em casa?",
            en: "Do you deliver at home?"
      },
      {
            pt: "Eu trouxe minha sacola.",
            en: "I brought my bag."
      }
],
        problems: [
      {
            descriptionPt: "Você derrubou um vidro de molho no chão do mercado e quebrou."
      },
      {
            descriptionPt: "O caixa cobrou o valor de um item duas vezes por engano."
      }
],
    vocabulary: [
      { english: "Grocery store / Supermarket", portuguese: "Supermercado / Mercearia",
        sentenceA1: "I go to the supermarket.",
        sentenceA2: "The grocery store near my house has great organic products.",
        sentenceA1Pt: "Vou ao supermercado.",
        sentenceA2Pt: "O supermercado perto de casa tem ótimos produtos orgânicos."
      },
      { english: "Produce section", portuguese: "Hortifrúti / FLV",
        sentenceA1: "Fruits are in produce.",
        sentenceA2: "I always start shopping in the produce section.",
        sentenceA1Pt: "Frutas ficam no hortifrúti.",
        sentenceA2Pt: "Sempre começo as compras na seção de hortifrúti."
      },
      { english: "Bakery", portuguese: "Padaria",
        sentenceA1: "The bakery smells great.",
        sentenceA2: "The bakery makes fresh bread every morning.",
        sentenceA1Pt: "A padaria cheira bem.",
        sentenceA2Pt: "A padaria faz pão fresco toda manhã."
      },
      { english: "Deli counter", portuguese: "Fiambreria / Frios",
        sentenceA1: "I want cheese from the deli.",
        sentenceA2: "The deli counter has a wide variety of imported cheeses.",
        sentenceA1Pt: "Quero queijo do balcão de frios.",
        sentenceA2Pt: "O balcão de frios tem grande variedade de queijos importados."
      },
      { english: "Dairy section", portuguese: "Laticínios",
        sentenceA1: "Milk is in dairy.",
        sentenceA2: "I need to pick up yogurt and butter from the dairy section.",
        sentenceA1Pt: "Leite fica nos laticínios.",
        sentenceA2Pt: "Preciso pegar iogurte e manteiga nos laticínios."
      },
      { english: "Frozen foods aisle", portuguese: "Corredor de congelados",
        sentenceA1: "Ice cream is in frozen.",
        sentenceA2: "The frozen foods aisle has pre-made meals for busy nights.",
        sentenceA1Pt: "Sorvete fica nos congelados.",
        sentenceA2Pt: "O corredor de congelados tem refeições prontas para noites corridas."
      },
      { english: "Meat department / Butcher", portuguese: "Açougue / Carnes",
        sentenceA1: "I need meat from the butcher.",
        sentenceA2: "The butcher can cut the meat any way you prefer.",
        sentenceA1Pt: "Preciso de carne do açougueiro.",
        sentenceA2Pt: "O açougueiro pode cortar a carne do jeito que preferir."
      },
      { english: "Grocery cart / Shopping cart", portuguese: "Carrinho de compras",
        sentenceA1: "I need a cart.",
        sentenceA2: "The shopping carts are at the entrance of the supermarket.",
        sentenceA1Pt: "Preciso de um carrinho.",
        sentenceA2Pt: "Os carrinhos ficam na entrada do supermercado."
      },
      { english: "Shopping basket", portuguese: "Cesta de compras",
        sentenceA1: "I only need a basket.",
        sentenceA2: "I grabbed a basket because I only needed a few items.",
        sentenceA1Pt: "Só preciso de uma cesta.",
        sentenceA2Pt: "Peguei uma cesta porque só precisava de alguns itens."
      },
      { english: "Grocery aisle", portuguese: "Corredor do supermercado",
        sentenceA1: "It is in aisle three.",
        sentenceA2: "The pasta and sauces are in aisle number seven.",
        sentenceA1Pt: "Está no corredor três.",
        sentenceA2Pt: "As massas e molhos estão no corredor número sete."
      },
      { english: "Checkout lane / Register", portuguese: "Fila do caixa / Caixa",
        sentenceA1: "Go to the checkout.",
        sentenceA2: "The express checkout lane is for ten items or fewer.",
        sentenceA1Pt: "Vá ao caixa.",
        sentenceA2Pt: "O caixa rápido é para dez itens ou menos."
      },
      { english: "Cashier", portuguese: "Operador(a) de caixa",
        sentenceA1: "The cashier is fast.",
        sentenceA2: "The cashier asked if I wanted to pay in cash or by card.",
        sentenceA1Pt: "O caixa é rápido.",
        sentenceA2Pt: "O caixa perguntou se eu queria pagar em dinheiro ou cartão."
      },
      { english: "Self-checkout", portuguese: "Autoatendimento",
        sentenceA1: "I prefer self-checkout.",
        sentenceA2: "Self-checkout machines are quicker when you have few items.",
        sentenceA1Pt: "Prefiro o autoatendimento.",
        sentenceA2Pt: "As máquinas de autoatendimento são mais rápidas com poucos itens."
      },
      { english: "Receipt", portuguese: "Cupom fiscal",
        sentenceA1: "I want the receipt.",
        sentenceA2: "Always check your receipt to make sure you were charged correctly.",
        sentenceA1Pt: "Quero o recibo.",
        sentenceA2Pt: "Sempre confira o recibo para ver se foi cobrado corretamente."
      },
      { english: "Paper bag / Plastic bag", portuguese: "Sacola de papel / plástica",
        sentenceA1: "Paper bag, please.",
        sentenceA2: "Many stores charge for plastic bags to encourage reusable ones.",
        sentenceA1Pt: "Sacola de papel, por favor.",
        sentenceA2Pt: "Muitas lojas cobram pelas sacolas plásticas para incentivar reutilizáveis."
      },
      { english: "Organic", portuguese: "Orgânico",
        sentenceA1: "I buy organic food.",
        sentenceA2: "Organic vegetables are more expensive but taste much better.",
        sentenceA1Pt: "Compro comida orgânica.",
        sentenceA2Pt: "Legumes orgânicos são mais caros mas o sabor é muito melhor."
      },
      { english: "Loyalty card", portuguese: "Cartão fidelidade",
        sentenceA1: "I have a loyalty card.",
        sentenceA2: "Use your loyalty card at checkout to earn points.",
        sentenceA1Pt: "Tenho cartão fidelidade.",
        sentenceA2Pt: "Use seu cartão fidelidade no caixa para acumular pontos."
      },
      { english: "Canned goods", portuguese: "Alimentos enlatados / Enlatados",
        sentenceA1: "I need canned tomatoes.",
        sentenceA2: "The canned goods like beans and soups are stored in aisle five.",
        sentenceA1Pt: "Preciso de tomates enlatados.",
        sentenceA2Pt: "Os alimentos enlatados como feijões e sopas ficam no corredor cinco."
      },
      { english: "Spices", portuguese: "Especiarias / Temperos",
        sentenceA1: "Where are the spices?",
        sentenceA2: "I bought fresh pepper and oregano in the spices section.",
        sentenceA1Pt: "Onde ficam os temperos?",
        sentenceA2Pt: "Comprei pimenta fresca e orégano na seção de temperos."
      },
      { english: "Barcode", portuguese: "Código de barras",
        sentenceA1: "Scan the barcode.",
        sentenceA2: "The scanner could not read the barcode on this cereal box.",
        sentenceA1Pt: "Escaneie o código de barras.",
        sentenceA2Pt: "O scanner não conseguiu ler o código de barras nesta caixa de cereal."
      },
      { english: "Expiration date", portuguese: "Data de validade",
        sentenceA1: "Check the expiration date.",
        sentenceA2: "You should always check the expiration date on dairy products before buying.",
        sentenceA1Pt: "Confira a validade.",
        sentenceA2Pt: "Você sempre deveria verificar a data de validade em laticínios antes de comprar."
      }
],
    culturalTips: [
      {
        title: "Paper or Plastic?",
        titlePt: "Papel ou Plástico?",
        content: "In the US, cashiers will often ask if you prefer 'paper or plastic' bags. Many cities now charge a small fee (5-10 cents) per bag to encourage reusable bags.",
        contentPt: "Nos EUA, os caixas costumam perguntar se você prefere sacola de 'papel ou plástico'. Muitas cidades agora cobram uma taxa pequena por sacola para incentivar o uso de sacolas retornáveis."
},
      {
        title: "Self-Checkout Etiquette",
        titlePt: "Etiqueta no Autoatendimento",
        content: "Self-checkout is great for speed. Make sure to place scanned items in the bagging area immediately, as the scale verifies the weight to prevent errors.",
        contentPt: "O autoatendimento é excelente para rapidez. Certifique-se de colocar os itens escaneados na área de sacolas imediatamente, pois a balança verifica o peso para evitar erros."
},
      {
        title: "Taxes at Checkout",
        titlePt: "Impostos no Caixa",
        content: "Groceries (unprepared foods) are exempt from sales tax in many US states, but prepared foods or items like toiletries will have sales tax added at the register.",
        contentPt: "Alimentos básicos (não preparados) são isentos de imposto em muitos estados americanos, mas alimentos prontos ou itens de higiene terão imposto adicionado no caixa."
}
    ],
  reading: {
      textA1: 'Carla goes to the supermarket. She needs milk, bread, eggs, and fruit. She takes a shopping cart. She walks to the dairy section first. She picks up a gallon of milk. Then she goes to the bakery section. She chooses whole wheat bread. Next, she finds the eggs. She gets a dozen eggs. She also buys apples, bananas, and oranges. She looks at her list one more time. She needs cheese and butter too. She goes to the checkout line. The cashier scans all her items. The total is 32 dollars and 50 cents. She pays with cash. She gets 17 dollars and 50 cents in change. She puts everything in bags and walks to her car.',
      textA1Pt: 'Carla vai ao supermercado. Ela precisa de leite, pão, ovos e frutas. Ela pega um carrinho de compras. Ela vai até a seção de laticínios primeiro. Ela pega um galão de leite. Depois ela vai para a seção de padaria. Ela escolhe pão integral. Em seguida, ela encontra os ovos. Ela pega uma dúzia de ovos. Ela também compra maçãs, bananas e laranjas. Ela olha a lista mais uma vez. Ela precisa de queijo e manteiga também. Ela vai para a fila do caixa. O caixa escaneia todos os itens. O total é 32 dólares e 50 centavos. Ela paga em dinheiro. Ela recebe 17 dólares e 50 centavos de troco. Ela coloca tudo em sacolas e caminha até o carro.',
      textA2: 'Navigating an American supermarket for the first time can be an overwhelming experience for international visitors. Carla, who had just moved to the US from Florianópolis, was amazed by the sheer size of her local Whole Foods Market in Manhattan. The store occupied two entire floors and had sections she had never seen in Brazilian supermarkets, such as a massive deli counter with ready-to-eat meals, a sushi bar, a juice bar with fresh-pressed options, and an entire aisle dedicated to gluten-free and organic products. One of the first things Carla noticed was how differently food is measured in the US. Instead of kilograms, meat and produce were sold by the pound. She had to quickly learn that one pound equals approximately 0.45 kilograms. Milk came in gallons rather than liters, and eggs were sold by the dozen. The pricing system also confused her initially — the prices on the shelves did not include sales tax, which was added at checkout. So her $45 grocery bill actually came to $48.99 after tax. Another cultural difference was the bagging system: at some stores, customers were expected to bring their own reusable bags or pay 5 cents per plastic bag. Carla also discovered the concept of self-checkout machines, where she could scan and bag her own groceries to avoid waiting in long cashier lines. She found that using the store\'s loyalty card saved her an additional 10% on many items.',
      textA2Pt: 'Navegar por um supermercado americano pela primeira vez pode ser uma experiência avassaladora para visitantes internacionais. Carla, que tinha acabado de se mudar para os EUA de Florianópolis, ficou impressionada com o tamanho enorme do seu Whole Foods Market local em Manhattan. A loja ocupava dois andares inteiros e tinha seções que ela nunca tinha visto em supermercados brasileiros, como um enorme balcão de frios com refeições prontas, um bar de sushi, um bar de sucos com opções espremidas na hora, e um corredor inteiro dedicado a produtos sem glúten e orgânicos. Uma das primeiras coisas que Carla notou foi como a comida é medida de forma diferente nos EUA. Em vez de quilogramas, carne e produtos eram vendidos por libra. Ela teve que aprender rapidamente que uma libra equivale a aproximadamente 0,45 quilogramas. O leite vinha em galões em vez de litros, e os ovos eram vendidos por dúzia. O sistema de preços também a confundiu inicialmente — os preços nas prateleiras não incluíam o imposto sobre vendas, que era adicionado no caixa. Então sua conta de $45 de supermercado na verdade ficou $48,99 após o imposto. Outra diferença cultural era o sistema de sacolas: em algumas lojas, os clientes deviam trazer suas próprias sacolas reutilizáveis ou pagar 5 centavos por sacola plástica. Carla também descobriu o conceito de caixas de autoatendimento, onde ela podia escanear e embalar suas próprias compras para evitar esperar em filas longas de caixa. Ela descobriu que usar o cartão de fidelidade da loja economizava 10% adicionais em muitos itens.',
      questionsA1: [
        { question: 'What is the main topic of the story?', questionPt: 'Qual é o tópico principal da história?', options: ['Carla shopping for food at the supermarket', 'Carla cooking dinner at home', 'Carla working as a cashier', 'Carla planting a garden'], correctIndex: 0 },
        { question: 'What does "dairy section" mean?', questionPt: 'O que significa "dairy section"?', options: ['The place where they sell bread', 'The part of the store with milk and cheese', 'The checkout line', 'The parking lot'], correctIndex: 1 },
        { question: 'Why does Carla look at her list again?', questionPt: 'Por que Carla olha para a lista novamente?', options: ['To see if she forgot anything', 'Because she likes reading', 'Because she has no money', 'Because the cashier asked for it'], correctIndex: 0 },
        { question: 'What can we infer about Carla\'s payment?', questionPt: 'O que podemos inferir sobre o pagamento de Carla?', options: ['She paid with a credit card', 'She gave the cashier a 50 dollar bill', 'She didn\'t have enough money', 'She stole the food'], correctIndex: 1 }
      ],
      questionsA2: [
        { question: 'How is meat measured in the US?', questionPt: 'Como a carne é medida nos EUA?', options: ['By kilograms', 'By the pound', 'By ounces only', 'By the piece'], correctIndex: 1 },
        { question: 'Why was Carla\'s bill higher than expected?', questionPt: 'Por que a conta de Carla ficou mais alta que esperado?', options: ['She bought extra items', 'Sales tax was added at checkout', 'The prices changed', 'She was overcharged'], correctIndex: 1 },
        { question: 'How much do plastic bags cost?', questionPt: 'Quanto custam sacolas plásticas?', options: ['Free', '5 cents each', '10 cents each', '25 cents each'], correctIndex: 1 },
        { question: 'How much did the loyalty card save?', questionPt: 'Quanto o cartão fidelidade economizava?', options: ['5%', '10%', '15%', '20%'], correctIndex: 1 }
]
},
        simulationTasks: [
      {
            promptPt: "[Você] Você quer perguntar onde fica a seção de frutas",
            expectedEn: "Where is the fruit section?"
      },
      {
            promptPt: "[Funcionário] \"Fica no corredor 4.\"",
            expectedEn: "It is in aisle four."
      },
      {
            promptPt: "[Caixa] \"Você encontrou tudo que precisava?\"",
            expectedEn: "Did you find everything you needed?"
      },
      {
            promptPt: "[Caixa] \"Você precisa de uma sacola?\"",
            expectedEn: "Do you need a bag?"
      },
      {
            promptPt: "[Você] Você quer pedir uma sacola de plástico",
            expectedEn: "Can I have a plastic bag, please?"
      },
      {
            promptPt: "[Você] Você quer dizer que vai pagar com dinheiro",
            expectedEn: "I will pay in cash."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Drop a glass bottle of oil in the aisle",
            optionAPt: "Derrubar uma garrafa de vidro de óleo no corredor",
            optionBEn: "Knock over a huge display of toilet paper",
            optionBPt: "Derrubar uma prateleira enorme de papel higiênico"
      },
      {
            optionAEn: "Wait in a checkout line for 30 minutes",
            optionAPt: "Esperar em uma fila do caixa por 30 minutos",
            optionBEn: "Use self-checkout but the machine keeps freezing",
            optionBPt: "Usar o autoatendimento mas a máquina não para de travar"
      },
      {
            optionAEn: "Forget your reusable bags and carry everything in your arms",
            optionAPt: "Esquecer as sacolas retornáveis e carregar tudo nos braços",
            optionBEn: "Buy plastic bags but they break on the way home",
            optionBPt: "Comprar sacolas plásticas mas elas rasgarem no caminho"
      },
      {
            optionAEn: "Go grocery shopping when you are starving",
            optionAPt: "Fazer compras de supermercado quando você está morrendo de fome",
            optionBEn: "Go grocery shopping with a crying child",
            optionBPt: "Fazer compras de supermercado com uma criança chorando"
      },
      {
            optionAEn: "Accidentally buy expired milk",
            optionAPt: "Comprar leite vencido por engano",
            optionBEn: "Accidentally buy incredibly spicy peppers",
            optionBPt: "Comprar pimentas incrivelmente ardidas por engano"
      },
      {
            optionAEn: "Only be able to buy 5 items at a time",
            optionAPt: "Só poder comprar 5 itens de cada vez",
            optionBEn: "Have to buy 100 items every time you go",
            optionBPt: "Ter que comprar 100 itens toda vez que for"
      },
      {
            optionAEn: "Push a shopping cart with a squeaky, broken wheel",
            optionAPt: "Empurrar um carrinho de compras com uma roda barulhenta e quebrada",
            optionBEn: "Carry a heavy basket that hurts your hand",
            optionBPt: "Carregar uma cesta pesada que machuca sua mão"
      }
]
},
  {
    id: 'smalltalk',
    speakingQuestions: [
    {
        "question": "Do you enjoy making small talk with strangers?",
        "questionPt": "Você gosta de jogar conversa fora com estranhos?",
        "hintA1": "No, I am shy.",
        "hintA2": "Not really, I feel a bit awkward talking to people I don't know well."
    },
    {
        "question": "What topics do you usually talk about with your coworkers or classmates?",
        "questionPt": "Sobre quais assuntos você costuma conversar com seus colegas de trabalho ou de classe?",
        "hintA1": "We talk about TV shows and sports.",
        "hintA2": "We usually talk about our weekend plans, new movies, or the weather."
    },
    {
        "question": "How is the weather in your city today?",
        "questionPt": "Como está o clima na sua cidade hoje?",
        "hintA1": "It is sunny and hot.",
        "hintA2": "It's quite cloudy today and it looks like it might rain later."
    }
,
    {
        "question": "Did you have a good weekend?",
        "questionPt": "Você teve um bom fim de semana?",
        "hintA1": "Yes, it was very relaxing.",
        "hintA2": "It was great! I went to the beach on Saturday and cooked a nice dinner on Sunday."
    },
    {
        "question": "Do you follow any sports teams?",
        "questionPt": "Você torce para algum time?",
        "hintA1": "Yes, I like soccer.",
        "hintA2": "Yes, I am a big fan of Flamengo and I try to watch every game on TV."
    },
    {
        "question": "What time did you arrive at work today?",
        "questionPt": "A que horas você chegou ao trabalho hoje?",
        "hintA1": "I arrived at nine.",
        "hintA2": "I got here around 8:45 because the traffic was surprisingly light today."
    },
    {
        "question": "Do you know anyone in this neighborhood?",
        "questionPt": "Você conhece alguém neste bairro?",
        "hintA1": "Yes, my cousin lives here.",
        "hintA2": "Not many people. I just moved here last month so I am still meeting my neighbors."
    },
    {
        "question": "Did you watch the news this morning?",
        "questionPt": "Você assistiu as notícias hoje de manhã?",
        "hintA1": "No, I did not have time.",
        "hintA2": "Yes, I quickly read the headlines on my phone while having breakfast."
    }
    ],
    title: 'Small Talk',
    titlePt: 'Conversa Casual',
    description: 'Master casual American conversations about weather, sports, and work.',
    descriptionPt: 'Domine conversas casuais americanas sobre clima, esportes e trabalho.',
    icon: '💬',
    color: 'lavender',
    imagePath: '/images/smalltalk_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'Talking About Weather',
        titlePt: 'Falando sobre o Clima',
        icon: '🌤️',
        dialogues: [
          { speaker: 'native', english: "Beautiful day today, isn't it? Much better than yesterday.", portuguese: "Dia lindo hoje, não é? Muito melhor que ontem." },
          { speaker: 'student', english: "It really is! I love this kind of weather. The sun feels amazing.", portuguese: "Com certeza! Adoro esse tipo de clima. O sol está maravilhoso." },
          { speaker: 'native', english: "We've been so lucky this week. Last week it was just pouring rain non-stop.", portuguese: "Tivemos muita sorte essa semana. Semana passada estava chovendo sem parar." },
          { speaker: 'student', english: "I know! I didn't even want to leave my hotel room. Is it usually this unpredictable?", portuguese: "Eu sei! Eu nem queria sair do meu quarto de hotel. É sempre tão imprevisível?" },
          { speaker: 'native', english: "Oh yeah, spring in New York is crazy. You can experience four seasons in one day.", portuguese: "Ah sim, a primavera em Nova York é louca. Você pode ter as quatro estações num único dia." },
          { speaker: 'student', english: "That's exactly what my friends told me. I brought layers just in case.", portuguese: "Foi exatamente o que meus amigos me disseram. Eu trouxe roupas em camadas por precaução." },
          { speaker: 'native', english: "Smart move! I heard it might rain again this coming weekend though.", portuguese: "Boa jogada! Ouvi dizer que pode chover de novo no próximo fim de semana, no entanto." },
          { speaker: 'student', english: "Really? I hope not. I'm planning to rent a bike in Central Park.", portuguese: "Sério? Espero que não. Estou planejando alugar uma bicicleta no Central Park." },
          { speaker: 'native', english: "Fingers crossed it stays clear for you! The forecast changes every hour anyway.", portuguese: "Dedos cruzados para que fique limpo para você! A previsão muda a cada hora de qualquer jeito." },
          { speaker: 'student', english: "Thanks! Enjoy the sunshine while it lasts.", portuguese: "Obrigado! Aproveite o sol enquanto dura." }
]
},
      {
        title: 'Talking About Sports',
        titlePt: 'Falando sobre Esportes',
        icon: '🏈',
        dialogues: [
          { speaker: 'native', english: "Hey man, did you catch the basketball game last night?", portuguese: "E aí cara, você assistiu ao jogo de basquete ontem à noite?" },
          { speaker: 'student', english: "No, unfortunately I missed it. I was out exploring the city. Who won?", portuguese: "Não, infelizmente eu perdi. Eu estava fora explorando a cidade. Quem ganhou?" },
          { speaker: 'native', english: "The Lakers won in double overtime! It was absolutely insane. LeBron was on fire.", portuguese: "Os Lakers ganharam na segunda prorrogação! Foi absolutamente insano. O LeBron estava com tudo." },
          { speaker: 'student', english: "No way! I can't believe I missed that. Was it a close game the whole time?", portuguese: "Não acredito! Não posso acreditar que perdi isso. Foi um jogo acirrado o tempo todo?" },
          { speaker: 'native', english: "Yeah, neck and neck. They tied it up right at the buzzer in the fourth quarter.", portuguese: "Sim, cabeça a cabeça. Eles empataram bem no estouro do cronômetro no quarto quarto." },
          { speaker: 'student', english: "That sounds incredible. I need to watch the highlights later. Are you a big Lakers fan?", portuguese: "Isso soa incrível. Preciso ver os melhores momentos depois. Você é um grande fã dos Lakers?" },
          { speaker: 'native', english: "Die-hard fan since I was a kid. What about you? Are you a basketball fan?", portuguese: "Fã fanático desde criança. E você? É fã de basquete?" },
          { speaker: 'student', english: "I am. I'm more of a soccer person back home in Brazil, but I follow the NBA.", portuguese: "Sou sim. Sou mais de futebol no Brasil, mas eu acompanho a NBA." },
          { speaker: 'native', english: "Oh, soccer is huge there! Do you follow the Premier League too?", portuguese: "Ah, futebol é gigante lá! Você acompanha a Premier League também?" },
          { speaker: 'student', english: "A little bit, but mostly the local leagues. Sports are a universal language, right?", portuguese: "Um pouco, mas principalmente as ligas locais. Esportes são uma linguagem universal, certo?" }
]
},
      {
        title: 'Talking About Work',
        titlePt: 'Falando sobre Trabalho',
        icon: '💼',
        dialogues: [
          { speaker: 'native', english: "So, what do you do for a living?", portuguese: "Então, o que você faz da vida?" },
          { speaker: 'student', english: "I'm a teacher. I teach English back in Brazil to high school students.", portuguese: "Sou professora. Ensino inglês no Brasil para alunos do ensino médio." },
          { speaker: 'native', english: "Oh wow, that's awesome! High school can be tough. Do you enjoy it?", portuguese: "Uau, que incrível! O ensino médio pode ser difícil. Você gosta?" },
          { speaker: 'student', english: "I really love it. Teenagers can be challenging, but they have so much energy.", portuguese: "Eu realmente adoro. Adolescentes podem ser desafiadores, mas eles têm tanta energia." },
          { speaker: 'native', english: "I bet! Every day must be completely different.", portuguese: "Aposto que sim! Cada dia deve ser completamente diferente." },
          { speaker: 'student', english: "Exactly, every class is different, which keeps things exciting. What about you?", portuguese: "Exatamente, cada aula é diferente, o que mantém as coisas animadas. E você?" },
          { speaker: 'native', english: "I work in marketing for a software company here in the city. It's mostly sitting at a desk.", portuguese: "Eu trabalho com marketing em uma empresa de software aqui na cidade. É principalmente ficar sentado numa mesa." },
          { speaker: 'student', english: "That sounds interesting though. Do you get to work from home?", portuguese: "Mas parece interessante. Você tem a chance de trabalhar de casa?" },
          { speaker: 'native', english: "Yeah, we have a hybrid schedule. Two days in the office, three at home. Are you here for a conference?", portuguese: "Sim, temos um horário híbrido. Dois dias no escritório, três em casa. Você está aqui para uma conferência?" },
          { speaker: 'student', english: "Kind of — I'm doing research and visiting some local schools to improve my teaching methods.", portuguese: "Mais ou menos — estou pesquisando e visitando algumas escolas locais para melhorar meus métodos de ensino." },
          { speaker: 'native', english: "That's so cool. I hope you get some great ideas to take back with you!", portuguese: "Isso é muito legal. Espero que você consiga ótimas ideias para levar com você!" },
          { speaker: 'student', english: "Thanks! I'm learning a lot just by talking to people like you.", portuguese: "Obrigada! Estou aprendendo muito só conversando com pessoas como você." }
]
}
],
            importantPhrases: [
      {
            pt: "Você gosta de esportes?",
            en: "Do you like sports?"
      },
      {
            pt: "Assisti a um filme ótimo.",
            en: "I watched a great movie."
      },
      {
            pt: "A comida estava deliciosa.",
            en: "The food was delicious."
      },
      {
            pt: "Eu amo cachorros.",
            en: "I love dogs."
      },
      {
            pt: "Qual é sua música favorita?",
            en: "What is your favorite song?"
      },
      {
            pt: "Tem planos para o feriado?",
            en: "Do you have plans for the holiday?"
      }
],
        problems: [
      {
            descriptionPt: "A pessoa fez uma piada que você não entendeu, e você precisa dizer isso de forma educada."
      },
      {
            descriptionPt: "Você não quer falar sobre o assunto que a pessoa puxou e quer mudar de assunto educadamente."
      }
],
    vocabulary: [
      { english: "Small talk", portuguese: "Conversa informal",
        sentenceA1: "I like small talk.",
        sentenceA2: "Making small talk is a great way to practice English.",
        sentenceA1Pt: "Gosto de conversa informal.",
        sentenceA2Pt: "Conversa informal é ótima para praticar inglês."
      },
      { english: "Fingers crossed", portuguese: "Dedos cruzados / Torcendo",
        sentenceA1: "Fingers crossed!",
        sentenceA2: "I have a job interview tomorrow. Fingers crossed!",
        sentenceA1Pt: "Estou torcendo!",
        sentenceA2Pt: "Tenho uma entrevista amanhã. Estou torcendo!"
      },
      { english: "Catch the game", portuguese: "Assistir o jogo",
        sentenceA1: "Did you catch the game?",
        sentenceA2: "Did you catch the game last night? The final was incredible.",
        sentenceA1Pt: "Você assistiu o jogo?",
        sentenceA2Pt: "Assistiu o jogo ontem? O final foi incrível."
      },
      { english: "Overtime", portuguese: "Hora extra / Prorrogação",
        sentenceA1: "I worked overtime today.",
        sentenceA2: "I had to work overtime to finish the project.",
        sentenceA1Pt: "Fiz hora extra hoje.",
        sentenceA2Pt: "Tive que fazer hora extra para terminar o projeto."
      },
      { english: "For a living", portuguese: "Como profissão / Ganhar a vida",
        sentenceA1: "What do you do for a living?",
        sentenceA2: "She designs websites for a living and loves it.",
        sentenceA1Pt: "O que você faz da vida?",
        sentenceA2Pt: "Ela cria sites profissionalmente e adora."
      },
      { english: "Keep things exciting", portuguese: "Manter as coisas animadas",
        sentenceA1: "I like to keep things exciting.",
        sentenceA2: "We try new restaurants every weekend to keep things exciting.",
        sentenceA1Pt: "Gosto de manter as coisas animadas.",
        sentenceA2Pt: "Experimentamos restaurantes novos todo fim de semana."
      },
      { english: "Attitude", portuguese: "Atitude",
        sentenceA1: "She has a great attitude.",
        sentenceA2: "Having a positive attitude makes a big difference at work.",
        sentenceA1Pt: "Ela tem uma ótima atitude.",
        sentenceA2Pt: "Ter atitude positiva faz grande diferença no trabalho."
      },
      { english: "Conference", portuguese: "Conferência / Congresso",
        sentenceA1: "I went to a conference.",
        sentenceA2: "The technology conference had amazing speakers.",
        sentenceA1Pt: "Fui a uma conferência.",
        sentenceA2Pt: "A conferência de tecnologia teve palestrantes incríveis."
      },
      { english: "How", portuguese: "Como",
        sentenceA1: "How are you today?",
        sentenceA2: "How was your vacation? I heard you went to Europe.",
        sentenceA1Pt: "Como você está hoje?",
        sentenceA2Pt: "Como foram suas férias? Soube que foi para a Europa."
      },
      { english: "What", portuguese: "O que / Qual",
        sentenceA1: "What is your name?",
        sentenceA2: "What do you think about the new project?",
        sentenceA1Pt: "Qual é o seu nome?",
        sentenceA2Pt: "O que acha do novo projeto?"
      },
      { english: "Have a good one!", portuguese: "Tenha um bom dia / Tenha um bom!",
        sentenceA1: "Have a good one!",
        sentenceA2: "It was nice chatting. Have a good one!",
        sentenceA1Pt: "Tenha um bom dia!",
        sentenceA2Pt: "Foi bom conversar. Tenha um bom dia!"
      },
      { english: "Awesome", portuguese: "Incrível / Sensacional",
        sentenceA1: "That is awesome!",
        sentenceA2: "Your presentation was awesome! Everyone loved it.",
        sentenceA1Pt: "Isso é incrível!",
        sentenceA2Pt: "Sua apresentação foi incrível! Todos adoraram."
      },
      { english: "Make sense", portuguese: "Fazer sentido",
        sentenceA1: "Does that make sense?",
        sentenceA2: "I explained the directions twice. Does that make sense?",
        sentenceA1Pt: "Faz sentido?",
        sentenceA2Pt: "Expliquei as direções duas vezes. Faz sentido agora?"
      },
      { english: "How's it going?", portuguese: "Como vão as coisas?",
        sentenceA1: "Hey, how's it going?",
        sentenceA2: "How's it going? I haven't seen you since last week.",
        sentenceA1Pt: "E aí, como vai?",
        sentenceA2Pt: "Como vai? Não te vejo desde a semana passada."
      },
      { english: "What's up?", portuguese: "E aí? / O que está rolando?",
        sentenceA1: "What's up? All good?",
        sentenceA2: "What's up? I heard you started a new job.",
        sentenceA1Pt: "E aí, tudo bem?",
        sentenceA2Pt: "E aí? Soube que você começou um emprego novo."
      },
      { english: "Weather", portuguese: "Clima / Tempo",
        sentenceA1: "The weather is hot.",
        sentenceA2: "I love cold weather because I can wear my favorite coats.",
        sentenceA1Pt: "O tempo está quente.",
        sentenceA2Pt: "Adoro clima frio porque posso usar meus casacos favoritos."
      },
      { english: "Busy", portuguese: "Ocupado(a)",
        sentenceA1: "I am very busy.",
        sentenceA2: "She has a very busy schedule today with meetings back-to-back.",
        sentenceA1Pt: "Estou muito ocupado.",
        sentenceA2Pt: "Ela está com uma agenda muito ocupada hoje com reuniões seguidas."
      },
      { english: "Colleague", portuguese: "Colega de trabalho",
        sentenceA1: "He is my colleague.",
        sentenceA2: "My colleague helped me finish the report on Friday.",
        sentenceA1Pt: "Ele é meu colega.",
        sentenceA2Pt: "Meu colega me ajudou a finalizar o relatório na sexta-feira."
      }
],
    culturalTips: [
      {
        title: "Weather is Always Safe",
        titlePt: "Clima é Sempre Seguro",
        content: "In American culture, commenting on the weather is the safest conversation starter. It breaks the ice with anyone — strangers, coworkers, or neighbors.",
        contentPt: "Na cultura americana, comentar sobre o clima é a forma mais segura de iniciar uma conversa. Quebra o gelo com qualquer pessoa — desconhecidos, colegas ou vizinhos."
},
      {
        title: "Sports as Social Currency",
        titlePt: "Esportes como Moeda Social",
        content: "American football (NFL) and basketball (NBA) are hugely popular. Knowing basic teams and recent scores can open many social doors, especially with men.",
        contentPt: "Futebol americano (NFL) e basquete (NBA) são imensamente populares. Conhecer times básicos e resultados recentes pode abrir muitas portas sociais, especialmente com homens."
},
      {
        title: "'What do you do?' is Normal",
        titlePt: "'O que você faz?' é Normal",
        content: "Americans often ask 'What do you do for a living?' soon after meeting. Unlike some cultures, this is not considered rude — it's a standard way to get to know someone.",
        contentPt: "Americanos frequentemente perguntam 'What do you do for a living?' logo após se conhecerem. Ao contrário de algumas culturas, isso não é considerado grosseiro — é uma forma padrão de conhecer alguém."
}
],
  reading: {
      textA1: 'Mark meets his neighbor in the elevator. His neighbor says good morning. Mark says good morning too. The neighbor asks how Mark is doing. Mark says he is fine, thank you. The neighbor asks about the weather. Mark says it is cold today. The neighbor agrees and says they need a jacket. Mark asks if the neighbor is going to work. The neighbor says yes, he works at a bank. Mark says he is a student. They both smile. The elevator arrives at the first floor. The neighbor says have a nice day. Mark says you too. They walk outside together. Mark likes his friendly neighbor.',
      textA1Pt: 'Mark encontra seu vizinho no elevador. O vizinho diz bom dia. Mark diz bom dia também. O vizinho pergunta como Mark está. Mark diz que está bem, obrigado. O vizinho pergunta sobre o clima. Mark diz que está frio hoje. O vizinho concorda e diz que eles precisam de um casaco. Mark pergunta se o vizinho vai trabalhar. O vizinho diz que sim, ele trabalha em um banco. Mark diz que é estudante. Ambos sorriem. O elevador chega ao primeiro andar. O vizinho diz tenha um bom dia. Mark diz igualmente. Eles caminham para fora juntos. Mark gosta do seu vizinho simpático.',
      textA2: 'Small talk is often considered one of the most challenging aspects of learning a new language, not because of its vocabulary or grammar, but because of its cultural nuances. Mark, a Brazilian exchange student living in Brooklyn, quickly learned that Americans use small talk as a social lubricant in almost every interaction. At the coffee shop, the barista would ask \'How\'s your day going?\' while preparing his order. At the grocery store, the cashier might comment on the weather or compliment his jacket. Initially, Mark found these interactions confusing — he was not sure if people genuinely wanted to know how he was doing or if it was just a polite formality. Over time, he realized that the expected response to \'How are you?\' is simply \'Good, thanks! How about you?\' rather than a detailed account of his day. He also noticed that safe topics for small talk include the weather, sports, weekend plans, and local restaurants, while politics, religion, salary, and personal problems are generally avoided with strangers. One of his most memorable small talk experiences happened at a laundromat, where he struck up a conversation with an elderly man named Frank about the best pizza places in the neighborhood. That casual exchange led to a genuine friendship, and Frank eventually invited Mark to his family\'s Thanksgiving dinner.',
      textA2Pt: 'Conversa fiada é frequentemente considerada um dos aspectos mais desafiadores de aprender um novo idioma, não por causa do vocabulário ou gramática, mas por causa de suas nuances culturais. Mark, um estudante de intercâmbio brasileiro morando no Brooklyn, rapidamente aprendeu que americanos usam conversa fiada como um lubrificante social em quase toda interação. Na cafeteria, o barista perguntava \'Como está seu dia?\' enquanto preparava seu pedido. No supermercado, o caixa poderia comentar sobre o clima ou elogiar sua jaqueta. Inicialmente, Mark achava essas interações confusas — ele não tinha certeza se as pessoas genuinamente queriam saber como ele estava ou se era apenas uma formalidade educada. Com o tempo, ele percebeu que a resposta esperada para \'How are you?\' é simplesmente \'Good, thanks! How about you?\' em vez de um relato detalhado do seu dia. Ele também notou que tópicos seguros para conversa fiada incluem clima, esportes, planos de fim de semana e restaurantes locais, enquanto política, religião, salário e problemas pessoais são geralmente evitados com estranhos. Uma de suas experiências mais memoráveis de conversa fiada aconteceu em uma lavanderia, onde ele puxou conversa com um senhor chamado Frank sobre as melhores pizzarias do bairro. Essa troca casual levou a uma amizade genuína, e Frank eventualmente convidou Mark para o jantar de Ação de Graças de sua família.',
      questionsA1: [
        { question: 'What is the main idea of this text?', questionPt: 'Qual é a ideia principal deste texto?', options: ['Mark has a friendly morning chat with his neighbor', 'Mark hates his neighbor', 'Mark is stuck in the elevator', 'Mark goes to a bank'], correctIndex: 0 },
        { question: 'What does "friendly" mean in the text?', questionPt: 'O que significa "friendly" no texto?', options: ['Mean and angry', 'Kind and pleasant', 'Cold and silent', 'Fast and loud'], correctIndex: 1 },
        { question: 'Why do they talk about the weather?', questionPt: 'Por que eles falam sobre o tempo?', options: ['Because they are meteorologists', 'It is a common and polite topic for a quick chat', 'Because it is raining inside', 'To argue'], correctIndex: 1 },
        { question: 'What can we infer about their relationship?', questionPt: 'O que podemos inferir sobre o relacionamento deles?', options: ['They are polite and have a good relationship', 'They are best friends', 'They never talk', 'They are angry at each other'], correctIndex: 0 }
      ],
      questionsA2: [
        { question: 'What is the expected response to \'How are you?\'?', questionPt: 'Qual é a resposta esperada para \'How are you?\'?', options: ['A detailed story', '\'Good, thanks! How about you?\'', 'Ignore the question', '\'I am feeling terrible\''], correctIndex: 1 },
        { question: 'Which topics should be avoided in small talk with strangers?', questionPt: 'Quais tópicos devem ser evitados em conversa fiada com estranhos?', options: ['Weather and sports', 'Politics, religion, and salary', 'Restaurants and movies', 'Weekend plans'], correctIndex: 1 },
        { question: 'Where did Mark meet Frank?', questionPt: 'Onde Mark conheceu Frank?', options: ['At a party', 'At school', 'At a laundromat', 'At a restaurant'], correctIndex: 2 },
        { question: 'What did Frank invite Mark to?', questionPt: 'Para o que Frank convidou Mark?', options: ['A pizza night', 'A baseball game', 'His Thanksgiving dinner', 'A weekend trip'], correctIndex: 2 }
]
},
        simulationTasks: [
      {
            promptPt: "[Colega] \"Como você está hoje?\"",
            expectedEn: "How are you doing today?"
      },
      {
            promptPt: "[Você] Você responde que está bem e pergunta como está o tempo lá fora",
            expectedEn: "I am fine. How is the weather today?"
      },
      {
            promptPt: "[Colega] \"O que você gosta de fazer no tempo livre?\"",
            expectedEn: "What do you like to do in your free time?"
      },
      {
            promptPt: "[Você] Você responde que gosta de ler e assistir filmes",
            expectedEn: "I like to read and watch movies."
      },
      {
            promptPt: "[Você] Você quer perguntar se a pessoa mora aqui há muito tempo",
            expectedEn: "Have you lived here long?"
      },
      {
            promptPt: "[Você] Você quer se despedir dizendo que precisa ir agora",
            expectedEn: "I have to go now."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Be stuck in an elevator with your boss",
            optionAPt: "Ficar preso no elevador com o seu chefe",
            optionBEn: "Be stuck in an elevator with your ex",
            optionBPt: "Ficar preso no elevador com o seu ex"
      },
      {
            optionAEn: "Talk about the weather for 10 minutes",
            optionAPt: "Falar sobre o tempo por 10 minutos",
            optionBEn: "Stand in complete awkward silence",
            optionBPt: "Ficar em completo silêncio constrangedor"
      },
      {
            optionAEn: "Wave back at someone who was waving to the person behind you",
            optionAPt: "Acenar de volta para alguém que estava acenando para a pessoa atrás de você",
            optionBEn: "Call someone by the wrong name confidently",
            optionBPt: "Chamar alguém pelo nome errado com confiança"
      },
      {
            optionAEn: "Always overshare personal information",
            optionAPt: "Sempre compartilhar informações pessoais demais",
            optionBEn: "Never say anything about yourself",
            optionBPt: "Nunca dizer nada sobre você mesmo"
      },
      {
            optionAEn: "Laugh at a joke you didn't hear",
            optionAPt: "Rir de uma piada que você não ouviu",
            optionBEn: "Ask them to repeat the joke three times",
            optionBPt: "Pedir para repetirem a piada três vezes"
      },
      {
            optionAEn: "Have a very loud sneeze in a quiet room",
            optionAPt: "Dar um espirro muito alto em uma sala silenciosa",
            optionBEn: "Have a stomach growl loudly during a meeting",
            optionBPt: "Ter a barriga roncando alto durante uma reunião"
      },
      {
            optionAEn: "Accidentally say 'I love you' at the end of a work call",
            optionAPt: "Dizer sem querer 'eu te amo' no fim de uma ligação de trabalho",
            optionBEn: "Accidentally hang up on someone important",
            optionBPt: "Desligar sem querer na cara de alguém importante"
      }
]
},
  {
  id: "review-3",
  title: "Review 3",
  titlePt: "Revisão 3",
  description: "Review what you've learned in the last 5 scenarios.",
  descriptionPt: "Revise o que você aprendeu nos últimos 5 cenários.",
  icon: "🔄",
  imagePath: "/images/review_3_scene.jpg",
  color: 'mint',
  vocabulary: [
    {
      english: "Fitting room",
      portuguese: "Provador",
      sentenceA1: "Where is the fitting room?",
      sentenceA2: "The fitting rooms are at the back of the store.",
      sentenceA1Pt: "Onde é o provador?",
      sentenceA2Pt: "Os provadores ficam no fundo da loja."
    },
    {
      english: "Size (Small, Medium, Large)",
      portuguese: "Tamanho (P, M, G)",
      sentenceA1: "I need a medium.",
      sentenceA2: "Do you have this in a size small? The medium is too loose.",
      sentenceA1Pt: "Preciso de um médio.",
      sentenceA2Pt: "Tem no tamanho P? O M está muito largo."
    },
    {
      english: "Tight / Loose",
      portuguese: "Apertado / Largo",
      sentenceA1: "This is too tight.",
      sentenceA2: "The pants are tight around the waist. Do you have a larger size?",
      sentenceA1Pt: "Está muito apertado.",
      sentenceA2Pt: "A calça está apertada na cintura. Tem tamanho maior?"
    },
    {
      english: "Receipt",
      portuguese: "Recibo / Nota fiscal",
      sentenceA1: "I need the receipt.",
      sentenceA2: "Keep your receipt in case you need to exchange the item.",
      sentenceA1Pt: "Preciso do recibo.",
      sentenceA2Pt: "Guarde o recibo caso precise trocar o item."
    },
    {
      english: "Foundation",
      portuguese: "Base de maquiagem",
      sentenceA1: "I need foundation.",
      sentenceA2: "I use a light foundation that matches my skin tone.",
      sentenceA1Pt: "Preciso de base.",
      sentenceA2Pt: "Uso uma base leve que combina com meu tom de pele."
    },
    {
      english: "Concealer",
      portuguese: "Corretivo",
      sentenceA1: "I use concealer.",
      sentenceA2: "This concealer covers dark circles very well.",
      sentenceA1Pt: "Uso corretivo.",
      sentenceA2Pt: "Este corretivo cobre olheiras muito bem."
    },
    {
      english: "Moisturizer",
      portuguese: "Hidratante",
      sentenceA1: "I need a moisturizer.",
      sentenceA2: "I apply moisturizer every morning after washing my face.",
      sentenceA1Pt: "Preciso de hidratante.",
      sentenceA2Pt: "Aplico hidratante toda manhã depois de lavar o rosto."
    },
    {
      english: "Cleanser",
      portuguese: "Gel de limpeza / Sabonete facial",
      sentenceA1: "I use a gentle cleanser.",
      sentenceA2: "A good cleanser removes all makeup without drying your skin.",
      sentenceA1Pt: "Uso um limpador suave.",
      sentenceA2Pt: "Um bom limpador remove toda a maquiagem sem ressecar a pele."
    },
    {
      english: "Insurance",
      portuguese: "Seguro",
      sentenceA1: "I want insurance.",
      sentenceA2: "The insurance covers any damage during the rental period.",
      sentenceA1Pt: "Quero seguro.",
      sentenceA2Pt: "O seguro cobre qualquer dano durante o período de aluguel."
    },
    {
      english: "Toll pass",
      portuguese: "Passe de pedágio",
      sentenceA1: "Do I need a toll pass?",
      sentenceA2: "The toll pass is convenient because you do not need to stop.",
      sentenceA1Pt: "Preciso de passe de pedágio?",
      sentenceA2Pt: "O passe de pedágio é prático porque não precisa parar."
    },
    {
      english: "Deposit",
      portuguese: "Depósito / Caução",
      sentenceA1: "How much is the deposit?",
      sentenceA2: "They charged a five hundred dollar deposit on my credit card.",
      sentenceA1Pt: "Quanto é o depósito?",
      sentenceA2Pt: "Cobraram um depósito de quinhentos dólares no meu cartão."
    },
    {
      english: "Full tank",
      portuguese: "Tanque cheio",
      sentenceA1: "The tank is full.",
      sentenceA2: "Please return the car with a full tank or you will be charged.",
      sentenceA1Pt: "O tanque está cheio.",
      sentenceA2Pt: "Devolva o carro com o tanque cheio senão será cobrado a mais."
    },
    {
      english: "Grocery store / Supermarket",
      portuguese: "Supermercado / Mercearia",
      sentenceA1: "I go to the supermarket.",
      sentenceA2: "The grocery store near my house has great organic products.",
      sentenceA1Pt: "Vou ao supermercado.",
      sentenceA2Pt: "O supermercado perto de casa tem ótimos produtos orgânicos."
    },
    {
      english: "Produce section",
      portuguese: "Hortifrúti / FLV",
      sentenceA1: "Fruits are in produce.",
      sentenceA2: "I always start shopping in the produce section.",
      sentenceA1Pt: "Frutas ficam no hortifrúti.",
      sentenceA2Pt: "Sempre começo as compras na seção de hortifrúti."
    },
    {
      english: "Bakery",
      portuguese: "Padaria",
      sentenceA1: "The bakery smells great.",
      sentenceA2: "The bakery makes fresh bread every morning.",
      sentenceA1Pt: "A padaria cheira bem.",
      sentenceA2Pt: "A padaria faz pão fresco toda manhã."
    },
    {
      english: "Deli counter",
      portuguese: "Fiambreria / Frios",
      sentenceA1: "I want cheese from the deli.",
      sentenceA2: "The deli counter has a wide variety of imported cheeses.",
      sentenceA1Pt: "Quero queijo do balcão de frios.",
      sentenceA2Pt: "O balcão de frios tem grande variedade de queijos importados."
    },
    {
      english: "Small talk",
      portuguese: "Conversa informal",
      sentenceA1: "I like small talk.",
      sentenceA2: "Making small talk is a great way to practice English.",
      sentenceA1Pt: "Gosto de conversa informal.",
      sentenceA2Pt: "Conversa informal é ótima para praticar inglês."
    },
    {
      english: "Fingers crossed",
      portuguese: "Dedos cruzados / Torcendo",
      sentenceA1: "Fingers crossed!",
      sentenceA2: "I have a job interview tomorrow. Fingers crossed!",
      sentenceA1Pt: "Estou torcendo!",
      sentenceA2Pt: "Tenho uma entrevista amanhã. Estou torcendo!"
    },
    {
      english: "Catch the game",
      portuguese: "Assistir o jogo",
      sentenceA1: "Did you catch the game?",
      sentenceA2: "Did you catch the game last night? The final was incredible.",
      sentenceA1Pt: "Você assistiu o jogo?",
      sentenceA2Pt: "Assistiu o jogo ontem? O final foi incrível."
    },
    {
      english: "Overtime",
      portuguese: "Hora extra / Prorrogação",
      sentenceA1: "I worked overtime today.",
      sentenceA2: "I had to work overtime to finish the project.",
      sentenceA1Pt: "Fiz hora extra hoje.",
      sentenceA2Pt: "Tive que fazer hora extra para terminar o projeto."
    }
  ],
  dialogues: [
    {
      speaker: "student",
      english: "Excuse me, do you happen to have this sweater in a smaller size?",
      portuguese: "Com licença, por acaso você tem este suéter em um tamanho menor?"
    },
    {
      speaker: "native",
      english: "Let me check the back for you. What size are you currently holding?",
      portuguese: "Deixe-me checar no estoque para você. Qual tamanho você está segurando agora?"
    },
    {
      speaker: "student",
      english: "Hi there, could you help me? I'm having trouble matching my foundation shade.",
      portuguese: "Olá, você poderia me ajudar? Estou tendo dificuldade em encontrar o tom da minha base."
    },
    {
      speaker: "native",
      english: "Of course! Foundation matching can be tricky. Are you looking for full coverage or something light?",
      portuguese: "Claro! Encontrar a base pode ser complicado. Você procura cobertura total ou algo leve?"
    },
    {
      speaker: "native",
      english: "Good afternoon! Welcome to FastDrive Rental. Do you have a reservation?",
      portuguese: "Boa tarde! Bem-vindo à FastDrive Rental. Você tem uma reserva?"
    },
    {
      speaker: "student",
      english: "Good afternoon. Yes, I have a reservation under the name Tati. Here is my confirmation number.",
      portuguese: "Boa tarde. Sim, tenho uma reserva em nome de Tati. Aqui está meu número de confirmação."
    },
    {
      speaker: "student",
      english: "Excuse me, I'm looking for the produce section. Where can I find fresh vegetables?",
      portuguese: "Com licença, estou procurando o setor de hortifrúti. Onde posso encontrar verduras frescas?"
    },
    {
      speaker: "native",
      english: "It's right at the entrance, on your left. We have a great selection of organic lettuce, tomatoes, and apples today.",
      portuguese: "Fica logo na entrada, à sua esquerda. Temos uma ótima seleção de alface, tomates e maçãs orgânicas hoje."
    }
  ],
  dialogues2: [
    {
      speaker: "student",
      english: "Excuse me, could you point me to the hair care section? I'm looking for a heat protectant spray.",
      portuguese: "Com licença, você poderia me indicar a seção de cuidados com o cabelo? Estou procurando um spray protetor térmico."
    },
    {
      speaker: "student",
      english: "Hello, I need assistance. I picked up a rental car this morning, but it's making a strange noise.",
      portuguese: "Olá, preciso de ajuda. Peguei um carro alugado hoje de manhã, mas ele está fazendo um barulho estranho."
    }
  ],
  importantPhrases: [
    {
      pt: "Qual é o horário de funcionamento?",
      en: "What are the opening hours?"
    },
    {
      pt: "Onde é o caixa eletrônico?",
      en: "Where is the ATM?"
    },
    {
      pt: "Posso experimentar isso?",
      en: "Can I try this on?"
    },
    {
      pt: "Quero pintar o cabelo.",
      en: "I want to dye my hair."
    },
    {
      pt: "Minha pele é muito seca.",
      en: "My skin is very dry."
    },
    {
      pt: "Posso ver o catálogo de cores?",
      en: "Can I see the color catalog?"
    },
    {
      pt: "Preciso de uma cadeirinha de bebê.",
      en: "I need a baby seat."
    },
    {
      pt: "O carro é automático ou manual?",
      en: "Is the car automatic or manual?"
    },
    {
      pt: "Tem limite de quilometragem?",
      en: "Is there a mileage limit?"
    },
    {
      pt: "Onde ficam os laticínios?",
      en: "Where is the dairy section?"
    },
    {
      pt: "Esta carne está fresca?",
      en: "Is this meat fresh?"
    },
    {
      pt: "Pode me ajudar a alcançar isso?",
      en: "Can you help me reach this?"
    },
    {
      pt: "Você gosta de esportes?",
      en: "Do you like sports?"
    },
    {
      pt: "Assisti a um filme ótimo.",
      en: "I watched a great movie."
    },
    {
      pt: "A comida estava deliciosa.",
      en: "The food was delicious."
    }
  ],
  problems: [
    {
      descriptionPt: "O seu cartão de crédito foi recusado na maquininha."
    },
    {
      descriptionPt: "Você comprou uma roupa ontem, mas ela descosturou na primeira vez que usou."
    },
    {
      descriptionPt: "O cabeleireiro cortou seu cabelo muito mais curto do que você pediu."
    },
    {
      descriptionPt: "Você teve uma reação alérgica a um creme que aplicaram na sua pele."
    },
    {
      descriptionPt: "O pneu do carro alugado furou no meio da estrada."
    },
    {
      descriptionPt: "Quando você foi pegar o carro, ele já tinha um grande arranhão na porta."
    },
    {
      descriptionPt: "Você derrubou um vidro de molho no chão do mercado e quebrou."
    },
    {
      descriptionPt: "O caixa cobrou o valor de um item duas vezes por engano."
    },
    {
      descriptionPt: "A pessoa fez uma piada que você não entendeu, e você precisa dizer isso de forma educada."
    },
    {
      descriptionPt: "Você não quer falar sobre o assunto que a pessoa puxou e quer mudar de assunto educadamente."
    }
  ]
},
  {
    id: 'slangs',
    speakingQuestions: [
    {
        "question": "Do you use a lot of slang when speaking Portuguese?",
        "questionPt": "Você usa muitas gírias quando fala português?",
        "hintA1": "Yes, I use many slangs with friends.",
        "hintA2": "Yes, I use a lot of slang, especially when I'm texting or hanging out with my friends."
    },
    {
        "question": "What is your favorite English slang word?",
        "questionPt": "Qual é a sua gíria favorita em inglês?",
        "hintA1": "My favorite slang is 'cool'.",
        "hintA2": "I really like the word 'awesome' because it sounds very positive."
    },
    {
        "question": "Do you think it's important to learn slang to speak fluently?",
        "questionPt": "Você acha importante aprender gírias para falar fluentemente?",
        "hintA1": "Yes, people use slangs every day.",
        "hintA2": "Yes, because native speakers use slang all the time in real life conversations."
    }
,
    {
        "question": "Did you learn any new slang words this week?",
        "questionPt": "Você aprendeu alguma gíria nova esta semana?",
        "hintA1": "Yes, I learned the word chill.",
        "hintA2": "Yes, my friend taught me what 'no cap' means and now I use it all the time."
    },
    {
        "question": "Do you think slang changes too quickly?",
        "questionPt": "Você acha que as gírias mudam rápido demais?",
        "hintA1": "Yes, very quickly.",
        "hintA2": "Definitely. Young people on TikTok create new expressions every single week."
    },
    {
        "question": "What slang did you use when you were a teenager?",
        "questionPt": "Que gíria você usava quando era adolescente?",
        "hintA1": "I used to say 'cool' a lot.",
        "hintA2": "We used to say 'rad' and 'awesome' all the time back in high school."
    },
    {
        "question": "Do you use emojis when you send messages?",
        "questionPt": "Você usa emojis quando manda mensagens?",
        "hintA1": "Yes, I love using emojis.",
        "hintA2": "I use them in almost every message because they help show my feelings."
    },
    {
        "question": "Did anyone ever misunderstand your slang?",
        "questionPt": "Alguém já não entendeu a sua gíria?",
        "hintA1": "Yes, my grandmother did not understand.",
        "hintA2": "Yes, my boss was really confused when I accidentally used a very informal expression."
    }
    ],
    title: 'American Slangs',
    titlePt: 'Gírias Americanas',
    description: 'Learn popular everyday slang and expressions used by Americans.',
    descriptionPt: 'Aprenda gírias e expressões populares do dia a dia americano.',
    icon: '🤙',
    color: 'rose',
    imagePath: '/images/slangs_scene.png',
    dialogues: [],
    dialogueSets: [
      {
        title: 'Everyday Expressions',
        titlePt: 'Expressões do Dia a Dia',
        icon: '🗣️',
        dialogues: [
          { speaker: 'native', english: "Dude, that concert last night was totally lit! Did you have fun?", portuguese: "Cara, aquele show ontem à noite foi totalmente incrível! Você se divertiu?" },
          { speaker: 'student', english: "No cap! The energy in the crowd was unreal. I'm still hyped about it.", portuguese: "Verdade! A energia na multidão estava surreal. Ainda estou animada com isso." },
          { speaker: 'native', english: "Same here. But honestly, my feet are killing me. We were jumping the whole time.", portuguese: "Eu também. Mas honestamente, meus pés estão me matando. Ficamos pulando o tempo todo." },
          { speaker: 'student', english: "Totally worth it though. The lead singer was lowkey amazing live.", portuguese: "Mas valeu totalmente a pena. O vocalista foi incrivelmente ('lowkey') maravilhoso ao vivo." },
          { speaker: 'native', english: "Lowkey? Nah, he was highkey the best part of the show! He really went off.", portuguese: "Lowkey? Não, ele foi totalmente ('highkey') a melhor parte do show! Ele realmente arrasou ('went off')." },
          { speaker: 'student', english: "For real. I thought the tickets were pricey, but it was a vibe.", portuguese: "Com certeza. Achei que os ingressos estavam caros, mas foi uma vibe." },
          { speaker: 'native', english: "Absolutely. Hey, speaking of vibes, are you down to grab brunch tomorrow?", portuguese: "Absolutamente. Ei, falando em vibes, você topa tomar um brunch amanhã?" },
          { speaker: 'student', english: "I'm so down. I need some good pancakes after sleeping in.", portuguese: "Topo demais. Preciso de umas boas panquecas depois de dormir até tarde." },
          { speaker: 'native', english: "Say less. I know a place that's bussin'. I'll text you the deets later.", portuguese: "Não diga mais nada. Conheço um lugar que é muito bom ('bussin'). Te mando os detalhes depois." },
          { speaker: 'student', english: "Bet! Catch you tomorrow.", portuguese: "Fechado ('Bet')! Te vejo amanhã." }
]
},
      {
        title: 'At the Office / School',
        titlePt: 'No Escritório / Escola',
        icon: '🏢',
        dialogues: [
          { speaker: 'native', english: "Hey, heads up — the boss wants us to circle back on the marketing project.", portuguese: "Ei, atenção — o chefe quer que a gente retome ('circle back') o projeto de marketing." },
          { speaker: 'student', english: "Oh shoot. I totally spaced on that. Is he bent out of shape about the delay?", portuguese: "Nossa. Esqueci completamente. Ele está bravo ('bent out of shape') com o atraso?" },
          { speaker: 'native', english: "Nah, he's pretty chill. He just wants us to touch base by Friday morning.", portuguese: "Não, ele é bem tranquilo. Ele só quer que a gente dê um retorno ('touch base') até sexta de manhã." },
          { speaker: 'student', english: "Got it. I've been super swamped with emails today. Can we put a pin in the other tasks?", portuguese: "Entendi. Estive super atarefada ('swamped') com e-mails hoje. Podemos adiar ('put a pin') as outras tarefas?" },
          { speaker: 'native', english: "Definitely. Let's prioritize this. Do you think you can get the draft done today?", portuguese: "Definitivamente. Vamos priorizar isso. Você acha que consegue terminar o rascunho hoje?" },
          { speaker: 'student', english: "I'll knock it out tonight after hours and shoot you an email.", portuguese: "Vou terminar de uma vez ('knock it out') hoje após o expediente e te mandar um e-mail." },
          { speaker: 'native', english: "Awesome, you're a lifesaver. Let me know if you hit a roadblock and need backup.", portuguese: "Ótimo, você me salvou a vida. Me avisa se encontrar um obstáculo ('hit a roadblock') e precisar de ajuda." },
          { speaker: 'student', english: "Will do! Let's touch base tomorrow to review it together.", portuguese: "Farei isso! Vamos nos falar amanhã para revisarmos juntos." },
          { speaker: 'native', english: "Sounds like a plan. See you at the water cooler later.", portuguese: "Parece um bom plano. Te vejo no bebedouro mais tarde." }
]
}
],
            importantPhrases: [
      {
            pt: "Estou exausto (beat).",
            en: "I am beat."
      },
      {
            pt: "Isso é loucura (nuts).",
            en: "That is nuts."
      },
      {
            pt: "Me dá um tempo (give me a break).",
            en: "Give me a break."
      },
      {
            pt: "Bora (let's go).",
            en: "Let's go."
      },
      {
            pt: "Tô de boa (I am chilling).",
            en: "I am chilling."
      },
      {
            pt: "Isso é incrível (dope).",
            en: "That is dope."
      }
],
        problems: [
      {
            descriptionPt: "Alguém usou uma gíria que você nunca ouviu antes."
      },
      {
            descriptionPt: "Você usou uma gíria errada e todos riram, como você se desculpa brincando?"
      }
],
    vocabulary: [
      { english: "Lit / Fire", portuguese: "Massa / Muito legal / Demais",
        sentenceA1: "That party was lit!",
        sentenceA2: "The concert last night was absolutely lit.",
        sentenceA1Pt: "Aquela festa foi demais!",
        sentenceA2Pt: "O show ontem à noite foi absolutamente demais."
      },
      { english: "No cap", portuguese: "Sem mentira / Verdade",
        sentenceA1: "No cap, it was amazing.",
        sentenceA2: "No cap, that was the best pizza I ever tasted.",
        sentenceA1Pt: "Sem mentira, foi incrível.",
        sentenceA2Pt: "Sem mentira, foi a melhor pizza que já comi."
      },
      { english: "Hyped", portuguese: "Empolgado",
        sentenceA1: "I am so hyped!",
        sentenceA2: "Everyone is hyped about the new Marvel movie.",
        sentenceA1Pt: "Estou muito empolgado!",
        sentenceA2Pt: "Todo mundo está empolgado com o novo filme da Marvel."
      },
      { english: "Down (to do something)", portuguese: "Topar / Estar a fim",
        sentenceA1: "I am down to go.",
        sentenceA2: "Are you down to try the new sushi restaurant?",
        sentenceA1Pt: "Estou a fim de ir.",
        sentenceA2Pt: "Está a fim de experimentar o novo restaurante de sushi?"
      },
      { english: "Deets", portuguese: "Detalhes",
        sentenceA1: "Give me the deets.",
        sentenceA2: "Send me the deets about the party.",
        sentenceA1Pt: "Me dá os detalhes.",
        sentenceA2Pt: "Manda os detalhes sobre a festa."
      },
      { english: "Heads up", portuguese: "Aviso / Alerta",
        sentenceA1: "Heads up, it is raining.",
        sentenceA2: "Heads up, the boss is in a bad mood today.",
        sentenceA1Pt: "Só avisando, está chovendo.",
        sentenceA2Pt: "Só avisando, o chefe está de mau humor hoje."
      },
      { english: "Spaced out", portuguese: "Distraído(a) / No mundo da lua",
        sentenceA1: "Sorry, I spaced out.",
        sentenceA2: "I completely spaced out during the meeting.",
        sentenceA1Pt: "Desculpa, me distraí.",
        sentenceA2Pt: "Me distraí completamente durante a reunião."
      },
      { english: "Swamped", portuguese: "Atolado(a) de trabalho",
        sentenceA1: "I am swamped with work.",
        sentenceA2: "I cannot go out tonight, I am totally swamped.",
        sentenceA1Pt: "Estou atolado de trabalho.",
        sentenceA2Pt: "Não posso sair hoje, estou totalmente atolado."
      },
      { english: "Chill", portuguese: "Relaxar / Tranquilo",
        sentenceA1: "Let us chill at home.",
        sentenceA2: "We stayed home and chilled all weekend watching movies.",
        sentenceA1Pt: "Vamos relaxar em casa.",
        sentenceA2Pt: "Ficamos em casa e relaxamos o fim de semana assistindo filmes."
      },
      { english: "Ghost", portuguese: "Ignorar / Sumir",
        sentenceA1: "He ghosted me.",
        sentenceA2: "She ghosted me after our second date.",
        sentenceA1Pt: "Ele me deixou no vácuo.",
        sentenceA2Pt: "Ela me deixou no vácuo depois do segundo encontro."
      },
      { english: "Flex", portuguese: "Exibir-se / Ostentar",
        sentenceA1: "Stop flexing!",
        sentenceA2: "He always flexes his new sneakers on social media.",
        sentenceA1Pt: "Para de se exibir!",
        sentenceA2Pt: "Ele sempre se exibe com seus tênis novos nas redes sociais."
      },
      { english: "Salty", portuguese: "Irritado(a) / Ressentido(a)",
        sentenceA1: "Why are you so salty?",
        sentenceA2: "She got salty because nobody liked her photo.",
        sentenceA1Pt: "Por que está tão irritado?",
        sentenceA2Pt: "Ela ficou irritada porque ninguém curtiu a foto dela."
      },
      { english: "Tea", portuguese: "Fofoca",
        sentenceA1: "Spill the tea!",
        sentenceA2: "I heard some tea about our neighbors.",
        sentenceA1Pt: "Conta a fofoca!",
        sentenceA2Pt: "Soube de uma fofoca sobre nossos vizinhos."
      },
      { english: "Bet", portuguese: "Pode apostar / Com certeza",
        sentenceA1: "Are we going? Bet!",
        sentenceA2: "You think we can finish on time? Bet, let's start.",
        sentenceA1Pt: "Nós vamos? Com certeza!",
        sentenceA2Pt: "Você acha que podemos terminar no prazo? Com certeza, vamos começar."
      },
      { english: "Bummer", portuguese: "Que pena / Chateação",
        sentenceA1: "That is a bummer.",
        sentenceA2: "The concert was canceled. What a bummer!",
        sentenceA1Pt: "Que pena.",
        sentenceA2Pt: "O show foi cancelado. Que chateação!"
      },
      { english: "Slay", portuguese: "Arrasar",
        sentenceA1: "You slay in that outfit!",
        sentenceA2: "She did an amazing job on the presentation, she really slayed.",
        sentenceA1Pt: "Você arrasou com essa roupa!",
        sentenceA2Pt: "Ela fez um trabalho incrível na apresentação, ela realmente arrasou."
      },
      { english: "For real", portuguese: "Sério / De verdade",
        sentenceA1: "Are you for real?",
        sentenceA2: "I got a promotion, for real! I'm so excited.",
        sentenceA1Pt: "É sério?",
        sentenceA2Pt: "Fui promovido, de verdade! Estou muito animado."
      }
],
    culturalTips: [
      {
        title: "Slang Evolves Fast",
        titlePt: "Gírias Evoluem Rápido",
        content: "American slang changes constantly, especially online. What was cool in 2020 may already be 'cringe' today. When in doubt, observe and listen before using new slang.",
        contentPt: "As gírias americanas mudam constantemente, especialmente online. O que era legal em 2020 pode já ser 'brega' hoje. Na dúvida, observe e ouça antes de usar novas gírias."
},
      {
        title: "'No Cap' & Gen-Z Speak",
        titlePt: "'No Cap' e o Idioma Gen-Z",
        content: "'No cap' means 'for real / no lie'. Other Gen-Z essentials: 'bussin' (delicious), 'slay' (to do something great), 'vibe check' (testing someone's energy). These are now mainstream!",
        contentPt: "'No cap' significa 'de verdade / sem mentira'. Outros essenciais Gen-Z: 'bussin' (delicioso), 'slay' (arrasar), 'vibe check' (testar a energia de alguém). Já são mainstream!"
},
      {
        title: "Office Jargon is Real",
        titlePt: "Jargão de Escritório é Real",
        content: "'Circle back', 'touch base', 'take this offline' — American workplaces have their own dialect! Understanding office slang will help you feel confident in professional settings.",
        contentPt: "'Circle back', 'touch base', 'take this offline' — os ambientes de trabalho americanos têm seu próprio dialeto! Entender o jargão de escritório ajudará a se sentir confiante em ambientes profissionais."
}
],
  reading: {
      textA1: 'Lucas is in New York. His American friend says many new words. His friend says \'What\'s up?\' Lucas does not understand. His friend explains it means \'How are you?\' His friend also says \'That\'s cool!\' Lucas learns it means \'That is nice.\' They go to a restaurant. The food is very good. His friend says \'This is awesome!\' Lucas learns another new word. After lunch, his friend says \'Let\'s hang out later.\' Lucas asks what it means. His friend says it means spending time together. Lucas writes all the new words in his notebook. He wants to remember them. He thinks American English is fun but sometimes confusing.',
      textA1Pt: 'Lucas está em Nova York. Seu amigo americano diz muitas palavras novas. Seu amigo diz \'What\'s up?\' Lucas não entende. Seu amigo explica que significa \'Como você está?\' Seu amigo também diz \'That\'s cool!\' Lucas aprende que significa \'Isso é legal.\' Eles vão a um restaurante. A comida é muito boa. Seu amigo diz \'This is awesome!\' Lucas aprende outra palavra nova. Depois do almoço, seu amigo diz \'Let\'s hang out later.\' Lucas pergunta o que significa. Seu amigo diz que significa passar tempo juntos. Lucas escreve todas as palavras novas no caderno. Ele quer lembrar delas. Ele acha que o inglês americano é divertido mas às vezes confuso.',
      textA2: 'American English is full of slang expressions that can leave non-native speakers completely lost in a conversation. Lucas, a university student from Belo Horizonte, experienced this culture shock when he started hanging out with his American roommate, Jake, in their shared apartment in the East Village. On his very first evening, Jake came home and said \'Dude, I\'m totally beat. Work was insane today.\' Lucas had to process three pieces of slang in one sentence: \'dude\' (a casual way to address someone), \'beat\' (extremely tired), and \'insane\' (used positively to mean crazy or intense). Over the following weeks, Lucas compiled an entire vocabulary list of informal expressions. He learned that \'gonna\' means \'going to,\' \'wanna\' means \'want to,\' and \'gotta\' means \'got to\' or \'have to.\' He discovered that \'No worries\' is a very common way to say \'You are welcome,\' and that \'My bad\' is a casual apology meaning \'It was my mistake.\' Some expressions were trickier to understand, like \'It\'s not rocket science\' (it\'s not that difficult), \'Break a leg\' (good luck, typically said before a performance), and \'Hit the sack\' (go to sleep). Perhaps the most confusing moment came when Jake said \'I\'m down\' to mean \'I agree\' or \'I want to join,\' because Lucas initially thought it meant Jake was feeling sad. Understanding slang became Lucas\'s secret weapon for fitting in and making genuine connections with native speakers.',
      textA2Pt: 'O inglês americano é cheio de expressões de gíria que podem deixar falantes não nativos completamente perdidos em uma conversa. Lucas, um estudante universitário de Belo Horizonte, experimentou esse choque cultural quando começou a andar com seu colega de quarto americano, Jake, no apartamento compartilhado deles no East Village. Na sua primeira noite, Jake chegou em casa e disse \'Dude, I\'m totally beat. Work was insane today.\' Lucas teve que processar três gírias em uma frase: \'dude\' (uma forma casual de se dirigir a alguém), \'beat\' (extremamente cansado), e \'insane\' (usado positivamente para significar louco ou intenso). Nas semanas seguintes, Lucas compilou uma lista inteira de vocabulário de expressões informais. Ele aprendeu que \'gonna\' significa \'going to,\' \'wanna\' significa \'want to,\' e \'gotta\' significa \'got to\' ou \'have to.\' Ele descobriu que \'No worries\' é uma forma muito comum de dizer \'De nada,\' e que \'My bad\' é um pedido de desculpas casual significando \'Foi meu erro.\' Algumas expressões eram mais difíceis de entender, como \'It\'s not rocket science\' (não é tão difícil), \'Break a leg\' (boa sorte, normalmente dito antes de uma performance), e \'Hit the sack\' (ir dormir). Talvez o momento mais confuso foi quando Jake disse \'I\'m down\' para significar \'Eu concordo\' ou \'Eu quero participar,\' porque Lucas inicialmente pensou que significava que Jake estava triste. Entender gírias se tornou a arma secreta de Lucas para se encaixar e fazer conexões genuínas com falantes nativos.',
      questionsA1: [
        { question: 'What is the main message of the text?', questionPt: 'Qual é a mensagem principal do texto?', options: ['Lucas is learning informal American expressions', 'Lucas is eating at a good restaurant', 'Lucas is angry at his friend', 'Lucas is buying a notebook'], correctIndex: 0 },
        { question: 'What does "hang out" mean?', questionPt: 'O que significa "hang out"?', options: ['To hang clothes on a line', 'To spend time relaxing with friends', 'To go to sleep', 'To run away'], correctIndex: 1 },
        { question: 'Why does Lucas write the new words in his notebook?', questionPt: 'Por que Lucas escreve as novas palavras em seu caderno?', options: ['Because he wants to forget them', 'Because his friend forces him to', 'To help him remember them later', 'To sell the notebook'], correctIndex: 2 },
        { question: 'What can we infer about Lucas\'s attitude?', questionPt: 'O que podemos inferir sobre a atitude de Lucas?', options: ['He is curious and wants to learn', 'He hates English', 'He thinks everything is boring', 'He is very sad'], correctIndex: 0 }
      ],
      questionsA2: [
        { question: 'What does \'I\'m beat\' mean?', questionPt: 'O que significa \'I\'m beat\'?', options: ['I lost a fight', 'I\'m extremely tired', 'I\'m hungry', 'I\'m excited'], correctIndex: 1 },
        { question: 'What does \'My bad\' mean?', questionPt: 'O que significa \'My bad\'?', options: ['I\'m angry', 'That\'s bad news', 'It was my mistake', 'I don\'t care'], correctIndex: 2 },
        { question: 'What does \'Hit the sack\' mean?', questionPt: 'O que significa \'Hit the sack\'?', options: ['Fight someone', 'Go to sleep', 'Leave quickly', 'Start working'], correctIndex: 1 },
        { question: 'Why was \'I\'m down\' confusing for Lucas?', questionPt: 'Por que \'I\'m down\' foi confuso para Lucas?', options: ['It means \'I\'m sad\' in other contexts', 'He never heard it before', 'Jake was whispering', 'It was in a different language'], correctIndex: 0 }
]
},
            simulationTasks: [
      {
            promptPt: "[Amigo] \"E aí, quais são os planos para hoje à noite?\"",
            expectedEn: "Hey, what are the plans for tonight?"
      },
      {
            promptPt: "[Você] Você responde que está muito animado (hyped) para ir ao show.",
            expectedEn: "I am really hyped to go to the concert."
      },
      {
            promptPt: "[Amigo] \"Sem mentira (No cap), vai ser incrível (lit)!\"",
            expectedEn: "No cap, it is going to be lit!"
      },
      {
            promptPt: "[Você] Você quer dizer que a banda manda muito bem (went off) ao vivo.",
            expectedEn: "The band really goes off live."
      },
      {
            promptPt: "[Amigo] \"Com certeza (For real). Você topa (down to) comer algo depois?\"",
            expectedEn: "For real. Are you down to grab food after?"
      },
      {
            promptPt: "[Você] Você concorda, dizendo para ele te mandar os detalhes depois (deets).",
            expectedEn: "Bet! Just text me the deets later."
      }
],
    wouldYouRather: [
      {
            optionAEn: "Use outdated slang from the 90s all the time",
            optionAPt: "Usar gírias antigas dos anos 90 o tempo todo",
            optionBEn: "Use modern Gen Z slang but totally wrong",
            optionBPt: "Usar gírias modernas da Geração Z mas totalmente errado"
      },
      {
            optionAEn: "Call everyone 'bro' or 'dude'",
            optionAPt: "Chamar todo mundo de 'bro' ou 'dude'",
            optionBEn: "Call everyone 'boss' or 'chief'",
            optionBPt: "Chamar todo mundo de 'boss' ou 'chief'"
      },
      {
            optionAEn: "Misunderstand a slang word and get offended",
            optionAPt: "Entender mal uma gíria e ficar ofendido",
            optionBEn: "Use a slang word that accidentally offends someone",
            optionBPt: "Usar uma gíria que ofende alguém sem querer"
      },
      {
            optionAEn: "Say 'lit' in a serious business meeting",
            optionAPt: "Dizer 'lit' em uma reunião de negócios séria",
            optionBEn: "Say 'no cap' during a job interview",
            optionBPt: "Dizer 'no cap' durante uma entrevista de emprego"
      },
      {
            optionAEn: "Only speak using idioms",
            optionAPt: "Falar usando apenas expressões idiomáticas",
            optionBEn: "Never use any slang at all and sound like a robot",
            optionBPt: "Nunca usar gírias e soar como um robô"
      },
      {
            optionAEn: "Sound like a local but have bad grammar",
            optionAPt: "Soar como um nativo mas ter gramática ruim",
            optionBEn: "Have perfect grammar but a strong foreign accent",
            optionBPt: "Ter gramática perfeita mas um sotaque estrangeiro forte"
      },
      {
            optionAEn: "Have to explain American slang to your grandparents",
            optionAPt: "Ter que explicar gírias americanas para seus avós",
            optionBEn: "Have your grandparents use American slang on you",
            optionBPt: "Ter seus avós usando gírias americanas com você"
      }
]
}
];

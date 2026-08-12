const fs = require('fs');
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

const missing = {
  "I'm from Brazil": { a1: "I'm from Brazil.", a1pt: "Eu sou do Brasil.", a2: "I'm from Brazil, but I have been living in the US for two years.", a2pt: "Sou do Brasil, mas moro nos EUA há dois anos." },
  "I'm ... years old": { a1: "I'm 30 years old.", a1pt: "Eu tenho 30 anos.", a2: "I'm 28 years old and I work as an engineer.", a2pt: "Tenho 28 anos e trabalho como engenheiro(a)." },
  "I'm excited": { a1: "I'm excited about this trip!", a1pt: "Estou animado(a) com esta viagem!", a2: "I'm really excited to be here for the first time.", a2pt: "Estou muito animado(a) de estar aqui pela primeira vez." },
  "How's it going?": { a1: "Hey, how's it going?", a1pt: "E aí, como vai?", a2: "How's it going? I haven't seen you since last week.", a2pt: "Como vai? Não te vejo desde a semana passada." },
  "What's up?": { a1: "What's up? All good?", a1pt: "E aí, tudo bem?", a2: "What's up? I heard you started a new job.", a2pt: "E aí? Soube que você começou um emprego novo." },
};

let count = 0;
for (const word of Object.keys(missing)) {
  const s = missing[word];
  const marker = 'english: "' + word + '"';
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.log('NOT FOUND: ' + word);
    continue;
  }
  
  // Find the closing } of this object
  let objStart = idx;
  while (objStart > 0 && content[objStart] !== '{') objStart--;
  let bd = 1, objEnd = objStart + 1;
  while (bd > 0 && objEnd < content.length) {
    if (content[objEnd] === '{') bd++;
    if (content[objEnd] === '}') bd--;
    objEnd++;
  }
  
  const objContent = content.substring(objStart, objEnd);
  if (objContent.includes('sentenceA1:')) continue;
  
  const closingBrace = objStart + objContent.length - 1;
  const newFields = `,\n      sentenceA1: ${JSON.stringify(s.a1)},\n      sentenceA2: ${JSON.stringify(s.a2)},\n      sentenceA1Pt: ${JSON.stringify(s.a1pt)},\n      sentenceA2Pt: ${JSON.stringify(s.a2pt)}\n    `;
  
  content = content.substring(0, closingBrace) + newFields + content.substring(closingBrace);
  count++;
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Fixed ' + count + ' remaining words.');

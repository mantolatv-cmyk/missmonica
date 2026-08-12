const fs = require('fs');
let content = fs.readFileSync('data/scenarios.ts', 'utf8');

const replacements = [
  // Scenario 6: Restaurant (John)
  {
    find: /questionsA1: \[\s*\{\s*question: ["']What does John want to eat\?["'][\s\S]*?\]/,
    replace: `questionsA1: [
        { question: 'What is the main topic of the text?', questionPt: 'Qual é o tópico principal do texto?', options: ['John cooking at home', 'John\\'s experience eating at a restaurant', 'John working as a waiter', 'John buying groceries'], correctIndex: 1 },
        { question: 'What does "leaves a tip" mean?', questionPt: 'O que significa "leaves a tip"?', options: ['He leaves extra money for the good service', 'He leaves his hat on the table', 'He leaves without paying', 'He gives a piece of advice'], correctIndex: 0 },
        { question: 'Why does John ask for the check?', questionPt: 'Por que John pede a conta?', options: ['Because he wants more food', 'Because he is ready to pay and leave', 'Because he didn\\'t like the food', 'Because he wants to read it'], correctIndex: 1 },
        { question: 'What can we infer about John\\'s meal?', questionPt: 'O que podemos inferir sobre a refeição de John?', options: ['He hated it', 'He didn\\'t finish it', 'He enjoyed it very much', 'It was too spicy'], correctIndex: 2 },
      ]`
  },
  {
    find: /questionsA2: \[\s*\{\s*question: ["']Where is the restaurant located\?["'][\s\S]*?\]/,
    replace: `questionsA2: [
        { question: 'What is the main idea of this short passage?', questionPt: 'Qual é a ideia principal desta curta passagem?', options: ['A positive dining out experience', 'A complaint about bad service', 'A recipe for a cheeseburger', 'Directions to a restaurant'], correctIndex: 0 },
        { question: 'What is the best synonym for "generous" as used in the text?', questionPt: 'Qual é o melhor sinônimo para "generous" como usado no texto?', options: ['Mean', 'Small', 'Plentiful / Liberal', 'Selfish'], correctIndex: 2 },
        { question: 'Why did John leave a 20% tip?', questionPt: 'Por que John deixou uma gorjeta de 20%?', options: ['Because it was mandatory', 'Because the service was excellent', 'Because the food was bad', 'Because he didn\\'t know the math'], correctIndex: 1 },
        { question: 'What does "dine out" mean?', questionPt: 'O que significa "dine out"?', options: ['Eat outside in the park', 'Eat a meal at a restaurant', 'Cook a meal at home', 'Skip a meal'], correctIndex: 1 },
      ]`
  }
];

let updatedCount = 0;
for (const rep of replacements) {
  if (content.match(rep.find)) {
    content = content.replace(rep.find, rep.replace);
    updatedCount++;
  } else {
    console.log("Could not find match for one replacement in scenarios.ts:", rep.find);
  }
}

fs.writeFileSync('data/scenarios.ts', content, 'utf8');
console.log('Successfully updated ' + updatedCount + ' question blocks for scenario 6.');

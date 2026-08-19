const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scenariosFilePath = path.join(__dirname, 'data', 'scenarios.ts');

// Create a small ts-node script to extract the actual array as JSON
const extractorScript = `
import { scenarios } from './data/scenarios';
console.log(JSON.stringify(scenarios));
`;

fs.writeFileSync('extractor.ts', extractorScript, 'utf-8');
const result = execSync('npx tsx extractor.ts', { cwd: __dirname }).toString();
const scenarios = JSON.parse(result);

// Find 'airport' index
const airportIndex = scenarios.findIndex(s => s.id === 'airport');

// Group into sets of 5 starting from airport
const group1 = scenarios.slice(airportIndex, airportIndex + 5);
const group2 = scenarios.slice(airportIndex + 5, airportIndex + 10);
const group3 = scenarios.slice(airportIndex + 10, airportIndex + 15);

function generateReview(groupId, groupScenarios) {
  let vocabulary = [];
  let dialogues = [];
  let dialogues2 = [];
  let importantPhrases = [];
  let problems = [];

  groupScenarios.forEach(s => {
    if (s.vocabulary) vocabulary = vocabulary.concat(s.vocabulary.slice(0, 4)); // take 4 from each
    if (s.dialogues) dialogues = dialogues.concat(s.dialogues.slice(0, 2)); // take 2 from each
    if (s.dialogues2) dialogues2 = dialogues2.concat(s.dialogues2.slice(0, 1));
    if (s.importantPhrases) importantPhrases = importantPhrases.concat(s.importantPhrases.slice(0, 3));
    if (s.problems) problems = problems.concat(s.problems);
  });

  return {
    id: `review-${groupId}`,
    title: `Review ${groupId}`,
    titlePt: `Revisão ${groupId}`,
    description: `Review what you've learned in the last 5 scenarios.`,
    descriptionPt: `Revise o que você aprendeu nos últimos 5 cenários.`,
    icon: '🔄',
    imagePath: '/images/scenarios/tech.jpg', // fallback image
    vocabulary: vocabulary,
    dialogues: dialogues,
    dialogues2: dialogues2.length > 0 ? dialogues2 : undefined,
    importantPhrases: importantPhrases,
    problems: problems
  };
}

const review1 = generateReview(1, group1);
const review2 = generateReview(2, group2);
const review3 = generateReview(3, group3);

// Now we need to inject them into the file
let fileContent = fs.readFileSync(scenariosFilePath, 'utf-8');

function injectAfter(id, reviewObj) {
  const injectionString = JSON.stringify(reviewObj, null, 2).replace(/\"([a-zA-Z0-9_]+)\":/g, '$1:');
  
  // Find the end of the object with the given id
  const idRegex = new RegExp(`{\\s*id:\\s*'${id}'`);
  const match = idRegex.exec(fileContent);
  if (!match) return;
  
  let startIdx = match.index;
  let braceCount = 0;
  let endIdx = -1;
  
  for (let i = startIdx; i < fileContent.length; i++) {
      if (fileContent[i] === '{') braceCount++;
      if (fileContent[i] === '}') braceCount--;
      
      if (braceCount === 0 && i > startIdx) {
          endIdx = i + 1;
          if (fileContent[endIdx] === ',') {
              endIdx++;
          }
          break;
      }
  }
  
  // Insert the review object right after this scenario
  fileContent = fileContent.substring(0, endIdx) + '\n  ' + injectionString + ',' + fileContent.substring(endIdx);
}

// Ensure they are injected in reverse order so the indices don't shift earlier logic
// The last item of group3 is group3[4].id
if (group3.length === 5) injectAfter(group3[4].id, review3);
if (group2.length === 5) injectAfter(group2[4].id, review2);
if (group1.length === 5) injectAfter(group1[4].id, review1);

fs.writeFileSync(scenariosFilePath, fileContent, 'utf-8');
console.log('Reviews injected!');

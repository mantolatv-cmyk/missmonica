const fs = require('fs');
let lines = fs.readFileSync('data/scenarios.ts', 'utf8').split(/\\r?\\n/);

let out = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('export interface VocabularyItem {')) {
    out.push("export interface VocabularyItem {");
    out.push("  english: string;");
    out.push("  portuguese: string;");
    out.push("  sentenceA1?: string;");
    out.push("  sentenceA2?: string;");
    out.push("  sentenceA1Pt?: string;");
    out.push("  sentenceA2Pt?: string;");
    out.push("}");
    // skip until '}'
    while(lines[i] !== '}') i++;
    continue;
  }
  
  if (lines[i].startsWith('export interface CulturalTipData {')) {
    out.push("export interface CulturalTipData {");
    out.push("  title: string;");
    out.push("  titlePt: string;");
    out.push("  content: string;");
    out.push("  contentPt: string;");
    out.push("  contentA1?: string;");
    out.push("  contentA2?: string;");
    out.push("  contentA1Pt?: string;");
    out.push("  contentA2Pt?: string;");
    out.push("}");
    while(lines[i] !== '}') i++;
    continue;
  }

  if (lines[i].startsWith('export interface Scenario {')) {
    out.push("export interface Scenario {");
    out.push("  id: string;");
    out.push("  title: string;");
    out.push("  titlePt: string;");
    out.push("  description: string;");
    out.push("  descriptionPt: string;");
    out.push("  icon: string;");
    out.push("  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose' | 'orange' | 'blue' | 'indigo';");
    out.push("  imagePath: string;");
    out.push("  dialogues: DialogueLine[];");
    out.push("  dialogues2?: DialogueLine[];");
    out.push("  dialoguesBeginner?: DialogueLine[];");
    out.push("  dialoguesBeginner2?: DialogueLine[];");
    out.push("  vocabulary: VocabularyItem[];");
    out.push("  flashcards?: FlashcardItem[];");
    out.push("  culturalTips?: CulturalTipData[];");
    out.push("  culturalTipsEurope?: CulturalTipData[];");
    out.push("  speakingQuestions?: SpeakingQuestion[];");
    out.push("  reading?: ReadingComprehension;");
    out.push("  dialogueSets?: DialogueSet[];");
    out.push("}");
    while(lines[i] !== '}') i++;
    continue;
  }
  
  out.push(lines[i]);
}

fs.writeFileSync('data/scenarios.ts', out.join('\\n'));
console.log('Interfaces fixed accurately line by line');

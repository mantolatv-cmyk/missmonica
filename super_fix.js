const fs = require('fs');

let c = fs.readFileSync('data/scenarios.ts', 'utf8');

c = c.replace(/export interface VocabularyItem\s*\{[\s\S]*?\n\}/, 
  'export interface VocabularyItem {\n' +
  '  english: string;\n' +
  '  portuguese: string;\n' +
  '  sentenceA1?: string;\n' +
  '  sentenceA2?: string;\n' +
  '  sentenceA1Pt?: string;\n' +
  '  sentenceA2Pt?: string;\n' +
  '}'
);

c = c.replace(/export interface CulturalTipData\s*\{[\s\S]*?\n\}/, 
  'export interface CulturalTipData {\n' +
  '  title: string;\n' +
  '  titlePt: string;\n' +
  '  content: string;\n' +
  '  contentPt: string;\n' +
  '  contentA1?: string;\n' +
  '  contentA2?: string;\n' +
  '  contentA1Pt?: string;\n' +
  '  contentA2Pt?: string;\n' +
  '}'
);

c = c.replace(/export interface Scenario\s*\{[\s\S]*?\n\}/, 
  'export interface Scenario {\n' +
  '  id: string;\n' +
  '  title: string;\n' +
  '  titlePt: string;\n' +
  '  description: string;\n' +
  '  descriptionPt: string;\n' +
  '  icon: string;\n' +
  "  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose' | 'orange' | 'blue' | 'indigo';\n" +
  '  imagePath: string;\n' +
  '  dialogues: DialogueLine[];\n' +
  '  dialogues2?: DialogueLine[];\n' +
  '  dialoguesBeginner?: DialogueLine[];\n' +
  '  dialoguesBeginner2?: DialogueLine[];\n' +
  '  vocabulary: VocabularyItem[];\n' +
  '  flashcards?: FlashcardItem[];\n' +
  '  culturalTips?: CulturalTipData[];\n' +
  '  culturalTipsEurope?: CulturalTipData[];\n' +
  '  speakingQuestions?: SpeakingQuestion[];\n' +
  '  reading?: ReadingComprehension;\n' +
  '  dialogueSets?: DialogueSet[];\n' +
  '}'
);

fs.writeFileSync('data/scenarios.ts', c);
console.log('Fixed flawlessly!');

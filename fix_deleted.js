const fs = require('fs');
let c = fs.readFileSync('data/scenarios.ts', 'utf8');

c = c.replace(
  "  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose' | 'orange' | 'blue' | 'indigo';\\n    id: 'introduction',",
  "  color: 'lavender' | 'mint' | 'peach' | 'sky' | 'gold' | 'rose' | 'orange' | 'blue' | 'indigo';\\n  imagePath: string;\\n  dialogues: DialogueLine[];\\n  dialogues2?: DialogueLine[];\\n  dialoguesBeginner?: DialogueLine[];\\n  dialoguesBeginner2?: DialogueLine[];\\n  vocabulary: VocabularyItem[];\\n  flashcards?: FlashcardItem[];\\n  culturalTips?: CulturalTipData[];\\n  culturalTipsEurope?: CulturalTipData[];\\n  speakingQuestions?: SpeakingQuestion[];\\n  reading?: ReadingComprehension;\\n  dialogueSets?: DialogueSet[];\\n}\\n\\nexport const scenarios: Scenario[] = [\\n  {\\n    id: 'introduction',"
);

fs.writeFileSync('data/scenarios.ts', c);
console.log('Restored deleted interface properties');

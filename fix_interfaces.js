const fs = require('fs');
let c = fs.readFileSync('data/scenarios.ts', 'utf8');

c = c.replace(/export interface VocabularyItem \\{[\\s\\S]*?\\n\\}/, "export interface VocabularyItem {\\n  english: string;\\n  portuguese: string;\\n  sentenceA1?: string;\\n  sentenceA2?: string;\\n  sentenceA1Pt?: string;\\n  sentenceA2Pt?: string;\\n}");

c = c.replace(/export interface CulturalTipData \\{[\\s\\S]*?\\n\\}/, "export interface CulturalTipData {\\n  title: string;\\n  titlePt: string;\\n  content: string;\\n  contentPt: string;\\n  contentA1?: string;\\n  contentA2?: string;\\n  contentA1Pt?: string;\\n  contentA2Pt?: string;\\n}");

fs.writeFileSync('data/scenarios.ts', c);
console.log('Fixed exactly using regex block');

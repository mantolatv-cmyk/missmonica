const fs = require('fs');

let pageContent = fs.readFileSync('app/scenario/[id]/page.tsx', 'utf8');

// Replace layout invocation
pageContent = pageContent.replace(
  /\{isDirections \? \([\s\S]*?DirectionsLayout scenario=\{scenario\} \/\>[\s\S]*?\) : \([\s\S]*?GenericLayout scenario=\{scenario\} \/\>[\s\S]*?\)\}/,
  '<UniversalLayout scenario={scenario} />'
);
// Also remove the `const isDirections = ...` line
pageContent = pageContent.replace(/const isDirections = scenario\.id === 'directions';\n\n  return \(/, 'return (');

// Remove GenericLayout
pageContent = pageContent.replace(/\/\/ Generic layout for all standard scenarios[\s\S]*?\n\/\/ Enhanced directions layout with 3 sections/, '// Universal layout for all scenarios');

// Rename DirectionsLayout to UniversalLayout
pageContent = pageContent.replace(/function DirectionsLayout\(\{ scenario \}/, 'function UniversalLayout({ scenario }');

// Replace activeSection state
pageContent = pageContent.replace(
  /const \[activeSection, setActiveSection\] = useState<.*>\('wordlesson'\);/,
  "const [activeSection, setActiveSection] = useState<'wordlesson' | 'simulator' | 'flashcards' | 'cultural' | 'vocabulary' | 'listening' | 'speed' | 'reading' | 'speaking' | 'sentences' | 'scramble' | 'makeup'>('wordlesson');"
);

// Replace sections array
pageContent = pageContent.replace(
  /const sections = \[\s*\{ key: 'wordlesson'[\s\S]*?\n  \];/,
  `const sections = [
    { key: 'wordlesson' as const, label: '📖 Vocabulário', labelEn: 'Word Lesson' },
    { key: 'simulator' as const, label: '💬 Simulador', labelEn: 'Dialogue Simulator' },
    ...(scenario.flashcards ? [{ key: 'flashcards' as const, label: '🃏 Flashcards', labelEn: 'Flashcards' }] : []),
    { key: 'sentences' as const, label: '🧩 Frases', labelEn: 'Sentence Builder' },
    { key: 'scramble' as const, label: '🔠 Embaralhar', labelEn: 'Word Scramble' },
    { key: 'reading' as const, label: '📖 Reading', labelEn: 'Reading Comprehension' },
    { key: 'speaking' as const, label: '🗣️ Speaking', labelEn: 'Speaking Practice' },
    { key: 'listening' as const, label: '🎧 Listening', labelEn: 'Audio Quiz' },
    { key: 'speed' as const, label: '⚡ Speed Round', labelEn: 'Fast Vocabulary' },
    { key: 'cultural' as const, label: '💡 Culturais', labelEn: 'Cultural Tips' },
    { key: 'vocabulary' as const, label: '🔗 Ligar Palavras', labelEn: 'Vocabulary Match' },
    ...((scenario.id === 'shopping' || scenario.id === 'beauty') ? [{ key: 'makeup' as const, label: '💄 Makeup', labelEn: 'Makeup Interactive' }] : []),
  ];`
);

// We need to inject the new component blocks into the layout.
// I'll insert them right before "activeSection === 'reading'"
const newBlocks = `
        {activeSection === 'sentences' && (
          <div className={styles.section} id="section-sentences">
            <h2 className={styles.sectionTitle}>🧩 Montar Frases</h2>
            <SentenceBuilder 
              key={\`sentences-\${level}\`}
              dialogues={currentDialogues} 
            />
          </div>
        )}

        {activeSection === 'scramble' && (
          <div className={styles.section} id="section-scramble">
            <h2 className={styles.sectionTitle}>🔠 Embaralhar Palavras</h2>
            <WordScramble vocabulary={scenario.vocabulary} />
          </div>
        )}

        {activeSection === 'makeup' && (
          <div className={styles.section} id="section-makeup">
            <h2 className={styles.sectionTitle}>💄 Makeup Interactive</h2>
            <MakeupInteractive />
          </div>
        )}
`;

pageContent = pageContent.replace(/(\s*\{activeSection === 'reading' && \()/g, newBlocks + '$1');

// Update flashcards conditionally
pageContent = pageContent.replace(
  /\{activeSection === 'flashcards' && scenario\.flashcards && \(/g,
  "{activeSection === 'flashcards' && scenario.flashcards && ("
);

// We need to remove the unused imports? We'll just run ESLint later, or let tsc pass.
// DialogueBlock is probably no longer used if we only use ChatDialogueSimulator.

fs.writeFileSync('app/scenario/[id]/page.tsx', pageContent);
console.log('Successfully refactored page.tsx');

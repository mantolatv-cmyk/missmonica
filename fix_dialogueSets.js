const fs = require('fs');

let pageContent = fs.readFileSync('app/scenario/[id]/page.tsx', 'utf8');

// Insert state
pageContent = pageContent.replace(
  /const \[culturalRegion, setCulturalRegion\] = useState<'US' \| 'EU'>\('US'\);/,
  `const [culturalRegion, setCulturalRegion] = useState<'US' | 'EU'>('US');
  const hasDialogueSets = !!scenario.dialogueSets && scenario.dialogueSets.length > 0;
  const [activeDialogueSet, setActiveDialogueSet] = useState(0);`
);

// Update getDialogues
pageContent = pageContent.replace(
  /const getDialogues = \(\) => \{\s*if \(level === 'A1'\) \{\s*return \(variation === 2 && scenario\.dialoguesBeginner2\) \? scenario\.dialoguesBeginner2 : \(scenario\.dialoguesBeginner \|\| scenario\.dialogues\);\s*\}\s*return \(variation === 2 && scenario\.dialogues2\) \? scenario\.dialogues2 : scenario\.dialogues;\s*\};/,
  `const getDialogues = () => {
    const set = hasDialogueSets ? scenario.dialogueSets![activeDialogueSet] : scenario;
    if (level === 'A1') {
      return (variation === 2 && set.dialoguesBeginner2) ? set.dialoguesBeginner2 : (set.dialoguesBeginner || set.dialogues);
    }
    return (variation === 2 && set.dialogues2) ? set.dialogues2 : set.dialogues;
  };`
);

// Update the simulator section
const simulatorBlock = `{activeSection === 'simulator' && (
          <div className={styles.section} id="section-simulator">
            {hasDialogueSets && (
              <>
                <div className={styles.sectionPills} style={{ marginBottom: '1rem', marginTop: '0', justifyContent: 'flex-start' }}>
                  {scenario.dialogueSets!.map((set, idx) => (
                    <button
                      key={idx}
                      className={\`\${styles.sectionPill} \${activeDialogueSet === idx ? styles.sectionPillActive : ''}\`}
                      onClick={() => setActiveDialogueSet(idx)}
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}
                    >
                      {set.icon} {set.titlePt}
                    </button>
                  ))}
                </div>
                <h3 className={styles.sectionTitle} style={{ marginTop: '0' }}>
                  {scenario.dialogueSets![activeDialogueSet].icon} {scenario.dialogueSets![activeDialogueSet].title}
                </h3>
                <p className={styles.sectionSub}>
                  {scenario.dialogueSets![activeDialogueSet].titlePt}
                </p>
              </>
            )}
            {!hasDialogueSets && (
              <h2 className={styles.sectionTitle}>
                💬 Diálogos
              </h2>
            )}
            <DialogueBlock
              key={\`dialogues-\${level}-\${variation}-\${activeDialogueSet}\`}
              dialogues={currentDialogues}
            />
          </div>
        )}`;

pageContent = pageContent.replace(
  /\{activeSection === 'simulator' && \([\s\S]*?<\/div>\s*\)\}/,
  simulatorBlock
);

fs.writeFileSync('app/scenario/[id]/page.tsx', pageContent);
console.log('Fixed dialogueSets rendering');

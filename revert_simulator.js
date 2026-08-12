const fs = require('fs');

let pageContent = fs.readFileSync('app/scenario/[id]/page.tsx', 'utf8');

// Replace tab label
pageContent = pageContent.replace(
  /\{ key: 'simulator' as const, label: '💬 Simulador', labelEn: 'Dialogue Simulator' \}/,
  "{ key: 'simulator' as const, label: '💬 Diálogos', labelEn: 'Dialogues' }"
);

// Replace component block
pageContent = pageContent.replace(
  /<h2 className=\{styles\.sectionTitle\}>\s*💬 Simulador de Diálogo\s*<\/h2>\s*<p className=\{styles\.sectionSub\}>\s*Click through the conversation between a tourist and a friendly local\. Tap each message to see the Portuguese translation\.\s*<\/p>\s*<ChatDialogueSimulator[\s\S]*?\/>/,
  `<h2 className={styles.sectionTitle}>
              💬 Diálogos
            </h2>
            <DialogueBlock
              key={\`dialogues-\${level}-\${variation}\`}
              dialogues={currentDialogues}
            />`
);

fs.writeFileSync('app/scenario/[id]/page.tsx', pageContent);
console.log('Reverted to DialogueBlock');

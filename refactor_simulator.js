const fs = require('fs');

let simContent = fs.readFileSync('components/directions/ChatDialogueSimulator.tsx', 'utf8');

// Replace the speakerTag div
simContent = simContent.replace(
  /<div className=\{styles\.speakerTag\}>[\s\S]*?<\/div>/g,
  `<div className={styles.speakerTag}>
              <span>{
                line.speaker === 'tourist' ? '🧳' : 
                line.speaker === 'student' ? '🎓' : 
                line.speaker === 'native' ? '🇺🇸' :
                line.speaker === 'local' ? '🙋' :
                '👤'
              }</span>
              <span>{
                line.speaker.charAt(0).toUpperCase() + line.speaker.slice(1)
              }</span>
            </div>`
);

// We also need to determine if a bubble is 'right' or 'left'.
// Right side is typically the user (tourist, student, etc.)
// Left side is the other (local, native, receptionist, etc.)

simContent = simContent.replace(
  /className=\{`\$\{styles\.bubble\} \$\{[\s\S]*?line\.speaker === 'tourist' \? styles\.bubbleTourist : styles\.bubbleLocal[\s\S]*?\}`\}/g,
  "className={`\\${styles.bubble} \\${['tourist', 'student'].includes(line.speaker) || index % 2 === 0 ? styles.bubbleRight : styles.bubbleLeft}`}"
);

// Also need to handle the typing indicator alignment
simContent = simContent.replace(
  /getNextSpeaker\(\) === 'tourist' \? styles\.typingRight : ''/g,
  "['tourist', 'student'].includes(getNextSpeaker() || '') ? styles.typingRight : ''"
);

fs.writeFileSync('components/directions/ChatDialogueSimulator.tsx', simContent);

// Now update CSS
let cssContent = fs.readFileSync('components/directions/ChatDialogueSimulator.module.css', 'utf8');

cssContent = cssContent.replace(/\.bubbleTourist/g, '.bubbleRight');
cssContent = cssContent.replace(/\.bubbleLocal/g, '.bubbleLeft');

fs.writeFileSync('components/directions/ChatDialogueSimulator.module.css', cssContent);

console.log('Successfully refactored ChatDialogueSimulator');

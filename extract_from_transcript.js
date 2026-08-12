const fs = require('fs');
const lines = fs.readFileSync('C:/Users/martm/.gemini/antigravity-ide/brain/8335e2f4-9f64-492b-9cf9-881aa3771310/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i] && lines[i].includes('export interface Scenario')) {
    const obj = JSON.parse(lines[i]);
    const content = obj.content;
    
    // We want to find if this content has "reading:" and "speakingQuestions:" in the interface
    if (content && content.includes('speakingQuestions?:') && content.includes('reading?:')) {
      console.log('Found full content at line ' + i);
      
      // The content might be the output of view_file tool, which formats it with line numbers
      // Let's just output the content and parse it.
      fs.writeFileSync('transcript_match.txt', content, 'utf8');
      break;
    }
  }
}

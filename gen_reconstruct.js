const fs = require('fs');
const lines = fs.readFileSync('C:/Users/martm/.gemini/antigravity-ide/brain/8335e2f4-9f64-492b-9cf9-881aa3771310/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');

let jsCode = `const fs = require('fs');\nlet content = fs.readFileSync('data/scenarios.ts', 'utf8');\n\n`;

for (let i = 0; i < lines.length; i++) {
  if (!lines[i]) continue;
  const obj = JSON.parse(lines[i]);
  if (obj.tool_calls) {
    for (const tc of obj.tool_calls) {
      if ((tc.name === 'default_api:multi_replace_file_content' || tc.name === 'default_api:replace_file_content') && 
          tc.arguments.TargetFile && tc.arguments.TargetFile.endsWith('data/scenarios.ts')) {
        
        let chunks = tc.arguments.ReplacementChunks || [tc.arguments];
        for (const chunk of chunks) {
          const target = JSON.stringify(chunk.TargetContent);
          const replacement = JSON.stringify(chunk.ReplacementContent);
          jsCode += `content = content.replace(${target}, ${replacement});\n`;
        }
      }
    }
  }
}

jsCode += `fs.writeFileSync('data/scenarios.ts', content, 'utf8');\nconsole.log('Successfully reconstructed scenarios.ts');\n`;
fs.writeFileSync('reconstruct.js', jsCode, 'utf8');

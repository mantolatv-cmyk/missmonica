const fs = require('fs');
const lines = fs.readFileSync('C:/Users/martm/.gemini/antigravity-ide/brain/8335e2f4-9f64-492b-9cf9-881aa3771310/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');

let latestContent = null;
let lastModificationIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (!lines[i]) continue;
  
  const obj = JSON.parse(lines[i]);
  if (obj.tool_calls) {
    for (const tc of obj.tool_calls) {
      if (tc.name === 'default_api:write_to_file' && tc.arguments.TargetFile && tc.arguments.TargetFile.endsWith('data/scenarios.ts')) {
        latestContent = tc.arguments.CodeContent;
        lastModificationIndex = i;
      }
    }
  }
}

if (latestContent) {
  fs.writeFileSync('restored_scenarios.ts', latestContent, 'utf8');
  console.log('Restored scenarios.ts from transcript tool call at line', lastModificationIndex);
} else {
  console.log('No write_to_file found for scenarios.ts in transcript.');
}

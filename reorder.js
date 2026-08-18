const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'scenarios.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the start of the scenarios array
const arrayStartIdx = content.indexOf('export const scenarios: Scenario[] = [');

if (arrayStartIdx !== -1) {
    // Find the objects
    const findObjectBounds = (id) => {
        const idRegex = new RegExp(`{\\s*id:\\s*'${id}'`);
        const match = idRegex.exec(content);
        if (!match) return null;
        
        let startIdx = match.index;
        let braceCount = 0;
        let endIdx = -1;
        
        for (let i = startIdx; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            if (content[i] === '}') braceCount--;
            
            if (braceCount === 0 && i > startIdx) {
                endIdx = i + 1;
                // Check if there is a comma after it
                if (content[endIdx] === ',') {
                    endIdx++;
                }
                break;
            }
        }
        return { startIdx, endIdx };
    };

    const smallTalkBounds = findObjectBounds('smalltalk');
    
    if (smallTalkBounds) {
        let smallTalkString = content.substring(smallTalkBounds.startIdx, smallTalkBounds.endIdx);
        content = content.substring(0, smallTalkBounds.startIdx) + content.substring(smallTalkBounds.endIdx);
        
        // Find the end of the array to append
        // The array ends with `];\n` or `];`
        let arrayEndIdx = content.lastIndexOf('];');
        
        // We append smallTalkString right before the end of the array, separated by a comma
        // Check if we need to add a comma to the previous element
        const beforeEnd = content.substring(0, arrayEndIdx).trimRight();
        const comma = beforeEnd.endsWith(',') ? '' : ',';
        
        content = beforeEnd + comma + '\n  ' + smallTalkString + '\n];' + content.substring(arrayEndIdx + 2);
    }
    
    const slangsBounds = findObjectBounds('slangs');
    if (slangsBounds) {
        let slangsString = content.substring(slangsBounds.startIdx, slangsBounds.endIdx);
        content = content.substring(0, slangsBounds.startIdx) + content.substring(slangsBounds.endIdx);
        
        let arrayEndIdx = content.lastIndexOf('];');
        const beforeEnd = content.substring(0, arrayEndIdx).trimRight();
        const comma = beforeEnd.endsWith(',') ? '' : ',';
        
        content = beforeEnd + comma + '\n  ' + slangsString + '\n];' + content.substring(arrayEndIdx + 2);
    }

    // Clean up trailing commas if any at the very last element
    let arrayEndIdxFinal = content.lastIndexOf('];');
    let beforeEndFinal = content.substring(0, arrayEndIdxFinal).trimRight();
    if (beforeEndFinal.endsWith(',')) {
        beforeEndFinal = beforeEndFinal.substring(0, beforeEndFinal.length - 1);
        content = beforeEndFinal + '\n];' + content.substring(arrayEndIdxFinal + 2);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Moved smalltalk and slangs to the end successfully!');
}

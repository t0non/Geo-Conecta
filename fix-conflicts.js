const fs = require('fs');
const path = require('path');

const files = [
  'src/lib/utils.ts',
  'src/components/ui/card.tsx',
  'src/components/ui/carousel.tsx',
  'src/components/ui/button.tsx',
  'src/components/ui/badge.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex to match the merge conflict block and keep the bottom part (Next.js config)
    content = content.replace(/<<<<<<< HEAD\r?\n[\s\S]*?=======\r?\n([\s\S]*?)>>>>>>> [0-9a-fA-F]+\r?\n?/g, '$1');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in ${file}`);
  }
});

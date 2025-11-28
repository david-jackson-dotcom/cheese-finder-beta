import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const uiDir = './components/ui';
const files = readdirSync(uiDir);

const replacements = [
  [/@radix-ui\/(react-[a-z-]+)@[\d.]+/g, '@radix-ui/$1'],
  [/lucide-react@[\d.]+/g, 'lucide-react'],
  [/class-variance-authority@[\d.]+/g, 'class-variance-authority'],
  [/react-day-picker@[\d.]+/g, 'react-day-picker'],
  [/embla-carousel-react@[\d.]+/g, 'embla-carousel-react'],
  [/recharts@[\d.]+/g, 'recharts'],
  [/cmdk@[\d.]+/g, 'cmdk'],
  [/vaul@[\d.]+/g, 'vaul'],
  [/input-otp@[\d.]+/g, 'input-otp'],
  [/react-resizable-panels@[\d.]+/g, 'react-resizable-panels'],
];

let fixedCount = 0;

files.forEach(file => {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  
  const filePath = join(uiDir, file);
  let content = readFileSync(filePath, 'utf8');
  let modified = false;
  
  replacements.forEach(([pattern, replacement]) => {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  });
  
  if (modified) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\n✨ Fixed ${fixedCount} files!`);

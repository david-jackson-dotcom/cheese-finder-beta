import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const componentsDir = './components/ui';
const files = readdirSync(componentsDir);

// Map of versioned imports to unversioned ones
const replacements = [
  [/@radix-ui\/react-(\w+)@[\d.]+/g, '@radix-ui/react-$1'],
  [/lucide-react@[\d.]+/g, 'lucide-react'],
  [/class-variance-authority@[\d.]+/g, 'class-variance-authority'],
  [/react-day-picker@[\d.]+/g, 'react-day-picker'],
  [/embla-carousel-react@[\d.]+/g, 'embla-carousel-react'],
  [/recharts@[\d.]+/g, 'recharts'],
  [/cmdk@[\d.]+/g, 'cmdk'],
  [/vaul@[\d.]+/g, 'vaul'],
  [/input-otp@[\d.]+/g, 'input-otp'],
  [/react-hook-form@[\d.]+/g, 'react-hook-form'], // Strip version for standard Node.js builds
  [/react-resizable-panels@[\d.]+/g, 'react-resizable-panels'],
  [/sonner@[\d.]+/g, 'sonner'], // Also strip sonner version
];

files.forEach(file => {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  
  const filePath = join(componentsDir, file);
  let content = readFileSync(filePath, 'utf8');
  
  let modified = false;
  replacements.forEach(([pattern, replacement]) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });
  
  if (modified) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log('\n✨ All imports fixed!');
import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const file of ['index.html', 'styles.css', 'studio.css', 'app.js', 'studio.js']) await cp(file, `dist/${file}`);
console.log('Built static publication to dist/');

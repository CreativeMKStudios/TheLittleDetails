import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

function syllables(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!cleaned) return 0;
  if (cleaned.length <= 3) return 1;
  const groups = cleaned
    .replace(/e$/, '')
    .match(/[aeiouy]{1,}/g);
  return Math.max(1, groups ? groups.length : 1);
}

function grade(text) {
  const sentences = text.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean);
  const words = text.match(/[A-Za-z0-9']+/g) ?? [];
  if (!sentences.length || !words.length) return 0;
  const syllableCount = words.reduce((sum, word) => sum + syllables(word), 0);
  return 0.39 * (words.length / sentences.length) + 11.8 * (syllableCount / words.length) - 15.59;
}

function visibleCopy(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<blockquote[\s\S]*?<\/blockquote>/gi, ' ')
    .replace(/<\/(p|h1|h2|h3|li|figcaption|summary)>/gi, '. ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, 'and')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = await htmlFiles(root);
const required = [
  'index.html',
  'about/index.html',
  'services/index.html',
  'services/used-cars/index.html',
  'projects/index.html',
  'reviews/index.html',
  'contact/index.html',
  'areas/index.html',
  'areas/sandy/index.html',
  'privacy/index.html',
  'robots.txt',
  'sitemap-index.xml',
  'og.jpg',
];

const missing = [];
for (const file of required) {
  try {
    await readFile(join(root, file));
  } catch {
    missing.push(file);
  }
}

let emdashes = 0;
let grades = [];
for (const file of files) {
  const html = await readFile(file, 'utf8');
  emdashes += (html.match(/—/g) ?? []).length;
  if (!html.includes('application/ld+json') && !file.endsWith('404.html')) {
    console.error('Missing schema:', file);
    process.exitCode = 1;
  }
  const score = grade(visibleCopy(html));
  grades.push({ file: file.replace(root, ''), score });
  if (score > 8.4) {
    console.error(`Reading level ${score.toFixed(1)}: ${file}`);
    process.exitCode = 1;
  }
}

const banned = /\b(unlock|elevate|seamless|bespoke|curated|nestled|premier|meticulous|unparalleled|world-class|cutting-edge|delve|leverage)\b/i;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const copy = visibleCopy(html);
  if (banned.test(copy)) {
    console.error('Banned word:', file, copy.match(banned)?.[0]);
    process.exitCode = 1;
  }
}

if (emdashes) {
  console.error(`Found ${emdashes} em dashes`);
  process.exitCode = 1;
}
if (missing.length) {
  console.error('Missing files:', missing.join(', '));
  process.exitCode = 1;
}

const average = grades.reduce((sum, item) => sum + item.score, 0) / grades.length;
console.log(`Pages: ${files.length}. Mean reading grade: ${average.toFixed(1)}.`);
if (!process.exitCode) console.log('Site checks passed.');

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const write = (name, text) => { fs.mkdirSync(path.dirname(path.join(root, name)), { recursive: true }); fs.writeFileSync(path.join(root, name), text); };
const schema = JSON.parse(read('src/settings.json'));
const fonts = [
  ['EB Garamond', 'eb-garamond-roman.woff2', '400 800', 'normal'],
  ['EB Garamond', 'eb-garamond-italic.woff2', '400 800', 'italic'],
  ['Beiruti', 'beiruti.woff2', '100 900', 'normal'],
  ['Cormorant Garamond', 'cormorant-garamond-500.ttf', '500', 'normal'],
  ['Cormorant Garamond', 'cormorant-garamond-600.ttf', '600', 'normal'],
  ['Cormorant Garamond', 'cormorant-garamond-italic-500.ttf', '500', 'italic'],
];
let fontCSS = '/* Embedded typefaces retain their original SIL Open Font Licence. See licences/. */\n';
for (const family of ['ebgaramond', 'beiruti', 'cormorantgaramond']) fontCSS += '/*\n' + read('licences/' + family + '-OFL.txt') + '\n*/\n';
for (const [family, file, weight, style] of fonts) {
  const data = fs.readFileSync(path.join(root, 'src/fonts', file));
  const woff = file.endsWith('woff2');
  fontCSS += `@font-face{font-family:"${family}";src:url(data:font/${woff ? 'woff2' : 'ttf'};base64,${data.toString('base64')}) format("${woff ? 'woff2' : 'truetype'}");font-weight:${weight};font-style:${style};font-display:swap;}\n`;
}
let details = '\n/* Generated heading hierarchy and state symbols. */\nbody {\n';
for (let n = 1; n <= 6; n++) {
  const size = [2.2, 1.7, 1.4, 1.2, 1.08, 1][n - 1];
  details += `--h${n}-font:var(--cf-display);--h${n}-size:var(--cyriform-h${n}-size,${size}em);--h${n}-weight:var(--cyriform-h${n}-weight,${n < 4 ? 600 : 650});--h${n}-color:var(--cf-bright);\n`;
}
details += '}\n';
for (let n = 1; n <= 6; n++) {
  details += `.cyriform-headings-accent {--h${n}-color:var(--cf-accent);}\n.cyriform-headings-custom {--h${n}-color:var(--cyriform-h${n}-colour,var(--cf-bright));}\n`;
  details += `.cyriform-heading-labels .markdown-rendered h${n}::before,.cyriform-heading-labels .HyperMD-header-${n}::before {content:"H${n}";}\n`;
}
const symbols = {
  '>': 'M4 3l5 5-5 5', '<': 'M10 3L5 8l5 5', '?': 'M5 5a3 3 0 0 1 6 0c0 2-3 2-3 4M8 12v1',
  '!': 'M8 3v6M8 12v1', '*': 'M8 2l1.7 3.8L14 6.3l-3.2 2.9.9 4.3L8 11.3l-3.7 2.2.9-4.3L2 6.3l4.3-.5Z',
  '"': 'M3 4h3v5H3Zm7 0h3v5h-3ZM6 9l-2 3m9-3-2 3',
};
for (const [state, d] of Object.entries(symbols)) {
  const selector = `body:not(.cyriform-native-tasks) :is(.task-list-item,.HyperMD-task-line)[data-task=${JSON.stringify(state)}] .task-list-item-checkbox`;
  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="${d}" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
  details += `${selector} {background:var(--cf-paper);border-color:var(--cf-gold);}\n${selector}::after {content:"";position:absolute;inset:0;width:100%;height:100%;background:var(--cf-gold);mask:url("data:image/svg+xml,${svg}") center / contain no-repeat;-webkit-mask:url("data:image/svg+xml,${svg}") center / contain no-repeat;}\n`;
}
for (let n = 0; n <= 9; n++) {
  details += `body:not(.cyriform-native-tasks) :is(.task-list-item,.HyperMD-task-line)[data-task="${n}"] .task-list-item-checkbox {background:conic-gradient(var(--cf-accent) ${n * 10}%,var(--cf-paper) 0);border-radius:50%;border-color:var(--cf-accent);}\n`;
  details += `body:not(.cyriform-native-tasks) :is(.task-list-item,.HyperMD-task-line)[data-task="${n}"] .task-list-item-checkbox::after {display:none;}\n`;
}
details += '[class*="cyriform-accent-"] {--text-accent:var(--cf-accent);--link-color:var(--cf-accent);--link-color-hover:var(--cf-accent);--link-external-color:var(--cf-accent);--interactive-accent:var(--cf-accent);--checkbox-color:var(--cf-accent);}\n';
const settings = '/* @settings\nname: Cyriform\nid: cyriform\nsettings: ' + JSON.stringify(schema.settings, null, 2) + '\n*/\n';
write('theme.css', settings + fontCSS + read('src/theme.css') + details);
console.log('Built Cyriform theme.');

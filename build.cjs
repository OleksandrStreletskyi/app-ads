// Regenerate the English HTML fallback after updating content, games or rendering.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ctx = {};
vm.createContext(ctx);
for (const file of ['content.js', 'games.js', 'render.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), ctx);
}
const esc = s => s.replace(/[&"<>]/g, c => ({'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'}[c]));
for (const [file, page] of [['index.html','home'],['privacy.html','privacy'],['terms.html','terms']]) {
  const title = page === 'home' ? 'Anomaly Game Studio | Games with character' : ctx.SITE_CONTENT.en[page === 'privacy' ? 4 : 3] + ' | Anomaly Game Studio';
  fs.writeFileSync(path.join(__dirname, file), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b0d11"><title>${esc(title)}</title><meta name="description" content="Games from Anomaly Game Studio. Explore our games, browse screenshots and find player support and policies."><link rel="stylesheet" href="style.css?v=studio2"><script defer src="content.js?v=studio2"></script><script defer src="games.js?v=studio2"></script><script defer src="render.js?v=studio2"></script><script defer src="site.js?v=studio2"></script></head><body data-page="${page}">${ctx.SiteRender.render('en', page)}</body></html>\n`);
}
console.log('Generated index.html, privacy.html and terms.html');

(() => {
 let lang = new URLSearchParams(location.search).get('lang');
 if (!Object.hasOwn(SITE_CONTENT, lang)) { try { lang = localStorage.getItem('studio-language'); } catch {} }
 if (!Object.hasOwn(SITE_CONTENT, lang)) lang = 'en';
 const page = document.body.dataset.page;
 document.documentElement.lang = lang;
 document.title = (page === 'home' ? STUDIO_UI[lang].tagline : SITE_CONTENT[lang][page === 'terms' ? 3 : 4]) + ' | Anomaly Game Studio';
 document.body.innerHTML = SiteRender.render(lang, page);
 document.querySelector('#language').addEventListener('change', e => {
  const next = e.target.value;
  try { localStorage.setItem('studio-language', next); } catch {}
  const url = new URL(location.href); url.searchParams.set('lang', next); location.href = url.href;
 });
 document.querySelectorAll('[data-gallery]').forEach(g => {
  const stage = g.querySelector('.gallery-stage img');
  g.querySelectorAll('[data-src]').forEach(b => b.addEventListener('click', () => {
   g.querySelectorAll('[data-src]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
   stage.src = b.dataset.src; stage.alt = g.querySelector('h3').textContent + ' - ' + b.dataset.number;
  }));
  g.querySelector('.gallery-stage').addEventListener('click', () => {
   const box = document.querySelector('#lightbox'), large = document.querySelector('#large-image');
   large.src = stage.src; large.alt = stage.alt; box.showModal();
  });
 });
 const box = document.querySelector('#lightbox');
 if (box) { document.querySelector('#close-dialog').addEventListener('click', () => box.close()); box.addEventListener('click', e => { if (e.target === box) box.close(); }); }
 if (location.hash) { try { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(); } catch {} }
})();

// En la web publicada (GitHub Pages) no hay servidor.py, así que «En directo» no puede leer los datos
// de PZ Map y PZ Pulse, que están en el PC de quien juega. Allí la pestaña se marca «Próximamente»
// y deja de ser un enlace. Junto al título se añade un enlace a la portada con el resto de proyectos.
// En local (servidor.py o http.server en 127.0.0.1) no cambia nada.
(() => {
  'use strict';
  if (['127.0.0.1', 'localhost', ''].includes(location.hostname)) return;
  document.querySelector('.brand h1')?.insertAdjacentHTML('afterend',
    '<a class="brand__proyectos" href="https://alvaroportillo.github.io/">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/>' +
    '<rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>Mis proyectos</a>');
  document.querySelectorAll('.tab[href="directo.html"]').forEach(a => {
    const s = document.createElement('span');
    s.className = 'tab tab--soon';
    s.setAttribute('aria-disabled', 'true');
    s.innerHTML = 'En directo <span class="tab__soon">Próximamente</span>';
    a.replaceWith(s);
  });
})();

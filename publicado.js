// En la web publicada (GitHub Pages) no hay servidor.py, así que «En directo» no puede leer los datos
// de PZ Map y PZ Pulse, que están en el PC de quien juega. Allí la pestaña se marca «Próximamente»
// y deja de ser un enlace. En local (servidor.py o http.server en 127.0.0.1) no cambia nada.
(() => {
  'use strict';
  if (['127.0.0.1', 'localhost', ''].includes(location.hostname)) return;
  document.querySelectorAll('.tab[href="directo.html"]').forEach(a => {
    const s = document.createElement('span');
    s.className = 'tab tab--soon';
    s.setAttribute('aria-disabled', 'true');
    s.innerHTML = 'En directo <span class="tab__soon">Próximamente</span>';
    a.replaceWith(s);
  });
})();

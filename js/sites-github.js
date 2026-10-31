/* Filtro de sites: mantém todos visíveis quando JavaScript não está disponível. */
(() => {
  const raiz = document.querySelector('#sites-github');
  if (!raiz) return;
  const botoes = [...raiz.querySelectorAll('[data-filtro]')];
  const cartoes = [...raiz.querySelectorAll('.site-github-card')];
  const contador = raiz.querySelector('#site-github-contagem');
  const filtrar = (tipo) => {
    let quantidade = 0;
    for (const cartao of cartoes) {
      const visivel = tipo === 'todos' || cartao.dataset.tipo === tipo;
      cartao.hidden = !visivel;
      if (visivel) quantidade += 1;
    }
    for (const botao of botoes) {
      botao.setAttribute('aria-pressed', String(botao.dataset.filtro === tipo));
    }
    if (contador) contador.textContent = quantidade + (quantidade === 1 ? ' site nesta seleção' : ' sites nesta seleção');
  };
  for (const botao of botoes) {
    botao.addEventListener('click', () => filtrar(botao.dataset.filtro || 'todos'));
  }
})();

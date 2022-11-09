const newDiv = document.querySelector('#novo');

const geraTreetHTML = (dados) => `
<article>
<img src="${dados.imagem}" alt="Perfil">
<p class="autor">
  <strong>${dados.nome}</strong><br>
  @${dados.arroba}
</p>
<section id='meu-texto'class="texto">
  ${dados.mensagem}
  <p class="quando">${dados.quando}</p>
</section>
<section class="reacoes">
  <button class="like">
    <span class="icone"><i>❤️</i></span>
    <span class="qtd">3</i></span>
      likes
  </button>
</section>
</article>`

newDiv.addEventListener('submit', (evento) => {
  evento.preventDefault(); //previne o comportamento padrão do navegador, no caso que a página atualize
  const mensagem = document.body.querySelector('#texto').value;
  const infomacoes = {
    imagem:'perfil.webp',
    nome: 'Usuário',
    arroba: 'usuario',
    mensagem: mensagem,
    quando:String(new Date()),
  };
  const codigoHTML = geraTreetHTML(infomacoes);
  newDiv.insertAdjacentHTML("afterend", codigoHTML);
});
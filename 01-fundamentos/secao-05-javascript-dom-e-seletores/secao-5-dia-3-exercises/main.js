const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function mudarClassTech (event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

//Resumindo, tiramos a classe “tech” da Div que possuir ela, inserimos 
//essa mesma classe na Li em que a gente clicou e aí limpamos nosso input.

firstLi.addEventListener('click', mudarClassTech);
secondLi.addEventListener('click', mudarClassTech);
thirdLi.addEventListener('click', mudarClassTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// A função adiciona um evento “input” na nossa caixa de texto. Isso vai 
// disparar uma função que irá adicionar o valor do input na Li que atualmente está com a classe “tech”.

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://blog.betrybe.com/');
});
//A ação disparada é pegar a URL atual com window.location e substituir por outro link 

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});

// A primeira faz com que o texto do elemento fique com a fonte vermelha 
// quando o mouse passar por ele, e a segunda adiciona o valor “unset” para a cor da fonte. 
// Isso significa que esse estilo irá “resetar” a cor do elemento quando o mouse sair dele.
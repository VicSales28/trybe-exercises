const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

//Parte 1
//01-Crie um calendário dinamicamente.
//O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
//Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
//Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//02-A tag <ul> deve conter o id 'days';
//03-Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
//04-Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
//05-Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const diasDoMesDeDezembro = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasDoMes() {

  let listaDosDias = document.querySelector('#days'); //Variável criada para armazenar lista de dias do mês de dezembro

  for (let index = 0; index < diasDoMesDeDezembro.length; index += 1) { //Percorre array de dias do mês de dezembro

    let day = diasDoMesDeDezembro[index]; //Variável day é criada para armazenar o valor numérico de cada dia de acordo com o array
    let dayItem = document.createElement('li'); //Cria cada list item, já o identificando no código como dayItem
    dayItem.innerHTML = day; // Junta as duas informações: o valor numérico (day) é adicionada a sintaxe HTML de cada dayItem criado (<li>).

    if (day === 24 || day === 31) { // Caso o valor numérico day for 24 ou 31
      dayItem.className = 'day holiday'; // É atribuído a classe 'day holiday' ao li 
      listaDosDias.appendChild(dayItem); // Anexar o li (dayItem) como elemento filho da ul (listaDosDias)
    } else if (day === 4 || day === 11 || day === 18) { // Caso o valor numérico day for 4,11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li 
      listaDosDias.appendChild(dayItem);// Anexar o li (dayItem) como elemento filho da ul (listaDosDias)
    } else if (day === 25) { //Caso o dia seja 25 (sexta e feriado)
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      listaDosDias.appendChild(dayItem);// Anexar o li (dayItem) como elemento filho da ul (listaDosDias)
    } else { //A partir desse momento, os outros valores numéricos serão adionados na listaDosDias e receberão a classe day
      dayItem.className = 'day';
      listaDosDias.appendChild(dayItem);
    }
  }
}

criaDiasDoMes();

// Parte 2
// 01-Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// 02-Sua função deve receber um parâmetro com a string 'Feriados'.
// 03-Adicione a este botão a ID "btn-holiday".
// 04-Adicione este botão como filho/filha da tag <div> com classe "buttons-container".


function criaBotão(buttonName) {
  let divButtonContainer = document.querySelector('.buttons-container');
  let botãoCriado = document.createElement('button');

  botãoCriado.innerHTML = buttonName;
  botãoCriado.id = 'btn-holiday';

  divButtonContainer.appendChild(botãoCriado);
}

criaBotão('Feriados');

// Parte 3
// 01-Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// 02-Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias 
// que possuem a classe "holiday".

function mudaCorDosFeriados() {
  let botãoCriado = document.querySelector('#btn-holiday');
  let feriados = document.getElementsByClassName('day holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let white = 'white';

  botãoCriado.addEventListener('click', () => {
    for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === white) {
        feriados[index].style.backgroundColor = backgroundColor;
      } else {
        feriados[index].style.backgroundColor = white;
      }
    }
  });
}

mudaCorDosFeriados();

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createFridayButton = (buttonName) => {
  let divButtonContainer = document.querySelector('.buttons-container');
  let botãoCriado = document.createElement('button');

  botãoCriado.innerHTML = buttonName;
  botãoCriado.id = 'btn-friday';
  divButtonContainer.appendChild(botãoCriado); //adiciona o botão como filho do container de botões
}
createFridayButton('Sexta-feira');

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.

const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}

displayFridays([ 4, 11, 18, 25 ]);

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, 
// quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

const dayMouseOver = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
dayMouseOver();
dayMouseOut();

//Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar 
// dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const newTaskSpan = (task) => {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
newTaskSpan('Projeto PlayGround Fuctions');

// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente 
// um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const newTaskDiv = (color) => {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
newTaskDiv('purple');


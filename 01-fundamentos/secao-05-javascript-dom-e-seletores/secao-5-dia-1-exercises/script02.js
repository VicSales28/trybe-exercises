// Seção 5. Dia 1. Exercícios - funções de manipulação do DOM.
// Fique à vontade para soltar a criatividade e alterar o arquivo como desejar!

const header = document.getElementById('header-container');
header.style.backgroundColor = 'blue';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'orange';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'brown';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'pink';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'grey';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'blue';
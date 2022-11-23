const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, 
// a chave que deverá ser adicionada e o valor dela.

function adicionarTurno (objeto, chave, valor) {
  objeto[chave] = valor;
};

adicionarTurno (lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro.

function listarKeys (objeto) {
  console.log(Object.keys(objeto));
};

listarKeys (lesson2);

// Crie uma função para mostrar o tamanho de um objeto.

function mostrarTamanho (objeto) {
  console.log(Object.keys(objeto).length);
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
};

mostrarTamanho (lesson2);

// Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.

function listarValores (objeto) {
  console.log(Object.values(objeto));
};

listarValores (lesson2);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function contarEstudantes (objeto) {
  let total = 0;
  const keys = Object.keys(objeto); // captura as chaves do objeto;
  for (let index = 0; index < keys.length; index +=1) { // ou (index in keys)
    total += objeto[keys[index]].numeroEstudantes; // incremente a variável total a cada repetição
  }
  return console.log(total);
};

contarEstudantes (allLessons);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function adquirirValorDaChave (obj,number) {
  console.log(Object.values(obj)[number]); // Usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
};

adquirirValorDaChave(lesson2, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave.

function verifiqueSeChaveEValorExiste (objeto, chave, valor) {
  const entradas = Object.entries(objeto);
  let isEqual = false;
  for (let index in entradas) {
    if (entradas[index][0] === chave && entradas[index][1] === valor)
    isEqual = true;
  }
  return isEqual;
};

console.log(verifiqueSeChaveEValorExiste (lesson2, 'materia', 'História'));


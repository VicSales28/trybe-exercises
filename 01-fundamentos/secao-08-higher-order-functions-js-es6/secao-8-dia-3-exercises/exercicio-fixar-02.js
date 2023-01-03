/*
Para fixar ainda mais o conceito de reduce, faça uma função que SOME todos os números PARES do array numbers:
*/
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getResult = (array) => {
  let evenNumbers = array.filter((number) => number % 2 === 0);
  return evenNumbers.reduce((acc,curr) => acc + curr)
}

console.log(getResult(numbers))

// Solução usando apenas reduce - Resolução disponível na plataforma da Trybe:

const sum = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers));


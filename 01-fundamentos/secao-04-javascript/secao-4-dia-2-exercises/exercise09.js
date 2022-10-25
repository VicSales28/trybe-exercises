/*
Seção 4. Dia 2. Exercícios - agora, a prática
Iremos utilizar esse array para realizar os próximos exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

07 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0] //No começo, declara-se que o menor valor é o da posição 0

for (let posicao = 1; posicao < numbers.length; posicao += 1) {
  if (numbers[posicao] < menorNumero) {
    menorNumero = numbers[posicao];
  }
}

console.log(menorNumero);
/*
Seção 4. Dia 2. Exercícios - agora, a prática
Iremos utilizar esse array para realizar os próximos exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

08 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
Obs.: Primeira interpretação
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayCriado = []

for (let posicao = 0; posicao < numbers.length; posicao += 1) {
  if (numbers[posicao] < 25) {
    arrayCriado.push(numbers[posicao]);
  }
}
console.log(arrayCriado)
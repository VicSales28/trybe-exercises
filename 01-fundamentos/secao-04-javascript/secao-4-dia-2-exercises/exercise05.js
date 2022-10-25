/*
Seção 4. Dia 2. Exercícios - agora, a prática
Iremos utilizar esse array para realizar os próximos exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

02 - Some todos os valores contidos no array e imprima o resultado;
*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index]
}
console.log(resultado)
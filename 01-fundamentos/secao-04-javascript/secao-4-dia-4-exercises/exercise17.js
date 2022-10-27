/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
*/
let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function verificaMenorIndice (arrayTeste) {
  let menorNumero = arrayTeste[0];
  for (let index = 1; index < arrayTeste.length; index ++) {
    if (arrayTeste[index] < menorNumero) {
      menorNumero = arrayTeste[index];}}
    return arrayTeste.indexOf(menorNumero)
}

console.log(verificaMenorIndice(arrayTeste));

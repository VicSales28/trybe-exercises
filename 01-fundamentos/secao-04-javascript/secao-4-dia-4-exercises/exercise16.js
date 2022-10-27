/* 
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/
// Primeira interpretação:
let arrayTeste = [2, 3, 6, 7, 10, 1];

function verificaMaiorValor (arrayTeste) {
  let maiorNumero = arrayTeste[0];
  for (let index = 1; index < arrayTeste.length; index ++) {
    if (arrayTeste[index] > maiorNumero) {
      maiorNumero = arrayTeste[index];}}
    return maiorNumero
}
console.log(verificaMaiorValor(arrayTeste));
// Segunda interpretação

function verificaMaiorIndice (arrayTeste) {
  let maiorNumero = arrayTeste[0];
  for (let index = 1; index < arrayTeste.length; index ++) {
    if (arrayTeste[index] > maiorNumero) {
      maiorNumero = arrayTeste[index];}}
    return arrayTeste.indexOf(maiorNumero)
}

console.log(verificaMaiorIndice(arrayTeste));
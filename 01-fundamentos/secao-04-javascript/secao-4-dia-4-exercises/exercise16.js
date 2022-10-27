/* 
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

arrayTeste = [2, 3, 6, 7, 10, 1];

const verificaMaiorValor = (arrayTeste) => {
  let maiorNumero = arrayTeste[0];
  for (let index = 1; index < arrayTeste.length; index += 1) {
    if (arrayTeste[index] > maiorNumero) {
      maiorNumero = arrayTeste[index];
    }
    return maiorNumero;
  }
}
console.log(verificaMaiorValor(arrayTeste));
??????????????????????????????????
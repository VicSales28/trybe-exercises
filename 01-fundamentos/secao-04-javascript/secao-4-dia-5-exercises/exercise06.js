/*
Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
*/
function obterMaiorPalavra (frase) {
  let arrayDePalavras = frase.split(' ') 
  let maiorPalavra = arrayDePalavras[0]

   for (let index = 1; index < arrayDePalavras.length; index += 1) {
    if (arrayDePalavras[index].length > maiorPalavra.length) {
      maiorPalavra = arrayDePalavras[index];
    }
  }
  return maiorPalavra;
}
console.log(obterMaiorPalavra("O céu é azul"))

// Seção 4. Dia 4. Exercícios - Funções
// Faça um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes com os valores que serão comparados.
const a = 10
const b = 5
const c = 2
function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
  if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    return 'O maior número é: ' + primeiroNum;
  } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    return 'O maior número é: ' + segundoNum;
  } else {
    return 'O maior número é: ' + terceiroNum;
  }
}
console.log(maiorDeTres(10,5,2))
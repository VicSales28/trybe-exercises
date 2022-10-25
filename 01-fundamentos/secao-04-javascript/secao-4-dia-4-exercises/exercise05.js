// Seção 4. Dia 4. Exercícios - Funções
// Faça um programa que retorne o maior de dois números. 
// Defina, no começo do programa, duas constantes com os valores que serão comparados.
const a = 10
const b = 5
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else {
    return segundoNum + ' é maior que ' + primeiroNum;
  }
}
console.log(maiorNum(10,5))
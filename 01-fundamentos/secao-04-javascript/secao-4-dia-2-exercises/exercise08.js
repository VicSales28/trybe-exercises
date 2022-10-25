/*
Seção 4. Dia 2. Exercícios - agora, a prática
Iremos utilizar esse array para realizar os próximos exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

06 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let posicao = 0; posicao < numbers.length; posicao += 1) {
  if (numbers[posicao] % 2 != 0) {
    resultado += 1
  } else {
    console.log ("Nenhum valor ímpar encontrado")
  }}


  console.log(resultado)
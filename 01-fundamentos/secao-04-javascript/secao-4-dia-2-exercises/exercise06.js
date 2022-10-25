/*
Seção 4. Dia 2. Exercícios - agora, a prática
Iremos utilizar esse array para realizar os próximos exercícios:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

03 - Calcule e imprima a média aritmética dos valores contidos no array;
*/
console.log("Item 03")
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}
let media = resultado / numbers.length;
console.log(media)

// 04 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, 
// imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

console.log("Item 04")
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20")
}
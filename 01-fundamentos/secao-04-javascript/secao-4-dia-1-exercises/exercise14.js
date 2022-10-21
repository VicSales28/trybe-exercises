/* 
Seção 4. Dia 1. Exercícios - Agora, a prática
09 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos 
uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
*/

const num1 = 40;
const num2 = 20;
const num3 = 5;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log("True");
} else {
    console.log("False");
}


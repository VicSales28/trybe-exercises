/* 
Seção 4. Dia 1. Exercícios - Agora, a prática
08 - Utilize if/else para fazer um programa que defina três números em constantes e retorne true 
se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
*/
const num1 = 20
const num2 = 15
const num3 = 5

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("True")
} else {
    console.log("False")
}

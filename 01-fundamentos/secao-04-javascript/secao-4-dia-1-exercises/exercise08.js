/* 
Seção 4. Dia 1. Exercícios - Agora, a prática
03 - Utilize if/else para fazer um programa que retorne o maior de três números distintos. 
Defina, no começo do programa, três constantes com os valores que serão comparados.
*/

const num1 = 10
const num2 = 40
const num3 = 5

if (num1 > num2 && num1 > num3) {
    console.log("num1 é maior que num2 e num3")
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 é maior que num1 e num3")
} else {
    console.log("num3 é maior que num1 e num2")
}
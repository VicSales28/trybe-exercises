/* 
Seção 4. Dia 1. Exercícios - Agora, a prática
07 - Utilize if/else para fazer um programa que converta uma nota dada em porcentagem 
(de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor 
que 0 ou maior que 100.
*/

const num1 = "92"

if (num1 >= 90 && num1 <= 100) {
    console.log("A")
} else if (num1 >= 80 && num1 <= 100) {
    console.log("B")
} else if (num1 >= 70 && num1 <= 100) {
    console.log("C")
} else if (num1 >= 60 && num1 <= 100) {
    console.log("D")
} else if (num1 >= 50 && num1 <= 100) {
    console.log("E")
} else if (num1 < 50 && num1 >= 0) {
    console.log("F")
} else {
    console.log("Valor inválido")
}

/* 
Seção 4. Dia 1. Exercícios - Operadores lógicos
01 - Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
02 - Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
03 - Implemente condicionais para que:
04 - Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
05 - Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
06 - Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
07 - Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.
08 - Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
09 - Agora imprima a variável message fora das suas condições.
*/

const currentHour = 5
let message = ""

if (currentHour >= 22) {
    console.log(message = "Não deveríamos comer nada, é hora de dormir")
} else if (currentHour >= 18 && currentHour <= 22) {
    console.log(message = "Rango da noite, vamos jantar :D")
} else if (currentHour >= 14 && currentHour < 18) {
    console.log(message = "Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >= 11 && currentHour < 14) {
    console.log(message = "Hora do almoço!!!")
} else if (currentHour >= 4 && currentHour < 11) {
    console.log(message = "Hmmm, cheiro de café recém-passado")
} 
console.log(message)
/* 
Seção 4. Dia 1. Exercícios - Switch e Case
01 - Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 
'aprovada', 'lista' ou 'reprovada';
02 - Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
03 - Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
04 - Caso 'lista', imprima “Você está na nossa lista de espera”.
05 - Caso 'reprovada', imprima “Você foi reprovada(o)”.
06 - Caso default, imprima a mensagem de “Informação incorreta”.
*/

let status = "classificado"

switch (status) {
    case "aprovada": console.log ("Parabéns, você foi aprovada(o)!");
    break
    case "lista": console.log ("Você está na nossa lista de espera");
    break
    case "reprovada": console.log ("Você foi reprovada(o)");
    default: console.log ("Informação incorreta");
}
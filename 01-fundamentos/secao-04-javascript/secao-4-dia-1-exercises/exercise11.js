/* 
Seção 4. Dia 1. Exercícios - Agora, a prática
06 - Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os 
movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto 
com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais).
*/

let pecaDeXadrez = "Rei"

switch (pecaDeXadrez.toLowerCase()) {
    case "rainha": console.log ("Pode andar quantas casas quiser na horizontal, vertical ou diagonal");
    break
    case "rei": console.log ("Pode se mover para qualquer casa adjacente");
    break
    case "bispo": console.log ("Pode se mover para as diagonais");
    break
    case "peão": console.log ("Pode se mover somente para frente, uma casa por vez");
    break
    case "torre": console.log ("Pode mover para frente, para trás ou para os lados");
    break
    case "cavalo": console.log ("Pode mover por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”");
    default: console.log ("Digitação incorreta. Valor não corresponde a uma peça de xadrez");
}
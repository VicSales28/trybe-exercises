/*
Seção 4. Dia 2. Exercícios - agora, a prática

08 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
Obs.: Segunda interpretação
*/
console.log("Item 08")
let arrayCriado = []

for (let posicao = 0; posicao <= 25; posicao += 1) {
    arrayCriado.push(posicao);
  }

console.log(arrayCriado)

//09 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
console.log("Item 09")

for (let posicao = 0; posicao < arrayCriado.length; posicao += 1) {
  console.log(arrayCriado[posicao] / 2);
};
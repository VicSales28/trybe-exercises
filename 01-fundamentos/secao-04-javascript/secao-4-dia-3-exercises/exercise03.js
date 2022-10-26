/* Seção 4. Dia 4. Exercícios - agora, a prática.
Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: 
um que retorne a maior palavra desse array e outro que retorne a menor. 
Considere o número de caracteres de cada palavra.
*/
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]

for (let posicao = 1; posicao < array.length; posicao += 1) {
  if (array[posicao].length > maiorPalavra.length) {
    maiorPalavra = array[posicao];
  }
}
console.log(maiorPalavra);

let menorPalavra = array[0]
for (let posicao = 1; posicao < array.length; posicao += 1) {
  if (array[posicao].length < menorPalavra.length) {
    menorPalavra = array[posicao];
  }
}
console.log(menorPalavra);
/* 
Neste exemplo, serão comparados valores para buscar o MAIOR valor em um array.
Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.
*/
const numbers = [50, 85, -30, 3, 15];

let bigger = numbers.reduce((acc, curr) => { 
  if (acc > curr) {
    return acc
  } else {
    return curr
  }
})

// Se acc for maior que curr, retorne acc; 
// Se não, retorne curr.

// Geralmente, para encontrar o maior valor de um array utilizando o reduce, não utilizamos um valor inicial. Dessa forma, apenas valores presentes no array serão avaliados.

console.log(bigger);
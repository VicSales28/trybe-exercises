/* 
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
*/
let palavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice = 0; indice < palavras.length; indice +=1) { //ou pode for (let indice in palavras) 
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(palavras));

///
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let todosArr = [];

function stringMaisComprida (nomes) {
    let tlength = 0;
    for(let index = 0; index < nomes.length; index +=1){
      if(tlength < nomes[index].length){
        tlength = nomes[index].length;
      }
    }
    for(let index = 0; index < nomes.length; index +=1){
      if(nomes[index].length == tlength){
         todosArr.push(nomes[index]);
      }
    }
   if(todosArr.length == 1){
     return todosArr[0]
   }else{
      return todosArr
  }
}


console.log(stringMaisComprida(nomes));
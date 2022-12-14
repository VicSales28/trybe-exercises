/*
Sorteador de loteria

Desenvolva uma HOF que retorne o resultado de um sorteio. 

Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

*/

const verificadorDeNumeros = (numeroEscolhido, numeroSorteado) => numeroEscolhido === numeroSorteado;

const resultadoDoSorteio = (numeroEscolhido, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(numeroEscolhido, numeroSorteado) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(resultadoDoSorteio(2, verificadorDeNumeros));
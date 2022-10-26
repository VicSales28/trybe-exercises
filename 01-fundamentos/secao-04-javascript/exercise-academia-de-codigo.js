// Exercício 3 - Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

function verificaString(palavra, ending) {
  if (palavra.endsWith(ending)) {
    return true
  }
  return false;
}

//3 com split 
function verificaFimPalavra(word, ending) {
  let resultado = word.split(ending);
  if (resultado[resultado.length - 1] === '') {
    return true;
  }
  return false;
}
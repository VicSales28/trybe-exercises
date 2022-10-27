/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false
*/

const verificaPalindrome = (string) => {
  let newString = "";
  for (let index = string.length - 1; index >= 0; index -= 1) { 
    newString += string[index];
  } if (newString === string) {
   return true
  } else {
    return false
  }
}

console.log(verificaPalindrome("ovo"))
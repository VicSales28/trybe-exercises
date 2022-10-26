/* Seção 4. Dia 4. Exercícios - agora, a prática.
Utilize a estrutura de repetição for para desenvolver um algoritmo 
que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” 
seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois 
troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/
let string = "banana";
let newString = "";

// O ponto inicial do laço será (string.length - 1), que corresponde ao último caractere da string
for (let index = string.length - 1; index >= 0; index -= 1) { 
  newString += string[index];
}

console.log(newString);
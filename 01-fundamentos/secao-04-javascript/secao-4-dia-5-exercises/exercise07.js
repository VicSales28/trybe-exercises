/* 
Crie uma função que calcule a área de um círculo.
Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
Crie a lógica para retornar a área do círculo;
Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).
*/
const circleArea = (raio) => {
  const pi = 3.14
  return raio * raio * pi
}
console.log (`Essa é a área do círculo: ${circleArea(2)}`)

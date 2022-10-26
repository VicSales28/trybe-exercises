// Seção 4. Dia 4.  Exercícios - objetos e for/in
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, 
// ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 
// Valor esperado no console:
let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim"
  };
  
  let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
  };
  
  for (let key in info1 && let key in info2) {
    console.log(key + ': ' + info1[key] && key + ': ' + info2[key]);
  }

// Seção 4. Dia 4.  Exercícios - Agora, a prática: objetos e for/in
// 04 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, 
// ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 
// Valor esperado no console:
console.log("Item 04")
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
for (let properties in info1) 
  //   if (
  //     properties === 'recorrente' &&
  //     info1[properties] === 'Sim' &&
  //     info2[properties] === 'Sim'
  //   ) {
  //     console.log('Ambos recorrentes');
  //   } else {
  //     console.log(info1[properties] + ' e ' + info2[properties]);
  //   }
  // }
  console.log(info1[properties] + ' e ' + info2[properties]);
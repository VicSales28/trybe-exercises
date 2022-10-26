//  Seção 4. Dia 4.  Exercícios - Agora, a prática: objetos e for/in
//  let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  };
//  01 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
//  Use a sintaxe meuObjeto.chave.

console.log("Item 01")
let info = {
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Olá " + info.personagem)

// 02 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, 
// imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. 

console.log("Item 02")
info['recorrente'] = 'Sim'

console.log(info)

// 03 - Faça um for/in que mostre todas as chaves do objeto.

console.log("Item 03")
for (let key in info) {
  console.log(info[key]);
}
for(let properties in info) {
  console.log(info[properties]);
}
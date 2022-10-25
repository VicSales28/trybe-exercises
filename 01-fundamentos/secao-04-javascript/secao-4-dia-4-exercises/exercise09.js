//  Seção 4. Dia 4.  Exercícios - objetos e for/in
//  let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  };
//  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
//  Use a sintaxe meuObjeto.chave.

let info = {
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Olá " + info.personagem)

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, 
// imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info['recorrente'] = 'Sim'

console.log(info)

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log(key + ': ' + info[key]);
}

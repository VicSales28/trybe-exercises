/*
Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.
*/

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

emailListInData.forEach((element) => console.log(`O email ${element} está cadastrado em nosso banco de dados!.`)) 
// Código em apenas uma linha. Para isso, basta remover as chaves {} e deixar o console logo após a arrow
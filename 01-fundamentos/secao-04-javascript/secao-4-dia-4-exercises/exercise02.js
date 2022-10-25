//Seção 4. Dia 4. Exercícios - for/in e for/of
//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 
//'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let posicao in names) {
  console.log("Olá " + names[posicao])
}
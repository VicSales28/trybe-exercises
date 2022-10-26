/* Seção 4. Dia 4.  Exercícios - Agora, a prática: Leitura de Objetos
Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
01 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos,
e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama
‘O Pior Dia de Todos’”.
*/
console.log("Item 01")
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)
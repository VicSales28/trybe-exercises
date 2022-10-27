/* Seção 4. Dia 4.  Exercícios - Agora, a prática: Leitura de Objetos
03 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: 
“Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado 
automaticamente pelo seu código.
*/
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
  {
    titulo: 'O Pior Dia de Todos',
    autor: 'Daniela Kopsch',
    editora: 'Tordesilhas'
  },
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
  }
]
};


console.log(`"Julia tem ${leitor.livrosFavoritos.length} livros favoritos", onde ${leitor.livrosFavoritos.length} é um número gerado automaticamente pelo seu código.`)
  

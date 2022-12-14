
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/*
Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
*/
const formatedBookNames = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

console.log(formatedBookNames);
/*
Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO
*/
const formatedAuthorNamesBirth =  books.map((element) => `${element.author.name} - ${element.author.birthYear}`);

console.log(formatedAuthorNamesBirth);
/*
Construa um array de objetos a partir do array de livros.
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. 
O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha.
*/
const nameAndAge = () => {
  return books.map((element) => (
    {
      author: element.author.name,
      age: element.releaseYear - element.author.birthYear,
    })).sort((a, b) => a.age - b.age);
}
console.log(nameAndAge());
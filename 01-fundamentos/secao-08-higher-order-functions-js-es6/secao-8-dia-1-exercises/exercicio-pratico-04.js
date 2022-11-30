
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
Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
*/
console.log(books.find((books) => books.author.birthYear === 1947));

/*
Retorne o nome do livro com menor número de caracteres (menor nome).
*/
const verifySmallerName = (array) => {
  let smallerName = array[0]['name'];

  array.forEach((element) => {
    const bookName = element.name;
    if (bookName.length < smallerName.length) {
      smallerName = bookName;
    }
  });

  return smallerName;
};

console.log(verifySmallerName(books));

/*
Encontre o primeiro livro cujo nome possua 26 caracteres.
*/
const getNamedBook = (array) => {
  const element = array.find((element) => (element.name).length === 26);
  return element.name;
};

console.log(getNamedBook(books));

/*
Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
*/
function everyoneWasBornOnSecXX(array) {
  return array.every((array) => array.author.birthYear >= 1947);
};

console.log(everyoneWasBornOnSecXX(books));

/*
Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
*/
const someBookWasReleaseOnThe80s = (array) => {
  return array.some((array) => array.releaseYear >= 1980 && array.releaseYear <= 1989);
};

console.log(someBookWasReleaseOnThe80s(books));
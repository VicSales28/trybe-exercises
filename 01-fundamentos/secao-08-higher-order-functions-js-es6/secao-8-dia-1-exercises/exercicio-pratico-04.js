
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
01 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
*/
console.log('01:')
let writer = books.find((book) => book.author.birthYear === 1947)
console.log(writer.author.name);

/*
02 - Retorne o nome do livro com menor número de caracteres (menor nome).
*/
console.log('02:')

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
03 - Encontre o primeiro livro cujo nome possua 26 caracteres.
*/
console.log('03:')

const getNamedBook = (array) => {
  const element = array.find((element) => (element.name).length === 26);
  return element.name;
};

console.log(getNamedBook(books));

/*
04 - Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
*/
console.log('04:')

function everyoneWasBornOnSecXX(array) {
  return array.every((array) => array.author.birthYear >= 1901 && array.author.birthYear <= 2000);
};

console.log(everyoneWasBornOnSecXX(books));

/*
05 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
*/
console.log('05:')

const someBookWasReleaseOnThe80s = (array) => {
  return array.some((array) => array.releaseYear >= 1980 && array.releaseYear <= 1989);
};

console.log(someBookWasReleaseOnThe80s(books));

/*
06 - Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
*/
// (Resolução feita por Pablo na mentoria: retorna true caso haja pessoa autora que tenha nascido no mesmo ano de outra pessoa autora)
console.log('06:')
const verify = books.some((book, index) => {{ 

  const test = books.some((book2,index2) => {
    if (index === index2) { //
      return '';
    }
    return book.author.birthYear === book2.author.birthYear ? true : false;
  });
  
  return test;
}})
console.log(verify);
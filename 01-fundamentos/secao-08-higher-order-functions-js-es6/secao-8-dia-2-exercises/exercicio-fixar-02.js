/* Fazendo uma  uma mesma função usando for e, em seguida, usando map:
*/
const persons1 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames1 = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames1.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames1);

//

const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

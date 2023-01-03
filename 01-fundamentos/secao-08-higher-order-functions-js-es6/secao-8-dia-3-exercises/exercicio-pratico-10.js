const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const lettersArray = names.join('').toLowerCase().split('');

const countA = (array) => {
  return array
  .reduce((acc,curr) => {
    if (curr === 'a') {
      return acc += 1;
    } else {
      return acc;
    }
  },0)
}

console.log(countA(lettersArray));
const techList = (array, string) => {
  if (array.length === 0) {
    return 'Vazio!';
  } 
  let arrayDeObjetos = [];
  for (let index of array.sort()) {
    let newObject = {
      tech: index,
      name: `${string}`,
    };
    arrayDeObjetos.push(newObject);
  }
  return arrayDeObjetos;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;
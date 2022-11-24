const removerItem = (array, remover) => {
  array.splice(array.indexOf(`${remover}`), 1);
  return array;
}

console.log(removerItem ([1,2,3,4,5], 5));

module.exports = removerItem; 
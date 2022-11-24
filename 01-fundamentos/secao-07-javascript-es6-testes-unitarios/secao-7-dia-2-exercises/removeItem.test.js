const removerItem = require ('./removeItem');

describe('Remove item do array', () => {

  it('Remover 5', () => {
    const array = [1,2,3,4,5];
    expect([1,2,3,4]).toEqual(removerItem(array, 5));
  });

  it('Espera-se que não tenha 5', () => {
    const array = [1,2,3,4,5];
    expect(removerItem(array, 5)).not.toContain(5);
  });

});
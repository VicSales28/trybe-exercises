const { encode, decode } = require ('./encodeDecode');

describe('Testes das funções encode e decode', () => {

  it('Teste se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect('12345').toEqual(encode('aeiou'));
  });

  it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
    expect('aeiou').toEqual(decode('12345'));
  });

  it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('ama')).toEqual('1m1');
    expect(encode('teve')).toEqual('t2v2');
    expect(encode('vivi')).toEqual('v3v3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('uva')).toEqual('5v1');
    expect(decode('1m1')).toEqual('ama');
    expect(decode('t2v2')).toEqual('teve');
    expect(decode('v3v3')).toEqual('vivi');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('5v1')).toEqual('uva');
  });

  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('trybe').length).toEqual(5);
    expect(decode('tryb2').length).toEqual(5);
  });
});
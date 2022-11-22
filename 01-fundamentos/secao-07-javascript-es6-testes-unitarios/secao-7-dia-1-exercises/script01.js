const verifyValue = (value1, value2) => {

  if (!value1 || !value2) { // A condição if está verificando aqui se value1 OU value2 são falsos ou seja
    // se o usuário não preencheu devidamente os campos (inputs).
    // A condição só será satisfeita se ao menos um dos campos não tenha sido preenchido.
    throw new Error('Preencha os campos adequadamente para que a soma seja realizada, não podem haver campos vazios.'); // Lançando novo erro,
    // do tipo descritivo com orientações (sem try e cath, error só aparece no console).
  }

  if (isNaN(value1) || isNaN(value2)) { // A condição if está verificando aqui se value1 OU value2 são do tipo numérico
    // A condição só será satisfeita se ao menos um dos campos não seja um número.
    throw new Error('Digite nos campos valores numéricos para que a soma seja realizada.'); // Lançando novo erro
    // do tipo descritivo com orientações (sem try e cath, error só aparece no console).
  }
};

const sum = () => {

  try { // Dentro do try, é inserido o bloco de código respnsável pela soma
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    verifyValue(value1, value2); // Executa a função verifyValue 
    // (se houver algum error, é a linha de código responsável pelo disparo desse error)

    const result = Number(value1) + Number(value2);

    document.getElementById('result').innerHTML = `Resultado: ${result}`; // Adiciona a mensagem com o resultado da operação no elemento que contém o id result
  } 
  
  catch (error) { //Dentro do catch, é inserido o parâmetro de error o qual deve aparecer para o usuário
    document.getElementById('result').innerHTML = `Erro: ${error.message}`; // Adiciona a mensagem de error no elemento que contém o id result
  } 
  
  finally { // Aqui o finally é utilizado para apagar os valores dos inputs ao final do bloco try/catch.
    document.getElementById('value1').value = ''; 
    document.getElementById('value2').value = ''; 
  }

}

// Através desse bloco de código acima, o error não vai aparecer no console, mas sim para o usuário.

window.onload = () => {

  const button = document.getElementById('button');
  button.addEventListener('click', sum);

};
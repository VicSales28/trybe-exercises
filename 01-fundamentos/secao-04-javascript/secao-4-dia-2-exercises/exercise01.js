//Seção 4. Dia 2. Exercícios - Arrays (listas)
//Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let ObtenhaValorDaPosicao1 = menu[1]

console.log(ObtenhaValorDaPosicao1);

//Procure o índice do valor “Portfólio” do array menu:

let indiceDoValorServicos = menu.indexOf('Serviços');

console.log(indiceDoValorServicos);

//Adicione o valor “Contato” no final do array menu:

menu.push('Contato')
console.log(menu)
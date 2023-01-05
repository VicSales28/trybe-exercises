/*
03 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
*/

let numerosPares = [0,1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

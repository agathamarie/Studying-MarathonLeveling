/* Exercício 4
Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
Utilize essa função para converter diferentes strings. */

function capitalizeString(string) {
    return string.toUpperCase();
}

let string1 = 'Agatha';
let string2 = 'Marie';
let string3 = 'Alysson';

console.log(capitalizeString(string1));
console.log(capitalizeString(string2));
console.log(capitalizeString(string3));
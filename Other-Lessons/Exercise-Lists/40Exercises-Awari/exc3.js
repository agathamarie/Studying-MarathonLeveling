/* Exercício 3
Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado.
Utilize essa função para calcular a média de diferentes conjuntos de números. */

function calculateArithmetic(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}

let array1 = (array = [10, 10, 10, 10])
console.log(calculateArithmetic(array1));

let array2 = (array = [1, 2, 3, 4, 5])
console.log(calculateArithmetic(array2));

let array3 = (array = [5, 7, 58, 21, 47, 9])
console.log(calculateArithmetic(array3));
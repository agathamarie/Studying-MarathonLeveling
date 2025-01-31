/* Exercício 6
Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos. */

function invertArray(array){
    return array.slice(0).reverse();
}

function invertArray(array) {
    let inverted = [];
    for (let i = array.length - 1; i >= 0; i--) {
        inverted.push(array[i]);
    }
    return inverted;
}
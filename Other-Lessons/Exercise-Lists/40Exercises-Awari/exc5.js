/* Exercício 5
Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for. */

function primeNumber(number) {
    if (number < 2) {
        return false;
    }
    if (number % 2 === 0 && number !== 2) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(1));  // false
console.log(primeNumber(2));  // true
console.log(primeNumber(3));  // true
console.log(primeNumber(4));  // false
console.log(primeNumber(17)); // true
console.log(primeNumber(18)); // false
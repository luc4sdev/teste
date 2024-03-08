// Questão 2 

function fibonacci(n) {
    let sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

function checkFibonacciNumber(n) {
    let sequence = fibonacci(n);
    if (sequence.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 34;
let resultado = checkFibonacciNumber(numero);
console.log(resultado);

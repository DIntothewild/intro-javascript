let n1 = 10;
let n2 = 6;

function sum(n1, n2) {
    return n1 + n2;
}

function substract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function total(n1, n2) {
    return sum(n1, n2) + substract(n1, n2) + multiply(n1, n2) + divide(n1, n2);
}

module.exports = { sum, substract, multiply, divide, total };

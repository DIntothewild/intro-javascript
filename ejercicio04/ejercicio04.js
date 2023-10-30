/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

let readline = require("readline-sync");
let n1 = Number (readline.question("Dime un numero"));
let n2 = Number (readline.question("Dime otro numero"));
let n3 = Number (readline.question(" Dime un tercer numero"));
let multiply = (n1 * n2 * n3);
let sum = (n1 + n2 + n3); 
function sumOrMultiply(n1, n2, n3) {
     //Escribe tu codigo aqui
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
        return "Has introducido uno o varios caracteres no validos";
    }

 if (n1 < 0){
    return multiply;
 } else {
    return sum
 }
}
resultado = sumOrMultiply(n1, n2, n3);
console.log(resultado);
module.exports = { sumOrMultiply };

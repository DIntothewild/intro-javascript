/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */

let readline = require("readline-sync");
let numero = Number(readline.question("Introduce un numero"));
function parImparNulo() {
    if(isNaN(numero)){
         return "Has introducido uno o varios caracteres no validos";
    }
 //Escribe tu codigo aqui
    if(numero % 2 == 0){ 
    return "El numero es par";

    } else if (numero % 2 == 1) {
        return "El numero es impar";
    } else 
     return ("el numero es 0");

}
resultado = parImparNulo(numero);
console.log(resultado);

module.exports = { parImparNulo };

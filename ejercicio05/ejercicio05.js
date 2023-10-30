/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */
//Escribe tu codigo aqui

let readline = require("readline-sync");
let numeroEntero = Number(readline.question("Dime un numero entero"));
function determinarTipoNumero(numeroEntero) {
    if (isNaN(numeroEntero)){
        return "Has introducido uno o varios caracteres no validos";
    } 
    if (numeroEntero < 0){
        return "El numero entero es negativo";
    } else if (numeroEntero > 0){
        return "el numero entero es positivo";
    } else {
        return "el numero es nulo";
    }
    }
       resultado = determinarTipoNumero(numeroEntero); 
       console.log(resultado);
    
module.exports = { determinarTipoNumero };

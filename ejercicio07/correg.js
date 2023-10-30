/**
 *  Ejercicio 7
 *  Construir un algoritmo que reciba la cantidad de dinero entregado
 *  y el coste del producto. Debera calcular el cambio que se entregara
 *  al cliente. Debes tener en cuenta que el cliente podria entregar
 *  una cantidad de dinero insuficiente.
 */
let readline = require("readline-sync");
let numero = Number(readline.question("Introduce la cantidad de dinero que entregas: "));
let costeprod = Number(readline.question("Introduce el coste del producto: "));
let cambio = numero - costeprod; // Corregido aquí

function cambioCliente() {
    if (isNaN(numero) || isNaN(costeprod)) {
        return "Has introducido uno o varios caracteres no válidos";
    }

    if (cambio === 0) {
        return "El precio pagado es exacto";
    } else if (cambio > 0) {
        return `El cambio correspondiente es ${cambio}`;
    } else {
        return "No has entregado suficiente dinero para comprar el producto";
    }
}

resultado = cambioCliente();
console.log(resultado);

module.exports = { cambioCliente };
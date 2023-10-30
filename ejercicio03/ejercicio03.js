/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */


let readline = require("readline-sync");
let n1 = Number (readline.question("Dime un numero"))
let n2 = Number (readline.question("Dime otro numero"));
let n3 = Number (readline.question("Dime un tercer numero"));

function compareThreeNumbers(n1,n2,n3){

//Escribe tu codigo aqui

    if (n1 == n2 && n2 == n3){
        return "Los numeros son iguales";
   
    } else if (n1 > n2 && n1 > n3){
    return "n1 es el mayor";
   
    } else if (n1 < n2 && n2 > n3){
      return "n2 es el mayor";

    } else  if (n1 < n2 && n2 < n3){
        return "n3 es el mayor";
}
}
resultado =  compareThreeNumbers(n1, n2, n3);
console.log(resultado);

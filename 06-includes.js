'use strict'

//? .include

//* ES7 ha agregado una nueva función que verifica si un elemento está presente en la matriz o no y devuelve un valor booleano de trueo false.

const numbers = ["one", "two", "three", "four"];

console.log(numbers.includes("one")); // true 
console.log(numbers.includes("five")); // false

//* El includesmétodo también resulta útil cuando se compara con diferentes valores.

const day = "monday";

if(day === "monday" || day === "tuesday" || day === "wednesday") {
  // do something
}

//* Lo podemos simplificar de la siguiente manera:

const day = 'Monday';

if(["monday", "tuesday", "wednesday"].includes(day)){
    //Do something
}

//Es muy util cuando se buscan valores en una matriz


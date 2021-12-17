'use strict'

// ?EXPORTACIONES PREDETERMINADAS

//Puede haber como máximo una exportación predeterminada en un solo archivo. Sin embargo, podemos combinar varias named exports y una defoult export en un solo archivo.

//Para declarar una exportacion predeterminada, agregamos la palabra clave predeterminada delante de la palabra clave export de esta manera.

//constants.js

const name = 'Dani';
export default name;

//Para importar la exportacion predeterminada, no agregamos las llaves como en la exportacion con nombre

import name from './constnats'

//Si tenemos varias exportaciones con nombre y una exportacion predeterminada...

export const PI = 3.14159;
export const AGE = 30;

const NAME = 'Dani';
export default NAME;

//Y para importarlo todo en una sola linea, necesitamos usar la variable exportada predeterminada antes del corchete

import NAME, {PI,AGE} from './constants'

//Una especialidad de la exportacion predeterminada, es que: Podemos cambiar el nombrede la variable exportada durante la importacion:

const AGE = 30;
export default AGE;

//En otro archivo...

import myAge from './constants';
console.log(myAge);

//Aqui hemos cambiado el nombre de la variable exportada predeterminada de AGE a myAge.

//Esto funciona por que solo puede haber una exportacion predeterminada, por lo que podemos nombrarla como deseémos.

//Otra cosa a tener en cuenta sobre la exportacion predeterminada es que la palabra clave de exportacion predeterminada, no puede ir antes de una declaracion de variable como esta

//export default const AGE = 30 //Dará error

//Debemos usar la palabra clave export por defecto en una línea separada:

const Age = 30;
export default Age;

//Sin embargo, podemos exportar el valor predeterminado sin declara la variable de esta manera:

export default{
    name: 'Dani',
    age: 35
};

//Y en el otro archivo

import user from  './constants'
console.log((user.name)); //Dani
console.log(user.age); //35

//Existe otra forma de importar todas las variables exportadas en un archivo usando la siguiente sintaxis:

import * as constants from '.constants'

//Aqui estamos importando todas las exportacions con nombre y predeterminadas que tenemos en constants.js y almacenamos en la variable constants. Por lo que constans se convertirá en un objeto ahora.

export const USERNAME = 'Dani';
export default{
    name: 'Billy',
    age:40
};

//Y en el otro archivo, lo usamos así:

import * as constants from './Constants'

console.log(constants.USERNAME); // David
console.log(constants.default); // { name: "Billy", age: 40 }
console.log(constants.default.age); // 40

//?En ES6, los datos declarados en un archivo no son accesibles a otro archivo hasta que se exportan desde ese archivo y se importan a otro archivo.

//*Si tenemos una sola cosa en un archivo para exportar como declaración de clase, usamos la exportación predeterminada, de lo contrario usamos la exportación con nombre. También podemos combinar exportaciones predeterminadas y con nombre en un solo archivo.
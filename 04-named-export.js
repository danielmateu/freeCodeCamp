'use stric'

//Para exportar un valor como named export, lo hacemos así:

export const temp = 'This is some dummy text.';

//Si tenemos multiples cosas a exportar, podemos escribit una declaracion de exportacion en una linea separada delante de la declaración de la variable. Especificamos las cosas a exportar entre llaves.

const temp1 = 'This is so dummy text';
const temp2 = 'This is another dummy text';

export { temp1, temp2}

//Hay que tener en cuenta que la sinteaxis de exportacion no es una sintaxis literal de objeto. No podemos usar los pares clave-valor de esta forma

//Está mal!

//export { key1:value1, key2:value2}

//Para importar las cosas que exportamos, usamos la siguiente sintaxis:

import{temp1,temp2} from './nombreDelArchivo';

//Nos es necesario agregar el .js al importar algo del archivo, ya que se considera de forma predeterminada.

//Una cosa a tener en cuenta es que el nombre utilizado durante la exportacion, debe coincidir con el nombre que utilizamos durante la importacion

//constants.js

export const PI = 3.14159;

//Al importar la constante, debemos usar el mísmo nombre que hemos usado al exportar.

import{PI} from './constants'

//Otro nombre, devolverá error.

//Pero si que podemos cambiar el nombre de esta forma:

import {PI as PIValue} from '.constants'

//Hemos cambiado el nombre de PI a PIValue, por lo tanto, no podemos usar el nombre PI de la variable ahora.

//Tambien podemos utilizar la sintaaxis de cambio de nombre a la hora de exportar:

//constants.js
const PI = 3.14159;

export{PI as PIValue};

//Y para importar, lo haremos así:

import{PIValue} from './constants';

//Para exportar algo como una named export, primero debemos declararlo

//export 'Hello' //Dará error

export const greeting = 'Hello' //OK

//export {name:'David'} //Da error

export const object = {name: 'David'}; //OK

//El orden en el que importamos, no es importante

//Ejemplo


const isValidEmail = function(email){
    if(/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/.test(email)){
        return 'email is valid';
    }else return 'email is invalid';
};

const isValidPhone = function(phone){
    if(/^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(phone)){
        return 'Phone number is valid'
    }else return 'phone number is invalid'
};

function isEmpty(value){
    if(/^\s*$/.test(value)){
        return 'Campo vacío'
    }else return 'El campo no está vacío'
}

export{isEmpty,isValidPhone,isValidEmail}

//Y usaremos las funciones en el documento necesario de la siguiente manera:

import{isEmpty,isValidPhone,isValidEmail} from './utils/validations'

console.log("isEmpty:", isEmpty("abcd")); // isEmpty: string is not empty and does not contain spaces

console.log("isValidEmail:", isValidEmail("abc@11gmail.com")); // isValidEmail: email is valid

console.log("isValidEmail:", isValidEmail("ab@c@11gmail.com")); // isValidEmail: email is invalid

//Podemos importar solo los elementos exportados requeridos y en cualquier orden, por lo que no necesitamos verificar el orden en que exportamos en otro archivo.



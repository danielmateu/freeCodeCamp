'use strict'

//Promises

/**
 * ?Las promises se añadieron a ES6 como una implementacion nativa.Una promesa representa una operacion asincrona que se completará en un futuro.
 * 
 * Usando Promises en ES6, podemos hacer una llamada API a nosotros mismos y esperar hasta que esté lista para realizar alguna operación.
 * 
 * !Cómo crear una promesaPara crear una promesa, usaremos la funcion constructora Promise:
 * 
 */

/*
const promise = new Promise(function(resolve,reject){

});

*/

/**
 * ?El constructor Promise toma una funcion como argumento y la funcion internamente recive resolve y reject como parámetros.
 * 
 * *Estos parámetros son funciones que podemos llamar dependiendo del resultado de la operación asíncrona.
 * 
 * !La promesa tendrá tres estados: 
 * 
 * PENDIENTE:
 *  Cuando creamos la promesa (new Promise), está en estado pendiente(Pending)
 * 
 * CUMPLIDO: Cuando llamamos a la funcion de resolución (resolve), entra en estado cumplido (fulfilled)
 * 
 * RECHAZADO: Cuando llamamos la funcion rechazar, pasará a estado rechazado (reject)
 */

/*
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum = 4+5;
        resolve(sum);
    },3000)

    
})
*/

/**
 * !Hemos creado una promesa que resolverá la suma de 4 + 5 en 3000ms (3 segundos), para obtener el resultado, debemos hacer un callback usando .then de la siguiente manera:
 */

/*
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum = 4 + 5;
        resolve(sum)
    },3000)
});

promise.then(function(result){
    console.log(result);
});

*/

/**
 * !Si la operacion no es exitosa, entonces llamamos a la funcion reject, de esta manera:
 */

 const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum = 4 + 5 ;
        if(isNaN(sum)){
            reject('Error!')
        }else resolve(sum)
    },3000)
});

/*
promise.then(function(result){
    console.log('first .then handler');
    return result;


!Estamos recibiendo un mensaje de error no detectado, ahora debemos agregar un controlador de errores para detectar ese error.

}).catch(function(error){
    console.log(error);
});
 */



/**
 * Al agregar el .catch, detectamos el error y lo registramos en la consola.
 * Esto evita que la aplicación se detenga de forma abrupta!
 * 
 * !Siempre se recomienda agregar el controlador .catch por cada promesa, para que la app no deje de ejecutarse debido al error.
 */

/**
 * ?Encadenar Promesas
 * 
 * Podemos añadir multiples .then a nuestras promesas de esta forma:
 */

promise.then(function(result){
    console.log('first .then handler');
    return result;
}).then(function(result){
    console.log('second .then handler');
    return result;
}).then(function(result){
    console.log(result);
    return(result);
}).catch(function(error){
    console.log(error);
    return(error);
});

/**
 * ? Cómo retrasar la ejecución de una promesa en JS
 * 
 * *Muchas veces no querremos crear una promesa inmediata, pero la querremos crear después que se completne una o varias operaciones. 
 * *Para lograr esto, podemos envolver la promesa en una función y devolver esa promesa de esa función de esta forma:

 */


function createPromise(){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            const sum = 4+5;
            if(isNaN(sum)){
                reject('ERROR!')
            }else resolve(sum)
        },2000);
    });
}

//De esta forma podemos usar los parametros de la funcion dentro de la promesa, haciendo la función realmente dinámica.

async function createSecondPromise(a,b){
    try {
        return await new Promise(function (resolve, reject) {
            setTimeout(function () {
                const sum = a + b;
                if (isNaN(sum)) {
                    reject('ERROR, I need number bitch!');
                } else
                    resolve(sum);
            }, 5000);

        });
    } catch (error) {
        console.log(error);
    }

}

createSecondPromise(4,'!')
    .then(function(output){
        console.log(output);
    });

/**
 * ?Cuando creamos una promesa, se resolverá o rechazará. Por lo que no podemos agregar dos llamadas de función de resolución o rechazo en la misma promesa. Podemos pasar solo un valor a la función de resolucioón o rechazo. Si queremos pasar varios valores a una función de resolución, lo podemos pasar como un objeto:                   
 
 */

const newpromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const sum = 10 + 4;
        resolve({
            a:10,
            b:4,
            sum
        })
    },1000);
});

newpromise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})
'use strict'

/**
 * ?COMO USAR LAS FUNCIONES FLECHA
 * *Hasta ahora hemos usado la sintaxis regular de ES5 para crear promesas, pero hay que cambiar a las funciones flecha 
 */

const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        const sum = 4+5+'a';
        if(isNaN(sum)){
            reject('ERROR!!!');
        }else resolve(sum);
    },3000)
});

promise.then((result)=> console.log(result))
.catch((error) => console.log(error));
'use strict'

//ES6 ga agregado una caracteristica bastante util de proporcionar parametros predeterminados al definir funciones

//Supongamos que tenemos una app, donde una vez que el usuario inicia sesion en el sistema, le mostramos un mensaje de bienvenida:

function showMessage(firstName) {
    return `Welcome back ${firstName}`
}

console.log(showMessage('Dani'));

//Pero que pasa si no tenemos el nombre de usuario en nuestra base de datos, ya que era un campo opcional al registrarse?

//?Podemos mostrar el mensaje de bienvenida al usuario despues de iniciar la sesión.

//*Primero debemos verificar si firstName se proporciona y luego mostrar el mensaje correspondiente. Antes de ES6:

function showMessage(firstName) {
    if (firstName) {
        return `Welcome ${firstName}`
    } else return 'Welcome bro!'
}

console.log(showMessage('Dani'));
console.log(showMessage());

//*Ahora en ES6 usando los parámetros de función predeterminados, podemos escribir el codigo de la siguiente forma:

function showMessage(firstName = 'Bro') {
    return `Welcome Back ${firstName}`
}

console.log(showMessage('Dani'));
console.log(showMessage());

//?Podemos asignar culaquier valor como valor predeterminado al parámetro de la función.

function display(a = 10, b = 20, c = b) {
    console.log(a, b, c);
}

display();
display(40);
display(1, 70);
display(1, 30, 70);

//*Hemos asignado valores únicos a los parámetros de la función a y b, pero para c, estamos asignando el valor de b.

//*Cualquier valor que le hayamos proporcionado a b se asiganrá a c, siempre que no se proporcione un valor especifico para c al llamar la función.

//*Si el argumento que se pasa, es indefinido, el valor predeterminado se usará para el parámetro correspondiente

//? Tambien podemos asignar valores complejos o calculados como valor predeterminado.

const defaultUser = {
    name: 'Dani',
    location: 'Barcelona',
    job: 'Puto'
}

const mostrar = (user = defaultUser, age = 60 / 2) => {
    console.log(user, age);
};
mostrar();

//Vamos a revisar el siguiente código ES5:

/*
function getUsers(page,results,gender,nationality){
    var params = '';
    if(page === 0||page){
        params += `page = ${page}`;
    }
    if(results){
        params += `results = ${results}`;
    }
    if(gender){
        params += `gender = ${gender}`;
    }
    if(nationality){
        params += `nationality = ${nationality}`;
    }
}



fetch('https://randomuser.me/api/?' + params)
.then(function(response){
    return response.json();
}).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log('error', error);
})
*/
//? En este codigo estamos haciendo una llamada API a la API de usuario aleatorio, pasando vrios parámetros opcionales en la funcion getUsers.

//* Así que antes de hacer la llamada a la API, hemos añadido diferentes ifs para comprobar si se añade o no el parámetro.

//*En lugar de tantos condicionales If, podemos usar los parámetros predeterminados mientras definimos los parámetros de la función:

function getUser(page = 0, results = 100, gender = 'Male', nationality = 'us') {
    fetch(`https://randomuser.me/api/?page=${page}&results=${results}&gender=${gender}&nationality=${nationality}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (error) {
            console.log('error', error);
        });
}

getUser();

//* hemos simplificado mucho el código. Entonces, cuando no proporcionamos ningún argumento a la getUsers, tomará valores predeterminados y también podemos proporcionar nuestros propios valores como este:

getUser(1, 20, 'female', 'gb');


//! Nulo no es igual a indefinido

//* Pero debemos tener en cuenta una cosa: 

//Cuando pasamos null como argumento, estamos diciendo especificamente que asignamos un valor null al argumento. Undefined, tomará el valor predeterminado.

display('David', 35, undefined); // David 35 NY
display('David', 35, null); // David 35 null
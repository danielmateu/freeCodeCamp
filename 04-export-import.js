'use strict'

/**
 * Before ES6 came into play, we used multiple script tags in a single HTML file to import different JavaScript files like this:

<script type="text/javascript" src="home.js"></script>
<script type="text/javascript" src="profile.js"></script>
<script type="text/javascript" src="user.js"></script>

* ? si teníamos una variable con el mismo nombre en diferentes archivos JavaScript, se crearía un conflicto de nomenclatura y el valor que esperaba no sería el valor real que obtuvo.

* ?Cada archivo JavaScript que escribimos en ES6 se conoce como módulo. Las variables y funciones que declaramos en cada archivo no están disponibles para otros archivos hasta que las exportamos específicamente desde ese archivo y las importamos a otro archivo.

* !Hay dos tipos de exportaciones

* *Named Exports: There can be multiple named exports in a single file

export const temp = 'Foo Fighters are great!'

* *Default Exports: There can be only one default export in a single file
 */




// A diferencia del XML, el fetch es un método nativo de JS
/*
Hacemos una petición GET a la URL: https://reqres.in/api/users
*/

const usuarioUrl = 'https://reqres.in/api/users';

fetch(usuarioUrl)
    // hacemos una cadena de promesas, en la que tenemos la respuesta completa,
    // luego conseguimos el cuerpo de la petición y luego añadimos el cuerpo a una
    // variable para poder extraer los datos de una manera más sencilla
                // el resp.json() nos devuelve el body de la petición
    .then(resp => resp.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
    });
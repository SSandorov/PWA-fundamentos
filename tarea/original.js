// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.dev/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/
// Variables para almacenar las URL
const UrlSw = 'https://swapi.dev/api/people/1/';
const UrlUsuario = 'https://reqres.in/api/users';

// Resolución de la tarea #1
// Petición GET normal
// fetch(UrlSw)
//     .then(resp => resp.json())
//     .then(({name, gender}) => {
//         console.log(name);
//         console.log(gender);
//     })
//     .catch(error => {
//         console.log(error);
//     });



// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

const postPersonaje = async(personaje) => {

    const data = {
        name: personaje.name,
        gender: personaje.gender
    }

    return fetch(UrlUsuario, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        })
}

fetch(UrlSw)
    .then(resp => resp.json())
    .then(postPersonaje)
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log(error);
    });






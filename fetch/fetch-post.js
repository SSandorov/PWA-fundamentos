/*
Hacemos una petición POST a la URL: https://reqres.in/api/users

La petición recibe un nombre y un trabajo, y nos devuelve un id y fecha de creación
*/

const usuarioUrl = 'https://reqres.in/api/users';

// Info que recibe la petición
const usuario = {
    nombre: 'Fernando',
    edad: 32
};

fetch(usuarioUrl, {
    // tipo de petición
    method: 'POST',
    // info a enviar
    // tenemos que enviar la info como un JSON de tipo string
    body: JSON.stringify(usuario),
    // con los headers especificamos el tipo de datos que estamos enviando
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(resp => resp.json())
        .then(console.log)
        // recogemos el error y lo mostramos en consola
        .catch(error => {
            console.log('La petición falló');
            console.log(error);
        });
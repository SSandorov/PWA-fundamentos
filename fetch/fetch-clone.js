// Cómo manejar el uso repetido de una promesa
/*
Hacemos una petición GET a la URL: https://reqres.in/api/users/1
*/

const usuarioURL = 'https://reqres.in/api/users/1';

fetch(usuarioURL)
    .then(resp => {
        // si necesito la respuesta de una petición para usarla varias veces,
        // no puedo llamar la petición más d euna vez, así que necesito emplear
        // el resp.clone() para solucionar este problema
        resp.clone().json()
            .then(console.log);

        resp.json()
            .then(console.log);
    });
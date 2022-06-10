/*
Cuando la petición no falla, porque el dominio es el correcto, pero la ruta falla,
nos encontramos con que el .catch() no nos recoge el error
Estos errores se engloban en el 40X y debemos manejarlos a parte

Para solucionar este problema, necesitamos un condicional en el .then() que nos compruebe
si la peticion.ok es correcta o no, y nos devuelva una respuesta, así podemos manejar
este fallo
*/

/*
Hacemos una petición GET a la URL: https://reqres.in/api/users/1
*/
                                            // este usuario no existe
const usuarioURL = 'https://reqres.in/api/users/10000';

fetch(usuarioURL)
    .then(resp => {
        // así manejamos este error
        if(resp.ok) {
            return resp.json();
        } else {
            // así manejamos un error personalizado
            throw new Error('No existe el usuario que está indicando');
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });

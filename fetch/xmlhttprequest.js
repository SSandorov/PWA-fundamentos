/*
El XMLHttpRequest funciona exclusivamente en la web, por lo que debemos
añadir un script en el html

Es el precursor al fetch()
*/

const request = new XMLHttpRequest();

                                                    // petición asíncrona
request.open('GET', 'https://reqres.in/api/users/2', true);
// en caso de que necesite mandar un argumento
request.send(null);

// función que maneja los cambios de estado de la petición
request.onreadystatechange = (state) => {
    // la petición 4 es la que nos dice que la petición terminó, y hemos recibido
    // la información que pedimos
    if (request.readyState === 4) {
        // guardamos la respuesta en una variable
        const resp = request.response;
        // la respuesta viene como un string, por lo que debemos convertirla en un
        // objeto para poder trabajar con ella
        const respObj = JSON.parse(resp);

        console.log(respObj);
    }
}
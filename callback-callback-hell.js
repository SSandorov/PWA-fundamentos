/*
Para poder ejecutar una función de manera asíncrona, antes de las promesas, se empleaban
los callback, que no es otra cosa que la ejecución de una función como argumento de una 
función

Por conveniencia y buenas prácticas, este argumento recibe el nombre de callback
*/

function sumarUno(numero, callback) {

    // queremos sumar uno pero con un destiempo de 1 segundo
    setTimeout(function() {
        // empleo el callback para manejar el destiempo y ejecutar la lógica con un segundo
        // de desfase
        callback(numero + 1);
    }, 1000);
}

/*
El mayor inconveniente del uso del callback es el denominado callback hell. Que no es más
que una cadena de callbacks para ejecutar múltiples veces la misma función asíncrona

Son múltiples scopes con variables en cada una de ellas que dificultan enormemente la lectura
del mismo.
*/
sumarUno(5, function(nuevoValor) {
    sumarUno(nuevoValor, function(nuevoValor2) {
        console.log(nuevoValor2);
    })

    // Y podríamos seguir encadenando infinidad de veces complicando el código
})
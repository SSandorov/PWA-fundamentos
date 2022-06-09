// El promise.race nos devuelve la promesa que se ejecute primero

const sumarLento = (numero) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(numero + 1);
            rej('Sumar lento falló');
        }, 1500);
    });
}

const sumarMedio = (numero) => {

    return new Promise((res, rej) => {
        setTimeout(() => {res(numero + 1)}, 1000);
    });
}

const sumarRapido = (numero) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            // res(numero + 1);
            rej(' No se ejecutó');
        }, 500);
    });
}

// Así llamaríamos las funciones de forma normal
// sumarLento(5).then(console.log);
// sumarMedio(5).then(console.log);
// sumarRapido(5).then(console.log);

// Con el Promise.race() lo hacemos de la siguiente manera
Promise.race([sumarLento(5), sumarMedio(3), sumarRapido(2)])
    .then(console.log)
    .catch(console.log);
/*
Lo único en lo que se fija .race() es en la promesa que se ejecuta primero
Si esta recibe un error, es lo que nos devolverá
En el caso de que una de las promesas devuelva un error, pero esta no sea la primera
promesa en completarse, ya no tiene relevancia, porque esta promesa nunca será ejecutada,
sólo la primera
*/
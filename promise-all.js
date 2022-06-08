// El promise.all se emplea cuando queremos ejecutar un código después de que
// se hayan ejecutado varias promesas

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
        setTimeout(() => {res(numero + 1)}, 500);
    });
}

// Así llamaríamos las funciones de forma normal
// sumarLento(5).then(console.log);
// sumarMedio(5).then(console.log);
// sumarRapido(5).then(console.log);

// Con el Promise.all lo hacemos de la siguiente manera
// recibe de argumento un arreglo de promesas o de cualquier otra cosa
const devuelveTrue = () => {
    return true;
}
const cosas = 
    [sumarLento(1), sumarMedio(2), sumarRapido(3), true, 'hola mundo', devuelveTrue()];
Promise.all(cosas)
    // nos muestra en consola el arreglo ordenado como nosotros lo pusimos
    .then(console.log)
    // con el .all si una de las promesas falla, todo falla
    .catch(console.log);
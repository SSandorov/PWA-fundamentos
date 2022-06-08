// Vamos a mostrar cómo arreglar el problema de los callbacks con las promesas

// no creamos el argumento callback, ya que definimos la promesa dentro de la función
const sumarUno = (numero) => {

    // así definimos una promesa
    // se crea una instancia de la clase Promise con un argumento como función,
    // siendo el argumento lo que llamaríamos el callback. Este callback tiene
    // dos argumentos, el res (respuesta correcta) y el rej (respuesta incorrecta)
    const promesa = new Promise((resolve, reject) => {

        // Para manejar los errores, definimos un condicional
        // tenemos que recordar añadir el .catch() cuando llamemos la función
        if(numero >= 4) {
            reject('El número es muy alto');
        }

        setTimeout(() => {
        
            // llamamos al resolve, no al callback
            resolve(numero + 1);
        }, 1000);
    })

    // una promesa requiere de un return
    return promesa;
}

/*
// el .then no ejecuta la función. Sino que nos devuelve la respuesta correcta (en caso
// de que la haya) una vez que la función haya sido ejecutada
// el .catch se comporta igual que el .then, pero en su caso nos devuelve la respuesta 
// errónea
*/

// el .then recibe como argumento el valor del resolve
// sumarUno(5).then((nuevoNumero) => {
//     console.log(nuevoNumero);
// })

// Para resolver el callback hell con promesas, se desarrollaron las promesas en cadena
sumarUno(3)
    .then((nuevoNumero) => {
        // la función sumarUno se ejecuta y el .then nos devuelve una promesa con el valor
        // correcto de la suma
        console.log(nuevoNumero);
        return sumarUno(nuevoNumero);
    })
    // como el retorno es una nueva promesa, podemos volver a ejecutar el .then para que nos
    // retorne lo que queramos, en este caso una respuesta en consola de la promesa
    .then((nuevoNumero) => {
        console.log(nuevoNumero);
    })
    // Por comodidad, podríamos definir un solo catch al final de toda la lógica. Pero si
    // quisiésemos podríamos definir un error en particular por cada .then()
    .catch(error => {
        console.log('Error en la promesa');
        console.log(error);
    });
/*
Podríamos encadenar todas las promesas que nos hiciesen falta, lo importante es que devolvamos
una nueva promesa para poder encadenarla a la siguiente

Con esto solucionamos el problema de la necesidad de crear nuevos scopes y variables
para poder llamar a una promesa varias veces

Cuando superan las 5 llamadas seguidas es un desastre de código
*/

// Para ser incluso más eficiente podemos reducir el return del .then
sumarUno(2)
    // esto quiere decir: 
    // el return va a ser el valor que tenga la función sumarUno
    // y su argumento es el mismo
    .then(sumarUno)
    .then(sumarUno)
    // y el console.log sigue la misma lógica
    // muéstrame en consola la función con su argumento
    .then(console.log)
    .catch(console.log);

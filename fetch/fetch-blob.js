// el fetch blob se emplea para manejar las imágenes

// Seleccionamos la etiqueta img
const img1 = document.querySelector('img');

fetch('../assets/superman.png')
    .then(resp => resp.blob())
        .then(imagen => {
            // con el método URL.createObjectURL() recibe un objeto y crea una URL
            // para poder visualizar su contenido
            const imgPath = URL.createObjectURL(imagen);
            // Añado la URL al source de la etiqueta img
            img1.src = imgPath;
        });
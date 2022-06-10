// Cómo leer archivos con el fetch()

fetch('../no-encontrado2.html')
    .then(resp => {
        if(resp.ok) {
            return resp.json();
        } else {
            throw new Error ('La ruta del archivo no es correcta');
        }
    })
    .then(html => {
        const body = document.querySelector('body');
        body.innerHTML = html;
    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    })
const url = "https://jsonplaceholder.typicode.com/photos"
const lista = document.getElementById('lista');

fetch(url)
    .then(response => response.json())
    .then(fotos => {
        fotos.map(foto => {
            let li = document.createElement('li');
            li.innerHTML = `<a href="detalles.html?id=${foto.id}">${foto.id}</a> ${foto.title}`
            lista.appendChild(li);
        })
    })
    .catch(error => {
        document.getElementById('error').innerHTML = error.message;
        console.log(error);
    })
    .finally(()=> {
        document.getElementById('cargando').innerHTML = "";
        document.getElementById('banana').src = " ";
        console.log("Terminado");
    })
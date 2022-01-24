const fila = document.querySelector('.contenedor-slider');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzq = document.getElementById('flecha-izq');
const flechaDer = document.getElementById('flecha-der');

// Envent listener

flechaDer.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzq.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
});




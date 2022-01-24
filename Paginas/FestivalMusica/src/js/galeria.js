document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        imagen.dataset.imagenId = i;

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);

    //Generar imagen ampliada

    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cerrar imagen dando click en el overlay

    overlay.onclick = function(){
        overlay.remove();
    }
    
    //Boton para cerrar la imagen

    const cerrarImg = document.createElement('P');
    cerrarImg.textContent = 'X';
    cerrarImg.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImg); 

    //Cerrar imagen

    cerrarImg.onclick = function(){
        overlay.remove();
    }

    //habilitar scroll

    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
 
    cerrarImg.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body'); //Inhabilitar scroll
}
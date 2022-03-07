import * as UI from './interfaz.js';
import API from './api.js'


UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    
    //Obtener Datos formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'Ingresa artista y nombre de la cancion';
        UI.divMensajes.classList.add('error');
        

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error')
        }, 3000);

        return;
    }

    //Consultar API
   const busqueda = new API(artista, cancion);
   busqueda.consultarAPI();
   
}





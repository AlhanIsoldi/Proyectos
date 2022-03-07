import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

   consultarAPI(){
       const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

       fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{

            if (resultado.lyrics) {
                const {lyrics} = resultado
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
            } else {
                UI.headingResultado.textContent = `Error al buscar ${this.cancion} de ${this.artista}`
                UI.headingResultado.classList.add('error')

                setTimeout(() => {
                    UI.headingResultado.textContent = '';
                    UI.headingResultado.classList.remove('error')
                }, 3000);
            }
           
        })
   }
}

export default API;
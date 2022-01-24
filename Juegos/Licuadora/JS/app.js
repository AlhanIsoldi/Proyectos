let estadoLicuadora = "apagado";
const licuadora = document.getElementById('blender');
const sonidoLicuadora = document.getElementById('blender-sound');
const botonLicuadora = document.getElementById('blender-btn-sound');

document.querySelector('#blender-button').addEventListener('click',controlarLicuadora);

function controlarLicuadora(){
    if(estadoLicuadora == 'apagado'){
        estadoLicuadora = 'encendido'
        licuadora.classList.add('active');
        ruidoLicuadora();

    } else {
        estadoLicuadora = 'apagado';
        licuadora.classList.remove('active');
        ruidoLicuadora();
    }
}

function ruidoLicuadora(){
    if(sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}


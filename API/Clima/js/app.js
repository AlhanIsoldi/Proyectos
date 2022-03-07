const container = document.querySelector('.container');
const resultado = document.getElementById('resultado');
const formulario = document.getElementById('formulario');

window.addEventListener('load',()=>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    //Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

   if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
   }

    //Consultar API
    consultarAPI(ciudad, pais)

}

function mostrarError(mensaje){
    const alerta = document.querySelector('.bg-red-100')

    if(!alerta){
        //Crear alerta
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        //Eliminar alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

    
}

function consultarAPI(ciudad, pais){
    const appId = 'f8468bab11c5608c35988b5e40d62749';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); //Spinner de carga
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then( datos => {
            limpiarHTML();
            if(datos.cod === "404"){
                mostrarError('Ciudad no encontrada')
                return;
            }

            //Imprime respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const { name, main: {temp, temp_max, temp_min }} = datos;

    const centigrados = kelvinACentigrados(temp) ;
    const max = kelvinACentigrados(temp_max) ;
    const min = kelvinACentigrados(temp_min) ;

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;

    const maxTem = document.createElement('p');
    maxTem.innerHTML = `Max: ${max} &#8451;`;

    const minTem = document.createElement('p');
    minTem.innerHTML = `Min: ${min} &#8451;`;

    const nombreCiudad = document.createElement('p');
    nombreCiudad.innerHTML = `${name}`;

    nombreCiudad.classList.add('font-bold', 'text-3xl')
    actual.classList.add('font-bold', 'text-6xl')
    maxTem.classList.add('font-bold', 'text-2xl')
    minTem.classList.add('font-bold', 'text-2xl')

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');

    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(maxTem);
    resultadoDiv.appendChild(minTem);

    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner(){

    limpiarHTML();

    const divSpinner = document.createElement('div')
    divSpinner.classList.add('spinner');
        divSpinner.innerHTML = `
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        `
    resultado.appendChild(divSpinner);
}
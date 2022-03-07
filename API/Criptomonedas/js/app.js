const criptomonedasSelect = document.getElementById('criptomonedas');
const monedaSelect = document.getElementById('moneda');
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');


const objBusqueda = {
    moneda:'',
    criptomoneda:''
}

//Crear promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change',leerValor)
    monedaSelect.addEventListener('change',leerValor)
})

async function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'


        try {
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const criptomonedas = await obtenerCriptomonedas(resultado.Data)
            selectCriptomonedas(criptomonedas)
        } catch (error) {
            console.log(error);
        }

}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
    //console.log(objBusqueda);
}

function submitFormulario(e){
    e.preventDefault();

    //Validar
    const {moneda, criptomoneda} = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios')
        return;
    }

    consultarAPI();

}

function mostrarAlerta(msg){
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        //Mensaje error
        divMensaje.textContent = msg;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    // console.log(objBusqueda);
    // console.log(moneda);
    // console.log(criptomoneda);

    mostrarSpinner()

        try {
            const respuesta = await fetch(url)
            const cotizacion = await respuesta.json()
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);


        } catch (error) {
            console.log(error);
        }
        
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML();

    const{PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    console.log(cotizacion.PRICE);
    console.log(cotizacion.HIGHDAY);
    console.log(cotizacion.LOWDAY);
    console.log(cotizacion.CHANGEPCT24HOUR);

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `Precio: <span>${PRICE}</span>`

    const maxDia = document.createElement('p');
    maxDia.innerHTML = `Precio mas alto registrado: <span>${HIGHDAY}</span>`

    const minDia = document.createElement('p');
    minDia.innerHTML = `Precio mas bajo registrado: <span>${LOWDAY}</span>`

    const cambioDia = document.createElement('p');
    cambioDia.innerHTML = `Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`
    
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima actualizacion: <span>${LASTUPDATE}</span>`

    resultado.appendChild(precio);
    resultado.appendChild(maxDia);
    resultado.appendChild(minDia);
    resultado.appendChild(cambioDia);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function mostrarSpinner() {
    limpiarHTML()

    const spinner = document.createElement('div');
    spinner.classList.add('spinner')

    spinner.innerHTML = `
    
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>

    `;

    resultado.appendChild(spinner);
}
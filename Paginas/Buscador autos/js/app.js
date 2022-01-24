//Varaibles
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10 ;

//GEnerar un objeto con la busqueda

const datosBusqueda ={
    marca : '',
    year : '',
    color : '',
    maximo : '',
    minimo : '',
    transmision : '',
    puertas : ''
    
}


//Eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos); //Muestra los autos al cargar


    //Llena las opciones de años
    llenarSelect();
})

//Event listener para select de busqueda

marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;

    filtrarAuto();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});


//Funciones
function mostrarAutos(autos){ 

    limpiarHtml(); //elimina el html previo

    autos.forEach(auto => {

        const {marca,modelo,puertas,year,transmision,precio,color}=auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca}  ${modelo} -  ${year} - ${puertas} Puertas - Transmison: ${transmision} - Precio: ${precio} - Color:${color}
        `

        //Insertar HTML
        resultado.appendChild(autoHTML)
    });
}
//limpiar html

function limpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



//Generalos años del select
function llenarSelect(){
    for(let i = max; i > min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al select
    }
} 

//Funcion filtrar auto

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado);



    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
    
}

function noResultado(){

    limpiarHtml();

    const noResultado = document.createElement('div');
        noResultado.classList.add('alerta','error');
        noResultado.textContent = 'No hay resultado';
        resultado.appendChild(noResultado)
    
}


function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= (minimo);
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= (maximo);
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas == puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}
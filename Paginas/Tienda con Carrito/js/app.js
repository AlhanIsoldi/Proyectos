//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =  document.querySelector ('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];  

cargarEventListeners();
function cargarEventListeners(){
    //Agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
         articulosCarrito = [];//Resetea arreglo

         limpiarHtml();//vacia carrito
    })
}


//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    
}
}

//Elimina un curso del carrito
function eliminarCurso(e){
   
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso =>{
            if(curso.id === cursoId){
                if(curso.cantidad > 1 ){
                    curso.cantidad--;
                    return curso;
                }else{
                    delete curso;
                }
            }else{
                return curso;
            }
        }); 
            
      

        carritoHtml();//itera sobre el carrito y muestra html

    }
}


//Extrae informacion del curso

function leerDatosCurso(curso) {
    // console.log(curso);

    //Objeto del curso

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        //Actualiza la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else curso; {
                return curso; // retorna  los objetos que no son duplicados 
            }
        });
        articulosCarrito = [...cursos];
    } else {
    
        //Agrega elementos al carrito
         articulosCarrito = [...articulosCarrito, infoCurso];
    }
    

    console.log(articulosCarrito);

    carritoHtml();

}

    //Muestra el carrito en el html
    function carritoHtml() {


    //Limpiar el html
    limpiarHtml();

    
    //Recorre el carrito y genera el html
        articulosCarrito.forEach( curso => {
            const {imagen, titulo, precio, cantidad, id } = curso;
            const row = document.createElement('tr');
            row.innerHTML= `
            <td><img src="${curso.imagen}" width="100"> </td>

            <td>${titulo}</td>

            <td>${precio}</td>

            <td>${cantidad}</td>

            <td><a href="#" class="borrar-curso" data-id=${id}> X </a></td>
            `;
    //Agrega el html del carrito al tbody
            contenedorCarrito.appendChild(row);

        });
    }

    //Elimina los cursos del tbody
    function limpiarHtml(){
        
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild )

        }

    }
//Variables

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');


//variables para campos

const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//Arranque de la app

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',iniciarApp);

//Campos del formulario
email.addEventListener('blur',validarformulario);
asunto.addEventListener('blur',validarformulario);
mensaje.addEventListener('blur',validarformulario);

//Reinicia formulario
btnReset.addEventListener('click',resetearFormulario);

}
//Enviar formulario

formulario.addEventListener('submit',enviarEmail)

//Funciones

function iniciarApp(){
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}

//Valida el formulario

function validarformulario(e){

    if(e.target.value.length > 0 ) {

 //Quitar mensaje de error 
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        
    }else{

        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        if(er.test(e.target.value) ) {
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500'); 
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Correo no valido'); 
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '' ){
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50')
    }
}


function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500','background-red-100','text-red-500','p-3', 'mt-5', 'text-center' ,'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}
  

//Envia 
function enviarEmail(e){
    e.preventDefault();
   //spinner
   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

   

  
   

   //Ocultar spinner

   setTimeout ( ()=>{
        spinner.style.display = 'none';
    //mensaje enviado
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado';
        parrafo.classList.add('text-center' , 'my-10' , 'p-3' , 'bg-green-500','uppercase')

     //parrafo enviado
        formulario.insertBefore(parrafo,spinner);

        setTimeout(()=>{
            parrafo.remove();
           
        },2000);
   },3000 );
}
resetearFormulario();
//Reset formulario

function resetearFormulario() {
    formulario.reset();

    iniciarApp();
}

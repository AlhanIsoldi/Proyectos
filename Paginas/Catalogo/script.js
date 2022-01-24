function inputBusqueda() {
    var input, filter, cont, cont2, texto, i, txtValue;
    
    input = document.getElementById("miBusqueda");
    filter = input.value.toUpperCase();
    
    cont = document.getElementById("general");
    cont2 = cont.getElementsByTagName("div");
    
    for (i = 0; i < cont2.length; i++) {
    
        texto = cont2[i].getElementsByTagName("p")[0];
        txtValue = texto.textContent || texto.innerText;
        
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cont2[i].style.display = "";
            
        } else {
            cont2[i].style.display = "none";
        }
    }

}


    var mybutton = document.getElementById("myBtn");

    // Cuando la pagina esta a 500px del tope aparece el boton
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
    }

    // Cuando se le da click al boton regresa al principio
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

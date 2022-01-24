window.addEventListener("load", () => {
  const pantalla = document.querySelector(".calc-pantalla");
  const teclado = document.getElementsByClassName("btn-teclado");

  const arregloBtn = Array.from(teclado);
  arregloBtn.forEach((boton) => {
    boton.addEventListener("click", () => {
      calculadora(boton, pantalla);
    });
  });
});

function calculadora(boton, pantalla) {
  switch (boton.innerHTML) {
    case "C":
      borrar(pantalla);
      break;
    case "=":
      calcular(pantalla);
      break;
    default:
      actualizar(pantalla, boton);
      break;
  }
}

function calcular(pantalla) {
    pantalla.innerHTML = eval(pantalla.innerHTML);
  }
  
  function actualizar(pantalla, boton) {
    if (pantalla.innerHTML == 0) {
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += boton.innerHTML;
  }
  
  function borrar(pantalla) {
    if (pantalla.innerHTML != 0) {
      pantalla.innerHTML = 0;
    }
  }

  

  
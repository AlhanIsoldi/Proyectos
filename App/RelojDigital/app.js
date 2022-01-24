function actualizarHora(){
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let diaSemana = fecha.getDay();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();
    let ampm ='';

    const pAMPM = document.getElementById('ampm');
    const pHoras = document.getElementById('horas');
    const pMinutos = document.getElementById('minutos');
    const pSegundos = document.getElementById('segundos');
    const pDiaSemana = document.getElementById('diaSemana');
    const pDia = document.getElementById('dia');
    const pMes = document.getElementById('mes');
    const pYear = document.getElementById('year');
    
    const semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    pDiaSemana.textContent = semana[diaSemana]

    pDia.textContent = dia;

    const meses = ['Enereo','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    pMes.textContent= meses[mes]

    pYear.textContent = year;

  if(horas >= 12){
      horas = horas - 12;
      ampm = 'PM';
  }else{
      ampm = 'AM';
  }

  if(horas === 0){
    horas = 12
  }

  pHoras.textContent = horas;
  pAMPM.textContent = ampm;

  if(minutos <= 9){
      minutos = '0' + minutos;
  }

  if(segundos <= 9){
    segundos = '0' + segundos;
}

  pMinutos.textContent = minutos;
  pSegundos.textContent =segundos;

}

const interval = setInterval(() => {
    actualizarHora()
}, 1000);


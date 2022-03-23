const divBtn = document.getElementById('divbtn')

const btnUno = document.getElementById('btnuno').addEventListener('click', () => {
    divBtn.classList.remove('btn-efecto-dos')
    divBtn.classList.remove('btn-efecto-tres')
    divBtn.classList.add('btn-efecto')
  })

btnDos = document.getElementById('btndos').addEventListener('click', () => {
  divBtn.classList.remove('btn-efecto')
  divBtn.classList.remove('btn-efecto-tres')
  divBtn.classList.add('btn-efecto-dos')
})

btnTres = document.getElementById('btntres').addEventListener('click', () => {
    divBtn.classList.remove('btn-efecto')
    divBtn.classList.remove('btn-efecto-dos')
    divBtn.classList.add('btn-efecto-tres')
  })
  

 
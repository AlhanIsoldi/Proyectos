const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
       removerActiveClass();
       panel.classList.add('active');
    })
})

function removerActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
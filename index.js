openMenu = document.querySelector('.fa-bars')
closeMenu = document.querySelector('.fa-square-xmark')
activate_navs = document.querySelectorAll('.navbar')

openMenu.addEventListener('click', ()=>{
    activate_navs.forEach((element)=>{
        element.classList.add("active")
    })
})

closeMenu.addEventListener('click', ()=>{
    activate_navs.forEach((element)=>{
        element.classList.remove("active")
    })
})
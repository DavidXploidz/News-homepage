// Selectores
const menuHam = document.querySelector('#menu-ham')
const menuMobile = document.querySelector('.menuMobile')
const close = document.querySelector('#close-menu')
const cortinilla = document.querySelector('#cortinilla')

menuHam.addEventListener('click', () => {
    menuMobile.classList.add('menuMobile--activo')
    cortinilla.classList.add('menuMobile__cortina--activo')
    document.body.style.overflowY = 'hidden'
})

close.addEventListener('click', () => {
    menuMobile.classList.remove('menuMobile--activo')
    cortinilla.classList.remove('menuMobile__cortina--activo')
    document.body.style.overflowY = 'visible'
})
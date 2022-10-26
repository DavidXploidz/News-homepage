
// Selectores Globales
const menuHam = document.querySelector('#menuHam')
const menuOculto = document.querySelector('#menuOculto')
const closeMenu = document.querySelector('#closeMenu')
const modalBackDrop = document.querySelector('#modal-backdrop')

menuHam.addEventListener('click', () => {
    menuOculto.classList.add('activo')
    document.body.style.overflowY = 'hidden'
    modalBackDrop.classList.add('fondoObscuro')
})

closeMenu.addEventListener('click', () => {
    menuOculto.classList.remove('activo')
    document.body.style.overflowY = 'scroll'
    modalBackDrop.classList.remove('fondoObscuro')
})
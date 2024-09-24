const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-container')
const closeContent = document.querySelector('.close-icon')
const goToTop = document.querySelector(".go-to-top")
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})


closeContent.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})


goToTop.addEventListener('click', () => {
    document.querySelector('.main-content').scrollTo(0,0)
})
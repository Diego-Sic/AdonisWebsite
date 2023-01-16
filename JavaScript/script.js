// Show menu code
const displayMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if (toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

displayMenu('nav-toggle','nav-menu')

// Remove the menu when a option is selected

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Creating active menu
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

//         }
//     })
// }

// window.addEventListener('scroll', scrollActive)

// Change background header

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Steps part

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('steps__active')
        })
        target.classList.add('steps__active')
        
        tabs.forEach(tab =>{
            tab.classList.remove('steps__active')
        })
        tab.classList.add('steps__active')
    })
})
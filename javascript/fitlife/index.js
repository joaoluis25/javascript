'use strict';

/*
   ADD EVENT ON ELEMENT
*/ 

const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type , callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

/*
    NAVBAR TOGGLE
*/ 

    const navbar = document.querySelector('[data-navbar]')
    const navTogglers = document.querySelectorAll('[data-nav-toggler]')
    const navLinks = document.querySelectorAll("[data-nav-link]")

    const toggleNavbar = function () {navbar.classList.toggle('active')} //toggle ative o active 

    addEventOnElem(navTogglers, 'click', toggleNavbar)

    const closeNavbar = function () {navbar.classList.remove('active')}//remove desabilita o active

    addEventOnElem(navLinks, 'click', closeNavbar)

    /*
        #header & back top btn active
    */ 

    const header = document.querySelector('[data-header]')
    const backTopBtn = document.querySelector('[data-back-top-btn]')

    window.addEventListener('scroll' , function(){
        if (window.scrollY >= 100){
            header.classList.add('active')
            backTopBtn.classList.add('active')
        } else {
            header.classList.remove('active')
            backTopBtn.classList.remove('active')
        }
    });
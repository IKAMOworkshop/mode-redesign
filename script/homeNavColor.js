import gsap from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

gsap.to('.nav', {
    backgroundColor: 'rgba(19, 19, 19 , 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})
gsap.to('.mode-logo', {
    fill: 'rgba(255, 255, 255 , 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})
gsap.to('.dropdown-button-bg', {
    backgroundColor: 'rgba(255, 255, 255 , 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})
gsap.to('.dropdown-button', {
    color: 'rgba(255, 255, 255 , 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})
gsap.to('.dropdown-text', {
    backgroundColor: 'rgba(19, 19, 19 , 1)',
    color: 'rgba(255, 255, 255, 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})
gsap.to('.cart-button', {
    color: 'rgba(19, 19, 19, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    duration: 0,
    ease: 'power3.out',
    delay: 0
})

const scrollButton = document.getElementById('scroll')

scrollButton.addEventListener('click' , () => {
    gsap.to(window, {
        scrollTo: '#scroll-to',
        duration: 2,
        ease: 'power3.out'
    })
})
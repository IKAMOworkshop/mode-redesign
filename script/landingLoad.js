import { gsap } from "gsap"

const loaderText = document.querySelector('.loader-text')
let loadProgress = 0

const updateCounter = () => {
    if(loadProgress === 100){
        return
    }

    loadProgress += Math.floor(Math.random() * 10) + 1

    if(loadProgress >= 100){
        loadProgress = 100
    }

    loaderText.textContent = loadProgress

    let delay = Math.floor(Math.random() * 200) + 50
    setTimeout(updateCounter, delay)
}

updateCounter()
gsap.to('.counter', {
    opacity: 0,
    duration: .5,
    ease: 'power3.out',
    delay: 3.5
})
gsap.to('.transition-in', {
    scaleY: 0,
    duration: 2,
    ease: 'power3.out',
    delay: 4
})
gsap.to(window, {
    scrollTo: 0,
    duration: 0,
    ease: 'power3.out',
    delay: 1
})
gsap.from('.nav', {
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: .4
})
gsap.from('#hero-1', {
    y: 120,
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
    delay: 4.2
})
gsap.from('.description-box-move', {
    y: 12,
    duration: 1.5,
    ease: 'power3.out',
    delay: 4.2
})
gsap.from('.hero-title-move', {
    y: 80,
    duration: 1.5,
    ease: 'power3.out',
    delay: 4.2
})
gsap.from('.hero-button-move', {
    y: 20,
    duration: 1.5,
    ease: 'power3.out',
    delay: 4.2
})
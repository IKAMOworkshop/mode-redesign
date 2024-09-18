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
gsap.to('.envoy-title', {
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 4.2
})
gsap.to('.envoy-config', {
    y: 0,
    duration: .8,
    ease: 'power3.out',
    delay: 4.2
})
gsap.to('.envoy-hero', {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power3.out',
    delay: 4.2
})
gsap.to('.envoy-intro', {
    y: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 4.2
})
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const maskTitle = (trigger, element, offset) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: 'center 100%',
            end: '100% 80%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        y: offset,
    })
}

maskTitle('#product-features', '.product-features', 0)
maskTitle('.product-specs', '.product-specs', 0)

const largeTitle = (trigger, element, offset) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: 'center 100%',
            end: '100% 40%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        y: offset,
    })
}

largeTitle('.about-envoy', '.about-envoy', 0)
largeTitle('.modular-design', '.modular-design', 0)

const fixedTitle = (trigger, element, elementTwo, opacity, opacityTwo) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '80% 40%',
            end: '100% 20%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        opacity: opacity
    })
    .to(elementTwo, {
        opacity: opacityTwo
    })
}

fixedTitle('.about-image-1', '.about-1', '.about-2', 0, 1)
fixedTitle('.about-image-2', '.about-2', '.about-3', 0, 1)

const borderIn = (trigger, element, scale, opacity) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '0% 80%',
            end: '20% 20%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        scaleX: scale,
        opacity: opacity,
        stagger: .1
    })
}

borderIn('.feature-section', '.feature-border', 1, 1)
borderIn('.specs-section', '.specs-border', 1, 1)

const imageThumbnail = (trigger, element, opacity) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '0% 90%',
            end: '50% 80%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        opacity: opacity
    })
}

imageThumbnail('.modular-image', '.modular-image', 1)

const navScroll = (trigger, element, fill, color, backgroundColor) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '0% 20%',
            end: '2% 10%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        fill: fill,
        color: color,
        backgroundColor: backgroundColor,
        duration: .5
    })
}

navScroll('.envoy-dark-section', '.nav', null, null, 'rgba( 19,  19,  19, 1)')
navScroll('.envoy-dark-section', '.mode-logo', 'rgba(255, 255, 255 , 1)', null, null)
navScroll('.envoy-dark-section', '.dropdown-button-bg', null, null, 'rgba(255, 255, 255, 1)')
navScroll('.envoy-dark-section', '.dropdown-button', null, 'rgba(255, 255, 255 , 1)', null)
navScroll('.envoy-dark-section', '.dropdown-text', null, 'rgba(255, 255, 255 , 1)', 'rgba( 19,  19,  19 , 1)')
navScroll('.envoy-dark-section', '.cart-button', null, 'rgba( 19,  19,  19 , 1)', 'rgba(255, 255, 255 , 1)')

const parallaxImage = (trigger, element, position) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '50% 100%',
            end: '100% 0%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        objectPosition: `0% ${position}%`,
        duration: .5
    })
}

parallaxImage('.envoy-hero', '.envoy-hero', 100)
parallaxImage('.about-image-1', '.about-image-1', 100)
parallaxImage('.about-image-2', '.about-image-2', 100)
parallaxImage('.about-image-3', '.about-image-3', 100)
parallaxImage('.modular-image', '.modular-image', 100)
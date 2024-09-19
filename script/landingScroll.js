import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const heroTrigger = (trigger, element, offset, opacity, scale) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: '40% 0%',
            end: '100% -40%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        y: offset,
        opacity: opacity,
        scale: scale,
    })
}

heroTrigger('#hero-1', '.description-box-move', -16, 100)
heroTrigger('#hero-2', '.description-box-move', -32, 100)
heroTrigger('#hero-1', '.hero-title-move', -80, 100)
heroTrigger('#hero-2', '.hero-title-move', -160, 100)
heroTrigger('#hero-1', '.hero-button-move', -22, 100)
heroTrigger('#hero-2', '.hero-button-move', -42, 100)
heroTrigger('#hero-1', '#hero-1', 0, 0, .8)
heroTrigger('#hero-2', '#hero-2', 0, 0, .8)
heroTrigger('#hero-3', '#hero-3', 0, 0, .8)
heroTrigger('#hero-3', '.hero-text', -600, 0, .8)

const maskTitle = (trigger, element, offset, opacity) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: 'center 90%',
            end: '100% 50%',
            scrub: true,
            markers: false
        }
    })
    
    tl.to(element, {
        y: offset,
        opacity: opacity
    })
}

maskTitle('#product-title', '.product-description', 0)
maskTitle('#product-description', '.home-description', 0)
maskTitle('#feature-keyboard', '.feature-keyboard', 0)
maskTitle('#feature-component', '.feature-component', 0)
maskTitle('#community-title', '.community-title', 0)
maskTitle('#community-title', '.community-button', 0)


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

imageThumbnail('.row-1', '.row-1', 1)
imageThumbnail('.row-2', '.row-2', 1)
imageThumbnail('.row-3', '.row-3', 1)

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

navScroll('.home-light-section', '.nav', null, null, 'rgba(255, 255, 255, 1)')
navScroll('.home-light-section', '.mode-logo', 'rgba(19, 19, 19 , 1)', null, null)
navScroll('.home-light-section', '.dropdown-button-bg', null, null, 'rgba(19, 19, 19, 1)')
navScroll('.home-light-section', '.dropdown-button', null, 'rgba(19, 19, 19 , 1)', null)
navScroll('.home-light-section', '.dropdown-text', null, 'rgba(19, 19, 19 , 1)', 'rgba(255, 255, 255 , 1)')
navScroll('.home-light-section', '.cart-button', null, 'rgba(255, 255, 255 , 1)', 'rgba(19, 19, 19 , 1)')

navScroll('.home-dark-section-2', '.nav', null, null, 'rgba( 19,  19,  19, 1)')
navScroll('.home-dark-section-2', '.mode-logo', 'rgba(255, 255, 255 , 1)', null, null)
navScroll('.home-dark-section-2', '.dropdown-button-bg', null, null, 'rgba(255, 255, 255, 1)')
navScroll('.home-dark-section-2', '.dropdown-button', null, 'rgba(255, 255, 255 , 1)', null)
navScroll('.home-dark-section-2', '.dropdown-text', null, 'rgba(255, 255, 255 , 1)', 'rgba( 19,  19,  19 , 1)')
navScroll('.home-dark-section-2', '.cart-button', null, 'rgba( 19,  19,  19 , 1)', 'rgba(255, 255, 255 , 1)')
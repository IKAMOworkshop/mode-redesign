import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class HomeTransition extends Transition {

    onLeave({ from, trigger, done }) {
        console.log(from, trigger)

        setTimeout(done(), 500)
    }

    onEnter({ to, trigger, done }) {
        window.scrollTo(0, 0)

        gsap.from('#hero-1', {
            y: 120,
            opacity: 0,
            duration: 2,
            ease: 'power3.out',
        })
        gsap.from('.description-box-move', {
            y: 12,
            duration: 1.5,
            ease: 'power3.out',
        })
        gsap.from('.hero-title-move', {
            y: 80,
            duration: 1.5,
            ease: 'power3.out',
        })
        gsap.from('.hero-button-move', {
            y: 20,
            duration: 1.5,
            ease: 'power3.out',
            onComplete: done()
        })

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
    }
}
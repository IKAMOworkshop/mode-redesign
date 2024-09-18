import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class ProductTransition extends Transition {

    onLeave({ from, trigger, done }) {

        gsap.to('.overlay', {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
        })
        gsap.to('.inserted-container', {
            scale: 1,
            y: 1,
            duration: 1,
            ease: 'power3.out',
            delay: 1,
            onComplete: done
        })

    }

    onEnter({ to, trigger, done }) {
        window.scrollTo(0, 0)

        gsap.to('.envoy-title', {
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4
        })
        gsap.to('.envoy-config', {
            y: 0,
            duration: .8,
            ease: 'power3.out',
            delay: .4
        })
        gsap.to('.envoy-hero', {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4
        })
        gsap.to('.envoy-intro', {
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: .4,
            onComplete: done()
        })

        const maskTitle = (trigger, element, offset, opacity) => {
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
                opacity: opacity
            })
        }
        
        maskTitle('.about-envoy', '.about-envoy', 0)
        maskTitle('#product-features', '.product-features', 0)
        maskTitle('.modular-design', '.modular-design', 0)
        maskTitle('.product-specs', '.product-specs', 0)
        
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
    }
}
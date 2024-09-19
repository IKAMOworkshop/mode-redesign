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

        // Nav Color
        gsap.to('.nav', {
            backgroundColor: 'rgba(255, 255, 255 , 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })
        gsap.to('.mode-logo', {
            fill: 'rgba(19, 19, 19 , 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })
        gsap.to('.dropdown-button-bg', {
            backgroundColor: 'rgba(19, 19, 19 , 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })
        gsap.to('.dropdown-button', {
            color: 'rgba(19, 19, 19 , 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })
        gsap.to('.dropdown-text', {
            backgroundColor: 'rgba(255, 255, 255 , 1)',
            color: 'rgba(19, 19, 19, 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })
        gsap.to('.cart-button', {
            color: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(19, 19, 19, 1)',
            duration: 0,
            ease: 'power3.out',
            delay: 0
        })

        gsap.from('.nav', {
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4
        })
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

        // Navigation
        const homeButton = document.getElementById("home")
        const keyboardButton = document.getElementById('keyboard-nav')
        const componentButton = document.getElementById('component-nav')
        const accessoriesButton = document.getElementById('accessories-nav')
        const generalButton = document.getElementById('general-nav')

        const keyboardLinks = document.querySelectorAll('#keyboard-drop > .dropdown-text')
        const componentLinks = document.querySelectorAll('#component-drop > .dropdown-text')
        const accessoriesLinks = document.querySelectorAll('#accessories-drop > .dropdown-text')
        const generalLinks = document.querySelectorAll('#general-drop > .dropdown-text')

        let keyboardStates = false
        let componentStates = false
        let accessoryStates = false
        let generalStates = false

        keyboardButton.addEventListener('click', () => {
            if(keyboardStates === false) {
                for (let i = 0 ; i < keyboardLinks.length ; i++){
                    keyboardLinks[i].style.display = 'block';
                }
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 1,
                    x: 0,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'start'
                    },
                    ease: 'power3.out',
                })

                keyboardStates = true
            } else {
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < keyboardLinks.length ; i++){
                            keyboardLinks[i].style.display = 'none';
                        }
                    }
                })

                keyboardStates = false
            }

            // Dropdown reset
            if(componentStates === true || accessoryStates === true || generalStates === true) {
                gsap.to(componentLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < componentLinks.length ; i++){
                            componentLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < accessoriesLinks.length ; i++){
                            accessoriesLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                componentStates = false
                accessoryStates = false
                generalStates = false
            }
        })

        componentButton.addEventListener('click', () => {
            if(componentStates === false) {
                for (let i = 0 ; i < componentLinks.length ; i++){
                    componentLinks[i].style.display = 'block';
                }
                gsap.to(componentLinks, 0.5, { 
                    opacity: 1,
                    x: 0,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'start'
                    },
                    ease: 'power3.out',
                })

                componentStates = true
            } else {
                gsap.to(componentLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < componentLinks.length ; i++){
                            componentLinks[i].style.display = 'none';
                        }
                    }
                })

                componentStates = false
            }

            // Dropdown reset
            if(keyboardStates === true || accessoryStates === true || generalStates === true) {
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < keyboardLinks.length ; i++){
                            keyboardLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < accessoriesLinks.length ; i++){
                            accessoriesLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                keyboardStates = false
                accessoryStates = false
                generalStates = false
            }
        })

        accessoriesButton.addEventListener('click', () => {
            if(accessoryStates === false) {
                for (let i = 0 ; i < accessoriesLinks.length ; i++){
                    accessoriesLinks[i].style.display = 'block';
                }
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 1,
                    x: 0,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'start'
                    },
                    ease: 'power3.out',
                })

                accessoryStates = true
            } else {
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < accessoriesLinks.length ; i++){
                            accessoriesLinks[i].style.display = 'none';
                        }
                    }
                })

                accessoryStates = false
            }

            // Dropdown reset
            if(keyboardStates === true || componentStates === true || generalStates === true) {
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < keyboardLinks.length ; i++){
                            keyboardLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(componentLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < componentLinks.length ; i++){
                            componentLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                keyboardStates = false
                componentStates = false
                generalStates = false
            }
        })

        generalButton.addEventListener('click', () => {
            if(generalStates === false) {
                for (let i = 0 ; i < generalLinks.length ; i++){
                    generalLinks[i].style.display = 'block';
                }
                gsap.to(generalLinks, 0.5, { 
                    opacity: 1,
                    x: 0,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'start'
                    },
                    ease: 'power3.out',
                })

                generalStates = true
            } else {
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                generalStates = false
            }

                // Dropdown reset
                if(keyboardStates === true || componentStates === true || accessoryStates === true) {
                    gsap.to(keyboardLinks, 0.5, { 
                        opacity: 0,
                        x: 16,
                        duration: .3,
                        stagger: {
                            each: .1,
                            from: 'end'
                        },
                        ease: 'power3.out',
                        onComplete: () => {
                            for (let i = 0 ; i < keyboardLinks.length ; i++){
                                keyboardLinks[i].style.display = 'none';
                            }
                        }
                    })
                    gsap.to(componentLinks, 0.5, { 
                        opacity: 0,
                        x: 16,
                        duration: .3,
                        stagger: {
                            each: .1,
                            from: 'end'
                        },
                        ease: 'power3.out',
                        onComplete: () => {
                            for (let i = 0 ; i < componentLinks.length ; i++){
                                componentLinks[i].style.display = 'none';
                            }
                        }
                    })
                    gsap.to(accessoriesLinks, 0.5, { 
                        opacity: 0,
                        x: 16,
                        duration: .3,
                        stagger: {
                            each: .1,
                            from: 'end'
                        },
                        ease: 'power3.out',
                        onComplete: () => {
                            for (let i = 0 ; i < accessoriesLinks.length ; i++){
                                accessoriesLinks[i].style.display = 'none';
                            }
                        }
                    })
            
                    keyboardStates = false
                    componentStates = false
                    accessoryStates = false
                }
        })

        // Dropdown reset on Click
        homeButton.addEventListener('click', () => {
            if(keyboardStates === true || componentStates === true || accessoryStates === true || generalStates === true) {
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < keyboardLinks.length ; i++){
                            keyboardLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(componentLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < componentLinks.length ; i++){
                            componentLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < accessoriesLinks.length ; i++){
                            accessoriesLinks[i].style.display = 'none';
                        }
                    }
                })
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                keyboardStates = false
                componentStates = false
                accessoryStates = false
                generalStates = false
            }
        })

        for (let i = 0 ; i < keyboardLinks.length ; i++){
            keyboardLinks[i].addEventListener('click', () => {
                gsap.to(keyboardLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < keyboardLinks.length ; i++){
                            keyboardLinks[i].style.display = 'none';
                        }
                    }
                })

                keyboardStates = false
            })
        }

        for (let i = 0 ; i < componentLinks.length ; i++){
            componentLinks[i].addEventListener('click', () => {
                gsap.to(componentLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < componentLinks.length ; i++){
                            componentLinks[i].style.display = 'none';
                        }
                    }
                })

                componentStates = false
            })
        }

        for (let i = 0 ; i < accessoriesLinks.length ; i++){
            accessoriesLinks[i].addEventListener('click', () => {
                gsap.to(accessoriesLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < accessoriesLinks.length ; i++){
                            accessoriesLinks[i].style.display = 'none';
                        }
                    }
                })

                accessoryStates = false
            })
        }

        for (let i = 0 ; i < generalLinks.length ; i++){
            generalLinks[i].addEventListener('click', () => {
                gsap.to(generalLinks, 0.5, { 
                    opacity: 0,
                    x: 16,
                    duration: .3,
                    stagger: {
                        each: .1,
                        from: 'end'
                    },
                    ease: 'power3.out',
                    onComplete: () => {
                        for (let i = 0 ; i < generalLinks.length ; i++){
                            generalLinks[i].style.display = 'none';
                        }
                    }
                })

                generalStates = false
            })
        }
    }
}
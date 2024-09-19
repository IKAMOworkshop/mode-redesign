import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class HomeTransition extends Transition {

    onLeave({ from, trigger, done }) {
        gsap.to('.overlay', {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
        })
        gsap.to('.inserted-container-envoy', {
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
            delay: .4
        })
        gsap.from('.description-box-move', {
            y: 12,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4
        })
        gsap.from('.hero-title-move', {
            y: 80,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4
        })
        gsap.from('.hero-button-move', {
            y: 20,
            duration: 1.5,
            ease: 'power3.out',
            delay: .4,
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

        const navScrollOpacity = (trigger, element, opacity) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: '0% 100%',
                    end: '2% 90%',
                    scrub: true,
                    markers: false
                }
            })
            
            tl.to(element, {
                opacity: opacity,
                duration: .5
            })
        }
        
        navScrollOpacity('#hero-2', '.scroll-section', 0)

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
        
        parallaxImage('#col-1', '#col-1', 100)
        parallaxImage('#col-2', '#col-2', 100)
        parallaxImage('#col-3', '#col-3', 100)
        parallaxImage('#col-4', '#col-4', 100)
        
        parallaxImage('#col-5', '#col-5', 100)
        parallaxImage('#col-6', '#col-6', 100)
        parallaxImage('#col-7', '#col-7', 100)
        parallaxImage('#col-8', '#col-8', 100)
        
        const headerParallax = (trigger, element, position) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: '100% 100%',
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
        
        headerParallax('#hero-1', '#hero-1', 100)
        headerParallax('#hero-2', '#hero-2', 100)
        headerParallax('#hero-3', '#hero-3', 100)

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

        const scrollButton = document.getElementById('scroll')

        scrollButton.addEventListener('click' , () => {
            gsap.to(window, {
                scrollTo: '#scroll-to',
                duration: 2,
                ease: 'power3.out'
            })
        })
    }
}
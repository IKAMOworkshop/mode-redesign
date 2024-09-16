import gsap from "gsap"

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
})
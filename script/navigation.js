import gsap from "gsap"

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
import Lenis from "lenis"

const lenis = new Lenis({
    lerp: .1,
})

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
import Lenis from "lenis"

const lenis = new Lenis({
    lerp: .1,
})

lenis.on('scroll', (e) => {

})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
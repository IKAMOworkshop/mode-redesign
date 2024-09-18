mouse = {}

hoverImages = document.querySelectorAll('.hover-image')

tempo = document.getElementById('tempo')
tempoSize = tempo.getBoundingClientRect()

sonnet = document.getElementById('sonnet')
sonnetSize = sonnet.getBoundingClientRect()

keycaps = document.getElementById('keycaps')
keycapsSize = keycaps.getBoundingClientRect()

tempoButton = document.getElementById('tempo-button')
sixtyfiveButton = document.getElementById('sixtyfive-button')
envoyButton = document.getElementById('envoy-button')

sonnetButton = document.getElementById('sonnet-button')
loopButton = document.getElementById('loop-button')

keycapsButton = document.getElementById('keycaps-button')
switchButton = document.getElementById('switch-button')
stablizerButton = document.getElementById('stablizer-button')

document.addEventListener('mousemove', (e) => {
    tempoSize = tempo.getBoundingClientRect()
    sonnetSize = sonnet.getBoundingClientRect()
    keycapsSize = keycaps.getBoundingClientRect()

    mouse.y = e.clientY - tempoSize.top
    mouse.y2 = e.clientY - sonnetSize.top
    mouse.y3 = e.clientY - keycapsSize.top

    buttonPosition = Math.max(24, Math.min(mouse.y, tempoSize.height - 24))
    buttonPositionTwo = Math.max(24, Math.min(mouse.y2, sonnetSize.height - 24))
    buttonPositionThree = Math.max(24, Math.min(mouse.y3, sonnetSize.height - 24))

    tempoButton.style.transform = `translateY(${buttonPosition}px`
    sixtyfiveButton.style.transform = `translateY(${buttonPosition}px`
    envoyButton.style.transform = `translateY(${buttonPosition}px`

    sonnetButton.style.transform = `translateY(${buttonPositionTwo}px`
    loopButton.style.transform = `translateY(${buttonPositionTwo}px`

    keycapsButton.style.transform = `translateY(${buttonPositionThree}px`
    switchButton.style.transform = `translateY(${buttonPositionThree}px`
    stablizerButton.style.transform = `translateY(${buttonPositionThree}px`
})

tempoButton.addEventListener('mouseover', () => {
    tempoButton.style.opacity = 1
})
tempoButton.addEventListener('mouseout', () => {
    tempoButton.style.opacity = 0
})

sixtyfiveButton.addEventListener('mouseover', () => {
    sixtyfiveButton.style.opacity = 1
})
sixtyfiveButton.addEventListener('mouseout', () => {
    sixtyfiveButton.style.opacity = 0
})

envoyButton.addEventListener('mouseover', () => {
    envoyButton.style.opacity = 1
})
envoyButton.addEventListener('mouseout', () => {
    envoyButton.style.opacity = 0
})

sonnetButton.addEventListener('mouseover', () => {
    sonnetButton.style.opacity = 1
})
sonnetButton.addEventListener('mouseout', () => {
    sonnetButton.style.opacity = 0
})

loopButton.addEventListener('mouseover', () => {
    loopButton.style.opacity = 1
})
loopButton.addEventListener('mouseout', () => {
    loopButton.style.opacity = 0
})

keycapsButton.addEventListener('mouseover', () => {
    keycapsButton.style.opacity = 1
})
keycapsButton.addEventListener('mouseout', () => {
    keycapsButton.style.opacity = 0
})

switchButton.addEventListener('mouseover', () => {
    switchButton.style.opacity = 1
})
switchButton.addEventListener('mouseout', () => {
    switchButton.style.opacity = 0
})

stablizerButton.addEventListener('mouseover', () => {
    stablizerButton.style.opacity = 1
})
stablizerButton.addEventListener('mouseout', () => {
    stablizerButton.style.opacity = 0
})

hoverImages.forEach((image) => {
    image.style.width = tempoSize.width + 'px'
})
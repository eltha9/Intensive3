import css from './css/app.scss'

let canvas  = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

self.img = document.createElement('img')
self.img.src = "sprites/RAYQUAZA_good.png"
self.img.onload = function () {
    animate()
}

canvas.width = 700
canvas.height = 300

let step = 0
let steps = 0


function animate() {
    requestAnimationFrame(animate)
    draw(img.height,Math.floor(steps))
    update()
}

function draw(height,step) {
    ctx.clearRect(0,0,innerWidth,innerHeight)
    ctx.drawImage(self.img,73*step,0,73,self.img.height,0,0,73,self.img.height)
}

function update() {
    steps += 0.15
       if (steps > 8) {
        steps = 0
    }
}

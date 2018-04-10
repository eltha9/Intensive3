import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'
import Level from './js/class/levelClass.js'
let canvas  = document.querySelector('canvas')

let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 667
canvas.height = 375

self.goku = new Character('Goku', 'sprites/goku.png',51,500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,500,500,ctx)
self.rayquaza = new Character('rayquaza', 'sprites/RAYQUAZA_good.png',72.67,500,500,ctx)

self.desert = new Level(0,'images/background/desert.png','images/floor/floor_flappy_bird.png',canvas.width,canvas.height,ctx)


function display() {
    requestAnimationFrame(display)
    Animate(goku, desert)
}

display()

function init() {
    
    window.addEventListener('keypress', e => {
        
    })
}
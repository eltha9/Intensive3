import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'

let canvas  = document.querySelector('canvas')

let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 700
canvas.height = 300

self.goku = new Character('Goku', 'sprites/goku.png',51,500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,500,500,ctx)
self.rayquaza = new Character('Rayquaza', 'sprites/RAYQUAZA_good.png',72.74,200,200,ctx)

function tamere() {
    requestAnimationFrame(tamere)
    Animate(goku)
}

tamere()
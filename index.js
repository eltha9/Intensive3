import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'
import Level from './js/class/levelClass.js'

let canvas  = document.querySelector('canvas')

let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 700
canvas.height = 300

self.goku = new Character('Goku', 'sprites/goku.png',51,500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,500,500,ctx)
self.rayquaza = new Character('rayquaza', 'sprites/RAYQUAZA_good.png',72.67,500,500,ctx)

self.desert = new Level(0,'ressources/background/desert.png','ressources/floor/sol_de_terre.png',canvas.width,canvas.height,ctx)

self.desert.block.onload = function () {
    ctx.drawImage(desert.block,0,0,desert.block.width,desert.block.height,0,canvas.height-100,400,100)
}

// function tamere() {
//     requestAnimationFrame(tamere)
//     Animate(goku, desert)
// }

// tamere()
import css from './css/app.scss'
import Character from './js/class/characterClass.js'

let canvas  = document.querySelector('canvas')

let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 700
canvas.height = 300

self.goku = new Character('Goku', 'sprites/goku.png',51,500,500,ctx)
console.log(goku)
self.goku.animate()
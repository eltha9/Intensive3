import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'
import Level from './js/class/levelClass.js'
import Floor from './js/class/floorClass.js'

const inGame = true
const canvas  = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 667
canvas.height = 375

self.goku = new Character('Goku', 'sprites/goku.png',51,500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,500,500,ctx)
self.rayquaza = new Character('rayquaza', 'sprites/RAYQUAZA_good.png',72.67,500,500,ctx)

self.desert = new Level(0,'images/background/desert.png',canvas.width,canvas.height,ctx)
self.desertFloor = new Floor('images/floor/floor_flappy_bird.png',0,ctx)

console.log({goku,nyancat})


const levels = [desert]
const floors = ['images/floor/floor_flappy_bird.png']
let random =  Math.floor(Math.random()*levels.length)


function display() {
    requestAnimationFrame(display)
    Animate(goku, levels[random],grounds, floors[random] )
}


function init() {
    
    let level = levels[random]
    window.grounds = [new Floor(floors[random],0,ctx),new Floor(floors[random],0,ctx),new Floor(floors[random],0,ctx),new Floor(floors[random],0,ctx),new Floor(floors[random],0,ctx)]

    grounds.forEach((ground, i) => {
        ground.x = i
    })

    window.addEventListener('keypress', e => {

        if (inGame) {
            if (e.keyCode == 122) {

                if (grounds[0].y < 2) {
                    grounds[0].y++
                }
                console.log('haut')
            }
            else if (e.keyCode == 115) {
                if (grounds[0].y > 0) {
                    grounds[0].y--
                }
            }
        }
    })

    display()
}

init()
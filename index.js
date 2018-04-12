import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'
import Level from './js/class/levelClass.js'
import Floor from './js/class/floorClass.js'
import Music from './js/functions/music.js'
import CountMeter from './js/functions/countMeter.js'

let sound = document.querySelector("#playing")
// Music(sound, 'nyanCat')


const inGame = true
const canvas  = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 667
canvas.height = 375

self.goku = new Character('Goku', 'sprites/goku.png',75,'images/floor/rainbowFloor.png',500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,'images/floor/rainbowFloor.png',500,500,ctx)
self.rayquaza = new Character('rayquaza', 'sprites/RAYQUAZA_good.png',72.67,'images/floor/pokemonGrid.png',500,500,ctx)


self.desert = new Level(0,'images/background/mountains.png',canvas.width,canvas.height,ctx)



const levels = [desert]
const floors = ['images/floor/gridFloor.png']
let random =  Math.floor(Math.random()*levels.length)


function display() {
    requestAnimationFrame(display)
    Animate(goku, levels[random],grounds, floors[random], canvas.width )
}


function init(character,canvasWidth) {
    
    let level = levels[random]

    window.grounds = [new Floor(floors[random],0,character.spriteWidth,canvasWidth,ctx),new Floor(floors[random],1,character.spriteWidth,canvasWidth,ctx),new Floor(floors[random],2,character.spriteWidth,canvasWidth,ctx),new Floor(floors[random],3,character.spriteWidth,canvasWidth,ctx),new Floor(floors[random],4,character.spriteWidth,canvasWidth,ctx)]

    grounds.forEach((ground,i) => {
        if (i == 0) {
            ground.transitionX = ground.floorsInitX[0]
        }
        else if (i == 1) {
            ground.transitionX = 75 + character.spriteWidth/2
        }
        else{
           let sum = 0
           for (let j = 1; j < i; j++) {
                sum += grounds[j].floorWidths[grounds[j].floorWidth]
           }

           ground.transitionX = sum + 75 + character.spriteWidth/2
           
        }

    })


    window.addEventListener('keypress', e => {

        if (inGame) {
            if (e.keyCode == 122) {

                if (grounds[1].y < 2) {
                    grounds[1].y++
                }

            }
            else if (e.keyCode == 115) {
                if (grounds[1].y > 0) {
                    grounds[1].y--
                }
            }
        }
    })

    window.speed = 4
    display()
    window.countMeter = CountMeter()
}

init(goku,canvas.width)
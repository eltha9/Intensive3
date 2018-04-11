import css from './css/app.scss'
import Character from './js/class/characterClass.js'
import Animate from './js/functions/animate.js'
import Level from './js/class/levelClass.js'
import Floor from './js/class/floorClass.js'
import Music from './js/functions/music.js'

let sound = document.querySelector("#playing")
// Music(sound, 'nyanCat')


const inGame = true
const canvas  = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = 667
canvas.height = 375

self.goku = new Character('Goku', 'sprites/goku.png',75,'images/floor/rainbow_floor.png',500,500,ctx)
self.nyancat = new Character('nyanCat', 'sprites/NYANcat-good.png',75,500,500,ctx)
self.rayquaza = new Character('rayquaza', 'sprites/RAYQUAZA_good.png',72.67,500,500,ctx)
self.bowser = new Character('space', 'sprites/bowser.png',75,500,500,ctx)

self.desert = new Level(0,'images/background/desert.png',canvas.width,canvas.height,ctx)



const levels = [desert]
const floors = ['images/floor/floor_flappy_bird.png']
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


    console.log(grounds[0].transitionX+grounds[0].floorWidths[grounds[0].floorWidth], grounds[1].transitionX)
    console.log(grounds[1].transitionX+grounds[1].floorWidths[grounds[1].floorWidth], grounds[2].transitionX)
    console.log(grounds[2].transitionX+grounds[2].floorWidths[grounds[2].floorWidth], grounds[3].transitionX)
    console.log(grounds[3].transitionX+grounds[3].floorWidths[grounds[3].floorWidth], grounds[4].transitionX)

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

    display()
}

init(goku,canvas.width)
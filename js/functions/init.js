// Import of datas
import Characters from '../characters/characters'
import Levels from '../levels/levels'

// Import of classes
import Floor from '../class/floorClass'
import Character from '../class/characterClass'

// Import of functions
import Animate from './animate'
import CountMeter from './countMeter'
import Music from './music'

// Variable relative to the function
let touchStart
let inGame = true
window.random = Math.floor(Math.random() * Levels[0].length)

export default function init(character, canvasWidth,ctx) {

    // We create the first 5 floors
    window.grounds = [new Floor(Levels[1][0], 0, character.spriteWidth, canvasWidth, ctx), new Floor(Levels[1][0], 1, character.spriteWidth, canvasWidth, ctx), new Floor(Levels[1][0], 2, character.spriteWidth, canvasWidth, ctx), new Floor(Levels[1][0], 3, character.spriteWidth, canvasWidth, ctx), new Floor(Levels[1][0], 4, character.spriteWidth, canvasWidth, ctx)]

    // Apply the x value of the floors
    grounds.forEach((ground, i) => {
        if (i == 0) {
            ground.transitionX = ground.floorsInitX[0]
        } else if (i == 1) {
            ground.transitionX = 75 + character.spriteWidth / 2
        } else {
            let sum = 0
            for (let j = 1; j < i; j++) {
                sum += grounds[j].floorWidths[grounds[j].floorWidth]
            }

            ground.transitionX = sum + 75 + character.spriteWidth / 2

        }

    })


    // Set the controls for keyboards
    window.addEventListener('keypress', e => {

        if (inGame) {
            if (e.keyCode == 122) {

                if (grounds[1].y < 2) {
                    grounds[1].y++
                }

            } else if (e.keyCode == 115) {
                if (grounds[1].y > 0) {
                    grounds[1].y--
                }
            }
        }
    })

    // Set the controls for the mobile
    window.addEventListener('touchstart', e => {

        touchStart = e.changedTouches[0].screenY
    })

    window.addEventListener('touchend', e => {

        if (touchStart > e.changedTouches[0].screenY) {

            if (grounds[1].y < 2) {
                grounds[1].y++
            }
        } else {
            if (grounds[1].y > 0) {
                grounds[1].y--
            }
        }
    })

    // Set important variables and functions
    window.coins = 0
    window.speed = 4
    window.dead = false
    window.music = document.querySelector('.'+Characters[window.choosenCharacter].name)
    display()
    Music(window.music)
    window.countMeter = CountMeter()
}

// Function that run the game
function display() {

    requestAnimationFrame(display)

    Animate(Characters[window.choosenCharacter], Levels[0][random], grounds, Levels[1][0], window.canvasWidth)
}
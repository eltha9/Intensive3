import Floor from '../class/floorClass.js'

const gameover = document.querySelector('.gameover')
gameover.style.display = 'none'
let dead = false

export default function animate(character, level, grounds, floorType, canvasWidth) {

    if (!dead) {

        verify(character, grounds, floorType)
        draw(character, level, grounds)
        update(character, grounds, floorType, canvasWidth)
    }
}

function draw(character, level, grounds) {
    level.ctx.clearRect(0, 0, innerWidth, innerHeight)

    level.ctx.drawImage(level.background, 0, 0, level.background.width, level.background.height, 0, 0, level.backgroundWidth, level.backgroundHeight)


    grounds.forEach((floor, i) => {

        floor.ctx.drawImage(floor.floor, 0, 0, floor.floor.width, floor.floor.height, floor.transitionX, floor.floorsY[floor.y], floor.floorWidths[floor.floorWidth], floor.floorHeight)

        floor.coins.forEach( coin => {

            coin.ctx.drawImage(coin.sprite, 0, 0, coin.sprite.width, coin.sprite.height, coin.x, coin.y, 30, 30)
        })
    })


    character.ctx.drawImage(character.sprite, character.spriteWidth * Math.floor(character.steps), 0, character.spriteWidth, character.sprite.height, character.x, character.charactersY[character.y], character.spriteWidth + 1, character.sprite.height)
}


function update(character, grounds, floorType, canvasWidth) {

    grounds.forEach((ground, i) => {
        ground.x -= 0.015

        ground.transitionX -= window.speed

        if (grounds[1].floorWidths[grounds[1].floorWidth] + grounds[1].transitionX <= 75 + character.spriteWidth / 2) {

            grounds.shift()

            grounds.push(new Floor(floorType, 5, character.spriteWidth, canvasWidth, character.ctx))
            let sum = 0
            for (let i = 1; i < grounds.length - 1; i++) {

                sum += grounds[i].floorWidths[grounds[i].floorWidth]

            }
            grounds[4].transitionX = sum + grounds[1].transitionX + grounds[1].floorWidth

            if (Math.random()*6 >= 4) {

                grounds[4].generateCoin('./images/bonus/coins.png',grounds[4],character,ground.ctx)
            }
        }

        ground.coins.forEach(coin => {
            coin.x -= window.speed
        })
    })

    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}


function verify(character, grounds, floorType) {

    grounds[1].floor.src = character.floorSprite
    grounds[0].floor.src = floorType
    if (grounds[1].floorWidths[grounds[1].floorWidth] + grounds[1].transitionX - window.speed <= 75 + character.spriteWidth / 2) {

        if (grounds[1].y != grounds[1].y) {
            dead = true
            gameover.style.display = 'block'
            clearInterval(window.countMeter)
            pause(sound)
        }
    } else {
        character.y = grounds[1].y
    }
}

//pause button
function pause(audioNode) {
    audioNode.pause()
}

let sound = document.querySelector("#playing")
// Import of classes
import Floor from '../class/floorClass.js'


// Variables relative to the function
const gameover = document.querySelector('.gameover')
gameover.style.display = 'none'

const coinsCount = document.querySelector('.countCoins span')

let dead = false


export default function animate(character, background, grounds, floorType, canvasWidth) {

    if (!dead) {

        // 3 functions that make animate works
        verify(character, grounds, floorType)
        draw(character, background, grounds)
        update(character, grounds, floorType, canvasWidth)
    }
}

function draw(character, background, grounds) {

    // Clear canvas
    background.ctx.clearRect(0, 0, innerWidth, innerHeight)

    // Background
    background.ctx.drawImage(background.background, 0, 0, background.background.width, background.background.height, 0, 0, background.backgroundWidth, background.backgroundHeight)


    // Draw every floors and the coins
    grounds.forEach((ground, i) => {

        // Floors
        ground.ctx.drawImage(ground.floor, 0, 0, ground.floor.width, ground.floor.height, ground.transitionX, ground.floorsY[ground.y], ground.floorWidths[ground.floorWidth], ground.floorHeight)

        ground.coins.forEach(coin => {

            //Coins
            coin.ctx.drawImage(coin.sprite, 0, 0, coin.sprite.width, coin.sprite.height, coin.x, coin.y, 30, 30)
        })
    })

    //Draw the character
    character.ctx.drawImage(character.sprite, character.spriteWidth * Math.floor(character.steps), 0, character.spriteWidth, character.sprite.height, character.x, character.charactersY[character.y], character.spriteWidth + 1, character.sprite.height)
}


function update(character, grounds, floorType, canvasWidth) {

    // Here the values change
    grounds.forEach((ground, i) => {

        // The x value of the floor, depend of the speed that keep going up
        ground.transitionX -= window.speed

        // This condition dump the ground out of the screen to push a new one
        // Also stars are generate here
        if (grounds[1].floorWidths[grounds[1].floorWidth] + grounds[1].transitionX <= 75 + character.spriteWidth / 2) {

            // Dump out floor
            grounds.shift()

            // Push new one
            grounds.push(new Floor(floorType, 5, character.spriteWidth, canvasWidth, character.ctx))

            let sum = 0
            for (let i = 1; i < grounds.length - 1; i++) {

                sum += grounds[i].floorWidths[grounds[i].floorWidth]

            }
            grounds[4].transitionX = sum + grounds[1].transitionX + grounds[1].floorWidth

            // Generate star
            if (Math.random() * 6 >= 4) {

                grounds[4].generateCoin('./images/bonus/coins.png', grounds[4], character, ground.ctx)
            }
        }

        // Change coin x value to make it move
        ground.coins.forEach(coin => {
            coin.x -= window.speed
        })
    })

    // Here is the animation of the character 
    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}


function verify(character, grounds, floorType) {

    // Change the current floor with the character's floor texture
    grounds[1].floor.src = character.floorSprite
    grounds[0].floor.src = floorType

    // Verifiy if you pick a coin, if it does it take off the coin from the array
    grounds[1].coins.forEach(coin => {
        if ((character.maxX >= coin.x && character.maxX <= coin.maxX) && (coin.y >= character.charactersY[character.y] && coin.y <= character.maxY)) {
            grounds[1].coins.pop()

            coinsCount.innerHTML = parseInt(coinsCount.innerHTML) + 1
        }
    })

    // If you are at the end of the current floor, check if you are dead
    // Else it allow to move the character with the floor
    if (grounds[1].floorWidths[grounds[1].floorWidth] + grounds[1].transitionX - window.speed <= 75 + character.spriteWidth / 2) {

        if (grounds[1].y != grounds[1].y) {
            dead = true
            gameover.style.display = 'block'
            clearInterval(window.countMeter)
            pause(sound)
        }
    } else {
        character.y = grounds[1].y
        character.maxY = character.charactersY[character.y] + character.sprite.height
    }
}

//pause button
function pause(audioNode) {
    audioNode.pause()
}

let sound = document.querySelector("#playing")
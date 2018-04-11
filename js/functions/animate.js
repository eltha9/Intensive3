import Floor from '../class/floorClass.js'

const gameover = document.querySelector('.gameover')
gameover.style.display = 'none'
let dead = false

export default function animate(character,level,grounds,floorType) {

    if (!dead) {
        verify(character,grounds)
        draw(character,level,grounds)    
        update(character,grounds,floorType)
    }
}

function draw(character,level,grounds) {
    level.ctx.clearRect(0,0,innerWidth,innerHeight)

    level.ctx.drawImage(level.background,0,0,level.background.width,level.background.height,0,0,level.backgroundWidth,level.backgroundHeight)

    grounds.forEach(floor => {

        // floor.ctx.drawImage(floor.floor,0,0,floor.floor.width,floor.floor.height,floor.floorsInitX[Math.floor(floor.x)],floor.floorsY[floor.y],floor.floorWidth,floor.floorHeight)
        floor.ctx.drawImage(floor.floor,0,0,floor.floor.width,floor.floor.height,floor.transitionX,floor.floorsY[floor.y],floor.floorWidth,floor.floorHeight)
    }) 

    // grounds[1].ctx.fillStyle = 'rgba(255, 165, 0, 0.5)'
    // grounds[1].ctx.rect(grounds[1].transitionX,grounds[1].floorsY[grounds[1].y],667/3,200)
    // console.log(grounds[1].transitionX,grounds[1].floorsY[grounds[1].y])
    // console.log('--------------------------------------')
    // grounds[1].ctx.fill()
    
    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,character.x,character.charactersY[character.y],character.spriteWidth+1,character.sprite.height)
}


function update(character,grounds,floorType) {

    grounds.forEach( (floor,i) => {
        floor.x -= 0.015
        floor.transitionX -= 4
    //    console.log(floor.transitionX,i)
        if (floor.transitionX < -222 - (222-75-character.spriteWidth/2)) {
            // console.log(floor.transitionX)
            grounds.shift()
            grounds.push(new Floor(floorType,5,character.spriteWidth,character.ctx))
            
        }
       
    })
    
    // console.log('end')
    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}


function verify(character,grounds) {

    grounds[1].floor.src = 'images/floor/rainbow_floor.png'
    if (grounds[1].transitionX+222 <= 75+character.spriteWidth/2) {
        
        if (grounds[1].y != grounds[2].y) {
            dead = true
            gameover.style.display = 'block'
            pause(sound)
        }
    }
    else {
        character.y = grounds[1].y
    }
}

//pause button
function pause(audioNode){

      audioNode.pause()


}

let sound = document.querySelector("#playing")

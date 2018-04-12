import Floor from '../class/floorClass.js'

const gameover = document.querySelector('.gameover')
gameover.style.display = 'none'
let dead = false

export default function animate(character,level,grounds,floorType,canvasWidth) {

    if (!dead) {
        
        verify(character,grounds,floorType)
        draw(character,level,grounds)    
        update(character,grounds,floorType,canvasWidth)
    }
}

function draw(character,level,grounds) {
    level.ctx.clearRect(0,0,innerWidth,innerHeight)

    level.ctx.drawImage(level.background,0,0,level.background.width,level.background.height,0,0,level.backgroundWidth,level.backgroundHeight)

    
    grounds.forEach((floor,i) => {

        // floor.ctx.drawImage(floor.floor,0,0,floor.floor.width,floor.floor.height,floor.floorsInitX[Math.floor(floor.x)],floor.floorsY[floor.y],floor.floorWidth,floor.floorHeight)
        floor.ctx.drawImage(floor.floor,0,0,floor.floor.width,floor.floor.height,floor.transitionX,floor.floorsY[floor.y],floor.floorWidths[floor.floorWidth],floor.floorHeight)

    }) 

    
    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,character.x,character.charactersY[character.y],character.spriteWidth+1,character.sprite.height)
}


function update(character,grounds,floorType,canvasWidth) {

    grounds.forEach( (floor,i) => {
        floor.x -= 0.015

        floor.transitionX -= window.speed

        if ( grounds[1].floorWidths[grounds[1].floorWidth] + grounds[1].transitionX <= 75+ character.spriteWidth/2) {

            grounds.shift()
           
            grounds.push(new Floor(floorType,5,character.spriteWidth,canvasWidth,character.ctx))
 
            let sum = 0
            for (let i = 1; i < grounds.length-1; i++) {
                
                sum += grounds[i].floorWidths[grounds[i].floorWidth]
                
            }
            grounds[4].transitionX = sum  + 75 + character.spriteWidth/2 
            
        }
       
    })
    
    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}


function verify(character,grounds,floorType) {

    grounds[1].floor.src = character.floorSprite
    grounds[0].floor.src = floorType
    if (grounds[1].y != grounds[2].y) {
        dead = true
        gameover.style.display = 'block'
        pause(sound)
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

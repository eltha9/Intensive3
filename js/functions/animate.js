import Floor from '../class/floorClass.js'

let dead = false

export default function animate(character,level,grounds,floorType) {

        verify(character,grounds)
        draw(character,level,grounds)    
        update(character,grounds,floorType)

}

function draw(character,level,grounds) {
    level.ctx.clearRect(0,0,innerWidth,innerHeight)

    level.ctx.drawImage(level.background,0,0,level.background.width,level.background.height,0,0,level.backgroundWidth,level.backgroundHeight)

    grounds.forEach(floor => {

        floor.ctx.drawImage(floor.floor,0,0,floor.floor.width,floor.floor.height,floor.floorsX[Math.floor(floor.x)],floor.floorsY[floor.y],floor.floorWidth,floor.floorHeight)
    })

    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,character.x,character.charactersY[character.y],character.spriteWidth,character.sprite.height)
}


function update(character,grounds,floorType) {

    grounds.forEach( floor => {
        floor.x -= 0.01

        
        if (floor.x < 0) {

            grounds.shift()
            grounds.push(new Floor(floorType,5,character.ctx))
            console.log(grounds[4].x)
            console.log(grounds[3].x)
        }

       
    })

    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}


function verify(character,grounds) {

    character.y = grounds[0].y
    for (let i = 0; i < grounds.length-1; i++) {
        
        if( grounds[i].x < grounds[i+1].x) {
            console.log('ok')
        }
        else {
            console.log('tamere')
        }
    }
 
}
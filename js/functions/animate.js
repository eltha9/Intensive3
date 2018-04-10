export default function animate(character,level) {

    verify()
    draw(character,level)    
    update(character)

    

}

function draw(character,level) {
    character.ctx.clearRect(0,0,innerWidth,innerHeight)

    level.ctx.drawImage(level.background,0,0,level.background.width,level.background.height,0,0,level.backgroundWidth,level.backgroundHeight)

    level.ctx.drawImage(level.floor,0,0,level.floor.width,level.floor.height,0,level.backgroundHeight-200,level.floorWidth,level.floorHeight)
    level.ctx.drawImage(level.floor,0,0,level.floor.width,level.floor.height,222,level.backgroundHeight-200,level.floorWidth,level.floorHeight)
    level.ctx.drawImage(level.floor,0,0,level.floor.width,level.floor.height,222*2,level.backgroundHeight-200,level.floorWidth,level.floorHeight)

    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,character.x,character.y,character.spriteWidth,character.sprite.height)
}

function update(character,level) {

    // level.x -= 0.12
    // if (level.x < 0) {
    //     floor.pop(0)
    //     floor.push()
    // }

    character.steps += 0.12
    if (character.steps > 7) {
        character.steps = 0
    }

}

function verify() {
    
}
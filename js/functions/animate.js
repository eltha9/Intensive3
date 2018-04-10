export default function animate(character,level) {

    character.ctx.clearRect(0,0,innerWidth,innerHeight)

    level.ctx.drawImage(level.background,0,0,level.background.width,level.background.height,0,0,level.backgroundWidth,level.backgroundHeight)
    // level.ctx.drawImage(level.block,0,0,level.block.width,level.block.height,0,level.backgroundHeight-100,200,300)

    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,100,100,character.spriteWidth,character.sprite.height)


    character.steps += 0.12
       if (character.steps > 7) {
        character.steps = 0
    }

}
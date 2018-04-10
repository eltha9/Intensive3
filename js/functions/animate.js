export default function animate(character) {

    character.ctx.clearRect(0,0,innerWidth,innerHeight)
    // character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.height,20,20,character.spriteWidth,character.height)
    character.ctx.drawImage(character.sprite,character.spriteWidth*Math.floor(character.steps),0,character.spriteWidth,character.sprite.height,100,100,character.spriteWidth,character.sprite.height)
    console.log(character.spriteWidth,character.sprite.height)
    character.steps += 0.12
       if (character.steps > 7) {
        character.steps = 0
    }

}

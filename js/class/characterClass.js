/**
 * @param  {string} name
 * @param  {string} sprite
 * @param  {number} costCoins
 * @param  {number} costPoints 
 */

export default class Character {
    constructor(name,sprite,spriteWidth,costCoins,costPoints,ctx) {

        this.name = name

        this.sprite = new Image()
        this.sprite.src = sprite
        this.spriteWidth = spriteWidth

        this.ctx = ctx

        this.costCoins = costCoins
        this.costPoints = costPoints

        this.selectionWidth = 75
        this.height = this.sprite.height

        this.steps = 0
    }

    animate() {
        // requestAnimationFrame(this.animate())
        this.draw(this.height,Math.floor(this.steps))
        this.update()
    }

    draw(height,step) {
        this.ctx.clearRect(0,0,innerWidth,innerHeight)
        this.ctx.drawImage(this.sprite,this.spriteWidth*step,0,this.spriteWidth,this.height,20,20,this.spriteWidth,this.height)
    }

    update() {
        this.steps += 0.15
           if (this.steps > 7) {
            this.steps = 0
        }
    }
}

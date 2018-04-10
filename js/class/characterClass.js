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
        this.spriteHeight = this.sprite.height

        this.ctx = ctx

        this.costCoins = costCoins
        this.costPoints = costPoints



        this.steps = 0
    }

}

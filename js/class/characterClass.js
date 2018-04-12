/**
 * Character that you can play with
 * @constructor
 * @param  {string} name
 * @param  {string} sprite - Link to the sprite, need to have 8 steps of animation and frame has to be sticks
 * @param  {number} spriteWidth - width one of your frame
 * @param  {number} floorSprite - Link to the own character floor sprite
 * @param  {number} costCoins
 * @param  {number} costPoints
 * @param  {CanvasRenderingContext2D} ctx
 */
export default class Character {

    constructor(name,sprite,spriteWidth,floorSprite,costCoins,costPoints,ctx) {

        this.name = name

        this.sprite = new Image()
        this.sprite.src = sprite

        this.spriteWidth = spriteWidth
        setTimeout(() => {
            this.spriteHeight = this.sprite.height
        }, 5)
        
        this.floorSprite = floorSprite
        
        this.ctx = ctx

        this.costCoins = costCoins
        this.costPoints = costPoints
        this.charactersY = [275,225,175]
        setTimeout(() => {
            this.charactersY = [275-this.sprite.height,225-this.sprite.height,175-this.sprite.height]  
            this.maxX = this.spriteWidth+this.x
        }, 5)

        this.x = 75
        this.y = 0
        
        this.maxY = this.charactersY[this.y]

        this.steps = 0
    }

}

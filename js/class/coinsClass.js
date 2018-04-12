import Character from "./characterClass";

/**
 * Coins for the game
 * @constructor
 * @param  {string} sprite - link to the coin sprite
 * @param  {Floor} fromFloor - floor that generated the coin
 * @param  {Character} character - Character that the player use
 * @param  {CanvasRenderingContext2D} ctx
 */
export default class Coin {
    constructor(sprite,fromFloor,character,ctx) {

        this.sprite = new Image()
        this.sprite.src = sprite

        this.fromFloor = fromFloor

        this.minGenerationX = this.fromFloor.transitionX + 30
        this.maxGenerationX = this.fromFloor.transitionX + this.fromFloor.floorWidths[this.fromFloor.floorWidth] - 30

        this.x = Math.floor(Math.random() * (this.maxGenerationX - this.minGenerationX + 1)) + this.minGenerationX
        this.y = this.fromFloor.floorsY[Math.floor(Math.random()*this.fromFloor.floorsY.length)] - 30

        this.maxX = this.x + 30
        this.maxY = this.y + 30
        
        this.ctx = ctx
    }

}
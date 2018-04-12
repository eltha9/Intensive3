// Import class
import Coins from './coinsClass.js'

// Import functions
import Canvas from '../functions/canvas'

/**
 * Floor that basicaly makes the game
 * @constructor
 * @param  {string} floor - link to the sprite
 * @param  {number} x 
 * @param  {number} characterWidth 
 * @param  {number} canvasWidth
 * @param  {CanvasRenderingContext2D} ctx
 */

export default class Floor {

    constructor(floor, x, characterWidth, canvasWidth, ctx) {

        this.floor = new Image()
        this.floor.src = floor

        this.floorWidths = [Canvas.canvasWidth / 3.5 + 3, Canvas.canvasWidth / 3 + 3, Canvas.canvasWidth / 2.5 + 3]
        this.floorWidth = Math.floor(Math.random() * this.floorWidths.length)
        this.floorHeight = 200

        this.floorsY = [275, 225, 175]
        this.floorsInitX = [-1 * this.floorWidths[this.floorWidth] + 75 + characterWidth / 2, this.floorWidths[this.floorWidth] - 75 - characterWidth / 2, 2 * this.floorWidths[this.floorWidth] - 75 - characterWidth / 2, 3 * this.floorWidths[this.floorWidth] - 75 - characterWidth / 2, 4 * this.floorWidths[this.floorWidth] - 75 - characterWidth / 2]
        this.x = x
        this.transitionX = 0
        this.y = Math.floor(Math.random() * this.floorsY.length)

        this.coins = []
        this.ctx = ctx
    }

    generateCoin(sprite,fromFloor,character,ctx) {
        this.coins.push(new Coins(sprite,fromFloor,character,ctx))
    }

}
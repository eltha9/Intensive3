/**
 * @param  {number} id
 * @param  {string} background - link to the background image
 * @param  {number} backgroundWidth
 * @param  {number} backgroundHeight
 * @param  {CanvasRenderingContext2D} ctx
 */
export default class Background {

    constructor (id,background,backgroundWidth,backgroundHeight,ctx) {

        this.id = id

        this.background = new Image()
        this.background.src = background

        this.backgroundWidth = backgroundWidth
        this.backgroundHeight = backgroundHeight
        
        this.ctx = ctx
    }

}


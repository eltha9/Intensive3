export default class Level {

    constructor (id,background,block,backgroundWidth,backgroundHeight,ctx) {

        this.id = id

        this.background = new Image()
        this.background.src = background

        this.backgroundWidth = backgroundWidth
        this.backgroundHeight = backgroundHeight
        
        this.block = new Image()
        this.block.src = block
        
        this.ctx = ctx
    }
}
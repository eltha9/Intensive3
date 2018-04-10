export default class Level {

    constructor (id,background,floorId,backgroundWidth,backgroundHeight,ctx) {

        this.id = id
        this.floorId = floorId

        this.background = new Image()
        this.background.src = background

        this.backgroundWidth = backgroundWidth
        this.backgroundHeight = backgroundHeight
        
        this.ctx = ctx
    }

}


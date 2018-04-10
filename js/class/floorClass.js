export default class Level {

    constructor (floor,ctx) {
        
        this.floor = new Image()
        this.floor.src = floor

        this.floorWidth = 222
        this.floorHeight = 200
        this.floorHeights = [100,150,200]

        this.x = 0
        this.y = 0
        
        this.ctx = ctx
    }

    update() {
        console.log('ok')
    }
}


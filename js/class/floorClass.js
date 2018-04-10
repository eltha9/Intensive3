export default class Level {

    constructor (floor,x,ctx) {
        
        this.floor = new Image()
        this.floor.src = floor

        this.floorWidth = 222
        this.floorHeight = 200

        this.floorsY = [275,225,175]
        this.floorsX = [0,222,444,666,888]
        this.x = x
        this.y = Math.floor(Math.random()*this.floorsY.length)
        
        this.ctx = ctx
    }

    update() {
        console.log('ok')
    }
}


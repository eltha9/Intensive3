export default class Floor {

    constructor (floor,x,characterWidth,canvasWidth,ctx) {
        
        this.floor = new Image()
        this.floor.src = floor

        this.floorWidths = [canvasWidth/3.5+2,canvasWidth/3+2,canvasWidth/2.5+2]
        this.floorWidth = Math.floor(Math.random()*this.floorWidths.length)
        this.floorHeight = 200

        this.floorsY = [275,225,175]
        this.floorsInitX = [-1*this.floorWidths[this.floorWidth]+75+characterWidth/2,this.floorWidths[this.floorWidth]-75-characterWidth/2,2*this.floorWidths[this.floorWidth]-75-characterWidth/2,3*this.floorWidths[this.floorWidth]-75-characterWidth/2,4*this.floorWidths[this.floorWidth]-75-characterWidth/2]
        this.x = x
        this.transitionX = 0
        this.y = Math.floor(Math.random()*this.floorsY.length)
        
        this.coins = []
        this.ctx = ctx
    }

    generateCoin() {

    }

}


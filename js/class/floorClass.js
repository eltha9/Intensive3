export default class Floor {

    constructor (floor,x,characterWidth,ctx) {
        
        this.floor = new Image()
        this.floor.src = floor

        this.floorWidth = 667/3
        this.floorHeight = 200

        this.floorsY = [275,225,175]
        this.floorsInitX = [-667/3+75+characterWidth/2,222-75-characterWidth/2,2*667/3-75-characterWidth/2,3*667/3-75-characterWidth/2,4*667/3-75-characterWidth/2]
        this.x = x
        this.transitionX = x == 5 ? this.floorsInitX[this.x-1] : this.floorsInitX[this.x]
        this.y = Math.floor(Math.random()*this.floorsY.length)
        
        this.ctx = ctx
    }

}


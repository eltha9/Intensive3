export default class Coin {
    constructor(sprite,fromFloor,character,ctx) {

        this.sprite = new Image()
        this.sprite.src = sprite

        this.fromFloor = fromFloor

        this.minX = this.fromFloor.transitionX + 40
        this.minY = this.fromFloor.floorsY[this.fromFloor.y] - 40

        this.maxX = this.fromFloor.transitionX + this.fromFloor.floorWidths[this.fromFloor.floorWidth] - 40
        this.maxY = this.fromFloor.floorsY[this.fromFloor.floorsY.length-1] + character.spriteHeight + 40

        this.x = Math.floor(Math.random() * (this.maxX - this.minX + 1)) + this.minX
        this.y = this.fromFloor[Math.floor(Math.random() * this.fromFloor.floorsY.length)]

        this.ctx = ctx
    }

}
class Bonus {
    constructor (id,sprite) {

        this.id = id
        this.sprite = sprite

    }
    addBonus(valueBonus,currentPoint){

      currentPoint += valueBonus
      return currentPoint
    }

    malusBonus(valueBonus, currentPoint){
      currentPoint-= valueBonus
      return currentPoint
    }
}

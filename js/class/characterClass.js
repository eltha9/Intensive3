/**
 * @param  {string} name
 * @param  {string} sprite
 * @param  {number} costCoins
 * @param  {number} costPoints 
 */

class Character {
    constructor(name,sprite,costCoins,costPoints) {

        this.name = name

        this.sprite = sprite

        this.costCoins = costCoins
        this.costPoints = costPoints

        this.selectionWidth = 75
        this.height = sprite.height
    }
}

// Import of class
import Character from '../class/characterClass'

//Import of functions
import Canvas from '../functions/canvas'

// Here are the characters
const goku = new Character('goku', 'images/sprites/goku.png', 75, 'images/floor/gokuFloor.png', 0, 500, Canvas.ctx)
const nyancat = new Character('nyancat', 'images/sprites/NYANcat-good.png', 75, 'images/floor/rainbowFloor.png', 10, 500, Canvas.ctx)
const rayquaza = new Character('rayquaza', 'images/sprites/RAYQUAZA_good.png', 72.67, 'images/floor/pokemonGrid.png', 100, 500, Canvas.ctx)
const robotnik = new Character('robotnik','images/sprites/robotnik.png',75,'images/floor/rainbowFloor.png',1000,700,Canvas.ctx)
const sonic = new Character('sonic','images/sprites/sonic.png',75,'images/floor/rainbowFloor.png',1500,700,Canvas.ctx)


// Add you new character in the array
const characters = [goku,nyancat,rayquaza,robotnik,sonic]

export default characters


// Save the price
let cost = []
characters.forEach((character,i) => {
    cost.push(
        {
            id:i,
            cost:character.costCoins,
            unlock: false
        }
    )
})
cost[0].unlock = true
localStorage.setItem('characters',JSON.stringify(cost))

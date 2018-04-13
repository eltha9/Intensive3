// Import of class
import Character from '../class/characterClass'

//Import of functions
import Canvas from '../functions/canvas'

// Here are the characters
const goku = new Character('Goku', 'images/sprites/goku.png', 75, 'images/floor/gokuFloor.png', 500, 500, Canvas.ctx)
const nyancat = new Character('nyanCat', 'images/sprites/NYANcat-good.png', 75, 'images/floor/rainbowFloor.png', 500, 500, Canvas.ctx)
const rayquaza = new Character('rayquaza', 'images/sprites/RAYQUAZA_good.png', 72.67, 'images/floor/pokemonGrid.png', 500, 500, Canvas.ctx)

// Add you new character in the array
export default [goku,nyancat,rayquaza]
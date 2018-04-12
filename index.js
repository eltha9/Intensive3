// Import you scss/css to compile it
import scss from './css/app.scss'

//Import of datas
import Characters from './js/characters/characters'

//Import of functions
import Init from './js/functions/init.js'
import Canvas from './js/functions/canvas'

let sound = document.querySelector("#playing")
// Music(sound, 'nyanCat')


// Init the game with the player character choice
Init(Characters[0], Canvas.canvasWidth, Canvas.ctx)

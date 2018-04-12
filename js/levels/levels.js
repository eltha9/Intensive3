// Import of class
import Background from '../class/backgroundClass'

//Import of functions
import Canvas from '../functions/canvas'

// Here are the different backgrounds
const mountainsF = new Background(0, 'images/background/mountains-2.png', Canvas.canvasWidth, Canvas.canvasHeight, Canvas.ctx)
const mountainsS = new Background(1, 'images/background/mountains.png', Canvas.canvasWidth, Canvas.canvasHeight, Canvas.ctx)
const sunset =  new Background(2, 'images/background/sunset.png', Canvas.canvasWidth, Canvas.canvasHeight, Canvas.ctx)

// Put your backgrounds here
const backgrounds = [mountainsF,mountainsS,sunset]

// Here are the different texture for the floor, only one for now
const floors = ['images/floor/gridFloor.png']

export default [backgrounds,floors]
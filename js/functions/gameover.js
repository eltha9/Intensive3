//Import data
import Characters from '../characters/characters'
//Import the functions
import Init from './init'
import GameStart from './gameStart'
import Canvas from './canvas'
import canvas from './canvas';
export default function gameover() {

    window.dead = true
    window.gameover.style.display = 'block'
    clearInterval(window.countMeter)
    window.music.pause()
    
    // Back to the start screen
    window.gameover.children[1].children[0].addEventListener('click', ()=>{
        canvas.ctx.clearRect(0,0,Canvas.canvasWidth,Canvas.canvasHeight)
        GameStart()
    })

    // Play again
    window.gameover.children[1].children[1].addEventListener('click', ()=>{
        canvas.ctx.clearRect(0,0,Canvas.canvasWidth,Canvas.canvasHeight)
        clearInterval(window.countMeter)
        Init(Characters[window.choosenCharacter], Canvas.canvasWidth, Canvas.ctx)
        window.gameover.style.display = 'none'
    })
}
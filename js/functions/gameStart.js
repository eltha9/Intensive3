//Import of datas
import Characters from '../characters/characters'

//Import the init function
import Init from './init'
import Canvas from './canvas'

export default function () {

    const characters = document.querySelector('.characters')
    const playBtn = document.querySelector('.playBtn')
    const startScreen = document.querySelector('.start')

    startScreen.style.display = 'block'
    
    // Selection of the characters

    window.choosenCharacter = 0

    for (let i = 0; i < characters.children.length-2; i++) {

        characters.children[i].addEventListener('click', e => {

            characters.children[window.choosenCharacter].classList.remove('selected')
            window.choosenCharacter = parseInt(e.toElement.dataset.id)
            characters.children[parseInt(e.toElement.dataset.id)].classList.add('selected')

        })
    }

    //Launch the game
    
    playBtn.addEventListener('click', () => {

        startScreen.style.display = 'none'
        Init(Characters[window.choosenCharacter], Canvas.canvasWidth, Canvas.ctx)
    })
}


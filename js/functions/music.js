import Characters from '../characters/characters'


// Music function to play music
export default function player(audioNode, sprite = NaN){
  audioNode.play()
  audioNode.loop = true
}


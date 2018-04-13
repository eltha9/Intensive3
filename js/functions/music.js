import Characters from '../characters/characters'


// Music function to play music
export default function player(audioNode, sprite = NaN){
  audioNode.load()
  audioNode.play()
  audioNode.loop = true
}


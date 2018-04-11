let buttonMute = document.querySelector("#button_mute")
let buttonPause = document.querySelector("#button_pause")
let buttonChange = document.querySelector("#button_change")
let sound = document.querySelector("#playing")

let mute = false
let pause = false
export default function player(audioNode, sprite = NaN){
  audioNode.play()
  audioNode.loop = true


  //muet button
  buttonMute.addEventListener("click", function(event){
    event.preventDefault()
    if(mute)
    {
      audioNode.muted = false
      mute = false
    }else{
      audioNode.muted = true
      mute = true
    }
    console.log('mute: '+mute)
  })


  

//   //change sound button
//   buttonChange.addEventListener("click", function(event){
//     event.preventDefault()
//     console.log(sprite)
//     let audioNodeList = document.querySelector(`.${sprite}`)
//     console.log(audioNodeList);
//     audioNode.pause()
//     audioNode.loop = false
//     audioNode.setAttribute('id', 'audio')
//     audioNode = audioNodeList
//     audioNode.setAttribute('id', 'playing')

//     audioNode.play()
//     audioNode.loop = true

//   })

}






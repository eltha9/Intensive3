//This .js file contain all the function that interact with the localStorage data
let playerPoint
let bonusPosiX = new Array()
let bonusPosiY = new Array()

//extract data in the localStorage (int,float,array,string)
function recupLocal(localName){
  let localValue
  localValue= localStorage.getItem(localName)
  if(localValue)
  {
      localValue = JSON.parse(localValue)
  }else{
    return NaN
  }
  return localValue
}

//save any tyoe of data in the localStorage (int,float,array,string)
function inLocal(name,value){

  if(Array.isArray(value))
  {
      value = JSON.stringify(value)
      localStorage.setItem('name', value)
  }else {
    localStorage.setItem('name', value)
  }
}

/* main js who work the game*/
playerPoint = recupLocal('playerPoint') // search data in localStorage

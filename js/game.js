//varriable
let playerPoint
let bonusPosiX = new Array()
let bonusPosiY = new Array()

/* function de base*/
//récupère n'importe quel type de valeur du localStorage (int,float,array,string)
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

//sauvegarde dans le localstorage n'importe quelle type de varriable (int,float,array,string)
function inLocal(name,value){

  if(Array.isArray(value))
  {
      value = JSON.stringify(value)
      localStorage.setItem('name', value)
  }else {
    localStorage.setItem('name', value)
  }
}



/* main js qui fait tourner le jeu */
playerPoint = recupLocal('playerPoint') // recherche de donnée dans le storage

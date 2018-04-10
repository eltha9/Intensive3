//varriable
let playerPoint

/* function de base*/
//récupération des points dans le localStorage
function recuLocal(localName){
  let localValuePoint
  localValuePoint= localStorage.getItem(localName)
  if(!localValues)
  {
      return 0
  }

  return localValuePoint
}
//sauvegarde dans le localstorage
function inLocal(name,value){

  if(Array.isArray(value))
  {
      value = JSON.stringify(value)
      localStorage.setItem('name', value)
  }else {
    ocalStorage.setItem('name', value)
  }
}
//création aléatoire des bonus
function createBonus(){

}

/* main js qui fait tourner le jeu */
playerPoint = recuLocal()

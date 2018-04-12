//This .js script contain the character selection function

//fonction de choix du personnage, avec gestion des différent css pour connaitre le personnage sélectionner
function doClick(name, tab) {
  let perso = document.querySelector(`.${name}`)
  let child
  perso.addEventListener('click', function(event) {
    event.preventDefault()
    let currentNode = document.querySelector('.select')

    if (currentNode) {
      currentNode.classList.remove('select')
    }
    
    child = perso.firstChild
    child.classList.add('select')
    console.log(name)
    return name
  })
}
let persoChoice // variable de récupération
let tabPerso = ['goku', 'surfer', 'rayquaza', 'nyanCat', 'bowser'] //personnage disponible
for (let i = 0; i < tabPerso.length; i++) {// boucle pour gérer tous les personnages disponibles
  persoChoice = doClick(tabPerso[i])
}

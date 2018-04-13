//This .js script contain the character selection function

//selection character function
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
let persoChoice
let tabPerso = ['goku', 'surfer', 'rayquaza', 'nyanCat', 'bowser'] //character available
for (let i = 0; i < tabPerso.length; i++) {// apply the doClick function for all of the characters <a> link
  persoChoice = doClick(tabPerso[i])
}

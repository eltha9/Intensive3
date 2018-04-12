//characterName
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
    return name
  })
}

let tabPerso = ['goku', 'surfer', 'rayquaza', 'nyanCat', 'bowser']
for (let i = 0; i < tabPerso.length; i++) {
  persoChoice = doClick(tabPerso[i])
}

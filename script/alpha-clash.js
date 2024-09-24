function play (){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
function continueGame(){
    const alphabet = getARandomAlphabet() 
    // console.log(alphabet)
    const currentElement = getElementTextById('current-alphabet')
    // console.log(currentElement)
    currentElement.innerText = alphabet
    setBackgroundColorById(alphabet)
}

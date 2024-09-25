function play (){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
function continueGame(){
    const alphabet = getARandomAlphabet() 
    const currentAlphabet = getElementTextById('current-alphabet')
    currentAlphabet.innerText = alphabet
    addBackgroundColorById(alphabet)
}
document.addEventListener('keyup',handleKeyboardButtonPress)
function handleKeyboardButtonPress(event){
    const playPressed = event.key
    // console.log(playPressed)
    const currentAlphabet = getElementTextById('current-alphabet')
    const alphabet = currentAlphabet.innerText.toLowerCase()
    if(playPressed === alphabet){
        const currentScroe = getElementTextValueById('current-score')
        const updatedScore = currentScroe + 1
        setElementTextById('current-score',updatedScore)
        console.log('heda')
        removeBackgroundColorById(alphabet)
        continueGame()
    }
    else{
        
    }


}
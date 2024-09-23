function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
function continueGame() {
    const alphabet = getARandomAlphabet()
    const currentAlphabetElement = document.getElementById("current-alphabet")
    currentAlphabetElement.innerText = alphabet
    setBackgroundColorById(alphabet)
}

document.addEventListener('keyup', handelKeyboardButtonPress);

function handelKeyboardButtonPress(event) {
    const playerPress = event.key
    const currentAlphabetElement = document.getElementById("current-alphabet")
    const currentAlphabet = currentAlphabetElement.innerText
    const alphabet = currentAlphabet.toLowerCase()
    if (playerPress === alphabet) {
        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1
        setTextElementValueById('current-score', updateScore)


        removeBackgroundColorById(playerPress)
        continueGame()
    }
    else {
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1
        setTextElementValueById('current-life', updateLife)
    }

}
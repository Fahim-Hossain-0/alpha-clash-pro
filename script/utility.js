function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    const randomNumber = Math.random() * 25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    return element;
}
function setElementTextById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
function getElementTextValueById(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const value = parseInt(elementText)
    return value
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
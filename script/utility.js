function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    console.log(index ,alphabet)
    return alphabet
}
function getElementTextById(elementId){
    const element= document.getElementById(elementId)
    return element;
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
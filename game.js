// == GAME VARIABLES == //
// Alien Position //
let alienX = 80
let alienY = 20

// Player Position //
let guessX = 0
let guessY = 0

// Game State //
const shotsRemaining = 10
let shotsMade = 0
let gameState = ''
let gameWon = false

// Game Objects//
const cannon = document.getElementById('cannon')
const alien = document.getElementById('alien')
const missile = document.getElementById('missile')

// Controls //
const output = document.getElementById('output')
const inputY = document.getElementById('inputY')
const inputX = document.getElementById('inputX')

const button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click', clickHandler, false)

function clickHandler() {
  validateInput()
}

function validateInput() {
  guessX = parseInt(inputX.value)
  guessY = parseInt(inputY.value)

  if (isNaN(guessX) || isNaN(guessY)) {
    output.innerHTML = 'Please enter a number!'
  } else {
    playGame()
  }
}

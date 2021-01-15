// == GAME VARIABLES == //
// == Stage Dimensions Variables == //
const stageY = 300

// Alien Position //
let alienX = 80
let alienY = 20

// Player Position //
let guessX = 0
let guessY = 0

// Game State //
let shotsRemaining = 10
let shotsMade = 0
let gameState = ''
let gameWon = false

// Game Objects//
const cannon = document.getElementById('cannon')
const alien = document.getElementById('alien')
const missile = document.getElementById('missile')
const explosion = document.getElementById('explosion')
const gameover = document.getElementById('gameover')

// Controls //
const output = document.getElementById('output')
const inputY = document.getElementById('inputY')
const inputX = document.getElementById('inputX')

const button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click', clickHandler, false)

// == Functions == //

// Click Handler
function clickHandler () {
  validateInput()
}

// Input Validation
function validateInput () {
  guessX = parseInt(inputX.value)
  guessY = parseInt(inputY.value)

  if (isNaN(guessX) || isNaN(guessY)) {
    output.innerHTML = 'Please enter a number!'
  } else if (guessX > 300 || guessY > 300) {
    output.innerHTML = 'Please enter a number less than 300'
  } else {
    playGame()
  }
}

// Play Game Function
function playGame () {
  shotsRemaining = shotsRemaining - 1
  shotsMade = shotsMade + 1
  gameState = 'Shots: ' + shotsMade + ', Remaining: ' + shotsRemaining
  const endPosition = stageY - 80

  if (guessX >= alienX && guessX <= alienX + 20) {
    if (guessY >= alienY && guessY <= alienY + 20) {
      gameWon = true
      endGame()
    }
  } else {
    output.innerHTML = 'Miss!' + gameState
    if (shotsRemaining < 1 || alienY >= endPosition) {
      endGame()
    }
  } if (!gameWon) {
    alienX = Math.floor(Math.random() * 281)
    alienY += 30
  }
  render()
  console.log('X: ' + alienX)
  console.log('Y: ' + alienY)
}
function render () {
  alien.style.left = alienX + 'px'
  alien.style.top = alienY + 'px'

  cannon.style.left = guessX + 'px'

  missile.style.left = guessX + 'px'
  missile.style.top = guessY + 'px'

  // Explosion

  if (gameWon) {
    explosion.style.display = 'block'
    explosion.style.left = alienX + 'px'
    explosion.style.top = alienY + 'px'

    alien.style.display = 'none'
    missile.style.display = 'none'
  }
}

// End Game Function
function endGame () {
  if (gameWon) {
    output.innerHTML = 'Hit! You saved the Earth!' + '<br>' +
      'It took you ' + shotsMade + ' shots.'
  } else {
    output.innerHTML = 'You Lost!'
    gameover.style.display = 'block'
  }
}

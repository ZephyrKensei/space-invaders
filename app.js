const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
const width = 15
const aliensRemoved = []
let shooterIndex = 202

// Create squares on board
for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

// Adding Invaders
const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}
draw()

// Adding Shooter and Movement
squares[shooterIndex].classList.add('shooter')

function moveShooter(e) {
  squares[shooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if (shooterIndex % width !==0) shooterIndex -=1
      break
  }
  squares[shooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)
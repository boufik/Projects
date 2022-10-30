// Global variables
// Door <img> elements and their changed paths
let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let doorImage2 = document.getElementById('door2');
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let doorImage3 = document.getElementById('door3');
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
// Create global variables for having randomness in robot hiding
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
// Start Button
let startButton = document.getElementById('start');
// currentlyPlaying
let currentlyPlaying = true;


// Functions
// isBot()
function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

// isClicked()
function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}

// playdoor()
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door) === true){
    gameOver();
  }
}

// randomChoreDoorGenerator()
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}



// onclick functions
doorImage1.onclick = () => {
  if(isClicked(doorImage1) === false && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(isClicked(doorImage2) === false && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(isClicked(doorImage3) === false && currentlyPlaying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if(currentlyPlaying === false){
    startRound();
  }
}

// startRound()
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

// gameOver()
function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();
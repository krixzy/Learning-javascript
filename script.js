let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//this is the target number
function generateTarget() {
    let target = Math.random() * 10
    return Math.floor(target)
}
//this is the function the caculate who won
function compareGuesses(human, computer, secret) {
  let diffHuman = Math.abs(human - secret)
  let diffComputer = Math.abs(computer - secret)
  if(diffHuman === diffComputer){
    return true
  }else if (diffHuman > diffComputer) {
    return false

  }else{
    return true
  }
  //this function give a point to who ever won
}
function updateScore(scoreupdate){
  if(scoreupdate === 'human'){
    humanScore ++
  }else{
    computerScore ++
  }
  // this update the numbers of rounds
}
function advanceRound(){
  currentRoundNumber ++
}

/**
 * Instructions
Begin the process of coding out the rock-paper-scissors game.
As a user:

I want to play Rock, Paper, Scissors against an automated opponent.
I can enter R, P, or S to signify my choice of rock, paper, or scissors.
I expect the computer to choose R, P, or S in return.
I want the option to play again whether I win or lose.
I want to see my total wins, ties, and losses after 10 rounds.

The computer's selection must be random to ensure a fair game.

Follow your pseudocode as much as you can, and if you get stuck don't worry, this is a challenging assignment.
 * 
 * 
 */

const RESULT = {
  WIN: "win",
  TIE: "tie",
  LOSS: "loss"
};

const CHOICE = {
  ROCK: "r",
  PAPER: "p",
  SCISSORS: "s"
};

function startTheGame() {
  let resultCount = {
    win: 0,
    tie: 0,
    loss: 0
  };

  let numOfPlays = 0;
  let continueToPlay = true;

  while (continueToPlay) {
    // get my choice
    const myChoice = getMyChoice();
    console.log(`myChoice: `, myChoice);
    // get computer choice
    const computerChoice = getComputerChoice();
    console.log("computerChoice: ", computerChoice);
    // find out if we win, tie or lose
    const result = doIWin(myChoice, computerChoice);
    console.log(`result: ${result}`);
    // store and accumulate the result
    resultCount[result] = resultCount[result] + 1;
    console.log("resultCount: ", resultCount);
    // increment the number of plays by 1
    numOfPlays += 1;
    console.log("numOfPlays: ", numOfPlays);
  }
}

function doIWin(myChoice, computerChoice) {
  let result = null;

  myChoice = myChoice.toLocaleLowerCase();
  computerChoice = computerChoice.toLocaleLowerCase();

  if (myChoice === computerChoice) {
    result = RESULT.TIE;
  } else {
    if (
      (myChoice === CHOICE.PAPER && computerChoice === CHOICE.ROCK) ||
      (myChoice === CHOICE.ROCK && computerChoice === CHOICE.SCISSORS) ||
      (myChoice === CHOICE.SCISSORS && computerChoice === CHOICE.PAPER)
    ) {
      result = RESULT.WIN;
    } else {
      result = RESULT.LOSS;
    }
  }

  return result;
}

function getComputerChoice() {
  // computer can only choose one of the item in the choices array
  const choicesArr = ["R", "P", "S"];
  // get random number from 0 - 2
  const randomNum = Math.floor(Math.random() * choicesArr.length);
  // get computer choice
  const computerChoice = choicesArr[randomNum];

  return computerChoice;
}

function getMyChoice() {
  const myChoice = prompt(`
  Enter either R(Rock), P(paper) or S(scissors) as my choice.
  `);
  return myChoice;
}

startTheGame();

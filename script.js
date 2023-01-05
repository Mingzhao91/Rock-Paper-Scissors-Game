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
  WIN: 1,
  TIE: 0,
  LOSS: -1
};

const CHOICE = {
  ROCK: "R",
  PAPER: "P",
  SCISSORS: "S"
};

function startTheGame() {
  // get my choice
  const myChoice = getMyChoice();
  console.log(`myChoice: `, myChoice);
  // get computer choice
  const computerChoice = getComputerChoice();
  console.log("computerChoice: ", computerChoice);
}

function doIWin(myChoice, computerChoice) {
  let result = null;

  myChoice = myChoice.toLowercase();
  computerChoice = computerChoice.toLowercase();

  if (myChoice === computerChoice) {
    result = RESULT.TIE;
  } else {
    if (myChoice === CHOICE.PAPER && computerChoice === CHOICE.ROCK) {
      result = RESULT.WIN;
    } else {
      result = RESULT.LOSS;
    }

    if (myChoice === CHOICE.PAPER && computerChoice === CHOICE.SCISSORS) {
      result = RESULT.LOSS;
    } else {
      result = RESULT.WIN;
    }

    if (myChoice === CHOICE.ROCK && computerChoice === CHOICE.PAPER) {
      result = RESULT.LOSS;
    } else {
      result = RESULT.WIN;
    }

    if (myChoice === CHOICE.ROCK && computerChoice === CHOICE.SCISSORS) {
      result = RESULT.WIN;
    } else {
      result = RESULT.LOSS;
    }

    if (myChoice === CHOICE.SCISSORS && computerChoice === CHOICE.ROCK) {
      result = RESULT.LOSS;
    } else {
      result = RESULT.WIN;
    }

    if (myChoice === CHOICE.SCISSORS && computerChoice === CHOICE.PAPER) {
      result = RESULT.WIN;
    } else {
      result = RESULT.LOSS;
    }
  }
}

function getComputerChoice() {
  // computer can only choose one of the item in the choices array
  const choicesArr = ["R", "P", "S"];
  // get random number from 0 - 2
  const randomNum = parseInt(Math.random() * 3);
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

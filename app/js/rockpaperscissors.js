////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move;
    if (move==null){
        move=getInput();
    } 
        return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move;
  /*  if (move==null){
        randomPlay();
    } this may be rendundant based on 'else' below */
    if (move!=null){
        return move;
    }   else {
        move=randomPlay();
    }

    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    //want to use switch/case but not sure if it would work with 2 variables to compare
    if (playerMove==computerMove){
        winner='tie';
        console.log(winner);
    }   else if ( ((playerMove=='rock')&&(computerMove=='scissors'))||((playerMove=='scissors')&&(computerMove=='paper'))||((playerMove=='paper')&&(computerMove=='rock')) ){
        winner='player';
        console.log(winner);
    } else {
        winner='computer';
        console.log(winner);
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var ties = 0; 
    while((playerWins<5)&&(computerWins<5)){
        var winner = getWinner(getPlayerMove(),getComputerMove());
        if (winner=='player'){
            playerWins++;
            //console.log(playerWins); shows current _Wins value for testing
        } else if(winner=='computer'){
            computerWins++;
            //console.log(computerWins); shows current _Wins value for testing
        } else{
            ties++;
            //console.log(ties); shows current ties value for testing
        }
    }
    
    console.log("The player has won " + playerWins + " times, the computer has won " + computerWins + " times, and there have been " + ties + " ties.")
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won x times.
    /* YOUR CODE HERE */
    var ties = 0; 
    while((playerWins<x)&&(computerWins<x)){
        var winner = getWinner(getPlayerMove(),getComputerMove());
        if (winner=='player'){
            playerWins++;
            //console.log(playerWins); shows current _Wins value for testing
        } else if(winner=='computer'){
            computerWins++;
            //console.log(computerWins); shows current _Wins value for testing
        } else{
            ties++;
            //console.log(ties); shows current ties value for testing
        }
    }
    
    console.log("The player has won " + playerWins + " times, the computer has won " + computerWins + " times, and there have been " + ties + " ties.")
    return [playerWins, computerWins];
}
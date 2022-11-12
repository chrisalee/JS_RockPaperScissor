let playGame = confirm("Do you want to play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("choose rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";
      
      let result =
        playerOne === computer
          ? `playerOne chooses ${playerOne}\n Computer chooses ${computer}\n Tie game`
          : playerOne === "rock" && computer === "paper"
          ? `playerOne chooses ${playerOne}\n Computer chooses ${computer}\n Computer wins.  paper covers rock`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne chooses ${playerOne}\n Computer chooses ${computer}\n Computer wins.  scissors cut paper`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne chooses ${playerOne}\n Computer chooses ${computer}\n Computer wins.  rock smashes scissors`
          : `playerOne chooses ${playerOne}\n Computer chooses ${computer}\n playerOne wins.`

      alert(result);

      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert('thanks for playing')
    } else {
      alert("you can only enter rock, paper, or scissors");
    }
  } else {
    alert("you didnt make a choise");
  }
} else {
  alert("ok, maybe another time");
}

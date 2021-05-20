computerPlay = () => ['Rock', 'Paper', 'Scissors'][parseInt(Math.random() * 3)]


playRound = (playerSelection, computerSelection) => {
    const playerSelectionCheck = playerSelection.toLowerCase()
    const computerSelectionCheck = computerSelection.toLowerCase()
	if (playerSelectionCheck === computerSelectionCheck) {
        return "The result is a tie!"
    }
    else if (playerSelectionCheck === "rock") {
        if (computerSelectionCheck === "scissors") {
            return resultMessage(playerSelection, computerSelection, true);
        } else {
            return resultMessage(playerSelection, computerSelection, false);
        }
    }
    else if (playerSelectionCheck === "paper") {
        if (computerSelectionCheck === "rock") {
            return resultMessage(playerSelection, computerSelection, true);
        } else {
            return resultMessage(playerSelection, computerSelection, false);
        }
    }
    else if(playerSelectionCheck === "scissors") {
        if(computerSelectionCheck === "rock") {
            return resultMessage(playerSelection, computerSelection, false);
        } else {
            return resultMessage(playerSelection, computerSelection, true);
        }
    }
}

resultMessage = (playerSelection, computerSelection, isWin) => {
    return isWin ? 
        `You Win! ${playerSelection} beats ${computerSelection}` : 
        `You Lose! ${computerSelection} beats ${playerSelection}`
}

game = () => {
    for (let i = 0; i < 5; i++ ) {
        const playerSelection = window.prompt(`Round ${i + 1}: Please enter your choice`)
        const computerSelection = computerPlay()
        alert(`Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`)
    }
}

game();
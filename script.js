function playGame() {
    var choices = ["rock", "paper", "scissors"];
  
    // Get user input
    var userChoice = document.getElementById("formUser").value.toLowerCase();
  
    // Validate input
    if (!choices.includes(userChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }
  
    // Computer's random choice
    var randomIndex = Math.floor(Math.random() * 3);
    var computerChoice = choices[randomIndex];
    
    alert(`Computer chose: ${computerChoice}`);
  
    // Determine winner
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
    } else {
        alert("You lose!");
    }
}
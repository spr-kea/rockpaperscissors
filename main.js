const game = () => {


    const playMatch = () => {
        const options = document.querySelectorAll("#options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hand img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
        
            });

        });
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(options => {
            options.addEventListener('click', function () {
                //computer choice         
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]
                

                //compare hands
             setTimeout(()=> {
                compareHands(this.textContent, computerChoice);
                //player options
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                
             }, 2000)
                //animated
                playerHand.style.animation = "shakeComputer 2s ease";
                computerHand.style.animation = "shakePlayer 2s ease"

            });
        })
    };
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = 'draw';
            return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";


                return;
            } else {
                winner.textContent = "Computer Wins";


            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";


                return;
            } else {
                winner.textContent = "Player Wins";


                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";


                return;
            } else {
                winner.textContent = "Player Wins";

                return;
            }
        }

    }
    playMatch();
}
game();
















// function computerChoice(){
// let computerChoice;






// computerChoice = Math.floor(Math.random() * (3) + 1)
// console.log(computerChoice)
// }
// computerChoice();

// function playerChoice(){

// }
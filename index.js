var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){

	const choices = ['r', 'p', 's '];
	const RandomNumber = Math.floor(Math.random()*3);
	return choices[RandomNumber];
}

function win()

{
	userScore++;
	userScore_span.textContent = userScore;
}
function lose()

{
	compScore++;
	compScore_span.textContent = compScore;
}

function convertToWord(letter)
{
	if(letter === 'r')
		return "Rock";	
	if(letter === 'p')
		return "Paper";
	else
		return "Scissors";
}
function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
      case 'rs':

      case 'sp':

      case 'pr':
        
        win();
        result_div.textContent = convertToWord(userChoice) +  " beats " + convertToWord(computerChoice) + " . You Win.";
        console.log(userChoice, computerChoice);
        break;

      case 'rp':

      case 'ps':

      case 'sr':
                lose();
                result_div.textContent = convertToWord(computerChoice) +  " beats " + convertToWord(userChoice) + " . You lose.";
        console.log(userChoice, computerChoice);
        break;

      default:
        result_div.textContent = "Sorry the match is draww";
                console.log(userChoice, computerChoice);
    }
}


function main()

{

	rock_div.addEventListener("click", function(){
		game("r");
	});

	paper_div.addEventListener("click", function(){
		game("p");
	});

	scissor_div.addEventListener("click", function(){
	game("s");
	});

}

main();
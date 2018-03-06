var alive = true;
var colors = ["green", "red", "yellow", "blue", "purple", "orange"];
var squares = $(".square");
var difficulty = 4
var answer = []
var userInput = []
var doneButton = document.querySelector("#done");//$(".done");
var correct;

init();

doneButton.addEventListener("click", compareArray);


function init(){
	squares.each(function(i){
		$(this).css("background-color", colors[i]);
	})
	$(squares[4]).hide();
	$(squares[5]).hide();
	addToAnswer();
}

for (var i = 0; i < squares.length; i++){
		// add click listeners to squares
	squares[i].addEventListener("click", function(){
			userInput.push(this.style.backgroundColor);
		})
};

function addToAnswer() {
	// Generate rand number to choose color, push to answer array
	answer.push(colors[Math.floor(Math.random() * (difficulty))]);
	// log for debugging
	console.log(answer);
	flashSquares();
}

function compareArray(){
	// stupid tracking, prob can do another way
	var soFar = true;
	// check if inputs are arrays
	if (!Array.isArray(answer) || !Array.isArray(userInput)) {
		console.log("Error: Input variables are not both arrays.");
		alive, soFar = false;
		// soFar = false;
		//break;
	}
	// check length of two arrays, return false if they don't match
	if (answer.length !== userInput.length) {
		console.log("Wrong, your answer is incorrect.");
		correct = false;
		alive, soFar = false;
		//break;
	}
	// loop through array elements and compare them, return false if 
	//they don't match
	for (var i = 0; i < answer.length; i++){
		if (answer[i] !== userInput[i]) {
			console.log("Wrong, your answer is incorrect.");
			correct = false;
			alive, soFar = false;
			//break;
		}
	}
	// if all above pass, set correct to true
	if (soFar) {
		correct = true;
	}
	checkAnswer();
}

function checkAnswer(){
	// null exception + beginning of game
	if (correct == null) {
		// do nothing
		console.log("waiting for input");
	} 
	// if answer was correct from compareArray, log keep going and call
	// addToAnswer again, to continue game. also reset userInput to
	// require user to enter entire pattern again
	else if (correct === true) {
		console.log("Keep going!")
		addToAnswer();
		userInput = [];
	}
	// if compareArray returns false, end game 
	else {
		console.log("You lose!");
		alive = false;
	}
}
var i = 0;
function flashSquares(){
	for (i = 0; i <= answer.length; i++){
		// compary current element of answer array, flash color
		switch (answer[i]) {
			case "green":
				flash("green");
				break;
			case "red":
				flash("red");
				break;
			case "yellow":
				flash("yellow");
				break;
			case "blue":
				flash("blue");
				break;
			case "purple":
				flash("purple");
				break;
			case "orange":
				flash("orange");
				break;
		}
	}
}

var del;
function flash(col) {
	if (i < 1) {
		del = ++i;
	} else {
		del = i;
	}
	console.log(del);
    $(`#${col}`).delay(del*1000).fadeOut( 800 ).delay(100).fadeIn( 800 );
}
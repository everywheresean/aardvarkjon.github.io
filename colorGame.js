var numSquares = 9;
var colors= [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode Button Event Listeners
setupModeButtons();
setupSquares();
reset();


}

function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
	if(this.textContent === "Easy"){
		numSquares = 3;
	} else if(this.textContent === "Hard"){
		numSquares = 6;
	} else if(this.textContent === "Developer"){
		numSquares = 9;
	}
	reset();
	
	});
}
}

function setupSquares(){
	for(var i = 0; i <squares.length; i++){
	//add initial colors to squares
squares[i].style.backgroundColor = colors[i];

//add click listeners
squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare to picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "CORRECT!"
		changeColors(clickedColor);
		h1.style.backgroundColor = pickedColor;
		resetButton.textContent = "play again?";
	} else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "TRY AGAIN"
	}
});

}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change ccolor display to match picked color

	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS";

	//change the colors of the squares of the array
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	} else{
		squares[i].style.display = "none";
	}
	}

	h1.style.backgroundColor = "steelblue";

}


resetButton.addEventListener("click", function(){
reset();
})



colorDisplay.textContent = pickedColor;



//function to change all of the colors to the winning color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}
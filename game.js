var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var stripe = document.querySelector("#stripe");


easyBtn.addEventListener("click", function(){
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "#ffbd54";
    stripe.style.background = "#ffbd54";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#ffbd54";
    stripe.style.background = "#ffbd54";
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})
reset.addEventListener("click", function(){
    colors = generateRandomColors(numSquares); // generate new random colors and form an array
    for(var i=0; i<squares.length; i++){ // update the colors of the divs
        squares[i].style.backgroundColor = colors[i];
    }// change colors of the divs
    pickedColor = pickColor(); // pick a color from the color array
    colorDisplay.textContent = pickedColor; // change the text 
    h1.style.backgroundColor = "#ffbd54";
    messageDisplay.textContent = "";
    reset.textContent = "New Colors!"
    stripe.style.background = "#ffbd54";

})

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
    //adding initial colors
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        // add color of clicked square
        var clickedColor = this.style.background;
        //compare color to ppicked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct :D";
            changeColors(clickedColor);
            h1.style.background = pickedColor;
            stripe.style.background = pickedColor;
            reset.textContent = "Play Again?";
            this.classList.remove(".square-hover");
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again :("
            this.classList.remove(".square-hover")
            this.style.border = "None"
            setTimeout(function(){
                messageDisplay.textContent = "";
            }, 3000);
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
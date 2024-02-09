var randomNumber1 = Math.floor(Math.random() * 6)+ 1;   //1-6


//Dice Left
var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var randomImageSrc = "images/" + randomDiceImage ; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSrc);



//Dice Right
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

//var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSrc1 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSrc1);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Won!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Won!"; 
}else{
    document.querySelector("h1").innerHTML = "Match Draw!!";
}

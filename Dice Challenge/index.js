var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var image1Name = "images\\dice" + randomNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", image1Name);

var randomNumber2;
randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var image2Name = "images\\dice" + randomNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", image2Name);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins &#x1F6A9;";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "&#x1F6A9; Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

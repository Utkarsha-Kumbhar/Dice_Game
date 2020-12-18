
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var path1="images/dice"+randomNumber1+".png";
document.querySelector(".img1");
var image1=document.querySelector(".img1");
image1.setAttribute("src",path1);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var path2="images/dice"+randomNumber2+".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src",path2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}

else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

 else{
    document.querySelector("h1").innerHTML="Draw!";
}
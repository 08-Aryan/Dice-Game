var randomvariable1=Math.floor(Math.random()*6)+1;
var randomvariable2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomvariable1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomvariable2+".png");
if (randomvariable1>randomvariable2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}   
else if (randomvariable1<randomvariable2){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
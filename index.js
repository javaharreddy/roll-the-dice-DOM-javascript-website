var player1 = prompt('enter player1 name: ').toString();
var player2 = prompt('enter player2 name: ').toString();
document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;
function roll(){
var left = Math.floor(Math.random()*6 + 1);
var right = Math.floor(Math.random()*6 + 1);
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+left.toString()+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+right.toString()+".png");
document.querySelector("button").setAttribute("href","google.com");
if (left==right){
    document.querySelector("h1").innerHTML= "DRAW";
}
else if (left>right){
    document.querySelector("h1").innerHTML = player1+" wins";
}
else{
    document.querySelector("h1").innerHTML=player2+" wins";
}
}
var path='C:\My files\\Projects\\Web Projects\\Dice Game\\images\\';
var arr=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

let a=Math.floor(Math.random()*5);
let b=Math.floor(Math.random()*5);

var p1=path+arr[a];
var p2=path+arr[b];

const d1=document.querySelector(".img1");
const d2=document.querySelector(".img2");

d1.setAttribute("src",p1);
d2.setAttribute("src",p2);


const result=document.querySelector(".heading");
result.innerHTML="Refresh";
if(p1>p2){
    result.textContent='Player 1 Win';
}else if(p1<p2){
    result.textContent='Player 2 Win';
}else{
    result.textContent='Draw';
}

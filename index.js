//to get the elements i want to maipualate
let homeScore =document.getElementById('home-score')
let guestScore =document.getElementById('guest-score')
let currentScoreH=0
let currentScoreG=0
//home score buttons functionality
function Home1(){
    currentScoreH=currentScoreH+1
    homeScore.innerText=currentScoreH
}
function Home2(){
    currentScoreH=currentScoreH+2
    homeScore.innerText=currentScoreH
}
function Home3(){
    currentScoreH=currentScoreH+3
    homeScore.innerText=currentScoreH
}
//guest score buttons functionalaty
function Guest1(){
    currentScoreG=currentScoreG+1
    guestScore.innerText=currentScoreG
}function Guest2(){
    currentScoreG=currentScoreG+2
    guestScore.innerText=currentScoreG
}function Guest3(){
    currentScoreG=currentScoreG+3
    guestScore.innerText=currentScoreG
}
//reset game 
function newGame(){
    //reset guest score to 0
   currentScoreG=currentScoreG-currentScoreG
   guestScore.innerText=currentScoreG
   //reset home score to zero
   currentScoreH=currentScoreH-currentScoreH
   homeScore.innerText=currentScoreH
    
}
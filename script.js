"use scrict";

var buttonClick=document.getElementById("startGame");
var firstDiv=document.querySelector(".first-Image");
var SecondDiv=document.querySelector(".second-image");
var gameStart=document.querySelector(".Startgame");

// Image1= Scissor
// Image2=Rock
// Image3=Paper


function displayDivs()
{
    firstDiv.classList.remove('hidden');
    SecondDiv.classList.remove('hidden');
    gameStart.classList.remove('hidden');

    var value1=Math.trunc(Math.random()*3)+1;
    var value2=Math.trunc(Math.random()*3)+1;

    console.log(value1,value2)

    firstDiv.style.backgroundImage = `url(image${value1}.png)`;
    SecondDiv.style.backgroundImage = `url(image${value2}.png)`;
    if(value1==value2)
    {
        gameStart.innerHTML="Game drawn - Try Again";
    }
    else if(value1==1)
    {
        value2==2?gameStart.innerHTML="Player 2 Wins":gameStart.innerHTML="Player 1 Wins";
        
    }
    else if(value1==2)
    {
        value2==1?gameStart.innerHTML="Player 1 Wins":gameStart.innerHTML="Player 2 Wins";
    }
    else
    {
        value2==1?gameStart.innerHTML="Player 2 Wins":gameStart.innerHTML="Player 1 Wins";
    }

}
buttonClick.addEventListener("click",displayDivs);



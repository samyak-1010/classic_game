import { updateSnake as update,drawSnake as draw ,snakespeed,segment,snake,checkGameout, updateLevel,upMovement,downMovement,leftMovement,rightMovement} from "./snake.js";
import { foodPositon,generateFood,checkoverlapps,generateRandomFood} from "./food.js";
var yourscore=document.querySelector(".yourscore");
var highScore=document.querySelector(".highScore");
var gameBoard=document.querySelector(".wrapper");
var buttons=document.querySelector("#buttons");
var dizz1=document.querySelector(".dizz");
var dizz=dizz1.cloneNode(true);
const up=document.querySelector("#up");
const left=document.querySelector("#left");
const down=document.querySelector("#down");
const right=document.querySelector("#right");
up.addEventListener("click",upMovement);
left.addEventListener("click",leftMovement);
down.addEventListener("click",downMovement);
right.addEventListener("click",rightMovement);
var playFlag=true;
var score=0;
var gamePlay=document.getElementById("playAudio");
var gameOverAudio=document.getElementById("gameOverAudio");
var levelUpAudio=document.getElementById("levelUpAudio");
// ----
if(!localStorage.getItem("highScore")){
    highScore.innerText="0";
}
else{
    highScore.innerText=`${localStorage.getItem("highScore")}`;
}
buttons.addEventListener("click",()=>{
    if(playFlag){
        window.requestAnimationFrame(main);
        buttons.innerText="Restart";
        playFlag=false;
        gamePlay.play();
    }
    else{
        location.reload();
    }
})
let lastTime=0;
var flag=true;
function main(currentTime){
    if(flag){
        window.requestAnimationFrame(main);
    }
    var delay=(currentTime-lastTime)/1000;
    if(delay< 1/snakespeed)
    return;
    console.log(delay);
    lastTime=currentTime; 
    updateit(gameBoard);
    drawit(gameBoard);
    if(checkGameout(snake[0])){
        dizz.style.display="block";
        dizz.style.gridRowStart=snake[0].x;
        dizz.style.gridColumnStart=snake[0].y;
        gameBoard.appendChild(dizz);
        gamePlay.pause();
        gameOverAudio.play();
        setTimeout(()=>{
            gameOverAudio.pause();
        },1000);
        flag=false;
    }
    if(checkoverlapps(snake,foodPositon,gameBoard)){
        levelUpAudio.play();
        generateRandomFood(gameBoard);
        score +=1;
        if(localStorage.getItem("highScore")<score){
            updateHighScore();
        }
        yourscore.innerText=score;
// ---- 
       if(score!=0&&score%5==0){
            updateLevel(score/5);
       }
        for(let i=0;i<segment;i++){
        snake.push({...snake[snake.length-1]});
        }
    }
    else{
        generateFood(gameBoard);
    }
}
function updateit(gameBoard){
    update(gameBoard);
}
function drawit(gameBoard){
    draw(gameBoard);
}
function updateHighScore(){
localStorage.setItem("highScore",Math.max(localStorage.getItem("highScore"),score));
}

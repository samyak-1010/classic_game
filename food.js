import { checkGameout } from "./snake.js";
export var foodPositon={x:11,y:18};
export function generateRandomFood(gameBoard){
    do{var X=Math.floor(Math.random()*(22-1)+1);
    var Y=Math.floor(Math.random()*(22-1)+1);
    foodPositon.x=X;
    foodPositon.y=Y;
    }while(checkGameout(foodPositon));
    generateFood(gameBoard);
}
export function generateFood(gameBoard){
    var food=document.createElement("div");
    food.classList.add("fActive");
    food.style.gridRowStart=foodPositon.x;
    food.style.gridColumnStart=foodPositon.y;
    gameBoard.appendChild(food);
}
export function checkoverlapps(snake,foodPositon,gameBoard){
        if(snake[0].x==foodPositon.x&&snake[0].y==foodPositon.y){
        return true;
        }
        else
        return false;
} 
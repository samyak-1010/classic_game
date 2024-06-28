export var snakespeed=4;
export var segment=1;
export var snake=[{x:11,y:11}];
// ---
var position={x:-1,y:-1};
var previousPosition={x:0,y:1};
function doit(){
  if(!(position.x+previousPosition.x==0&&position.y+previousPosition.y==0)){
    previousPosition.x=position.x;
    previousPosition.y=position.y;
    }
}
window.addEventListener("keydown",(e)=>{
  console.log("keyPressed");
     switch(e.key){
      case 'ArrowUp':
          position.x=-1;
          position.y=0;
          console.log("ArrowUp");
          break;
      case 'ArrowDown':
          position.x=1;
          position.y=0;
          console.log("ArrowDown");
          break;
      case 'ArrowLeft':
          position.y=-1;
          position.x=0;
          console.log("ArrowLeft");
          break;
      case 'ArrowRight':
        position.y=1;
        position.x=0;
        console.log("ArrowRight");
        break;
     }
    //  console.log(position);
    //  console.log(previousPosition);
    doit();
//      console.log(previousPosition);
 });
// ---
var count;
export function updateSnake(gameBoard){
  var child=gameBoard.lastElementChild;
  while(child){
    gameBoard.removeChild(child);
    child=gameBoard.lastElementChild;
  }
  for(let i=snake.length-1;i>0;i--){
    snake[i]={...snake[i-1]};
  }
  snake[0].x +=previousPosition.x;
  snake[0].y +=previousPosition.y;
}
export function drawSnake(gameBoard){
  console.log("snakecreated");
  snake.forEach(element => {
        let part=document.createElement("div");
        part.classList.add("sActive");
        part.style.gridRowStart=element.x;
        part.style.gridColumnStart=element.y;
        gameBoard.appendChild(part);
   });
}
export function checkGameout(head){
       for(let i=1;i<snake.length;i++){
          if(snake[i].x==head.x&&snake[i].y==head.y){
            console.log("game ended");
            return true;
          }
      };
      if(head.x<=0||head.x>21||head.y<=0||head.y>21)
      return true;
      return false;
}
export function updateLevel(x){
  snakespeed +=x;
  segment +=2;
}
export function upMovement(){
  position.x=-1;
  position.y=0;
  doit();
}
export function leftMovement(){
  position.y=-1;
  position.x=0;
  doit();
}
export function downMovement(){
  position.x=1;
  position.y=0;
  doit();
}
export function rightMovement(){
  position.y=1;
  position.x=0;
  doit();
}



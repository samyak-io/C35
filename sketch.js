var canvas, backgroundImage, database;
var gameState = 0;
var playerCount;
var form, player,game;
function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
  
    // drawSprites();
  
}

// function writePosition(x,y){
//   database.ref('ball/position').set({
//     'x': position.x + x ,
//     'y': position.y + y
//   })
// }

// function readPosition(data){
//   position = data.val();
//   console.log(position.x);
//   hypnoticBall.x = position.x;
//   hypnoticBall.y = position.y;
// }

// function showError(){
//   console.log("Error in writing to the database");
// }

//Declares variables 
let rocks = []; // This is the rock array in which the rock objects are placed in
let player1;
let rocksNum = 3
let t = 0;
let deathMessage = "Game Over. "
let margin = 0;
let missed = 0;
  
function setup() {
  createCanvas(700, 700);
  
  // This for statement creates rocksNum amount of rocks and places them within the array
  for (let i = 0; i < rocksNum; i++ ){
    rocks[i] = new Rock (random(30, width - 30), random(0, 70))
  }

    player1 = new Player(); //This creates the player 
  }


function draw() {
  
  background(256);
  
  //This calls all the functions for the rocks, enabling their properties
  for (let i = 0; i < rocksNum; i++){
    rocks[i].body();
    rocks[i].move();
    rocks[i].checkCollision();
  }
  
  //This calls the player functions to allow it to be created, moved and kept in bounds
  player1.body();
  player1.move();
  player1.home();
  
  //This displays the score in the top left corner. 
  fill(0, 0, 0)
  textSize(20)
  text("Score: " + t, 10, 20)
  
  fill(0, 0, 0)
  textSize(20)
  text("Missed: " + missed, 10, 40)
  
}

  //This is the Player class 
class Player {
  constructor(){
    this.x = width/2;
    this.y = height - 100;
    this.w = 50;
    this.h = 20;
    this.c = color(255,0,0);
  }
  
  //This creates the shape of the player and colors it
  body(){
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
  
  //This function allows the player to move based oon the mouse coordinates
  move(){
    this.x = mouseX - player1.w/2}
  
  //This ensures the player stays within the confines of the canvas by resetting its position by   its width.
  home(){
    if (this.x < 0){
      this.x = 0}
    
    if (this.x > width)
      this.x = width - player1.w}
}

  //This creates the Rock class
  class Rock {
  
  constructor(x, y){  
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 16;
}
  
  //This creates the shape of the rock and colors it
  body(){
    textSize(50)
    text('💣', this.x, this.y)
  }
  
  //This moves the rock and increases its speed by basing it on a constantly increasing             frameCount
  move(){
    let fallRate = 0.0025;
    
    if (missed < 5) {
    this.y += (frameCount * fallRate)}
    
    else (this.y = -30);
    
  //This resets the rock back to the top of the canvas
    if (this.y > height){
      this.y = 0;
      this.x = random(width)
      missed ++
    }
  }
  
  //This checks for collsions by checking if the corners of the player are within the area of the rock.
  checkCollision(){
    if (player1.x + player1.w/2 > this.x  && player1.x - player1.w/2 < this.x + this.w &&             player1.y + player1.h/2 > this.y && player1.y < this.y + this.h){
      
      this.y = 0;
      this.x = random(width) 
      
      t++
    } 
  } 
}


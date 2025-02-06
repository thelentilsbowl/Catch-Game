//Declares variables 
let rocks = []; // This is the rock array in which the rock objects are placed in
let player1;
let rocksNum = 5 
let t = 0;
let deathMessage = "Game Over. "
let margin = 0;

//This creates 3 variables to be able to change the RGB value of the background 
let colr = 128;
let colg = 128;
let colb = 128;
  
function setup() {
  createCanvas(700, 700);
  
  // This for statement creates rocksNum amount of rocks and places them within the array 
  for (let i = 0; i < rocksNum; i++){
   rocks[i] = new Rock (random(0, width), random(0, 100), color(random(255)))
    
}
  
  player1 = new Player(); //This creates the player 
}

function draw() {

  background(colr, colg, colb);
  
  //This is the clock which counts up every second, allowing for a score of how long you have survived
   if (frameCount % 60 ==0) {
    t++}
  
  //This creates a flashing background and changes the death message once over a score of 100
  if (t > 100) {
    colr = random(0, 255)
    colg = random(0, 255)
    colb = random(0, 255)
    deathMessage = "Did your eyes hurt? "
    margin = 50;
  }
  
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
  
}

  //This is the Player class 
class Player {
  constructor(){
    this.x = width/2;
    this.y = height - 50;
    this.w = 30;
    this.h = 30;
    this.c = color(255,0,0);
  }
  
  //This creates the shape of the player and colors it
  body(){
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
  
  //This function allows the player to move based oon the mouse coordinates
  move(){
    
    this.x = mouseX - 15}
  
  //This ensures the player stays within the confines of the canvas by resetting its position by its width.
  home(){
    if (this.x < 0){
      this.x = 0}
    
    if (this.x > width)
      this.x = width - 30}
}

  //This creates the Rock class
class Rock {
  
  constructor(x, y, c){  
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 16;
    this.c = c;
}
  
  //This creates the shape of the rock and colors it
  body(){
    textSize(50)
    text('💣', this.x, this.y)
  }
  
  //This moves the rock and increases its speed by basing it on a constantly increasing frameCount
  move(){
    this.y += (frameCount * 0.0025);
    
  //This resets the rock back to the top of the canvas
    if (this.y > height){
      this.y = 0;
      this.x = random(width)}
  }
  
  //This checks for collsions by checking if the corners of the player are within the area of the rock.
  checkCollision(){
    if (player1.x + player1.w/2 > this.x && player1.x < this.x + this.w && player1.y + player1.h/2 > this.y && player1.y < this.y + this.h){
      
      this.y = 0;
      this.x = random(width) 
    } 
  } 
}


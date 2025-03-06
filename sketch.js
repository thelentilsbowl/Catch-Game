//Declarations of variables
let backing = [];
let button1;
let notPlay = true;
let deadlyObArr = [];
let deadlyObNum = 2;
let cows = [];
let cowsNum = 2;
let backSelect = 1;
let missed = 0;
let speed = 8;
let bombContact = 0;
let lives = 3;
let score = 0;
let nukeTrue = false;
let nukeArr = [];
let highScore = 0;

//Image Preloads function

function preload() {
  backing[0] = loadImage("Images/lvl1.jpg");
  backing[1] = loadImage("Images/lvl2.jpg");
  backing[2] = loadImage("Images/lvl3.jpg");

  bomb1 = loadImage("Images/bomb1.png");
  nuke1 = loadImage("Images/nuke.png");
  cow1 = loadImage("Images/cow.png");
  playBtn1 = loadImage("Images/playBtn.png");
  farmer1 = loadImage("Images/farmer.png");
  backingSound = createAudio("backingSound.mp3");
}

//Button class

class Button1 {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  clicked(MouseX, MouseY) {
    return (
      MouseX > this.x &&
      MouseX < this.x + this.w &&
      MouseY > this.y &&
      MouseY < this.y + this.h);
  }
}

//Setup function

function setup() {
  let randomNum = int(random(0, 3));
  createCanvas(750, 750);
  image(backing[randomNum], 0, 0, 750, 750);

//Displays all buttons and plays audio 
  
  button1 = new playButton(275, 275, 200, 200);
  backButton0 = new backBtn0(50, 500, 100, 100);
  backButton1 = new backBtn1(325, 500, 100, 100);
  backButton2 = new backBtn2(600, 500, 100, 100);
  backingSound.volume(0.1);
  backingSound.loop();
  
//Pushes new bombs into deadlyObArr array

  for (let i = 0; i < deadlyObNum; i++) {
    deadlyObArr[i] = new deadlyOb(random(0, width - 100), random(-400, -200), 100, 100)}

//Pushes new bombs into cows array
  
  for (let i = 0; i < cowsNum; i++) {
    cows[i] = new cow(random(0, width - 300), random(-400, -200), 300, 300)}
  
//Pushes new bombs into nukeArr array

  for (let i = 0; i < 1; i++) {
    nukeArr[i] = new deadlyObNuke(random(0, width - 200), random(-400, -200), 200, 200)}

  player1 = new Player(300, 500, 200, 200);
  
}

//Draw function

function draw() {
  
//Sets the background image (It will default to the lvl 2 image)

  image(backing[backSelect], 0, 0, 750, 750);
  
  stroke(200, 200, 200);
    if (notPlay) {
      button1.show();
      backButton0.show();
      backButton1.show();
      backButton2.show();
      
//Text identify which button is which level

        textSize(25);
        text("Level 1", 60, 550);
        text("Level 2", 335, 550);
        text("Level 3", 610, 550);
        text("Last Score: " + score, 25, 50);
      
//High score variable compares last score to highScore and sets it to score if higher 
    
    if (score > highScore) {
      highScore = score}
      
//Player instructions
      
    text("High Score: " + highScore, 250, 50);
    textAlign(CENTER);
    text("Catch the cows with your mouse to increase score!", 375, 200);
    text("Don't catch the bombs, you only have 3 lives", 375, 250);
    text("Don't miss any cows, you only get 5 misses", 375, 300);
    textAlign(LEFT)} 
  
//Calls all functions to display objects once game is being played (notPlay == false)
  
    else if (missed < 5 && notPlay == false) {
      for (let i = 0; i < deadlyObNum; i++) {
        deadlyObArr[i].show();
        deadlyObArr[i].move();
        deadlyObArr[i].checkCollision()}

    for (let i = 0; i < cowsNum; i++) {
      cows[i].show();
      cows[i].move();
      cows[i].checkCollision()}

    if (nukeTrue) {
      for (let i = 0; i < 1; i++) {
        nukeArr[i].show();
        nukeArr[i].move();
        nukeArr[i].checkCollision()}
    }

//Displays player         
        
    player1.show();
    player1.move();
    player1.home();
        
//Displays player statistics

    textSize(30);
    text("Lives: " + (lives - bombContact), 25, 50);
    text("Missed: " + missed, 25, 100);
    text("Score: " + score, 25, 150)
  }

//Check condition to see if player has surpassed the game threshold 
  
  if (lives - bombContact < 1 || missed > 4) {
    notPlay = true;
    missed = 0;
    bombContact = 0;
    lives = 3}
}

//Mouse pressed function

  function mousePressed() {
    if (notPlay && button1.clicked(mouseX, mouseY)) {
      console.log("Play button pressed");
      notPlay = false;
      score = 0;
 
//Resets all objects back to the top

      for (let i = 0; i < cowsNum; i++) {
        cows[i].y = random(-200, -400);
      }

      for (let i = 0; i < deadlyObNum; i++) {
        deadlyObArr[i].y = random(-200, -400)}
} 
    
//Level 1 click check
    
    else if (notPlay && backButton0.clicked(mouseX, mouseY)) {
      console.log("Backing button pressed 1");
      backSelect = 0;
      speed = 4;
      nukeTrue = false
      deadlyObNum = 2}
    
//Level 2 click check
    
    else if (notPlay && backButton1.clicked(mouseX, mouseY)) {
      console.log("Backing button pressed 2");
      backSelect = 1;
      speed = 8;
      nukeTrue = false 
      deadlyObNum = 2}
    
//Level 3 click check 
    
    else if (notPlay && backButton2.clicked(mouseX, mouseY)) {
      console.log("Backing button pressed 3");
      backSelect = 2;
      speed = 12;
      nukeTrue = true;
      deadlyObNum = 1}
  }

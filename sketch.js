//Declarations
let backing = [];
let button1;
let notPlay = true;
let deadlyObArr = [];
let deadlyObNum = 2;
let cows = [];
let cowsNum = 2;
let fallRate = 0.0025;
let backSelect = 1;
let missed = 0;
let cowSpawn;
let speed = 4;
let bombContact = 0;
let lives = 3;
let score=0;
let nukeTrue = false;
let nukeArr = [];

//Image Preloads
function preload() {
  backing[0] = loadImage("Images/lvl1.jpg");
  backing[1] = loadImage("Images/lvl2.jpg");
  backing[2] = loadImage("Images/lvl3.jpg");

  bomb1 = loadImage("Images/bomb1.png");
  nuke1 = loadImage("Images/nuke.png");
  cow1 = loadImage("Images/cow.png");
  heart1 = loadImage("Images/heart.png");
  playBtn1 = loadImage("Images/playBtn.png");
  farmer1 = loadImage("Images/farmer.png")
  backingSound = createAudio("backingSound.mp3")
}

//Button class
class Button1 {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;  
    this.h = h}

  clicked(MouseX, MouseY) {
    return (MouseX > this.x && MouseX < this.x + this.w && MouseY > this.y && 
    MouseY < this.y + this.h)}
}

//Setup function
function setup() {
  
  let randomNum = int(random(0, 3)); 
  createCanvas(750, 750);
  image(backing[randomNum], 0, 0, 750, 750);

  button1 = new playButton(275, 275, 200, 200)
  backButton0 = new backBtn0 (50, 500, 100, 100)
  backButton1 = new backBtn1 (325, 500, 100, 100)
  backButton2 = new backBtn2 (600, 500,100, 100)  
  backingSound.volume(0.1)
  backingSound.loop()
  
  
 for (let i = 0; i < deadlyObNum; i++ ){
    deadlyObArr[i] = new deadlyOb (random(0, (width-150)), random(-400, -200), 100, 100)
  }
  
  for (let i = 0; i < cowsNum; i++ ){
    cows[i] = new cow(random(0, (width-150)), random(-400, -200), 300, 300)
  }
  
  for (let i = 0; i < 1; i++ ){
    nukeArr[i] = new deadlyObNuke(random(0, (width-150)), random(-400, -200), 200, 200)
  }
  
  player1 = new Player(300, 500, 200, 200)
  
  
  
}
//Draw function
function draw() {  
  
  scoreRate = int(frameCount/60);
  
  image(backing[backSelect], 0, 0, 750, 750)
  
  if (notPlay){
    button1.show();
    backButton0.show();
    backButton1.show();
    backButton2.show();
    frameCount = 0
    textSize(25)
    text("Level 1", 60, 550)
    text("Level 2", 335, 550)
    text("Level 3", 610, 550)
    text("Last Score: " + score, 25, 50)
  for(let i = 0; i < cowsNum; i ++){
    cows[i].stop()
  }
  }
  
  else if (missed < 5 && notPlay == false) {
  for(let i = 0; i < deadlyObNum; i ++){
    deadlyObArr[i].show()
    deadlyObArr[i].move()
    deadlyObArr[i].checkCollision();
    
    textSize(30)
    text("Lives: " + (lives - bombContact), 25, 50,)
    text("Missed: " + missed, 25, 100)
    text("Score: " + score, 25, 150)
  }
    
  for(let i = 0; i < cowsNum; i ++){
    cows[i].show()
    cows[i].move()
    cows[i].checkCollision();
  }
    
  if (nukeTrue){
    for(let i = 0; i < 1; i ++){
    nukeArr[i].show()
    nukeArr[i].move()
    nukeArr[i].checkCollision();
  }
}
    
    player1.show(); 
    player1.move();
    player1.home();
    
}
  
  
  
  
 if ((lives - bombContact) < 1 || missed > 4) {
    notPlay = true;
    missed = 0;
    bombContact = 0;
    lives = 3;  
    nukeTrue = false;
  }
  
}


//Mouse pressed function

function mousePressed() {

  if (notPlay && button1.clicked(mouseX, mouseY)) {
    console.log('Play button pressed');
    notPlay = false;
    score = 0;
    frameCount = 0
    
    for(let i = 0; i < cowsNum; i ++){
    cows[i].y = -200
  }
    
    for(let i = 0; i < deadlyObNum; i ++){
    deadlyObArr[i].y = -200
    }
  } 
  else if (notPlay && backButton0.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 0  
    speed = 4
    
  }
  
  else if (notPlay && backButton1.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 1
    speed = 8
    
    
  }
  
  else if (notPlay && backButton2.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 2 
    speed = 12
    nukeTrue = true;
    deadlyObNum = 1;
    }
}
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

//Image Preloads
function preload() {
  backing[0] = loadImage("Images/b3.jpg");
  backing[1] = loadImage("Images/b4.jpg");
  backing[2] = loadImage("Images/b5.jpg");

  bomb1 = loadImage("Images/bomb1.png");
  nuke1 = loadImage("Images/nuke.png");
  cow1 = loadImage("Images/cow.png");
  heart1 = loadImage("Images/heart.png");
  playBtn1 = loadImage("Images/playBtn.png");
  farmer1 = loadImage("Images/farmer.png")
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

//Player class
class Player {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  show() {
    image(farmer1, this.x, this.y, this.w, this.h)
  }
  
  move(){
    this.x = mouseX - player1.w/2}
  
  home(){
    if (this.x < 0){
      this.x = 0}
    
    if (this.x > width)
      this.x = width - player1.w}
}


//Setup function
function setup() {
  
  createCanvas(750, 750);
  let randomNum = int(random(0, 3));  
  image(backing[randomNum], 0, 0, 750, 750);

  button1 = new playButton(275, 275, 200, 200)
  backButton0 = new backBtn0 (50, 500, 100, 100)
  backButton1 = new backBtn1 (275, 500, 100, 100)
  backButton2 = new backBtn2 (500, 500, 100, 100)
  cowSpawn =  random(-400, -200)
  
 for (let i = 0; i < deadlyObNum; i++ ){
    deadlyObArr[i] = new deadlyOb (random(0, (width-150)), cowSpawn, 100, 100)
  }
  
  for (let i = 0; i < cowsNum; i++ ){
    cows[i] = new cow(random(0, (width-150)), random(-400, -200), 300, 300)
  }
  
  player1 = new Player(300, 500, 200, 200)
  
}
//Draw function
function draw() {  
  
  image(backing[backSelect], 0, 0, 750, 750)
  
  if (notPlay){
    button1.show();
    backButton0.show();
    backButton1.show();
    backButton2.show();
  for(let i = 0; i < cowsNum; i ++){
    cows[i].stop()
  }
  }
  
  else if (missed < 5 && notPlay == false) {
  for(let i = 0; i < deadlyObNum; i ++){
    deadlyObArr[i].show()
    deadlyObArr[i].move()
    deadlyObArr[i].checkCollision();
  }
    
  for(let i = 0; i < cowsNum; i ++){
    cows[i].show()
    cows[i].move()
    cows[i].checkCollision();
  }
    
    
    player1.show();
    player1.move();
    player1.home();
    
}
  
  text("Missed: " + missed, 100, 100)
  
  if (missed > 4) {
    notPlay = true
    missed = 0
  }
 }


//Mouse pressed function

function mousePressed() {

  if (notPlay && button1.clicked(mouseX, mouseY)) {
    console.log('Play button pressed');
    notPlay = false;
    
    for(let i = 0; i < cowsNum; i ++){
    cows[i].y = -200
  }
}
  
  else if (notPlay && backButton0.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 0  

  }
  
  else if (notPlay && backButton1.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 1
  }
  
  else if (notPlay && backButton2.clicked(mouseX, mouseY)){
    console.log('Backing button pressed');
    backSelect = 2 
  }
}
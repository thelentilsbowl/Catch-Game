//Obstacle class

  class obstacle {
    constructor(x, y, w, h){  
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h}
 
  move(){
    
    if (this.y > height){
      this.y = random(-450, 0);
      this.x = random(0, (width-150))
    }
    
    if(missed < 5) {
      this.y += (5)
  }    
}
    
  checkCollision(){
  if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + this.w && player1.y > this.y && player1.y < this.y + (this.h)/2){
    console.log("Collision")
    this.y = random(-450, 0);
    this.x = random(0, (width-150))
    }
  
  }
}
//Cow class

class cow extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
//Displays cows
  
  show(){
    
    image(cow1, this.x, this.y, this.w, this.h)
    
    if (this.y > height && missed < 5){
      this.y = random(-450, 0)
      this.x = random(0, (width-150))
      missed++
    }
  }
  
//Checks for collision between player and cow object
  
  checkCollision(){
  if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + (this.w)/1.5 && player1.y >   this.y && player1.y < this.y + (this.h)/2){
    
//Resets cow location off screen

      this.y = random(-450, 0)
      this.x = random(0, (width-150))

//Increments score
    
    score++
    }
  } 
}
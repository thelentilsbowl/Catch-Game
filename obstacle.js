//Obstacle class

  class obstacle {
    constructor(x, y, w, h){  
    this.x = x
    this.y = y
    this.w = w
    this.h = h}
    
//Move function which increments y position
 
  move(){
    
   if (this.y > height && notPlay== false){
     this.y = random(-450, 0);
     this.x = random(0, (width-150))}
    
//Speed dependent on speed variable, changed when certain level is selected
    
    if(missed < 5 && notPlay == false) {
      this.y += speed}}
    
//Checks for collision between player and obstacle object  

    checkCollision(){
      if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + (this.w)/1.5 &&               player1.y >   this.y && player1.y < this.y + (this.h)/2){
        
        this.y = random(-450, 0)
        this.x = random(0, (width-150))
    }
  }
}
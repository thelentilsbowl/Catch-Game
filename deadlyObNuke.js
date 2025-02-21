//Nuke class

class deadlyObNuke extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
  
//Displays Nuke
  
  show(){
    image(nuke1, this.x, this.y, this.w, this.h)}
  
//Checks for collision between player and nuke object  
  
  checkCollision(){
    if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + (this.w)/1.5 && player1.y     > this.y && player1.y < this.y + (this.h)/2){
      
//Resets nuke location off screen
 
      this.y = random(-450, 0)
      this.x = random(0, (width-150))
      
//Increments bombContact by 2 (This is for level 3)
      
    bombContact = bombContact + 2
    }
  }
}
//Bomb class

class deadlyOb extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
  
//Displays bomb 
  
  show(){
    image(bomb1, this.x, this.y, this.w, this.h)}
  
  
//Checks for collision between player and bomb object

  checkCollision(){
    if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + (this.w)/1.5 && player1.y     > this.y && player1.y < this.y + (this.h)/2){
    
//Resets bomb location off screen

      this.y = random(-450, 0)
      this.x = random(0, (width-150))
      
//Increments bombContact
      
    bombContact ++
    }
  }
}
class deadlyObNuke extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
  
  show() {
    image(nuke1, this.x, this.y, this.w, this.h)
  }
  
  checkCollision(){
    if(player1.x + (player1.w)/2 > this.x && player1.x < this.x + (this.w)/1.5 && player1.y > this.y && player1.y < this.y + (this.h)/2){
    console.log("Collision")
    this.y = random(-450, 0);
    this.x = random(0, (width-150))
    bombContact = bombContact + 2
    }
  }
}
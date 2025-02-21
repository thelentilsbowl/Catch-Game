//Player class
class Player {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
//Displays farmer
  
  show() {
    image(farmer1, this.x, this.y, this.w, this.h)}
  
//Sets x coordiante of mouse as x coordianate of farmer
  
  move(){
    this.x = mouseX - player1.w/2}
  
//Collisions for borders
  
  home(){
    if (this.x < 0){
      this.x = 0}
    
    if (this.x > width - player1.w + 20)
      this.x = width - player1.w + 20}}


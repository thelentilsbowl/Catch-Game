
//Bomb class

class deadlyOb extends obstacle {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }

  //Displays bomb

  show() {
    image(bomb1, this.x, this.y, this.w, this.h);
  }

  //Checks for collision between player and bomb object

  checkCollision() {
    if (
      
      (this.x < player1.x + player1.w/1.5 &&
      this.x > player1.x &&
      this.y < player1.y + player1.h &&
      this.y > player1.y)||
      
      (this.x + this.w < player1.x + player1.w/1.5 &&
      this.x + this.w > player1.x &&
      this.y < player1.y + player1.h &&
      this.y > player1.y)||
      
      (this.x < player1.x + player1.w/1.5 &&
      this.x > player1.x &&
      this.y + this.h/1.5 < player1.y + player1.h &&
      this.y + this.h/1.5 > player1.y)||
      
      (this.x + this.w < player1.x + player1.w/1.5 &&
      this.x + this.w > player1.x &&
      this.y + this.h/1.5 < player1.y + player1.h &&
      this.y + this.h/1.5 > player1.y)
    
    ) {
      //Resets bomb location off screen

      this.y = random(-450, 0);
      this.x = random(0, width - 150);

      //Increments bombContact

      bombContact++;
    }
  }
}

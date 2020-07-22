class Mover
{
  constructor(x, y)
  {
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();//creates a unit vector pointing in a random direction
    this.vel.mult(5); //sets the velocity to 5

    //this.vel = createVector(0,-8); //simulates a jump upward with a velocity of 8
  }

  update()
  {
    let mouse = createVector(mouseX, mouseY);//creates vector pointing to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //creates acceleation from current poisiton to mouse


    //this.acc = createVector(0, 9.8); //simulates gravity. Need to scale it down to about .1


    this.acc.setMag(.1); //sets the acceleration
    this.vel.add(this.acc);
    //this.vel.limit(3);
    this.pos.add(this.vel);
  }
  show()
  {
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x, this.pos.y, 32, 32);
  }
}

class Mover
{
  constructor(x, y)
  {
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();//creates a unit vector pointing in a random direction
    this.vel.mult(5); //sets the velocity to 5
    this.direction = createVector(0,0);

    //this.vel = createVector(0,-8); //simulates a jump upward with a velocity of 8
  }

  showVelocity()
  {
    this.direction = p5.Vector.add(this.pos, this.vel);
    console.log(this.direction);
    let scale = p5.Vector.mult(this.vel, 10);
    this.direction.add(scale);
  }

  update()
  {
    let mouse = createVector(mouseX, mouseY);//creates vector pointing to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //creates acceleation from current poisiton to mouse


    //this.acc = createVector(0, 9.8); //simulates gravity. Need to scale it down to about .1


    this.acc.setMag(.1); //sets the acceleration
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }
  show()
  {
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x, this.pos.y, 32, 32);

    stroke(255,0,255);
    line(this.pos.x, this.pos.y, this.direction.x, this.direction.y);
  }
}

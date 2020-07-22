let move;

function setup() {
	createCanvas(600, 600);
	move = new Mover(width/2, height/2);
}

function draw() {
	background(51);
	move.update();
	move.show();
}

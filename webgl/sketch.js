var angle = 1;

function setup() {
	createCanvas(400, 400, WEBGL);
}

function draw() {
	background(51);

	//translate(0, 0, mouseX);
	rotateY(angle);
	box(100);

	angle += 0.01;
	//ellipse(200, 200, 100, 100);
}
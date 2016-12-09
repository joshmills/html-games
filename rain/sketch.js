
// Colors
var rainColor = [100, 193, 222, 200];
var backgroundColor = [120, 120, 120, 255];

// Globals
var drops = [];
var dropCount = 200;
var gravity;

function setup() {
	createCanvas(640,480)

	var gravity = createVector(0, 0.2);

	for (var i = 0; i < dropCount; i++) {
		drops.push(new Drop());
	}
}

function draw() {
  	background(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
  	for (var i = 0; i < drops.length; i++) {
  		drops[i].applyForce(gravity);
  		drops[i].fall();
  		drops[i].show();
  	}  	
}

var ground;
var details = [];
var clouds = [];

function setup() {
	createCanvas(600, 480);
	ground = new Ground();

	for (var i = 0; i < 3; i++) {
		details.push(new Detail());
	}

	clouds.push(new Cloud());
}

function draw() {
  	background(240);

  	ground.show();

  	for (var i = details.length - 1; i >= 0; i--) {
		
  		details[i].show();
		details[i].update();

  		if (details[i].x < 0) {
  			details.splice(i, 1);
  		}
	}

	for (var i = clouds.length - 1; i >= 0; i--) {
		clouds[i].update();
		clouds[i].show();

		if (clouds[i].x + clouds[i].w < 0) {
  			clouds.splice(i, 1);
  		}
	}

	if (frameCount % 5 == 0) {
		details.push(new Detail());
	}

	if (frameCount % 300 == 0) {
		clouds.push(new Cloud());
	}
  	
}
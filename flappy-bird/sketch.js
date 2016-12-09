
var bird;
var pipes = [];
var score = 0;

function setup() {
	createCanvas(400, 600);
	//createCanvas(window.innerWidth, window.innerHeight);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
  	background(51);

	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].update();
		pipes[i].show();

		if (pipes[i].scored(bird)) {
			score++;
		} else if (pipes[i].hits(bird)) {
			score = 0;
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

	strokeWeight(0);
	fill(51);
	rect(width - 110, 0, 110, 30);
	fill(255);
	textSize(18);
	textFont('consolas');
	text('score: ' + score, width - 100, 20);
}

function mouseClicked() {
	bird.up();
}

function Drop() {

	this.pos = createVector(random(width), random(-200, -100));
	this.acc = createVector(0, 0);
	this.z = random(0, 20);
	this.length = map(this.z, 0, 20, 10, 20);
	this.yspeed = map(this.z, 0, 20, 4, 10);
	this.vel = createVector(0, this.yspeed);

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.fall = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if (this.pos.y > height) {
			this.pos = createVector(random(width), random(-200, -100));
		}
	}

	this.show = function() {
		var thick = map(this.z, 0, 20, 1, 3);
		strokeWeight(thick);
		stroke(rainColor[0], rainColor[1], rainColor[2], rainColor[3]);
		line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.length);
	}
}
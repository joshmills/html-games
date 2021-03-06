
function Particle(x, y, hue, firework) {

	this.pos = createVector(x, y);
	this.firework = firework;
	this.lifespan = 255;
	this.hue = hue;

	if (firework) {
		this.vel = createVector(0, random(-11, -7));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(3, 15));
	}
	this.acc = createVector(0, 0);

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.done = function() {
		return this.lifespan < 0;
	}

	this.update = function() {

		if (!this.firework) {
			this.vel.mult(0.85);
			this.lifespan -= 4;
		}

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {

		colorMode(HSB);

		if (!this.firework) {
			strokeWeight(2);
			stroke(this.hue, 255, 255, this.lifespan);
		} else {
			strokeWeight(4)
			stroke(this.hue, 255, 255);
		}

		point(this.pos.x, this.pos.y);
	}
}
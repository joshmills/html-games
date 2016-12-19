function Blob(x, y, r, food) {

	this.pos = createVector(x, y);
	this.r = r;
	this.vel = createVector(0,0);
	this.color = food ? 255 : color(random(255), random(255), random(255));
	this.yoff = 0;
	this.food = food;

	this.eats = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if (d < this.r + other.r) {

			var mult = other.r * 2;
			var sum = PI * this.r * this.r + PI * mult * mult;
			this.r = sqrt(sum / PI);

			return true;
		} else {
			return false;
		}
	}

	this.update = function() {
		var newvel = createVector(mouseX-(width/2), mouseY-(height/2));
		newvel.setMag(3);
		this.vel.lerp(newvel, 0.05);
		this.pos.add(this.vel);
	}

	this.show = function() {
		
		fill(this.color);
		strokeWeight(0);

		if (this.food == true) {
			ellipse(this.pos.x, this.pos.y, this.r * 2, this.r*2);
		} else {
			push();
			translate(this.pos.x, this.pos.y);
			beginShape();
			var xoff = 0;
			for (var a = 0; a < TWO_PI; a += 0.1) {
				var r = this.r + map(noise(xoff + this.yoff), 0, 1, -this.r/10, this.r/10);
				var x = r * cos(a);
				var y = r * sin(a);
				vertex(x, y);
				xoff += 0.1;
			}
			endShape(CLOSE);
			pop();
			this.yoff += 0.01;
		}
	}

}
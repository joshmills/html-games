function Pipe() {

	this.gap = height / 4;
	this.top = random(height-this.gap);
	this.bottom = this.top + this.gap;

	this.x = width;
	this.w = 30;
	this.speed = 5;
	this.highlight = false;
	this.completed = false;

	this.scored = function(bird) {

		if (this.completed) {
			
			this.hits(bird);
			return false;

		} else {
			
			var passed = (bird.x > this.x && bird.x < this.x + this.w) && ! this.hits(bird);
			this.completed = passed;
			return passed;
		}		
	}

	this.hits = function(bird) {

		var hit = (bird.y < this.top || bird.y > this.bottom) && (bird.x > this.x && bird.x < this.x + this.w);
		this.highlight = hit;
		return hit;
	}

	this.offscreen = function() {
		return this.x < -this.w;
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.show = function() {
		fill(this.highlight ? 125 : 255);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.top + this.gap, this.w, height);
	}
}
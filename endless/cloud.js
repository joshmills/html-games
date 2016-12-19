
function Cloud() {

	this.x = width;
	this.y = random(100, 300);
	this.w = 12
	this.xspeed = -1;

	this.update = function() {
		this.x += this.xspeed;
	}

	this.show = function() {
		strokeWeight(0);
		fill(125);
		rect(this.x, this.y, 2 * this.w, this.w);
		rect(this.x + (this.w/2), this.y - (this.w/2), this.w, this.w);
	}

}
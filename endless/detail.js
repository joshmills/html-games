
function Detail() {

	this.x = width + random(50);
	this.y = height - random(80, 98);
	this.w = random(2, 8);
	this.yspeed = -3;

	this.update = function() {
		this.x += this.yspeed;
	}

	this.show = function() {
		stroke(51);
		strokeWeight(1);
		fill(51);
		line(this.x, this.y, this.x + this.w, this.y);		
	}
}
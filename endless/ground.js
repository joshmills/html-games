
function Ground() {

	this.y = height - 100;
	this.w = 10;
	
	this.update = function() {}

	this.show = function() {
		stroke(51);
		strokeWeight(1);
		fill(51);
		line(0, this.y, width, this.y);		
	}
}
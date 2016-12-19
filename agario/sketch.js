
// MP options
var socket;
var username;

var blob;
var blobs = [];
var startscale = 32;
var zoom = 1;

function setup() {

	username = Util.generateUsername();
	console.log(username);
	socket = io();

	createCanvas(600, 600);

	blob = new Blob(0, 0, startscale);
	for (var i = 0; i < 50; i++) {
		var x = random(-width, width);
		var y = random(-height, height);
		blobs.push(new Blob(x, y, 4, true));
	}
}

function draw() {
	background(51);

	translate(width/2, height/2);

	var newzoom = startscale / blob.r;
	zoom = lerp(zoom, newzoom, 0.1);
	scale(zoom);

	translate(-blob.pos.x, -blob.pos.y);

	for (var i = blobs.length - 1; i >= 0; i--) {
		if (blob.eats(blobs[i])) {
			blobs.splice(i, 1);
		}
	}

	blob.show();
	blob.update();

	for (var i = 0; i < blobs.length; i++) {
		blobs[i].show();
	}
}
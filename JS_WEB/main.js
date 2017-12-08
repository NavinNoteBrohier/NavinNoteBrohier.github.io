var canvas = document.getElementById("BGCanvas");
var context = canvas.getContext("2d");


context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;

// Global variables
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var Width = context.canvas.width;
var Height = context.canvas.height;

var Init = false;

var X = 10; 
var Y = 10;

var MinSpeed = 1;
var MaxSpeed = 3;

var DefaultImage = document.createElement("img");
	DefaultImage.src = "JS_WEB/Resources/cloud.png";
var NumClouds;
var MaxClouds = 2000;
var BunchofClouds = [];

function Initialize()
{
	NumClouds = random(10,20);
		

	for(var i = 0; i < NumClouds; i++)
	{
		SpawnClouds();
	}

	Init = true;
}

function main(DeltaTime)
{
	Width = context.canvas.width;
	Height = context.canvas.height;
	DrawRect(0,0, Width, Height, "#ccd9ff", false,10);

	for(var i = 0; i < BunchofClouds.length; i++)
	{
		BunchofClouds[i].y -= (BunchofClouds[i].speed);
		
		if(BunchofClouds[i].y < -400)
		{
			BunchofClouds[i].y = Height;
			BunchofClouds[i].x = random(-350,Width + 350);
			BunchofClouds[i].speed = ReturnSpeed();
		}
		context.drawImage(BunchofClouds[i].image, BunchofClouds[i].x, BunchofClouds[i].y);
	}

}

function DrawRect(x, y, width, height, Color, strokefill, lineWidth)
{
	context.beginPath();
	context.lineWidth = lineWidth;

	if(strokefill)context.strokeStyle = Color;
	else context.fillStyle = Color;

	if(strokefill)context.strokeRect(x,y,height,width);
	else context.fillRect(x,y,width,height);
}

function SpawnClouds()
{
	var newCloud = {};
	 
	var Type = random(0,3);

	newCloud.image = document.createElement("img");

	switch(Type)
	{
		case 0:
			newCloud.image.src = "JS_WEB/Resources/cloud.png";
			newCloud.x = random(-350,Width + 350);
			newCloud.y = Height;
		break;

		case 1:
			newCloud.image.src = "JS_WEB/Resources/cloudtwo.png";
			newCloud.x = random(-350,Width + 350);
			newCloud.y = Height;
		break;
		
		case 2: 
			newCloud.image.src = "JS_WEB/Resources/cloudthree.png";
			newCloud.x = random(-350,Width + 350);
			newCloud.y = Height;
		break;

		default:
		break;
	}

	newCloud.speed = ReturnSpeed()
	BunchofClouds.push(newCloud);

}

function ReturnSpeed()
{
	return random(MinSpeed,MaxSpeed);
}

function ResizeCanvas()
{
	Width = context.canvas.width;
	Height = context.canvas.height;
}

function random (floor, ceil)
{
		return Math.floor ( (Math.random() * (ceil - floor ) ) + floor) ; 
}

function run()
{
	if(Init)main(getDeltaTime);
	else Initialize();
}

//DELTA TIME

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);
//


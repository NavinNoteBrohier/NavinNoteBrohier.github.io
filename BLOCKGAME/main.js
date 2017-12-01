var canvas = document.getElementById("BGCanvas");
var context = canvas.getContext("2d");

var Initialize = false;

var BlockObject = 
{
    Position : vector2,
    Size : vector2,
    color : "#000000",
    DrawSquare: function()
    {
        context.fillStyle = this.color;
        context.fillRect(this.Position.x, this.Position.y, this.Size.width, this.Size.height);
    },
    InitSquare: function(x,y,width,height,color)
    {
        this.Position.x = x;
        this.Position.y = y;
        this.Size.width = width;
        this.Size.height = height;
        this.color = color;
    }
}

function Init()
{
    BlockObject.InitSquare(10,10,200,200,"#000000");

    Initialize = true;
}

function main(DeltaTime)
{
    BlockObject.DrawSquare();
}

function DrawSquare( x, y, width, height, color)
{
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
}

function run()
{
	if(Initialize)
    {
        main(getDeltaTime);
    }
    else
    {
        Init();
    };
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

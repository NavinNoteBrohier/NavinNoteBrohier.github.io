// Main dot JS
//////////////////////////////////
///// CONSTANTS AND VARIABLES/////
//////////////////////////////////
var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");
var Cwidth = canvas.width;
var Cheight = canvas.height;
var startFrameMillis = Date.now();
var endFrameMillis = Date.now(); 
function getDeltaTime()
{
		endFrameMillis = startFrameMillis;
		startFrameMillis = Date.now();
		return (startFrameMillis - endFrameMillis) * 0.001;
}
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

var D1 = new D1(10,10,10,10);
var D2 = new D2(20,20,10,10);

function run()
{
	var DeltaTime = getDeltaTime();
	context.fillStyle = "#ffffff";
	context.fillRect(0,0,canvas.width,canvas.height);
		
	D1.draw(context);
	D1.update(DeltaTime);
	D2.draw(context);
	D2.update(DeltaTime);
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
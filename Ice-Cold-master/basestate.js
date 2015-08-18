var BaseState = function()
{
	this.type = "BaseState";
}

BaseState.prototype.load = function()
{

}

BaseState.prototype.unload = function()
{

}

BaseState.prototype.update = function(dt)
{

}

BaseState.prototype.draw = function(dt)
{
	context.font = "32pt Veranda";
	context.fillStyle = "#FF0";
	var width = context.measureText( "BASE STATE AHHHHHH").width;
	context.fillText("BASE STATE AHHHHHH", SCREEN_WIDTH/2 - width/2, SCREEN_HEIGHT/2 );
}
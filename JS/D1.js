//Draw 1 
var D1 = function(X,Y,W,H)
{
	this.width = W;
	this.height = H;
	this.x = X;
	this.y = Y;
	this.colour = "#0000ff";
}

D1.prototype.update =function(deltatime)
{
	
}

D1.prototype.draw = function(context)
{
	context.save();
		context.fillStyle = this.colour;
		context.fillRect(this.x,this.y,this.width,this.height)
	context.restore();
}

var D2 = function(X,Y,W,H)
{
	this.width = W;
	this.height = H;
	this.x = X;
	this.y = Y;
	this.colour = "#ff0000";
}

D2.prototype.update = function(deltatime)
{
	
}

D2.prototype.draw = function(context)
{
	context.save();
		context.fillStyle = this.colour;
		context.fillRect(this.x,this.y,this.width,this.height)
	context.restore();
}
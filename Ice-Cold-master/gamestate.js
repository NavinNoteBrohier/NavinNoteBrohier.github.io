var win = document.createElement ("img")
win.src = "gamewin.png";

var player = new Player ();

var GameState = function()
{
	this.prototype = BaseState;
}

GameState.prototype.load = function()
{

}

GameState.prototype.unload = function()
{
	
}

GameState.prototype.update = function(dt)
{
	if(player.win == true)
	{
	
	}
}

GameState.prototype.draw = function(dt)
{
    if (player.win == true)
	{
		context.drawImage (win, 0, 0)
	}
}


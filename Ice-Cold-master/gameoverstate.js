var deathBG = document.createElement ("img")
deathBG.src = "gameover.png";

var warmth = new Warmth ();
var player = new Player ();

var GameOverState = function()
{
	this.prototype = BaseState;
}

GameOverState.prototype.load = function()
{

}

GameOverState.prototype.unload = function()
{

}

GameOverState.prototype.update = function(dt)
{
	if (warmth.DEFAULT < 0)
	{
		player.alive == false;
	}	
}

GameOverState.prototype.draw = function(dt)
{
	if (warmth.DEFAULT <  0)
	{
		context.drawImage( deathBG, 0, 0);
	}
}
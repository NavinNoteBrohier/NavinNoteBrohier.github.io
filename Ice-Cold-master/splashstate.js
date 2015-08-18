var splashBG = document.createElement ("img");

splashBG.src = "splashmain.png";

var SplashState = function()
{
	this.prototype = BaseState;
	this.TimeSinceStart = 0;
}

SplashState.prototype.load = function()
{

}

SplashState.prototype.unload = function()
{

}

SplashState.prototype.update = function(dt)
{
	this.TimeSinceStart += dt;
	if (this.TimeSinceStart > 3.0)
	{
		SceneManager.pop();
	}
}

SplashState.prototype.draw = function(dt)
{
	context.drawImage( splashBG,
							   x * 0, y * 0);
}
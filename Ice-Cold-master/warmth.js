var Warmth = function()
{
	this.DEFAULT = 47;
}

var player = new Player();

Warmth.prototype.update = function(deltatime)
{
	if(player.alive == true)
	{
		this.DEFAULT -= deltatime * 2;
	}

	
	
	if(this.DEFAULT < 0)
	{
		player.alive = false;
	}
}

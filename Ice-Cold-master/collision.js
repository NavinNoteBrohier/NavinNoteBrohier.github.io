var Collision = function()
{
	this.collided = false
}

Collision.prototype.update = function(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if ( 	y2 + h2 < y1 ||
			x2 + w2 < x1 ||
			x2 > x1 + w1 ||
			y2 > y1 + h1)
			{
				this.collided = true
			}
}
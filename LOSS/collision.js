// COLLISON

function Collision(x1, y1, h1, w1, x2, y2, h2, w2)
{
	if(	y2 + h2 < y1 ||
		x2 + w2 < x1 ||
		y1 + h1 > y2 ||
		x2 + w2 > x2)
		return false;
	return true;
};
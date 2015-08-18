
//constructor
var Vector2 = function ()
{
	this.x = 0;
	this.y = 0;
	this.DEGRAD = 0;
};

Vector2.prototype.initialize = function (x, y) 
{
  this.x = x;
  this.y = y;
};

Vector2.prototype.copy = function()
{
	var newVector = new Vector2();
	newVector.x = this.x;
	newVector.y = this.y;
	return newVector;
}

Vector2.prototype.add = function(v2)
{
	this.x += v2.x;
	this.y += v2.y
}

Vector2.prototype.subtract = function(v2)
{
	this.x -= v2.x;
	this.y -= v2.y
}

Vector2.prototype.multiplyScalar = function(f)
{
	this.x *= f;
	this.y *= f;
}

Vector2.prototype.set = function (x, y) 
{
  this.x = x;
  this.y = y;
};
 
Vector2.prototype.getX = function () 
{
  return x;
};
 
Vector2.prototype.setX = function (x) 
{
  this.x = x;
};
 
Vector2.prototype.getY = function () 
{
  return y;
};
 
Vector2.prototype.setY = function (y) 
{
  this.y = y;
};

Vector2.prototype.magnitude = function()
{
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2.prototype.normalize = function()
{
  var mag = Math.sqrt(this.x * this.x + this.y * this.y);
 
  if (mag === 0) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = this.x / mag;
    this.y = this.y / mag;
  }
};

Vector2.prototype.getNormalized = function () 
{
  var mag = Math.sqrt(x * x + y * y);
  return new Vector2(x / mag, y / mag);
};


//try dis
//Vector2.prototype.dot;
//Vector2.prototype.cross;
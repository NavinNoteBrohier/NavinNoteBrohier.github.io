//Enemy Values
// Magnitude is the LENGTH OF A VECTOR
// REMEMBER
var player = new Player();
player.update();

var Enemy = function(x,y,deltatime)
{
	this.image = document.createElement("img");
	this.image.src = "enemy.png";
	
	this.bodyW = 60;
	this.bodyH = 60;
	
	this.visionW = 80;
	this.visionH = 100;
	
	this.VisionOffset = 30;
	
	this.alive = true;
	this.assassinate = false;
	
	this.POS = new Vector2();
	this.POS.set(100,100);
	this.speed = 0;
	this.rot = 0;
	
	this.Points = [];
	
	this.Points[0] = new Vector2();
	this.Points[0].set(650,200);
	
	this.Points[1] = new Vector2();
	this.Points[1].set(900,200);
	
	this.Points[2] = new Vector2();
	this.Points[2].set(900,500);
	
	this.Points[3] = new Vector2();
	this.Points[3].set(650,500);
	
	this.CurrentPointIndex = 0;
};

Enemy.prototype.update = function(DeltaTime)
{
	var Direction = this.Points[this.CurrentPointIndex].copy();
		Direction.subtract(this.POS);
	var Distance = Direction.magnitude();
	
	this.speed = 10000 * DeltaTime
	
	if (Distance > 1)
	{
		Direction.normalize();
		
		Direction.multiplyScalar(this.speed);
		Direction.multiplyScalar(DeltaTime);
		
		this.POS.add(Direction);
		this.rot += Direction ;
	}
	else
	{
		this.CurrentPointIndex ++;
		if(this.CurrentPointIndex > this.Points.length - 1)
		{
			this.CurrentPointIndex = 0;
		}
	}
	
	if(this.CurrentPointIndex == 0)
	{
		this.image.src = "enemy.png"
	}
	
	if(this.CurrentPointIndex == 1)
	{
		this.image.src = "enemyright.png"
	}
	
	if(this.CurrentPointIndex == 2)
	{	
		this.image.src = "enemydown.png"
	}
	
	if(this.CurrentPointIndex == 3)
	{
		this.image.src = "enemyleft.png"
	}
}

Enemy.prototype.draw = function(context, DeltaTime)
{	

	context.save();
		context.fillStyle = "#CCC";
		context.translate(this.POS.x,this.POS.y);
		context.fillRect(this.POS.x,this.POS.y,this.bodyW,this.bodyH)
	context.restore();
	
	context.save();
		context.translate(this.POS.x,this.POS.y);
		context.rotate(this.rot);
		context.drawImage(this.image,-this.image.width/2 + 29,-this.image.height/2 + 15);
	context.restore();	
}
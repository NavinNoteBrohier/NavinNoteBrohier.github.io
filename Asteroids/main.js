//Navin Brohier
// idmtcert2 || AIECertificate2
// clocke555@gmail.com


var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown',function(evt)
									{onKeyDown(evt);
									}, false);
window.addEventListener('keyup',function(evt)
									{onKeyUp(evt);
									}, false);

									
// CONSTANTS									
var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;
var PLAYER_SPEED = 300;
var ASTEROID_SPEED = 5;
var ASTEROID_ROTATE_SPEED = 0.01;
var PLAYER_ROTATE_SPEED = 0.2;
var BULLET_SPEED = -10;
var STATE_SPLASH = 0; 
var STATE_GAME = 1;
var STATE_END = 2;
var GameState = STATE_SPLASH; 
var PLAYER_LIVES = 3;
var lastUpdate = Date.now();
var splashTimer = 3;
//var SCORE = 0;
var Background = document.createElement("img");
	Background.src = "background.png";
var player =
{

	image : document.createElement("img"),
	
	x : SCREEN_WIDTH/2, 
	y : SCREEN_HEIGHT/2,
	
	width : 40,
	height : 47,
	
	directionX : 0,
	directionY : 0,
	angularDirection : 0,
	rotation : 0,
	isRotatingLeft : false,
	isDead : false,
	points : 0
};

	player.image.src = "shipplayer.png" ;
		
var Asteroids = [] ;
var AsteroidTimer = 0;
var ShootTimer = 0; 
var Bullets = [];


// MISC functions
function random (floor, ceil)
{
		return Math.floor ( (Math.random() * (ceil - floor ) ) + floor) ; 
}

function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if ( 	y2 + h2 < y1 ||
			x2 + w2 < x1 ||
			x2 > x1 + w1 ||
			y2 > y1 + h1)
		return false;
	
	
	return true;
}

var startFrameMillis = Date.now();
var endFrameMillis = Date.now(); 
function getDeltaTime()
{

		endFrameMillis = startFrameMillis;
		startFrameMillis = Date.now();
		return (startFrameMillis - endFrameMillis) * 0.001;
		

}

// Game functions

function SpawnAsteroid()
{

		var Type = random(0,3);
		var newAsteroid = {};
			
			
		newAsteroid.image = document.createElement("img");
		if (Type == 0)
		{
				newAsteroid.image.src = "rock_large.png"; 
				newAsteroid.width = 69;
				newAsteroid.height = 75;
		}
		if (Type == 1)
		{
				newAsteroid.image.src = "rock_medium.png"; 
				newAsteroid.width = 40;
				newAsteroid.height = 50;		
		}
		if (Type == 2)
		{
				newAsteroid.image.src = "rock_small.png";
				newAsteroid.width = 22;
				newAsteroid.heigth = 20;
		}

		
		
	newAsteroid.x = SCREEN_WIDTH/2 ; 
	newAsteroid.y = SCREEN_HEIGHT/2 ;
	
	var dirX = random(-10, 10);
	var dirY = random(-10, 10);
	
	var Magnitude = Math.sqrt(dirX * dirX + dirY * dirY);
	if (Magnitude != 0)
	{
		dirX *= 1/ Magnitude;
		dirY *= 1/ Magnitude;
	}
	
	
	var movY = dirY * SCREEN_HEIGHT;
	var movX = dirX * SCREEN_WIDTH;
	
	
	newAsteroid.x += movX;
	newAsteroid.y += movY;
	
	newAsteroid.velocityX = -dirX * ASTEROID_SPEED;
	newAsteroid.velocityY = -dirY * ASTEROID_SPEED;
	
	Asteroids.push(newAsteroid);
}


function playerShoot()
{

		var Bullet = 
		{
		
			image : document.createElement("img"),
			x : player.x,
			y : player.y,
			
			width : 5,
			height : 5,
			
			velocityX : 0, 
			velocityY : 0,
		}

		Bullet.image.src= "bullet.png" ;
		
		var dirX = 0
		var dirY = 1
		
		var s = Math.sin(player.rotation);
		var c = Math.cos(player.rotation);
		
		var xVel = (dirX * c) - (dirY * s);
		var yVel = (dirX * s) + (dirY * c);
		
			Bullet.velocityX = xVel * BULLET_SPEED;
			Bullet.velocityY = yVel * BULLET_SPEED;
					
					Bullet.x = player.x;
					Bullet.y = player.y;

			Bullets.push(Bullet);
}




function runSplash(DeltaTime)
{

	splashTimer -= DeltaTime;
	if ( splashTimer <= 0 ) 
	{
	GameState = STATE_GAME;
				return;
	}

	context.fillStyle = "#FFF";
	context.font = "18px Arial";
	context.fillText( "LOOK OUT ASTEROIDS!", SCREEN_HEIGHT/2, SCREEN_WIDTH/2);
	
	
}

function runGame(DeltaTime)
{
//player
		var s = Math.sin(player.rotation) ; 
		var c = Math.cos(player.rotation) ; 

		var xDir = (player.directionX * c) - (player.directionY * s) ;
		var yDir = (player.directionX * s) + (player.directionY * c) ;
		var xVel = xDir * PLAYER_SPEED;
		var yVel = yDir * PLAYER_SPEED;  

			player.x += xVel * DeltaTime;
			player.y += yVel * DeltaTime;

				player.rotation += player.angularDirection * PLAYER_ROTATE_SPEED ; 

//wrap around	
		if (player.x > 640)
		{
			player.x = 0
		}
		if (player.y > 480)
		{
			player.y = 0
		}
		if (player.x < 0)
		{ player.x = 640
	
		}
		if (player.y < 0)
		{
			player.y = 480
		}
		
	

	if(!player.isDead)
	{
		context.save();
			context.translate(player.x,player.y);
			context.rotate(player.rotation);
			context.drawImage(player.image, -player.width/2, -player.height/2);
		context.restore();
	}
// Asteroids 	
		for (var i = 0; i < Asteroids.length; i++)
	{
		Asteroids[i].x += Asteroids[i].velocityX
		Asteroids[i].y += Asteroids[i].velocityY
		
		context.drawImage( Asteroids[i].image, Asteroids[i].x, Asteroids[i].y );		
	}
	
	AsteroidTimer += DeltaTime;
	if (AsteroidTimer >= 1)
	{
		AsteroidTimer = 0;
		SpawnAsteroid();
	}

	if (Asteroids.x > SCREEN_WIDTH)
	{
		
	}
	
// Bullets 

	if (ShootTimer > 0)
		ShootTimer -= DeltaTime;
	
	for (var i = 0; i < Bullets.length; i++)
	{
		Bullets[i].x += Bullets[i].velocityX;
		Bullets[i].y += Bullets[i].velocityY;
	
	context.drawImage(Bullets[i].image,
					Bullets[i].x - Bullets[i].width/2,
					Bullets[i].y - Bullets[i].height/2);
					
	if (Bullets[i].x > SCREEN_WIDTH || Bullets[i].x < 0 || 
		Bullets[i].y > SCREEN_HEIGHT || Bullets[i].y < 0) 
		{
		Bullets.splice(i,1);
		}
	else 
		{	
	
	for(var j = 0; j < Asteroids.length; j++)
			{
		
				var hit = intersects(
									Bullets[i].x, Bullets[i].y,
									Bullets[i].width, Bullets[i].height,
									Asteroids[j].x, Asteroids[j].y,
									Asteroids[j].width,Asteroids[j].heigth);
									
							if (hit == true)
							
								{
									Bullets.splice(i,1)
									Asteroids.splice(j,1)
									player.points ++ 
									break;
								}
		
			}
		}
	}
	context.fillStyle = "#FFF"
	context.font = "18px Arial" ;
	context.fillText( "The current score is " + player.points, 100,100);
	
	// collisions with asteroid to ship
	
	for (var j = 0; j < Asteroids.length; j++)
	{
			var Phit = intersects	(
									player.x, player.y,
									player.width, player.height,
									Asteroids[j].x, Asteroids[j].y,
									Asteroids[j].width,Asteroids[j].height
									);
									
							if (Phit == true)
							{
								player.isDead = true;
								GameState = STATE_END;
							}
							
							
	}
	
}

function runGameOver(DeltaTime)
{

	context.fillStyle = "#FFf";
	context.font = "18px Arial";
	context.fillText( "GAME OVER", SCREEN_WIDTH/2, SCREEN_HEIGHT/2);

}

function onKeyDown(event)
{	if (!player.isDead)
	{
		if (event.keyCode == KEY_DOWN)
		{ 	
			player.directionY = 1;
		}

		if (event.keyCode == KEY_UP)
		{ 	 
			player.directionY= -1;
		}

		if (event.keyCode == KEY_RIGHT)
		{ 	
			player.angularDirection = -1;
		}

		if (event.keyCode == KEY_LEFT)
		{ 		
			player.angularDirection = 1;
		}
		
		if(event.keyCode == KEY_SPACE && ShootTimer <= 0 )
		{
			ShootTimer += 0.3; 
			playerShoot(); 
		}
	}
}
function onKeyUp(evt)
{
	if (event.keyCode == KEY_DOWN)
	{ 	
		player.directionY = 0;
	}

	if (event.keyCode == KEY_UP)
	{ 	 
		player.directionY= 0;
	}

	if (event.keyCode == KEY_RIGHT)
	{ 	
		player.angularDirection = 0;
	}

	if (event.keyCode == KEY_LEFT)
	{ 	
		player.angularDirection = 0;
	}
}

function run()
{
	
	var DeltaTime = getDeltaTime();
	 
	
	context.drawImage(Background, 0, 0);
	//context.fillStyle = "#66CCFF";
	//context.fillRect(0, 0, canvas.width, canvas.height);
	
	switch(GameState)
	{
	
			case STATE_SPLASH:
			runSplash(DeltaTime);
			break;
			
			case STATE_GAME:
			runGame(DeltaTime);
			break;
			
			case STATE_END:
			runGameOver(DeltaTime);
			break;
	
	}
};


//-------------------- Don't modify anything below here
// This code will set up the framework so that the 'run' function is
// called 60 times per second. We have some options to fall back on
// in case the browser doesn't support our preferred method.
(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);
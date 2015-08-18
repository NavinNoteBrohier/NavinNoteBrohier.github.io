// MAIN
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
////////////////////////////////////////////////////////////
//						CONSTANTS						 //
//////////////////////////////////////////////////////////
var CANVASWIDTH = canvas.width;
var CANVASHEIGHT = canvas.height;

var SceneManager = new StateStack();
SceneManager.push( new GameOverState() );
SceneManager.push( new GameState() );
SceneManager.push( new SplashState() );

var TotalTimePassed = 0;

//DELTA TIME
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//SOUNDS N MUSIC
var music = new Howl(
{
		urls: ["bg.mp3"],
		loop : true,
		buffer : true,
		volume : 1
});

var froze = new Howl(
{
		urls: ["crunch.wav"],
		loop : false,
		buffer : true,
		volume : 1
});

music.play();

var cells = [];
function initialise()
{
	for (var layerindex = 0; layerindex < LAYER_COUNT; layerindex++ )
	{
		cells[layerindex] = [];
		var itemindex = 0;
		
		for(var y = 0; y < level1.layers[layerindex].height; y++)
		{
			cells[layerindex] [y] = [];
			for (var x = 0; x < level1.layers[layerindex].width; x++)
			{
				if(level1.layers[layerindex].data[itemindex] != 0)
				{
					
					cells[layerindex][y][x] = 1;
					cells[layerindex][y - 1][x] = 1;	
					cells[layerindex][y - 1][x + 1] = 1;
					cells[layerindex][y][x + 1] = 1;
				}
				//if 
				else if (cells[layerindex][y][x] != 1)
				{
					cells[layerindex][y][x] = 0;
				}
				itemindex ++;
			}
		}
	}
}

function cellatpixelcoord(layers, x, y)
{
	if(x < 0 || x > SCREEN_WIDTH || y < 0)
		return 1;
		
	if(y > SCREEN_HEIGHT)
		return 0;
	
	return cellattilecoord(layers, tiletopixel(x), pixeltotile(y));
};

function cellattilecoord(layers, tx, ty)
{
	if(tx < 0 || tx >= MAP.tw || ty < 0)
		return 1;
		
	if(ty >= MAP.th)
		return 0;
	
	return cells[layers][ty][tx];
};

function tiletopixel(tile)
{
	return tile * TILE;
};

function pixeltotile(pixel)
{
	return Math.floor(pixel/TILE);
};

function bound(value, min, max)
{
	if (value < min)
		return min
	if (value > max)
		return max;
		
	return value;
};

function run()
{
	
	
	var deltaTime = getDeltaTime();
	TotalTimePassed += deltaTime;
	
	DEMONSTRATION(deltaTime)
	
};

(function() {
	var onEachFrame;
	if (window.requestAnimationFrame) 
	{
		onEachFrame = function(cb) 
		{
			var _cb = function() 
			{ 
				cb();
				window.requestAnimationFrame(_cb); 
			}
		_cb();
		};
	}
	else if (window.mozRequestAnimationFrame)
	{
		onEachFrame = function(cb) 
		{
			var _cb = function() 
			{ 
				cb();	//mozilla
				window.mozRequestAnimationFrame(_cb); 
			}
		_cb();
		};
	}
	else 
	{
		onEachFrame = function(cb) //any ol browser
		{
			setInterval(cb, 1000 / 60);
		}
	}
	window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);


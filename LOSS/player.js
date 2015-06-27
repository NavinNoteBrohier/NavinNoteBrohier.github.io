//

var Robert =
{
	posX : 0,
	posY : 0,
	width : 20,
	height : 30,
	image : document.createElement("img")
}
	Robert.image.src = "robert.png"

var Player = function()
{
		context.save();
			context.translate(player.x,player.y);
			context.rotate(player.rotation);
			context.drawImage(player.image, -player.width/2, -player.height/2);
		context.restore();
}

function onKeyDown(event)
{	
		if (event.keyCode == KEY_DOWN)
		{ 	
			posY -= 1
		}

		if (event.keyCode == KEY_UP)
		{ 	 
			posY += 1
		}

		if (event.keyCode == KEY_RIGHT)
		{ 	
			posX += 1
		}

		if (event.keyCode == KEY_LEFT)
		{ 		
			posX -= 1
		}
		
		if(event.keyCode == KEY_SPACE)
		{
			
		}
}
function onKeyUp(evt)
{
	if (event.keyCode == KEY_DOWN)
	{ 	
		posY = 0;
	}

	if (event.keyCode == KEY_UP)
	{ 	 
		posY = 0;
	}

	if (event.keyCode == KEY_RIGHT)
	{ 	
		posX = 0;
	}

	if (event.keyCode == KEY_LEFT)
	{ 	
		posX = 0;
	}
}
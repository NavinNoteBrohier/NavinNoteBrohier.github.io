	if (player.PositionX < 128 )
		{
		player.PositionX = 128;
		}; 
	if (player.PositionX > CANVASWIDTH - 128)
	{
	player.PositionX = CANVASWIDTH - 128;
	}
	
	if (player.PositionY < 64*3 )
	{
	player.PositionY = 64*3;
	}; 
		
	if (player.PositionY > CANVASHEIGHT - 128)
	{
	player.PositionY = CANVASHEIGHT - 128;
	}
	
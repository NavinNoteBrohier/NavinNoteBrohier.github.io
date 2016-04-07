 
 
 var ISPLAYING = false;
 var MUSICPLAY = 0;
 
var music = new Howl
({
  urls: ['joel.wav']
})
 
function MUSIC()
 {
	 if(ISPLAYING == true)
	{
		music.stop();
		ISPLAYING = false;
	}
	
	if(ISPLAYING == false)
	{
		music.play()
		ISPLAYING = true
	}
 }
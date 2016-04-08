 
 
 var ISPLAYING = false;
 var MUSICPLAY = 0;
 
var music = new Howl
({
  urls: ['joel.wav'],
  loop: true
})
 
function MUSIC()
 {
	 if(ISPLAYING == true)
	{
		music.stop();
		ISPLAYING = false;
	}
	
	else if(ISPLAYING == false)
	{
		music.play()
		ISPLAYING = true
	}
 }
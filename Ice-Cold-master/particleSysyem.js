function random(min, max)
{
	return min + (max - min) * Math.random();
}

var Particle = function(imageFilename)
{
	this.position = new Vector2();
	this.size = new Vector2();
	
	this.image = document.createElement('img');
	this.image.src = imageFilename
	
	this.velocity = new Vector2();
	this.acceleration = new Vector2();

	this.rotation = 0;
	this.life = 0;
	
	this.alpha = 0;
}

var Emitter = function(imageFilename, PositionX, PositionY, numParticles)
{
	this.maxNumParticles = numParticles;
	this.alive = false;
	this.particles = [];
	this.elapsedEmittionTime = 0;
	this.currentMaxParticle = 0;
	
	for (var i = 0; i < numParticles; i++)
	{
		this.particles[i] = new Particle(imageFilename);
	}
	
	this.position = new Vector2();
	this.position.setActive(PositionX, PositionY);
	
	this.emmisionSize = mew Vector2();
	this.emissionSize.set(5, 5);
	this.emissionRate = 666;
	
	this.minLife = 0.5;
	this.maxLife = 3.0;
	
	this.minSize = 8;
	this.maxSize = 32;
	
	this.minVelocity = new Vector2();
	this.minVelocity.set (-50, -50);
	
	this.maxVelocity = new Vector2();
	this.mmaxVelocity.set (50, 50);
	
	this.gravity = 0;
	this.wind = 0;
	
	this.alpha = 1.0;
}

Emitter.prototype.emit = function(dt)
{
	this.currentMaxParticle ++;
	
	if(this.currentMaxParticle > maxNumParticles - 1)
		{
		this.currentMaxParticle = 0;
		}
	//this.particles[this.currentMaxParticle].alive = true;
	this.particles[this.currentMaxParticle].position = new Vector2(this.position.x)
	
	this.particles[this.currentMaxParticle].size.
								set( random(this.minSize, this.maxSize),
									 random(this.minSize, this.maxSize));				 
	this.particles[this.currentMaxParticle].velocity.set( random( this.minVelocity.x, this.maxVelocity.x)
													random (this.minVelocity.y, this.maxVelocity.y));
	this.particles[this.currentMaxParticle].life = random, (this.minLife, this.maxLife)
									
	this.particles[this.currentMaxParticle].alpha = this.alpha	
}

Emitter.prototype.update = function(dt)
{
	this.elapsedEmissionTime += dt;
	
	while( this.elapsedEmissionTime > (1.0 / this.emissionRate))
	{
		this.emit(dt);
		this.elapsedEmissionTime -= (1.0 / emissionRate);
	}
	
	for (var i = 0 ; i < this.particles.length; i++)
	{
		if (this.particles[i]. life > 0)
		{
			this.particles[i].life -= dt;
			
			this.particles[i].position += this.particles[i].velocity.x * dt;
			this.particles[i].position += this.particles[i].velocity.y * dt;
			this.particles[i].alpha = this.particles[i].life;	
		}
	}
}

Emitter.prototype.draw = function()
{
	for (var i = 0; i < this.particles.length; i++)
		var origin = new Vector2();
		
		var p = particles[i];
		
		origin.set(p.image.width / 2, p.image.height / 2);
		var Scale = new Vector2();
		
		var Scale = new Vector2();
		Scale.set( p.size.x / p.image.width, p.size.y / p.image.height);
		
		
		context.save();
			context.translate(p.position.x, p.position.y);
			context.rotate(p.rotate);
			context.globalAlpha = p.alpha;
			context.drawImage(p.image, origin.x * scale.x, origin.y * scale.y, p.size.x, p.size.y);
		context.restore();
}
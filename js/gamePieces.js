var width = 960;
var height = 540;

function Player() {
	this.score = 0;
	this.lives = 3;
	this.reset = function( num_lives ) {
		this.score = 0;
		this.lives = 3;
	};
}

function ball( width, height, color, x, y, type = "color" ) {
	this.width = width;
	this.height = height;
	this.spdX = 0;
	this.spdY = 0;
	this.x = x;
	this.y = y;
	this.free = false;
	this.streak = 0;
	if ( type == "image" ) {
		this.image = new Image();
		this.image.src = color;
	}
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	this.equation = {
		slope : this.spdX / this.spdY,
		y_intercept : null,
		//debug values
		point_in_distance : {
			x : null,
			y : null
		}
	};

	//empty edges, initialized in update function
	this.top_edge, this.bottom_edge, this.left_edge, this.right_edge;

	this.updateEquation = function() {
		//this.equation.slope = 
	}

	this.update = function() {
		if ( !this.free ) {
			this.x = ( myPaddle.x + ( myPaddle.width / 2 ) ) - (this.width / 2);
		 	this.y = myPaddle.y - this.height;
		}

		ctx = myGameArea.context;
		ctx.globalCompositeOperation='destination-over';
		if ( type == "color" ) {
			ctx.fillStyle = color;
			ctx.fillRect( this.x, this.y, this.width, this.height );
		} else if ( type == "image" ) {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}

		//draw the flight path line
		if ( GAME_SETTINGS.ball.flight_path == true && this.free ) {
			ctx.beginPath();
			ctx.moveTo( this.center.x, this.center.y );
			ctx.lineTo( this.equation.point_in_distance.x , this.equation.point_in_distance.y );
			ctx.stroke();
		}
	}

	this.newPos = function() {
		//only do this if the ball is free
		if ( this.free ) {
			this.x += this.spdX;
			this.y += this.spdY;
			//edges
			this.top_edge = this.y;
			this.bottom_edge = this.top_edge + this.height;
			this.left_edge = this.x;
			this.right_edge = this.left_edge + this.width;
			this.center.x = this.x + (this.width / 2);
			this.center.y = this.y + ( this.height / 2 );

			//calculating the slope of the ball
			this.equation.slope = this.spdY / this.spdX;

			//b = y - mx
			this.equation.y_intercept = this.center.y - ( this.equation.slope * this.center.x );

			//only calculate this if the setting is active
			if ( GAME_SETTINGS.ball.flight_path == true ) 
			{
				this.equation.point_in_distance.x = this.spdX * 10000;
				this.equation.point_in_distance.y = this.spdY * 10000;
			}
		}
	}
}

function block( width, height, color, x, y, health = 1, type = "color" ) {
	this.width = width;
	this.height = height;
	this.spdX = 0;
	this.spdY = 0;
	this.x = x;
	this.y = y;
	this.score = default_block_score;
	this.health = health;
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	if ( type == "image" ) {
		this.image = new Image();
		this.image.src = color;
	}

	this.sound = new sound( "assets/sound_hit.wav" );

	//edges
	this.top_edge = this.y;
	this.bottom_edge = this.top_edge + this.height;
	this.left_edge = this.x;
	this.right_edge = this.left_edge + this.width;

	this.update = function() {
		ctx = myGameArea.context;
		if ( type == "color" ) {
			ctx.fillStyle = color;
			ctx.fillRect( this.x, this.y, this.width, this.height );
		}
		else if ( type == "image" ) {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}

	this.newPos = function() {
		this.x += this.spdX;
		this.y += this.spdY;
	}

	this.collision = function( ball ) {
		var block = this;
		if (ball.x < block.x + block.width &&
			ball.x + ball.width > block.x &&
			ball.y < block.y + block.height &&
			ball.height + ball.y > block.y ) 
		{
			if ( isFinite( ball.equation.slope )  ) {
				// debug_current_block.x = this.x;
				// debug_current_block.y = this.y;
				// debug_current_block.width = this.width;
				// debug_current_block.height = this.height;
				slopeTrace( ball, block );
			} else {
				ball.spdY *= -1;
			}

			this.sound.play();
			return true;
		}
	}
}

function paddle() {
	this.width = 100; //default_paddle_width
	this.height = 7;
	this.x = (width / 2) - 50;
	this.y = height - 35;
	this.numberHits = 0;
	this.image = new Image();
	this.image.src = "assets/paddle.png";
	this.color = null;
	this.sound = new sound( "assets/sound_wall.wav" );
	this.sound.volume = .2;

	//mod effects
	this.is_stretched = false;

	//edges
	this.top_edge = this.y;
	this.bottom_edge = this.top_edge + this.height;
	this.left_edge = this.x;
	this.right_edge = this.left_edge + this.width;

	this.update = function() {
		ctx = myGameArea.context;

		if ( GAME_SETTINGS.paddle.papa_paddle ) {
			this.width = width;
			if ( mousePos.x < width / 2 ) {
				this.color = "#f00";
			} else if ( mousePos.x >= width / 2 ) {
				this.color = "#00f";
			}

			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( width / 2, 0 );
			ctx.lineTo( width / 2, height );
			ctx.strokeStyle = '#0f0';
			ctx.stroke();

			ctx.fillStyle = this.color;
			ctx.fillRect( this.x, this.y, this.width, this.height );
		}
		else {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		}


		//edges
		this.top_edge = this.y;
		this.bottom_edge = this.top_edge + this.height;
		this.left_edge = this.x;
		this.right_edge = this.left_edge + this.width;
	}

	//move the paddle as the mouse moves within the bounds of the canvas
	this.newPos = function( x, y ) {
		if ( GAME_SETTINGS.paddle.papa_paddle ) {
			this.x = 0;
			return;
		}

		if ( x <= myGameArea.canvas.width - this.width && x >= 0 )
			this.x = x;
	}

	//check if there was a collision with the paddle
	this.collision = function( obj ) {

		//if the left most side is less than the width of the paddle or the right most side is greater than the x position
		//and the bottom side is less that the top of the paddle
		if ( ( obj.x <= this.x + this.width && obj.x + obj.width >= this.x ) && ( obj.y + obj.height >= this.y && obj.y <= this.y + this.height ) ) {
			//move the ball to the top of the paddle so that it doesnt get stuck bouncing within the paddle
			obj.y = this.top_edge - obj.height;


			if ( GAME_SETTINGS.paddle.papa_paddle ) {
				obj.spdY *= -1;

				if ( mousePos.x < width / 2 && obj.spdX > 0 ) {
					obj.spdX *= -1;	
				} else if ( mousePos.x >= width / 2 && obj.spdX < 0  ) {
					obj.spdX *= -1;
				}
			} 

			else {
				//bounce the ball off the paddle based on it's position
				this.bounceBack(obj);
				if ( obj.free ) {
					++this.numberHits;
				}
			}

			if ( obj.free ) {
				this.sound.stop();
				this.sound.play();
			}

			return true;
		}
		return false;
	}

	this.bounceBack = function( obj ) {
		//first, get the location of the ball in relation to the length of the paddle and turn it into a percentage
		var total_paddle_width = this.width;
		var xpos = obj.x + (obj.width / 2);
		var xpercentage = (xpos - this.x) / total_paddle_width;
		//console.log( xpos + " - " + this.x + " / " + total_paddle_width + " = " + xpercentage + "%" );

		//now, find where the ball is along the length of the paddle
		//and determine how the ball will bound
		if ( xpercentage < .40 ) {
			//if the ball hits the left 40% of the paddle, multiply by the negative max speed by the location of the ball on the left 50% of the paddle
			var left_percentage = (.50 - xpercentage) / .50;
			obj.spdX = ( maxBallSpeed * left_percentage ) * -1;
			obj.spdY *= -1;
		} else if ( xpercentage >= .40 && xpercentage <= .60 ) {
			//if the ball hits the middle 20% of the paddle, 40%-60%, the ball just changes it's Y speed
			obj.spdY *= -1;
		} else if ( xpercentage > .60 ) {
			//if the ball hits the right 40% of the paddle, multiple by the max speed and the location of the ball of the right 50% of the paddle
			var right_percentage = (xpercentage - .50) / .50;
			obj.spdX = (maxBallSpeed * right_percentage);
			obj.spdY *= -1;
		}
	}
}

function wall( width, height, src, x, y, orientation ) {
	this.width = width;
	this.height = height;
	this.spdX = 0;
	this.spdY = 0;
	this.x = x;
	this.y = y;
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	this.image = new Image();
	this.image.src = src;
	this.orientation = orientation;

	this.cap_image = new Image();
	this.cap_image.src = "assets/wall_cap.png";

	//edges
	this.top_edge = this.y;
	this.bottom_edge = this.top_edge + this.height;
	this.left_edge = this.x;
	this.right_edge = this.left_edge + this.width;

	this.update = function() {
		var ctx = myGameArea.context;
		if ( this.orientation == "horizontal" ) {
			//draw the end caps
			ctx.drawImage(this.cap_image, this.x - (5/2), this.y - (5/2), 25, 25);
			ctx.drawImage(this.cap_image, (this.x + this.width) - 24, this.y - (5/2), 25, 25);
		} else {
			ctx.drawImage(this.cap_image, this.x - (5/2), this.y - (5/2), 25, 25);
			ctx.drawImage(this.cap_image, this.x - (5/2), (this.y + this.height) - 25, 25, 25);
		}

		ctx.beginPath();
	    var img = document.getElementById("wall_" + this.orientation);
	    var pat = ctx.createPattern( img, "repeat" );
	    ctx.save();
	    ctx.fillStyle = pat;
	    ctx.translate( this.x, this.y );
	    ctx.fillRect(0, 0, this.width, this.height);
	    ctx.restore();
	}

	this.newPos = function() {
		this.x += this.spdX;
		this.y += this.spdY;
	}

	this.collision = function( ball ) {
		var block = this;
		if (ball.x < block.x + block.width &&
			ball.x + ball.width > block.x &&
			ball.y < block.y + block.height &&
			ball.height + ball.y > block.y ) 
		{
			if ( isFinite( ball.equation.slope )  ) {
				slopeTrace( ball, block );
			} else {
				ball.spdY *= -1;
			}
		}
	}
}

function portal( width, height, src, x, y, tx, ty, endpoint = false ) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.image = new Image();
	this.image.src = src;
	this.teleporter = {
		x : tx,
		y : ty,
		is_endpoint : endpoint, //this portal is at the endpoint of another portal
		radius : this.width/2
	};
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};

	if ( this.teleporter.is_endpoint ) {
		//use these to spawn the ball correctly when the portal is the endpoint of another portal
		this.top_point = {
			x : tx + (this.width/2),
			y : ty
		};
		this.right_point = {
			x : tx + (this.width),
			y : ty + (this.height/2)
		};
		this.bottom_point = {
			x : tx + (this.width/2),
			y : ty + this.height
		};
		this.left_point = {
			x : tx,
			y : ty + (this.height/2)
		}
	}

	this.update = function() {
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		if ( !this.teleporter.is_endpoint ) {
			ctx.drawImage(this.image, this.teleporter.x, this.teleporter.y, 25, 25);
		}
	}

	this.collision = function( ball ) {
		// alert(ball);
		// alert(this);
		var block = this;
		//collision based on distance between center points of the objects
		if ( distanceBetweenPoints( block.center.x, block.center.y, ball.center.x, ball.center.y ) <= block.teleporter.radius ) 
		{
			if ( !block.teleporter.is_endpoint ) 
			{

				ball.x = block.teleporter.x;
				ball.y = block.teleporter.y;
			}

			else 
			{
			//if the ball is moving to the right
				if ( ball.spdX >= 0 ) 
				{
					if ( ball.spdY < 0 ) 
					{
						//the ball is moving up (actually moving down) the canvas
						var num = Math.floor(Math.random()*1) + 1;
						num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

						if ( num > 0 ) {
							ball.x = block.top_point.x;
							ball.y = block.top_point.y;
						} else {
							ball.x = block.right_point.x;
							ball.y = block.right_point.y;
						}
					} 

					else if ( ball.spdY > 0 ) 
					{
						//the ball is moving up (actually moving down) the canvas
						var num = Math.floor(Math.random()*1) + 1;
						num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

						if ( num > 0 ) {
							ball.x = block.bottom_point.x;
							ball.y = block.bottom_point.y;
						} else {
							ball.x = block.left_point.x;
							ball.y = block.left_point.y;
						}
					}
				} 

				else if ( ball.spdX < 0 ) 
				{
					if ( ball.spdY < 0 ) 
					{
						//the ball is moving up (actually moving down) the canvas
						var num = Math.floor(Math.random()*1) + 1;
						num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

						if ( num > 0 ) {
							ball.x = block.top_point.x;
							ball.y = block.top_point.y;
						} else {
							ball.x = block.left_point.x;
							ball.y = block.left_point.y;
						}
					} 

					else if ( ball.spdY > 0 ) 
					{
						//the ball is moving up (actually moving down) the canvas
						var num = Math.floor(Math.random()*1) + 1;
						num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

						if ( num > 0 ) {
							ball.x = block.bottom_point.x;
							ball.y = block.bottom_point.y;
						} else {
							ball.x = block.left_point.x;
							ball.y = block.left_point.y;
						}
					}
				}
			}
		}
	}
}

function streak( x, y, value, down = true ) {
	this.x = x;
	this.y = y;
	this.spdY = 2;
	this.time = 50;
	this.is_done = false;
	this.down = down;

	this.update = function() {
		if ( this.down ) {
			this.y += this.spdY;
		}
		else if ( !this.down ) {
			this.y += -this.spdY;
		}

		--this.time;
		if ( this.time == 0 ) {
			this.is_done = true;
		}

		myGameArea.context.font = "20px Bebas Neue";
		// var gradient = myGameArea.context.createLinearGradient(this.x, this.y, this.x, this.y + 100);
		// gradient.addColorStop("0.5","#FDD819");//
		// gradient.addColorStop("0","#E80505");
		myGameArea.context.fillStyle = "rgba(255, 0, 0, " + ( (this.time/50) ) + " )";
		myGameArea.context.textAlign = "center";
		myGameArea.context.fillText( value, this.x, this.y );
	}
}

function mod_1up( x, y ) {
	this.width = mods_default_width;
	this.height = mods_default_height;
	this.x = x - (this.width/2);
	this.y = y - (this.height/2);
	this.spdY = mods_default_fall_speed;
	this.image = new Image();
	this.image.src = "assets/mod_1up.png";

	this.is_active = true;

	this.update = function() {
		this.y += this.spdY;
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	this.activate = function() {
		this.spdY = 0;
		this.is_active = false;

		if ( player.lives < max_player_lives ) {
			++player.lives;
			UI.lives.up();
		} 

		streaks.push( new streak( this.x, this.y, "+50", false ) );
		UI.score.add(50);
		player.score += 50;

		this.x = -1000;
		this.y = -1000;
	}
}

function mod_stretch( x, y ) {
	this.width = mods_default_width;
	this.height = mods_default_height;
	this.x = x;
	this.y = y;
	this.spdY = mods_default_fall_speed;
	this.image = new Image();
	this.image.src = "assets/mod_stretch.png";
	this.interval = null;
	this.interval_counter = big_paddle_width;

	this.is_active = true;

	this.update = function() {
		this.y += this.spdY;
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	this.activate = function() {
		this.spdY = 0;
		this.is_active = false;

		if ( GAME_SETTINGS.paddle.papa_paddle ) {
			return;
		}

		myPaddle.is_stretched = true;

		if ( !myPaddle.is_stretched ) {
			myPaddle.width = big_paddle_width;
			myPaddle.image.src = "assets/paddle_big.png";
			//myPaddle.width = big_paddle_width;
			
			setTimeout( function() {
				myPaddle.width = default_paddle_width;
				myPaddle.image.src = "assets/paddle_big.png";
				myPaddle.is_stretched = false;
				this.is_active = false;
			}, 5000 );

		} else {
			streaks.push( new streak( this.x + (this.width/2), this.y + (this.height/2), "+50", false ) );
			UI.score.add(50);
			player.score += 50;
		}

		this.x = -1000;
		this.y = -1000;
	}
}

function mod_newBall( x, y ) {
	this.width = mods_default_width;
	this.height = mods_default_height;
	this.x = x;
	this.y = y;
	this.spdY = mods_default_fall_speed;
	this.image = new Image();
	this.image.src = "assets/mod_newball.png";

	this.is_active = true;

	this.update = function() {
		this.y += this.spdY;
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	this.activate = function() {
		this.spdY = 0;
		this.is_active = false;

		if ( !GAME_STATE.BALL_READY ) {
			balls.push( new ball( 15, 15, "assets/ball_bg_alternate.png", 0, 0, "image" ) );
			GAME_STATE.BALL_READY = true;
		} else {
			streaks.push( new streak( this.x, this.y, "+50", false ) );
			UI.score.add(50);
			player.score += 50;
		}

		this.x = -1000;
		this.y = -1000;
	}
}

block_score_multiplyer = 1;

function mod_x2( x, y ) {
	this.width = mods_default_width;
	this.height = mods_default_height;
	this.x = x;
	this.y = y;
	this.spdY = mods_default_fall_speed;
	this.image = new Image();
	this.image.src = "assets/mod_x2.png";
	this.value_boost = 2;

	this.is_active = true;

	this.update = function() {
		this.y += this.spdY;
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	this.activate = function() {
		this.spdY = 0;
		block_score_multiplyer = 2;
		document.getElementById("game").style.backgroundImage = "url('assets/mod_x2_bg.png')";

		setTimeout( function() {
			block_score_multiplyer = 1;
			this.is_active = false;
			document.getElementById("game").style.backgroundImage = "";
		}, 5000 );

		this.x = -1000;
		this.y = -1000;
	}
}

function sound( src ) {
	//https://www.w3schools.com/graphics/game_sound.asp
	this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild( this.sound );
    this.play = function(){
    	if ( GAME_SETTINGS.sound.on ) {
	        this.sound.play();
	    }
    }
    this.stop = function(){
        this.sound.pause();
    }
}
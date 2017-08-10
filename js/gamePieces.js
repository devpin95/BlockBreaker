var width = 960;
var height = 540;

function Player() {
	this.score = 0;
	this.lives = 3;
	this.levels_complete = [];
	this.level_scores = [];
	this.ready = false;
	this.reset = function( num_lives ) {
		this.score = 0;
		this.lives = 3;
		if ( !this.ready ) {
			this.initialize();
		}
	};
	this.initialize = function() {
		for ( var i = 0; i < GAME_STATE.HIGHEST_LEVEL; ++i ) {
			this.levels_complete.push( false );
			this.level_scores.push( 0 );
		}
		this.ready = true;
	}
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

function paddle( width = 100, height = 7, x1 = 0, y1 = 0, x2 = 0, y2 = 0, rail = "horizontal" ) {
	this.width = width; //default_paddle_width
	this.height = height;
	this.x = x;
	this.y = y;
	this.numberHits = 0;
	this.image = new Image();
	this.image.src = "assets/paddle.png";
	this.color = null;
	this.sound = new sound( "assets/sound_wall.wav" );
	this.is_main = false;

	this.track = {
		rail : rail,
		first_bound : {
			x : x1,
			y: y1
		},
		second_bound : {
			x : x2,
			y: y2
		}
	}

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

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( width / 2, this.y );
				ctx.lineTo( (width / 2) - 100, this.y - 100 );
				ctx.strokeStyle = '#000';
				ctx.stroke();

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( (width / 2) - 100, this.y - 100 );
				ctx.lineTo( (width / 2) - 100, this.y - 85 );
				ctx.strokeStyle = '#000';
				ctx.stroke();

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( (width / 2) - 100, this.y - 100 );
				ctx.lineTo( (width / 2) - 85, this.y - 100 );
				ctx.strokeStyle = '#000';
				ctx.stroke();

			} else if ( mousePos.x >= width / 2 ) {
				this.color = "#00f";

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( width / 2, this.y );
				ctx.lineTo( (width / 2) + 100, this.y - 100 );
				ctx.strokeStyle = '#000';
				ctx.stroke();

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( (width / 2) + 100, this.y - 100 );
				ctx.lineTo( (width / 2) + 100, this.y - 85 );
				ctx.strokeStyle = '#000';
				ctx.stroke();

				ctx.globalCompositeOperation='destination-over';
				ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
				ctx.beginPath();
				ctx.moveTo( (width / 2) + 100, this.y - 100 );
				ctx.lineTo( (width / 2) + 85, this.y - 100 );
				ctx.strokeStyle = '#000';
				ctx.stroke();
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

		if ( this.track.rail === "horizontal" ) {
			if ( x <= this.track.left_bound.x - (this.width/2) && x >= (this.width/2) )
				this.x = x - (this.width/2);
		}
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

		myGameArea.context.font = "30px Bebas Neue";
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
	// this.interval = null;
	this.interval_counter = 0;
	this.active_time = 500;
	this.count_down_block = new block( 0, 0, "#27ae60", 0, 0, 0, "color" );
	this.shrinkify = false;
	this.stretchify = false;

	this.is_active = true;

	this.update = function() {
		this.y += this.spdY;
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

		if ( myPaddle.is_stretched ) {
			if ( this.stretchify ) {
				this.interval_counter += 10;
				myPaddle.width = default_paddle_width + this.interval_counter;

				if ( this.interval_counter >= big_paddle_width - default_paddle_width ) {
					this.stretchify = false;
					this.interval_counter = this.active_time;
				}
			}
			else if ( !this.shrinkify && !this.stretchify ) {
				//console.log("1");
				--this.interval_counter;

				this.count_down_block.width = width * ( this.interval_counter / 500 );
				this.count_down_block.x = (width/2) - (this.count_down_block.width / 2);

				if ( this.interval_counter == 0 ) {
					this.shrinkify = true;
					this.count_down_block.x = -100;
					this.count_down_block.y = -100;
					this.interval_counter = big_paddle_width - default_paddle_width;
				}

				this.count_down_block.update();
			} else if ( this.shrinkify ) {
				this.interval_counter -= 5;
				myPaddle.width = default_paddle_width + this.interval_counter;

				if ( this.interval_counter <= 0 ) {
					myPaddle.is_stretched = false;
					this.shrinkify = false;
					this.interval_counter = 0;
					this.is_active = false;
					//SCENES.GAME_SCENE.stretch_mod_ptr = null;
				}
			}
		}
	}

	this.activate = function() {
		this.spdY = 0;
		//this.is_active = false;

		if ( GAME_SETTINGS.paddle.papa_paddle ) {
			this.activate = false;
			return;
		}

		if ( !myPaddle.is_stretched ) {
			myPaddle.is_stretched = true;
			this.stretchify = true;
			//myPaddle.width = big_paddle_width;
			myPaddle.image.src = "assets/paddle_big.png";

			this.count_down_block.x = myPaddle.x;
			this.count_down_block.y = height - 3;
			this.count_down_block.height = 3;

		} else {
			streaks.push( new streak( this.x + (this.width/2), this.y + (this.height/2), "+50", false ) );
			UI.score.add(50);
			player.score += 50;
		}

		this.x = -1000;
		this.y = -1000;
	}

	this.reset = function() {
		//alert("RESETING");
		if (!this.stretchify && !this.shrinkify) {
			this.interval_counter = this.active_time;
		}
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

		setTimeout( function(e) {
			return function() {
				block_score_multiplyer = 1;
				e.is_active = false;
				document.getElementById("game").style.backgroundImage = "";
			}
		}(this), 5000 );

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

//BUTTON PARAMETERS:
//type = "image"
//v1 = default image
//v2 = cursor-hover image
//
//type = "text"
//v1 = text value
//v2 = font size
function button( x1, x2, y1, y2, type = "image", v1 = "", v2 = "", callback = function(){ alert("CLICKED"); }, ff = "arial", c1 = "#000", c2 = null ) {
	this.x = x1;
	this.y = y1;
	this.width = 0;
	this.height = 0;
	// width, height, color, x, y, health = 1, type = "color"
	this.bb = new block(this.width, this.height, "rgba(255, 0, 0, 0)", this.x, this.y, 1, "color");

	if ( type === "image" ) {
		this.v1 = new Image();
		this.v2 = new Image();
	} else if ( type === "text" ) {
		this.v1 = v1;
		this.v2 = parseInt(v2);
	}
	this.effects = {
		hover_x : x2,
		hover_y : y2,
		hover_width : 0,
		hover_height : 0
	}
	this.text_vals = {
		color1 : c1,
		color2 : ( (c2 == null) ? c1 : c2 ),
		font_face : ff,
		font_width_measured : false,	//use this to measure the text width after all it's display values have been set
		text_baseline : "middle",	//https://stackoverflow.com/questions/14289331/html5-canvas-doesnt-fill-text-at-coordinates-0-0
		text_align : "center",
		position : {
			x : x1,
			y : y1
		}
	};

	this.text_vals.color2 = ( (c2 == null) ? c1 : c2 );

	//alert("c1: " + this.text_vals.color1 + "\nc2: " + this.text_vals.color2 );

	this.type = type;
	this.hovering = false;
	this.action = callback;

	if ( type === "image" ) {

		this.v1.onload = function(e) {
			return function() {
				e.width = e.v1.width;
				e.height = e.v1.height;
			}
		}(this);
		this.v1.src = v1;

		this.v2.onload = function(e) {
			return function() {
				e.effects.hover_width = e.v2.width;
				e.effects.hover_height = e.v2.height;
			}
		}(this);
		this.v2.src = v2;
	}

	else if ( type === "text" ) {
		this.width = myGameArea.context.measureText(v1).width;
		this.height = parseInt(v2);
		this.bb.height = this.height;
		this.y -= (this.height/2);
		this.bb.y = this.y;
	}

	this.update = function() {
		ctx = myGameArea.context;

		//HOVERING
		if ( this.hovering ) 
		{
			document.body.style.cursor = "pointer";
			if ( this.type === "image" ) {
				ctx.drawImage(this.v2, this.effects.hover_x, this.effects.hover_y, this.effects.hover_width, this.effects.hover_height);
			}
			else if ( this.type === "text" ) {

				ctx.font = (this.v2 + (this.v2 * .1) ) + "px " + this.text_vals.font_face;
				ctx.textBaseline = this.text_vals.text_baseline; //https://stackoverflow.com/questions/14289331/html5-canvas-doesnt-fill-text-at-coordinates-0-0
				myGameArea.context.textAlign = this.text_vals.text_align;
				var gradient = ctx.createLinearGradient(this.text_vals.position.x, this.y,  this.text_vals.position.x, this.y + this.height);
				gradient.addColorStop( "0", this.text_vals.color1 );
				gradient.addColorStop( "0.75", this.text_vals.color2 );
				myGameArea.context.fillStyle = gradient;
				ctx.fillText( v1, this.text_vals.position.x, this.text_vals.position.y );

				this.bb.update();
			}
		} 

		//DEFAULT
		else 
		{
			document.body.style.cursor = "";
			if ( this.type === "image" ) {
				ctx.drawImage(this.v1, this.x, this.y, this.width, this.height);
			}
			else if ( this.type === "text" ) {
				ctx.font = this.v2 + "px " + this.text_vals.font_face;
				ctx.textBaseline = this.text_vals.text_baseline; //https://stackoverflow.com/questions/14289331/html5-canvas-doesnt-fill-text-at-coordinates-0-0
				ctx.textAlign = this.text_vals.text_align;
				//ctx.fillStyle = this.text_vals.color1;
				var gradient = ctx.createLinearGradient( this.text_vals.position.x, this.y,  this.text_vals.position.x, this.y + this.height);
				gradient.addColorStop( "0", this.text_vals.color1 );
				gradient.addColorStop( "0.75", this.text_vals.color2 );
				ctx.fillStyle = gradient;
				ctx.fillText( v1, this.text_vals.position.x, this.text_vals.position.y );

				// ctx.beginPath();
				// ctx.moveTo(this.text_vals.position.x, this.y);
				// ctx.lineTo(this.text_vals.position.x,this.y + this.height);
				// ctx.stroke();

				this.bb.update();
			}
		}

		if ( this.type === "text" && this.text_vals.font_width_measured == false ) {
			this.width = myGameArea.context.measureText(v1).width;
			this.text_vals.font_width_measured = true;
			this.bb.width = this.width;
			this.x = this.x - (this.width / 2);
			this.bb.x = this.x;
		}
	}
}

function menu() {
	this.buttons = [];
	this.add = function( x1, x2, y1, y2, type, image, image_hover, callback, ff, color1, color2 ) {
		this.buttons.push( new button( x1, x2, y1, y2, type, image, image_hover, callback, ff, color1, color2 ) );
	}

	this.update = function() {
		for ( var i = 0; i < this.buttons.length; ++i ) {
			this.buttons[i].update();
		}
	}

	this.hovering = function( x, y ) {
		for ( var i = 0; i < this.buttons.length; ++i ) {
			if (x < this.buttons[i].x + this.buttons[i].width && x > this.buttons[i].x && y < this.buttons[i].y + this.buttons[i].height && y > this.buttons[i].y )  {
				//hovering
				this.buttons[i].hovering = true;
			} else {
				this.buttons[i].hovering = false;
			}
		}
	}

	this.click = function( x, y ) {
		for ( var i = 0; i < this.buttons.length; ++i ) {
			if (x < this.buttons[i].x + this.buttons[i].width && x > this.buttons[i].x && y < this.buttons[i].y + this.buttons[i].height && y > this.buttons[i].y )  {
				this.buttons[i].action();
				return true;
			}
		}

		return false;
	}
}
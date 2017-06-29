var width = 960;
var height = 540;

function Player() {
	this.score = 0;
	this.lives = 3;
	this.reset = function( num_lives ) {
		this.score = 0;
		this.lives = num_lives;
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
	if ( type == "image" ) {
		this.image = new Image();
		this.image.src = color;
	}
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	this.equation = {
		slope : this.x / this.y,
		y_intercept : null,
		//debug values
		// point_in_distance : {
		// 	x : null,
		// 	y : null
		// }
	};

	//empty edges, initialized in update function
	this.top_edge, this.bottom_edge, this.left_edge, this.right_edge;

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
	this.health = health;
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	if ( type == "image" ) {
		this.image = new Image();
		this.image.src = color;
	}

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
				slopeTrace( ball, block );
			} else {
				ball.spdY *= -1;
			}

			return true;
		}
	}
}

function paddle() {
	this.width = 100;
	this.height = 7;
	this.x = width / 2 - 50;
	this.y = height - 35;
	this.numberHits = 0;
	this.update = function() {
		ctx = myGameArea.context;
		ctx.fillStyle = "#000";
		ctx.fillRect( this.x, this.y, this.width, this.height );
	}

	//move the paddle as the mouse moves within the bounds of the canvas
	this.newPos = function( x, y ) {
		if ( x <= myGameArea.canvas.width - 100 && x >= 0 )
			this.x = x;
	}

	//check if there was a collision with the paddle
	this.collision = function( obj ) {
		//if the left most side is less than the width of the paddle or the right most side is greater than the x position
		//and the bottom side is less that the top of the paddle
		if ( ( obj.x <= this.x + this.width && obj.x + obj.width >= this.x ) && ( obj.y + obj.height >= this.y && obj.y <= this.y + this.height ) ) {
			this.bounceBack(obj);
			//dbgr.add( this.numberHits + " PADDLE HIT");
			if ( obj.free ) {
				++this.numberHits;
			}
		}
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

function wall( x, y ) {
	this.width = 75;
	this.height = 13;
	this.spdX = 0;
	this.spdY = 0;
	this.x = x;
	this.y = y;
	this.is_edge_piece = false;
	this.center = {
		x : this.x + (this.width / 2),
		y : this.y + ( this.height / 2 )
	};
	this.image = new Image();
	this.image.src = default_wall_image;

	//edges
	this.top_edge = this.y;
	this.bottom_edge = this.top_edge + this.height;
	this.left_edge = this.x;
	this.right_edge = this.left_edge + this.width;

	this.update = function() {
		ctx = myGameArea.context;
		var ptrn = ctx.createPattern(this.image, 'repeat'); // Create a pattern with this image, and set it to "repeat".
		ctx.fillStyle = ptrn;
		//ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.fillRect(this.x, this.y, this.width, this.height)
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

			// dbgr.add("WALL");

			// var new_x = Math.round( ball.center.x );
			// var new_y = Math.round( ball.center.y );

			// for ( var i = 0; i < 10; ++i ) {
			// 	--new_x;
			// 	new_y = ( ball.equation.slope * new_x ) + ball.equation.y_intercept;

			// 	//ball has a positive slope and is moving to the right
			// 	if ( ball.equation.slope >= 0 && ball.spdX >= 0 ) {
			// 		//ball can only hit bottom or left
			// 		if ( new_x <= block.x && block.is_edge_piece ) {
			// 			//left
			// 			ball.spdX *= -1;
			// 			ball.x = block.x - ball.width;
			// 			cont = true;
			// 		} 
			// 		else/* if ( new_y >= block.y + block.height )*/ {
			// 			//bottom
			// 			ball.spdY *= -1;
			// 			ball.y = block.y + block.height;
			// 			cont = true;
			// 		}
			// 	}
			// 	//ball has a positive slope and is moving to the left
			// 	else if ( ball.equation.slope >= 0 && ball.spdX <= 0 ) {
			// 		//ball can only hit top or right
			// 		if ( new_x >= block.x + block.width && block.is_edge_piece ) {
			// 			//right
			// 			ball.spdX *= -1;
			// 			ball.x = block.x + block.width;
			// 			cont = true;
			// 		} 
			// 		else/* if ( new_y <= block.y )*/ {
			// 			//top
			// 			ball.spdY *= -1;
			// 			ball.y = block.y + ball.height;
			// 			cont = true;
			// 		}
			// 	}
			// 	//ball has a negative slope and is moving to the right
			// 	else if ( ball.equation.slope <= 0 && ball.spdX >= 0 ) {
			// 		//ball can only hit top or left
			// 		if ( new_x <= block.x && block.is_edge_piece ) {
			// 			//left
			// 			ball.spdX *= -1;
			// 			ball.x = block.x + ball.width;
			// 			cont = true;
			// 		} 
			// 		else/* if ( new_y <= block.y )*/ {
			// 			//top
			// 			ball.spdY *= -1;
			// 			ball.y = block.y + ball.height;
			// 			cont = true;
			// 		}
			// 	}//ball has a negative slope and is moving to the left
			// 	else if ( ball.equation.slope <= 0 && ball.spdX <= 0 ) {
			// 		//ball can only hit bottom or right
			// 		if ( new_x >= block.x + block.width && block.is_edge_piece ) {
			// 			//right
			// 			ball.spdX *= -1;
			// 			ball.x = block.x + block.width;
			// 			cont = true;
			// 		} 
			// 		else /*if ( new_y >= block.y + block.height )*/ {
			// 			//bottom
			// 			ball.spdY *= -1;
			// 			ball.y = block.y + block.height;
			// 			cont = true;
			// 		}
			// 	} else if ( ball.equation.slope == Number.POSITIVE_INFINITY ) {
			// 		ball.spdY *= -1;
			// 	 	cont = true;
			// 	}

			// 	if ( cont == true ) {
			// 		break;
			// 	} else {
			// 		break;
			// 	}
			// }
		}
	}
}
player = new Player();
myPaddle = new paddle();

var gameScene = {
	setup : function() {
		GAME_STATE.reset();
		player.reset();
		balls = [];
		blocks = [];
		walls = [];

		balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
		GAME_STATE.BALL_READY = true;

  		levels[GAME_STATE.LEVEL]();

        this.scene_ready = true;
        //this.timer_interval = setInterval( UI.timer.countTime, 1000 );
	},

	scene_ready : false,

	draw_level : true,
	draw_level_timer : 0,

	timer_interval : null,

	run : function() {
		if ( this.draw_level ) 
		{
			if ( this.draw_level_timer == 100 ) {
				this.draw_level = false;
				this.timer_interval = setInterval( UI.timer.countTime, 1000 );
			}

			++this.draw_level_timer;

			var xpos = (width/2) - (100 - this.draw_level_timer);

			myGameArea.context.font = "70px Bebas Neue";
			var gradient = myGameArea.context.createLinearGradient(10, 500, 10, 50);
			gradient.addColorStop("0.5","#FDD819");//
			gradient.addColorStop("0","#E80505");
			// Fill with gradient
			myGameArea.context.fillStyle=gradient;
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText("LEVEL " + (GAME_STATE.LEVEL + 1), xpos , height - 200);

		}
		
		else if ( !GAME_STATE.IS_PAUSED && !GAME_STATE.WON && !GAME_STATE.LIFE_LOST ) 
		{
			if ( GAME_STATE.BALL_READY ) {
				myGameArea.context.font = "20px Arial";
				myGameArea.context.fillStyle = "#000";
				myGameArea.context.textAlign = "center";
				myGameArea.context.fillText( "Click to launch ball", myPaddle.x + ( myPaddle.width / 2 ), myPaddle.y - 40 );
			}

			myPaddle.newPos( mousePos.x, mousePos.y );
			myPaddle.update();

			if ( block_to_delete != -1 ) {
				blocks.splice( block_to_delete, 1 );
				block_to_delete = -1;
				player.score += 100;
				UI.score.add( 100 );
			}

			for ( var i = 0; i < balls.length; ++i ) 
			{
				for ( var j = 0; j < portals.length; ++j ) {
					portals[j].update();
					portals[j].collision( balls[i] );
				}
				myGameArea.collision( balls[i] );

				//check if the ball went past the bottom of the canvas
				if ( myGameArea.bottom_hit ) {
					//if it did, remove the ball and deal with the player data
					GAME_STATE.STOP_TIME = true;
					balls.splice( i, 1 );

					if ( balls.length == 0 ) {
						GAME_STATE.LIFE_LOST = true;
						--player.lives;
					}
					myGameArea.bottom_hit = false;


					if ( blocks.length == 10 ) {
						GAME_STATE.BALL_READY = true;
						balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
					}

					return;
				}
			

				myPaddle.collision( balls[i] );

				for ( var j = 0; j < blocks.length; ++j ) {
					if ( blocks[j].collision( balls[i] ) ) {
						block_to_delete = j; //prepare block to be deleted on next frame
					}

					blocks[j].update();
				}

				//check for collisions with walls
				for ( var k = 0; k < walls.length; ++k ) {
					walls[k].collision( balls[i] );
					walls[k].update();
				}

				balls[i].newPos();
				balls[i].update();
			}

			if ( blocks.length == 0 ) {
				GAME_STATE.WON = true;

				player.score += bonuses[0]( player.lives );
				player.score += bonuses[1]( UI.timer.total_time );
				if ( player.lives == 3 ) {
					player.score += bonuses[2]( );
				}
				player.score += bonuses[3]( myPaddle.numberHits );
			} 
		} 

		//handle pausing
		// else if ( GAME_STATE.IS_PAUSED && !GAME_STATE.WON ) 
		// {
		// 	myGameArea.context.font = "50px Arial";
		// 	myGameArea.context.fillStyle = "#8e44ad";
		// 	myGameArea.context.textAlign = "center";
		// 	myGameArea.context.fillText( "Paused", width/2, height/2 );
		// } 

		//handle a win
		else if ( !GAME_STATE.IS_PAUSED && GAME_STATE.WON ) 
		{
			this.scene_ready = false;
			GAME_STATE.ACTIVE_SCENE = SCENES.LEVEL_CLEAR_SCENE;
			GAME_STATE.reset();
			clearInterval(this.timer_interval);
		} 

		//handle a life lost
		else if ( GAME_STATE.LIFE_LOST && !GAME_STATE.IS_PAUSED && !GAME_STATE.WON ) 
		{
			//Lost a life
			if ( player.lives >= 0 && !GAME_STATE.BALL_READY ) {
				if ( balls.length == 0 ) {
					//make a new ball
					balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
					GAME_STATE.BALL_READY = true;
				}

				GAME_STATE.LIFE_LOST = false; 
				GAME_STATE.STOP_TIME = false;

				document.getElementById( "b" + ( player.lives + 1 ) ).className = "ball_deactivated";
			} 

			//Lost the game
			else {
				this.scene_ready = false;
				//this.draw_level = true;
				GAME_STATE.ACTIVE_SCENE = SCENES.GAME_OVER_SCENE;
				GAME_STATE.reset();
				clearInterval(this.timer_interval);
			}
		}
	},

	clicked : function( e ) {
		if ( GAME_STATE.WON ) {
    		GAME_STATE.WON = false;
    	} else if ( GAME_STATE.BALL_READY && !GAME_STATE.IS_PAUSED && !this.draw_level ) {
    		//there is a ball ready to be launched
			GAME_STATE.BALL_READY = false; 

			//go through the balls array and find the first one that is not free
			for ( var i = 0; i < balls.length; ++i ) {
				if ( !balls[i].free ) {
					balls[i].free = true;
					balls[i].spdY = maxBallSpeed;
					break;
				}
			}
    	}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.STOP_TIME = true;
			GAME_STATE.change_scene( SCENES.PAUSED_SCENE );
		}
	},

	reset_level : function( ) {
		this.scene_ready = false;
		GAME_STATE.reset();
		UI.reset();
		clearInterval(this.timer_interval);
		this.draw_level = true;
		this.draw_level_timer = 0;
		//this.setup();
	}
}
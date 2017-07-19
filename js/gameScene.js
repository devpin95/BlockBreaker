player = new Player();
myPaddle = new paddle();

var gameScene = {
	setup : function() {
		GAME_STATE.reset();
		player.reset();
		//balls = blocks = walls = portals = streaks = mods = paddles = [];
		balls = [];
		blocks = [];
		walls = [];
		portals = [];
		streaks = [];
		mods = [];
		paddles = [];

		myPaddle.width = default_paddle_width;

		//initialize game sounds
		snd_block_hit = new sound( "assets/sound_hit.wav" );

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
			//document.body.style.cursor = "";
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

			if ( GAME_SETTINGS.cursor.hidden ) {
	        	document.body.style.cursor = "none";
	        }

			if ( GAME_STATE.BALL_READY ) {
				myGameArea.context.font = "20px Arial";
				myGameArea.context.fillStyle = "#000";
				myGameArea.context.textAlign = "center";
				myGameArea.context.fillText( "Click to launch ball", myPaddle.x + ( myPaddle.width / 2 ), myPaddle.y - 40 );
			}

			myPaddle.newPos( mousePos.x, mousePos.y );
			myPaddle.update();

			//delete a block that was marked for deletion on the previous frame
			if ( block_to_delete != -1 ) {

				//randomly generate a number to determine if a mod should be dropped

				var num = Math.floor( (Math.random() * 10 + ( 50 * mods.length )) );

				if ( num >= 0 && num <= mod_list.length - 1 ) {
					//alert(num);
					mods.push( new mod_list[num] );
					mods[ mods.length - 1 ].x = blocks[block_to_delete].center.x;
					mods[ mods.length - 1 ].y = blocks[block_to_delete].center.y;
				}

				player.score += default_block_score * block_score_multiplyer;
				UI.score.add( default_block_score * block_score_multiplyer );
				blocks.splice( block_to_delete, 1 );
				block_to_delete = -1;
			}

			//update the mods array
			for ( var i = 0; i < mods.length; ++i ) {
				mods[i].update();

				//check if the mod is passed the bottom of the canvas or is no longer active
				if ( !mods[i].is_active || mods[i].y >= height ) {
					//delete the mod
					mods.splice( i, 1 );
					continue;
				}

				//check for a collision with the paddle
				if ( myPaddle.collision( mods[i] ) ) {
					mods[i].activate();
				}
			}

			//update the streak items
			for ( var i = 0; i < streaks.length; ++i ) {
				streaks[i].update();
				if ( streaks[i].is_done ) {
					streaks.splice( i, 1 );
				}
			}

			//main loops
			for ( var i = 0; i < balls.length; ++i ) 
			{
				//check for collisions with portals
				for ( var j = 0; j < portals.length; ++j ) {
					portals[j].update();	//update each portal
					portals[j].collision( balls[i] );
				}

				//check for a collision with the game area walls
				myGameArea.collision( balls[i] );

				//check if the ball went past the bottom of the canvas
				if ( myGameArea.bottom_hit ) {
					//if it did, remove the ball and deal with the player data
					//GAME_STATE.STOP_TIME = true;
					balls.splice( i, 1 );

					//if there are no more free balls, a life is lost
					if ( balls.length == 0 && !GAME_STATE.BALL_READY ) {
						GAME_STATE.LIFE_LOST = true;
						--player.lives;						
					}
					myGameArea.bottom_hit = false;

					//go to the next frame
					continue;
				}
			
				//check for a collision with a paddle
				//if a ball hit the paddle, reset it's streak
				if ( myPaddle.collision( balls[i] ) ) {
					balls[i].streak = 0;
				}

				//check for collisions with the blocks
				for ( var j = 0; j < blocks.length; ++j ) {

					//if a ball is colliding with a block, prepare that block for deletion and increment the balls streak
					if ( blocks[j].collision( balls[i] ) ) {
						block_to_delete = j; //prepare block to be deleted on next frame
						++balls[i].streak;
						if ( balls[i].streak >= 2 ) {
							streaks.push( new streak( blocks[ block_to_delete ].center.x, blocks[ block_to_delete ].center.y, "+" + ( streak_multiplyer * balls[i].streak * block_score_multiplyer ) ) );
							player.score += streak_multiplyer * balls[i].streak * block_score_multiplyer;
							UI.score.add( streak_multiplyer * balls[i].streak * block_score_multiplyer );
						}
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

		//handle a win
		else if ( !GAME_STATE.IS_PAUSED && GAME_STATE.WON ) 
		{
			document.body.style.cursor = "";
			this.scene_ready = false;
			GAME_STATE.ACTIVE_SCENE = SCENES.LEVEL_CLEAR_SCENE;
			GAME_STATE.reset();
			clearInterval(this.timer_interval);
		} 

		//handle a life lost
		else if ( GAME_STATE.LIFE_LOST && !GAME_STATE.IS_PAUSED && !GAME_STATE.WON ) 
		{
			if ( player.lives >= 0 ) {
				if ( balls.length == 0 ) {
					//make a new ball
					balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
					GAME_STATE.BALL_READY = true;
					mods = []; //clear the mods that are falling
					UI.lives.down();	
				}

				GAME_STATE.LIFE_LOST = false; 
			} 

			//Lost the game
			else if ( player.lives < 0 ) {
				document.body.style.cursor = "";
				this.scene_ready = false;
				//this.draw_level = true;
				GAME_STATE.ACTIVE_SCENE = SCENES.GAME_OVER_SCENE;
				GAME_STATE.reset();
				clearInterval(this.timer_interval);
			} 
			else 
			{
				//alert("IN HERE FOR SOME REASON");
				GAME_STATE.LIFE_LOST = false;
			}
		}
	},

	clicked : function( e ) {
		if ( GAME_STATE.WON ) {
    		GAME_STATE.WON = false;
    	} 

    	else if ( this.draw_level ) 
    	{
    		this.draw_level = false;
    		this.draw_level_timer = 0;
    	}

    	else if ( GAME_STATE.BALL_READY && !GAME_STATE.IS_PAUSED && !this.draw_level ) 
    	{
    		//there is a ball ready to be launched
			GAME_STATE.BALL_READY = false; 

			//go through the balls array and find the first one that is not free
			for ( var i = 0; i < balls.length; ++i ) {
				if ( !balls[i].free ) {
					balls[i].free = true;
					balls[i].spdY = -maxBallSpeed;

					if ( GAME_SETTINGS.paddle.papa_paddle ) 
					{
						var spd_x = Math.floor(Math.random()*2) == 1 ? 1 : -1;
						balls[i].spdX = spd_x * maxBallSpeed;
					} 

					else 
					{
						var spd_x = (Math.random() * maxBallSpeed) + 1;
						spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
						balls[i].spdX = spd_x;
					}

					break;
				}
			}
    	}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			document.body.style.cursor = "";
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
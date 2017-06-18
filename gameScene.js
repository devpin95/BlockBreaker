var gameScene = {
	run : function() {
		if ( !GAME_STATE.IS_PAUSED && !GAME_STATE.WON && !GAME_STATE.LIFE_LOST ) 
		{
			if ( GAME_STATE.BALL_READY ) {
				myGameArea.context.font = "20px Arial";
				myGameArea.context.fillStyle = "#000";
				myGameArea.context.textAlign = "center";
				myGameArea.context.fillText( "Click to launch ball", myPaddle.x + ( myPaddle.width / 2 ), myPaddle.y - 40 );
			}

			myPaddle.update();

			if ( block_to_delete != -1 ) {
				blocks.splice( block_to_delete, 1 );
				block_to_delete = -1;
			}

			for ( var i = 0; i < balls.length; ++i ) 
			{

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
						block_to_delete = j;
						//blocks.splice( j, 1 );
						player.score += 100;
						document.getElementById("score").innerHTML = player.score;

						// if ( blocks.length == 40 ) {
						// 	GAME_STATE.BALL_READY = true;
						// 	balls.push( new ball( 15, 15, default_ball_image, 0, 0, "image" ) );
						// }

						//break;
					}
					blocks[j].update();
				}

				balls[i].newPos();
				balls[i].update();
			}

			if ( blocks.length == 0 ) {
				GAME_STATE.WON = true;

				player.score += bonuses[0]( player.lives );
				player.score += bonuses[1]( total_time );
				if ( player.lives == 3 ) {
					player.score += bonuses[2]( );
				}
				player.score += bonuses[3]( myPaddle.numberHits );
			} 
		} 

		//handle pausing
		else if ( GAME_STATE.IS_PAUSED && !GAME_STATE.WON ) 
		{
			myGameArea.context.font = "50px Arial";
			myGameArea.context.fillStyle = "#8e44ad";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Paused", width/2, height/2 );
		} 

		//handle a win
		else if ( !GAME_STATE.IS_PAUSED && GAME_STATE.WON ) 
		{
			
			GAME_STATE.ACTIVE_SCENE = SCENES.levelClearScene;
			// setTimeout( function() {

			// 	myGameArea.clear();

			// 	//var main_text_size = ( (pulse_text_time / 100) + 50 );
			// 	// myGameArea.context.font = "50px Arial";
			// 	// myGameArea.context.fillStyle = "#8e44ad";
			// 	// myGameArea.context.textAlign = "center";
			// 	// myGameArea.context.fillText( "Level " + (level + 1), width/2, height/2 - 100 );

			// 	levels[level]( );
			// 	GAME_STATE.reset();
			// 	player.reset( 2 );
			// 	document.getElementById( "b1").className = "";
			// 	document.getElementById( "b2").className = "";
			// 	document.getElementById( "b3").className = "";
			// 	document.getElementById("timer").innerHTML = "0:00"
			// 	document.getElementById("score").innerHTML = 0;

			// 	balls = [];
			// 	blocks = [];

			// }, 4000);

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
				console.log( player.lives + 1  );
				//document.getElementById("lives").innerHTML = player.lives;
				//setInterval( function(){ life_lost = false; stop_time = false; }, 1000 );
			} 

			//Lost the game
			else {
				//( (pulse_text_time / 100) + 50 )
				myGameArea.context.font = "50px Arial";
				myGameArea.context.fillStyle = "#8e44ad";
				myGameArea.context.textAlign = "center";
				myGameArea.context.fillText( "Game Over, loser", width/2, height/2 - 100 );
			}
		}

		// if ( pulse_text_time < 1000 ) {
		// 	++pulse_text_time;
		// } else if ( pulse_text_time > -1000 ) {
		// 	++pulse_text_time;
		// }
	},
	clicked : function( e ) {
		if ( GAME_STATE.WON ) {
    		GAME_STATE.WON = false;
    	} else if ( GAME_STATE.BALL_READY && !GAME_STATE.IS_PAUSED ) {
			GAME_STATE.BALL_READY = false; 

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

	}
}
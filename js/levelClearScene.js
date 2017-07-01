var level_info = {
	score : 0,
	starting_lives: 0,
	lives_left : 0,
	time_lowerbound : 30,
	time_upperbound : 60,
	paddle_lowerbound : 20,
	paddle_upperbound : 40,
	score_bonus : 0
};

var retry_image = "assets/retry_button.png";
var retry_image_hover = "assets/retry_button_hover.png";
var next_image = "assets/next_button.png";
var next_image_hover = "assets/next_button_hover.png";
var RETRY;
var NEXT;

var bonuses_image;
var bonuses_image_path = "assets/level_cleared.png";

var levelClearScene = {
	setup : function() {
		bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
		RETRY = new block( 60, 30, retry_image, ( myGameArea.canvas.width / 2 ) - 30, 400, 0, "image" );
		NEXT = new block( 143, 40, next_image, ( myGameArea.canvas.width / 2 ) - 71, 440, 0, "image" );

		this.scene_ready = true;
	},

	scene_ready : false,

	run : function() {
		//myGameArea.clear();
		// player.score += bonuses[0]( player.lives );
		// player.score += bonuses[1]( total_time );
		// player.score += bonuses[2]( );
		// player.score += bonuses[3]( myPaddle.numberHits );

		//var main_text_size = ( (pulse_text_time / 100) + 50 );
		// myGameArea.context.font = "50px Arial";
		// myGameArea.context.fillStyle = "#8e44ad";
		// myGameArea.context.textAlign = "center";
		// myGameArea.context.fillText( "Level Cleared!", width/2, height/2 - 150 );

		// myGameArea.context.font = "30px Arial";
		// myGameArea.context.fillStyle = "#000";
		// myGameArea.context.textAlign = "center";
		// myGameArea.context.fillText( "Time: " + minutes + ":" + time_spacer + seconds, width/2 - 100, height/2 - 100 );

		// myGameArea.context.font = "30px Arial";
		// myGameArea.context.fillStyle = "#000";
		// myGameArea.context.textAlign = "center";
		// myGameArea.context.fillText( "Score: " + player.score, width/2 + 100, height/2 - 100 );

		//---------------------------------------------------------------------------------------------------------
		//bonuses

		// myGameArea.context.font = "25px Arial";
		// myGameArea.context.fillStyle = "#f00";
		// myGameArea.context.textAlign = "center";
		// myGameArea.context.fillText( "Bonuses", width/2, height/2 );

		if (mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			//hovering
			RETRY.image.src = retry_image_hover;
			RETRY.height = 40;
			RETRY.width = 80;
			RETRY.x = ( myGameArea.canvas.width / 2 ) - 40;
			RETRY.y = 395;

		}
		else
		{
			RETRY.image.src = retry_image;
			RETRY.height = 30;
			RETRY.width = 60;
			RETRY.x = ( myGameArea.canvas.width / 2 ) - 30;
			RETRY.y = 400;
		}

		if (mousePos.x < NEXT.x + NEXT.width &&
			mousePos.x > NEXT.x &&
			mousePos.y < NEXT.y + NEXT.height &&
			mousePos.y > NEXT.y ) 
		{
			//hovering
			NEXT.image.src = next_image_hover;
			NEXT.height = 50;
			NEXT.width = 179;
			NEXT.x = ( myGameArea.canvas.width / 2 ) - 90;
			NEXT.y = 435;

		}
		else
		{
			NEXT.image.src = next_image;
			NEXT.height = 40;
			NEXT.width = 143;
			NEXT.x = ( myGameArea.canvas.width / 2 ) - 71;
			NEXT.y = 440;
		}

		bonuses_image.update();

		//holds the current line of bonuses
		var next_line = 0;
		var starting_y = 200;

		if ( player.lives > 0 ) {
			//player.score += bonuses[0]( player.lives );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Lives: +" + bonuses[0](player.lives), width/2, starting_y  + (40 * next_line) );
			++next_line;
		}

		if ( UI.timer.total_time < 60 ) {
			//player.score += bonuses[1]( total_time );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Time: +" + bonuses[1](total_time), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		if ( player.lives == 3 ) {
			//player.score += bonuses[2]( );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Flawless: +" + bonuses[2](), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		if ( myPaddle.numberHits <= 20 ) {
			//player.score += bonuses[3]( myPaddle.numberHits );
			myGameArea.context.font = "18px Arial";
			myGameArea.context.fillStyle = "#000";
			myGameArea.context.textAlign = "center";
			myGameArea.context.fillText( "Paddle Hits: +" + bonuses[3]( myPaddle.numberHits ), width/2, starting_y + (40 * next_line) );
			++next_line;
		}

		RETRY.update();
		NEXT.update();
	},

	clicked : function() {
		//check if the mouse position is inside the RETRY button
		if (mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
			player.reset();
			UI.reset();
		} 

		else if (
			mousePos.x < NEXT.x + NEXT.width &&
			mousePos.x > NEXT.x &&
			mousePos.y < NEXT.y + NEXT.height &&
			mousePos.y > NEXT.y ) 
		{
			if ( GAME_STATE.LEVEL != GAME_STATE.HIGHEST_LEVEL ) {
				++GAME_STATE.LEVEL;
				GAME_STATE.change_scene( SCENES.GAME_SCENE );
				player.reset();
				UI.reset();
			}
		}
	},

	button_press : function( e ) {
		
	}
};
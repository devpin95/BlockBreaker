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

var bonuses_image;
var bonuses_image_path = "assets/level_cleared.png";

var levelClearScene = {
	setup : function() {
		bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
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

		if ( total_time < 60 ) {
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
	},

	clicked : function() {
		++GAME_STATE.LEVEL;
	},

	button_press : function( e ) {
		
	}
};
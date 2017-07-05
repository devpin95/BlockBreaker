var play_image = "assets/play_button.png";
var play_image_hover = "assets/play_button_hover.png";
var settings_image = "assets/settings_button.png";
var settings_image_hover = "assets/settings_button_hover.png";

var PLAY, LOGO;

var mainMenuScene = {
	setup : function() {
		bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
		PLAY = new block( 60, 30, play_image, ( myGameArea.canvas.width / 2 ) - 30, 100, 0, "image" );
		LOGO = new block( 260, 40, "assets/logo.png", ( myGameArea.canvas.width / 2 ) - 130, 75, 0, "image" );
		SETTINGS = new block( 90, 30, settings_image, ( myGameArea.canvas.width / 2 ) - 45, 190, 0, "image" );

		this.menu_balls.push( new ball( 15, 15, default_ball_image, width / 2, height / 2, "image" ) );
		this.menu_balls[0].spdX = maxBallSpeed;
		this.menu_balls[0].spdY = maxBallSpeed;
		this.menu_balls[0].free = true;

		this.scene_ready = true;
	},

	scene_ready : false,

	menu_balls : [],

	run : function() {

		LOGO.update();

		if (mousePos.x < PLAY.x + PLAY.width &&
			mousePos.x > PLAY.x &&
			mousePos.y < PLAY.y + PLAY.height &&
			mousePos.y > PLAY.y ) 
		{
			//hovering
			PLAY.image.src = play_image_hover;
			PLAY.height = 40;
			PLAY.width = 70;
			PLAY.x = ( myGameArea.canvas.width / 2 ) - 35;
			PLAY.y = 145;

		}
		else
		{
			PLAY.image.src = play_image;
			PLAY.height = 30;
			PLAY.width = 60;
			PLAY.x = ( myGameArea.canvas.width / 2 ) - 30;
			PLAY.y = 150;
		}
		PLAY.update();

		if (mousePos.x < SETTINGS.x + SETTINGS.width &&
			mousePos.x > SETTINGS.x &&
			mousePos.y < SETTINGS.y + SETTINGS.height &&
			mousePos.y > SETTINGS.y ) 
		{
			//hovering
			SETTINGS.image.src = settings_image_hover;
			SETTINGS.height = 40;
			SETTINGS.width = 110;
			SETTINGS.x = ( myGameArea.canvas.width / 2 ) - 55;
			SETTINGS.y = 185;

		}
		else
		{
			SETTINGS.image.src = settings_image;
			SETTINGS.height = 30;
			SETTINGS.width = 90;
			SETTINGS.x = ( myGameArea.canvas.width / 2 ) - 45;
			SETTINGS.y = 190;
		}
		SETTINGS.update();

		for ( var i = 0; i < this.menu_balls.length; ++i ) {
			myGameArea.collision( this.menu_balls[i] );

			if ( myGameArea.bottom_hit ) {
				this.menu_balls[i].y = height - this.menu_balls[i].height;
				this.menu_balls[i].spdY *= -1;
				myGameArea.bottom_hit = false;
			}

			this.menu_balls[i].newPos();
			this.menu_balls[i].update();
		}
	},

	clicked : function() {
		//check if the mouse position is inside the RETRY button
		if (mousePos.x < PLAY.x + PLAY.width &&
			mousePos.x > PLAY.x &&
			mousePos.y < PLAY.y + PLAY.height &&
			mousePos.y > PLAY.y ) 
		{
			this.menu_balls = [];
			this.scene_ready = false;
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		} 

		else if (
			mousePos.x < SETTINGS.x + SETTINGS.width &&
			mousePos.x > SETTINGS.x &&
			mousePos.y < SETTINGS.y + SETTINGS.height &&
			mousePos.y > SETTINGS.y ) 
		{
			GAME_STATE.change_scene( SCENES.SETTINGS_SCENE );
		}

		else 
		{
			this.menu_balls.push( new ball( 15, 15, default_ball_image, mousePos.x, mousePos.y, "image" ) );

			//https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
			var spd_x = (Math.random() * maxBallSpeed) + 1;
			spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
			this.menu_balls[this.menu_balls.length - 1].spdX = spd_x;
			this.menu_balls[this.menu_balls.length -1].spdY = maxBallSpeed;
			this.menu_balls[this.menu_balls.length - 1].free = true;
		}
	},

	button_press : function( e ) {
		
	}
};
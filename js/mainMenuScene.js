var play_image = "assets/play_button.png";
var play_image_hover = "assets/play_button_hover.png";
var settings_image = "assets/settings_button.png";
var settings_image_hover = "assets/settings_button_hover.png";

var PLAY, LOGO;

var mainMenuScene = {
	setup : function() {
		//bonuses_image = new block( 437, 139, bonuses_image_path, width/2 - 219, 25, 0, "image" );
		LOGO = new block( 260, 40, "assets/logo.png", ( myGameArea.canvas.width / 2 ) - 130, 75, 0, "image" );
		// PLAY = new block( 60, 30, play_image, ( myGameArea.canvas.width / 2 ) - 30, 100, 0, "image" );
		// SETTINGS = new block( 90, 30, settings_image, ( myGameArea.canvas.width / 2 ) - 45, 190, 0, "image" );

		this.menu = new menu();
		//x1, x2, y1, y2, type, image, image_hover, callback
		this.menu.add( ( myGameArea.canvas.width / 2 ) - 30, ( myGameArea.canvas.width / 2 ) - 35, 150, 145, "image", "assets/play_button.png", "assets/play_button_hover.png", function() {
			this.menu_balls = [];
			this.scene_ready = false;
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		} );
		this.menu.add( ( myGameArea.canvas.width / 2 ) - 45, ( myGameArea.canvas.width / 2 ) - 55, 190, 185, "image", "assets/settings_button.png", "assets/settings_button_hover.png", function() {
			GAME_STATE.change_scene( SCENES.SETTINGS_SCENE );
		} );

		this.menu_balls.push( new ball( 15, 15, default_ball_image, width / 2, height / 2, "image" ) );
		var spd_x = (Math.random() * maxBallSpeed) + 1;
		spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
		this.menu_balls[0].spdX = spd_x;

		this.menu_balls[0].spdY = Math.floor(Math.random()*2) == 1 ? maxBallSpeed : -maxBallSpeed;

		var pos_x = (Math.random() * ( width - 45 )) + 45;
		this.menu_balls[0].x = pos_x;

		var pos_y = (Math.random() * ( height - 45 )) + 45;
		this.menu_balls[0].y = pos_y;

		this.menu_balls[0].free = true;

		this.scene_ready = true;
	},

	menu : null,
	scene_ready : false,

	menu_balls : [],

	run : function() {

		LOGO.update();
		this.menu.hovering( mousePos.x, mousePos.y );
		this.menu.update();

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

		if ( !this.menu.click( mousePos.x, mousePos.y ) )
		{
			this.menu_balls.push( new ball( 15, 15, default_ball_image, mousePos.x, mousePos.y, "image" ) );

			//https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
			var spd_x = (Math.random() * maxBallSpeed) + 1;
			spd_x *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
			this.menu_balls[this.menu_balls.length - 1].spdX = spd_x;
			this.menu_balls[this.menu_balls.length -1].spdY = Math.floor(Math.random()*2) == 1 ? maxBallSpeed : -maxBallSpeed;
			this.menu_balls[this.menu_balls.length - 1].free = true;
		}
	},

	button_press : function( e ) {
		
	}
};
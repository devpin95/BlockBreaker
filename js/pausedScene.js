var paused_header_image = "assets/paused.png";
var settings_image = "assets/settings_button.png";
var settings_image_hover = "assets/settings_button_hover.png";

var PAUSED_HEADER;
var SETTINGS;

var pausedScene = {
	setup : function( ) {
		PAUSED_HEADER = new block( 122, 50, paused_header_image, ( myGameArea.canvas.width / 2 ) - 61, 75, 0, "image" );
		SETTINGS = new block( 90, 30, settings_image, ( myGameArea.canvas.width / 2 ) - 45, 150, 0, "image" );
		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {
		// myGameArea.context.font = "50px Arial";
		// myGameArea.context.fillStyle = "#8e44ad";
		// myGameArea.context.textAlign = "center";
		// myGameArea.context.fillText( "Paused", width/2, 200 );

		PAUSED_HEADER.update();


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
			SETTINGS.y = 145;

		}
		else
		{
			SETTINGS.image.src = settings_image;
			SETTINGS.height = 30;
			SETTINGS.width = 90;
			SETTINGS.x = ( myGameArea.canvas.width / 2 ) - 45;
			SETTINGS.y = 150;
		}
		SETTINGS.update();

		myGameArea.context.font = "15px Arial";
		myGameArea.context.fillStyle = "#000";
		myGameArea.context.textAlign = "center";
		myGameArea.context.fillText( "Press Escape to Return", width/2, height - 50 );
	},

	clicked : function() {
		if (mousePos.x < SETTINGS.x + SETTINGS.width &&
			mousePos.x > SETTINGS.x &&
			mousePos.y < SETTINGS.y + SETTINGS.height &&
			mousePos.y > SETTINGS.y ) 
		{
			GAME_STATE.change_scene( SCENES.SETTINGS_SCENE );
		}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.STOP_TIME = false;
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		}
	}
}
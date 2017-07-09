var paused_header_image = "assets/paused.png";
var settings_image = "assets/settings_button.png";
var settings_image_hover = "assets/settings_button_hover.png";
var retry_image = "assets/retry_button.png";
var retry_image_hover = "assets/retry_button_hover.png";
var menu_image = "assets/menu_button.png";
var menu_image_hover = "assets/menu_button_hover.png";

var PAUSED_HEADER;
var SETTINGS;
var RETRY;
var MENU;

var pausedScene = {
	setup : function( ) {
		PAUSED_HEADER = new block( 122, 50, paused_header_image, ( myGameArea.canvas.width / 2 ) - 61, 75, 0, "image" );
		RETRY = new block( 60, 30, retry_image, ( myGameArea.canvas.width / 2 ) - 30, 150, 0, "image" );
		SETTINGS = new block( 90, 30, settings_image, ( myGameArea.canvas.width / 2 ) - 45, 190, 0, "image" );
		MENU = new block( 60, 30, menu_image, ( myGameArea.canvas.width / 2 ) - 71, 480, 0, "image" );
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
			RETRY.y = 145;

		}
		else
		{
			RETRY.image.src = retry_image;
			RETRY.height = 30;
			RETRY.width = 60;
			RETRY.x = ( myGameArea.canvas.width / 2 ) - 30;
			RETRY.y = 150;
		}
		RETRY.update();

		if (mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			//hovering
			MENU.image.src = menu_image_hover;
			MENU.height = 40;
			MENU.width = 80;
			MENU.x = ( myGameArea.canvas.width / 2 ) - 40;
			MENU.y = 225;

		}
		else
		{
			MENU.image.src = menu_image;
			MENU.height = 30;
			MENU.width = 60;
			MENU.x = ( myGameArea.canvas.width / 2 ) - 30;
			MENU.y = 230;
		}
		MENU.update();

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
		} else if (
			mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			 GAME_STATE.change_scene( SCENES.RETRY_LEVEL_PROMPT );
		} else if (
			mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
			SCENES.GAME_SCENE.reset_level();
		}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.STOP_TIME = false;
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		}
	}
}
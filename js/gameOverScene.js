var over_header_image = "assets/game_over.png";
var retry_image = "assets/retry_button.png";
var retry_image_hover = "assets/retry_button_hover.png";
var menu_image = "assets/menu_button.png";
var menu_image_hover = "assets/menu_button_hover.png";

var OVER_HEADER;
var MENU;
var RETRY;

var gameOverScene = {
	setup : function( ) {
		OVER_HEADER = new block( 304, 50, over_header_image, ( GAMEAREA.canvas.width / 2 ) - 152, 75, 0, "image" );
		RETRY = new block( 60, 30, retry_image, ( GAMEAREA.canvas.width / 2 ) - 30, 150, 0, "image" );
		MENU = new block( 60, 30, menu_image, ( GAMEAREA.canvas.width / 2 ) - 71, 480, 0, "image" );
		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {
		// GAMEAREA.context.font = "50px Arial";
		// GAMEAREA.context.fillStyle = "#8e44ad";
		// GAMEAREA.context.textAlign = "center";
		// GAMEAREA.context.fillText( "Paused", width/2, 200 );

		OVER_HEADER.update();


		if (mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			//hovering
			MENU.image.src = menu_image_hover;
			MENU.height = 40;
			MENU.width = 80;
			MENU.x = ( GAMEAREA.canvas.width / 2 ) - 40;
			MENU.y = 185;

		}
		else
		{
			MENU.image.src = menu_image;
			MENU.height = 30;
			MENU.width = 60;
			MENU.x = ( GAMEAREA.canvas.width / 2 ) - 30;
			MENU.y = 190;
		}
		MENU.update();

		if (mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			//hovering
			RETRY.image.src = retry_image_hover;
			RETRY.height = 40;
			RETRY.width = 80;
			RETRY.x = ( GAMEAREA.canvas.width / 2 ) - 40;
			RETRY.y = 145;

		}
		else
		{
			RETRY.image.src = retry_image;
			RETRY.height = 30;
			RETRY.width = 60;
			RETRY.x = ( GAMEAREA.canvas.width / 2 ) - 30;
			RETRY.y = 150;
		}
		RETRY.update();
	},

	clicked : function() {
		if (mousePos.x < MENU.x + MENU.width &&
			mousePos.x > MENU.x &&
			mousePos.y < MENU.y + MENU.height &&
			mousePos.y > MENU.y ) 
		{
			GAME_STATE.change_scene( SCENES.MAIN_MENU_SCENE );
			SCENES.GAME_SCENE.reset_level();
		} else if (
			mousePos.x < RETRY.x + RETRY.width &&
			mousePos.x > RETRY.x &&
			mousePos.y < RETRY.y + RETRY.height &&
			mousePos.y > RETRY.y ) 
		{
			GAME_STATE.change_scene( SCENES.RETRY_LEVEL_PROMPT );
			//SCENES.GAME_SCENE.reset_level();
		}
	},

	button_press : function( e ) {

	}
}
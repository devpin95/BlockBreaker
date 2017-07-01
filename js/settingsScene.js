var settings_header_image = "assets/settings.png"
var flight_path_activated = "assets/settings_fp_activated.png";
var flight_path_activated_hover = "assets/settings_fp_activated_hover.png";
var flight_path_deactivated = "assets/settings_fp_deactivated.png";
var flight_path_deactivated_hover = "assets/settings_fp_deactivated_hover.png";

var SETTINGS_HEADER;
var FLIGHT_PATH;

var settingsScene = {
	setup : function( ) {
		SETTINGS_HEADER = new block( 122, 50, settings_header_image, ( myGameArea.canvas.width / 2 ) - 61, 75, 0, "image" );
		FLIGHT_PATH = new block( 500, 80, flight_path_deactivated, ( myGameArea.canvas.width / 2 ) - 250, 125, 0, "image" );

		//set the correct state of the flight path setting
		if ( GAME_SETTINGS.ball.flight_path == true ) {
			FLIGHT_PATH.image.src = flight_path_activated;
		}

		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {

		if (mousePos.x < FLIGHT_PATH.x + FLIGHT_PATH.width &&
			mousePos.x > FLIGHT_PATH.x &&
			mousePos.y < FLIGHT_PATH.y + FLIGHT_PATH.height &&
			mousePos.y > FLIGHT_PATH.y ) 
		{
			//hovering
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				//hovering and active
				FLIGHT_PATH.image.src = flight_path_activated_hover;
			} else {
				//hovering and deactivated
				FLIGHT_PATH.image.src = flight_path_deactivated_hover;
			}
		} else {
			//not hovering
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				//not hovering and active
				FLIGHT_PATH.image.src = flight_path_activated;
			} else {
				//not hovering and deactivated
				FLIGHT_PATH.image.src = flight_path_deactivated;
			}
		}

		SETTINGS_HEADER.update();
		FLIGHT_PATH.update();

		myGameArea.context.font = "15px Arial";
		myGameArea.context.fillStyle = "#000";
		myGameArea.context.textAlign = "center";
		myGameArea.context.fillText( "Press Escape to Return", width/2, height - 50 );
	},

	clicked : function() {
		if (mousePos.x < FLIGHT_PATH.x + FLIGHT_PATH.width &&
			mousePos.x > FLIGHT_PATH.x &&
			mousePos.y < FLIGHT_PATH.y + FLIGHT_PATH.height &&
			mousePos.y > FLIGHT_PATH.y ) 
		{
			//toggle the flight path setting and the activated/deactivated image
			if ( GAME_SETTINGS.ball.flight_path == true ) {
				GAME_SETTINGS.ball.flight_path = false;
				FLIGHT_PATH.image.src = flight_path_deactivated;
			} else {
				GAME_SETTINGS.ball.flight_path = true;
				FLIGHT_PATH.image.src = flight_path_activated;
			}
		}
	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.change_scene( GAME_STATE.PREVIOUS_SCENE );
		}
	}
}
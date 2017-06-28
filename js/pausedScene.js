var pausedScene = {
	setup : function( ) {
		this.scene_ready = true;
	},

	scene_ready : false,

	run : function( ) {
		myGameArea.context.font = "50px Arial";
		myGameArea.context.fillStyle = "#8e44ad";
		myGameArea.context.textAlign = "center";
		myGameArea.context.fillText( "Paused", width/2, height/2 );
	},

	clicked : function() {

	},

	button_press : function( e ) {
		if ( e.keyCode == KEYCODES.ESCAPE ) {
			GAME_STATE.change_scene( SCENES.GAME_SCENE );
		}
	}
}
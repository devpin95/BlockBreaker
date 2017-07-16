//global values
// var width = 960;
// var height = 540;
var fps = 1000/50; //50 fps

//default object values
var max_player_lives = 3;
var default_paddle_width = 100;
var big_paddle_width = 175;
var maxBallSpeed = 9;
var default_block_width = 75; //50 || 75
var default_block_height = 35; //20 || 35
var streak_multiplyer = 50;
var mods_default_fall_speed = 3;
var mods_default_width = 50;
var mods_default_height = 14;

var default_ball_image = "assets/ball_bg.png";
// var default_block_image = "assets/big_block_bg.jpg";
// var default_wall_image = "assets/wall_bg.png";

//helper elements
var partition_block;

//game pieces
var myPaddle;
var player;

var balls = [];
var blocks = [];
var walls = [];
var portals = [];
var streaks = [];
var mods = [];
var mod_list = [ 
		mod_1up, 
		mod_stretch, 
		mod_newBall 
	];

var SCENES = {
	MAIN_MENU_SCENE : mainMenuScene,			//main menu
	GAME_SCENE : gameScene,						//game logic
	PAUSED_SCENE : pausedScene,					//pause screen
	RETRY_LEVEL_PROMPT : retryPromptScene,		// |-> retry level prompt screen
	SETTINGS_SCENE : settingsScene,				// |-> settings screen
	LEVEL_CLEAR_SCENE : levelClearScene,		//level cleared screen
	GAME_OVER_SCENE : gameOverScene
};

//game states
var GAME_STATE = {
	IS_PAUSED : false,
	WON : false,
	LIFE_LOST : false,
	BALL_READY : false,
	STOP_TIME : false,
	LEVEL : 0,
	HIGHEST_LEVEL : 10,
	PREVIOUS_SCENE : null,
	ACTIVE_SCENE : SCENES.GAME_SCENE,
	reset : function() {
		this.IS_PAUSED = false;
		this.WON = false;
		this.LIFE_LOST = false;
		this.BALL_READY = false;
		this.STOP_TIME = false;
	}, 
	change_scene : function( next_scene ) {
		var swap = function (x){return x};
		this.PREVIOUS_SCENE = swap(this.ACTIVE_SCENE, this.ACTIVE_SCENE = next_scene);
	}
}

//gameplay variables
var timer = 0;
var multiplyer = 0;

var bonuses = [
	/*Lives*/
	function( val ) {
		return 500 * val;
	},
	/*Time*/ 
	function( val ) {
		if ( val <= 30 ) {
			return (30 - val) * 100;
		} else if ( val < 60 ) {
			return ( 60 - val ) * 10;
		} else return 0;
	},
	/*Flawless*/ 
	function( ) {
		return 2000;
	},
	/*Paddle Hits*/
	function( val ) {
		if ( val <= 30 ) {
			return val * 100;
		}
		if ( val <= 40 ) {
			return val * 10;
		} else return 0;
	}
];

var KEYCODES = {
	ESCAPE : 27,
	ENTER : 13
}

var mousePos = {
	x : width / 2,
	y : height / 2
};

var GAME_SETTINGS = {
	ball : {
		flight_path : false
	}
}
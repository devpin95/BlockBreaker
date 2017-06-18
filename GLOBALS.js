//global values
var width = 960;
var height = 540;
var fps = 1000/50; //50 fps

//default object values
var maxBallSpeed = 7;
var default_block_width = 75; //50 || 75
var default_block_height = 35; //20 || 35
var default_ball_image = "ball_bg.png";
var default_block_image = "big_block_bg.jpg";

//helper elements
var partition_block;

//game pieces
var myGamePiece;
var myPaddle;
var myBlock;
var player;

var balls = [];
var blocks = [];

var SCENES = {
	//MENU_SCENE : menuScene,
	GAME_SCENE : gameScene,
	LEVEL_CLEAR_SCENE : levelClearScene
}

//game states
var GAME_STATE = {
	IS_PAUSED : false,
	WON : false,
	LIFE_LOST : false,
	BALL_READY : false,
	STOP_TIME : false,
	LEVEL : 0,
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
		// this.PREVIOUS_SCENE = this.ACTIVE_SCENE;
		// this.ACTIVE_SCENE = next_scene;
	}
}

// var isPaused = false;
// var won = false;
// var life_lost = false;
// var ball_ready = false;
// var stop_time = false;
// var level = 0;

//gameplay variables
var timer = 0;
var multiplyer = 0;
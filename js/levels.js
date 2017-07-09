var levels = [
	level_one,
	level_two,
  level_three,
  level_four,
  level_five,
  level_six,
  level_seven
];

function buildLevel( level ) {
  for ( var i = 0; i < level.blocks.length; ++i ) {
    if ( level.blocks[i].type != "wall" ) {
      //width, height, color, x, y, health = 1, type = "color"
      blocks.push( new block( 
          level.blocks[i].width,
          level.blocks[i].height,
          level.blocks[i].src,
          level.blocks[i].x,
          level.blocks[i].y,
          level.blocks[i].health,
          "image"
      ) );
    } else {
      //width, height, src, x, y
      walls.push( new wall( 
          level.blocks[i].width,
          level.blocks[i].height,
          level.blocks[i].src,
          level.blocks[i].x,
          level.blocks[i].y,
          level.blocks[i].orientation
      ) );
    }
  }
}

function level_one() {
  var level = {
     "bonuses": {
          "time_lower_bound": 60,
          "timer_upper_bound": 90,
          "paddle_lower_bound": 20,
          "paddle_upper_bound": 40
     },
     "blocks": [
          {
               "type": "big_block",
               "x": 442.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          }
     ]
  }

  buildLevel( level );
}

function level_two() {
	var level = {
     "bonuses": {
          "time_lower_bound": 60,
          "timer_upper_bound": 90,
          "paddle_lower_bound": 20,
          "paddle_upper_bound": 40
     },
     "blocks": [
          {
               "type": "big_block",
               "x": 442.5,
               "y": 25.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          }
     ]
  }

  buildLevel( level );
}

function level_three(){
     var level = {
     "bonuses": {
          "time_lower_bound": 60,
          "timer_upper_bound": 90,
          "paddle_lower_bound": 20,
          "paddle_upper_bound": 40
     },
     "blocks": [
          {
               "type": "small_block",
               "x": 442.5,
               "y": 31.449996948242188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 48.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 101.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 118.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 43.899993896484375,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 193.89999389648438,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 193.89999389648438,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 43.899993896484375,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 101.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 118.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 48.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 31.449996948242188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 839.8999938964844,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 689.8999938964844,
               "y": 66.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 689.8999938964844,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 839.8999938964844,
               "y": 83.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 48.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 31.449996948242188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 101.44999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 118.94999694824219,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 166.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 183.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 236.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 118.89999389648438,
               "y": 253.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 193.89999389648438,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 193.89999389648438,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 43.899993896484375,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 43.899993896484375,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 166.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 183.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 236.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 253.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 166.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 183.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 236.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 764.8999938964844,
               "y": 253.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 689.8999938964844,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 689.8999938964844,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 839.8999938964844,
               "y": 201.4499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 839.8999938964844,
               "y": 218.9499969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_bg.jpg",
               "health": 1
          }
     ]
  }

  buildLevel( level );
}

function level_four() {
  var level = {
     "bonuses": {
          "time_lower_bound": 60,
          "timer_upper_bound": 90,
          "paddle_lower_bound": 20,
          "paddle_upper_bound": 40
     },
     "blocks": [
          {
               "type": "wall",
               "x": 94.39999389648438,
               "y": 260,
               "width": 718,
               "height": 20,
               "src": "assets/wall_bg.png",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 415.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 490.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 565.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 640.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 715.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 340.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 265.8999938964844,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 190.89999389648438,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 115.89999389648438,
               "y": 225,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 415.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 490.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 565.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 640.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 190.89999389648438,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 265.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 340.8999938964844,
               "y": 190,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 415.8999938964844,
               "y": 155,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 340.8999938964844,
               "y": 155,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 265.8999938964844,
               "y": 155,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 490.8999938964844,
               "y": 155,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 565.8999938964844,
               "y": 155,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 490.8999938964844,
               "y": 120,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 415.8999938964844,
               "y": 120,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 340.8999938964844,
               "y": 120,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 415.8999938964844,
               "y": 85,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_bg.jpg",
               "health": 1
          }
     ]
  }

  buildLevel( level );
}

function level_five() {
  var level = {
          "bonuses": {
               "time_lower_bound": 60,
               "timer_upper_bound": 90,
               "paddle_lower_bound": 20,
               "paddle_upper_bound": 40
          },
          "blocks": [
               {
                    "type": "wall",
                    "x": -0.100006103515625,
                    "y": 378.1999969482422,
                    "width": 347,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 612.8999938964844,
                    "y": 378.1999969482422,
                    "width": 347,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 150.89999389648438,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 225.89999389648438,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 225.89999389648438,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 150.89999389648438,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 203.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 168.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 168.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 203.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 75.89999389648438,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 150.89999389648438,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 150.89999389648438,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 733.8999938964844,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 658.8999938964844,
                    "y": 343.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 658.8999938964844,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 733.8999938964844,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 733.8999938964844,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 733.8999938964844,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 238.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 308.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 273.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 133.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 0.899993896484375,
                    "y": 98.19999694824219,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 203.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 808.8999938964844,
                    "y": 168.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 133.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 98.19999694824219,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 168.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 883.8999938964844,
                    "y": 203.1999969482422,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_bg.jpg",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 6,
                    "y": 37.19999694824219,
                    "width": 948,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 0.899993896484375,
                    "y": 17.199996948242188,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 883.8999938964844,
                    "y": 17.199996948242188,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               }
          ]
     }

  buildLevel( level );
}

function level_six() {
  var level = {
          "bonuses": {
               "time_lower_bound": 60,
               "timer_upper_bound": 90,
               "paddle_lower_bound": 20,
               "paddle_upper_bound": 40
          },
          "blocks": [
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 442.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_blue.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 367.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 517.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 292.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 592.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_red.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 217.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 667.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_yellow.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 142.5,
                    "y": 257.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 256.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 222.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 187.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 152.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 117.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "big_block",
                    "x": 742.5,
                    "y": 82.5,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_purple.jpg",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 142.5,
                    "y": 371,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 442.5,
                    "y": 371,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 742.5,
                    "y": 371,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 177.39999389648438,
                    "y": 237.5,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               },
               {
                    "type": "wall",
                    "x": 701.3999938964844,
                    "y": 237.5,
                    "width": 80,
                    "height": 20,
                    "src": "assets/wall_bg.png",
                    "health": 1
               }
          ]
     }   
     buildLevel(level);
}

function level_seven() {

     var level = {
          "bonuses": {
               "time_lower_bound": 60,
               "timer_upper_bound": 90,
               "paddle_lower_bound": 20,
               "paddle_upper_bound": 40
          },
          "blocks": [
               {
                    "type": "wall",
                    "x": 151,
                    "y": 438,
                    "width": 962,
                    "height": 20,
                    "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
                    "health": 1,
                    "orientation": "horizontal"
               },
               {
                    "type": "wall",
                    "x": 152,
                    "y": 95,
                    "width": 20,
                    "height": 343,
                    "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
                    "health": 1,
                    "orientation": "vertical"
               },
               {
                    "type": "wall",
                    "x": 406,
                    "y": 75,
                    "width": 556,
                    "height": 20,
                    "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
                    "health": 1,
                    "orientation": "horizontal"
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 431.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 506.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 581.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 95,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 881.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 403,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 656.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 731.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 368,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 333,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 298,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               },
               {
                    "type": "big_block",
                    "x": 806.5,
                    "y": 263,
                    "width": 75,
                    "height": 35,
                    "src": "assets/big_block_green.jpg",
                    "health": 1,
                    "orientation": null
               }
          ]
     }

     buildLevel(level);
}
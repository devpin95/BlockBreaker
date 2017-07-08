var levels = [
	level_one,
	level_two,
  level_three
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
          level.blocks[i].y
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

function level_three() {
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
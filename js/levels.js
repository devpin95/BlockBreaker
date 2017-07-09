var levels = [
	level_one,
	level_two,
  level_three,
  level_four,
  level_five,
  level_six,
  level_seven,
  level_eight
];

function buildLevel( level ) {
  for ( var i = 0; i < level.blocks.length; ++i ) {
    if ( level.blocks[i].type != "wall" ) {
     //width, height, color, x, y, health = 1, type = "color"
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
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 31.699996948242188,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 66.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 101.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 136.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 171.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
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
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 60.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 95.69999694824219,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 130.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 165.6999969482422,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 200.6999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 218.1999969482422,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
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
               "y": 28.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 46.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 98.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 116.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 249.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 266.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 28.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 46.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 98.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 116.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 181.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 181.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 31.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 31.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 249.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 106.5,
               "y": 266.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 181.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 181.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 31.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 31.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 28.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 46.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 98.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 116.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 857.5,
               "y": 78.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 857.5,
               "y": 63.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 707.5,
               "y": 64,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 707.5,
               "y": 81.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 249.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 782.5,
               "y": 266.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 857.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 857.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 707.5,
               "y": 214.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 707.5,
               "y": 231.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
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
               "x": 114.5,
               "y": 317,
               "width": 731,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 281.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 246.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 211.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 211.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 211.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 211.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 211.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 176.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 176.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 176.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 141.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 106.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 71.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 71.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 71.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 106.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 141.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 141.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 106.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 36.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 1.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 71.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 71.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null
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
               "x": -1,
               "y": 123,
               "width": 962,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 167.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 184.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 202.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 219.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 237.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 254.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 272.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 289.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 167.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 184.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 202.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 219.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 237.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 254.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 272.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 282.5,
               "y": 289.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 167.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 184.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 202.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 219.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 237.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 254.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 272.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 289.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 167.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 184.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 202.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 219.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 237.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 254.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 272.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 588.5,
               "y": 289.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 167.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 184.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 202.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 219.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 237.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 254.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 272.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 739.5,
               "y": 289.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "wall",
               "x": 120,
               "y": 333,
               "width": 706,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
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
               "type": "wall",
               "x": 140.5,
               "y": 297,
               "width": 679,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 140.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 215.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 279.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 290.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 279.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 365.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 440.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 515.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 590.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 665.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 103.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 121.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 138.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 740.5,
               "y": 279.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
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

function level_eight() {
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
               "x": 884.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 261,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 261.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 278.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 226.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 243.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 208.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 191.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 509.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 173.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 884.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 809.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 734.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 659.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "small_block",
               "x": 584.5,
               "y": 156.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null
          },
          {
               "type": "wall",
               "x": 509,
               "y": 297,
               "width": 962,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
          },
          {
               "type": "wall",
               "x": 508,
               "y": 136.25,
               "width": 962,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal"
          },
          {
               "type": "wall",
               "x": 424,
               "y": 156.25,
               "width": 20,
               "height": 157,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
               "health": 1,
               "orientation": "vertical"
          }
     ]
}

     buildLevel(level);
}
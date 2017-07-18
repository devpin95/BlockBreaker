var levels = [
     level_one,
     level_two,    
     level_three,
     level_four,
     level_five,
     level_six,
     level_seven,
     level_eight,
     level_nine,
     level_ten,
     level_eleven
];

function buildLevel( level ) {
  for ( var i = 0; i < level.blocks.length; ++i ) {
    if ( level.blocks[i].type != "wall" && level.blocks[i].type != "portal" ) 
    {
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
    } 

    else if ( level.blocks[i].type == "wall" ) 
    {
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

    else if ( level.blocks[i].type == "portal" ) 
    {
     //width, height, src, x, y, tx, ty, endpoint = false
     portals.push( new portal( 
          level.blocks[i].width,
          level.blocks[i].height,
          level.blocks[i].src,
          level.blocks[i].x,
          level.blocks[i].y,
          level.blocks[i].teleport_point.x,
          level.blocks[i].teleport_point.y,
          level.blocks[i].teleport_point.is_endpoint
     ) )
     //alert(level.blocks[i].teleport_point.is_endpoint);
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
               "type": "small_block",
               "x": 442.5,
               "y": 43.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 60.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 77.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 95.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 112.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 130.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 147.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 165.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 43.25,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 112.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 147.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 147.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 112.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 43.25,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 43.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 60.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 77.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 95.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 112.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 130.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 147.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 165.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 43.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 60.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 77.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 95.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 112.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 130.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 147.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 165.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 43.25,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 112.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 147.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 43.25,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 112.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 147.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 43.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 60.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 77.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 95.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 112.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 130.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 147.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 165.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 165.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 147.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 130.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 112.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 95.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 77.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 60.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 43.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 182.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 200.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 182.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 200.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 182.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 200.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 182.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 200.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 182.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 200.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 25.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 8.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 25.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 8.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 25.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 8.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 25.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 8.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 25.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 8.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 67.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 67.5,
               "y": 112.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 111.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 77.75,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
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
               "type": "big_block",
               "x": 442.5,
               "y": 30.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 368.5,
               "y": 65.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 293.5,
               "y": 100.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 218.5,
               "y": 135.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 218.5,
               "y": 170.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 293.5,
               "y": 205.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 368.5,
               "y": 240.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 275.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 240.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 205.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 170.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 135.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 100.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 65.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_red.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 293.5,
               "y": 188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 293.5,
               "y": 170.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 293.5,
               "y": 153,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 293.5,
               "y": 135.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 170.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 135.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 153,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 223,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 205.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 170.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 153,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 135.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 100.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 368.5,
               "y": 118,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 223,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 205.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 170.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 153,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 135.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 118,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 100.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 258,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 240.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 223,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 205.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 188,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 170.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 135.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 153,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 443.5,
               "y": 118,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 100.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 83,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 65.5,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
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
               "type": "small_block",
               "x": 442.5,
               "y": 0.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 17.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 17.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 35.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 35.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 17.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 35.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 35.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 35.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 52.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 70.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 817.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 67.5,
               "y": 87.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 105.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 122.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 140.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 157.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 175.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 140.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 140.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 157.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 140.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 140.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 157.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 192.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 210.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 227.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 350.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 442.5,
               "y": 367.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 350.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 817.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 742.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 667.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 592.5,
               "y": 227.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 227.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 517.5,
               "y": 210.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 210.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 227.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 227.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 245.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 262.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 67.5,
               "y": 280.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 297.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 142.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 315.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 217.5,
               "y": 332.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 292.5,
               "y": 350.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 367.5,
               "y": 350.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_yellow.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
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
               "x": 367.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 470,
               "y": 85.19999694824219,
               "width": 20,
               "height": 300,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
               "health": 1,
               "orientation": "vertical",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 322.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 287.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 252.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 217.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 182.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 147.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 112.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
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
               "type": "big_block",
               "x": 442.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 491,
               "y": 389.1999969482422,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_blue.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 516,
                    "y": 187.1999969482422,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 217.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 667.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 742.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 142.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 15.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 50.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 85.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 120.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 155.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 190.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 225.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 260.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 817.5,
               "y": 295.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
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

function level_nine(){

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
               "y": 281.1999969482422,
               "width": 962,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 435,
               "y": 331.1999969482422,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_red.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 762,
                    "y": 150.1999969482422,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 197.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 162.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 127.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 92.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 442.5,
               "y": 57.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 92.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 57.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 127.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 162.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 367.5,
               "y": 197.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 57.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 92.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 127.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 162.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 517.5,
               "y": 197.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 57.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 92.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 127.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 162.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 292.5,
               "y": 197.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 57.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 92.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 127.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 162.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 592.5,
               "y": 197.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 84,
               "y": 77.19999694824219,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_blue.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 236,
                    "y": 359.1999969482422,
                    "is_endpoint": false
               }
          }
     ]
}

     buildLevel(level);
}

function level_ten() {

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
               "x": -2,
               "y": 374.1999969482422,
               "width": 348,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 628,
               "y": 373.1999969482422,
               "width": 348,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 325,
               "y": -27.300003051757812,
               "width": 20,
               "height": 421,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
               "health": 1,
               "orientation": "vertical",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 628,
               "y": -28.300003051757812,
               "width": 20,
               "height": 421,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
               "health": 1,
               "orientation": "vertical",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 399,
               "y": 17.199996948242188,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_red.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 160,
                    "y": 323.1999969482422,
                    "is_endpoint": true
               }
          },
          {
               "type": "portal",
               "x": 135,
               "y": 298.1999969482422,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_red.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 425,
                    "y": 42.19999694824219,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 519,
               "y": 17.199996948242188,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_blue.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 805,
                    "y": 327.1999969482422,
                    "is_endpoint": true
               }
          },
          {
               "type": "portal",
               "x": 780,
               "y": 302.1999969482422,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_blue.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 544,
                    "y": 46.19999694824219,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 122.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 197.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 47.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 47.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 122.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 197.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 197.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 122.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 47.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 47.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 122.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 197.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 770.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 695.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 845.5,
               "y": 34.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 845.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 845.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 845.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 770.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 770.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 770.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 695.5,
               "y": 69.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 695.5,
               "y": 104.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 695.5,
               "y": 139.5,
               "width": 75,
               "height": 35,
               "src": "assets/big_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          }
     ]
}

     buildLevel(level);
}

function level_eleven() {
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
               "x": 497,
               "y": 342.1999969482422,
               "width": 464,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 497,
               "y": 129.1999969482422,
               "width": 464,
               "height": 20,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "wall",
               "x": 497,
               "y": 128.6999969482422,
               "width": 20,
               "height": 233,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/wall_vertical.png",
               "health": 1,
               "orientation": "vertical",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 323.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 305.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 288.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 270.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 253.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 235.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 218.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 200.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 183.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 165.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 518.5,
               "y": 148.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_green.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 148.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 165.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 183.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 200.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 218.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 235.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 253.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 270.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 288.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 305.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 593.5,
               "y": 323.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_blue.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 148.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 165.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 183.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 200.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 218.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 235.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 253.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 270.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 288.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 305.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "small_block",
               "x": 668.5,
               "y": 323.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_purple.jpg",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 892,
               "y": 35.19999694824219,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_red.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 918,
                    "y": 219.1999969482422,
                    "is_endpoint": false
               }
          },
          {
               "type": "portal",
               "x": 897,
               "y": 271.1999969482422,
               "width": 50,
               "height": 50,
               "src": "file:///C:/Users/devin/Documents/Devin/projects/BlockBreaker/BlockBreaker/assets/portal_blue.png",
               "health": 1,
               "orientation": null,
               "teleport_point": {
                    "x": 186,
                    "y": 60.19999694824219,
                    "is_endpoint": false
               }
          }
     ]
}
     buildLevel(level);
}
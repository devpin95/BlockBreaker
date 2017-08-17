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
          //BLOCK
          if ( level.blocks[i].type != "wall" && level.blocks[i].type != "portal" ) 
          {
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

          //WALL
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

          //PORTAL
          else if ( level.blocks[i].type == "portal" ) 
          {
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
          }
     }

     //MAIN PADDLE
     if ( !level.main_paddle === null ) {
          if ( level.main_paddle.default ) {
               myPaddle.width = default_paddle_width;
               myPaddle.track.first_bound.x = 0;
               myPaddle.track.second_bound.x = width;
               custom_big_paddle_width = level.main_paddle.major_modded_length;
          } else {
               myPaddle.width = default_paddle_width;
               myPaddle.track.first_bound.x = 0;
               myPaddle.track.second_bound.x = width;
               custom_big_paddle_width = level.main_paddle.major_modded_length;
          }
     } else {
          myPaddle.width = default_paddle_width;
          myPaddle.track.first_bound.x = 0;
          myPaddle.track.second_bound.x = width;
          custom_big_paddle_width = 175;
     }

     //OTHER PADDLES
     if ( !(level.paddles == null) ) {
          for ( var i = 0; i < level.paddles.length; ++i ) {
               //width = 100, height = 7, x1 = 0, y1 = 0, x2 = 0, y2 = 0, rail = "horizontal"
               paddles.push( new paddle( 
                    level.paddles[i].major_length,
                    7,
                    level.paddles[i].x1,
                    level.paddles[i].y1,
                    level.paddles[i].x2,
                    level.paddles[i].y2,
                    level.paddles[i].orientation
               ) )
          }
     }
}

function level_one() {
  var level = {
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "big_block",
               "x": 442.5,
               "y": 61.5,
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
               "y": 96.5,
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
               "y": 131.5,
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
               "y": 166.5,
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
               "y": 201.5,
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
               "y": 166.5,
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
               "y": 201.5,
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
               "y": 166.5,
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
               "y": 201.5,
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
               "x": 667.5,
               "y": 201.5,
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
               "x": 667.5,
               "y": 166.5,
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
               "y": 201.5,
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
               "y": 201.5,
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
               "y": 201.5,
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
               "y": 201.5,
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
               "x": 742.5,
               "y": 166.5,
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
               "x": 742.5,
               "y": 201.5,
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
               "x": 742.5,
               "y": 131.5,
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
               "x": 742.5,
               "y": 96.5,
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
               "x": 742.5,
               "y": 61.5,
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
               "x": 667.5,
               "y": 61.5,
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
               "y": 61.5,
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
               "y": 61.5,
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
               "y": 96.5,
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
               "y": 131.5,
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
               "y": 131.5,
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
               "y": 96.5,
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
               "x": 667.5,
               "y": 96.5,
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
               "x": 667.5,
               "y": 131.5,
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
               "y": 166.5,
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
               "y": 131.5,
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
               "y": 96.5,
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
               "y": 61.5,
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
               "y": 166.5,
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
               "y": 131.5,
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
               "y": 96.5,
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
               "y": 61.5,
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
               "y": 166.5,
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
               "y": 131.5,
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
               "y": 96.5,
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
               "y": 61.5,
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
               "y": 166.5,
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
               "y": 131.5,
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
               "y": 96.5,
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
               "y": 61.5,
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
     "modifiers": {
          "disable": false,
          "x2": false,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "time_lower_bound": 60,
          "timer_upper_bound": "90",
          "paddle_lower_bound": "40",
          "paddle_upper_bound": "60",
          "timer_lower_bound": "60"
     },
     "blocks": [
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

  GAME_STATE.MESSAGE = "x2 modifier disabled";
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
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "wall",
               "x": 405,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 180.89999389648438,
               "y": 225.5,
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
               "x": 180.89999389648438,
               "y": 190.5,
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
               "x": 105.89999389648438,
               "y": 190.5,
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
               "x": 105.89999389648438,
               "y": 225.5,
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
               "type": "wall",
               "x": 106.39999389648438,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 704.8999938964844,
               "y": 190.5,
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
               "x": 704.8999938964844,
               "y": 225.5,
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
               "x": 779.8999938964844,
               "y": 225.5,
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
               "x": 779.8999938964844,
               "y": 190.5,
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
               "type": "wall",
               "x": 704.3999938964844,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 255.39999389648438,
               "y": 171,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 554.3999938964844,
               "y": 171,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 254.89999389648438,
               "y": 135.5,
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
               "x": 254.89999389648438,
               "y": 100.5,
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
               "x": 329.8999938964844,
               "y": 100.5,
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
               "x": 329.8999938964844,
               "y": 135.5,
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
               "x": 554.8999938964844,
               "y": 135.5,
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
               "x": 554.8999938964844,
               "y": 100.5,
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
               "x": 629.8999938964844,
               "y": 100.5,
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
               "x": 629.8999938964844,
               "y": 135.5,
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
               "x": 254.89999389648438,
               "y": 65.5,
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
               "x": 329.8999938964844,
               "y": 65.5,
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
               "x": 554.8999938964844,
               "y": 65.5,
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
               "x": 629.8999938964844,
               "y": 65.5,
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
               "x": 704.8999938964844,
               "y": 155.5,
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
               "x": 779.8999938964844,
               "y": 155.5,
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
               "x": 180.89999389648438,
               "y": 155.5,
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
               "x": 105.89999389648438,
               "y": 155.5,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
          }
     ]
}

     buildLevel(level);
}

function level_eight() {
     var level = {
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "wall",
               "x": 405,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "type": "wall",
               "x": 106.39999389648438,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 704.3999938964844,
               "y": 260,
               "width": 150,
               "height": 20,
               "src": "assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 105.89999389648438,
               "y": 155.5,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 105.89999389648438,
               "y": 190.5,
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
               "x": 105.89999389648438,
               "y": 225.5,
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
               "x": 180.89999389648438,
               "y": 225.5,
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
               "x": 180.89999389648438,
               "y": 190.5,
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
               "x": 180.89999389648438,
               "y": 155.5,
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
               "x": 255.89999389648438,
               "y": 155.5,
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
               "x": 330.8999938964844,
               "y": 155.5,
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
               "x": 330.8999938964844,
               "y": 190.5,
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
               "x": 330.8999938964844,
               "y": 225.5,
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
               "x": 255.89999389648438,
               "y": 225.5,
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
               "x": 255.89999389648438,
               "y": 190.5,
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
               "x": 554.8999938964844,
               "y": 155.5,
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
               "x": 629.8999938964844,
               "y": 155.5,
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
               "x": 704.8999938964844,
               "y": 155.5,
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
               "x": 779.8999938964844,
               "y": 155.5,
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
               "x": 779.8999938964844,
               "y": 190.5,
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
               "x": 779.8999938964844,
               "y": 225.5,
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
               "x": 704.8999938964844,
               "y": 225.5,
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
               "x": 704.8999938964844,
               "y": 190.5,
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
               "x": 629.8999938964844,
               "y": 190.5,
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
               "x": 629.8999938964844,
               "y": 225.5,
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
               "x": 554.8999938964844,
               "y": 225.5,
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
               "x": 554.8999938964844,
               "y": 190.5,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 404.8999938964844,
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
               "x": 404.8999938964844,
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
               "x": 479.8999938964844,
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
               "x": 330.8999938964844,
               "y": 50.5,
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
               "x": 330.8999938964844,
               "y": 85.5,
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
               "x": 330.8999938964844,
               "y": 120.5,
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
               "x": 255.89999389648438,
               "y": 120.5,
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
               "x": 180.89999389648438,
               "y": 120.5,
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
               "x": 105.89999389648438,
               "y": 120.5,
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
               "x": 105.89999389648438,
               "y": 85.5,
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
               "x": 105.89999389648438,
               "y": 50.5,
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
               "x": 180.89999389648438,
               "y": 50.5,
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
               "x": 255.89999389648438,
               "y": 50.5,
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
               "x": 255.89999389648438,
               "y": 85.5,
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
               "x": 180.89999389648438,
               "y": 85.5,
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
               "x": 554.8999938964844,
               "y": 50.5,
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
               "x": 554.8999938964844,
               "y": 85.5,
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
               "x": 554.8999938964844,
               "y": 120.5,
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
               "x": 629.8999938964844,
               "y": 120.5,
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
               "x": 629.8999938964844,
               "y": 85.5,
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
               "x": 629.8999938964844,
               "y": 50.5,
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
               "x": 704.8999938964844,
               "y": 50.5,
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
               "x": 704.8999938964844,
               "y": 85.5,
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
               "x": 704.8999938964844,
               "y": 120.5,
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
               "x": 779.8999938964844,
               "y": 120.5,
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
               "x": 779.8999938964844,
               "y": 85.5,
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
               "x": 779.8999938964844,
               "y": 50.5,
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
          }
     ]
}

     buildLevel(level);
}

function level_nine(){

     var level = {
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "wall",
               "x": 180,
               "y": 182,
               "width": 600,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 470,
               "y": 224,
               "width": 20,
               "height": 150,
               "src": "assets/wall_vertical.png",
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
               "x": 370.8999938964844,
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
               "x": 295.8999938964844,
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
               "x": 220.89999389648438,
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
               "x": 145.89999389648438,
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
               "x": 370.8999938964844,
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
               "x": 370.8999938964844,
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
               "x": 370.8999938964844,
               "y": 330.5,
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
               "x": 295.8999938964844,
               "y": 330.5,
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
               "x": 220.89999389648438,
               "y": 330.5,
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
               "x": 145.89999389648438,
               "y": 330.5,
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
               "x": 145.89999389648438,
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
               "x": 145.89999389648438,
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
               "x": 220.89999389648438,
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
               "x": 295.8999938964844,
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
               "x": 295.8999938964844,
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
               "x": 220.89999389648438,
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
               "x": 511.8999938964844,
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
               "x": 511.8999938964844,
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
               "x": 511.8999938964844,
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
               "x": 511.8999938964844,
               "y": 330.5,
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
               "x": 586.8999938964844,
               "y": 330.5,
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
               "x": 661.8999938964844,
               "y": 330.5,
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
               "x": 736.8999938964844,
               "y": 330.5,
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
               "x": 736.8999938964844,
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
               "x": 661.8999938964844,
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
               "x": 586.8999938964844,
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
               "x": 586.8999938964844,
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
               "x": 586.8999938964844,
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
               "x": 661.8999938964844,
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
               "x": 661.8999938964844,
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
               "x": 736.8999938964844,
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
               "x": 736.8999938964844,
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
               "x": 367.5,
               "y": 90.5,
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
               "x": 367.5,
               "y": 125.5,
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
               "x": 292.5,
               "y": 125.5,
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
               "x": 292.5,
               "y": 90.5,
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
               "x": 217.5,
               "y": 90.5,
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
               "y": 90.5,
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
               "y": 125.5,
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
               "x": 217.5,
               "y": 125.5,
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
               "x": 367.5,
               "y": 55.5,
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
               "x": 292.5,
               "y": 55.5,
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
               "x": 217.5,
               "y": 55.5,
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
               "y": 55.5,
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
               "y": 20.5,
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
               "x": 217.5,
               "y": 20.5,
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
               "x": 292.5,
               "y": 20.5,
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
               "x": 367.5,
               "y": 20.5,
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
               "y": 90.5,
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
               "y": 125.5,
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
               "y": 55.5,
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
               "y": 20.5,
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
               "y": 20.5,
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
               "y": 55.5,
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
               "y": 90.5,
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
               "y": 125.5,
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
               "x": 667.5,
               "y": 125.5,
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
               "x": 667.5,
               "y": 90.5,
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
               "x": 667.5,
               "y": 55.5,
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
               "x": 667.5,
               "y": 20.5,
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
               "x": 742.5,
               "y": 20.5,
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
               "x": 742.5,
               "y": 55.5,
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
               "x": 742.5,
               "y": 90.5,
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
               "x": 742.5,
               "y": 125.5,
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
               "y": 55.5,
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
               "y": 90.5,
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
               "x": 442.5,
               "y": 20.5,
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
               "x": 442.5,
               "y": 125.5,
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

function level_ten() {

     var level = {
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "wall",
               "x": 367.5,
               "y": 337,
               "width": 225,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 314.3999938964844,
               "y": 90.5,
               "width": 20,
               "height": 225,
               "src": "assets/wall_vertical.png",
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
               "x": 628.3999938964844,
               "y": 90.5,
               "width": 20,
               "height": 225,
               "src": "assets/wall_vertical.png",
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
               "x": 442.5,
               "y": 319.25,
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
               "x": 367.5,
               "y": 319.25,
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
               "y": 319.25,
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
               "y": 301.75,
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
               "y": 284.25,
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
               "x": 367.5,
               "y": 301.75,
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
               "y": 301.75,
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
               "y": 284.25,
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
               "x": 367.5,
               "y": 284.25,
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
               "y": 266.75,
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
               "y": 249.25,
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
               "y": 231.75,
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
               "y": 214.25,
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
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 161.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 161.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 179.25,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 161.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 196.75,
               "width": 75,
               "height": 17.5,
               "src": "assets/small_block_red.jpg",
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
               "y": 144.25,
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
               "y": 126.75,
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
               "y": 109.25,
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
               "y": 91.75,
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
               "y": 91.75,
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
               "y": 74.25,
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
               "y": 56.75,
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
               "y": 56.75,
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
               "y": 74.25,
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
               "x": 367.5,
               "y": 91.75,
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
               "x": 367.5,
               "y": 74.25,
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
               "x": 367.5,
               "y": 56.75,
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
               "type": "wall",
               "x": 123.89999389648438,
               "y": 337,
               "width": 75,
               "height": 20,
               "src": "assets/wall_horizontal.png",
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
               "x": 753.8999938964844,
               "y": 337,
               "width": 75,
               "height": 20,
               "src": "assets/wall_horizontal.png",
               "health": 1,
               "orientation": "horizontal",
               "teleport_point": {
                    "x": null,
                    "y": null,
                    "is_endpoint": false
               }
          },
          {
               "type": "big_block",
               "x": 123.89999389648438,
               "y": 301.75,
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
               "x": 123.89999389648438,
               "y": 266.75,
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
               "x": 123.89999389648438,
               "y": 231.75,
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
               "x": 123.89999389648438,
               "y": 196.75,
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
               "x": 123.89999389648438,
               "y": 161.75,
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
               "x": 123.89999389648438,
               "y": 126.75,
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
               "x": 123.89999389648438,
               "y": 91.75,
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
               "x": 123.89999389648438,
               "y": 56.75,
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
               "x": 753.8999938964844,
               "y": 301.75,
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
               "x": 753.8999938964844,
               "y": 266.75,
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
               "x": 753.8999938964844,
               "y": 231.75,
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
               "x": 753.8999938964844,
               "y": 196.75,
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
               "x": 753.8999938964844,
               "y": 161.75,
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
               "x": 753.8999938964844,
               "y": 126.75,
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
               "x": 753.8999938964844,
               "y": 91.75,
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
               "x": 753.8999938964844,
               "y": 56.75,
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

     buildLevel(level);
}

function level_eleven() {
     var level = {
     "modifiers": {
          "disable": false,
          "x2": true,
          "up1": true,
          "stretch": true,
          "newball": true
     },
     "bonuses": {
          "timer_lower_bound": "60",
          "timer_upper_bound": "90",
          "paddle_lower_bound": "20",
          "paddle_upper_bound": "40"
     },
     "blocks": [
          {
               "type": "big_block",
               "x": 442.5,
               "y": 189.5,
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
               "y": 224.5,
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
               "y": 259.5,
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
               "y": 294.5,
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
     ],
     "main_paddle": {
          "default": false,
          "major_length": "100",
          "major_modded_length": "175",
          "left_bound_x": "0",
          "right_bound_x": "960"
     },
     "paddles": [
          {
               "x1": 32.399993896484375,
               "y1": 53,
               "x2": 908.3999938964844,
               "y2": 53,
               "orientation": "horizontal",
               "major_length": 100
          },
          {
               "x1": 37.399993896484375,
               "y1": 104,
               "x2": 37.399993896484375,
               "y2": 396,
               "orientation": "vertical",
               "major_length": 100
          }
     ]
}
     buildLevel(level);
}
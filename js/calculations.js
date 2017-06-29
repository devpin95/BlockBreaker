function slopeTrace( ball, block ) {
	var new_x = Math.round( ball.center.x );
	var new_y = Math.round( ball.center.y );
	var cont = false;
	var range = 2;
	var message = "";

	//dbgr.add("TRACING");

	for ( var i = 0; i < 10; ++i ) {
		//y = mx + b
		--new_x;
		new_y = ( ball.equation.slope * new_x ) + ball.equation.y_intercept;

		//ball has a positive slope and is moving to the right
		if ( ball.equation.slope >= 0 && ball.spdX >= 0 ) {
			//ball can only hit bottom or left
			if ( new_x <= block.x ) {
				//left
				ball.spdX *= -1;
				cont = true;
			} 
			else/* if ( new_y >= block.y + block.height )*/ {
				//bottom
				ball.spdY *= -1;
				cont = true;
			}
		}
		//ball has a positive slope and is moving to the left
		else if ( ball.equation.slope >= 0 && ball.spdX <= 0 ) {
			//ball can only hit top or right
			if ( new_x >= block.x + block.width ) {
				//right
				ball.spdX *= -1;
				cont = true;
			} 
			else/* if ( new_y <= block.y )*/ {
				//top
				ball.spdY *= -1;
				cont = true;
			}
		}
		//ball has a negative slope and is moving to the right
		else if ( ball.equation.slope <= 0 && ball.spdX >= 0 ) {
			//ball can only hit top or left
			if ( new_x <= block.x ) {
				//left
				ball.spdX *= -1;
				cont = true;
			} 
			else/* if ( new_y <= block.y )*/ {
				//top
				ball.spdY *= -1;
				cont = true;
			}
		}//ball has a negative slope and is moving to the left
		else if ( ball.equation.slope <= 0 && ball.spdX <= 0 ) {
			//ball can only hit bottom or right
			if ( new_x >= block.x + block.width ) {
				//right
				ball.spdX *= -1;
				cont = true;
			} 
			else /*if ( new_y >= block.y + block.height )*/ {
				//bottom
				ball.spdY *= -1;
				cont = true;
			}
		} else if ( ball.equation.slope == Number.POSITIVE_INFINITY ) {
			ball.spdY *= -1;
		 	cont = true;
		}


		// if ( new_x <= block.x || new_x >= block.x + block.width ) {
		// 	//bounced off left
		// 	ball.spdX *= -1;
		// 	cont = true;
		// } else if ( new_y <= block.y || new_y >= block.y + block.height ) {
		// 	//bounced off top
		// 	ball.spdY *= -1;
		// 	cont = true;
		// } else {
		// 	ball.spdY *= -1;
		// 	cont = true;
		// }

		if ( cont == true ) {
			break;
		} else {
			break;
		}
	}

	//calculate if the center is passed an edge or outside the block
	
}

//http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
//tracking the mouse coordinates
//------------------------------------------------------------------------------------------------------------
function getMousePos(canvas, e) {
    var rect = document.getElementById("game").getBoundingClientRect();
    return {
    	x: e.clientX - rect.left,
    	y: e.clientY - rect.top
	};
}

document.getElementById("game").addEventListener('mousemove', function(e) {
	mousePos = getMousePos(document.getElementById("game"), e);
    //myPaddle.newPos( mousePos.x, mousePos.y );
}, false);
//------------------------------------------------------------------------------------------------------------

function distanceBetweenPoints( x1, y1, x2, y2 ) {
	//  B
	//	|\
	//	| \
	//	|  \
	//	|   \
	//a |    \ c
	//	|     \
	//	|      \
	//	|_______\
	//		b    A
	//Pythagorean Theorem
	//Point A, B

	var a = Math.abs( x1 - x2 );
	var b = Math.abs( y1 - y2 );
	return Math.sqrt( (a*a) + (b*b) );
}
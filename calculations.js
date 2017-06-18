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
		// console.log( "slope " + ball.slope );
		// console.log( "x " + new_x );
		// console.log( "y " + ball.equation.y_intercept );

		if ( new_x <= block.x || new_x >= block.x + block.width ) {
			//bounced off left
			ball.spdX *= -1;
			cont = true;
			message = "LEFT/RIGHT";
		} else if ( new_y <= block.y || new_y >= block.y + block.height ) {
			//bounced off top
			ball.spdY *= -1;
			cont = true;
			message = "TOP/BOTTOM";
		} else {
			ball.spdY *= -1;
			cont = true;
		}

		if ( cont == true ) {
			// myGameArea.context.globalCompositeOperation='destination-over';
			// myGameArea.context.beginPath();
			// myGameArea.context.arc(new_x, new_y, 2, 0, 2 * Math.PI, false);
			// myGameArea.context.fillStyle = '#f00';
			// myGameArea.context.fill();

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( message, new_x + 50, new_y + 50);

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "X: " + new_x.toFixed(2), 100, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Y: " + new_y.toFixed(2), 200, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#8e44ad";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Old X: " + Math.round( ball.center.x ).toFixed(2), 300, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#8e44ad";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Old Y: " + Math.round( ball.center.y ).toFixed(2), 400, height - 5 );

			//isPaused = true;
			break;
		} else {
			// message = "IDK WHY ARE YYOU ASKING ME?";

			// myGameArea.context.globalCompositeOperation='destination-over';
			// myGameArea.context.beginPath();
			// myGameArea.context.arc(new_x, new_y, 2, 0, 2 * Math.PI, false);
			// myGameArea.context.fillStyle = '#f00';
			// myGameArea.context.fill();

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( message, new_x + 50, new_y + 50);

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "X: " + new_x.toFixed(2), 100, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#000";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Y: " + new_y.toFixed(2), 200, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#8e44ad";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Old X: " + Math.round( ball.center.x ).toFixed(2), 300, height - 5 );

			// myGameArea.context.font = "15px Arial";
			// myGameArea.context.fillStyle = "#8e44ad";
			// myGameArea.context.textAlign = "center";
			// myGameArea.context.fillText( "Old Y: " + Math.round( ball.center.y ).toFixed(2), 400, height - 5 );

			// console.log( distanceBetweenPoints( ball.center.x, ball.center.y, new_x, new_y ) );

			// isPaused = true;
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
	var mousePos = getMousePos(document.getElementById("game"), e);
    myPaddle.newPos( mousePos.x, mousePos.y );
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
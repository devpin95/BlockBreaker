var levels = [
	level_one,
	level_two
];

function level_one() {
	var partition_width = width * .75;
    var partition_height = height * .40; 
    var margin_left = ( width - partition_width ) / 2
    var margin_top = 50;        

    for ( var i = 0; i < 5; ++i ) {
		var ypos = margin_top + ( ( default_block_height * i ) /* + ( 10 * i ) */ );
    	for ( var j = 0; j < 9; ++j ) {
    		var xpos = margin_left + ( ( default_block_width * j ) /* + ( 10 * j ) */);

    		var new_block = new block( default_block_width, default_block_height, default_block_image, xpos, ypos, 1, "image" );
    		blocks.push( new_block );
    	}
    }
}

function level_two() {
	var partition_width = width * .75;
    var partition_height = height * .40; 
    var margin_left = ( width - partition_width ) / 2
    var margin_top = 50;        

    for ( var i = 0; i < 5; ++i ) {
		var ypos = margin_top + ( ( default_block_height * i ) /* + ( 10 * i ) */ );
    	for ( var j = 0; j < 9; ++j ) {
    		var xpos = margin_left + ( ( ( default_block_width - 1 ) * j ) /* + ( 10 * j ) */);

    		var new_block = new block( default_block_width, default_block_height, default_block_image, xpos, ypos, 1, "image" );
    		blocks.push( new_block );
    	}
    }

    var new_wall = new wall( margin_left, partition_height + 9 );
    new_wall.width = default_block_width * 9 - 8;
    walls.push( new_wall );

  //   for ( var k = 0; k < 9; ++k ) {
  //   	var xpos = margin_left + ( ( default_block_width - 1 ) * k );
  //   	var new_wall = new wall( xpos, partition_height + 9 );
  //   	if ( k == 0 || k == 8 ) {
  //   		new_wall.is_edge_piece = true;
  //   	}
		// walls.push( new_wall );
  //   }
}
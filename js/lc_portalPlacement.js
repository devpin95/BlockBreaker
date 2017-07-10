//var temp_portal = new block;

var portalPlacementScene = {

	setup : function() {
		this.temp_portal = new block( 50, 50, block_assets.portal.red, -100, -100, 1, "image" );
	},

	clicks : 0,
	temp_portal : null,
	aligning_with_portal : false,
	aligning_portal : null,
	tx : null,
	ty : null,

	run : function() 
	{
		if ( this.clicks == 0 ) {
			active_block.x = mousePos.x - ( active_block.width / 2);
			active_block.y = mousePos.y - ( active_block.height / 2);
			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( test_blocks[i].is_portal ) {
					if ( mousePos.x >= test_blocks[i].teleport_point.x - (test_blocks[i].width / 2)  && 
						mousePos.x <= test_blocks[i].teleport_point.x + (test_blocks[i].width / 2) && 
						mousePos.y >= test_blocks[i].teleport_point.y - (test_blocks[i].height / 2) && 
						mousePos.y <= test_blocks[i].teleport_point.y + (test_blocks[i].height / 2) ) 
					{
						active_block.x = test_blocks[i].teleport_point.x - (active_block.width/2);
						active_block.y = test_blocks[i].teleport_point.y - (active_block.height/2);
						this.aligning_with_portal = true;
						this.aligning_portal = i;
						break;
					} else {
						this.aligning_with_portal = false;
					}
				}
			}

			active_block.update();
		}

		else if ( this.clicks == 1 ) {
			this.temp_portal.update();

			if ( this.aligning_with_portal ) {
				level_object.blocks[this.aligning_portal].teleport_point.is_endpoint = true;
			}

			//var xpos, ypos;
			this.tx = mousePos.x;
			this.ty = mousePos.y;

			for ( var i = 0; i < test_blocks.length; ++i ) {
				if ( test_blocks[i].is_portal ) {
					if ( mousePos.x >= test_blocks[i].left_edge && 
						mousePos.x <= test_blocks[i].right_edge && 
						mousePos.y >= test_blocks[i].top_edge && 
						mousePos.y <= test_blocks[i].bottom_edge ) 
					{
						console.log( test_blocks[i] );
						this.tx = test_blocks[i].center.x;
						//this.tx = xpos;
						this.ty = test_blocks[i].center.y;
						//this.ty = ypos;
						test_blocks[i].teleport_point.is_a_portal = true;
						this.aligning_with_portal = true;
						this.aligning_portal = i;
						break;
					} 
				}
			}

			//draw a line from the center of the portal to the mouse
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([5, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.temp_portal.center.x, this.temp_portal.center.y );
			ctx.lineTo( this.tx, this.ty );
			ctx.strokeStyle = '#00f';
			ctx.stroke();
		}

	},

	click_down : function(e) {
		++this.clicks;

		if ( this.clicks == 1 ) {
			//if this is the first clicks, make a temperary block so that we can draw a line
			//between the placed portal and the point at which it will teleport the ball

			//active_block = null;

			//width, height, color, x, y, health = 1, type = "color"
			this.temp_portal = new block( 
				active_block.width,
    			active_block.height,
    			//(this.orientation == "vertical") ? "assets/wall_vertical.png" : "assets/wall_horizontal.png",
    			active_block.image.src,
    			active_block.x,
    			active_block.y,
    			1,
    			"image"
			);

			active_block.x = -100;
			active_block.y = -100;

			this.temp_portal.is_portal = true;

			if ( this.aligning_with_portal  ) {
				this.temp_portal.teleport_point.is_a_portal = true;
				this.aligning_with_portal = false;
			}
		}

		else if ( this.clicks == 2 ) {
			//alert(this.aligning_with_portal);
			level_object.blocks.push( new placement_code(
    			this.temp_portal.width,
    			this.temp_portal.height,
    			active_block.image.src,
    			this.temp_portal.x,
    			this.temp_portal.y,
    			"portal",
    			null,
    			1,
    			this.tx, //tx
    			this.ty,	//ty	
    			this.temp_portal.teleport_point.is_a_portal
			) );

    		//width, height, color, x, y, health = 1, type = "color"
    		test_blocks.push( new block( 
				this.temp_portal.width,
    			this.temp_portal.height,
    			this.temp_portal.image.src,
    			this.temp_portal.x,
    			this.temp_portal.y,
    			1,
    			"image" 
			) );
			test_blocks[ test_blocks.length - 1 ].is_portal = true;
			test_blocks[ test_blocks.length - 1 ].teleport_point.x = mousePos.x;
			test_blocks[ test_blocks.length - 1 ].teleport_point.y = mousePos.y;
			if ( this.aligning_with_portal  ) {
				level_object.blocks[ this.aligning_portal ].teleport_point.is_endpoint = true;
			}

			this.clicks = 0;
		}
	},

	blur : function() {
		active_block.x = -100;
		active_block.y = -100;
	}
}	
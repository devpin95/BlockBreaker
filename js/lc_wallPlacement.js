var wallPlacementScene = {
	placement_wall : null,
	wall_guides : {
		path : "assets/lc_wall_guide.png",
		tl : null,
		tr : null,
		bl : null,
		br : null,
		default_size : 20
	},
	origin : {
		x : 0,
		y : 0
	},
	clicks : 0,

	laying : false,
	editing_mode : false,

	setup : function () {
		this.placement_wall = new block( 0, 0, "rgba( 0,0,0,0 )", -100, -100, health = 1, type = "color" );
		this.wall_guides.tl = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.tr = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.bl = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
		this.wall_guides.br = new block( 5, 5, this.wall_guides.path, -100, -100, 1, "image" );
	},

	run : function() {
		if ( this.clicks == 0 ) {
			this.wall_guides.tl.x = -100;
			this.wall_guides.tl.y = -100;
			this.wall_guides.tr.x = -100;
			this.wall_guides.tr.y = -100;
			this.wall_guides.bl.x = -100;
			this.wall_guides.bl.y = -100;
			this.wall_guides.br.x = -100;
			this.wall_guides.br.y = -100;

			this.placement_wall.x = -100;
			this.placement_wall.y = -100;
			this.placement_wall.width = 0;
			this.placement_wall.height = 0;
		}

		else if ( this.clicks == 1 ) 
		{
			var dx;
			if ( mousePos.x >= this.origin.x + (75 / 2) ) 
			{
				//make the wall horizontal to the right
				dx = mousePos.x - this.origin.x;
				//move the right edge of the wall to the right of the origin
				this.placement_wall.width = dx;
				this.placement_wall.height = this.wall_guides.default_size;
			} 

			else if ( mousePos.x <= this.origin.x - (75 / 2) ) 
			{
				//the mouse is left of the origin, so make the origin the mouse x and the width the distance between 
				//the new origin and the old origin (shift it back and make the right edge the x of the old origin)
				dx = Math.abs( mousePos.x - this.origin.x );
				this.origin.x = mousePos.x;
				this.placement_wall.width = dx;
				this.placement_wall.height = this.wall_guides.default_size;
				this.placement_wall.x = this.origin.x;
			}

			// else if ( mousePos.y > 75 / 2 ) 
			// {
			// 	//make the wall vertical
			// }

			//now display the guides
			//top nodes
			this.wall_guides.tl.x = this.origin.x + ( 5 / 2 );
			this.wall_guides.tl.y = this.origin.y + ( 5 / 2 );
			this.wall_guides.tr.x = (this.origin.x + this.placement_wall.width) + ( 5 / 2 );
			this.wall_guides.tr.y = this.origin.y + ( 5 / 2 );

			//bottom nodes
			this.wall_guides.bl.x = this.origin.x + ( 5 / 2 );
			this.wall_guides.bl.y = ( this.origin.y + this.placement_wall.height ) + ( 5 / 2 );
			this.wall_guides.br.x = (this.origin.x + this.placement_wall.width) + ( 5 / 2 );
			this.wall_guides.br.y = ( this.origin.y + this.placement_wall.height ) + ( 5 / 2 );

			//draw lines between nodes
			var ctx = myGameArea.canvas.getContext("2d");
			//top left to top right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.tl.center.x, this.wall_guides.tl.center.y );
			ctx.lineTo( this.wall_guides.tr.center.x, this.wall_guides.tr.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//top left to bottom left
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.tl.center.x, this.wall_guides.tl.center.y );
			ctx.lineTo( this.wall_guides.bl.center.x, this.wall_guides.bl.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//bottom left to bottom right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.bl.center.x, this.wall_guides.bl.center.y );
			ctx.lineTo( this.wall_guides.br.center.x, this.wall_guides.br.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();

			//bottom right to top right
			ctx.globalCompositeOperation='destination-over';
			ctx.setLineDash([2, 2]);/*dashes are 5px and spaces are 3px*/
			ctx.beginPath();
			ctx.moveTo( this.wall_guides.br.center.x, this.wall_guides.br.center.y );
			ctx.lineTo( this.wall_guides.tr.center.x, this.wall_guides.tr.center.y );
			ctx.strokeStyle = '#000';
			ctx.stroke();
		} 

		else if ( this.clicks == 2 ) 
		{
			//width, height, src, x, y, type, health = 1
			// level_object.blocks.push( new placement_code( 
			// 	this.placement_wall.width,
   //  			this.placement_wall.height,
   //  			"assets/wall_bg.png",
   //  			this.placement_wall.x,
   //  			this.placement_wall.y,
   //  			"wall" 
			// ) );

			// test_blocks.push( new block( 
			// 	this.placement_wall.width,
   //  			this.placement_wall.height,
   //  			"assets/wall_bg.png",
   //  			this.placement_wall.x,
   //  			this.placement_wall.y,
   //  			1,
   //  			"image" 
			// ) );
			PLACEMENT_WALL = new block( 
				this.placement_wall.width,
    			this.placement_wall.height,
    			"assets/wall_bg.png",
    			this.placement_wall.x,
    			this.placement_wall.y,
    			1,
    			"image"
			);
			PLACEMENT_WALL.is_wall = true;

			this.clicks = 0;
			active_block = PLACEMENT_WALL;
			ACTIVE_SCENE = SCENES.place;
			this.laying = true;
		}

		this.wall_guides.tl.update();
		this.wall_guides.tr.update();
		this.wall_guides.bl.update();
		this.wall_guides.br.update();
		this.placement_wall.update();
	},

	click_down : function() {
		//mousePos.down = true;
		++this.clicks;

		if ( this.clicks == 1 ) 
		{
			//the first clicks, set the origin of the wall
			this.origin.x = mousePos.x;
			this.origin.y = mousePos.y
			this.placement_wall.x = this.origin.x;
			this.placement_wall.y = this.origin.y;
		} 

		else if ( this.clicks > 2 ) {
			this.clicks = 0;
		}
	},

	click_up : function() {
		//mousePos.down = true;
	},

	buttonPress : function(e) {
		if ( e.keyCode == 27 ) {
			this.clicks = 0;
		}
	}
}
VG.AnimatedSprite = function(image, tilesHoriz, tilesVert, tileDispDuration) {

    this.texture = new THREE.Texture(image);
    this.texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial({ map: this.texture});

    this.view = new THREE.Sprite(spriteMaterial);

	// note: texture passed by reference, will be updated by the update function.
		
	this.tilesHorizontal = tilesHoriz;
	this.tilesVertical = tilesVert;
	// how many images does this spritesheet contain?
	//  usually equals tilesHoriz * tilesVert, but not necessarily,
	//  if there at blank tiles at the bottom of the spritesheet. 
	this.numberOfTiles = tilesHoriz * tilesVert;
	this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping; 
	this.texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

	// how long should each image be displayed?
	this.tileDisplayDuration = tileDispDuration;

	// how long has the current image been displayed?
	this.currentDisplayTime = 0;

	// which image is currently being displayed?
	this.currentTile = 0;
		
	this.update = function( dt )
	{
		this.currentDisplayTime += dt;

		if (this.currentDisplayTime > this.tileDisplayDuration)
		{
			//this.currentDisplayTime -= this.tileDisplayDuration;
			this.currentDisplayTime = 0;

			this.currentTile++;
			if (this.currentTile == this.numberOfTiles)
				this.currentTile = 0;

			console.log('iter');

			var currentColumn = this.currentTile % this.tilesHorizontal ;

			console.log(currentColumn)

			this.texture.offset.x = currentColumn / this.tilesHorizontal;
			var currentRow = this.tilesVertical - Math.floor( this.currentTile / this.tilesHorizontal )-1;
			
			console.log(currentRow)

			this.texture.offset.y = currentRow / this.tilesVertical;
		}
	};
};

// VG.AnimatedSprite.prototype = {

// 	constructor: VG.AnimatedSprite,

// 	currentTile: 0,

// 	currentDisplayTime: 0,

//     update: function(dt) {
//         this.currentDisplayTime += dt * 1000;

//         while (this.currentDisplayTime > this.tileDisplayDuration) {
//             this.currentDisplayTime -= this.tileDisplayDuration;
//             this.currentTile++;

//             if (this.currentTile == this.numberOfTiles)
//                 this.currentTile = 0;

//             var currentColumn = this.currentTile % this.tilesHorizontal;
//             this.texture.offset.x = currentColumn / this.tilesHorizontal;
//             var currentRow = Math.floor(this.currentTile / this.tilesHorizontal);
//             this.texture.offset.y = currentRow / this.tilesVertical;
//         }
//     }
// };
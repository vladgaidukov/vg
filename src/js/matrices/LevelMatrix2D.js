VG.LevelMatrix2D = function (sizeX, sizeY) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.length = this.sizeX * this.sizeY;
	this.matrix = new Int16Array(this.length);

}

VG.LevelMatrix2D.prototype = {
	constructor: VG.LevelMatrix2D,

	getCell: function (x, y) {
		var index = x * this.sizeX + y;
		return this.matrix[index];
	},

	setCell: function (x, y, value) {
		
		if (x < 0 || y < 0 || x > this.sizeX * 0.9 || y > this.sizeY * 0.9)
			return

		var index = x * this.sizeX + y;
		this.matrix[index] = value;
	},
}


function Matrix2D (sizeX, sizeY, array) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.length = this.sizeX * this.sizeY;
	this.matrix = new Uint16Array(array || this.length);

}

Matrix2D.prototype = {

	constructor: Matrix2D,

	cellExist: function (x, y){
		if (x < 0 || y < 0 || x > this.sizeX - 1 || y > this.sizeY - 1)
			return false
		return true
	},

	getCell: function (x, y) {

		if (!this.cellExist(x, y))
			return

		var index = x * this.sizeX + y;
		return this.matrix[index];
	},

	setCell: function (x, y, value) {
		
		if (!this.cellExist(x, y))
			return

		var index = x * this.sizeX + y;
		this.matrix[index] = value;
	},
};

export { Matrix2D };


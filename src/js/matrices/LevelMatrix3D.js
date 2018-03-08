VG.LevelMatrix3D = function (sizeX, sizeY, sizeZ, array) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.sizeZ = sizeZ;
	this.length = this.sizeX * this.sizeY * this.sizeZ;
	this.matrix = new Uint16Array(array || this.length);

}

VG.LevelMatrix3D.prototype = {
	constructor: VG.LevelMatrix3D,

	cellExist: function (x, y, z){
		if (x < 0 || y < 0 || z < 0 || x > this.sizeX - 1 || y > this.sizeY - 1 || z > this.sizeZ - 1 )
			return false
		return true
	},

	getCell: function (x, y, z) {
		if (!this.cellExist(x, y, z))
			return

		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		return this.matrix[index];
	},

	setCell: function (x, y, z, value) {
		if (!this.cellExist(x, y, z))
			return
		
		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		this.matrix[index] = value;
	},
}
VG.LevelMatrix3D = function (sizeX, sizeY, sizeZ) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.sizeZ = sizeZ;
	this.matrix = new Int16Array(this.sizeX * this.sizeY * this.sizeZ);

}

VG.LevelMatrix3D.prototype = {
	constructor: VG.LevelMatrix3D,

	getCell: function (x, y, z) {
		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		return this.matrix[index];
	},

	setCell: function (x, y, z, value) {
		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		this.matrix[index] = value;
	},
}
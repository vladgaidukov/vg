VG.LevelMatrix3D = function (sizeX, sizeY, sizeZ) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.sizeZ = sizeZ;
	this.matrix = new Uint16Array(this.sizeX * this.sizeY * this.sizeZ);

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
VG.Scene = function (data) {
	VG.BaseObject.call(this);

	this.name = 'default';

	this.ui = null;

}

VG.Scene.prototype = Object.create(VG.BaseObject.prototype);
VG.Scene.constructor = VG.Scene;

VG.Scene.prototype.init = function () {
	console.warn('Warning: Scene with name >>>' + this.name + '<<< init method is not define')
}
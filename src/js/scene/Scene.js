VG.Scene = function (data) {
	VG.SceneEntity.call(this);

	this.name = 'default';

	this.ui = null;

}

VG.Scene.prototype = Object.create(VG.SceneEntity.prototype);
VG.Scene.constructor = VG.Scene;
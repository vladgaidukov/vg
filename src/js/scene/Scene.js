VG.Scene = function (data) {
	VG.SceneEntity.call(this);

	this.name = 'default';
	this.matrixAutoUpdate = false;

	this.ui = null;

}

VG.Scene.prototype = Object.create(VG.SceneEntity.prototype);
VG.Scene.constructor = VG.Scene;

VG.Scene.prototype.activate = function (data) {

	VG.SceneEntity.prototype.activate.apply(this, arguments);

    if (this.ui)
        this.ui.show();

};

VG.Scene.prototype.deactivate = function (data) {

	VG.SceneEntity.prototype.deactivate.apply(this, arguments);

    if (this.ui)
        this.ui.hide();

};


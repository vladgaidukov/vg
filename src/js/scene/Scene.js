import { SceneEntity } from './../SceneEntity.js';

function Scene(data) {
	SceneEntity.call(this);

	this.name = 'default';
	this.matrixAutoUpdate = false;

	this.ui = null;

}

Scene.prototype = Object.create(SceneEntity.prototype);
Scene.constructor = Scene;

Scene.prototype.activate = function (data) {

	SceneEntity.prototype.activate.apply(this, arguments);

    if (this.ui)
        this.ui.show();

};

Scene.prototype.deactivate = function (data) {

	SceneEntity.prototype.deactivate.apply(this, arguments);

    if (this.ui)
        this.ui.hide();

};

export { Scene };

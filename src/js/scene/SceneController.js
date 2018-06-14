VG.SceneController = function () {

    VG.SceneEntity.call(this, name);
    this.matrixAutoUpdate = false;

    this.scenes = {};
    this.activeScene = null;

    VG.EventDispatcher.bind('SceneController.activateScene', this, this.activateScene);
};

VG.SceneController.prototype = Object.create(VG.SceneEntity.prototype);
VG.SceneController.constructor = VG.SceneController;

VG.SceneController.prototype.add = function (scene) {
    if (scene instanceof VG.Scene) {
        if (this.scenes[scene.name]) {
            console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
            return;
        }

        this.scenes[scene.name] = scene;
    } else {
        console.log('Error: Object is not instanceof VG.GameScene');
    }
};

VG.SceneController.prototype.remove = function (scene) {
    if (scene instanceof VG.Scene) {
        if (this.scenes[scene.name]) {
            console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
            return;
        }

        this.scenes[scene.name] = scene;
    } else {
        console.log('Error: Object is not instanceof VG.GameScene');
    }
};
VG.SceneController.prototype.activateScene = function (name, data) {

    if (name instanceof VG.Scene)
        name = name.name

    if (!this.scenes[name]) {
        console.log('Error: Scene with name >>>' + name + '<<< is not exist');
        return;
    }

    if (this.activeScene && this.activeScene.name == name)
        return

    if (this.activeScene) {

        this.activeScene.deactivate();
        
        VG.SceneEntity.prototype.remove.call(this, this.activeScene.view);
    }

    this.activeScene = this.scenes[name];

    VG.SceneEntity.prototype.add.call(this, this.activeScene.view);

    this.activeScene.activate(data);
};

VG.SceneController.prototype.update = function (dt) {
    if (this.activeScene && this.activeScene.update && this.activeScene.autoUpdate)
        this.activeScene.update(dt)
};
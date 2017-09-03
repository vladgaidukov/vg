VG.SceneController = function() {
    this.scenes = {};
    this.view = new THREE.Object3D();
    this.activeScene = null;
}

VG.SceneController.prototype = {
    constructor: VG.SceneController,

    add: function(scene) {
        if (scene instanceof VG.Scene) {
            if (this.scenes[scene.name]) {
                console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
                return;
            }

            this.scenes[scene.name] = scene;
        } else {
            console.log('Error: Object is not instanceof VG.GameScene');
        }
    },

    remove: function(scene) {
        if (scene instanceof VG.Scene) {
            if (!this.scenes[scene.name]) {
                console.log('Error: Scene with name >>>' + scene.name + '<<< is not exist');
                return;
            }

            this.scenes[scene.name] = null;
            delete this.scenes[scene.name];
        } else {
            console.log('Error: Object is not instanceof VG.GameScene');
        }
    },

    activateScene: function(name, data) {
        if (name instanceof VG.Scene)
            name = name.name

        if (!this.scenes[name]) {
            console.log('Error: Scene with name >>>' + name + '<<< is not exist');
            return;
        }

        if (this.activeScene && this.activeScene.name == name)
            return

        if (this.activeScene) {
            this.view.remove(this.activeScene.view);
            if (this.activeScene.ui)
                this.activeScene.ui.hide();
        }

        this.activeScene = this.scenes[name];
        this.view.add(this.activeScene.view);

        if (this.activeScene.ui)
            this.activeScene.ui.show();

        this.activeScene.init(data);

    },

    update: function(dt) {
        if (this.activeScene && this.activeScene.update && this.activeScene.autoUpdate)
            this.activeScene.update(dt)
    }
}
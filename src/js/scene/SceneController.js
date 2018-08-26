import {SceneEntity} from "./../SceneEntity.js";
import {Scene} from "./Scene.js";
import {EventDispatcher} from "../EventDispatcher.js";

function SceneController() {

    SceneEntity.call(this, name);
    this.matrixAutoUpdate = false;

    this.scenes = {};
    this.activeScene = null;

    EventDispatcher.bind("SceneController.activateScene", this, this.activateScene);
}

SceneController.prototype = Object.create(SceneEntity.prototype);
SceneController.constructor = SceneController;

SceneController.prototype.add = function(scene) {
    if (scene instanceof Scene) {
        if (this.scenes[scene.name]) {
            console.log("Error: Scene with name >>>" + scene.name + "<<< alreade exist");
            return;
        }

        this.scenes[scene.name] = scene;
    }
    else {
        console.log("Error: Object is not instanceof VG.GameScene");
    }
};

SceneController.prototype.remove = function(scene) {
    if (scene instanceof Scene) {
        if (this.scenes[scene.name]) {
            console.log("Error: Scene with name >>>" + scene.name + "<<< alreade exist");
            return;
        }

        this.scenes[scene.name] = scene;
    }
    else {
        console.log("Error: Object is not instanceof VG.GameScene");
    }
};
SceneController.prototype.activateScene = function(name, data) {

    if (name instanceof Scene) name = name.name;

    if (!this.scenes[name]) {
        console.log("Error: Scene with name >>>" + name + "<<< is not exist");
        return;
    }

    if (this.activeScene && this.activeScene.name == name) return;

    if (this.activeScene) {

        this.activeScene.deactivate();

        SceneEntity.prototype.remove.call(this, this.activeScene.view);
    }

    this.activeScene = this.scenes[name];

    SceneEntity.prototype.add.call(this, this.activeScene.view);

    this.activeScene.activate(data);
};

SceneController.prototype.update = function(dt) {
    if (this.activeScene && this.activeScene.update && this.activeScene.autoUpdate) this.activeScene.update(dt);
};

export {SceneController};

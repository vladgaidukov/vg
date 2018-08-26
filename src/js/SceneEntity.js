import {BaseEntity} from "./BaseEntity.js";

function SceneEntity() {

    BaseEntity.call(this);

    this.view = new THREE.Object3D();
    this.animated = [];
    this.autoUpdate = true;
}

SceneEntity.prototype = Object.create(BaseEntity.prototype);
SceneEntity.constructor = SceneEntity;

Object.defineProperty(SceneEntity.prototype, "matrixAutoUpdate", {

    get: function() {
        return this.view.matrixAutoUpdate;
    },

    set: function(value) {
        this.view.matrixAutoUpdate = value;
        this.view.updateMatrix();
    }
});

SceneEntity.prototype.add = function(object) {
    if (!object) return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view) this.view.add(view);

    if (object instanceof BaseEntity && !object.autoUpdate) return;

    var animated = typeof object.update == "function" ? object : typeof view.update == "function" ? view : false;
    if (animated) this.animated.push(animated);
};

SceneEntity.prototype.remove = function(object) {
    if (!object) return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view) this.view.remove(view);

    var animated = typeof object.update == "function" ? object : typeof view.update == "function" ? view : false;
    if (animated) this.animated.splice(this.animated.indexOf(animated), 1);
};

SceneEntity.prototype.update = function(dt) {
    for (var i = 0; i < this.animated.length; i++) {
        this.animated[i].update(dt);
    }
};

SceneEntity.prototype.clear = function() {

    for (var i = this.view.children.length - 1; i >= 0; i--) {
        this.view.remove(this.view.children[i]);
    }

    this.animated = [];
};

Object.defineProperty(SceneEntity.prototype, "position", {

    get: function() {
        return this.view.position;
    },

    set: function(value) {
        this.view.position.set(value.x, value.y, value.z);
    }
});

Object.defineProperty(SceneEntity.prototype, "rotation", {

    get: function() {
        return this.view.rotation;
    },

    set: function(value) {
        this.view.rotation.set(value.x, value.y, value.z);
    }
});

export {SceneEntity};

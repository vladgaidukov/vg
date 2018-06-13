VG.SceneEntity = function () {

    VG.BaseEntity.call(this);

    this.view = new THREE.Object3D;
    this.animated = [];
    this.autoUpdate = true;
};

VG.SceneEntity.prototype = Object.create(VG.BaseEntity.prototype);
VG.SceneEntity.constructor = VG.SceneEntity;

Object.defineProperty(VG.SceneEntity.prototype, 'matrixAutoUpdate', {

    get: function () {
        return this.view.matrixAutoUpdate;
    },

    set: function (value) {
        this.view.matrixAutoUpdate  = value;
        this.view.updateMatrix();
    },
});

VG.SceneEntity.prototype.add = function (object) {
    if (!object)
        return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view)
        this.view.add(view);

    if (object instanceof VG.BaseEntity && !object.autoUpdate)
        return

    var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
    if (animated)
        this.animated.push(animated);
};

VG.SceneEntity.prototype.remove = function (object) {
    if (!object)
        return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view)
        this.view.remove(view);

    var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
    if (animated)
        this.animated.splice(this.animated.indexOf(animated), 1);
};

VG.SceneEntity.prototype.update = function (dt) {
    for (var i = 0; i < this.animated.length; i++) {
        this.animated[i].update(dt);
    }
};

Object.defineProperty(VG.SceneEntity.prototype, 'position', {

    get: function () {
        return this.view.position;
    },

    set: function (value) {
        this.view.position.set(value.x, value.y, value.z);
    },
});

Object.defineProperty(VG.SceneEntity.prototype, 'rotation', {

    get: function () {
        return this.view.rotation;
    },

    set: function (value) {
        this.view.rotation.set(value.x, value.y, value.z);
    },
});

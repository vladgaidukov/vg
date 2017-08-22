VG.Scene = function(name) {
    this.view = new THREE.Object3D;
    this.name = name || 'default';
    this.autoUpdate = true;
    VG.EventDispatcher.bind('scene.' + this.name + '.add', this, this.add);
    VG.EventDispatcher.bind('scene.' + this.name + '.remove', this, this.remove);
}

VG.Scene.prototype = {
    constructor: VG.GameScene,

    add: function(object) {
        this.view.add(object);
    },

    remove: function(object) {
        this.view.remove(object);
    },

    update: function(dt) {
        return
    }
}
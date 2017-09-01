VG.BaseObject = function() {
    this.view = new THREE.Object3D;
    this.animated = [];
}

VG.BaseObject.prototype = {
    constructor: VG.BaseObject,

    add: function(object) {

        var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
        if (view)
            this.view.add(view);

        var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
        if (animated)
            this.animated.push(animated);
    },

    remove: function(object) {

        var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
        if (view)
            this.view.remove(view);

        var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
        if (animated)
            this.animated.splice(this.animated.indexOf(animated), 1);
    }
}
VG.BaseObject = function() {
    this.view = new THREE.Object3D;
    this.animated = [];
}

VG.BaseObject.prototype = {
    constructor: VG.GameScene,

    add : function(object) {

        if (object instanceof THREE.Object3D)
            this.view.add(object);
        else {
            if (object.view instanceof THREE.Object3D)
                this.view.add(object.view);
            if (typeof object.update == 'function')
                this.animated.push(object);
        }
    },

    remove : function(object) {

        if (object instanceof THREE.Object3D)
            this.view.remove(object);
        else {
            if (object.view instanceof THREE.Object3D)
                this.view.remove(object.view);
            if (typeof object.update == 'function')
                this.animated.splice(this.animated.indexOf(object), 1);
        }
    }
}
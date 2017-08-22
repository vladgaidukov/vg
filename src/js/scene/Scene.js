VG.Scene = function(name) {
    VG.BaseObject.call(this);

    this.name = name || 'default';
    this.autoUpdate = true;
    
}

VG.Scene.prototype = Object.create(VG.BaseObject.prototype);

VG.Scene.prototype = {
    constructor: VG.Scene,

    update: function(dt) {
        for (var i = 0; i < animated.length; i++) {
            animated[i].update(delta);
        }
    }
}
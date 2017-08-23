VG.Scene = function(name) {
    VG.BaseObject.call(this);

    this.name = name || 'default';
    this.autoUpdate = true;

}

VG.Scene.prototype = Object.create(VG.BaseObject.prototype);

VG.Scene.prototype.update = function(dt) {
    for (var i = 0; i < this.animated.length; i++) {
        this.animated[i].update(dt);
    }
}

VG.Scene.prototype.init = function() {
    console.warn('Warning: Scene with name >>>' + this.name + '<<< init method is not define' )
}
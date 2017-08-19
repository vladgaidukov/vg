VG.GameScene = function() {
    this.view = new THREE.Object3D;
    this.name = 'default';
}

VG.GameScene.prototype = {
    constructor: VG.GameScene,

    add: function(object) {
    	this.view.add(object);
    },

    remove: function(object){
    	this.view.remove(object);	
    }
}

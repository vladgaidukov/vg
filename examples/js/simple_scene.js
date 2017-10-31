var Scene1 = function() {
    VG.Scene.call(this);
    this.name = 'basic'

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial())
    this.view.add(mesh)

    this.update = function(dt) {
        mesh.rotation.y += dt
    }
};
Scene1.prototype = Object.create(VG.Scene.prototype);
Scene1.constructor = Scene1
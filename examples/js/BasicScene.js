var BasicScene = function() {
    VG.Scene.call(this);
    this.name = 'basic';

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ color: 'red' }))
    mesh.position.z = -5;
    this.view.add(mesh)

    this.update = function(dt) {
        mesh.rotation.y += dt
    }
};
BasicScene.prototype = Object.create(VG.Scene.prototype);
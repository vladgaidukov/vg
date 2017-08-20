var BasicScene2 = function(name) {
    VG.Scene.call(this, name);

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var mesh;
    loader.load('models/robot.json', function(geometry) {
        mesh = VG.Tools.createAnimatedMesh(
            geometry,
            new THREE.MeshPhongMaterial({
                map: textureLoader.load('models/robot.png'),
                bumpMap: textureLoader.load('models/robo_dirt.png')
            }))

        mesh.playAnimation('run');
        mesh.position.set(0, -2, -20);
        context.view.add(mesh);

    });

    this.update = function(dt) {
        if (mesh) {
            mesh.update(dt);
            mesh.rotation.y += dt;
        }
    };
};
BasicScene2.prototype = Object.create(VG.Scene.prototype);
var BasicScene3 = function(name) {
    VG.Scene.call(this, name);

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var cameraController = new VG.CameraControllerTDS({
        offset: new THREE.Vector3(0, 30, 1),
        offsetlook: new THREE.Vector3(10, 0, 5),
    });

    var mesh;
    loader.load('models/robot.json', function(geometry) {
        mesh = VG.Tools.createAnimatedMesh(
            geometry,
            new THREE.MeshPhongMaterial({
                map: textureLoader.load('models/robot.png'),
                bumpMap: textureLoader.load('models/robo_dirt.png')
            }))

        mesh.playAnimation('run');

        cameraController.target = mesh;

        context.view.add(mesh);

    });

    this.update = function(dt) {
        cameraController.update(dt)

        if (mesh) {
            mesh.update(dt);
        }
    };
};
BasicScene3.prototype = Object.create(VG.Scene.prototype);
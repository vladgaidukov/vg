var BasicScene3 = function() {
    VG.Scene.call(this);
    this.name = 'basic3';

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var cameraController = new VG.CameraControllerTopDown({
        offset: new THREE.Vector3(0, 30, 1),
        offsetlook: new THREE.Vector3(10, 0, 5),
        camera: VG.EventDispatcher.query('renderer.get.camera'),
        renderer: VG.EventDispatcher.query('renderer.get.renderer')
    });

    var mesh;
    loader.load('assets/models/robot.json', function(geometry) {
        var material = new THREE.MeshPhongMaterial({
            map: textureLoader.load('assets/models/robot.png'),
            bumpMap: textureLoader.load('assets/models/robo_dirt.png')
        });
        material.morphTargets = true;
        mesh = new THREE.MorphBlendMesh(geometry, material);
        mesh.autoCreateAnimations(60);

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

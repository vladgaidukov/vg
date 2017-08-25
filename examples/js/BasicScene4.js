var BasicScene4 = function(name) {
    VG.Scene.call(this, name);

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);


	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	directionalLight.position.set( 1, 1, 1 ).normalize();
	this.add( directionalLight );

    var camera = VG.EventDispatcher.query('renderer.get.camera');
    camera.position.set(0,5,-5)

    var renderer = VG.EventDispatcher.query('renderer.get.renderer');

    var cameraController = new VG.CameraControllerOrbit(camera, renderer.domElement);

    var mesh;
    loader.load('models/robot.json', function(geometry) {
        var material = new THREE.MeshToonMaterial({
            map: textureLoader.load('models/robot.png'),
            bumpMap: textureLoader.load('models/robo_dirt.png')
        });
        material.morphTargets = true;
        mesh = new THREE.MorphBlendMesh(geometry, material);
        mesh.autoCreateAnimations(60);

        mesh.playAnimation('run');

        context.view.add(mesh);

    });

    this.update = function(dt) {
        cameraController.update(dt)

        if (mesh) {
            mesh.update(dt);
        }
    };
};
BasicScene4.prototype = Object.create(VG.Scene.prototype);

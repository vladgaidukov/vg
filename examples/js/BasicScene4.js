var BasicScene4 = function() {
    VG.Scene.call(this);
    this.name = 'basic4';

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var keyboard = new VG.KeyboardEventsHandler(window);

	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	directionalLight.position.set( 1, 1, 1 ).normalize();
	this.add( directionalLight );

    var camera = VG.EventDispatcher.query('renderer.get.camera');
    camera.position.set(0,5,-5)

    var renderer = VG.EventDispatcher.query('renderer.get.renderer');

    var cameraController = new VG.CameraControllerOrbit(camera, renderer.domElement);
    this.add(cameraController)

    var mesh;
    loader.load('assets/models/robot.json', function(geometry) {
        var material = new THREE.MeshToonMaterial({
            map: textureLoader.load('assets/models/robot.png'),
            bumpMap: textureLoader.load('assets/models/robo_dirt.png')
        });
        material.morphTargets = true;
        mesh = new THREE.MorphBlendMesh(geometry, material);
        mesh.autoCreateAnimations(60);

        mesh.playAnimation('run');

        VG.EventDispatcher.bind('keyboard.keyup.w', this, function(){
            mesh.scale.addScalar(0.2)
        })

        VG.EventDispatcher.bind('keyboard.keyup.s', this, function(){
            mesh.scale.subScalar(0.2)
        })        

        context.add(mesh);

    });
};
BasicScene4.prototype = Object.create(VG.Scene.prototype);

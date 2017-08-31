var BasicScene2 = function() {
    VG.Scene.call(this);
    this.name = 'basic2';

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var mesh;
    loader.load('assets/models/robot.json', function(geometry) {
        var material = new THREE.MeshPhongMaterial({
            map: textureLoader.load('assets/models/robot.png'),
            bumpMap: textureLoader.load('assets/models/robo_dirt.png')
        });
        material.morphTargets = true;
        mesh = new THREE.MorphBlendMesh(geometry, material);
        mesh.autoCreateAnimations(60);

        mesh.position.z = -10;
        mesh.position.y = -2;

        mesh.playAnimation('run');

        context.add(mesh);

    });
};
BasicScene2.prototype = Object.create(VG.Scene.prototype);
BasicScene2.constructor = BasicScene2
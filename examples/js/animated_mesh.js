var Scene2 = function() {
    VG.Scene.call(this);
    this.name = 'basic2';

    var context = this;

    var loader = new THREE.JSONLoader();

    var textureLoader = new THREE.TextureLoader();

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.view.add(light);

    var mesh;
    loader.load('assets/models/234234.json', function(geometry, materials) {
        console.log(arguments)
        for (var i = materials.length - 1; i >= 0; i--) {
            materials[i].morphTargets = true;
        }
        mesh = new THREE.MorphBlendMesh(geometry, materials);
        //mesh.scale.set(0.02, 0.02, 0.02)

        for (var i = 200; i >= 0; i--) {

            var m = mesh.clone()
            m.autoCreateAnimations(25);
            m.playAnimation('animation');
            m.position.set(Math.random() * 100 - 50,0, Math.random() * 100 - 50)
            context.add(m);  
        }

        

    });
};
Scene2.prototype = Object.create(VG.Scene.prototype);
Scene2.constructor = Scene2
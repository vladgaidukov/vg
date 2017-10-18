var BasicScene5 = function () {
    VG.Scene.call(this);
    this.name = 'basic5';

    var context = this;

    this.init = function (data) {

        var light = new THREE.PointLight();
        light.position.set(10, 20, 10)
        this.add(light);

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set( 1, 1, 1 ).normalize();
        this.add( directionalLight );

        var camera = VG.EventDispatcher.query('engine.get.camera');
        camera.position.set(0, 5, -5)

        var renderer = VG.EventDispatcher.query('engine.get.renderer');

        var cameraController = new VG.CameraControllerOrbit(camera, renderer.domElement);

        this.add(data.assets['naturePack_169']);

        var avatar = data.assets['avatar'];
        avatar.animations[0].play();
        this.add(avatar);
        for (var i = 100; i >= 0; i--) {
            avatar = data.assets['monster'].clone();
            avatar.view.scale.set(0.001,0.001,0.001);
            avatar.animations[0].play();
            avatar.view.position.set(100 * Math.random() - 100, 0, 100 * Math.random() - 100);
            this.add(avatar);
        }

        
    }
};
BasicScene5.prototype = Object.create(VG.Scene.prototype);
BasicScene5.constructor = BasicScene5;
var Scene5 = function () {
    VG.Scene.call(this);
    this.name = 'basic5';

    var context = this;

    this.init = function (data) {

        var light = new THREE.PointLight();
        light.position.set(10, 20, 10)
        this.add(light);

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set( 1000, 1000, 1000 )
        this.add( directionalLight );

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);
        directionalLight.position.set( -500, -500, -500 )
        this.add( directionalLight );

        var camera = VG.EventDispatcher.query('engine.get.camera');
        camera.position.set(0, 5, -5)

        var renderer = VG.EventDispatcher.query('engine.get.renderer');

        var cameraController = new VG.CameraControllerOrbit(camera, renderer.domElement);

        //this.add(data.assets['naturePack_169']);
        var angar = data.assets.angar.clone();
        angar.scale.set(10,10,10);
        angar.position.y+= 53.5;
        this.add(angar);


        var avatar = data.assets['avatar'];
        avatar.animations[0].play();
        avatar.view.scale.set(7,7,7)
        this.add(avatar);


        for (var i = 10; i >= 0; i--) {
            avatar = data.assets['monster'].clone();
            avatar.view.scale.set(0.01,0.01,0.01);
            avatar.animations[0].play();
            avatar.view.position.set(100 * Math.random() - 50, 0, 100 * Math.random() - 50);
            this.add(avatar);
        }

        for (var i = 10; i >= 0; i--) {
            var mesh = data.assets['234234'].clone();
            mesh.autoCreateAnimations(25);
            mesh.playAnimation('animation');
            mesh.position.set(100 * Math.random() - 50, 0, 100 * Math.random() - 50);
            this.add(mesh);
        }

        
    }
};
Scene5.prototype = Object.create(VG.Scene.prototype);
Scene5.constructor = Scene5;
var Scene5 = function () {
    VG.Scene.call(this);
    this.name = 'basic5';

    var context = this;

};
Scene5.prototype = Object.create(VG.Scene.prototype);
Scene5.constructor = Scene5;

Scene5.prototype.activate = function (data) {

    var light = new THREE.PointLight();
    light.position.set(10, 20, 10)
    this.add(light);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1000, 1000, 1000)
    this.add(directionalLight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-500, -500, -500)
    this.add(directionalLight);

    var camera = VG.EventDispatcher.query('Engine.get.camera');
    camera.position.set(0, 5, -5)

    var renderer = VG.EventDispatcher.query('Engine.get.renderer');

    var cameraController = new VG.CameraControllerOrbit(camera, renderer.domElement);


    var avatar = data.assets['avatar'];
    avatar.animations[0].play();
    avatar.view.scale.set(7, 7, 7)
    this.add(avatar);
    
    var angar = data.assets['angar'];
    angar.scale.set(10,10,10);
    angar.position.y+= 53.5;
    this.add(angar);


    var sprite = new VG.AnimatedSprite(data.assets['PlasLaser'], 8, 6, 0.016666666666666666);
    sprite.scale = 10;
    sprite.position.set(10, 10, 10);
    this.add(sprite);

    var mesh = data.assets['234234'].clone();
    mesh.parseAnimations(25);
    mesh.playAnimations(['animation']);
    mesh.position.set(100 * Math.random() - 50, 0, 100 * Math.random() - 50);
    this.add(mesh);


    var ui = new VG.UI.Container();

    var testPanel = new VG.UI.Panel(data.assets['dialog'])
    ui.add(testPanel)

    var testBtn = new VG.UI.Button(data.assets['BTN_RED_RECT_OUT'], data.assets['BTN_RED_RECT_IN'], function () {
        alert('btn')
    })
    testBtn.scale = 0.5;
    testBtn.position = { x: '50%', y: 30 }
    testPanel.add(testBtn)

    var clone = testPanel.clone();
    clone.position = testBtn.position;
    ui.add(clone)

    var testText = new VG.UI.TextElement('1', '25px arial, sans-serif');
    clone.add(testText);
    testText.position = { x: 120, y: 30 };

    setInterval(function () {
        testText.value = parseInt(testText.value) + 1;
    }, 150)

}
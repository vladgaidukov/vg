VG.Engine = function (container) {
    VG.BaseObject.call(this, name);
    var self = this;

    this.domelement = document.getElementById(container);

    this.view = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(VG.CAMERA_FOV || 45, this.domelement.clientWidth / this.domelement.clientHeight, VG.CAMERA_NEAR, VG.CAMERA_FAR);
    this.camera.position.copy(VG.CAMERA_POSITION);
    this.view.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
        antialias: VG.ANTIALIAS || false
    });
    this.renderer.setClearColor(VG.CLEAR_COLOR);
    this.renderer.setSize(this.domelement.clientWidth, this.domelement.clientHeight);
    this.domelement.append(this.renderer.domElement);

    var composer = new THREE.EffectComposer( this.renderer );

    composer.addPass(new THREE.RenderPass(this.view, this.camera));

    pass = new THREE.BloomBlendPass(2, 1, new THREE.Vector2(this.domelement.clientWidth, this.domelement.clientHeight));
    pass.renderToScreen = true;
    composer.addPass(pass);

    var clock = new THREE.Clock();

    this.renderer.setPixelRatio(window.devicePixelRatio * VG.DETAIL);

    window.addEventListener('resize', function () {
        self.resize();
    }, false);

    function render() {
        var delta = clock.getDelta();

        if (typeof TWEEN !== "undefined") {
            TWEEN.update();
        }

        for (var i = 0; i < self.animated.length; i++) {
            self.animated[i].update(delta);
        }

        self.renderer.render(self.view, self.camera);

        //composer.render(delta);

        requestAnimationFrame(render);
    }

    render();

    VG.EventDispatcher.bind('engine.get.camera', this, function () { return this.camera });
    VG.EventDispatcher.bind('engine.get.renderer', this, function () { return this.renderer });
    VG.EventDispatcher.bind('engine.add', this, this.add);
    VG.EventDispatcher.bind('engine.remove', this, this.remove);
    VG.EventDispatcher.bind('engine.resize', this, this.resize);
};

VG.Engine.prototype = Object.create(VG.BaseObject.prototype);
VG.Engine.constructor = VG.Engine;

VG.Engine.prototype.resize = function () {
    this.camera.aspect = this.domelement.clientWidth / this.domelement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.domelement.clientWidth, this.domelement.clientHeight);
}
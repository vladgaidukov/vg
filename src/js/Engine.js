VG.Engine = function (container) {
    VG.BaseObject.call(this, name);
    var self = this;

    var domelement = document.getElementById(container);

    this.view = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(VG.CAMERA_FOV || 45, domelement.clientWidth / domelement.clientHeight, VG.CAMERA_NEAR, VG.CAMERA_FAR);
    camera.position.copy(VG.CAMERA_POSITION);
    this.view.add(camera);

    var renderer = new THREE.WebGLRenderer({
        antialias: VG.ANTIALIAS || false
    });
    renderer.setClearColor(VG.CLEAR_COLOR);
    renderer.setSize(domelement.clientWidth, domelement.clientHeight);
    domelement.append(renderer.domElement);

    var clock = new THREE.Clock();

    renderer.setPixelRatio(window.devicePixelRatio * VG.DETAIL);

    window.addEventListener('resize', function () {
        camera.aspect = domelement.clientWidth / domelement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(domelement.clientWidth, domelement.clientHeight);
    }, false);

    function render() {
        var delta = clock.getDelta();

        if (typeof TWEEN !== "undefined") {
            TWEEN.update();
        }

        for (var i = 0; i < self.animated.length; i++) {
            self.animated[i].update(delta);
        }
        renderer.render(self.view, camera);

        requestAnimationFrame(render);
    }

    render();

    VG.EventDispatcher.bind('renderer.get.camera', this, function () { return camera });
    VG.EventDispatcher.bind('renderer.get.renderer', this, function () { return renderer });
    VG.EventDispatcher.bind('renderer.add', this, this.add);
    VG.EventDispatcher.bind('renderer.remove', this, this.remove);
};

VG.Engine.prototype = Object.create(VG.BaseObject.prototype);
VG.Engine.constructor = VG.Engine
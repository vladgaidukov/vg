var VG = VG || {};
VG.DEBUG = false;

VG.DETAIL = 1;
VG.ANTIALIAS = false;
VG.CLEAR_COLOR = 'black'

VG.CAMERA_FOV = 45;
VG.CAMERA_NEAR = 0.1;
VG.CAMERA_FAR = 10000;
VG.CAMERA_POSITION = new THREE.Vector3(0, 0, 0);

VG.Engine = function(container) {
    var self = this;

    var domelement = document.getElementById(container);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(VG.CAMERA_FOV || 45, domelement.clientWidth / domelement.clientHeight, VG.CAMERA_NEAR, VG.CAMERA_FAR);
    camera.position.copy(VG.CAMERA_POSITION);
    scene.add(camera);

    var renderer = new THREE.WebGLRenderer({
        antialias: VG.ANTIALIAS || false
    });
    renderer.setClearColor(VG.CLEAR_COLOR);
    renderer.setSize(domelement.clientWidth, domelement.clientHeight);
    domelement.append(renderer.domElement);

    var clock = new THREE.Clock();

    var animated = [];

    renderer.setPixelRatio(window.devicePixelRatio * VG.DETAIL);

    window.addEventListener('resize', function() {
        camera.aspect = domelement.clientWidth / domelement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(domelement.clientWidth, domelement.clientHeight);
    }, false);

    function render() {
        var delta = clock.getDelta();

        if (typeof TWEEN !== "undefined") {
            TWEEN.update();
        }

        for (var i = 0; i < animated.length; i++) {
            animated[i].update(delta);
        }
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    render();

    this.add = function(object) {

        if (object instanceof THREE.Object3D)
            scene.add(object);
        else {
            if (object.view instanceof THREE.Object3D)
                scene.add(object.view);
            if (typeof object.update == 'function')
                animated.push(object);
        }
    }

    this.remove = function(object) {

        if (object instanceof THREE.Object3D)
            scene.remove(object);
        else {
            if (object.view instanceof THREE.Object3D)
                scene.remove(object.view);
            if (typeof object.update == 'function')
                animated.splice(animated.indexOf(object), 1);
        }
    }
};

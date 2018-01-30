VG.CameraControllerTopDown = function (options) {

    options = options || {}

    this.offset = options.offset || new THREE.Vector3(0, 120, 120);
    this.target = options.target || new THREE.Mesh();

    var camera = options.camera || console.error('options.camera is undefind');

    this.update = function () {

        camera.position.copy(this.target.position.clone().add(this.offset));
        camera.lookAt(this.target.position);

    };
    this.destroy = function () {
        return;
    };

};
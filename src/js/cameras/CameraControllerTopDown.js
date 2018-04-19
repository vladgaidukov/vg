VG.CameraControllerTopDown = function (options) {

    VG.BaseEntity.call(this);
    this.autoUpdate = true;

    options = options || {}

    this.offset = options.offset || new THREE.Vector3(0, 120, 120);
    this.target = options.target || new THREE.Mesh();

    this.camera = options.camera || console.error('options.camera is undefind');

};

VG.CameraControllerTopDown.prototype = Object.create(VG.BaseEntity.prototype);
VG.CameraControllerTopDown.constructor = VG.SceneEntity;

VG.CameraControllerTopDown.prototype.update = function () {

    this.camera.position.copy(this.target.position.clone().add(this.offset));
    this.camera.lookAt(this.target.position);

};

VG.CameraControllerTopDown.prototype.setTarget = function (view) {

    this.target = view;

};


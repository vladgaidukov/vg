VG.CameraControllerTopDown = function (options) {

    VG.BaseEntity.call(this);
    this.autoUpdate = true;

    options = options || {}

    this.offset = options.offset || new THREE.Vector3(0, 120, 0);
	this.offsetAngle = Math.atan2(this.offset.x, this.offset.z);
	this.dxoffset = Math.cos(this.offsetAngle);
	this.dzoffset = Math.sin(this.offsetAngle);

    this.target = options.target || new THREE.Mesh();
    this.moveOffset = options.moveOffset || new THREE.Vector3(20, 20, 20);

    this.mousePosition = new THREE.Vector2();


    this.camera = options.camera || console.error('options.camera is undefind');

    VG.EventDispatcher.bind('mouse.move', this, this.mouseMove);

};

VG.CameraControllerTopDown.prototype = Object.create(VG.BaseEntity.prototype);
VG.CameraControllerTopDown.constructor = VG.SceneEntity;

VG.CameraControllerTopDown.prototype.update = function () {

	var position = new THREE.Vector3();
	var look = new THREE.Vector3();

	return function (){

		position.copy(this.target.position).add(this.offset);

		position.x += this.moveOffset.x * this.mousePosition.x * this.dxoffset;
		position.z -= this.moveOffset.z * this.mousePosition.y //* this.dzoffset;

		look.copy(this.target.position);
		look.x += this.moveOffset.x * this.mousePosition.x * this.dxoffset;
		look.z -= this.moveOffset.z * this.mousePosition.y //* this.dzoffset;

		this.camera.position.copy(position);

	    this.camera.lookAt(look);
	}
}();

VG.CameraControllerTopDown.prototype.setTarget = function (view) {

    this.target = view;

};

VG.CameraControllerTopDown.prototype.mouseMove = function (event) {

	this.mousePosition.x = event.sx * this.dxoffset - event.sy * this.dzoffset;
	this.mousePosition.y = event.sx * this.dzoffset + event.sy * this.dxoffset;

};



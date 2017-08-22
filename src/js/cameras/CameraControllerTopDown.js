VG.CameraControllerTopDown = function(options) {

    options = options || {}

    this.offset = options.offset || new THREE.Vector3(0, 120, 0);
    this.offsetlook = options.offsetlook || new THREE.Vector3(10, 0, 10);
    this.target = options.target || new THREE.Mesh();

    var mouse = new THREE.Vector3(0, 0, 0);
    var newpos = new THREE.Vector3(0, 0, 0);
    var newlook = new THREE.Vector3(0, 0, 0);
    var camera = options.camera || console.error('options.camera is undefind');
    var renderer = options.renderer || console.error('options.renderer is undefind');

    this.mousemove = function(evt) {
        mouse.x = (((evt.clientX - renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1);
        mouse.z = (((evt.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 - 1);
    };

    this.update = function() {

        newpos.x = this.target.position.x + this.offset.x;
        newpos.y = this.target.position.y + this.offset.y;
        newpos.z = this.target.position.z + this.offset.z;

        this.z_offset = mouse.z * this.offsetlook.z ;
        this.x_offset = mouse.x * this.offsetlook.x ;

        camera.position.x = newpos.x + this.x_offset
        camera.position.y = newpos.y;
        camera.position.z = newpos.z + this.z_offset

        newlook.x = this.target.position.x + this.x_offset;
        newlook.y = this.target.position.y;
        newlook.z = this.target.position.z + this.z_offset;

        camera.lookAt(newlook);

    };
    this.destroy = function() {
        document.removeEventListener('mousemove', this.mousemove, false);
    };

    document.addEventListener('mousemove', this.mousemove, false);

};
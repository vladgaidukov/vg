/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author vgaidukov / https://github.com/vladgaidukov
 */

VG.CameraControllerOrbit = function(object, domElement) {

    this.object = object;

    this.domElement = (domElement !== undefined) ? domElement : document;

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new THREE.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    this.minAzimuthAngle = -Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    this.enableKeys = true;

    // The four arrow keys
    this.keys = { LEFT: 'a', UP: 'w', RIGHT: 'd', BOTTOM: 's' };

    // Mouse buttons
    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    this.getPolarAngle = function() {

        return spherical.phi;

    };

    this.getAzimuthalAngle = function() {

        return spherical.theta;

    };

    this.saveState = function() {

        scope.target0.copy(scope.target);
        scope.position0.copy(scope.object.position);
        scope.zoom0 = scope.object.zoom;

    };

    this.reset = function() {

        scope.target.copy(scope.target0);
        scope.object.position.copy(scope.position0);
        scope.object.zoom = scope.zoom0;

        scope.object.updateProjectionMatrix();

        scope.update();

        state = STATE.NONE;

    };

    this.update = function() {

        var offset = new THREE.Vector3();

        var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
        var quatInverse = quat.clone().inverse();

        var lastPosition = new THREE.Vector3();
        var lastQuaternion = new THREE.Quaternion();

        return function update() {

            var position = scope.object.position;

            offset.copy(position).sub(scope.target);

            offset.applyQuaternion(quat);

            spherical.setFromVector3(offset);

            if (scope.autoRotate && state === STATE.NONE) {

                rotateLeft(getAutoRotationAngle());

            }

            spherical.theta += sphericalDelta.theta;
            spherical.phi += sphericalDelta.phi;

            spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

            spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

            spherical.makeSafe();


            spherical.radius *= scale;

            spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

            scope.target.add(panOffset);

            offset.setFromSpherical(spherical);

            offset.applyQuaternion(quatInverse);

            position.copy(scope.target).add(offset);

            scope.object.lookAt(scope.target);

            if (scope.enableDamping === true) {

                sphericalDelta.theta *= (1 - scope.dampingFactor);
                sphericalDelta.phi *= (1 - scope.dampingFactor);

            } else {

                sphericalDelta.set(0, 0, 0);

            }

            scale = 1;
            panOffset.set(0, 0, 0);

            if (zoomChanged ||
                lastPosition.distanceToSquared(scope.object.position) > EPS ||
                8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

                lastPosition.copy(scope.object.position);
                lastQuaternion.copy(scope.object.quaternion);
                zoomChanged = false;

                return true;

            }

            return false;

        };

    }();

    this.dispose = function() {

        if (VG.MOBILE_CLIENT) {
            VG.EventDispatcher.unbind('mouse.down', onTouchStart);
            VG.EventDispatcher.unbind('mouse.up', onTouchEnd);
            VG.EventDispatcher.unbind('mouse.move', onTouchMove);
        } else {

            VG.EventDispatcher.unbind('mouse.down', onMouseDown);
            VG.EventDispatcher.unbind('mouse.scroll', onMouseWheel);
        }

    };

    var scope = this;

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    var EPS = 0.000001;

    var spherical = new THREE.Spherical();
    var sphericalDelta = new THREE.Spherical();

    var scale = 1;
    var panOffset = new THREE.Vector3();
    var zoomChanged = false;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow(0.95, scope.zoomSpeed);

    }

    function rotateLeft(angle) {

        sphericalDelta.theta -= angle;

    }

    function rotateUp(angle) {

        sphericalDelta.phi -= angle;

    }

    var panLeft = function() {

        var v = new THREE.Vector3();

        return function panLeft(distance, objectMatrix) {

            v.setFromMatrixColumn(objectMatrix, 0);
            v.multiplyScalar(-distance);

            panOffset.add(v);

        };

    }();

    var panUp = function() {

        var v = new THREE.Vector3();

        return function panUp(distance, objectMatrix) {

            v.setFromMatrixColumn(objectMatrix, 1);
            v.multiplyScalar(distance);

            panOffset.add(v);

        };

    }();

    var pan = function() {

        var offset = new THREE.Vector3();

        return function pan(deltaX, deltaY) {

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if (scope.object instanceof THREE.PerspectiveCamera) {

                var position = scope.object.position;
                offset.copy(position).sub(scope.target);
                var targetDistance = offset.length();

                targetDistance *= Math.tan((scope.object.fov / 2) * Math.PI / 180.0);
				
				panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);

            } else if (scope.object instanceof THREE.OrthographicCamera) {

                panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);

            } else {

                console.warn('WARNING: CameraControllerOrbit.js encountered an unknown camera type - pan disabled.');
                scope.enablePan = false;

            }

        };

    }();

    function dollyIn(dollyScale) {

        if (scope.object instanceof THREE.PerspectiveCamera) {

            scale /= dollyScale;

        } else if (scope.object instanceof THREE.OrthographicCamera) {

            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn('WARNING: CameraControllerOrbit.js encountered an unknown camera type - dolly/zoom disabled.');
            scope.enableZoom = false;

        }

    }

    function dollyOut(dollyScale) {

        if (scope.object instanceof THREE.PerspectiveCamera) {

            scale *= dollyScale;

        } else if (scope.object instanceof THREE.OrthographicCamera) {

            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn('WARNING: CameraControllerOrbit.js encountered an unknown camera type - dolly/zoom disabled.');
            scope.enableZoom = false;

        }

    }

    function handleMouseDownRotate(event) {

        rotateStart.set(event.x, event.y);

    }

    function handleMouseDownDolly(event) {

        dollyStart.set(event.x, event.y);

    }

    function handleMouseDownPan(event) {

        panStart.set(event.x, event.y);

    }

    function handleMouseMoveRotate(event) {

        rotateEnd.set(event.x, event.y);
        rotateDelta.subVectors(rotateEnd, rotateStart);

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

        rotateStart.copy(rotateEnd);

        scope.update();

    }

    function handleMouseMoveDolly(event) {

        dollyEnd.set(event.x, event.y);

        dollyDelta.subVectors(dollyEnd, dollyStart);

        if (dollyDelta.y > 0) {

            dollyIn(getZoomScale());

        } else if (dollyDelta.y < 0) {

            dollyOut(getZoomScale());

        }

        dollyStart.copy(dollyEnd);

        scope.update();

    }

    function handleMouseMovePan(event) {

        panEnd.set(event.x, event.y);

        panDelta.subVectors(panEnd, panStart);

        pan(panDelta.x, panDelta.y);

        panStart.copy(panEnd);

        scope.update();

    }

    function handleMouseWheel(dir) {

        if (dir < 0) {

            dollyOut(getZoomScale());

        } else if (dir > 0) {

            dollyIn(getZoomScale());

        }

        scope.update();

    }

    function handleTouchStartRotate(event) {

        rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchStartDolly(event) {

        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );

        dollyStart.set( 0, distance );

    }

    function handleTouchStartPan(event) {

        panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchMoveRotate(event) {

        rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
        rotateDelta.subVectors( rotateEnd, rotateStart );

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
        rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

        rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

        rotateStart.copy( rotateEnd );

        scope.update();

    }

    function handleTouchMoveDolly(event) {
        
        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );
        dollyEnd.set(0, distance);

        dollyDelta.subVectors(dollyEnd, dollyStart);

        if (dollyDelta.y > 0) {

            dollyOut(getZoomScale());

        } else if (dollyDelta.y < 0) {

            dollyIn(getZoomScale());

        }

        dollyStart.copy(dollyEnd);

        scope.update();

    }

    function handleTouchMovePan(event) {

        panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

        panDelta.subVectors(panEnd, panStart);

        pan(panDelta.x, panDelta.y);

        panStart.copy(panEnd);

        scope.update();

    }

    function onMouseDown(event) {

        if (scope.enabled === false) return;

        switch (event.button) {

            case scope.mouseButtons.ORBIT:

                if (scope.enableRotate === false) return;

                handleMouseDownRotate(event);

                state = STATE.ROTATE;

                break;

            case scope.mouseButtons.ZOOM:

                if (scope.enableZoom === false) return;

                handleMouseDownDolly(event);

                state = STATE.DOLLY;

                break;

            case scope.mouseButtons.PAN:

                if (scope.enablePan === false) return;

                handleMouseDownPan(event);

                state = STATE.PAN;

                break;

        }

        if (state !== STATE.NONE) {

        	VG.EventDispatcher.bind('mouse.move', this, onMouseMove);
        	VG.EventDispatcher.bind('mouse.up', this, onMouseUp);

        }

    }

    function onMouseMove(event) {

        if (scope.enabled === false) return;

        switch (state) {

            case STATE.ROTATE:

                if (scope.enableRotate === false) return;

                handleMouseMoveRotate(event);

                break;

            case STATE.DOLLY:

                if (scope.enableZoom === false) return;

                handleMouseMoveDolly(event);

                break;

            case STATE.PAN:

                if (scope.enablePan === false) return;

                handleMouseMovePan(event);

                break;

        }

    }

    function onMouseUp(event) {

        if (scope.enabled === false) return;

    	VG.EventDispatcher.unbind('mouse.move', onMouseMove);
    	VG.EventDispatcher.unbind('mouse.up', onMouseUp);

        state = STATE.NONE;

    }

    function onMouseWheel(dir) {

        if (scope.enabled === false || scope.enableZoom === false || (state !== STATE.NONE && state !== STATE.ROTATE)) return;

        handleMouseWheel(dir);
    }

    function onKeyDown(event) {

        if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

        handleKeyDown(event);

    }

    function onTouchStart(event) {

        if (scope.enabled === false) return;

        var event = event.event;

        switch (event.touches.length) {

            case 1:

                if (scope.enableRotate === false) return;

                handleTouchStartRotate(event);

                state = STATE.TOUCH_ROTATE;

                break;

            case 2:

                if (scope.enableZoom === false) return;

                handleTouchStartDolly(event);

                state = STATE.TOUCH_DOLLY;

                break;

            case 3:

                if (scope.enablePan === false) return;

                handleTouchStartPan(event);

                state = STATE.TOUCH_PAN;

                break;

            default:

                state = STATE.NONE;

        }

    }

    function onTouchMove(event) {

        if (scope.enabled === false) return;

        var event = event.event;

        switch (event.touches.length) {

            case 1:

                if (scope.enableRotate === false) return;
                if (state !== STATE.TOUCH_ROTATE) return;

                handleTouchMoveRotate(event);

                break;

            case 2:

                if (scope.enableZoom === false) return;
                if (state !== STATE.TOUCH_DOLLY) return;

                handleTouchMoveDolly(event);

                break;

            case 3:

                if (scope.enablePan === false) return;
                if (state !== STATE.TOUCH_PAN) return;

                handleTouchMovePan(event);

                break;

            default:

                state = STATE.NONE;

        }

    }

    function onTouchEnd(event) {

        if (scope.enabled === false) return;

        state = STATE.NONE;

    }

    if (VG.MOBILE_CLIENT) {
        VG.EventDispatcher.bind('mouse.down', this, onTouchStart);
        VG.EventDispatcher.bind('mouse.up', this, onTouchEnd);
        VG.EventDispatcher.bind('mouse.move', this, onTouchMove);
    } else {
        VG.EventDispatcher.bind('mouse.down', this, onMouseDown);
        VG.EventDispatcher.bind('mouse.scroll', this, onMouseWheel);
        VG.EventDispatcher.bind('keyboard.keydown.' + scope.keys.UP, this, function() {
            pan(0, scope.keyPanSpeed);
            scope.update();
        });

        VG.EventDispatcher.bind('keyboard.keydown.' + scope.keys.BOTTOM, this, function() {
            pan(0, -scope.keyPanSpeed);
            scope.update();
        });

        VG.EventDispatcher.bind('keyboard.keydown.' + scope.keys.LEFT, this, function() {
            pan(scope.keyPanSpeed, 0);
            scope.update();
        });

        VG.EventDispatcher.bind('keyboard.keydown.' + scope.keys.RIGHT, this, function() {
            pan(-scope.keyPanSpeed, 0);
            scope.update();
        });
    }

    this.update();

};

VG.CameraControllerOrbit.prototype = {
    center: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .center has been renamed to .target');
            return this.target;

        }

    },

    noZoom: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .noZoom has been deprecated. Use .enableZoom instead.');
            return !this.enableZoom;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .noZoom has been deprecated. Use .enableZoom instead.');
            this.enableZoom = !value;

        }

    },

    noRotate: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .noRotate has been deprecated. Use .enableRotate instead.');
            return !this.enableRotate;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .noRotate has been deprecated. Use .enableRotate instead.');
            this.enableRotate = !value;

        }

    },

    noPan: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .noPan has been deprecated. Use .enablePan instead.');
            return !this.enablePan;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .noPan has been deprecated. Use .enablePan instead.');
            this.enablePan = !value;

        }

    },

    noKeys: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .noKeys has been deprecated. Use .enableKeys instead.');
            return !this.enableKeys;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .noKeys has been deprecated. Use .enableKeys instead.');
            this.enableKeys = !value;

        }

    },

    staticMoving: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .staticMoving has been deprecated. Use .enableDamping instead.');
            return !this.enableDamping;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .staticMoving has been deprecated. Use .enableDamping instead.');
            this.enableDamping = !value;

        }

    },

    dynamicDampingFactor: {

        get: function() {

            console.warn('VG.CameraControllerOrbit: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
            return this.dampingFactor;

        },

        set: function(value) {

            console.warn('VG.CameraControllerOrbit: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
            this.dampingFactor = value;

        }

    }
}
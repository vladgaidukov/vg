/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_VG_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_VG_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_VG_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_BaseObject_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_BaseObject_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_BaseObject_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_Engine_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_Engine_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_Engine_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_EventDispatcher_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_EventDispatcher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_EventDispatcher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_loaders_MTLLoader_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_loaders_MTLLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_loaders_MTLLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_loaders_OBJLoader_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_loaders_OBJLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_loaders_OBJLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_AssetsLoader_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_AssetsLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_AssetsLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_cameras_CameraControllerTopDown_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_cameras_CameraControllerTopDown_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_cameras_CameraControllerTopDown_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_cameras_CameraControllerOrbit_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_cameras_CameraControllerOrbit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__js_cameras_CameraControllerOrbit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_scene_SceneController_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_scene_SceneController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__js_scene_SceneController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_scene_Scene_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_scene_Scene_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__js_scene_Scene_js__);























/***/ }),
/* 1 */
/***/ (function(module, exports) {

VG = {}

VG.DEBUG = false;

VG.DETAIL = 1;
VG.ANTIALIAS = false;
VG.CLEAR_COLOR = 'white'

VG.CAMERA_FOV = 45;
VG.CAMERA_NEAR = 0.1;
VG.CAMERA_FAR = 10000;
VG.CAMERA_POSITION = new THREE.Vector3(0, 0, 0);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

VG.BaseObject = function () {
    this.view = new THREE.Object3D;
    this.animated = [];
}

VG.BaseObject.prototype = {
    constructor: VG.BaseObject,

    add: function (object) {

        if (object instanceof THREE.Object3D)
            this.view.add(object);
        else {
            if (object.view instanceof THREE.Object3D)
                this.view.add(object.view);
            if (typeof object.update == 'function')
                this.animated.push(object);
        }
    },

    remove: function (object) {

        if (object instanceof THREE.Object3D)
            this.view.remove(object);
        else {
            if (object.view instanceof THREE.Object3D)
                this.view.remove(object.view);
            if (typeof object.update == 'function')
                this.animated.splice(this.animated.indexOf(object), 1);
        }
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

VG.EventDispatcher = {
    listeners: {},
    listenersArgs: {},

    bind: function (type, listener, callback, args) {
        if (typeof (type) !== "string") {
            console.error("EventDispatcher.bind -> 'type' should be string constant");
            return;
        }

        if (listener === null || listener === undefined) {
            console.error("EventDispatcher.bind -> 'listener' should exist");
            return;
        }

        if (typeof listener !== "object") {
            console.error("EventDispatcher.bind -> 'listener' should be object");
            return;
        }

        if (typeof callback !== "function") {
            console.error("EventDispatcher.bind -> 'callback' should be function");
            return;
        }

        if (this.listeners[type] == undefined)
            this.listeners[type] = [];
        if (this.listenersArgs[type] == undefined)
            this.listenersArgs[type] = [];

        var listeners = this.listeners[type];
        var listenersArgs = this.listenersArgs[type];

        var index = this.getListenerIndex(listeners, listener);

        if (index < 0) {
            listeners.push({
                object: listener,
                func: callback
            });
            listenersArgs.push(args || {});
        }
    },

    unbind: function (type, callback) {
        if (typeof (type) !== "string") {
            console.error("EventDispatcher.unbind -> 'type' should be string constant");
            return;
        }

        if (callback === null || callback === undefined) {
            console.error("EventDispatcher.removeEventListener -> 'listener' should exist");
            return;
        }

        if ((typeof callback !== "function") && ((typeof callback.method !== "string") || (typeof callback.context !== "object"))) {
            console.error("EventDispatcher.unbind -> 'callback' has not supported type");
            return;
        }

        if (this.listeners[type] == undefined)
            this.listeners[type] = [];

        var listeners = this.listeners[type];
        var listenersArgs = this.listenersArgs[type];

        var index = this.getListenerIndex(listeners, callback);

        if (index >= 0) {
            listeners.splice(index, 1);
            listenersArgs.splice(index, 1);
        }
    },

    send: function (eventName, eventArgs) {
        if (typeof (eventName) !== "string") {
            console.error("EventDispatcher.send -> 'event.type' should be string constant");
            return;
        }

        if (this.listeners[eventName] == undefined)
            return;

        var listeners = this.listeners[eventName];
        var listenersArgs = this.listenersArgs[eventName];
        for (var i = 0; i < listeners.length; i++) {
            try {
                var listener = listeners[i];
                listener.func.call(listener.object, eventArgs, listenersArgs[i]);
            } catch (err) {
                console.error("EventDispatcher.send -> " + eventName + " Exception thrown in event handler -> " + err);
            }
        }
    },

    query: function (eventName, eventArgs) {
        if (typeof (eventName) !== "string") {
            console.error("EventDispatcher.send -> 'event.type' should be string constant");
            return;
        }

        if (this.listeners[eventName] == undefined)
            return undefined;

        var listeners = this.listeners[eventName];
        if (listeners > 1) {
            console.error("EventDispatcher.query -> Can't send query to multiply objects");
            return undefined;
        }

        var listenersArgs = this.listenersArgs[eventName];
        var listener = listeners[0];
        var result = undefined;

        try {
            result = listener.func.call(listener.object, eventArgs, listenersArgs[0]);
        } catch (err) {
            console.error("EventDispatcher.query -> " + eventName + " Exception thrown in event handler -> " + err);
        }

        return result;
    },

    release: function () {
        for (var event_name in this.listeners) {
            this.listeners[event_name].splice();
            this.listenersArgs[event_name].splice();
            delete this.listeners[event_name];
            delete this.listenersArgs[event_name];
        }
        this.listeners = null;
        this.listenersArgs = null;
    },

    toString: function () {
        return "[HB.EventDispatcher]";
    },

    getListenerIndex: function (listeners, callback) {
        for (var i = 0; i < listeners.length; i++) {
            var obj = listeners[i];
            if (typeof obj.func === "function" && (callback === obj.func))
                return i;
            else if ((obj.func.method !== null) && (obj.func.method !== undefined) &&
                (obj.func.context !== null) && (obj.func.context !== undefined) &&
                (callback.method === obj.func.method) && (callback.context === obj.func.context))
                return i;
        }

        return -1;
    }

};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

THREE.MTLLoader = function (manager) {

	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

};

THREE.MTLLoader.prototype = {

	constructor: THREE.MTLLoader,

	/**
	 * Loads and parses a MTL asset from a URL.
	 *
	 * @param {String} url - URL to the MTL file.
	 * @param {Function} [onLoad] - Callback invoked with the loaded object.
	 * @param {Function} [onProgress] - Callback for download progress.
	 * @param {Function} [onError] - Callback for download errors.
	 *
	 * @see setPath setTexturePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setPath and/or setTexturePath explicitly prior to load.
	 */
	load: function (url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(this.manager);
		loader.setPath(this.path);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));

		}, onProgress, onError);

	},

	/**
	 * Set base path for resolving references.
	 * If set this path will be prepended to each loaded and found reference.
	 *
	 * @see setTexturePath
	 * @param {String} path
	 *
	 * @example
	 *     mtlLoader.setPath( 'assets/obj/' );
	 *     mtlLoader.load( 'my.mtl', ... );
	 */
	setPath: function (path) {

		this.path = path;

	},

	/**
	 * Set base path for resolving texture references.
	 * If set this path will be prepended found texture reference.
	 * If not set and setPath is, it will be used as texture base path.
	 *
	 * @see setPath
	 * @param {String} path
	 *
	 * @example
	 *     mtlLoader.setPath( 'assets/obj/' );
	 *     mtlLoader.setTexturePath( 'assets/textures/' );
	 *     mtlLoader.load( 'my.mtl', ... );
	 */
	setTexturePath: function (path) {

		this.texturePath = path;

	},

	setBaseUrl: function (path) {

		console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');

		this.setTexturePath(path);

	},

	setCrossOrigin: function (value) {

		this.crossOrigin = value;

	},

	setMaterialOptions: function (value) {

		this.materialOptions = value;

	},

	/**
	 * Parses a MTL file.
	 *
	 * @param {String} text - Content of MTL file
	 * @return {THREE.MTLLoader.MaterialCreator}
	 *
	 * @see setPath setTexturePath
	 *
	 * @note In order for relative texture references to resolve correctly
	 * you must call setPath and/or setTexturePath explicitly prior to parse.
	 */
	parse: function (text) {

		var lines = text.split('\n');
		var info = {};
		var delimiter_pattern = /\s+/;
		var materialsInfo = {};

		for (var i = 0; i < lines.length; i++) {

			var line = lines[i];
			line = line.trim();

			if (line.length === 0 || line.charAt(0) === '#') {

				// Blank line or comment ignore
				continue;

			}

			var pos = line.indexOf(' ');

			var key = (pos >= 0) ? line.substring(0, pos) : line;
			key = key.toLowerCase();

			var value = (pos >= 0) ? line.substring(pos + 1) : '';
			value = value.trim();

			if (key === 'newmtl') {

				// New material

				info = { name: value };
				materialsInfo[value] = info;

			} else if (info) {

				if (key === 'ka' || key === 'kd' || key === 'ks') {

					var ss = value.split(delimiter_pattern, 3);
					info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];

				} else {

					info[key] = value;

				}

			}

		}

		var materialCreator = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
		materialCreator.setCrossOrigin(this.crossOrigin);
		materialCreator.setManager(this.manager);
		materialCreator.setMaterials(materialsInfo);
		return materialCreator;

	}

};

/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 * @constructor
 */

THREE.MTLLoader.MaterialCreator = function (baseUrl, options) {

	this.baseUrl = baseUrl || '';
	this.options = options;
	this.materialsInfo = {};
	this.materials = {};
	this.materialsArray = [];
	this.nameLookup = {};

	this.side = (this.options && this.options.side) ? this.options.side : THREE.FrontSide;
	this.wrap = (this.options && this.options.wrap) ? this.options.wrap : THREE.RepeatWrapping;

};

THREE.MTLLoader.MaterialCreator.prototype = {

	constructor: THREE.MTLLoader.MaterialCreator,

	setCrossOrigin: function (value) {

		this.crossOrigin = value;

	},

	setManager: function (value) {

		this.manager = value;

	},

	setMaterials: function (materialsInfo) {

		this.materialsInfo = this.convert(materialsInfo);
		this.materials = {};
		this.materialsArray = [];
		this.nameLookup = {};

	},

	convert: function (materialsInfo) {

		if (!this.options) return materialsInfo;

		var converted = {};

		for (var mn in materialsInfo) {

			// Convert materials info into normalized form based on options

			var mat = materialsInfo[mn];

			var covmat = {};

			converted[mn] = covmat;

			for (var prop in mat) {

				var save = true;
				var value = mat[prop];
				var lprop = prop.toLowerCase();

				switch (lprop) {

					case 'kd':
					case 'ka':
					case 'ks':

						// Diffuse color (color under white light) using RGB values

						if (this.options && this.options.normalizeRGB) {

							value = [value[0] / 255, value[1] / 255, value[2] / 255];

						}

						if (this.options && this.options.ignoreZeroRGBs) {

							if (value[0] === 0 && value[1] === 0 && value[2] === 0) {

								// ignore

								save = false;

							}

						}

						break;

					default:

						break;

				}

				if (save) {

					covmat[lprop] = value;

				}

			}

		}

		return converted;

	},

	preload: function () {

		for (var mn in this.materialsInfo) {

			this.create(mn);

		}

	},

	getIndex: function (materialName) {

		return this.nameLookup[materialName];

	},

	getAsArray: function () {

		var index = 0;

		for (var mn in this.materialsInfo) {

			this.materialsArray[index] = this.create(mn);
			this.nameLookup[mn] = index;
			index++;

		}

		return this.materialsArray;

	},

	create: function (materialName) {

		if (this.materials[materialName] === undefined) {

			this.createMaterial_(materialName);

		}

		return this.materials[materialName];

	},

	createMaterial_: function (materialName) {

		// Create material

		var scope = this;
		var mat = this.materialsInfo[materialName];
		var params = {

			name: materialName,
			side: this.side

		};

		function resolveURL(baseUrl, url) {

			if (typeof url !== 'string' || url === '')
				return '';

			// Absolute URL
			if (/^https?:\/\//i.test(url)) return url;

			return baseUrl + url;

		}

		function setMapForType(mapType, value) {

			if (params[mapType]) return; // Keep the first encountered texture

			var texParams = scope.getTextureParams(value, params);
			var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));

			map.repeat.copy(texParams.scale);
			map.offset.copy(texParams.offset);

			map.wrapS = scope.wrap;
			map.wrapT = scope.wrap;

			params[mapType] = map;

		}

		for (var prop in mat) {

			var value = mat[prop];
			var n;

			if (value === '') continue;

			switch (prop.toLowerCase()) {

				// Ns is material specular exponent

				case 'kd':

					// Diffuse color (color under white light) using RGB values

					params.color = new THREE.Color().fromArray(value);

					break;

				case 'ks':

					// Specular color (color when light is reflected from shiny surface) using RGB values
					params.specular = new THREE.Color().fromArray(value);

					break;

				case 'map_kd':

					// Diffuse texture map

					setMapForType("map", value);

					break;

				case 'map_ks':

					// Specular map

					setMapForType("specularMap", value);

					break;

				case 'map_bump':
				case 'bump':

					// Bump texture map

					setMapForType("bumpMap", value);

					break;

				case 'ns':

					// The specular exponent (defines the focus of the specular highlight)
					// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

					params.shininess = parseFloat(value);

					break;

				case 'd':
					n = parseFloat(value);

					if (n < 1) {

						params.opacity = n;
						params.transparent = true;

					}

					break;

				case 'tr':
					n = parseFloat(value);

					if (n > 0) {

						params.opacity = 1 - n;
						params.transparent = true;

					}

					break;

				default:
					break;

			}

		}

		this.materials[materialName] = new THREE.MeshPhongMaterial(params);
		return this.materials[materialName];

	},

	getTextureParams: function (value, matParams) {

		var texParams = {

			scale: new THREE.Vector2(1, 1),
			offset: new THREE.Vector2(0, 0)

		};

		var items = value.split(/\s+/);
		var pos;

		pos = items.indexOf('-bm');

		if (pos >= 0) {

			matParams.bumpScale = parseFloat(items[pos + 1]);
			items.splice(pos, 2);

		}

		pos = items.indexOf('-s');

		if (pos >= 0) {

			texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
			items.splice(pos, 4); // we expect 3 parameters here!

		}

		pos = items.indexOf('-o');

		if (pos >= 0) {

			texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
			items.splice(pos, 4); // we expect 3 parameters here!

		}

		texParams.url = items.join(' ').trim();
		return texParams;

	},

	loadTexture: function (url, mapping, onLoad, onProgress, onError) {

		var texture;
		var loader = THREE.Loader.Handlers.get(url);
		var manager = (this.manager !== undefined) ? this.manager : THREE.DefaultLoadingManager;

		if (loader === null) {

			loader = new THREE.TextureLoader(manager);

		}

		if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
		texture = loader.load(url, onLoad, onProgress, onError);

		if (mapping !== undefined) texture.mapping = mapping;

		return texture;

	}

};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function (manager) {

	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

	this.materials = null;

	this.regexp = {
		// v float float float
		vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
		// vn float float float
		normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
		// vt float float
		uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
		// f vertex vertex vertex
		face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
		// f vertex/uv vertex/uv vertex/uv
		face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
		// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
		face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
		// f vertex//normal vertex//normal vertex//normal
		face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
		// o object_name | g group_name
		object_pattern: /^[og]\s*(.+)?/,
		// s boolean
		smoothing_pattern: /^s\s+(\d+|on|off)/,
		// mtllib file_reference
		material_library_pattern: /^mtllib /,
		// usemtl material_name
		material_use_pattern: /^usemtl /
	};

};

THREE.OBJLoader.prototype = {

	constructor: THREE.OBJLoader,

	load: function (url, onLoad, onProgress, onError) {

		var scope = this;

		var loader = new THREE.FileLoader(scope.manager);
		loader.setPath(this.path);
		loader.load(url, function (text) {

			onLoad(scope.parse(text));

		}, onProgress, onError);

	},

	setPath: function (value) {

		this.path = value;

	},

	setMaterials: function (materials) {

		this.materials = materials;

	},

	_createParserState: function () {

		var state = {
			objects: [],
			object: {},

			vertices: [],
			normals: [],
			uvs: [],

			materialLibraries: [],

			startObject: function (name, fromDeclaration) {

				// If the current object (initial from reset) is not from a g/o declaration in the parsed
				// file. We need to use it for the first parsed g/o to keep things in sync.
				if (this.object && this.object.fromDeclaration === false) {

					this.object.name = name;
					this.object.fromDeclaration = (fromDeclaration !== false);
					return;

				}

				var previousMaterial = (this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined);

				if (this.object && typeof this.object._finalize === 'function') {

					this.object._finalize(true);

				}

				this.object = {
					name: name || '',
					fromDeclaration: (fromDeclaration !== false),

					geometry: {
						vertices: [],
						normals: [],
						uvs: []
					},
					materials: [],
					smooth: true,

					startMaterial: function (name, libraries) {

						var previous = this._finalize(false);

						// New usemtl declaration overwrites an inherited material, except if faces were declared
						// after the material, then it must be preserved for proper MultiMaterial continuation.
						if (previous && (previous.inherited || previous.groupCount <= 0)) {

							this.materials.splice(previous.index, 1);

						}

						var material = {
							index: this.materials.length,
							name: name || '',
							mtllib: (Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : ''),
							smooth: (previous !== undefined ? previous.smooth : this.smooth),
							groupStart: (previous !== undefined ? previous.groupEnd : 0),
							groupEnd: -1,
							groupCount: -1,
							inherited: false,

							clone: function (index) {
								var cloned = {
									index: (typeof index === 'number' ? index : this.index),
									name: this.name,
									mtllib: this.mtllib,
									smooth: this.smooth,
									groupStart: 0,
									groupEnd: -1,
									groupCount: -1,
									inherited: false
								};
								cloned.clone = this.clone.bind(cloned);
								return cloned;
							}
						};

						this.materials.push(material);

						return material;

					},

					currentMaterial: function () {

						if (this.materials.length > 0) {
							return this.materials[this.materials.length - 1];
						}

						return undefined;

					},

					_finalize: function (end) {

						var lastMultiMaterial = this.currentMaterial();
						if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

							lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
							lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
							lastMultiMaterial.inherited = false;

						}

						// Ignore objects tail materials if no face declarations followed them before a new o/g started.
						if (end && this.materials.length > 1) {

							for (var mi = this.materials.length - 1; mi >= 0; mi--) {
								if (this.materials[mi].groupCount <= 0) {
									this.materials.splice(mi, 1);
								}
							}

						}

						// Guarantee at least one empty material, this makes the creation later more straight forward.
						if (end && this.materials.length === 0) {

							this.materials.push({
								name: '',
								smooth: this.smooth
							});

						}

						return lastMultiMaterial;

					}
				};

				// Inherit previous objects material.
				// Spec tells us that a declared material must be set to all objects until a new material is declared.
				// If a usemtl declaration is encountered while this new object is being parsed, it will
				// overwrite the inherited material. Exception being that there was already face declarations
				// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

				if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {

					var declared = previousMaterial.clone(0);
					declared.inherited = true;
					this.object.materials.push(declared);

				}

				this.objects.push(this.object);

			},

			finalize: function () {

				if (this.object && typeof this.object._finalize === 'function') {

					this.object._finalize(true);

				}

			},

			parseVertexIndex: function (value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 3) * 3;

			},

			parseNormalIndex: function (value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 3) * 3;

			},

			parseUVIndex: function (value, len) {

				var index = parseInt(value, 10);
				return (index >= 0 ? index - 1 : index + len / 2) * 2;

			},

			addVertex: function (a, b, c) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push(src[a + 0]);
				dst.push(src[a + 1]);
				dst.push(src[a + 2]);
				dst.push(src[b + 0]);
				dst.push(src[b + 1]);
				dst.push(src[b + 2]);
				dst.push(src[c + 0]);
				dst.push(src[c + 1]);
				dst.push(src[c + 2]);

			},

			addVertexLine: function (a) {

				var src = this.vertices;
				var dst = this.object.geometry.vertices;

				dst.push(src[a + 0]);
				dst.push(src[a + 1]);
				dst.push(src[a + 2]);

			},

			addNormal: function (a, b, c) {

				var src = this.normals;
				var dst = this.object.geometry.normals;

				dst.push(src[a + 0]);
				dst.push(src[a + 1]);
				dst.push(src[a + 2]);
				dst.push(src[b + 0]);
				dst.push(src[b + 1]);
				dst.push(src[b + 2]);
				dst.push(src[c + 0]);
				dst.push(src[c + 1]);
				dst.push(src[c + 2]);

			},

			addUV: function (a, b, c) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push(src[a + 0]);
				dst.push(src[a + 1]);
				dst.push(src[b + 0]);
				dst.push(src[b + 1]);
				dst.push(src[c + 0]);
				dst.push(src[c + 1]);

			},

			addUVLine: function (a) {

				var src = this.uvs;
				var dst = this.object.geometry.uvs;

				dst.push(src[a + 0]);
				dst.push(src[a + 1]);

			},

			addFace: function (a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {

				var vLen = this.vertices.length;

				var ia = this.parseVertexIndex(a, vLen);
				var ib = this.parseVertexIndex(b, vLen);
				var ic = this.parseVertexIndex(c, vLen);
				var id;

				if (d === undefined) {

					this.addVertex(ia, ib, ic);

				} else {

					id = this.parseVertexIndex(d, vLen);

					this.addVertex(ia, ib, id);
					this.addVertex(ib, ic, id);

				}

				if (ua !== undefined) {

					var uvLen = this.uvs.length;

					ia = this.parseUVIndex(ua, uvLen);
					ib = this.parseUVIndex(ub, uvLen);
					ic = this.parseUVIndex(uc, uvLen);

					if (d === undefined) {

						this.addUV(ia, ib, ic);

					} else {

						id = this.parseUVIndex(ud, uvLen);

						this.addUV(ia, ib, id);
						this.addUV(ib, ic, id);

					}

				}

				if (na !== undefined) {

					// Normals are many times the same. If so, skip function call and parseInt.
					var nLen = this.normals.length;
					ia = this.parseNormalIndex(na, nLen);

					ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
					ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

					if (d === undefined) {

						this.addNormal(ia, ib, ic);

					} else {

						id = this.parseNormalIndex(nd, nLen);

						this.addNormal(ia, ib, id);
						this.addNormal(ib, ic, id);

					}

				}

			},

			addLineGeometry: function (vertices, uvs) {

				this.object.geometry.type = 'Line';

				var vLen = this.vertices.length;
				var uvLen = this.uvs.length;

				for (var vi = 0, l = vertices.length; vi < l; vi++) {

					this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));

				}

				for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

					this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));

				}

			}

		};

		state.startObject('', false);

		return state;

	},

	parse: function (text) {

		console.time('OBJLoader');

		var state = this._createParserState();

		if (text.indexOf('\r\n') !== -1) {

			// This is faster than String.split with regex that splits on both
			text = text.replace(/\r\n/g, '\n');

		}

		if (text.indexOf('\\\n') !== -1) {

			// join lines separated by a line continuation character (\)
			text = text.replace(/\\\n/g, '');

		}

		var lines = text.split('\n');
		var line = '',
			lineFirstChar = '',
			lineSecondChar = '';
		var lineLength = 0;
		var result = [];

		// Faster to just trim left side of the line. Use if available.
		var trimLeft = (typeof ''.trimLeft === 'function');

		for (var i = 0, l = lines.length; i < l; i++) {

			line = lines[i];

			line = trimLeft ? line.trimLeft() : line.trim();

			lineLength = line.length;

			if (lineLength === 0) continue;

			lineFirstChar = line.charAt(0);

			// @todo invoke passed in handler if any
			if (lineFirstChar === '#') continue;

			if (lineFirstChar === 'v') {

				lineSecondChar = line.charAt(1);

				if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {

					// 0                  1      2      3
					// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					state.vertices.push(
						parseFloat(result[1]),
						parseFloat(result[2]),
						parseFloat(result[3])
					);

				} else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {

					// 0                   1      2      3
					// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					state.normals.push(
						parseFloat(result[1]),
						parseFloat(result[2]),
						parseFloat(result[3])
					);

				} else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {

					// 0               1      2
					// ["vt 0.1 0.2", "0.1", "0.2"]

					state.uvs.push(
						parseFloat(result[1]),
						parseFloat(result[2])
					);

				} else {

					throw new Error("Unexpected vertex/normal/uv line: '" + line + "'");

				}

			} else if (lineFirstChar === "f") {

				if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {

					// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
					// 0                        1    2    3    4    5    6    7    8    9   10         11         12
					// ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

					state.addFace(
						result[1], result[4], result[7], result[10],
						result[2], result[5], result[8], result[11],
						result[3], result[6], result[9], result[12]
					);

				} else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {

					// f vertex/uv vertex/uv vertex/uv
					// 0                  1    2    3    4    5    6   7          8
					// ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

					state.addFace(
						result[1], result[3], result[5], result[7],
						result[2], result[4], result[6], result[8]
					);

				} else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {

					// f vertex//normal vertex//normal vertex//normal
					// 0                     1    2    3    4    5    6   7          8
					// ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

					state.addFace(
						result[1], result[3], result[5], result[7],
						undefined, undefined, undefined, undefined,
						result[2], result[4], result[6], result[8]
					);

				} else if ((result = this.regexp.face_vertex.exec(line)) !== null) {

					// f vertex vertex vertex
					// 0            1    2    3   4
					// ["f 1 2 3", "1", "2", "3", undefined]

					state.addFace(
						result[1], result[2], result[3], result[4]
					);

				} else {

					throw new Error("Unexpected face line: '" + line + "'");

				}

			} else if (lineFirstChar === "l") {

				var lineParts = line.substring(1).trim().split(" ");
				var lineVertices = [],
					lineUVs = [];

				if (line.indexOf("/") === -1) {

					lineVertices = lineParts;

				} else {

					for (var li = 0, llen = lineParts.length; li < llen; li++) {

						var parts = lineParts[li].split("/");

						if (parts[0] !== "") lineVertices.push(parts[0]);
						if (parts[1] !== "") lineUVs.push(parts[1]);

					}

				}
				state.addLineGeometry(lineVertices, lineUVs);

			} else if ((result = this.regexp.object_pattern.exec(line)) !== null) {

				// o object_name
				// or
				// g group_name

				// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
				// var name = result[ 0 ].substr( 1 ).trim();
				var name = (" " + result[0].substr(1).trim()).substr(1);

				state.startObject(name);

			} else if (this.regexp.material_use_pattern.test(line)) {

				// material

				state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);

			} else if (this.regexp.material_library_pattern.test(line)) {

				// mtl file

				state.materialLibraries.push(line.substring(7).trim());

			} else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {

				// smooth shading

				// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
				// but does not define a usemtl for each face set.
				// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
				// This requires some care to not create extra material on each smooth value for "normal" obj files.
				// where explicit usemtl defines geometry groups.
				// Example asset: examples/models/obj/cerberus/Cerberus.obj

				var value = result[1].trim().toLowerCase();
				state.object.smooth = (value === '1' || value === 'on');

				var material = state.object.currentMaterial();
				if (material) {

					material.smooth = state.object.smooth;

				}

			} else {

				// Handle null terminated files without exception
				if (line === '\0') continue;

				throw new Error("Unexpected line: '" + line + "'");

			}

		}

		state.finalize();

		var container = new THREE.Group();
		container.materialLibraries = [].concat(state.materialLibraries);

		for (var i = 0, l = state.objects.length; i < l; i++) {

			var object = state.objects[i];
			var geometry = object.geometry;
			var materials = object.materials;
			var isLine = (geometry.type === 'Line');

			// Skip o/g line declarations that did not follow with any faces
			if (geometry.vertices.length === 0) continue;

			var buffergeometry = new THREE.BufferGeometry();

			buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

			if (geometry.normals.length > 0) {

				buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));

			} else {

				buffergeometry.computeVertexNormals();

			}

			if (geometry.uvs.length > 0) {

				buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));

			}

			// Create materials

			var createdMaterials = [];

			for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

				var sourceMaterial = materials[mi];
				var material = undefined;

				if (this.materials !== null) {

					material = this.materials.create(sourceMaterial.name);

					// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
					if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

						var materialLine = new THREE.LineBasicMaterial();
						materialLine.copy(material);
						material = materialLine;

					}

				}

				if (!material) {

					material = (!isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial());
					material.name = sourceMaterial.name;

				}

				material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;

				createdMaterials.push(material);

			}

			// Create mesh

			var mesh;

			if (createdMaterials.length > 1) {

				for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

					var sourceMaterial = materials[mi];
					buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);

				}

				mesh = (!isLine ? new THREE.Mesh(buffergeometry, createdMaterials) : new THREE.LineSegments(buffergeometry, createdMaterials));

			} else {

				mesh = (!isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]));
			}

			mesh.name = object.name;

			container.add(mesh);

		}

		console.timeEnd('OBJLoader');

		return container;

	}

};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

VG.AssetsLoader = function (assetPath) {

	var context = this;

	this.assetPath = assetPath || this.assetPath;

	this.loaders = {
		'file': new THREE.FileLoader(),
		'obj': new THREE.OBJLoader(),
		'mtl': new THREE.MTLLoader()
	};

	this.loaderMap = {
		'obj': this.objLoad
	};

	this.loadPack = function (url, onStart, onProgress, onSuccess) {
		this.onStart = onStart || this.onStart;
		this.onProgress = onProgress || this.onProgress;
		this.onSuccess = onSuccess || this.onSuccess;

		this.onStart();

		var fileLoader = this.loaders['file'];
		fileLoader.load(this.assetPath + url, function (data) { context.parsePack(data) });
	};


	this.parsePack = function (data) {
		data = JSON.parse(data);

		for (var key in data) {
			if (key == 'assets') {
				this.loadCount = data.assets.length;

				for (var a = 0; a < this.loadCount; a++) {
					var nametmp = data.assets[a].split('.');

					var extension = nametmp.pop();

					nametmp = nametmp[0].split('/');

					var name = nametmp.pop();
					var url = nametmp.join('/') + '/';

					if (context.assets.hasOwnProperty(name)) {
						this.checkComplete();
						continue;
					}

					context.assets[name] = null;

					this.loaderMap[extension](this, url, name);
				}
			} else {
				this.loadedData[key] = data[key]
			}
		}
	}
}

VG.AssetsLoader.prototype = {
	constructor: VG.AssetsLoader,

	assetPath: '/',

	assets: {},

	loadedData: {},

	loadCount: 0,

	loadedCount: 0,

	onStart: function () {
		console.log('AE.LevelLoader -> onStart')
	},

	onProgress: function (progress) {
		console.log(progress)
	},

	onSuccess: function () {
		console.log('AE.LevelLoader -> onSuccess')
	},

	objLoad: function (context, path, name) {

		path = context.assetPath + path;

		var mtlLoader = context.loaders['mtl'];
		mtlLoader.setPath(path);
		mtlLoader.load(name + '.mtl', function (materials) {

			materials.preload();

			var objLoader = context.loaders['obj'];
			objLoader.setMaterials(materials);
			objLoader.setPath(path);
			objLoader.load(name + '.obj', function (object) {

				context.assets[name] = object;
				context.checkComplete();

			});

		});
	},

	checkComplete: function () {

		this.loadedCount++;

		if (this.loadCount <= this.loadedCount) {
			this.onSuccess({assets: this.assets, data: this.loadedData})
			return
		}

		this.onProgress(this.loadedCount / this.loadCount)

	}
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

VG.CameraControllerTopDown = function (options) {

    options = options || {}

    this.offset = options.offset || new THREE.Vector3(0, 120, 0);
    this.offsetlook = options.offsetlook || new THREE.Vector3(10, 0, 10);
    this.target = options.target || new THREE.Mesh();

    var mouse = new THREE.Vector3(0, 0, 0);
    var newpos = new THREE.Vector3(0, 0, 0);
    var newlook = new THREE.Vector3(0, 0, 0);
    var camera = options.camera || console.error('options.camera is undefind');
    var renderer = options.renderer || console.error('options.renderer is undefind');

    this.mousemove = function (evt) {
        mouse.x = (((evt.clientX - renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1);
        mouse.z = (((evt.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 - 1);
    };

    this.update = function () {

        newpos.x = this.target.position.x + this.offset.x;
        newpos.y = this.target.position.y + this.offset.y;
        newpos.z = this.target.position.z + this.offset.z;

        this.z_offset = mouse.z * this.offsetlook.z;
        this.x_offset = mouse.x * this.offsetlook.x;

        camera.position.x = newpos.x + this.x_offset
        camera.position.y = newpos.y;
        camera.position.z = newpos.z + this.z_offset

        newlook.x = this.target.position.x + this.x_offset;
        newlook.y = this.target.position.y;
        newlook.z = this.target.position.z + this.z_offset;

        camera.lookAt(newlook);

    };
    this.destroy = function () {
        document.removeEventListener('mousemove', this.mousemove, false);
    };

    document.addEventListener('mousemove', this.mousemove, false);

};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

VG.CameraControllerOrbit = function (object, domElement) {

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
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy(scope.target);
		scope.position0.copy(scope.object.position);
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy(scope.target0);
		scope.object.position.copy(scope.position0);
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent(changeEvent);

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy(position).sub(scope.target);

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion(quat);

			// angle from z-axis around y-axis
			spherical.setFromVector3(offset);

			if (scope.autoRotate && state === STATE.NONE) {

				rotateLeft(getAutoRotationAngle());

			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

			// restrict phi to be between desired limits
			spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

			// move target to panned location
			scope.target.add(panOffset);

			offset.setFromSpherical(spherical);

			// rotate offset back to "camera-up-vector-is-up" space
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

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if (zoomChanged ||
				lastPosition.distanceToSquared(scope.object.position) > EPS ||
				8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

				scope.dispatchEvent(changeEvent);

				lastPosition.copy(scope.object.position);
				lastQuaternion.copy(scope.object.quaternion);
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
		scope.domElement.removeEventListener('mousedown', onMouseDown, false);
		scope.domElement.removeEventListener('wheel', onMouseWheel, false);

		scope.domElement.removeEventListener('touchstart', onTouchStart, false);
		scope.domElement.removeEventListener('touchend', onTouchEnd, false);
		scope.domElement.removeEventListener('touchmove', onTouchMove, false);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		window.removeEventListener('keydown', onKeyDown, false);

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
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

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
			v.multiplyScalar(-distance);

			panOffset.add(v);

		};

	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp(distance, objectMatrix) {

			v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
			v.multiplyScalar(distance);

			panOffset.add(v);

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan(deltaX, deltaY) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if (scope.object instanceof THREE.PerspectiveCamera) {

				// perspective
				var position = scope.object.position;
				offset.copy(position).sub(scope.target);
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan((scope.object.fov / 2) * Math.PI / 180.0);

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
				panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);

			} else if (scope.object instanceof THREE.OrthographicCamera) {

				// orthographic
				panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
				panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);

			} else {

				// camera neither orthographic nor perspective
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

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate(event) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set(event.clientX, event.clientY);

	}

	function handleMouseDownDolly(event) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set(event.clientX, event.clientY);

	}

	function handleMouseDownPan(event) {

		//console.log( 'handleMouseDownPan' );

		panStart.set(event.clientX, event.clientY);

	}

	function handleMouseMoveRotate(event) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set(event.clientX, event.clientY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();

	}

	function handleMouseMoveDolly(event) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set(event.clientX, event.clientY);

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

		//console.log( 'handleMouseMovePan' );

		panEnd.set(event.clientX, event.clientY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();

	}

	function handleMouseUp(event) {

		// console.log( 'handleMouseUp' );

	}

	function handleMouseWheel(event) {

		// console.log( 'handleMouseWheel' );

		if (event.deltaY < 0) {

			dollyOut(getZoomScale());

		} else if (event.deltaY > 0) {

			dollyIn(getZoomScale());

		}

		scope.update();

	}

	function handleKeyDown(event) {

		//console.log( 'handleKeyDown' );

		switch (event.keyCode) {

			case scope.keys.UP:
				pan(0, scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan(0, -scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.LEFT:
				pan(scope.keyPanSpeed, 0);
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan(-scope.keyPanSpeed, 0);
				scope.update();
				break;

		}

	}

	function handleTouchStartRotate(event) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);

	}

	function handleTouchStartDolly(event) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

		dollyStart.set(0, distance);

	}

	function handleTouchStartPan(event) {

		//console.log( 'handleTouchStartPan' );

		panStart.set(event.touches[0].pageX, event.touches[0].pageY);

	}

	function handleTouchMoveRotate(event) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
		rotateDelta.subVectors(rotateEnd, rotateStart);

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

		rotateStart.copy(rotateEnd);

		scope.update();

	}

	function handleTouchMoveDolly(event) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[0].pageX - event.touches[1].pageX;
		var dy = event.touches[0].pageY - event.touches[1].pageY;

		var distance = Math.sqrt(dx * dx + dy * dy);

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

		//console.log( 'handleTouchMovePan' );

		panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

		panDelta.subVectors(panEnd, panStart);

		pan(panDelta.x, panDelta.y);

		panStart.copy(panEnd);

		scope.update();

	}

	function handleTouchEnd(event) {

		//console.log( 'handleTouchEnd' );

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

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

			document.addEventListener('mousemove', onMouseMove, false);
			document.addEventListener('mouseup', onMouseUp, false);

			scope.dispatchEvent(startEvent);

		}

	}

	function onMouseMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();

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

		handleMouseUp(event);

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;

	}

	function onMouseWheel(event) {

		if (scope.enabled === false || scope.enableZoom === false || (state !== STATE.NONE && state !== STATE.ROTATE)) return;

		event.preventDefault();
		event.stopPropagation();

		handleMouseWheel(event);

		scope.dispatchEvent(startEvent); // not sure why these are here...
		scope.dispatchEvent(endEvent);

	}

	function onKeyDown(event) {

		if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

		handleKeyDown(event);

	}

	function onTouchStart(event) {

		if (scope.enabled === false) return;

		switch (event.touches.length) {

			case 1: // one-fingered touch: rotate

				if (scope.enableRotate === false) return;

				handleTouchStartRotate(event);

				state = STATE.TOUCH_ROTATE;

				break;

			case 2: // two-fingered touch: dolly

				if (scope.enableZoom === false) return;

				handleTouchStartDolly(event);

				state = STATE.TOUCH_DOLLY;

				break;

			case 3: // three-fingered touch: pan

				if (scope.enablePan === false) return;

				handleTouchStartPan(event);

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if (state !== STATE.NONE) {

			scope.dispatchEvent(startEvent);

		}

	}

	function onTouchMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();
		event.stopPropagation();

		switch (event.touches.length) {

			case 1: // one-fingered touch: rotate

				if (scope.enableRotate === false) return;
				if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

				handleTouchMoveRotate(event);

				break;

			case 2: // two-fingered touch: dolly

				if (scope.enableZoom === false) return;
				if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

				handleTouchMoveDolly(event);

				break;

			case 3: // three-fingered touch: pan

				if (scope.enablePan === false) return;
				if (state !== STATE.TOUCH_PAN) return; // is this needed?...

				handleTouchMovePan(event);

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd(event) {

		if (scope.enabled === false) return;

		handleTouchEnd(event);

		scope.dispatchEvent(endEvent);

		state = STATE.NONE;

	}

	function onContextMenu(event) {

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener('contextmenu', onContextMenu, false);

	scope.domElement.addEventListener('mousedown', onMouseDown, false);
	scope.domElement.addEventListener('wheel', onMouseWheel, false);

	scope.domElement.addEventListener('touchstart', onTouchStart, false);
	scope.domElement.addEventListener('touchend', onTouchEnd, false);
	scope.domElement.addEventListener('touchmove', onTouchMove, false);

	window.addEventListener('keydown', onKeyDown, false);

	// force an update at start

	this.update();

};

VG.CameraControllerOrbit.prototype = Object.create(THREE.EventDispatcher.prototype);
VG.CameraControllerOrbit.prototype.constructor = VG.CameraControllerOrbit;

Object.defineProperties(VG.CameraControllerOrbit.prototype, {

	center: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .center has been renamed to .target');
			return this.target;

		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .noZoom has been deprecated. Use .enableZoom instead.');
			return !this.enableZoom;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .noZoom has been deprecated. Use .enableZoom instead.');
			this.enableZoom = !value;

		}

	},

	noRotate: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .noRotate has been deprecated. Use .enableRotate instead.');
			return !this.enableRotate;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .noRotate has been deprecated. Use .enableRotate instead.');
			this.enableRotate = !value;

		}

	},

	noPan: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .noPan has been deprecated. Use .enablePan instead.');
			return !this.enablePan;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .noPan has been deprecated. Use .enablePan instead.');
			this.enablePan = !value;

		}

	},

	noKeys: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .noKeys has been deprecated. Use .enableKeys instead.');
			return !this.enableKeys;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .noKeys has been deprecated. Use .enableKeys instead.');
			this.enableKeys = !value;

		}

	},

	staticMoving: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .staticMoving has been deprecated. Use .enableDamping instead.');
			return !this.enableDamping;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .staticMoving has been deprecated. Use .enableDamping instead.');
			this.enableDamping = !value;

		}

	},

	dynamicDampingFactor: {

		get: function () {

			console.warn('VG.CameraControllerOrbit: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			return this.dampingFactor;

		},

		set: function (value) {

			console.warn('VG.CameraControllerOrbit: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
			this.dampingFactor = value;

		}

	}

});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

VG.SceneController = function () {
    this.scenes = {};
    this.view = new THREE.Object3D();
    this.activeScene = null;
}

VG.SceneController.prototype = {
    constructor: VG.SceneController,

    add: function (scene) {
        if (scene instanceof VG.Scene) {
            if (this.scenes[scene.name]) {
                console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
                return;
            }

            this.scenes[scene.name] = scene;
        } else {
            console.log('Error: Object is not instanceof VG.GameScene');
        }
    },

    remove: function (scene) {
        if (scene instanceof VG.Scene) {
            if (!this.scenes[scene.name]) {
                console.log('Error: Scene with name >>>' + scene.name + '<<< is not exist');
                return;
            }

            this.scenes[scene.name] = null;
            delete this.scenes[scene.name];
        } else {
            console.log('Error: Object is not instanceof VG.GameScene');
        }
    },

    activateScene: function (name, data) {
        if (name instanceof VG.Scene)
            name = name.name

        if (!this.scenes[name]) {
            console.log('Error: Scene with name >>>' + name + '<<< is not exist');
            return;
        }

        if (this.activeScene && this.activeScene.name == name)
            return

        if (this.activeScene)
            this.view.remove(this.activeScene.view);

        this.activeScene = this.scenes[name];
        this.view.add(this.activeScene.view);
        this.activeScene.init(data);

    },

    update: function (dt) {
        if (this.activeScene && this.activeScene.update && this.activeScene.autoUpdate)
            this.activeScene.update(dt)
    }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

VG.Scene = function (data) {
	VG.BaseObject.call(this);

	this.name = 'default';
	this.autoUpdate = true;

}

VG.Scene.prototype = Object.create(VG.BaseObject.prototype);

VG.Scene.prototype.update = function (dt) {
	for (var i = 0; i < this.animated.length; i++) {
		this.animated[i].update(dt);
	}
}

VG.Scene.prototype.init = function () {
	console.warn('Warning: Scene with name >>>' + this.name + '<<< init method is not define')
}

/***/ })
/******/ ]);
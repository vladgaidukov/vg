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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_postprocessing_RenderPass_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_postprocessing_RenderPass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_postprocessing_RenderPass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_postprocessing_BloomBlendPass_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_postprocessing_BloomBlendPass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_postprocessing_BloomBlendPass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_postprocessing_CopyShader_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_postprocessing_CopyShader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_postprocessing_CopyShader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_postprocessing_EffectComposer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_postprocessing_EffectComposer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_postprocessing_EffectComposer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_postprocessing_MaskPass_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_postprocessing_MaskPass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_postprocessing_MaskPass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_postprocessing_ShaderPass_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_postprocessing_ShaderPass_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_postprocessing_ShaderPass_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_VG_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_VG_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__js_VG_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_BaseEntity_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_BaseEntity_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__js_BaseEntity_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_SceneEntity_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__js_SceneEntity_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__js_SceneEntity_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_Engine_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_Engine_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__js_Engine_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_EventDispatcher_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__js_EventDispatcher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__js_EventDispatcher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_meshes_MorphBlendMesh_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__js_meshes_MorphBlendMesh_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__js_meshes_MorphBlendMesh_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_meshes_Terrain_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__js_meshes_Terrain_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__js_meshes_Terrain_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_loaders_MTLLoader_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__js_loaders_MTLLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__js_loaders_MTLLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__js_loaders_OBJLoader_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__js_loaders_OBJLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__js_loaders_OBJLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__js_loaders_ColladaLoader_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__js_loaders_ColladaLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__js_loaders_ColladaLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__js_AssetsLoader_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__js_AssetsLoader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__js_AssetsLoader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__js_controls_KeyboardEventsHandler_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__js_controls_KeyboardEventsHandler_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__js_controls_KeyboardEventsHandler_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__js_controls_MouseEventsHandler_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__js_controls_MouseEventsHandler_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__js_controls_MouseEventsHandler_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__js_cameras_CameraControllerTopDown_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__js_cameras_CameraControllerTopDown_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__js_cameras_CameraControllerTopDown_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__js_cameras_CameraControllerOrbit_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__js_cameras_CameraControllerOrbit_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__js_cameras_CameraControllerOrbit_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__js_scene_SceneController_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__js_scene_SceneController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__js_scene_SceneController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__js_scene_Scene_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__js_scene_Scene_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__js_scene_Scene_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__js_matrices_LevelMatrix2D_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__js_matrices_LevelMatrix2D_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__js_matrices_LevelMatrix2D_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__js_matrices_LevelMatrix3D_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__js_matrices_LevelMatrix3D_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__js_matrices_LevelMatrix3D_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__js_ui_BaseUIObject_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__js_ui_BaseUIObject_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__js_ui_BaseUIObject_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__js_ui_TextElement_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__js_ui_TextElement_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__js_ui_TextElement_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__js_ui_Container_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__js_ui_Container_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__js_ui_Container_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__js_ui_Panel_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__js_ui_Panel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__js_ui_Panel_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__js_ui_Button_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__js_ui_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__js_ui_Button_js__);
















































/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.scene.overrideMaterial = this.overrideMaterial;

		if ( this.clearColor ) {

			this.oldClearColor.copy( renderer.getClearColor() );
			this.oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

		}

		this.scene.overrideMaterial = null;

	}

};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * @author mattatz / http://mattatz.github.io/
 */

THREE.BloomBlendPass = function ( amount, opacity, resolution ) {
    THREE.RenderPass.call(this);

    this.amount = ( amount !== undefined ) ? amount : 1.0;
    this.opacity = ( opacity !== undefined ) ? opacity : 1.0;
    this.resolution = ( resolution !== undefined ) ? resolution : new THREE.Vector2(1024, 1024);

    // render targets

    var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };

    this.renderTargetX = new THREE.WebGLRenderTarget( this.resolution.x, this.resolution.y, pars );
    this.renderTargetY = new THREE.WebGLRenderTarget( this.resolution.x, this.resolution.y, pars );

    var kernel = [

        "varying vec2 vUv;",

        "void main() {",

        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join( "\n" );

    this.blurMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            "tDiffuse" : { type : "t", value : null },
            "increment" : { type : "v2", value : new THREE.Vector2() }
        },
        vertexShader: kernel,
        fragmentShader: [

            "uniform sampler2D tDiffuse;",

            "uniform vec2 increment;",

            "varying vec2 vUv;",

            "vec4 sampleTexture (sampler2D sampler, vec2 tc){",
                "vec4 c = texture2D (sampler, tc);",
                "return vec4 (c.rgb * pow (length (c.rgb), 2.2), c.a);",
            "}",

            "void main() {",

                "vec4 color = vec4(0.0);",

                "color += sampleTexture(tDiffuse, (vUv - increment * 4.0)) * 0.051;",
                "color += sampleTexture(tDiffuse, (vUv - increment * 3.0)) * 0.0918;",
                "color += sampleTexture(tDiffuse, (vUv - increment * 2.0)) * 0.12245;",
                "color += sampleTexture(tDiffuse, (vUv - increment * 1.0)) * 0.1531;",
                "color += sampleTexture(tDiffuse, (vUv + increment * 0.0)) * 0.1633;",
                "color += sampleTexture(tDiffuse, (vUv + increment * 1.0)) * 0.1531;",
                "color += sampleTexture(tDiffuse, (vUv + increment * 2.0)) * 0.12245;",
                "color += sampleTexture(tDiffuse, (vUv + increment * 3.0)) * 0.0918;",
                "color += sampleTexture(tDiffuse, (vUv + increment * 4.0)) * 0.051;",

                "gl_FragColor = color;",

            "}"
            

        ].join( "\n" ),
    } );

    this.blendMaterial = new THREE.ShaderMaterial( {
        uniforms : {
            "tDiffuse" : { type : "t", value : null },
            "tBlend" : { type : "t", value : null },
            "opacity" : { type : "f", value : this.opacity },
        },
        vertexShader : kernel,
        fragmentShader : [

            "uniform sampler2D tDiffuse;",
            "uniform sampler2D tBlend;",
            "uniform float opacity;",

            "varying vec2 vUv;",

            "void main() {",

            "vec4 base = texture2D(tDiffuse, vUv);",
            "vec4 blend = texture2D(tBlend, vUv);",

            // screen blending
            "vec4 color = (1.0 - ((1.0 - base) * (1.0 - blend)));",
            "gl_FragColor = color * opacity + base * ( 1. - opacity );",

            "}"

        ].join( "\n" )
    } );

    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;

    this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
    this.scene  = new THREE.Scene();

    this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
    this.scene.add( this.quad );

};

THREE.BloomBlendPass.prototype = Object.assign(Object.create(THREE.RenderPass.prototype), {

    constructor: THREE.BloomBlendPass,

    render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

        if ( maskActive ) renderer.context.disable( renderer.context.STENCIL_TEST );

        this.quad.material = this.blurMaterial;

        // horizontal blur
        this.blurMaterial.uniforms[ "tDiffuse" ].value = readBuffer;
        this.blurMaterial.uniforms[ "increment" ].value.set( this.amount / readBuffer.width, 0.0 );

        renderer.render( this.scene, this.camera, this.renderTargetX, false);

        // vertical blur
        this.blurMaterial.uniforms[ "tDiffuse" ].value = this.renderTargetX;
        this.blurMaterial.uniforms[ "increment" ].value.set( 0.0, this.amount / this.renderTargetX.height);

        renderer.render( this.scene, this.camera, this.renderTargetY, false);

        // screen blending original buffer and blurred buffer

        this.quad.material = this.blendMaterial;

        this.blendMaterial.uniforms[ "tDiffuse" ].value = readBuffer;
        this.blendMaterial.uniforms[ "tBlend" ].value = this.renderTargetY;
        this.blendMaterial.uniforms[ "opacity" ].value = this.opacity;

        if ( maskActive ) renderer.context.enable( renderer.context.STENCIL_TEST );

        if( this.renderToScreen ) {
            renderer.render( this.scene, this.camera );
        } else {
            renderer.render( this.scene, this.camera, writeBuffer, this.clear );
        }
    }

});



/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"opacity":  { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join( "\n" )

};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var pixelRatio = renderer.getPixelRatio();

		var width  = Math.floor( renderer.context.canvas.width  / pixelRatio ) || 1;
		var height = Math.floor( renderer.context.canvas.height / pixelRatio ) || 1;
		var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBuffer: false };

		renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( ! pass.enabled ) continue;

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( pass instanceof THREE.MaskPass ) {

				maskActive = true;

			} else if ( pass instanceof THREE.ClearMaskPass ) {

				maskActive = false;

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			renderTarget = this.renderTarget1.clone();

			var pixelRatio = this.renderer.getPixelRatio();

			renderTarget.setSize(
				Math.floor( this.renderer.context.canvas.width  / pixelRatio ),
				Math.floor( this.renderer.context.canvas.height / pixelRatio )
			);

		}

		this.renderTarget1.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2.dispose();
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		this.renderTarget1.setSize( width, height );
		this.renderTarget2.setSize( width, height );

	}

};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

	this.scene = scene;
	this.camera = camera;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

	this.inverse = false;

};

THREE.MaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		// don't update color or depth

		context.colorMask( false, false, false, false );
		context.depthMask( false );

		// set up stencil

		var writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		context.enable( context.STENCIL_TEST );
		context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
		context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
		context.clearStencil( clearValue );

		// draw into the stencil buffer

		renderer.render( this.scene, this.camera, readBuffer, this.clear );
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		// re-enable update of color and depth

		context.colorMask( true, true, true, true );
		context.depthMask( true );

		// only render where stencil is set to 1

		context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
		context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

	}

};


THREE.ClearMaskPass = function () {

	this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		context.disable( context.STENCIL_TEST );

	}

};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	if ( shader instanceof THREE.ShaderMaterial ) {

		this.uniforms = shader.uniforms;

		this.material = shader;

	}
	else if ( shader ) {

		this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		this.material = new THREE.ShaderMaterial( {

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

	}

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.ShaderPass.prototype = {

	render: function( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

VG = {}

VG.UI = {};
VG.Meshes = {};

VG.DEBUG = false;

VG.DETAIL = 1;
VG.ANTIALIAS = false;
VG.CLEAR_COLOR = 'gray'

VG.CAMERA_FOV = 45;
VG.CAMERA_NEAR = 0.1;
VG.CAMERA_FAR = 100000;
VG.CAMERA_POSITION = new THREE.Vector3(0, 0, 5);

VG.MOBILE_CLIENT = (function() {
    var mobileKeys = [
        "android",
        "bb",
        "meego",
        "mobile",
        "avantgo",
        "bada",
        "blackberry",
        "blazer",
        "compal",
        "elaine",
        "fennec",
        "hiptop",
        "iemobile",
        "iphone",
        "ipod",
        "iris",
        "kindle",
        "lge",
        "maemo",
        "midp",
        "mmp",
        "netfront",
        "opera mob",
        "opera min",
        "palm",
        "phone pixi",
        "phone pre",
        "plucker",
        "pocket",
        "psp",
        "series40",
        "series60",
        "symbian",
        "treo",
        "vodafone",
        "wap",
        "windows ce",
        "windows phone",
        "xda",
        "xiino",
    ];

    var agent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < mobileKeys.length; i++) {
        if (agent.indexOf(mobileKeys[i]) >= 0)
            return true;
    }

    return false;
})()

/***/ }),
/* 8 */
/***/ (function(module, exports) {

VG.BaseEntity = function () {

    this.autoUpdate = false;

};

VG.BaseEntity.prototype = {

    constructor: VG.BaseEntity,

    activate: function () {

    },

    deactivate: function () {

    },

    update: function () {

    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

VG.SceneEntity = function () {

    VG.BaseEntity.call(this);

    this.view = new THREE.Object3D;
    this.animated = [];
    this.autoUpdate = true;
};

VG.SceneEntity.prototype = Object.create(VG.BaseEntity.prototype);
VG.SceneEntity.constructor = VG.SceneEntity;

Object.defineProperty(VG.SceneEntity.prototype, 'matrixAutoUpdate', {

    get: function () {
        return this.view.matrixAutoUpdate;
    },

    set: function (value) {
        this.view.matrixAutoUpdate  = value;
        this.view.updateMatrix();
    },
});

VG.SceneEntity.prototype.add = function (object) {
    if (!object)
        return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view)
        this.view.add(view);

    if (object instanceof VG.BaseEntity && !object.autoUpdate)
        return

    var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
    if (animated)
        this.animated.push(animated);
};

VG.SceneEntity.prototype.remove = function (object) {
    if (!object)
        return;

    var view = object instanceof THREE.Object3D ? object : object.view instanceof THREE.Object3D ? object.view : false;
    if (view)
        this.view.remove(view);

    var animated = typeof object.update == 'function' ? object : typeof view.update == 'function' ? view : false;
    if (animated)
        this.animated.splice(this.animated.indexOf(animated), 1);
};

VG.SceneEntity.prototype.update = function (dt) {
    for (var i = 0; i < this.animated.length; i++) {
        this.animated[i].update(dt);
    }
};

Object.defineProperty(VG.SceneEntity.prototype, 'position', {

    get: function () {
        return this.view.position;
    },

    set: function (value) {
        this.view.position.set(value.x, value.y, value.z);
    },
});

Object.defineProperty(VG.SceneEntity.prototype, 'rotation', {

    get: function () {
        return this.view.rotation;
    },

    set: function (value) {
        this.view.rotation.set(value.x, value.y, value.z);
    },
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

VG.Engine = function (container) {
    VG.SceneEntity.call(this, name);
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

        self.update(delta);

        self.renderer.render(self.view, self.camera);

        //composer.render(delta);

        requestAnimationFrame(render);
    }

    render();

    VG.EventDispatcher.bind('Engine.get.camera', this, function () { return this.camera });
    VG.EventDispatcher.bind('Engine.get.renderer', this, function () { return this.renderer });
    VG.EventDispatcher.bind('Engine.add', this, this.add);
    VG.EventDispatcher.bind('Engine.remove', this, this.remove);
    VG.EventDispatcher.bind('Engine.resize', this, this.resize);
};

VG.Engine.prototype = Object.create(VG.SceneEntity.prototype);
VG.Engine.constructor = VG.Engine;

VG.Engine.prototype.resize = function () {
    this.camera.aspect = this.domelement.clientWidth / this.domelement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.domelement.clientWidth, this.domelement.clientHeight);
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

VG.EventDispatcher = {
    listeners: {},

    bind: function (type, listener, callback) {
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

        var listeners = this.listeners[type];

        var index = this.getListenerIndex(listeners, listener);

        if (index < 0) {
            listeners.push({
                object: listener,
                func: callback
            });
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

        var index = this.getListenerIndex(listeners, callback);

        if (index >= 0) {
            listeners.splice(index, 1);
        }
    },

    send: function (eventName) {
        if (typeof (eventName) !== "string") {
            console.error("EventDispatcher.send -> 'event.type' should be string constant");
            return;
        }

        if (this.listeners[eventName] == undefined)
            return;

        var listeners = this.listeners[eventName];

        var args = (arguments.length > 1 ? Array.apply(null, arguments).splice(1, arguments.length - 1) : []);

        for (var i = 0; i < listeners.length; i++) {
            try {
                var listener = listeners[i];
                listener.func.apply(listener.object, args);
            } catch (err) {
                console.error("EventDispatcher.send -> " + eventName + " Exception thrown in event handler -> " + err);
            }
        }
    },

    query: function (eventName) {
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

        var listener = listeners[0];
        var result = undefined;

        var args = (arguments.length > 1 ? Array.apply(null, arguments).splice(1, arguments.length - 1) : []);

        try {
            result = listener.func.apply(listener.object, args);
        } catch (err) {
            console.error("EventDispatcher.query -> " + eventName + " Exception thrown in event handler -> " + err);
        }

        return result;
    },

    release: function () {
        for (var event_name in this.listeners) {
            this.listeners[event_name].splice();
            delete this.listeners[event_name];
        }
        this.listeners = null;
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
/* 12 */
/***/ (function(module, exports) {

VG.Meshes.MorphBlendMesh = function (geometry, material) {

    THREE.Mesh.call(this, geometry, material);

    this.fps = 10;
    this.direction = 1;
    this.animationList = [];

    this.currentAnimation = '';

}

VG.Meshes.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
VG.Meshes.MorphBlendMesh.prototype.constructor = VG.Meshes.MorphBlendMesh;

VG.Meshes.MorphBlendMesh.prototype.playAnimations = function (animations) {

    //TODO: переписать по нормальному ))

    var animation;

    if (animations instanceof Array) {

        this.animationList = animations.slice();
        animation = this.animationList.shift();

    } else if (typeof animations === "string") {
        this.animationList = [];
        animation = animations;

    } else {

        animation = this.animationList.shift();
    }

    if (animation == this.currentAnimation)
        return
    else
        this.currentAnimation = animation;

    animation = this.geometry.animations[this.currentAnimation];

    if (animation) {

        this.setFrameRange(animation.start, animation.end);
        this.duration = 1000 * ((animation.end - animation.start) / this.fps);
        this.time = 0;

    } else {

        console.warn('animation[' + this.currentAnimation + '] undefined');

    }

};
VG.Meshes.MorphBlendMesh.prototype.parseAnimations = function (fps) {

    this.fps = fps

    var geometry = this.geometry;

    if (!geometry.animations) geometry.animations = {};

    var firstAnimation, animations = geometry.animations;

    var pattern = /([a-z]+)_?(\d+)/;

    for (var i = 0, il = geometry.morphTargets.length; i < il; i++) {

        var morph = geometry.morphTargets[i];
        var parts = morph.name.match(pattern);

        if (parts && parts.length > 1) {

            var label = parts[1];
            var num = parts[2];

            if (!animations[label]) animations[label] = { start: Infinity, end: -Infinity };

            var animation = animations[label];

            if (i < animation.start) animation.start = i;
            if (i > animation.end) animation.end = i;

            if (!firstAnimation) firstAnimation = label;

        }

    }

    geometry.firstAnimation = firstAnimation;

};
VG.Meshes.MorphBlendMesh.prototype.setFrameRange = function (start, end) {

    this.startKeyframe = start;
    this.endKeyframe = end;

    this.length = this.endKeyframe - this.startKeyframe + 1;

};
VG.Meshes.MorphBlendMesh.prototype.update = function (delta) {

    if (this.animationList.length > 0)
        if (this.lastKeyframe > this.currentKeyframe)
            this.playAnimations();

    var frameTime = this.duration / this.length;

    this.time += this.direction * delta * 1000;

    if (this.mirroredLoop) {

        if (this.time > this.duration || this.time < 0) {

            this.direction *= -1;

            if (this.time > this.duration) {

                this.time = this.duration;
                this.directionBackwards = true;

            }

            if (this.time < 0) {

                this.time = 0;
                this.directionBackwards = false;

            }

        }

    } else {

        this.time = this.time % this.duration;

        if (this.time < 0) this.time += this.duration;

    }

    var keyframe = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / frameTime), 0, this.length - 1);

    if (keyframe !== this.currentKeyframe) {

        this.morphTargetInfluences[this.lastKeyframe] = 0;
        this.morphTargetInfluences[this.currentKeyframe] = 1;

        this.morphTargetInfluences[keyframe] = 0;

        this.lastKeyframe = this.currentKeyframe;
        this.currentKeyframe = keyframe;

    }

    var mix = (this.time % frameTime) / frameTime;

    if (this.directionBackwards) {

        mix = 1 - mix;

    }

    this.morphTargetInfluences[this.currentKeyframe] = mix;
    this.morphTargetInfluences[this.lastKeyframe] = 1 - mix;

};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function(global) {
    var module = global.noise = {};

    function Grad(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Grad.prototype.dot2 = function(x, y) {
        return this.x*x + this.y*y;
    };

    Grad.prototype.dot3 = function(x, y, z) {
        return this.x*x + this.y*y + this.z*z;
    };

    var grad3 = [
        new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
        new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
        new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1),
    ];

    var p = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,
        30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,
        252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,
        168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,
        60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,
        1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,
        86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,
        118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,
        170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,
        22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,
        251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,
        107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,
        150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,
        61,156,180];
    // To avoid the need for index wrapping, double the permutation table length
    var perm = new Array(512),
        gradP = new Array(512);

    // This isn't a very good seeding function, but it works okay. It supports
    // 2^16 different seed values. Write your own if you need more seeds.
    module.seed = function(seed) {
        if (seed > 0 && seed < 1) {
            // Scale the seed out
            seed *= 65536;
        }

        seed = Math.floor(seed);
        if (seed < 256) {
            seed |= seed << 8;
        }

        for (var i = 0; i < 256; i++) {
            var v;
            if (i & 1) {
                v = p[i] ^ (seed & 255);
            }
            else {
                v = p[i] ^ ((seed>>8) & 255);
            }

            perm[i] = perm[i + 256] = v;
            gradP[i] = gradP[i + 256] = grad3[v % 12];
        }
    };

    module.seed(Math.random());

    // Skewing and unskewing factors for 2 and 3 dimensions
    var F2 = 0.5*(Math.sqrt(3)-1),
        G2 = (3-Math.sqrt(3))/6,
        F3 = 1/3,
        G3 = 1/6;

    // 2D simplex noise
    module.simplex = function(xin, yin) {
        var n0, n1, n2; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin+yin)*F2; // Hairy factor for 2D
        var i = Math.floor(xin+s);
        var j = Math.floor(yin+s);
        var t = (i+j)*G2;
        var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed
        var y0 = yin-j+t;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) { // Lower triangle, XY order: (0,0)->(1,0)->(1,1)
            i1 = 1; j1 = 0;
        }
        else { // Upper triangle, YX order: (0,0)->(0,1)->(1,1)
            i1 = 0; j1 = 1;
        }
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
        var y2 = y0 - 1 + 2 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        i &= 255;
        j &= 255;
        var gi0 = gradP[i+perm[j]];
        var gi1 = gradP[i+i1+perm[j+j1]];
        var gi2 = gradP[i+1+perm[j+1]];
        // Calculate the contribution from the three corners
        var t0 = 0.5 - x0*x0-y0*y0;
        if (t0 < 0) {
            n0 = 0;
        }
        else {
            t0 *= t0;
            n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.5 - x1*x1-y1*y1;
        if (t1 < 0) {
            n1 = 0;
        }
        else {
            t1 *= t1;
            n1 = t1 * t1 * gi1.dot2(x1, y1);
        }
        var t2 = 0.5 - x2*x2-y2*y2;
        if (t2 < 0) {
            n2 = 0;
        }
        else {
            t2 *= t2;
            n2 = t2 * t2 * gi2.dot2(x2, y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
    };

    // ##### Perlin noise stuff

    function fade(t) {
        return t*t*t*(t*(t*6-15)+10);
    }

    function lerp(a, b, t) {
        return (1-t)*a + t*b;
    }

    // 2D Perlin Noise
    module.perlin = function(x, y) {
        // Find unit grid cell containing point
        var X = Math.floor(x),
            Y = Math.floor(y);
        // Get relative xy coordinates of point within that cell
        x = x - X;
        y = y - Y;
        // Wrap the integer cells at 255 (smaller integer period can be introduced here)
        X = X & 255;
        Y = Y & 255;

        // Calculate noise contributions from each of the four corners
        var n00 = gradP[X+perm[Y]].dot2(x, y);
        var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
        var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
        var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

        // Compute the fade curve value for x
        var u = fade(x);

        // Interpolate the four results
        return lerp(
            lerp(n00, n10, u),
            lerp(n01, n11, u),
            fade(y)
        );
    };
})(this);


VG.Meshes.Terrain = function(options) {
    var defaultOptions = {
        after: null,
        easing: VG.Meshes.Terrain.Linear,
        heightmap: VG.Meshes.Terrain.DiamondSquare,
        material: null,
        maxHeight: 100,
        minHeight: -100,
        optimization: VG.Meshes.Terrain.NONE,
        frequency: 2.5,
        steps: 1,
        stretch: true,
        turbulent: false,
        useBufferGeometry: false,
        xSegments: 63,
        xSize: 1024,
        ySegments: 63,
        ySize: 1024,
        _mesh: null, // internal only
    };
    options = options || {};
    for (var opt in defaultOptions) {
        if (defaultOptions.hasOwnProperty(opt)) {
            options[opt] = typeof options[opt] === 'undefined' ? defaultOptions[opt] : options[opt];
        }
    }
    options.material = options.material || new THREE.MeshBasicMaterial({ color: 0xee6633 });

    // Encapsulating the terrain in a parent object allows us the flexibility
    // to more easily have multiple meshes for optimization purposes.
    var scene = new THREE.Object3D();
    // Planes are initialized on the XY plane, so rotate the plane to make it lie flat.
    scene.rotation.x = -0.5 * Math.PI;

    // Create the terrain mesh.
    // To save memory, it is possible to re-use a pre-existing mesh.
    var mesh = options._mesh;
    if (mesh && mesh.geometry.type === 'PlaneGeometry' &&
                mesh.geometry.parameters.widthSegments === options.xSegments &&
                mesh.geometry.parameters.heightSegments === options.ySegments) {
        mesh.material = options.material;
        mesh.scale.x = options.xSize / mesh.geometry.parameters.width;
        mesh.scale.y = options.ySize / mesh.geometry.parameters.height;
        for (var i = 0, l = mesh.geometry.vertices.length; i < l; i++) {
            mesh.geometry.vertices[i].z = 0;
        }
    }
    else {
        mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(options.xSize, options.ySize, options.xSegments, options.ySegments),
            options.material
        );
    }
    delete options._mesh; // Remove the reference for GC

    // Assign elevation data to the terrain plane from a heightmap or function.
    if (options.heightmap instanceof HTMLCanvasElement || options.heightmap instanceof Image) {
        VG.Meshes.Terrain.fromHeightmap(mesh.geometry.vertices, options);
    }
    else if (typeof options.heightmap === 'function') {
        options.heightmap(mesh.geometry.vertices, options);
    }
    else {
        console.warn('An invalid value was passed for `options.heightmap`: ' + options.heightmap);
    }
    VG.Meshes.Terrain.Normalize(mesh, options);

    if (options.useBufferGeometry) {
        mesh.geometry = (new THREE.BufferGeometry()).fromGeometry(mesh.geometry);
    }

    // lod.addLevel(mesh, options.unit * 10 * Math.pow(2, lodLevel));

    scene.add(mesh);
    return scene;
};


VG.Meshes.Terrain.Normalize = function(mesh, options) {
    var v = mesh.geometry.vertices;
    if (options.turbulent) {
        VG.Meshes.Terrain.Turbulence(v, options);
    }
    if (options.steps > 1) {
        VG.Meshes.Terrain.Step(v, options.steps);
        VG.Meshes.Terrain.Smooth(v, options);
    }
    // Keep the terrain within the allotted height range if necessary, and do easing.
    VG.Meshes.Terrain.Clamp(v, options);
    // Call the "after" callback
    if (typeof options.after === 'function') {
        options.after(v, options);
    }
    // Mark the geometry as having changed and needing updates.
    mesh.geometry.verticesNeedUpdate = true;
    mesh.geometry.normalsNeedUpdate = true;
    mesh.geometry.computeBoundingSphere();
    mesh.geometry.computeFaceNormals();
    mesh.geometry.computeVertexNormals();
};

VG.Meshes.Terrain.NONE = 0;
VG.Meshes.Terrain.GEOMIPMAP = 1;
VG.Meshes.Terrain.GEOCLIPMAP = 2;
VG.Meshes.Terrain.POLYGONREDUCTION = 3;


VG.Meshes.Terrain.toArray2D = function(vertices, options) {
    var tgt = new Array(options.xSegments),
        xl = options.xSegments + 1,
        yl = options.ySegments + 1,
        i, j;
    for (i = 0; i < xl; i++) {
        tgt[i] = new Float64Array(options.ySegments);
        for (j = 0; j < yl; j++) {
            tgt[i][j] = vertices[j * xl + i].z;
        }
    }
    return tgt;
};


VG.Meshes.Terrain.fromArray2D = function(vertices, src) {
    for (var i = 0, xl = src.length; i < xl; i++) {
        for (var j = 0, yl = src[i].length; j < yl; j++) {
            vertices[j * xl + i].z = src[i][j];
        }
    }
};


VG.Meshes.Terrain.toArray1D = function(vertices) {
    var tgt = new Float64Array(vertices.length);
    for (var i = 0, l = tgt.length; i < l; i++) {
        tgt[i] = vertices[i].z;
    }
    return tgt;
};


VG.Meshes.Terrain.fromArray1D = function(vertices, src) {
    for (var i = 0, l = Math.min(vertices.length, src.length); i < l; i++) {
        vertices[i].z = src[i];
    }
};


VG.Meshes.Terrain.heightmapArray = function(method, options) {
    var arr = new Array((options.xSegments+1) * (options.ySegments+1)),
        l = arr.length,
        i;
    // The heightmap functions provided by this script operate on THREE.Vector3
    // objects by changing the z field, so we need to make that available.
    // Unfortunately that means creating a bunch of objects we're just going to
    // throw away, but a conscious decision was made here to optimize for the
    // vector case.
    for (i = 0; i < l; i++) {
        arr[i] = {z: 0};
    }
    options.minHeight = options.minHeight || 0;
    options.maxHeight = typeof options.maxHeight === 'undefined' ? 1 : options.maxHeight;
    options.stretch = options.stretch || false;
    method(arr, options);
    VG.Meshes.Terrain.Clamp(arr, options);
    for (i = 0; i < l; i++) {
        arr[i] = arr[i].z;
    }
    return arr;
};

/**
 * Randomness interpolation functions.
 */
VG.Meshes.Terrain.Linear = function(x) {
    return x;
};

// x = [0, 1], x^2
VG.Meshes.Terrain.EaseIn = function(x) {
    return x*x;
};

// x = [0, 1], -x(x-2)
VG.Meshes.Terrain.EaseOut = function(x) {
    return -x * (x - 2);
};

// x = [0, 1], x^2(3-2x)
// Nearly identical alternatives: 0.5+0.5*cos(x*pi-pi), x^a/(x^a+(1-x)^a) (where a=1.6 seems nice)
// For comparison: http://www.wolframalpha.com/input/?i=x^1.6%2F%28x^1.6%2B%281-x%29^1.6%29%2C+x^2%283-2x%29%2C+0.5%2B0.5*cos%28x*pi-pi%29+from+0+to+1
VG.Meshes.Terrain.EaseInOut = function(x) {
    return x*x*(3-2*x);
};

// x = [0, 1], 0.5*(2x-1)^3+0.5
VG.Meshes.Terrain.InEaseOut = function(x) {
    var y = 2*x-1;
    return 0.5 * y*y*y + 0.5;
};

// x = [0, 1], x^1.55
VG.Meshes.Terrain.EaseInWeak = function(x) {
    return Math.pow(x, 1.55);
};

// x = [0, 1], x^7
VG.Meshes.Terrain.EaseInStrong = function(x) {
    return x*x*x*x*x*x*x;
};


VG.Meshes.Terrain.fromHeightmap = function(g, options) {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        rows = options.ySegments + 1,
        cols = options.xSegments + 1,
        spread = options.maxHeight - options.minHeight;
    canvas.width = cols;
    canvas.height = rows;
    context.drawImage(options.heightmap, 0, 0, canvas.width, canvas.height);
    var data = context.getImageData(0, 0, canvas.width, canvas.height).data;
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var i = row * cols + col,
                idx = i * 4;
            g[i].z = (data[idx] + data[idx+1] + data[idx+2]) / 765 * spread + options.minHeight;
        }
    }
};


VG.Meshes.Terrain.toHeightmap = function(g, options) {
    var hasMax = typeof options.maxHeight === 'undefined',
        hasMin = typeof options.minHeight === 'undefined',
        max = hasMax ? options.maxHeight : -Infinity,
        min = hasMin ? options.minHeight :  Infinity;
    if (!hasMax || !hasMin) {
        var max2 = max,
            min2 = min;
        for (var k = 0, l = g.length; k < l; k++) {
            if (g[k].z > max2) max2 = g[k].z;
            if (g[k].z < min2) min2 = g[k].z;
        }
        if (!hasMax) max = max2;
        if (!hasMin) min = min2;
    }
    var canvas = options.heightmap instanceof HTMLCanvasElement ? options.heightmap : document.createElement('canvas'),
        context = canvas.getContext('2d'),
        rows = options.ySegments + 1,
        cols = options.xSegments + 1,
        spread = options.maxHeight - options.minHeight;
    canvas.width = cols;
    canvas.height = rows;
    var d = context.createImageData(canvas.width, canvas.height),
        data = d.data;
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var i = row * cols + col,
            idx = i * 4;
            data[idx] = data[idx+1] = data[idx+2] = Math.round(((g[i].z - options.minHeight) / spread) * 255);
            data[idx+3] = 255;
        }
    }
    context.putImageData(d, 0, 0);
    return canvas;
};

VG.Meshes.Terrain.Clamp = function(g, options) {
    var min = Infinity,
        max = -Infinity,
        l = g.length,
        i;
    options.easing = options.easing || VG.Meshes.Terrain.Linear;
    for (i = 0; i < l; i++) {
        if (g[i].z < min) min = g[i].z;
        if (g[i].z > max) max = g[i].z;
    }
    var actualRange = max - min,
        optMax = typeof options.maxHeight !== 'number' ? max : options.maxHeight,
        optMin = typeof options.minHeight !== 'number' ? min : options.minHeight,
        targetMax = options.stretch ? optMax : (max < optMax ? max : optMax),
        targetMin = options.stretch ? optMin : (min > optMin ? min : optMin),
        range = targetMax - targetMin;
    if (targetMax < targetMin) {
        targetMax = optMax;
        range = targetMax - targetMin;
    }
    for (i = 0; i < l; i++) {
        g[i].z = options.easing((g[i].z - min) / actualRange) * range + optMin;
    }
};

VG.Meshes.Terrain.Edges = function(g, options, direction, distance, easing, edges) {
    var numXSegments = Math.floor(distance / (options.xSize / options.xSegments)) || 1,
        numYSegments = Math.floor(distance / (options.ySize / options.ySegments)) || 1,
        peak = direction ? options.maxHeight : options.minHeight,
        max = direction ? Math.max : Math.min,
        xl = options.xSegments + 1,
        yl = options.ySegments + 1,
        i, j, multiplier, k1, k2;
    easing = easing || VG.Meshes.Terrain.EaseInOut;
    if (typeof edges !== 'object') {
        edges = {top: true, bottom: true, left: true, right: true};
    }
    for (i = 0; i < xl; i++) {
        for (j = 0; j < numYSegments; j++) {
            multiplier = easing(1 - j / numYSegments);
            k1 = j*xl + i;
            k2 = (options.ySegments-j)*xl + i;
            if (edges.top) {
                g[k1].z = max(g[k1].z, (peak - g[k1].z) * multiplier + g[k1].z);
            }
            if (edges.bottom) {
                g[k2].z = max(g[k2].z, (peak - g[k2].z) * multiplier + g[k2].z);
            }
        }
    }
    for (i = 0; i < yl; i++) {
        for (j = 0; j < numXSegments; j++) {
            multiplier = easing(1 - j / numXSegments);
            k1 = i*xl+j;
            k2 = (options.ySegments-i)*xl + (options.xSegments-j);
            if (edges.left) {
                g[k1].z = max(g[k1].z, (peak - g[k1].z) * multiplier + g[k1].z);
            }
            if (edges.right) {
                g[k2].z = max(g[k2].z, (peak - g[k2].z) * multiplier + g[k2].z);
            }
        }
    }
    VG.Meshes.Terrain.Clamp(g, {
        maxHeight: options.maxHeight,
        minHeight: options.minHeight,
        stretch: true,
    });
};

VG.Meshes.Terrain.RadialEdges = function(g, options, direction, distance, easing) {
    var peak = direction ? options.maxHeight : options.minHeight,
        max = direction ? Math.max : Math.min,
        xl = (options.xSegments + 1),
        yl = (options.ySegments + 1),
        xl2 = xl * 0.5,
        yl2 = yl * 0.5,
        xSegmentSize = options.xSize / options.xSegments,
        ySegmentSize = options.ySize / options.ySegments,
        edgeRadius = Math.min(options.xSize, options.ySize) * 0.5 - distance,
        i, j, multiplier, k, vertexDistance;
    for (i = 0; i < xl; i++) {
        for (j = 0; j < yl2; j++) {
            k = j*xl + i;
            vertexDistance = Math.min(edgeRadius, Math.sqrt((xl2-i)*xSegmentSize*(xl2-i)*xSegmentSize + (yl2-j)*ySegmentSize*(yl2-j)*ySegmentSize) - distance);
            if (vertexDistance < 0) continue;
            multiplier = easing(vertexDistance / edgeRadius);
            g[k].z = max(g[k].z, (peak - g[k].z) * multiplier + g[k].z);
            // Use symmetry to reduce the number of iterations.
            k = (options.ySegments-j)*xl + i;
            g[k].z = max(g[k].z, (peak - g[k].z) * multiplier + g[k].z);
        }
    }
};

VG.Meshes.Terrain.Smooth = function(g, options, weight) {
    var heightmap = new Float64Array(g.length);
    for (var i = 0, xl = options.xSegments + 1, yl = options.ySegments + 1; i < xl; i++) {
        for (var j = 0; j < yl; j++) {
            var sum = 0,
                c = 0;
            for (var n = -1; n <= 1; n++) {
                for (var m = -1; m <= 1; m++) {
                    var key = (j+n)*xl + i + m;
                    if (typeof g[key] !== 'undefined' && i+m >= 0 && j+n >= 0 && i+m < xl && j+n < yl) {
                        sum += g[key].z;
                        c++;
                    }
                }
            }
            heightmap[j*xl + i] = sum / c;
        }
    }
    weight = weight || 0;
    var w = 1 / (1 + weight);
    for (var k = 0, l = g.length; k < l; k++) {
        g[k].z = (heightmap[k] + g[k].z * weight) * w;
    }
};

VG.Meshes.Terrain.SmoothMedian = function(g, options) {
    var heightmap = new Float64Array(g.length),
        neighborValues = [],
        neighborKeys = [],
        sortByValue = function(a, b) {
            return neighborValues[a] - neighborValues[b];
        };
    for (var i = 0, xl = options.xSegments + 1, yl = options.ySegments + 1; i < xl; i++) {
        for (var j = 0; j < yl; j++) {
            neighborValues.length = 0;
            neighborKeys.length = 0;
            for (var n = -1; n <= 1; n++) {
                for (var m = -1; m <= 1; m++) {
                    var key = (j+n)*xl + i + m;
                    if (typeof g[key] !== 'undefined' && i+m >= 0 && j+n >= 0 && i+m < xl && j+n < yl) {
                        neighborValues.push(g[key].z);
                        neighborKeys.push(key);
                    }
                }
            }
            neighborKeys.sort(sortByValue);
            var halfKey = Math.floor(neighborKeys.length*0.5),
                median;
            if (neighborKeys.length % 2 === 1) {
                median = g[neighborKeys[halfKey]].z;
            }
            else {
                median = (g[neighborKeys[halfKey-1]].z + g[neighborKeys[halfKey]].z) * 0.5;
            }
            heightmap[j*xl + i] = median;
        }
    }
    for (var k = 0, l = g.length; k < l; k++) {
        g[k].z = heightmap[k];
    }
};

VG.Meshes.Terrain.SmoothConservative = function(g, options, multiplier) {
    var heightmap = new Float64Array(g.length);
    for (var i = 0, xl = options.xSegments + 1, yl = options.ySegments + 1; i < xl; i++) {
        for (var j = 0; j < yl; j++) {
            var max = -Infinity,
                min = Infinity;
            for (var n = -1; n <= 1; n++) {
                for (var m = -1; m <= 1; m++) {
                    var key = (j+n)*xl + i + m;
                    if (typeof g[key] !== 'undefined' && n && m && i+m >= 0 && j+n >= 0 && i+m < xl && j+n < yl) {
                        if (g[key].z < min) min = g[key].z;
                        if (g[key].z > max) max = g[key].z;
                    }
                }
            }
            var kk = j*xl + i;
            if (typeof multiplier === 'number') {
                var halfdiff = (max - min) * 0.5,
                    middle = min + halfdiff;
                max = middle + halfdiff * multiplier;
                min = middle - halfdiff * multiplier;
            }
            heightmap[kk] = g[kk].z > max ? max : (g[kk].z < min ? min : g[kk].z);
        }
    }
    for (var k = 0, l = g.length; k < l; k++) {
        g[k].z = heightmap[k];
    }
};

VG.Meshes.Terrain.Step = function(g, levels) {
    // Calculate the max, min, and avg values for each bucket
    var i = 0,
        j = 0,
        l = g.length,
        inc = Math.floor(l / levels),
        heights = new Array(l),
        buckets = new Array(levels);
    if (typeof levels === 'undefined') {
        levels = Math.floor(Math.pow(l*0.5, 0.25));
    }
    for (i = 0; i < l; i++) {
        heights[i] = g[i].z;
    }
    heights.sort(function(a, b) { return a - b; });
    for (i = 0; i < levels; i++) {
        // Bucket by population (bucket size) not range size
        var subset = heights.slice(i*inc, (i+1)*inc),
            sum = 0,
            bl = subset.length;
        for (j = 0; j < bl; j++) {
            sum += subset[j];
        }
        buckets[i] = {
            min: subset[0],
            max: subset[subset.length-1],
            avg: sum / bl,
        };
    }

    // Set the height of each vertex to the average height of its bucket
    for (i = 0; i < l; i++) {
        var startHeight = g[i].z;
        for (j = 0; j < levels; j++) {
            if (startHeight >= buckets[j].min && startHeight <= buckets[j].max) {
                g[i].z = buckets[j].avg;
                break;
            }
        }
    }
};


VG.Meshes.Terrain.Turbulence = function(g, options) {
    var range = options.maxHeight - options.minHeight;
    for (var i = 0, l = g.length; i < l; i++) {
        g[i].z = options.minHeight + Math.abs((g[i].z - options.minHeight) * 2 - range);
    }
};


VG.Meshes.Terrain.MultiPass = function(g, options, passes) {
    var clonedOptions = {};
    for (var opt in options) {
        if (options.hasOwnProperty(opt)) {
            clonedOptions[opt] = options[opt];
        }
    }
    var range = options.maxHeight - options.minHeight;
    for (var i = 0, l = passes.length; i < l; i++) {
        var amp = typeof passes[i].amplitude === 'undefined' ? 1 : passes[i].amplitude,
            move = 0.5 * (range - range * amp);
        clonedOptions.maxHeight = options.maxHeight - move;
        clonedOptions.minHeight = options.minHeight + move;
        clonedOptions.frequency = typeof passes[i].frequency === 'undefined' ? options.frequency : passes[i].frequency;
        passes[i].method(g, clonedOptions);
    }
};


VG.Meshes.Terrain.Curve = function(g, options, curve) {
    var range = (options.maxHeight - options.minHeight) * 0.5,
        scalar = options.frequency / (Math.min(options.xSegments, options.ySegments) + 1);
    for (var i = 0, xl = options.xSegments + 1, yl = options.ySegments + 1; i < xl; i++) {
        for (var j = 0; j < yl; j++) {
            g[j * xl + i].z += curve(i * scalar, j * scalar) * range;
        }
    }
};

VG.Meshes.Terrain.Cosine = function(g, options) {
    var amplitude = (options.maxHeight - options.minHeight) * 0.5,
        frequencyScalar = options.frequency * Math.PI / (Math.min(options.xSegments, options.ySegments) + 1),
        phase = Math.random() * Math.PI * 2;
    for (var i = 0, xl = options.xSegments + 1; i < xl; i++) {
        for (var j = 0, yl = options.ySegments + 1; j < yl; j++) {
            g[j * xl + i].z += amplitude * (Math.cos(i * frequencyScalar + phase) + Math.cos(j * frequencyScalar + phase));
        }
    }
};


VG.Meshes.Terrain.CosineLayers = function(g, options) {
    VG.Meshes.Terrain.MultiPass(g, options, [
        { method: VG.Meshes.Terrain.Cosine,                   frequency:  2.5 },
        { method: VG.Meshes.Terrain.Cosine, amplitude: 0.1,   frequency:  12  },
        { method: VG.Meshes.Terrain.Cosine, amplitude: 0.05,  frequency:  15  },
        { method: VG.Meshes.Terrain.Cosine, amplitude: 0.025, frequency:  20  },
    ]);
};


VG.Meshes.Terrain.DiamondSquare = function(g, options) {
    // Set the segment length to the smallest power of 2 that is greater than
    // the number of vertices in either dimension of the plane
    var segments = THREE.Math.nextPowerOfTwo(Math.max(options.xSegments, options.ySegments) + 1);

    // Initialize heightmap
    var size = segments + 1,
        heightmap = [],
        smoothing = (options.maxHeight - options.minHeight),
        i,
        j,
        xl = options.xSegments + 1,
        yl = options.ySegments + 1;
    for (i = 0; i <= segments; i++) {
        heightmap[i] = new Float64Array(segments+1);
    }

    // Generate heightmap
    for (var l = segments; l >= 2; l /= 2) {
        var half = Math.round(l*0.5),
            whole = Math.round(l),
            x,
            y,
            avg,
            d,
            e;
        smoothing /= 2;
        // square
        for (x = 0; x < segments; x += whole) {
            for (y = 0; y < segments; y += whole) {
                d = Math.random() * smoothing * 2 - smoothing;
                avg = heightmap[x][y] +            // top left
                      heightmap[x+whole][y] +      // top right
                      heightmap[x][y+whole] +      // bottom left
                      heightmap[x+whole][y+whole]; // bottom right
                avg *= 0.25;
                heightmap[x+half][y+half] = avg + d;
            }
        }
        // diamond
        for (x = 0; x < segments; x += half) {
            for (y = (x+half) % l; y < segments; y += l) {
                d = Math.random() * smoothing * 2 - smoothing;
                avg = heightmap[(x-half+size)%size][y] + // middle left
                      heightmap[(x+half)%size][y] +      // middle right
                      heightmap[x][(y+half)%size] +      // middle top
                      heightmap[x][(y-half+size)%size];  // middle bottom
                avg *= 0.25;
                avg += d;
                heightmap[x][y] = avg;
                // top and right edges
                if (x === 0) heightmap[segments][y] = avg;
                if (y === 0) heightmap[x][segments] = avg;
            }
        }
    }

    // Apply heightmap
    for (i = 0; i < xl; i++) {
        for (j = 0; j < yl; j++) {
            g[j * xl + i].z += heightmap[i][j];
        }
    }

    // VG.Meshes.Terrain.SmoothConservative(g, options);
};


VG.Meshes.Terrain.Fault = function(g, options) {
    var d = Math.sqrt(options.xSegments*options.xSegments + options.ySegments*options.ySegments),
        iterations = d * options.frequency,
        range = (options.maxHeight - options.minHeight) * 0.5,
        displacement = range / iterations,
        smoothDistance = Math.min(options.xSize / options.xSegments, options.ySize / options.ySegments) * options.frequency;
    for (var k = 0; k < iterations; k++) {
        var v = Math.random(),
            a = Math.sin(v * Math.PI * 2),
            b = Math.cos(v * Math.PI * 2),
            c = Math.random() * d - d*0.5;
        for (var i = 0, xl = options.xSegments + 1; i < xl; i++) {
            for (var j = 0, yl = options.ySegments + 1; j < yl; j++) {
                var distance = a*i + b*j - c;
                if (distance > smoothDistance) {
                    g[j * xl + i].z += displacement;
                }
                else if (distance < -smoothDistance) {
                    g[j * xl + i].z -= displacement;
                }
                else {
                    g[j * xl + i].z += Math.cos(distance / smoothDistance * Math.PI * 2) * displacement;
                }
            }
        }
    }
    // VG.Meshes.Terrain.Smooth(g, options);
};


VG.Meshes.Terrain.Hill = function(g, options, feature, shape) {
    var frequency = options.frequency * 2,
        numFeatures = frequency * frequency * 10,
        heightRange = options.maxHeight - options.minHeight,
        minHeight = heightRange / (frequency * frequency),
        maxHeight = heightRange / frequency,
        smallerSideLength = Math.min(options.xSize, options.ySize),
        minRadius = smallerSideLength / (frequency * frequency),
        maxRadius = smallerSideLength / frequency;
    feature = feature || VG.Meshes.Terrain.Influences.Hill;

    var coords = { x: 0, y: 0 };
    for (var i = 0; i < numFeatures; i++) {
        var radius = Math.random() * (maxRadius - minRadius) + minRadius,
            height = Math.random() * (maxHeight - minHeight) + minHeight;
        var min = 0 - radius,
            maxX = options.xSize + radius,
            maxY = options.ySize + radius;
        coords.x = Math.random();
        coords.y = Math.random();
        if (typeof shape === 'function') shape(coords);
        VG.Meshes.Terrain.Influence(
            g, options,
            feature,
            coords.x, coords.y,
            radius, height,
            THREE.AdditiveBlending,
            VG.Meshes.Terrain.EaseInStrong
        );
    }
};

VG.Meshes.Terrain.HillIsland = (function() {
    var island = function(coords) {
        var theta = Math.random() * Math.PI * 2;
        coords.x = 0.5 + Math.cos(theta) * coords.x * 0.4;
        coords.y = 0.5 + Math.sin(theta) * coords.y * 0.4;
    };
    return function(g, options, feature) {
        VG.Meshes.Terrain.Hill(g, options, feature, island);
    };
})();

(function() {
    /**
     * Deposit a particle at a vertex.
     */
    function deposit(g, i, j, xl, displacement) {
        var currentKey = j * xl + i;
        // Pick a random neighbor.
        for (var k = 0; k < 3; k++) {
            var r = Math.floor(Math.random() * 8);
            switch (r) {
                case 0: i++; break;
                case 1: i--; break;
                case 2: j++; break;
                case 3: j--; break;
                case 4: i++; j++; break;
                case 5: i++; j--; break;
                case 6: i--; j++; break;
                case 7: i--; j--; break;
            }
            var neighborKey = j * xl + i;
            // If the neighbor is lower, move the particle to that neighbor and re-evaluate.
            if (typeof g[neighborKey] !== 'undefined') {
                if (g[neighborKey].z < g[currentKey].z) {
                    deposit(g, i, j, xl, displacement);
                    return;
                }
            }
            // Deposit some particles on the edge.
            else if (Math.random() < 0.2) {
                g[currentKey].z += displacement;
                return;
            }
        }
        g[currentKey].z += displacement;
    }

    VG.Meshes.Terrain.Particles = function(g, options) {
        var iterations = Math.sqrt(options.xSegments*options.xSegments + options.ySegments*options.ySegments) * options.frequency * 300,
            xl = options.xSegments + 1,
            displacement = (options.maxHeight - options.minHeight) / iterations * 1000,
            i = Math.floor(Math.random() * options.xSegments),
            j = Math.floor(Math.random() * options.ySegments),
            xDeviation = Math.random() * 0.2 - 0.1,
            yDeviation = Math.random() * 0.2 - 0.1;
        for (var k = 0; k < iterations; k++) {
            deposit(g, i, j, xl, displacement);
            var d = Math.random() * Math.PI * 2;
            if (k % 1000 === 0) {
                xDeviation = Math.random() * 0.2 - 0.1;
                yDeviation = Math.random() * 0.2 - 0.1;
            }
            if (k % 100 === 0) {
                i = Math.floor(options.xSegments*(0.5+xDeviation) + Math.cos(d) * Math.random() * options.xSegments*(0.5-Math.abs(xDeviation)));
                j = Math.floor(options.ySegments*(0.5+yDeviation) + Math.sin(d) * Math.random() * options.ySegments*(0.5-Math.abs(yDeviation)));
            }
        }
        // VG.Meshes.Terrain.Smooth(g, options, 3);
    };
})();


VG.Meshes.Terrain.Perlin = function(g, options) {
    noise.seed(Math.random());
    var range = (options.maxHeight - options.minHeight) * 0.5,
        divisor = (Math.min(options.xSegments, options.ySegments) + 1) / options.frequency;
    for (var i = 0, xl = options.xSegments + 1; i < xl; i++) {
        for (var j = 0, yl = options.ySegments + 1; j < yl; j++) {
            g[j * xl + i].z += noise.perlin(i / divisor, j / divisor) * range;
        }
    }
};

VG.Meshes.Terrain.PerlinDiamond = function(g, options) {
    VG.Meshes.Terrain.MultiPass(g, options, [
        { method: VG.Meshes.Terrain.Perlin },
        { method: VG.Meshes.Terrain.DiamondSquare, amplitude: 0.75 },
        { method: function(g, o) { return VG.Meshes.Terrain.SmoothMedian(g, o); } },
    ]);
};


VG.Meshes.Terrain.PerlinLayers = function(g, options) {
    VG.Meshes.Terrain.MultiPass(g, options, [
        { method: VG.Meshes.Terrain.Perlin,                  frequency:  1.25 },
        { method: VG.Meshes.Terrain.Perlin, amplitude: 0.05, frequency:  2.5  },
        { method: VG.Meshes.Terrain.Perlin, amplitude: 0.35, frequency:  5    },
        { method: VG.Meshes.Terrain.Perlin, amplitude: 0.15, frequency: 10    },
    ]);
};

VG.Meshes.Terrain.Simplex = function(g, options) {
    noise.seed(Math.random());
    var range = (options.maxHeight - options.minHeight) * 0.5,
        divisor = (Math.min(options.xSegments, options.ySegments) + 1) * 2 / options.frequency;
    for (var i = 0, xl = options.xSegments + 1; i < xl; i++) {
        for (var j = 0, yl = options.ySegments + 1; j < yl; j++) {
            g[j * xl + i].z += noise.simplex(i / divisor, j / divisor) * range;
        }
    }
};

VG.Meshes.Terrain.SimplexLayers = function(g, options) {
    VG.Meshes.Terrain.MultiPass(g, options, [
        { method: VG.Meshes.Terrain.Simplex,                    frequency:  1.25 },
        { method: VG.Meshes.Terrain.Simplex, amplitude: 0.5,    frequency:  2.5  },
        { method: VG.Meshes.Terrain.Simplex, amplitude: 0.25,   frequency:  5    },
        { method: VG.Meshes.Terrain.Simplex, amplitude: 0.125,  frequency: 10    },
        { method: VG.Meshes.Terrain.Simplex, amplitude: 0.0625, frequency: 20    },
    ]);
};

(function() {

    function WhiteNoise(g, options, scale, segments, range, data) {
        if (scale > segments) return;
        var i = 0,
            j = 0,
            xl = segments,
            yl = segments,
            inc = Math.floor(segments / scale),
            lastX = -inc,
            lastY = -inc;
        // Walk over the target. For a target of size W and a resolution of N,
        // set every W/N points (in both directions).
        for (i = 0; i <= xl; i += inc) {
            for (j = 0; j <= yl; j += inc) {
                var k = j * xl + i;
                data[k] = Math.random() * range;
                if (lastX < 0 && lastY < 0) continue;
                // jscs:disable disallowSpacesInsideBrackets
                /* c b *
                 * l t */
                var t = data[k],
                    l = data[ j      * xl + (i-inc)] || t, // left
                    b = data[(j-inc) * xl +  i     ] || t, // bottom
                    c = data[(j-inc) * xl + (i-inc)] || t; // corner
                // jscs:enable disallowSpacesInsideBrackets
                // Interpolate between adjacent points to set the height of
                // higher-resolution target data.
                for (var x = lastX; x < i; x++) {
                    for (var y = lastY; y < j; y++) {
                        if (x === lastX && y === lastY) continue;
                        var z = y * xl + x;
                        if (z < 0) continue;
                        var px = ((x-lastX) / inc),
                            py = ((y-lastY) / inc),
                            r1 = px * b + (1-px) * c,
                            r2 = px * t + (1-px) * l;
                        data[z] = py * r2 + (1-py) * r1;
                    }
                }
                lastY = j;
            }
            lastX = i;
            lastY = -inc;
        }
        // Assign the temporary data back to the actual terrain heightmap.
        for (i = 0, xl = options.xSegments + 1; i < xl; i++) {
            for (j = 0, yl = options.ySegments + 1; j < yl; j++) {
                // http://stackoverflow.com/q/23708306/843621
                var kg = j * xl + i,
                    kd = j * segments + i;
                g[kg].z += data[kd];
            }
        }
    }

    VG.Meshes.Terrain.Value = function(g, options) {
        // Set the segment length to the smallest power of 2 that is greater
        // than the number of vertices in either dimension of the plane
        var segments = THREE.Math.nextPowerOfTwo(Math.max(options.xSegments, options.ySegments) + 1);

        // Store the array of white noise outside of the WhiteNoise function to
        // avoid allocating a bunch of unnecessary arrays; we can just
        // overwrite old data each time WhiteNoise() is called.
        var data = new Float64Array((segments+1)*(segments+1));

        // Layer white noise at different resolutions.
        var range = options.maxHeight - options.minHeight;
        for (var i = 2; i < 7; i++) {
            WhiteNoise(g, options, Math.pow(2, i), segments, range * Math.pow(2, 2.4-i*1.2), data);
        }

        // White noise creates some weird artifacts; fix them.
        // VG.Meshes.Terrain.Smooth(g, options, 1);
        VG.Meshes.Terrain.Clamp(g, {
            maxHeight: options.maxHeight,
            minHeight: options.minHeight,
            stretch: true,
        });
    };
})();

VG.Meshes.Terrain.Weierstrass = function(g, options) {
    var range = (options.maxHeight - options.minHeight) * 0.5,
        dir1 = Math.random() < 0.5 ? 1 : -1,
        dir2 = Math.random() < 0.5 ? 1 : -1,
        r11  =  0.5   + Math.random() * 1.0,
        r12  =  0.5   + Math.random() * 1.0,
        r13  =  0.025 + Math.random() * 0.10,
        r14  = -1.0   + Math.random() * 2.0,
        r21  =  0.5   + Math.random() * 1.0,
        r22  =  0.5   + Math.random() * 1.0,
        r23  =  0.025 + Math.random() * 0.10,
        r24  = -1.0   + Math.random() * 2.0;
    for (var i = 0, xl = options.xSegments + 1; i < xl; i++) {
        for (var j = 0, yl = options.ySegments + 1; j < yl; j++) {
            var sum = 0;
            for (var k = 0; k < 20; k++) {
                var x = Math.pow(1+r11, -k) * Math.sin(Math.pow(1+r12, k) * (i + 0.25*Math.cos(j) + r14*j) * r13);
                var y = Math.pow(1+r21, -k) * Math.sin(Math.pow(1+r22, k) * (j + 0.25*Math.cos(i) + r24*i) * r23);
                sum -= Math.exp(dir1*x*x + dir2*y*y);
            }
            g[j * xl + i].z += sum * range;
        }
    }
    VG.Meshes.Terrain.Clamp(g, options);
};

VG.Meshes.Terrain.glslifyNumber = function(n) {
    return n === (n|0) ? n+'.0' : n+'';
};

VG.Meshes.Terrain.generateBlendedMaterial = function(textures) {
    // Convert numbers to strings of floats so GLSL doesn't barf on "1" instead of "1.0"


    var uniforms = THREE.UniformsUtils.merge([THREE.ShaderLib.lambert.uniforms]),
        declare = '',
        assign = '',
        t0Repeat = textures[0].texture.repeat,
        t0Offset = textures[0].texture.offset;
    for (var i = 0, l = textures.length; i < l; i++) {
        // Uniforms
        textures[i].texture.wrapS = textures[i].texture.wrapT = THREE.RepeatWrapping;
        textures[i].texture.needsUpdate = true;
        uniforms['texture_' + i] = {
            type: 't',
            value: textures[i].texture,
        };

        // Shader fragments
        // Declare each texture, then mix them together.
        declare += 'uniform sampler2D texture_' + i + ';\n';
        if (i !== 0) {
            var v = textures[i].levels, // Vertex heights at which to blend textures in and out
                p = textures[i].glsl, // Or specify a GLSL expression that evaluates to a float between 0.0 and 1.0 indicating how opaque the texture should be at this texel
                useLevels = typeof v !== 'undefined', // Use levels if they exist; otherwise, use the GLSL expression
                tiRepeat = textures[i].texture.repeat,
                tiOffset = textures[i].texture.offset;
            if (useLevels) {
                // Must fade in; can't start and stop at the same point.
                // So, if levels are too close, move one of them slightly.
                if (v[1] - v[0] < 1) v[0] -= 1;
                if (v[3] - v[2] < 1) v[3] += 1;
                for (var j = 0; j < v.length; j++) {
                    v[j] = VG.Meshes.Terrain.glslifyNumber(v[j]);
                }
            }
            // The transparency of the new texture when it is layered on top of the existing color at this texel is
            // (how far between the start-blending-in and fully-blended-in levels the current vertex is) +
            // (how far between the start-blending-out and fully-blended-out levels the current vertex is)
            // So the opacity is 1.0 minus that.
            var blendAmount = !useLevels ? p :
                '1.0 - smoothstep(' + v[0] + ', ' + v[1] + ', vPosition.z) + smoothstep(' + v[2] + ', ' + v[3] + ', vPosition.z)';
            assign += '        color = mix( ' +
                'texture2D( texture_' + i + ', MyvUv * vec2( ' + VG.Meshes.Terrain.glslifyNumber(tiRepeat.x) + ', ' + VG.Meshes.Terrain.glslifyNumber(tiRepeat.y) + ' ) + vec2( ' + VG.Meshes.Terrain.glslifyNumber(tiOffset.x) + ', ' + VG.Meshes.Terrain.glslifyNumber(tiOffset.y) + ' ) ), ' +
                'color, ' +
                'max(min(' + blendAmount + ', 1.0), 0.0)' +
                ');\n';
        }
    }

    var params = {
        // I don't know which of these properties have any effect
        fog: true,
        lights: true,
        // shading: THREE.SmoothShading,
        // blending: THREE.NormalBlending,
        // depthTest: <bool>,
        // depthWrite: <bool>,
        // wireframe: false,
        // wireframeLinewidth: 1,
        // vertexColors: THREE.NoColors,
        // skinning: <bool>,
        // morphTargets: <bool>,
        // morphNormals: <bool>,
        // opacity: 1.0,
        // transparent: <bool>,
        // side: THREE.FrontSide,

        uniforms: uniforms,
        vertexShader: THREE.ShaderLib.lambert.vertexShader.replace(
            'void main() {',
            'varying vec2 MyvUv;\nvarying vec3 vPosition;\nvarying vec3 myNormal; void main() {\nMyvUv = uv;\nvPosition = position;\nmyNormal = normal;'
        ),
        // This is mostly copied from THREE.ShaderLib.lambert.fragmentShader
        fragmentShader: [
            'uniform vec3 diffuse;',
            'uniform vec3 emissive;',
            'uniform float opacity;',
            'varying vec3 vLightFront;',
            '#ifdef DOUBLE_SIDED',
            '    varying vec3 vLightBack;',
            '#endif',

            THREE.ShaderChunk.common,
            THREE.ShaderChunk.packing,
            THREE.ShaderChunk.dithering_pars_fragment,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.uv_pars_fragment,
            THREE.ShaderChunk.uv2_pars_fragment,
            THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.alphamap_pars_fragment,
            THREE.ShaderChunk.aomap_pars_fragment,
            THREE.ShaderChunk.lightmap_pars_fragment,
            THREE.ShaderChunk.emissivemap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment,
            THREE.ShaderChunk.bsdfs,
            THREE.ShaderChunk.lights_pars_begin,
            THREE.ShaderChunk.lights_pars_maps,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.shadowmask_pars_fragment,
            THREE.ShaderChunk.specularmap_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            THREE.ShaderChunk.clipping_planes_pars_fragment,

            declare,
            'varying vec2 MyvUv;',
            'varying vec3 vPosition;',
            'varying vec3 myNormal;',

            'void main() {',

            THREE.ShaderChunk.clipping_planes_fragment,

	'ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );',
	'vec3 totalEmissiveRadiance = emissive;',

            // TODO: The second vector here is the object's "up" vector. Ideally we'd just pass it in directly.
            'float slope = acos(max(min(dot(myNormal, vec3(0.0, 0.0, 1.0)), 1.0), -1.0));',

            '    vec4 diffuseColor = vec4( diffuse, opacity );',
            '    vec4 color = texture2D( texture_0, MyvUv * vec2( ' + VG.Meshes.Terrain.glslifyNumber(t0Repeat.x) + ', ' + VG.Meshes.Terrain.glslifyNumber(t0Repeat.y) + ' ) + vec2( ' + VG.Meshes.Terrain.glslifyNumber(t0Offset.x) + ', ' + VG.Meshes.Terrain.glslifyNumber(t0Offset.y) + ' ) ); // base',
                assign,
            '    diffuseColor = color;',
            // '    gl_FragColor = color;',

                THREE.ShaderChunk.logdepthbuf_fragment,
                THREE.ShaderChunk.map_fragment,
                THREE.ShaderChunk.color_fragment,
                THREE.ShaderChunk.alphamap_fragment,
                THREE.ShaderChunk.alphatest_fragment,
                THREE.ShaderChunk.specularmap_fragment,
                THREE.ShaderChunk.emissivemap_fragment,

            // accumulation
            '   reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );',

                THREE.ShaderChunk.lightmap_fragment,

            '    reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );',
            '    #ifdef DOUBLE_SIDED',
            '            reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;',
            '    #else',
            '            reflectedLight.directDiffuse = vLightFront;',
            '    #endif',
            '    reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();',

                // modulation
                THREE.ShaderChunk.aomap_fragment,
            '   vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;',
                THREE.ShaderChunk.normal_flip,
                THREE.ShaderChunk.envmap_fragment,
            '   gl_FragColor = vec4( outgoingLight, diffuseColor.a );', // This will probably change in future three.js releases
                THREE.ShaderChunk.tonemapping_fragment,
                THREE.ShaderChunk.encodings_fragment,
                THREE.ShaderChunk.fog_fragment,
                THREE.ShaderChunk.premultiplied_alpha_fragment,
                THREE.ShaderChunk.dithering_fragment,
            '}'
        ].join('\n'),
    };
    return new THREE.ShaderMaterial(params);
};


VG.Meshes.Terrain.ScatterMeshes = function(geometry, options) {
    if (!options.mesh) {
        console.error('options.mesh is required for VG.Meshes.Terrain.ScatterMeshes but was not passed');
        return;
    }
    if (geometry instanceof THREE.BufferGeometry) {
        console.warn('The terrain mesh is using BufferGeometry but VG.Meshes.Terrain.ScatterMeshes can only work with Geometry.');
        return;
    }
    if (!options.scene) {
        options.scene = new THREE.Object3D();
    }
    var defaultOptions = {
        spread: 0.025,
        smoothSpread: 0,
        sizeVariance: 0.1,
        randomness: Math.random,
        maxSlope: 0.6283185307179586, // 36deg or 36 / 180 * Math.PI, about the angle of repose of earth
        maxTilt: Infinity,
        w: 0,
        h: 0,
    };
    for (var opt in defaultOptions) {
        if (defaultOptions.hasOwnProperty(opt)) {
            options[opt] = typeof options[opt] === 'undefined' ? defaultOptions[opt] : options[opt];
        }
    }

    var spreadIsNumber = typeof options.spread === 'number',
        randomHeightmap,
        randomness,
        spreadRange = 1 / options.smoothSpread,
        doubleSizeVariance = options.sizeVariance * 2,
        v = geometry.vertices,
        meshes = [],
        up = options.mesh.up.clone().applyAxisAngle(new THREE.Vector3(1, 0, 0), 0.5*Math.PI);
    if (spreadIsNumber) {
        randomHeightmap = options.randomness();
        randomness = typeof randomHeightmap === 'number' ? Math.random : function(k) { return randomHeightmap[k]; };
    }
    // geometry.computeFaceNormals();
    for (var i = 0, w = options.w*2; i < w; i++) {
        for (var j = 0, h = options.h; j < h; j++) {
            var key = j*w + i,
                f = geometry.faces[key],
                place = false;
            if (spreadIsNumber) {
                var rv = randomness(key);
                if (rv < options.spread) {
                    place = true;
                }
                else if (rv < options.spread + options.smoothSpread) {
                    // Interpolate rv between spread and spread + smoothSpread,
                    // then multiply that "easing" value by the probability
                    // that a mesh would get placed on a given face.
                    place = VG.Meshes.Terrain.EaseInOut((rv - options.spread) * spreadRange) * options.spread > Math.random();
                }
            }
            else {
                place = options.spread(v[f.a], key, f, i, j);
            }
            if (place) {
                // Don't place a mesh if the angle is too steep.
                if (f.normal.angleTo(up) > options.maxSlope) {
                    continue;
                }
                var mesh = options.mesh.clone();
                // mesh.geometry.computeBoundingBox();
                mesh.position.copy(v[f.a]).add(v[f.b]).add(v[f.c]).divideScalar(3);
                // mesh.translateZ((mesh.geometry.boundingBox.max.z - mesh.geometry.boundingBox.min.z) * 0.5);
                if (options.maxTilt > 0) {
                    var normal = mesh.position.clone().add(f.normal);
                    mesh.lookAt(normal);
                    var tiltAngle = f.normal.angleTo(up);
                    if (tiltAngle > options.maxTilt) {
                        var ratio = options.maxTilt / tiltAngle;
                        mesh.rotation.x *= ratio;
                        mesh.rotation.y *= ratio;
                        mesh.rotation.z *= ratio;
                    }
                }
                mesh.rotation.x += 90 / 180 * Math.PI;
                mesh.rotateY(Math.random() * 2 * Math.PI);
                if (options.sizeVariance) {
                    var variance = Math.random() * doubleSizeVariance - options.sizeVariance;
                    mesh.scale.x = mesh.scale.z = 1 + variance;
                    mesh.scale.y += variance;
                }
                meshes.push(mesh);
            }
        }
    }

    // Merge geometries.
    var k, l;
    if (options.mesh.geometry instanceof THREE.Geometry) {
        var g = new THREE.Geometry();
        for (k = 0, l = meshes.length; k < l; k++) {
            var m = meshes[k];
            m.updateMatrix();
            g.merge(m.geometry, m.matrix);
        }
        /*
        if (!(options.mesh.material instanceof THREE.MeshFaceMaterial)) {
            g = THREE.BufferGeometryUtils.fromGeometry(g);
        }
        */
        options.scene.add(new THREE.Mesh(g, options.mesh.material));
    }
    // There's no BufferGeometry merge method implemented yet.
    else {
        for (k = 0, l = meshes.length; k < l; k++) {
            options.scene.add(meshes[k]);
        }
    }

    return options.scene;
};

VG.Meshes.Terrain.ScatterHelper = function(method, options, skip, threshold) {
    skip = skip || 1;
    threshold = threshold || 0.25;
    options.frequency = options.frequency || 2.5;

    var clonedOptions = {};
    for (var opt in options) {
        if (options.hasOwnProperty(opt)) {
            clonedOptions[opt] = options[opt];
        }
    }

    clonedOptions.xSegments *= 2;
    clonedOptions.stretch = true;
    clonedOptions.maxHeight = 1;
    clonedOptions.minHeight = 0;
    var heightmap = VG.Meshes.Terrain.heightmapArray(method, clonedOptions);

    for (var i = 0, l = heightmap.length; i < l; i++) {
        if (i % skip || Math.random() > threshold) {
            heightmap[i] = 1; // 0 = place, 1 = don't place
        }
    }
    return function() {
        return heightmap;
    };
};

// Allows placing geometrically-described features on a terrain.
// If you want these features to look a little less regular,
// just apply them before a procedural pass.
// If you want more complex influence, you can just composite heightmaps.

VG.Meshes.Terrain.Influences = {
    Mesa: function(x) {
        return 1.25 * Math.min(0.8, Math.exp(-(x*x)));
    },
    Hole: function(x) {
        return -VG.Meshes.Terrain.Influences.Mesa(x);
    },
    Hill: function(x) {
        // Same curve as EaseInOut, but mirrored and translated.
        return x < 0 ? (x+1)*(x+1)*(3-2*(x+1)) : 1-x*x*(3-2*x);
    },
    Valley: function(x) {
        return -VG.Meshes.Terrain.Influences.Hill(x);
    },
    Dome: function(x) {
        // Parabola
        return -(x+1)*(x-1);
    },
    // Not meaningful in Additive or Subtractive mode
    Flat: function(x) {
        return 0;
    },
    Volcano: function(x) {
        return 0.94 - 0.32 * (Math.abs(2 * x) + Math.cos(2 * Math.PI * Math.abs(x) + 0.4));
    },
};

VG.Meshes.Terrain.Influence = function(g, options, f, x, y, r, h, t, e) {
    f = f || VG.Meshes.Terrain.Influences.Hill; // feature shape
    x = typeof x === 'undefined' ? 0.5 : x; // x-location %
    y = typeof y === 'undefined' ? 0.5 : y; // y-location %
    r = typeof r === 'undefined' ? 64  : r; // radius
    h = typeof h === 'undefined' ? 64  : h; // height
    t = typeof t === 'undefined' ? THREE.NormalBlending : t; // blending
    e = e || VG.Meshes.Terrain.EaseIn; // falloff
    // Find the vertex location of the feature origin
    var xl = options.xSegments + 1, // # x-vertices
        yl = options.ySegments + 1, // # y-vertices
        vx = xl * x, // vertex x-location
        vy = yl * y, // vertex y-location
        xw = options.xSize / options.xSegments, // width of x-segments
        yw = options.ySize / options.ySegments, // width of y-segments
        rx = r / xw, // radius of the feature in vertices on the x-axis
        ry = r / yw, // radius of the feature in vertices on the y-axis
        r1 = 1 / r, // for speed
        xs = Math.ceil(vx - rx),  // starting x-vertex index
        xe = Math.floor(vx + rx), // ending x-vertex index
        ys = Math.ceil(vy - ry),  // starting y-vertex index
        ye = Math.floor(vy + ry); // ending y-vertex index
    // Walk over the vertices within radius of origin
    for (var i = xs; i < xe; i++) {
        for (var j = ys; j < ye; j++) {
            var k = j * xl + i,
                // distance to the feature origin
                fdx = (i - vx) * xw,
                fdy = (j - vy) * yw,
                fd = Math.sqrt(fdx*fdx + fdy*fdy),
                fdr = fd * r1,
                fdxr = fdx * r1,
                fdyr = fdy * r1,
                // Get the displacement according to f, multiply it by h,
                // interpolate using e, then blend according to t.
                d = f(fdr, fdxr, fdyr) * h * (1 - e(fdr, fdxr, fdyr));
            if (fd > r || typeof g[k] == 'undefined') continue;
            if      (t === THREE.AdditiveBlending)    g[k].z += d; // jscs:ignore requireSpaceAfterKeywords
            else if (t === THREE.SubtractiveBlending) g[k].z -= d;
            else if (t === THREE.MultiplyBlending)    g[k].z *= d;
            else if (t === THREE.NoBlending)          g[k].z  = d;
            else if (t === THREE.NormalBlending)      g[k].z  = e(fdr, fdxr, fdyr) * g[k].z + d;
            else if (typeof t === 'function')         g[k].z  = t(g[k].z, d, fdr, fdxr, fdyr);
        }
    }
};


/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

/**
* @author Tim Knip / http://www.floorplanner.com/ / tim at floorplanner.com
* @author Tony Parisi / http://www.tonyparisi.com/
*/

THREE.ColladaLoader = function () {

	var COLLADA = null;
	var scene = null;
	var visualScene;
	var kinematicsModel;

	var readyCallbackFunc = null;

	var sources = {};
	var images = {};
	var animations = {};
	var controllers = {};
	var geometries = {};
	var materials = {};
	var effects = {};
	var cameras = {};
	var lights = {};

	var animData;
	var kinematics;
	var visualScenes;
	var kinematicsModels;
	var baseUrl;
	var morphs;
	var skins;

	var flip_uv = true;
	var preferredShading = THREE.SmoothShading;

	var options = {
		// Force Geometry to always be centered at the local origin of the
		// containing Mesh.
		centerGeometry: false,

		// Axis conversion is done for geometries, animations, and controllers.
		// If we ever pull cameras or lights out of the COLLADA file, they'll
		// need extra work.
		convertUpAxis: false,

		subdivideFaces: true,

		upAxis: 'Y',

		// For reflective or refractive materials we'll use this cubemap
		defaultEnvMap: null

	};

	var colladaUnit = 1.0;
	var colladaUp = 'Y';
	var upConversion = null;

	function load ( url, readyCallback, progressCallback, failCallback ) {

		var length = 0;

		if ( document.implementation && document.implementation.createDocument ) {

			var request = new XMLHttpRequest();

			request.onreadystatechange = function() {

				if ( request.readyState === 4 ) {

					if ( request.status === 0 || request.status === 200 ) {

						if ( request.response ) {

							readyCallbackFunc = readyCallback;
							parse( request.response, undefined, url );

						} else {

							if ( failCallback ) {

								failCallback( { type: 'error', url: url } );

							} else {

								console.error( "ColladaLoader: Empty or non-existing file (" + url + ")" );

							}

						}

					}else{

						if( failCallback ){

							failCallback( { type: 'error', url: url } );

						}else{

							console.error( 'ColladaLoader: Couldn\'t load "' + url + '" (' + request.status + ')' );

						}

					}

				} else if ( request.readyState === 3 ) {

					if ( progressCallback ) {

						if ( length === 0 ) {

							length = request.getResponseHeader( "Content-Length" );

						}

						progressCallback( { total: length, loaded: request.responseText.length } );

					}

				}

			};

			request.open( "GET", url, true );
			request.send( null );

		} else {

			alert( "Don't know how to parse XML!" );

		}

	}

	function parse( text, callBack, url ) {

		COLLADA = new DOMParser().parseFromString( text, 'text/xml' );
		callBack = callBack || readyCallbackFunc;

		if ( url !== undefined ) {

			var parts = url.split( '/' );
			parts.pop();
			baseUrl = ( parts.length < 1 ? '.' : parts.join( '/' ) ) + '/';

		}

		parseAsset();
		setUpConversion();
		images = parseLib( "library_images image", _Image, "image" );
		materials = parseLib( "library_materials material", Material, "material" );
		effects = parseLib( "library_effects effect", Effect, "effect" );
		geometries = parseLib( "library_geometries geometry", Geometry, "geometry" );
		cameras = parseLib( "library_cameras camera", Camera, "camera" );
		lights = parseLib( "library_lights light", Light, "light" );
		controllers = parseLib( "library_controllers controller", Controller, "controller" );
		animations = parseLib( "library_animations animation", Animation, "animation" );
		visualScenes = parseLib( "library_visual_scenes visual_scene", VisualScene, "visual_scene" );
		kinematicsModels = parseLib( "library_kinematics_models kinematics_model", KinematicsModel, "kinematics_model" );

		morphs = [];
		skins = [];

		visualScene = parseScene();
		scene = new THREE.Group();

		for ( var i = 0; i < visualScene.nodes.length; i ++ ) {

			scene.add( createSceneGraph( visualScene.nodes[ i ] ) );

		}

		// unit conversion
		scene.scale.multiplyScalar( colladaUnit );

		createAnimations();

		kinematicsModel = parseKinematicsModel();
		createKinematics();

		function ColladaModel(model){
			this.view = model;


			this.animations = [];

			this.mixer = new THREE.AnimationMixer( this.view );
			this._createAnimations();
			
		}

		ColladaModel.prototype = {
			constructor: ColladaModel,

			update: function (dt){
        		this.mixer.update(dt)
       		},

       		clone: function () {
       			var obj = new this.constructor(this.view.clone());
       			return obj;
       		},

			_createAnimations: function (){
				var context = this;
		        this.view.traverse( function ( child ) {

		            if ( child instanceof THREE.SkinnedMesh ) {

		                var clip = THREE.AnimationClip.parseAnimation( child.geometry.animation, child.geometry.bones );
		                var action = context.mixer.clipAction( clip, child );
		                context.animations.push(action) ;
		            }
		        });
			}
		}

		var result = new ColladaModel(scene)

		if ( callBack ) {

			callBack( result );

		}

		return result;

	}

	function setPreferredShading ( shading ) {

		preferredShading = shading;

	}

	function parseAsset () {

		var elements = COLLADA.querySelectorAll('asset');

		var element = elements[0];

		if ( element && element.childNodes ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'unit':

						var meter = child.getAttribute( 'meter' );

						if ( meter ) {

							colladaUnit = parseFloat( meter );

						}

						break;

					case 'up_axis':

						colladaUp = child.textContent.charAt(0);
						break;

				}

			}

		}

	}

	function parseLib ( q, classSpec, prefix ) {

		var elements = COLLADA.querySelectorAll(q);

		var lib = {};

		var i = 0;

		var elementsLength = elements.length;

		for ( var j = 0; j < elementsLength; j ++ ) {

			var element = elements[j];
			var daeElement = ( new classSpec() ).parse( element );

			if ( !daeElement.id || daeElement.id.length === 0 ) daeElement.id = prefix + ( i ++ );
			lib[ daeElement.id ] = daeElement;

		}

		return lib;

	}

	function parseScene() {

		var sceneElement = COLLADA.querySelectorAll('scene instance_visual_scene')[0];

		if ( sceneElement ) {

			var url = sceneElement.getAttribute( 'url' ).replace( /^#/, '' );
			return visualScenes[ url.length > 0 ? url : 'visual_scene0' ];

		} else {

			return null;

		}

	}

	function parseKinematicsModel() {

		var kinematicsModelElement = COLLADA.querySelectorAll('instance_kinematics_model')[0];

		if ( kinematicsModelElement ) {

			var url = kinematicsModelElement.getAttribute( 'url' ).replace(/^#/, '');
			return kinematicsModels[ url.length > 0 ? url : 'kinematics_model0' ];

		} else {

			return null;

		}

	}

	function createAnimations() {

		animData = [];

		// fill in the keys
		recurseHierarchy( scene );

	}

	function recurseHierarchy( node ) {

		var n = visualScene.getChildById( node.colladaId, true ),
			newData = null;

		if ( n && n.keys ) {

			newData = {
				fps: 60,
				hierarchy: [ {
					node: n,
					keys: n.keys,
					sids: n.sids
				} ],
				node: node,
				name: 'animation_' + node.name,
				length: 0
			};

			animData.push(newData);

			for ( var i = 0, il = n.keys.length; i < il; i ++ ) {

				newData.length = Math.max( newData.length, n.keys[i].time );

			}

		} else {

			newData = {
				hierarchy: [ {
					keys: [],
					sids: []
				} ]
			}

		}

		for ( var i = 0, il = node.children.length; i < il; i ++ ) {

			var d = recurseHierarchy( node.children[i] );

			for ( var j = 0, jl = d.hierarchy.length; j < jl; j ++ ) {

				newData.hierarchy.push( {
					keys: [],
					sids: []
				} );

			}

		}

		return newData;

	}

	function calcAnimationBounds () {

		var start = 1000000;
		var end = -start;
		var frames = 0;
		var ID;
		for ( var id in animations ) {

			var animation = animations[ id ];
			ID = ID || animation.id;
			for ( var i = 0; i < animation.sampler.length; i ++ ) {

				var sampler = animation.sampler[ i ];

				sampler.create();

				start = Math.min( start, sampler.startTime );
				end = Math.max( end, sampler.endTime );
				frames = Math.max( frames, sampler.input.length );

			}

		}

		return { start:start, end:end, frames:frames,ID:ID };

	}

	function createMorph ( geometry, ctrl ) {

		var morphCtrl = ctrl instanceof InstanceController ? controllers[ ctrl.url ] : ctrl;

		if ( !morphCtrl || !morphCtrl.morph ) {

			console.log("could not find morph controller!");
			return;

		}

		var morph = morphCtrl.morph;

		for ( var i = 0; i < morph.targets.length; i ++ ) {

			var target_id = morph.targets[ i ];
			var daeGeometry = geometries[ target_id ];

			if ( !daeGeometry.mesh ||
				 !daeGeometry.mesh.primitives ||
				 !daeGeometry.mesh.primitives.length ) {
				 continue;
			}

			var target = daeGeometry.mesh.primitives[ 0 ].geometry;

			if ( target.vertices.length === geometry.vertices.length ) {

				geometry.morphTargets.push( { name: "target_1", vertices: target.vertices } );

			}

		}

		geometry.morphTargets.push( { name: "target_Z", vertices: geometry.vertices } );

	}

	function createSkin ( geometry, ctrl, applyBindShape ) {

		var skinCtrl = controllers[ ctrl.url ];

		if ( !skinCtrl || !skinCtrl.skin ) {

			console.log( "could not find skin controller!" );
			return;

		}

		if ( !ctrl.skeleton || !ctrl.skeleton.length ) {

			console.log( "could not find the skeleton for the skin!" );
			return;

		}

		var skin = skinCtrl.skin;
		var skeleton = visualScene.getChildById( ctrl.skeleton[ 0 ] );
		var hierarchy = [];

		applyBindShape = applyBindShape !== undefined ? applyBindShape : true;

		var bones = [];
		geometry.skinWeights = [];
		geometry.skinIndices = [];

		//createBones( geometry.bones, skin, hierarchy, skeleton, null, -1 );
		//createWeights( skin, geometry.bones, geometry.skinIndices, geometry.skinWeights );

		/*
		geometry.animation = {
			name: 'take_001',
			fps: 30,
			length: 2,
			JIT: true,
			hierarchy: hierarchy
		};
		*/

		if ( applyBindShape ) {

			for ( var i = 0; i < geometry.vertices.length; i ++ ) {

				geometry.vertices[ i ].applyMatrix4( skin.bindShapeMatrix );

			}

		}

	}

	function setupSkeleton ( node, bones, frame, parent ) {

		node.world = node.world || new THREE.Matrix4();
		node.localworld = node.localworld || new THREE.Matrix4();
		node.world.copy( node.matrix );
		node.localworld.copy( node.matrix );

		if ( node.channels && node.channels.length ) {

			var channel = node.channels[ 0 ];
			var m = channel.sampler.output[ frame ];

			if ( m instanceof THREE.Matrix4 ) {

				node.world.copy( m );
				node.localworld.copy(m);
				if (frame === 0)
					node.matrix.copy(m);
			}

		}

		if ( parent ) {

			node.world.multiplyMatrices( parent, node.world );

		}

		bones.push( node );

		for ( var i = 0; i < node.nodes.length; i ++ ) {

			setupSkeleton( node.nodes[ i ], bones, frame, node.world );

		}

	}

	function setupSkinningMatrices ( bones, skin ) {

		// FIXME: this is dumb...

		for ( var i = 0; i < bones.length; i ++ ) {

			var bone = bones[ i ];
			var found = -1;

			if ( bone.type != 'JOINT' ) continue;

			for ( var j = 0; j < skin.joints.length; j ++ ) {

				if ( bone.sid === skin.joints[ j ] ) {

					found = j;
					break;

				}

			}

			if ( found >= 0 ) {

				var inv = skin.invBindMatrices[ found ];

				bone.invBindMatrix = inv;
				bone.skinningMatrix = new THREE.Matrix4();
				bone.skinningMatrix.multiplyMatrices(bone.world, inv); // (IBMi * JMi)
				bone.animatrix = new THREE.Matrix4();

				bone.animatrix.copy(bone.localworld);
				bone.weights = [];

				for ( var j = 0; j < skin.weights.length; j ++ ) {

					for (var k = 0; k < skin.weights[ j ].length; k ++ ) {

						var w = skin.weights[ j ][ k ];

						if ( w.joint === found ) {

							bone.weights.push( w );

						}

					}

				}

			} else {

				console.warn( "ColladaLoader: Could not find joint '" + bone.sid + "'." );

				bone.skinningMatrix = new THREE.Matrix4();
				bone.weights = [];

			}
		}

	}

	//Walk the Collada tree and flatten the bones into a list, extract the position, quat and scale from the matrix
	function flattenSkeleton(skeleton) {

		var list = [];
		var walk = function(parentid, node, list) {

			var bone = {};
			bone.name = node.sid;
			bone.parent = parentid;
			bone.matrix = node.matrix;
			var data = [ new THREE.Vector3(),new THREE.Quaternion(),new THREE.Vector3() ];
			bone.matrix.decompose(data[0], data[1], data[2]);

			bone.pos = [ data[0].x,data[0].y,data[0].z ];

			bone.scl = [ data[2].x,data[2].y,data[2].z ];
			bone.rotq = [ data[1].x,data[1].y,data[1].z,data[1].w ];
			list.push(bone);

			for (var i in node.nodes) {

				walk(node.sid, node.nodes[i], list);

			}

		};

		walk(-1, skeleton, list);
		return list;

	}

	//Move the vertices into the pose that is proper for the start of the animation
	function skinToBindPose(geometry,skeleton,skinController) {

		var bones = [];
		setupSkeleton( skeleton, bones, -1 );
		setupSkinningMatrices( bones, skinController.skin );
		var v = new THREE.Vector3();
		var skinned = [];

		for (var i = 0; i < geometry.vertices.length; i ++) {

			skinned.push(new THREE.Vector3());

		}

		for ( i = 0; i < bones.length; i ++ ) {

			if ( bones[ i ].type != 'JOINT' ) continue;

			for ( var j = 0; j < bones[ i ].weights.length; j ++ ) {

				var w = bones[ i ].weights[ j ];
				var vidx = w.index;
				var weight = w.weight;

				var o = geometry.vertices[vidx];
				var s = skinned[vidx];

				v.x = o.x;
				v.y = o.y;
				v.z = o.z;

				v.applyMatrix4( bones[i].skinningMatrix );

				s.x += (v.x * weight);
				s.y += (v.y * weight);
				s.z += (v.z * weight);
			}

		}

		for (var i = 0; i < geometry.vertices.length; i ++) {

			geometry.vertices[i] = skinned[i];

		}

	}

	function applySkin ( geometry, instanceCtrl, frame ) {

		var skinController = controllers[ instanceCtrl.url ];

		frame = frame !== undefined ? frame : 40;

		if ( !skinController || !skinController.skin ) {

			console.log( 'ColladaLoader: Could not find skin controller.' );
			return;

		}

		if ( !instanceCtrl.skeleton || !instanceCtrl.skeleton.length ) {

			console.log( 'ColladaLoader: Could not find the skeleton for the skin. ' );
			return;

		}

		var animationBounds = calcAnimationBounds();
		var skeleton = visualScene.getChildById( instanceCtrl.skeleton[0], true ) || visualScene.getChildBySid( instanceCtrl.skeleton[0], true );

		//flatten the skeleton into a list of bones
		var bonelist = flattenSkeleton(skeleton);
		var joints = skinController.skin.joints;

		//sort that list so that the order reflects the order in the joint list
		var sortedbones = [];
		for (var i = 0; i < joints.length; i ++) {

			for (var j = 0; j < bonelist.length; j ++) {

				if (bonelist[j].name === joints[i]) {

					sortedbones[i] = bonelist[j];

				}

			}

		}

		//hook up the parents by index instead of name
		for (var i = 0; i < sortedbones.length; i ++) {

			for (var j = 0; j < sortedbones.length; j ++) {

				if (sortedbones[i].parent === sortedbones[j].name) {

					sortedbones[i].parent = j;

				}

			}

		}


		var i, j, w, vidx, weight;
		var v = new THREE.Vector3(), o, s;

		// move vertices to bind shape
		for ( i = 0; i < geometry.vertices.length; i ++ ) {
			geometry.vertices[i].applyMatrix4( skinController.skin.bindShapeMatrix );
		}

		var skinIndices = [];
		var skinWeights = [];
		var weights = skinController.skin.weights;

		// hook up the skin weights
		// TODO - this might be a good place to choose greatest 4 weights
		for ( var i =0; i < weights.length; i ++ ) {

			var indicies = new THREE.Vector4(weights[i][0] ? weights[i][0].joint : 0,weights[i][1] ? weights[i][1].joint : 0,weights[i][2] ? weights[i][2].joint : 0,weights[i][3] ? weights[i][3].joint : 0);
			var weight = new THREE.Vector4(weights[i][0] ? weights[i][0].weight : 0,weights[i][1] ? weights[i][1].weight : 0,weights[i][2] ? weights[i][2].weight : 0,weights[i][3] ? weights[i][3].weight : 0);

			skinIndices.push(indicies);
			skinWeights.push(weight);

		}

		geometry.skinIndices = skinIndices;
		geometry.skinWeights = skinWeights;
		geometry.bones = sortedbones;
		// process animation, or simply pose the rig if no animation

		//create an animation for the animated bones
		//NOTE: this has no effect when using morphtargets
		var animationdata = { "name":animationBounds.ID,"fps":30,"length":animationBounds.frames / 30,"hierarchy":[] };

		for (var j = 0; j < sortedbones.length; j ++) {

			animationdata.hierarchy.push({ parent:sortedbones[j].parent, name:sortedbones[j].name, keys:[] });

		}

		console.log( 'ColladaLoader:', animationBounds.ID + ' has ' + sortedbones.length + ' bones.' );



		skinToBindPose(geometry, skeleton, skinController);


		for ( frame = 0; frame < animationBounds.frames; frame ++ ) {

			var bones = [];
			var skinned = [];
			// process the frame and setup the rig with a fresh
			// transform, possibly from the bone's animation channel(s)

			setupSkeleton( skeleton, bones, frame );
			setupSkinningMatrices( bones, skinController.skin );

			for (var i = 0; i < bones.length; i ++) {

				for (var j = 0; j < animationdata.hierarchy.length; j ++) {

					if (animationdata.hierarchy[j].name === bones[i].sid) {

						var key = {};
						key.time = (frame / 30);
						key.matrix = bones[i].animatrix;

						if (frame === 0)
							bones[i].matrix = key.matrix;

						var data = [ new THREE.Vector3(),new THREE.Quaternion(),new THREE.Vector3() ];
						key.matrix.decompose(data[0], data[1], data[2]);

						key.pos = [ data[0].x,data[0].y,data[0].z ];

						key.scl = [ data[2].x,data[2].y,data[2].z ];
						key.rot = data[1];

						animationdata.hierarchy[j].keys.push(key);

					}

				}

			}

			geometry.animation = animationdata;

		}

	}

	function createKinematics() {

		if ( kinematicsModel && kinematicsModel.joints.length === 0 ) {
			kinematics = undefined;
			return;
		}

		var jointMap = {};

		var _addToMap = function( jointIndex, parentVisualElement ) {

			var parentVisualElementId = parentVisualElement.getAttribute( 'id' );
			var colladaNode = visualScene.getChildById( parentVisualElementId, true );
			var joint = kinematicsModel.joints[ jointIndex ];

			scene.traverse(function( node ) {

				if ( node.colladaId == parentVisualElementId ) {

					jointMap[ jointIndex ] = {
						node: node,
						transforms: colladaNode.transforms,
						joint: joint,
						position: joint.zeroPosition
					};

				}

			});

		};

		kinematics = {

			joints: kinematicsModel && kinematicsModel.joints,

			getJointValue: function( jointIndex ) {

				var jointData = jointMap[ jointIndex ];

				if ( jointData ) {

					return jointData.position;

				} else {

					console.log( 'getJointValue: joint ' + jointIndex + ' doesn\'t exist' );

				}

			},

			setJointValue: function( jointIndex, value ) {

				var jointData = jointMap[ jointIndex ];

				if ( jointData ) {

					var joint = jointData.joint;

					if ( value > joint.limits.max || value < joint.limits.min ) {

						console.log( 'setJointValue: joint ' + jointIndex + ' value ' + value + ' outside of limits (min: ' + joint.limits.min + ', max: ' + joint.limits.max + ')' );

					} else if ( joint.static ) {

						console.log( 'setJointValue: joint ' + jointIndex + ' is static' );

					} else {

						var threejsNode = jointData.node;
						var axis = joint.axis;
						var transforms = jointData.transforms;

						var matrix = new THREE.Matrix4();
						var m1 = new THREE.Matrix4();

						for (i = 0; i < transforms.length; i ++ ) {

							var transform = transforms[ i ];

							// kinda ghetto joint detection

							if ( transform.sid && transform.sid.indexOf( 'joint' + jointIndex ) !== -1 ) {

								// apply actual joint value here
								switch ( joint.type ) {

									case 'revolute':

										matrix.multiply( m1.makeRotationAxis( axis, THREE.Math.degToRad(value) ) );
										break;

									case 'prismatic':

										matrix.multiply( m1.makeTranslation(axis.x * value, axis.y * value, axis.z * value ) );
										break;

									default:

										console.warn( 'setJointValue: unknown joint type: ' + joint.type );
										break;

								}

							} else {

								switch ( transform.type ) {

									case 'matrix':

										matrix.multiply( transform.obj );

										break;

									case 'translate':

										matrix.multiply( m1.makeTranslation( transform.obj.x, transform.obj.y, transform.obj.z ) );

										break;

									case 'rotate':

										matrix.multiply( m1.makeRotationAxis( transform.obj, transform.angle ) );

										break;

								}
							}
						}

						// apply the matrix to the threejs node
						var elementsFloat32Arr = matrix.elements;
						var elements = Array.prototype.slice.call( elementsFloat32Arr );

						var elementsRowMajor = [
							elements[ 0 ],
							elements[ 4 ],
							elements[ 8 ],
							elements[ 12 ],
							elements[ 1 ],
							elements[ 5 ],
							elements[ 9 ],
							elements[ 13 ],
							elements[ 2 ],
							elements[ 6 ],
							elements[ 10 ],
							elements[ 14 ],
							elements[ 3 ],
							elements[ 7 ],
							elements[ 11 ],
							elements[ 15 ]
						];

						threejsNode.matrix.set.apply( threejsNode.matrix, elementsRowMajor );
						threejsNode.matrix.decompose( threejsNode.position, threejsNode.quaternion, threejsNode.scale );

						jointMap[ jointIndex ].position = value;

					}

				} else {

					console.log( 'setJointValue: joint ' + jointIndex + ' doesn\'t exist' );

				}

			}

		};

		var element = COLLADA.querySelector('scene instance_kinematics_scene');

		if ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'bind_joint_axis':

						var visualTarget = child.getAttribute( 'target' ).split( '/' ).pop();
						var axis = child.querySelector('axis param').textContent;
						var jointIndex = parseInt( axis.split( 'joint' ).pop().split( '.' )[0] );
						var visualTargetElement = COLLADA.querySelector( '[sid="' + visualTarget + '"]' );

						if ( visualTargetElement ) {
							var parentVisualElement = visualTargetElement.parentElement;
							_addToMap(jointIndex, parentVisualElement);
						}

						break;

					default:

						break;

				}

			}
		}

	}

	function createSceneGraph ( node, parent ) {

		var obj = new THREE.Object3D();
		var skinned = false;
		var skinController;
		var morphController;
		var i, j;

		// FIXME: controllers

		for ( i = 0; i < node.controllers.length; i ++ ) {

			var controller = controllers[ node.controllers[ i ].url ];

			switch ( controller.type ) {

				case 'skin':

					if ( geometries[ controller.skin.source ] ) {

						var inst_geom = new InstanceGeometry();

						inst_geom.url = controller.skin.source;
						inst_geom.instance_material = node.controllers[ i ].instance_material;

						node.geometries.push( inst_geom );
						skinned = true;
						skinController = node.controllers[ i ];

					} else if ( controllers[ controller.skin.source ] ) {

						// urgh: controller can be chained
						// handle the most basic case...

						var second = controllers[ controller.skin.source ];
						morphController = second;
					//	skinController = node.controllers[i];

						if ( second.morph && geometries[ second.morph.source ] ) {

							var inst_geom = new InstanceGeometry();

							inst_geom.url = second.morph.source;
							inst_geom.instance_material = node.controllers[ i ].instance_material;

							node.geometries.push( inst_geom );

						}

					}

					break;

				case 'morph':

					if ( geometries[ controller.morph.source ] ) {

						var inst_geom = new InstanceGeometry();

						inst_geom.url = controller.morph.source;
						inst_geom.instance_material = node.controllers[ i ].instance_material;

						node.geometries.push( inst_geom );
						morphController = node.controllers[ i ];

					}

					console.log( 'ColladaLoader: Morph-controller partially supported.' );

				default:
					break;

			}

		}

		// geometries

		var double_sided_materials = {};

		for ( i = 0; i < node.geometries.length; i ++ ) {

			var instance_geometry = node.geometries[i];
			var instance_materials = instance_geometry.instance_material;
			var geometry = geometries[ instance_geometry.url ];
			var used_materials = {};
			var used_materials_array = [];
			var num_materials = 0;
			var first_material;

			if ( geometry ) {

				if ( !geometry.mesh || !geometry.mesh.primitives )
					continue;

				if ( obj.name.length === 0 ) {

					obj.name = geometry.id;

				}

				// collect used fx for this geometry-instance

				if ( instance_materials ) {

					for ( j = 0; j < instance_materials.length; j ++ ) {

						var instance_material = instance_materials[ j ];
						var mat = materials[ instance_material.target ];
						var effect_id = mat.instance_effect.url;
						var shader = effects[ effect_id ].shader;
						var material3js = shader.material;

						if ( geometry.doubleSided ) {

							if ( !( instance_material.symbol in double_sided_materials ) ) {

								var _copied_material = material3js.clone();
								_copied_material.side = THREE.DoubleSide;
								double_sided_materials[ instance_material.symbol ] = _copied_material;

							}

							material3js = double_sided_materials[ instance_material.symbol ];

						}

						material3js.opacity = !material3js.opacity ? 1 : material3js.opacity;
						used_materials[ instance_material.symbol ] = num_materials;
						used_materials_array.push( material3js );
						first_material = material3js;
						first_material.name = mat.name === null || mat.name === '' ? mat.id : mat.name;
						num_materials ++;

					}

				}

				var mesh;
				var material = first_material || new THREE.MeshLambertMaterial( { color: 0xdddddd, side: geometry.doubleSided ? THREE.DoubleSide : THREE.FrontSide } );
				var geom = geometry.mesh.geometry3js;

				if ( num_materials > 1 ) {

					material = new THREE.MultiMaterial( used_materials_array );

					for ( j = 0; j < geom.faces.length; j ++ ) {

						var face = geom.faces[ j ];
						face.materialIndex = used_materials[ face.daeMaterial ]

					}

				}

				if ( skinController !== undefined ) {


					applySkin( geom, skinController );

					if ( geom.morphTargets.length > 0 ) {

						material.morphTargets = true;
						material.skinning = false;

					} else {

						material.morphTargets = false;
						material.skinning = true;

					}


					mesh = new THREE.SkinnedMesh( geom, material, false );


					//mesh.skeleton = skinController.skeleton;
					//mesh.skinController = controllers[ skinController.url ];
					//mesh.skinInstanceController = skinController;
					mesh.name = 'skin_' + skins.length;



					//mesh.animationHandle.setKey(0);
					skins.push( mesh );

				} else if ( morphController !== undefined ) {

					createMorph( geom, morphController );

					material.morphTargets = true;

					mesh = new THREE.Mesh( geom, material );
					mesh.name = 'morph_' + morphs.length;

					morphs.push( mesh );

				} else {

					if ( geom.isLineStrip === true ) {

						mesh = new THREE.Line( geom );

					} else {

						mesh = new THREE.Mesh( geom, material );

					}

				}

				obj.add(mesh);

			}

		}

		for ( i = 0; i < node.cameras.length; i ++ ) {

			var instance_camera = node.cameras[i];
			var cparams = cameras[instance_camera.url];

			var cam = new THREE.PerspectiveCamera(cparams.yfov, parseFloat(cparams.aspect_ratio),
					parseFloat(cparams.znear), parseFloat(cparams.zfar));

			obj.add(cam);
		}

		for ( i = 0; i < node.lights.length; i ++ ) {

			var light = null;
			var instance_light = node.lights[i];
			var lparams = lights[instance_light.url];

			if ( lparams && lparams.technique ) {

				var color = lparams.color.getHex();
				var intensity = lparams.intensity;
				var distance = lparams.distance;
				var angle = lparams.falloff_angle;

				switch ( lparams.technique ) {

					case 'directional':

						light = new THREE.DirectionalLight( color, intensity, distance );
						light.position.set(0, 0, 1);
						break;

					case 'point':

						light = new THREE.PointLight( color, intensity, distance );
						break;

					case 'spot':

						light = new THREE.SpotLight( color, intensity, distance, angle );
						light.position.set(0, 0, 1);
						break;

					case 'ambient':

						light = new THREE.AmbientLight( color );
						break;

				}

			}

			if (light) {
				obj.add(light);
			}
		}

		obj.name = node.name || node.id || "";
		obj.colladaId = node.id || "";
		obj.layer = node.layer || "";
		obj.matrix = node.matrix;
		obj.matrix.decompose( obj.position, obj.quaternion, obj.scale );

		if ( options.centerGeometry && obj.geometry ) {

			var delta = obj.geometry.center();
			delta.multiply( obj.scale );
			delta.applyQuaternion( obj.quaternion );

			obj.position.sub( delta );

		}

		for ( i = 0; i < node.nodes.length; i ++ ) {

			obj.add( createSceneGraph( node.nodes[i], node ) );

		}

		return obj;

	}

	function getJointId( skin, id ) {

		for ( var i = 0; i < skin.joints.length; i ++ ) {

			if ( skin.joints[ i ] === id ) {

				return i;

			}

		}

	}

	function getLibraryNode( id ) {

		var nodes = COLLADA.querySelectorAll('library_nodes node');

		for ( var i = 0; i < nodes.length; i++ ) {

			var attObj = nodes[i].attributes.getNamedItem('id');

			if ( attObj && attObj.value === id ) {

				return nodes[i];

			}

		}

		return undefined;

	}

	function getChannelsForNode ( node ) {

		var channels = [];
		var startTime = 1000000;
		var endTime = -1000000;

		for ( var id in animations ) {

			var animation = animations[id];

			for ( var i = 0; i < animation.channel.length; i ++ ) {

				var channel = animation.channel[i];
				var sampler = animation.sampler[i];
				var id = channel.target.split('/')[0];

				if ( id == node.id ) {

					sampler.create();
					channel.sampler = sampler;
					startTime = Math.min(startTime, sampler.startTime);
					endTime = Math.max(endTime, sampler.endTime);
					channels.push(channel);

				}

			}

		}

		if ( channels.length ) {

			node.startTime = startTime;
			node.endTime = endTime;

		}

		return channels;

	}

	function calcFrameDuration( node ) {

		var minT = 10000000;

		for ( var i = 0; i < node.channels.length; i ++ ) {

			var sampler = node.channels[i].sampler;

			for ( var j = 0; j < sampler.input.length - 1; j ++ ) {

				var t0 = sampler.input[ j ];
				var t1 = sampler.input[ j + 1 ];
				minT = Math.min( minT, t1 - t0 );

			}
		}

		return minT;

	}

	function calcMatrixAt( node, t ) {

		var animated = {};

		var i, j;

		for ( i = 0; i < node.channels.length; i ++ ) {

			var channel = node.channels[ i ];
			animated[ channel.sid ] = channel;

		}

		var matrix = new THREE.Matrix4();

		for ( i = 0; i < node.transforms.length; i ++ ) {

			var transform = node.transforms[ i ];
			var channel = animated[ transform.sid ];

			if ( channel !== undefined ) {

				var sampler = channel.sampler;
				var value;

				for ( j = 0; j < sampler.input.length - 1; j ++ ) {

					if ( sampler.input[ j + 1 ] > t ) {

						value = sampler.output[ j ];
						//console.log(value.flatten)
						break;

					}

				}

				if ( value !== undefined ) {

					if ( value instanceof THREE.Matrix4 ) {

						matrix.multiplyMatrices( matrix, value );

					} else {

						// FIXME: handle other types

						matrix.multiplyMatrices( matrix, transform.matrix );

					}

				} else {

					matrix.multiplyMatrices( matrix, transform.matrix );

				}

			} else {

				matrix.multiplyMatrices( matrix, transform.matrix );

			}

		}

		return matrix;

	}

	function bakeAnimations ( node ) {

		if ( node.channels && node.channels.length ) {

			var keys = [],
				sids = [];

			for ( var i = 0, il = node.channels.length; i < il; i ++ ) {

				var channel = node.channels[i],
					fullSid = channel.fullSid,
					sampler = channel.sampler,
					input = sampler.input,
					transform = node.getTransformBySid( channel.sid ),
					member;

				if ( channel.arrIndices ) {

					member = [];

					for ( var j = 0, jl = channel.arrIndices.length; j < jl; j ++ ) {

						member[ j ] = getConvertedIndex( channel.arrIndices[ j ] );

					}

				} else {

					member = getConvertedMember( channel.member );

				}

				if ( transform ) {

					if ( sids.indexOf( fullSid ) === -1 ) {

						sids.push( fullSid );

					}

					for ( var j = 0, jl = input.length; j < jl; j ++ ) {

						var time = input[j],
							data = sampler.getData( transform.type, j, member ),
							key = findKey( keys, time );

						if ( !key ) {

							key = new Key( time );
							var timeNdx = findTimeNdx( keys, time );
							keys.splice( timeNdx === -1 ? keys.length : timeNdx, 0, key );

						}

						key.addTarget( fullSid, transform, member, data );

					}

				} else {

					console.log( 'Could not find transform "' + channel.sid + '" in node ' + node.id );

				}

			}

			// post process
			for ( var i = 0; i < sids.length; i ++ ) {

				var sid = sids[ i ];

				for ( var j = 0; j < keys.length; j ++ ) {

					var key = keys[ j ];

					if ( !key.hasTarget( sid ) ) {

						interpolateKeys( keys, key, j, sid );

					}

				}

			}

			node.keys = keys;
			node.sids = sids;

		}

	}

	function findKey ( keys, time) {

		var retVal = null;

		for ( var i = 0, il = keys.length; i < il && retVal === null; i ++ ) {

			var key = keys[i];

			if ( key.time === time ) {

				retVal = key;

			} else if ( key.time > time ) {

				break;

			}

		}

		return retVal;

	}

	function findTimeNdx ( keys, time) {

		var ndx = -1;

		for ( var i = 0, il = keys.length; i < il && ndx === -1; i ++ ) {

			var key = keys[i];

			if ( key.time >= time ) {

				ndx = i;

			}

		}

		return ndx;

	}

	function interpolateKeys ( keys, key, ndx, fullSid ) {

		var prevKey = getPrevKeyWith( keys, fullSid, ndx ? ndx - 1 : 0 ),
			nextKey = getNextKeyWith( keys, fullSid, ndx + 1 );

		if ( prevKey && nextKey ) {

			var scale = (key.time - prevKey.time) / (nextKey.time - prevKey.time),
				prevTarget = prevKey.getTarget( fullSid ),
				nextData = nextKey.getTarget( fullSid ).data,
				prevData = prevTarget.data,
				data;

			if ( prevTarget.type === 'matrix' ) {

				data = prevData;

			} else if ( prevData.length ) {

				data = [];

				for ( var i = 0; i < prevData.length; ++ i ) {

					data[ i ] = prevData[ i ] + ( nextData[ i ] - prevData[ i ] ) * scale;

				}

			} else {

				data = prevData + ( nextData - prevData ) * scale;

			}

			key.addTarget( fullSid, prevTarget.transform, prevTarget.member, data );

		}

	}

	// Get next key with given sid

	function getNextKeyWith( keys, fullSid, ndx ) {

		for ( ; ndx < keys.length; ndx ++ ) {

			var key = keys[ ndx ];

			if ( key.hasTarget( fullSid ) ) {

				return key;

			}

		}

		return null;

	}

	// Get previous key with given sid

	function getPrevKeyWith( keys, fullSid, ndx ) {

		ndx = ndx >= 0 ? ndx : ndx + keys.length;

		for ( ; ndx >= 0; ndx -- ) {

			var key = keys[ ndx ];

			if ( key.hasTarget( fullSid ) ) {

				return key;

			}

		}

		return null;

	}

	function _Image() {

		this.id = "";
		this.init_from = "";

	}

	_Image.prototype.parse = function(element) {

		this.id = element.getAttribute('id');

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeName === 'init_from' ) {

				this.init_from = child.textContent;

			}

		}

		return this;

	};

	function Controller() {

		this.id = "";
		this.name = "";
		this.type = "";
		this.skin = null;
		this.morph = null;

	}

	Controller.prototype.parse = function( element ) {

		this.id = element.getAttribute('id');
		this.name = element.getAttribute('name');
		this.type = "none";

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'skin':

					this.skin = (new Skin()).parse(child);
					this.type = child.nodeName;
					break;

				case 'morph':

					this.morph = (new Morph()).parse(child);
					this.type = child.nodeName;
					break;

				default:
					break;

			}
		}

		return this;

	};

	function Morph() {

		this.method = null;
		this.source = null;
		this.targets = null;
		this.weights = null;

	}

	Morph.prototype.parse = function( element ) {

		var sources = {};
		var inputs = [];
		var i;

		this.method = element.getAttribute( 'method' );
		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );

		for ( i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'source':

					var source = ( new Source() ).parse( child );
					sources[ source.id ] = source;
					break;

				case 'targets':

					inputs = this.parseInputs( child );
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		for ( i = 0; i < inputs.length; i ++ ) {

			var input = inputs[ i ];
			var source = sources[ input.source ];

			switch ( input.semantic ) {

				case 'MORPH_TARGET':

					this.targets = source.read();
					break;

				case 'MORPH_WEIGHT':

					this.weights = source.read();
					break;

				default:
					break;

			}
		}

		return this;

	};

	Morph.prototype.parseInputs = function(element) {

		var inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1) continue;

			switch ( child.nodeName ) {

				case 'input':

					inputs.push( (new Input()).parse(child) );
					break;

				default:
					break;
			}
		}

		return inputs;

	};

	function Skin() {

		this.source = "";
		this.bindShapeMatrix = null;
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = [];

	}

	Skin.prototype.parse = function( element ) {

		var sources = {};
		var joints, weights;

		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
		this.invBindMatrices = [];
		this.joints = [];
		this.weights = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'bind_shape_matrix':

					var f = _floats(child.textContent);
					this.bindShapeMatrix = getConvertedMat4( f );
					break;

				case 'source':

					var src = new Source().parse(child);
					sources[ src.id ] = src;
					break;

				case 'joints':

					joints = child;
					break;

				case 'vertex_weights':

					weights = child;
					break;

				default:

					console.log( child.nodeName );
					break;

			}
		}

		this.parseJoints( joints, sources );
		this.parseWeights( weights, sources );

		return this;

	};

	Skin.prototype.parseJoints = function ( element, sources ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					var input = ( new Input() ).parse( child );
					var source = sources[ input.source ];

					if ( input.semantic === 'JOINT' ) {

						this.joints = source.read();

					} else if ( input.semantic === 'INV_BIND_MATRIX' ) {

						this.invBindMatrices = source.read();

					}

					break;

				default:
					break;
			}

		}

	};

	Skin.prototype.parseWeights = function ( element, sources ) {

		var v, vcount, inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					inputs.push( ( new Input() ).parse( child ) );
					break;

				case 'v':

					v = _ints( child.textContent );
					break;

				case 'vcount':

					vcount = _ints( child.textContent );
					break;

				default:
					break;

			}

		}

		var index = 0;

		for ( var i = 0; i < vcount.length; i ++ ) {

			var numBones = vcount[i];
			var vertex_weights = [];

			for ( var j = 0; j < numBones; j ++ ) {

				var influence = {};

				for ( var k = 0; k < inputs.length; k ++ ) {

					var input = inputs[ k ];
					var value = v[ index + input.offset ];

					switch ( input.semantic ) {

						case 'JOINT':

							influence.joint = value;//this.joints[value];
							break;

						case 'WEIGHT':

							influence.weight = sources[ input.source ].data[ value ];
							break;

						default:
							break;

					}

				}

				vertex_weights.push( influence );
				index += inputs.length;
			}

			for ( var j = 0; j < vertex_weights.length; j ++ ) {

				vertex_weights[ j ].index = i;

			}

			this.weights.push( vertex_weights );

		}

	};

	function VisualScene () {

		this.id = "";
		this.name = "";
		this.nodes = [];
		this.scene = new THREE.Group();

	}

	VisualScene.prototype.getChildById = function( id, recursive ) {

		for ( var i = 0; i < this.nodes.length; i ++ ) {

			var node = this.nodes[ i ].getChildById( id, recursive );

			if ( node ) {

				return node;

			}

		}

		return null;

	};

	VisualScene.prototype.getChildBySid = function( sid, recursive ) {

		for ( var i = 0; i < this.nodes.length; i ++ ) {

			var node = this.nodes[ i ].getChildBySid( sid, recursive );

			if ( node ) {

				return node;

			}

		}

		return null;

	};

	VisualScene.prototype.parse = function( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );
		this.nodes = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'node':

					this.nodes.push( ( new Node() ).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Node() {

		this.id = "";
		this.name = "";
		this.sid = "";
		this.nodes = [];
		this.controllers = [];
		this.transforms = [];
		this.geometries = [];
		this.channels = [];
		this.matrix = new THREE.Matrix4();

	}

	Node.prototype.getChannelForTransform = function( transformSid ) {

		for ( var i = 0; i < this.channels.length; i ++ ) {

			var channel = this.channels[i];
			var parts = channel.target.split('/');
			var id = parts.shift();
			var sid = parts.shift();
			var dotSyntax = (sid.indexOf(".") >= 0);
			var arrSyntax = (sid.indexOf("(") >= 0);
			var arrIndices;
			var member;

			if ( dotSyntax ) {

				parts = sid.split(".");
				sid = parts.shift();
				member = parts.shift();

			} else if ( arrSyntax ) {

				arrIndices = sid.split("(");
				sid = arrIndices.shift();

				for ( var j = 0; j < arrIndices.length; j ++ ) {

					arrIndices[ j ] = parseInt( arrIndices[ j ].replace( /\)/, '' ) );

				}

			}

			if ( sid === transformSid ) {

				channel.info = { sid: sid, dotSyntax: dotSyntax, arrSyntax: arrSyntax, arrIndices: arrIndices };
				return channel;

			}

		}

		return null;

	};

	Node.prototype.getChildById = function ( id, recursive ) {

		if ( this.id === id ) {

			return this;

		}

		if ( recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var n = this.nodes[ i ].getChildById( id, recursive );

				if ( n ) {

					return n;

				}

			}

		}

		return null;

	};

	Node.prototype.getChildBySid = function ( sid, recursive ) {

		if ( this.sid === sid ) {

			return this;

		}

		if ( recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var n = this.nodes[ i ].getChildBySid( sid, recursive );

				if ( n ) {

					return n;

				}

			}
		}

		return null;

	};

	Node.prototype.getTransformBySid = function ( sid ) {

		for ( var i = 0; i < this.transforms.length; i ++ ) {

			if ( this.transforms[ i ].sid === sid ) return this.transforms[ i ];

		}

		return null;

	};

	Node.prototype.parse = function( element ) {

		var url;

		this.id = element.getAttribute('id');
		this.sid = element.getAttribute('sid');
		this.name = element.getAttribute('name');
		this.type = element.getAttribute('type');
		this.layer = element.getAttribute('layer');

		this.type = this.type === 'JOINT' ? this.type : 'NODE';

		this.nodes = [];
		this.transforms = [];
		this.geometries = [];
		this.cameras = [];
		this.lights = [];
		this.controllers = [];
		this.matrix = new THREE.Matrix4();

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'node':

					this.nodes.push( ( new Node() ).parse( child ) );
					break;

				case 'instance_camera':

					this.cameras.push( ( new InstanceCamera() ).parse( child ) );
					break;

				case 'instance_controller':

					this.controllers.push( ( new InstanceController() ).parse( child ) );
					break;

				case 'instance_geometry':

					this.geometries.push( ( new InstanceGeometry() ).parse( child ) );
					break;

				case 'instance_light':

					this.lights.push( ( new InstanceLight() ).parse( child ) );
					break;

				case 'instance_node':

					url = child.getAttribute( 'url' ).replace( /^#/, '' );
					var iNode = getLibraryNode( url );

					if ( iNode ) {

						this.nodes.push( ( new Node() ).parse( iNode )) ;

					}

					break;

				case 'rotate':
				case 'translate':
				case 'scale':
				case 'matrix':
				case 'lookat':
				case 'skew':

					this.transforms.push( ( new Transform() ).parse( child ) );
					break;

				case 'extra':
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		this.channels = getChannelsForNode( this );
		bakeAnimations( this );

		this.updateMatrix();

		return this;

	};

	Node.prototype.updateMatrix = function () {

		this.matrix.identity();

		for ( var i = 0; i < this.transforms.length; i ++ ) {

			this.transforms[ i ].apply( this.matrix );

		}

	};

	function Transform () {

		this.sid = "";
		this.type = "";
		this.data = [];
		this.obj = null;

	}

	Transform.prototype.parse = function ( element ) {

		this.sid = element.getAttribute( 'sid' );
		this.type = element.nodeName;
		this.data = _floats( element.textContent );
		this.convert();

		return this;

	};

	Transform.prototype.convert = function () {

		switch ( this.type ) {

			case 'matrix':

				this.obj = getConvertedMat4( this.data );
				break;

			case 'rotate':

				this.angle = THREE.Math.degToRad( this.data[3] );

			case 'translate':

				fixCoords( this.data, -1 );
				this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
				break;

			case 'scale':

				fixCoords( this.data, 1 );
				this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
				break;

			default:
				console.log( 'Can not convert Transform of type ' + this.type );
				break;

		}

	};

	Transform.prototype.apply = function () {

		var m1 = new THREE.Matrix4();

		return function ( matrix ) {

			switch ( this.type ) {

				case 'matrix':

					matrix.multiply( this.obj );

					break;

				case 'translate':

					matrix.multiply( m1.makeTranslation( this.obj.x, this.obj.y, this.obj.z ) );

					break;

				case 'rotate':

					matrix.multiply( m1.makeRotationAxis( this.obj, this.angle ) );

					break;

				case 'scale':

					matrix.scale( this.obj );

					break;

			}

		};

	}();

	Transform.prototype.update = function ( data, member ) {

		var members = [ 'X', 'Y', 'Z', 'ANGLE' ];

		switch ( this.type ) {

			case 'matrix':

				if ( ! member ) {

					this.obj.copy( data );

				} else if ( member.length === 1 ) {

					switch ( member[ 0 ] ) {

						case 0:

							this.obj.n11 = data[ 0 ];
							this.obj.n21 = data[ 1 ];
							this.obj.n31 = data[ 2 ];
							this.obj.n41 = data[ 3 ];

							break;

						case 1:

							this.obj.n12 = data[ 0 ];
							this.obj.n22 = data[ 1 ];
							this.obj.n32 = data[ 2 ];
							this.obj.n42 = data[ 3 ];

							break;

						case 2:

							this.obj.n13 = data[ 0 ];
							this.obj.n23 = data[ 1 ];
							this.obj.n33 = data[ 2 ];
							this.obj.n43 = data[ 3 ];

							break;

						case 3:

							this.obj.n14 = data[ 0 ];
							this.obj.n24 = data[ 1 ];
							this.obj.n34 = data[ 2 ];
							this.obj.n44 = data[ 3 ];

							break;

					}

				} else if ( member.length === 2 ) {

					var propName = 'n' + ( member[ 0 ] + 1 ) + ( member[ 1 ] + 1 );
					this.obj[ propName ] = data;

				} else {

					console.log('Incorrect addressing of matrix in transform.');

				}

				break;

			case 'translate':
			case 'scale':

				if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

					member = members[ member[ 0 ] ];

				}

				switch ( member ) {

					case 'X':

						this.obj.x = data;
						break;

					case 'Y':

						this.obj.y = data;
						break;

					case 'Z':

						this.obj.z = data;
						break;

					default:

						this.obj.x = data[ 0 ];
						this.obj.y = data[ 1 ];
						this.obj.z = data[ 2 ];
						break;

				}

				break;

			case 'rotate':

				if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

					member = members[ member[ 0 ] ];

				}

				switch ( member ) {

					case 'X':

						this.obj.x = data;
						break;

					case 'Y':

						this.obj.y = data;
						break;

					case 'Z':

						this.obj.z = data;
						break;

					case 'ANGLE':

						this.angle = THREE.Math.degToRad( data );
						break;

					default:

						this.obj.x = data[ 0 ];
						this.obj.y = data[ 1 ];
						this.obj.z = data[ 2 ];
						this.angle = THREE.Math.degToRad( data[ 3 ] );
						break;

				}
				break;

		}

	};

	function InstanceController() {

		this.url = "";
		this.skeleton = [];
		this.instance_material = [];

	}

	InstanceController.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');
		this.skeleton = [];
		this.instance_material = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType !== 1 ) continue;

			switch ( child.nodeName ) {

				case 'skeleton':

					this.skeleton.push( child.textContent.replace(/^#/, '') );
					break;

				case 'bind_material':

					var instances = child.querySelectorAll('instance_material');

					for ( var j = 0; j < instances.length; j ++ ) {

						var instance = instances[j];
						this.instance_material.push( (new InstanceMaterial()).parse(instance) );

					}


					break;

				case 'extra':
					break;

				default:
					break;

			}
		}

		return this;

	};

	function InstanceMaterial () {

		this.symbol = "";
		this.target = "";

	}

	InstanceMaterial.prototype.parse = function ( element ) {

		this.symbol = element.getAttribute('symbol');
		this.target = element.getAttribute('target').replace(/^#/, '');
		return this;

	};

	function InstanceGeometry() {

		this.url = "";
		this.instance_material = [];

	}

	InstanceGeometry.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');
		this.instance_material = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			if ( child.nodeName === 'bind_material' ) {

				var instances = child.querySelectorAll('instance_material');

				for ( var j = 0; j < instances.length; j ++ ) {

					var instance = instances[j];
					this.instance_material.push( (new InstanceMaterial()).parse(instance) );

				}

				break;

			}

		}

		return this;

	};

	function Geometry() {

		this.id = "";
		this.mesh = null;

	}

	Geometry.prototype.parse = function ( element ) {

		this.id = element.getAttribute('id');

		extractDoubleSided( this, element );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];

			switch ( child.nodeName ) {

				case 'mesh':

					this.mesh = (new Mesh(this)).parse(child);
					break;

				case 'extra':

					// console.log( child );
					break;

				default:
					break;
			}
		}

		return this;

	};

	function Mesh( geometry ) {

		this.geometry = geometry.id;
		this.primitives = [];
		this.vertices = null;
		this.geometry3js = null;

	}

	Mesh.prototype.parse = function ( element ) {

		this.primitives = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'source':

					_source( child );
					break;

				case 'vertices':

					this.vertices = ( new Vertices() ).parse( child );
					break;

				case 'linestrips':

					this.primitives.push( ( new LineStrips().parse( child ) ) );
					break;

				case 'triangles':

					this.primitives.push( ( new Triangles().parse( child ) ) );
					break;

				case 'polygons':

					this.primitives.push( ( new Polygons().parse( child ) ) );
					break;

				case 'polylist':

					this.primitives.push( ( new Polylist().parse( child ) ) );
					break;

				default:
					break;

			}

		}

		this.geometry3js = new THREE.Geometry();

		if ( this.vertices === null ) {

			// TODO (mrdoob): Study case when this is null (carrier.dae)

			return this;

		}

		var vertexData = sources[ this.vertices.input['POSITION'].source ].data;

		for ( var i = 0; i < vertexData.length; i += 3 ) {

			this.geometry3js.vertices.push( getConvertedVec3( vertexData, i ).clone() );

		}

		for ( var i = 0; i < this.primitives.length; i ++ ) {

			var primitive = this.primitives[ i ];
			primitive.setVertices( this.vertices );
			this.handlePrimitive( primitive, this.geometry3js );

		}

		if ( this.geometry3js.calcNormals ) {

			this.geometry3js.computeVertexNormals();
			delete this.geometry3js.calcNormals;

		}

		return this;

	};

	Mesh.prototype.handlePrimitive = function ( primitive, geom ) {

		if ( primitive instanceof LineStrips ) {

			// TODO: Handle indices. Maybe easier with BufferGeometry?

			geom.isLineStrip = true;
			return;

		}

		var j, k, pList = primitive.p, inputs = primitive.inputs;
		var input, index, idx32;
		var source, numParams;
		var vcIndex = 0, vcount = 3, maxOffset = 0;
		var texture_sets = [];

		for ( j = 0; j < inputs.length; j ++ ) {

			input = inputs[ j ];

			var offset = input.offset + 1;
			maxOffset = (maxOffset < offset) ? offset : maxOffset;

			switch ( input.semantic ) {

				case 'TEXCOORD':
					texture_sets.push( input.set );
					break;

			}

		}

		for ( var pCount = 0; pCount < pList.length; ++ pCount ) {

			var p = pList[ pCount ], i = 0;

			while ( i < p.length ) {

				var vs = [];
				var ns = [];
				var ts = null;
				var cs = [];

				if ( primitive.vcount ) {

					vcount = primitive.vcount.length ? primitive.vcount[ vcIndex ++ ] : primitive.vcount;

				} else {

					vcount = p.length / maxOffset;

				}


				for ( j = 0; j < vcount; j ++ ) {

					for ( k = 0; k < inputs.length; k ++ ) {

						input = inputs[ k ];
						source = sources[ input.source ];

						index = p[ i + ( j * maxOffset ) + input.offset ];
						numParams = source.accessor.params.length;
						idx32 = index * numParams;

						switch ( input.semantic ) {

							case 'VERTEX':

								vs.push( index );

								break;

							case 'NORMAL':

								ns.push( getConvertedVec3( source.data, idx32 ) );

								break;

							case 'TEXCOORD':

								ts = ts || { };
								if ( ts[ input.set ] === undefined ) ts[ input.set ] = [];
								// invert the V
								ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], source.data[ idx32 + 1 ] ) );

								break;

							case 'COLOR':

								cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

								break;

							default:

								break;

						}

					}

				}

				if ( ns.length === 0 ) {

					// check the vertices inputs
					input = this.vertices.input.NORMAL;

					if ( input ) {

						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

							ns.push( getConvertedVec3( source.data, vs[ ndx ] * numParams ) );

						}

					} else {

						geom.calcNormals = true;

					}

				}

				if ( !ts ) {

					ts = { };
					// check the vertices inputs
					input = this.vertices.input.TEXCOORD;

					if ( input ) {

						texture_sets.push( input.set );
						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

							idx32 = vs[ ndx ] * numParams;
							if ( ts[ input.set ] === undefined ) ts[ input.set ] = [ ];
							// invert the V
							ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], 1.0 - source.data[ idx32 + 1 ] ) );

						}

					}

				}

				if ( cs.length === 0 ) {

					// check the vertices inputs
					input = this.vertices.input.COLOR;

					if ( input ) {

						source = sources[ input.source ];
						numParams = source.accessor.params.length;

						for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

							idx32 = vs[ ndx ] * numParams;
							cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

						}

					}

				}

				var face = null, faces = [], uv, uvArr;

				if ( vcount === 3 ) {

					faces.push( new THREE.Face3( vs[0], vs[1], vs[2], ns, cs.length ? cs : new THREE.Color() ) );

				} else if ( vcount === 4 ) {

					faces.push( new THREE.Face3( vs[0], vs[1], vs[3], ns.length ? [ ns[0].clone(), ns[1].clone(), ns[3].clone() ] : [], cs.length ? [ cs[0], cs[1], cs[3] ] : new THREE.Color() ) );

					faces.push( new THREE.Face3( vs[1], vs[2], vs[3], ns.length ? [ ns[1].clone(), ns[2].clone(), ns[3].clone() ] : [], cs.length ? [ cs[1], cs[2], cs[3] ] : new THREE.Color() ) );

				} else if ( vcount > 4 && options.subdivideFaces ) {

					var clr = cs.length ? cs : new THREE.Color(),
						vec1, vec2, vec3, v1, v2, norm;

					// subdivide into multiple Face3s

					for ( k = 1; k < vcount - 1; ) {

						faces.push( new THREE.Face3( vs[0], vs[k], vs[k + 1], ns.length ? [ ns[0].clone(), ns[k ++].clone(), ns[k].clone() ] : [], clr ) );

					}

				}

				if ( faces.length ) {

					for ( var ndx = 0, len = faces.length; ndx < len; ndx ++ ) {

						face = faces[ndx];
						face.daeMaterial = primitive.material;
						geom.faces.push( face );

						for ( k = 0; k < texture_sets.length; k ++ ) {

							uv = ts[ texture_sets[k] ];

							if ( vcount > 4 ) {

								// Grab the right UVs for the vertices in this face
								uvArr = [ uv[0], uv[ndx + 1], uv[ndx + 2] ];

							} else if ( vcount === 4 ) {

								if ( ndx === 0 ) {

									uvArr = [ uv[0], uv[1], uv[3] ];

								} else {

									uvArr = [ uv[1].clone(), uv[2], uv[3].clone() ];

								}

							} else {

								uvArr = [ uv[0], uv[1], uv[2] ];

							}

							if ( geom.faceVertexUvs[k] === undefined ) {

								geom.faceVertexUvs[k] = [];

							}

							geom.faceVertexUvs[k].push( uvArr );

						}

					}

				} else {

					console.log( 'dropped face with vcount ' + vcount + ' for geometry with id: ' + geom.id );

				}

				i += maxOffset * vcount;

			}

		}

	};

	function Polygons () {

		this.material = "";
		this.count = 0;
		this.inputs = [];
		this.vcount = null;
		this.p = [];
		this.geometry = new THREE.Geometry();

	}

	Polygons.prototype.setVertices = function ( vertices ) {

		for ( var i = 0; i < this.inputs.length; i ++ ) {

			if ( this.inputs[ i ].source === vertices.id ) {

				this.inputs[ i ].source = vertices.input[ 'POSITION' ].source;

			}

		}

	};

	Polygons.prototype.parse = function ( element ) {

		this.material = element.getAttribute( 'material' );
		this.count = _attr_as_int( element, 'count', 0 );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'input':

					this.inputs.push( ( new Input() ).parse( element.childNodes[ i ] ) );
					break;

				case 'vcount':

					this.vcount = _ints( child.textContent );
					break;

				case 'p':

					this.p.push( _ints( child.textContent ) );
					break;

				case 'ph':

					console.warn( 'polygon holes not yet supported!' );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Polylist () {

		Polygons.call( this );

		this.vcount = [];

	}

	Polylist.prototype = Object.create( Polygons.prototype );
	Polylist.prototype.constructor = Polylist;

	function LineStrips() {

		Polygons.call( this );

		this.vcount = 1;

	}

	LineStrips.prototype = Object.create( Polygons.prototype );
	LineStrips.prototype.constructor = LineStrips;

	function Triangles () {

		Polygons.call( this );

		this.vcount = 3;

	}

	Triangles.prototype = Object.create( Polygons.prototype );
	Triangles.prototype.constructor = Triangles;

	function Accessor() {

		this.source = "";
		this.count = 0;
		this.stride = 0;
		this.params = [];

	}

	Accessor.prototype.parse = function ( element ) {

		this.params = [];
		this.source = element.getAttribute( 'source' );
		this.count = _attr_as_int( element, 'count', 0 );
		this.stride = _attr_as_int( element, 'stride', 0 );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeName === 'param' ) {

				var param = {};
				param[ 'name' ] = child.getAttribute( 'name' );
				param[ 'type' ] = child.getAttribute( 'type' );
				this.params.push( param );

			}

		}

		return this;

	};

	function Vertices() {

		this.input = {};

	}

	Vertices.prototype.parse = function ( element ) {

		this.id = element.getAttribute('id');

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[i].nodeName === 'input' ) {

				var input = ( new Input() ).parse( element.childNodes[ i ] );
				this.input[ input.semantic ] = input;

			}

		}

		return this;

	};

	function Input () {

		this.semantic = "";
		this.offset = 0;
		this.source = "";
		this.set = 0;

	}

	Input.prototype.parse = function ( element ) {

		this.semantic = element.getAttribute('semantic');
		this.source = element.getAttribute('source').replace(/^#/, '');
		this.set = _attr_as_int(element, 'set', -1);
		this.offset = _attr_as_int(element, 'offset', 0);

		if ( this.semantic === 'TEXCOORD' && this.set < 0 ) {

			this.set = 0;

		}

		return this;

	};

	function Source ( id ) {

		this.id = id;
		this.type = null;

	}

	Source.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];

			switch ( child.nodeName ) {

				case 'bool_array':

					this.data = _bools( child.textContent );
					this.type = child.nodeName;
					break;

				case 'float_array':

					this.data = _floats( child.textContent );
					this.type = child.nodeName;
					break;

				case 'int_array':

					this.data = _ints( child.textContent );
					this.type = child.nodeName;
					break;

				case 'IDREF_array':
				case 'Name_array':

					this.data = _strings( child.textContent );
					this.type = child.nodeName;
					break;

				case 'technique_common':

					for ( var j = 0; j < child.childNodes.length; j ++ ) {

						if ( child.childNodes[ j ].nodeName === 'accessor' ) {

							this.accessor = ( new Accessor() ).parse( child.childNodes[ j ] );
							break;

						}
					}
					break;

				default:
					// console.log(child.nodeName);
					break;

			}

		}

		return this;

	};

	Source.prototype.read = function () {

		var result = [];

		//for (var i = 0; i < this.accessor.params.length; i++) {

		var param = this.accessor.params[ 0 ];

			//console.log(param.name + " " + param.type);

		switch ( param.type ) {

			case 'IDREF':
			case 'Name': case 'name':
			case 'float':

				return this.data;

			case 'float4x4':

				for ( var j = 0; j < this.data.length; j += 16 ) {

					var s = this.data.slice( j, j + 16 );
					var m = getConvertedMat4( s );
					result.push( m );
				}

				break;

			default:

				console.log( 'ColladaLoader: Source: Read dont know how to read ' + param.type + '.' );
				break;

		}

		//}

		return result;

	};

	function Material () {

		this.id = "";
		this.name = "";
		this.instance_effect = null;

	}

	Material.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[ i ].nodeName === 'instance_effect' ) {

				this.instance_effect = ( new InstanceEffect() ).parse( element.childNodes[ i ] );
				break;

			}

		}

		return this;

	};

	function ColorOrTexture () {

		this.color = new THREE.Color();
		this.color.setRGB( Math.random(), Math.random(), Math.random() );
		this.color.a = 1.0;

		this.texture = null;
		this.texcoord = null;
		this.texOpts = null;

	}

	ColorOrTexture.prototype.isColor = function () {

		return ( this.texture === null );

	};

	ColorOrTexture.prototype.isTexture = function () {

		return ( this.texture != null );

	};

	ColorOrTexture.prototype.parse = function ( element ) {

		if (element.nodeName === 'transparent') {

			this.opaque = element.getAttribute('opaque');

		}

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'color':

					var rgba = _floats( child.textContent );
					this.color = new THREE.Color();
					this.color.setRGB( rgba[0], rgba[1], rgba[2] );
					this.color.a = rgba[3];
					break;

				case 'texture':

					this.texture = child.getAttribute('texture');
					this.texcoord = child.getAttribute('texcoord');
					// Defaults from:
					// https://collada.org/mediawiki/index.php/Maya_texture_placement_MAYA_extension
					this.texOpts = {
						offsetU: 0,
						offsetV: 0,
						repeatU: 1,
						repeatV: 1,
						wrapU: 1,
						wrapV: 1
					};
					this.parseTexture( child );
					break;

				default:
					break;

			}

		}

		return this;

	};

	ColorOrTexture.prototype.parseTexture = function ( element ) {

		if ( ! element.childNodes ) return this;

		// This should be supported by Maya, 3dsMax, and MotionBuilder

		if ( element.childNodes[1] && element.childNodes[1].nodeName === 'extra' ) {

			element = element.childNodes[1];

			if ( element.childNodes[1] && element.childNodes[1].nodeName === 'technique' ) {

				element = element.childNodes[1];

			}

		}

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'offsetU':
				case 'offsetV':
				case 'repeatU':
				case 'repeatV':

					this.texOpts[ child.nodeName ] = parseFloat( child.textContent );

					break;

				case 'wrapU':
				case 'wrapV':

					// some dae have a value of true which becomes NaN via parseInt

					if ( child.textContent.toUpperCase() === 'TRUE' ) {

						this.texOpts[ child.nodeName ] = 1;

					} else {

						this.texOpts[ child.nodeName ] = parseInt( child.textContent );

					}
					break;

				default:

					this.texOpts[ child.nodeName ] = child.textContent;

					break;

			}

		}

		return this;

	};

	function Shader ( type, effect ) {

		this.type = type;
		this.effect = effect;
		this.material = null;

	}

	Shader.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'emission':
				case 'diffuse':
				case 'specular':
				case 'transparent':

					this[ child.nodeName ] = ( new ColorOrTexture() ).parse( child );
					break;

				case 'bump':

					// If 'bumptype' is 'heightfield', create a 'bump' property
					// Else if 'bumptype' is 'normalmap', create a 'normal' property
					// (Default to 'bump')
					var bumpType = child.getAttribute( 'bumptype' );
					if ( bumpType ) {
						if ( bumpType.toLowerCase() === "heightfield" ) {
							this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );
						} else if ( bumpType.toLowerCase() === "normalmap" ) {
							this[ 'normal' ] = ( new ColorOrTexture() ).parse( child );
						} else {
							console.error( "Shader.prototype.parse: Invalid value for attribute 'bumptype' (" + bumpType + ") - valid bumptypes are 'HEIGHTFIELD' and 'NORMALMAP' - defaulting to 'HEIGHTFIELD'" );
							this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );
						}
					} else {
						console.warn( "Shader.prototype.parse: Attribute 'bumptype' missing from bump node - defaulting to 'HEIGHTFIELD'" );
						this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );
					}

					break;

				case 'shininess':
				case 'reflectivity':
				case 'index_of_refraction':
				case 'transparency':

					var f = child.querySelectorAll('float');

					if ( f.length > 0 )
						this[ child.nodeName ] = parseFloat( f[ 0 ].textContent );

					break;

				default:
					break;

			}

		}

		this.create();
		return this;

	};

	Shader.prototype.create = function() {

		var props = {};

		var transparent = false;

		if (this['transparency'] !== undefined && this['transparent'] !== undefined) {
			// convert transparent color RBG to average value
			var transparentColor = this['transparent'];
			var transparencyLevel = (this.transparent.color.r + this.transparent.color.g + this.transparent.color.b) / 3 * this.transparency;

			if (transparencyLevel > 0) {
				transparent = true;
				props[ 'transparent' ] = true;
				props[ 'opacity' ] = 1 - transparencyLevel;

			}

		}

		var keys = {
			'diffuse':'map',
			'ambient':'lightMap',
			'specular':'specularMap',
			'emission':'emissionMap',
			'bump':'bumpMap',
			'normal':'normalMap'
			};

		for ( var prop in this ) {

			switch ( prop ) {

				case 'ambient':
				case 'emission':
				case 'diffuse':
				case 'specular':
				case 'bump':
				case 'normal':

					var cot = this[ prop ];

					if ( cot instanceof ColorOrTexture ) {

						if ( cot.isTexture() ) {

							var samplerId = cot.texture;
							var sampler = this.effect.sampler[samplerId];

							if ( sampler !== undefined && sampler.source !== undefined ) {

								var surface = this.effect.surface[sampler.source];

								if ( surface !== undefined ) {

									var image = images[ surface.init_from ];

									if ( image ) {

										var url = baseUrl + image.init_from;

										var texture;
										var loader = THREE.Loader.Handlers.get( url );

										if ( loader !== null ) {

											texture = loader.load( url );

										} else {

											texture = new THREE.Texture();

											loadTextureImage( texture, url );

										}

										if ( sampler.wrap_s === "MIRROR" ) {

											texture.wrapS = THREE.MirroredRepeatWrapping;

										} else if ( sampler.wrap_s === "WRAP" || cot.texOpts.wrapU ) {

											texture.wrapS = THREE.RepeatWrapping;

										} else {

											texture.wrapS = THREE.ClampToEdgeWrapping;

										}

										if ( sampler.wrap_t === "MIRROR" ) {

											texture.wrapT = THREE.MirroredRepeatWrapping;

										} else if ( sampler.wrap_t === "WRAP" || cot.texOpts.wrapV ) {

											texture.wrapT = THREE.RepeatWrapping;

										} else {

											texture.wrapT = THREE.ClampToEdgeWrapping;

										}

										texture.offset.x = cot.texOpts.offsetU;
										texture.offset.y = cot.texOpts.offsetV;
										texture.repeat.x = cot.texOpts.repeatU;
										texture.repeat.y = cot.texOpts.repeatV;
										props[keys[prop]] = texture;

										// Texture with baked lighting?
										if (prop === 'emission') props['emissive'] = 0xffffff;

									}

								}

							}

						} else if ( prop === 'diffuse' || !transparent ) {

							if ( prop === 'emission' ) {

								props[ 'emissive' ] = cot.color.getHex();

							} else {

								props[ prop ] = cot.color.getHex();

							}

						}

					}

					break;

				case 'shininess':

					props[ prop ] = this[ prop ];
					break;

				case 'reflectivity':

					props[ prop ] = this[ prop ];
					if ( props[ prop ] > 0.0 ) props['envMap'] = options.defaultEnvMap;
					props['combine'] = THREE.MixOperation;	//mix regular shading with reflective component
					break;

				case 'index_of_refraction':

					props[ 'refractionRatio' ] = this[ prop ]; //TODO: "index_of_refraction" becomes "refractionRatio" in shader, but I'm not sure if the two are actually comparable
					if ( this[ prop ] !== 1.0 ) props['envMap'] = options.defaultEnvMap;
					break;

				case 'transparency':
					// gets figured out up top
					break;

				default:
					break;

			}

		}

		props[ 'shading' ] = preferredShading;
		props[ 'side' ] = this.effect.doubleSided ? THREE.DoubleSide : THREE.FrontSide;

		if ( props.diffuse !== undefined ) {

			props.color = props.diffuse;
			delete props.diffuse;

		}

		switch ( this.type ) {

			case 'constant':

				if (props.emissive != undefined) props.color = props.emissive;
				this.material = new THREE.MeshBasicMaterial( props );
				break;

			case 'phong':
			case 'blinn':

				this.material = new THREE.MeshPhongMaterial( props );
				break;

			case 'lambert':
			default:

				this.material = new THREE.MeshLambertMaterial( props );
				break;

		}

		return this.material;

	};

	function Surface ( effect ) {

		this.effect = effect;
		this.init_from = null;
		this.format = null;

	}

	Surface.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'init_from':

					this.init_from = child.textContent;
					break;

				case 'format':

					this.format = child.textContent;
					break;

				default:

					console.log( "unhandled Surface prop: " + child.nodeName );
					break;

			}

		}

		return this;

	};

	function Sampler2D ( effect ) {

		this.effect = effect;
		this.source = null;
		this.wrap_s = null;
		this.wrap_t = null;
		this.minfilter = null;
		this.magfilter = null;
		this.mipfilter = null;

	}

	Sampler2D.prototype.parse = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'source':

					this.source = child.textContent;
					break;

				case 'minfilter':

					this.minfilter = child.textContent;
					break;

				case 'magfilter':

					this.magfilter = child.textContent;
					break;

				case 'mipfilter':

					this.mipfilter = child.textContent;
					break;

				case 'wrap_s':

					this.wrap_s = child.textContent;
					break;

				case 'wrap_t':

					this.wrap_t = child.textContent;
					break;

				default:

					console.log( "unhandled Sampler2D prop: " + child.nodeName );
					break;

			}

		}

		return this;

	};

	function Effect () {

		this.id = "";
		this.name = "";
		this.shader = null;
		this.surface = {};
		this.sampler = {};

	}

	Effect.prototype.create = function () {

		if ( this.shader === null ) {

			return null;

		}

	};

	Effect.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		extractDoubleSided( this, element );

		this.shader = null;

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'profile_COMMON':

					this.parseTechnique( this.parseProfileCOMMON( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Effect.prototype.parseNewparam = function ( element ) {

		var sid = element.getAttribute( 'sid' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'surface':

					this.surface[sid] = ( new Surface( this ) ).parse( child );
					break;

				case 'sampler2D':

					this.sampler[sid] = ( new Sampler2D( this ) ).parse( child );
					break;

				case 'extra':

					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

	};

	Effect.prototype.parseProfileCOMMON = function ( element ) {

		var technique;

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'profile_COMMON':

					this.parseProfileCOMMON( child );
					break;

				case 'technique':

					technique = child;
					break;

				case 'newparam':

					this.parseNewparam( child );
					break;

				case 'image':

					var _image = ( new _Image() ).parse( child );
					images[ _image.id ] = _image;
					break;

				case 'extra':
					break;

				default:

					console.log( child.nodeName );
					break;

			}

		}

		return technique;

	};

	Effect.prototype.parseTechnique = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'constant':
				case 'lambert':
				case 'blinn':
				case 'phong':

					this.shader = ( new Shader( child.nodeName, this ) ).parse( child );
					break;
				case 'extra':
					this.parseExtra(child);
					break;
				default:
					break;

			}

		}

	};

	Effect.prototype.parseExtra = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'technique':
					this.parseExtraTechnique( child );
					break;
				default:
					break;

			}

		}

	};

	Effect.prototype.parseExtraTechnique = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[i];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'bump':
					this.shader.parse( element );
					break;
				default:
					break;

			}

		}

	};

	function InstanceEffect () {

		this.url = "";

	}

	InstanceEffect.prototype.parse = function ( element ) {

		this.url = element.getAttribute( 'url' ).replace( /^#/, '' );
		return this;

	};

	function Animation() {

		this.id = "";
		this.name = "";
		this.source = {};
		this.sampler = [];
		this.channel = [];

	}

	Animation.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );
		this.source = {};

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'animation':

					var anim = ( new Animation() ).parse( child );

					for ( var src in anim.source ) {

						this.source[ src ] = anim.source[ src ];

					}

					for ( var j = 0; j < anim.channel.length; j ++ ) {

						this.channel.push( anim.channel[ j ] );
						this.sampler.push( anim.sampler[ j ] );

					}

					break;

				case 'source':

					var src = ( new Source() ).parse( child );
					this.source[ src.id ] = src;
					break;

				case 'sampler':

					this.sampler.push( ( new Sampler( this ) ).parse( child ) );
					break;

				case 'channel':

					this.channel.push( ( new Channel( this ) ).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Channel( animation ) {

		this.animation = animation;
		this.source = "";
		this.target = "";
		this.fullSid = null;
		this.sid = null;
		this.dotSyntax = null;
		this.arrSyntax = null;
		this.arrIndices = null;
		this.member = null;

	}

	Channel.prototype.parse = function ( element ) {

		this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
		this.target = element.getAttribute( 'target' );

		var parts = this.target.split( '/' );

		var id = parts.shift();
		var sid = parts.shift();

		var dotSyntax = ( sid.indexOf(".") >= 0 );
		var arrSyntax = ( sid.indexOf("(") >= 0 );

		if ( dotSyntax ) {

			parts = sid.split(".");
			this.sid = parts.shift();
			this.member = parts.shift();

		} else if ( arrSyntax ) {

			var arrIndices = sid.split("(");
			this.sid = arrIndices.shift();

			for (var j = 0; j < arrIndices.length; j ++ ) {

				arrIndices[j] = parseInt( arrIndices[j].replace(/\)/, '') );

			}

			this.arrIndices = arrIndices;

		} else {

			this.sid = sid;

		}

		this.fullSid = sid;
		this.dotSyntax = dotSyntax;
		this.arrSyntax = arrSyntax;

		return this;

	};

	function Sampler ( animation ) {

		this.id = "";
		this.animation = animation;
		this.inputs = [];
		this.input = null;
		this.output = null;
		this.strideOut = null;
		this.interpolation = null;
		this.startTime = null;
		this.endTime = null;
		this.duration = 0;

	}

	Sampler.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.inputs = [];

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'input':

					this.inputs.push( (new Input()).parse( child ) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Sampler.prototype.create = function () {

		for ( var i = 0; i < this.inputs.length; i ++ ) {

			var input = this.inputs[ i ];
			var source = this.animation.source[ input.source ];

			switch ( input.semantic ) {

				case 'INPUT':

					this.input = source.read();
					break;

				case 'OUTPUT':

					this.output = source.read();
					this.strideOut = source.accessor.stride;
					break;

				case 'INTERPOLATION':

					this.interpolation = source.read();
					break;

				case 'IN_TANGENT':

					break;

				case 'OUT_TANGENT':

					break;

				default:

					console.log(input.semantic);
					break;

			}

		}

		this.startTime = 0;
		this.endTime = 0;
		this.duration = 0;

		if ( this.input.length ) {

			this.startTime = 100000000;
			this.endTime = -100000000;

			for ( var i = 0; i < this.input.length; i ++ ) {

				this.startTime = Math.min( this.startTime, this.input[ i ] );
				this.endTime = Math.max( this.endTime, this.input[ i ] );

			}

			this.duration = this.endTime - this.startTime;

		}

	};

	Sampler.prototype.getData = function ( type, ndx, member ) {

		var data;

		if ( type === 'matrix' && this.strideOut === 16 ) {

			data = this.output[ ndx ];

		} else if ( this.strideOut > 1 ) {

			data = [];
			ndx *= this.strideOut;

			for ( var i = 0; i < this.strideOut; ++ i ) {

				data[ i ] = this.output[ ndx + i ];

			}

			if ( this.strideOut === 3 ) {

				switch ( type ) {

					case 'rotate':
					case 'translate':

						fixCoords( data, -1 );
						break;

					case 'scale':

						fixCoords( data, 1 );
						break;

				}

			} else if ( this.strideOut === 4 && type === 'matrix' ) {

				fixCoords( data, -1 );

			}

		} else {

			data = this.output[ ndx ];

			if ( member && type === 'translate' ) {
				data = getConvertedTranslation( member, data );
			}

		}

		return data;

	};

	function Key ( time ) {

		this.targets = [];
		this.time = time;

	}

	Key.prototype.addTarget = function ( fullSid, transform, member, data ) {

		this.targets.push( {
			sid: fullSid,
			member: member,
			transform: transform,
			data: data
		} );

	};

	Key.prototype.apply = function ( opt_sid ) {

		for ( var i = 0; i < this.targets.length; ++ i ) {

			var target = this.targets[ i ];

			if ( !opt_sid || target.sid === opt_sid ) {

				target.transform.update( target.data, target.member );

			}

		}

	};

	Key.prototype.getTarget = function ( fullSid ) {

		for ( var i = 0; i < this.targets.length; ++ i ) {

			if ( this.targets[ i ].sid === fullSid ) {

				return this.targets[ i ];

			}

		}

		return null;

	};

	Key.prototype.hasTarget = function ( fullSid ) {

		for ( var i = 0; i < this.targets.length; ++ i ) {

			if ( this.targets[ i ].sid === fullSid ) {

				return true;

			}

		}

		return false;

	};

	// TODO: Currently only doing linear interpolation. Should support full COLLADA spec.
	Key.prototype.interpolate = function ( nextKey, time ) {

		for ( var i = 0, l = this.targets.length; i < l; i ++ ) {

			var target = this.targets[ i ],
				nextTarget = nextKey.getTarget( target.sid ),
				data;

			if ( target.transform.type !== 'matrix' && nextTarget ) {

				var scale = ( time - this.time ) / ( nextKey.time - this.time ),
					nextData = nextTarget.data,
					prevData = target.data;

				if ( scale < 0 ) scale = 0;
				if ( scale > 1 ) scale = 1;

				if ( prevData.length ) {

					data = [];

					for ( var j = 0; j < prevData.length; ++ j ) {

						data[ j ] = prevData[ j ] + ( nextData[ j ] - prevData[ j ] ) * scale;

					}

				} else {

					data = prevData + ( nextData - prevData ) * scale;

				}

			} else {

				data = target.data;

			}

			target.transform.update( data, target.member );

		}

	};

	// Camera
	function Camera() {

		this.id = "";
		this.name = "";
		this.technique = "";

	}

	Camera.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'optics':

					this.parseOptics( child );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Camera.prototype.parseOptics = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			if ( element.childNodes[ i ].nodeName === 'technique_common' ) {

				var technique = element.childNodes[ i ];

				for ( var j = 0; j < technique.childNodes.length; j ++ ) {

					this.technique = technique.childNodes[ j ].nodeName;

					if ( this.technique === 'perspective' ) {

						var perspective = technique.childNodes[ j ];

						for ( var k = 0; k < perspective.childNodes.length; k ++ ) {

							var param = perspective.childNodes[ k ];

							switch ( param.nodeName ) {

								case 'yfov':
									this.yfov = param.textContent;
									break;
								case 'xfov':
									this.xfov = param.textContent;
									break;
								case 'znear':
									this.znear = param.textContent;
									break;
								case 'zfar':
									this.zfar = param.textContent;
									break;
								case 'aspect_ratio':
									this.aspect_ratio = param.textContent;
									break;

							}

						}

					} else if ( this.technique === 'orthographic' ) {

						var orthographic = technique.childNodes[ j ];

						for ( var k = 0; k < orthographic.childNodes.length; k ++ ) {

							var param = orthographic.childNodes[ k ];

							switch ( param.nodeName ) {

								case 'xmag':
									this.xmag = param.textContent;
									break;
								case 'ymag':
									this.ymag = param.textContent;
									break;
								case 'znear':
									this.znear = param.textContent;
									break;
								case 'zfar':
									this.zfar = param.textContent;
									break;
								case 'aspect_ratio':
									this.aspect_ratio = param.textContent;
									break;

							}

						}

					}

				}

			}

		}

		return this;

	};

	function InstanceCamera() {

		this.url = "";

	}

	InstanceCamera.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');

		return this;

	};

	// Light

	function Light() {

		this.id = "";
		this.name = "";
		this.technique = "";

	}

	Light.prototype.parse = function ( element ) {

		this.id = element.getAttribute( 'id' );
		this.name = element.getAttribute( 'name' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'technique_common':

					this.parseCommon( child );
					break;

				case 'technique':

					this.parseTechnique( child );
					break;

				default:
					break;

			}

		}

		return this;

	};

	Light.prototype.parseCommon = function ( element ) {

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			switch ( element.childNodes[ i ].nodeName ) {

				case 'directional':
				case 'point':
				case 'spot':
				case 'ambient':

					this.technique = element.childNodes[ i ].nodeName;

					var light = element.childNodes[ i ];

					for ( var j = 0; j < light.childNodes.length; j ++ ) {

						var child = light.childNodes[j];

						switch ( child.nodeName ) {

							case 'color':

								var rgba = _floats( child.textContent );
								this.color = new THREE.Color(0);
								this.color.setRGB( rgba[0], rgba[1], rgba[2] );
								this.color.a = rgba[3];
								break;

							case 'falloff_angle':

								this.falloff_angle = parseFloat( child.textContent );
								break;

							case 'quadratic_attenuation':
								var f = parseFloat( child.textContent );
								this.distance = f ? Math.sqrt( 1 / f ) : 0;
						}

					}

			}

		}

		return this;

	};

	Light.prototype.parseTechnique = function ( element ) {

		this.profile = element.getAttribute( 'profile' );

		for ( var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];

			switch ( child.nodeName ) {

				case 'intensity':

					this.intensity = parseFloat(child.textContent);
					break;

			}

		}

		return this;

	};

	function InstanceLight() {

		this.url = "";

	}

	InstanceLight.prototype.parse = function ( element ) {

		this.url = element.getAttribute('url').replace(/^#/, '');

		return this;

	};

	function KinematicsModel( ) {

		this.id = '';
		this.name = '';
		this.joints = [];
		this.links = [];

	}

	KinematicsModel.prototype.parse = function( element ) {

		this.id = element.getAttribute('id');
		this.name = element.getAttribute('name');
		this.joints = [];
		this.links = [];

		for (var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'technique_common':

					this.parseCommon(child);
					break;

				default:
					break;

			}

		}

		return this;

	};

	KinematicsModel.prototype.parseCommon = function( element ) {

		for (var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( element.childNodes[ i ].nodeName ) {

				case 'joint':
					this.joints.push( (new Joint()).parse(child) );
					break;

				case 'link':
					this.links.push( (new Link()).parse(child) );
					break;

				default:
					break;

			}

		}

		return this;

	};

	function Joint( ) {

		this.sid = '';
		this.name = '';
		this.axis = new THREE.Vector3();
		this.limits = {
			min: 0,
			max: 0
		};
		this.type = '';
		this.static = false;
		this.zeroPosition = 0.0;
		this.middlePosition = 0.0;

	}

	Joint.prototype.parse = function( element ) {

		this.sid = element.getAttribute('sid');
		this.name = element.getAttribute('name');
		this.axis = new THREE.Vector3();
		this.limits = {
			min: 0,
			max: 0
		};
		this.type = '';
		this.static = false;
		this.zeroPosition = 0.0;
		this.middlePosition = 0.0;

		var axisElement = element.querySelector('axis');
		var _axis = _floats(axisElement.textContent);
		this.axis = getConvertedVec3(_axis, 0);

		var min = element.querySelector('limits min') ? parseFloat(element.querySelector('limits min').textContent) : -360;
		var max = element.querySelector('limits max') ? parseFloat(element.querySelector('limits max').textContent) : 360;

		this.limits = {
			min: min,
			max: max
		};

		var jointTypes = [ 'prismatic', 'revolute' ];
		for (var i = 0; i < jointTypes.length; i ++ ) {

			var type = jointTypes[ i ];

			var jointElement = element.querySelector(type);

			if ( jointElement ) {

				this.type = type;

			}

		}

		// if the min is equal to or somehow greater than the max, consider the joint static
		if ( this.limits.min >= this.limits.max ) {

			this.static = true;

		}

		this.middlePosition = (this.limits.min + this.limits.max) / 2.0;
		return this;

	};

	function Link( ) {

		this.sid = '';
		this.name = '';
		this.transforms = [];
		this.attachments = [];

	}

	Link.prototype.parse = function( element ) {

		this.sid = element.getAttribute('sid');
		this.name = element.getAttribute('name');
		this.transforms = [];
		this.attachments = [];

		for (var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'attachment_full':
					this.attachments.push( (new Attachment()).parse(child) );
					break;

				case 'rotate':
				case 'translate':
				case 'matrix':

					this.transforms.push( (new Transform()).parse(child) );
					break;

				default:

					break;

			}

		}

		return this;

	};

	function Attachment( ) {

		this.joint = '';
		this.transforms = [];
		this.links = [];

	}

	Attachment.prototype.parse = function( element ) {

		this.joint = element.getAttribute('joint').split('/').pop();
		this.links = [];

		for (var i = 0; i < element.childNodes.length; i ++ ) {

			var child = element.childNodes[ i ];
			if ( child.nodeType != 1 ) continue;

			switch ( child.nodeName ) {

				case 'link':
					this.links.push( (new Link()).parse(child) );
					break;

				case 'rotate':
				case 'translate':
				case 'matrix':

					this.transforms.push( (new Transform()).parse(child) );
					break;

				default:

					break;

			}

		}

		return this;

	};

	function _source( element ) {

		var id = element.getAttribute( 'id' );

		if ( sources[ id ] != undefined ) {

			return sources[ id ];

		}

		sources[ id ] = ( new Source(id )).parse( element );
		return sources[ id ];

	}

	function _nsResolver( nsPrefix ) {

		if ( nsPrefix === "dae" ) {

			return "http://www.collada.org/2005/11/COLLADASchema";

		}

		return null;

	}

	function _bools( str ) {

		var raw = _strings( str );
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( (raw[i] === 'true' || raw[i] === '1') ? true : false );

		}

		return data;

	}

	function _floats( str ) {

		var raw = _strings(str);
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( parseFloat( raw[ i ] ) );

		}

		return data;

	}

	function _ints( str ) {

		var raw = _strings( str );
		var data = [];

		for ( var i = 0, l = raw.length; i < l; i ++ ) {

			data.push( parseInt( raw[ i ], 10 ) );

		}

		return data;

	}

	function _strings( str ) {

		return ( str.length > 0 ) ? _trimString( str ).split( /\s+/ ) : [];

	}

	function _trimString( str ) {

		return str.replace( /^\s+/, "" ).replace( /\s+$/, "" );

	}

	function _attr_as_float( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return parseFloat( element.getAttribute( name ) );

		} else {

			return defaultValue;

		}

	}

	function _attr_as_int( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return parseInt( element.getAttribute( name ), 10) ;

		} else {

			return defaultValue;

		}

	}

	function _attr_as_string( element, name, defaultValue ) {

		if ( element.hasAttribute( name ) ) {

			return element.getAttribute( name );

		} else {

			return defaultValue;

		}

	}

	function _format_float( f, num ) {

		if ( f === undefined ) {

			var s = '0.';

			while ( s.length < num + 2 ) {

				s += '0';

			}

			return s;

		}

		num = num || 2;

		var parts = f.toString().split( '.' );
		parts[ 1 ] = parts.length > 1 ? parts[ 1 ].substr( 0, num ) : "0";

		while ( parts[ 1 ].length < num ) {

			parts[ 1 ] += '0';

		}

		return parts.join( '.' );

	}

	function loadTextureImage ( texture, url ) {

		var loader = new THREE.ImageLoader();

		loader.load( url, function ( image ) {

			texture.image = image;
			texture.needsUpdate = true;

		} );

	}

	function extractDoubleSided( obj, element ) {

		obj.doubleSided = false;

		var node = element.querySelectorAll('extra double_sided')[0];

		if ( node ) {

			if ( node && parseInt( node.textContent, 10 ) === 1 ) {

				obj.doubleSided = true;

			}

		}

	}

	// Up axis conversion

	function setUpConversion() {

		if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

			upConversion = null;

		} else {

			switch ( colladaUp ) {

				case 'X':

					upConversion = options.upAxis === 'Y' ? 'XtoY' : 'XtoZ';
					break;

				case 'Y':

					upConversion = options.upAxis === 'X' ? 'YtoX' : 'YtoZ';
					break;

				case 'Z':

					upConversion = options.upAxis === 'X' ? 'ZtoX' : 'ZtoY';
					break;

			}

		}

	}

	function fixCoords( data, sign ) {

		if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

			return;

		}

		switch ( upConversion ) {

			case 'XtoY':

				var tmp = data[ 0 ];
				data[ 0 ] = sign * data[ 1 ];
				data[ 1 ] = tmp;
				break;

			case 'XtoZ':

				var tmp = data[ 2 ];
				data[ 2 ] = data[ 1 ];
				data[ 1 ] = data[ 0 ];
				data[ 0 ] = tmp;
				break;

			case 'YtoX':

				var tmp = data[ 0 ];
				data[ 0 ] = data[ 1 ];
				data[ 1 ] = sign * tmp;
				break;

			case 'YtoZ':

				var tmp = data[ 1 ];
				data[ 1 ] = sign * data[ 2 ];
				data[ 2 ] = tmp;
				break;

			case 'ZtoX':

				var tmp = data[ 0 ];
				data[ 0 ] = data[ 1 ];
				data[ 1 ] = data[ 2 ];
				data[ 2 ] = tmp;
				break;

			case 'ZtoY':

				var tmp = data[ 1 ];
				data[ 1 ] = data[ 2 ];
				data[ 2 ] = sign * tmp;
				break;

		}

	}

	function getConvertedTranslation( axis, data ) {

		if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

			return data;

		}

		switch ( axis ) {
			case 'X':
				data = upConversion === 'XtoY' ? data * -1 : data;
				break;
			case 'Y':
				data = upConversion === 'YtoZ' || upConversion === 'YtoX' ? data * -1 : data;
				break;
			case 'Z':
				data = upConversion === 'ZtoY' ? data * -1 : data ;
				break;
			default:
				break;
		}

		return data;
	}

	function getConvertedVec3( data, offset ) {

		var arr = [ data[ offset ], data[ offset + 1 ], data[ offset + 2 ] ];
		fixCoords( arr, -1 );
		return new THREE.Vector3( arr[ 0 ], arr[ 1 ], arr[ 2 ] );

	}

	function getConvertedMat4( data ) {

		if ( options.convertUpAxis ) {

			// First fix rotation and scale

			// Columns first
			var arr = [ data[ 0 ], data[ 4 ], data[ 8 ] ];
			fixCoords( arr, -1 );
			data[ 0 ] = arr[ 0 ];
			data[ 4 ] = arr[ 1 ];
			data[ 8 ] = arr[ 2 ];
			arr = [ data[ 1 ], data[ 5 ], data[ 9 ] ];
			fixCoords( arr, -1 );
			data[ 1 ] = arr[ 0 ];
			data[ 5 ] = arr[ 1 ];
			data[ 9 ] = arr[ 2 ];
			arr = [ data[ 2 ], data[ 6 ], data[ 10 ] ];
			fixCoords( arr, -1 );
			data[ 2 ] = arr[ 0 ];
			data[ 6 ] = arr[ 1 ];
			data[ 10 ] = arr[ 2 ];
			// Rows second
			arr = [ data[ 0 ], data[ 1 ], data[ 2 ] ];
			fixCoords( arr, -1 );
			data[ 0 ] = arr[ 0 ];
			data[ 1 ] = arr[ 1 ];
			data[ 2 ] = arr[ 2 ];
			arr = [ data[ 4 ], data[ 5 ], data[ 6 ] ];
			fixCoords( arr, -1 );
			data[ 4 ] = arr[ 0 ];
			data[ 5 ] = arr[ 1 ];
			data[ 6 ] = arr[ 2 ];
			arr = [ data[ 8 ], data[ 9 ], data[ 10 ] ];
			fixCoords( arr, -1 );
			data[ 8 ] = arr[ 0 ];
			data[ 9 ] = arr[ 1 ];
			data[ 10 ] = arr[ 2 ];

			// Now fix translation
			arr = [ data[ 3 ], data[ 7 ], data[ 11 ] ];
			fixCoords( arr, -1 );
			data[ 3 ] = arr[ 0 ];
			data[ 7 ] = arr[ 1 ];
			data[ 11 ] = arr[ 2 ];

		}

		return new THREE.Matrix4().set(
			data[0], data[1], data[2], data[3],
			data[4], data[5], data[6], data[7],
			data[8], data[9], data[10], data[11],
			data[12], data[13], data[14], data[15]
			);

	}

	function getConvertedIndex( index ) {

		if ( index > -1 && index < 3 ) {

			var members = [ 'X', 'Y', 'Z' ],
				indices = { X: 0, Y: 1, Z: 2 };

			index = getConvertedMember( members[ index ] );
			index = indices[ index ];

		}

		return index;

	}

	function getConvertedMember( member ) {

		if ( options.convertUpAxis ) {

			switch ( member ) {

				case 'X':

					switch ( upConversion ) {

						case 'XtoY':
						case 'XtoZ':
						case 'YtoX':

							member = 'Y';
							break;

						case 'ZtoX':

							member = 'Z';
							break;

					}

					break;

				case 'Y':

					switch ( upConversion ) {

						case 'XtoY':
						case 'YtoX':
						case 'ZtoX':

							member = 'X';
							break;

						case 'XtoZ':
						case 'YtoZ':
						case 'ZtoY':

							member = 'Z';
							break;

					}

					break;

				case 'Z':

					switch ( upConversion ) {

						case 'XtoZ':

							member = 'X';
							break;

						case 'YtoZ':
						case 'ZtoX':
						case 'ZtoY':

							member = 'Y';
							break;

					}

					break;

			}

		}

		return member;

	}

	return {

		load: load,
		parse: parse,
		setPreferredShading: setPreferredShading,
		applySkin: applySkin,
		geometries : geometries,
		options: options

	};

};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

VG.AssetsLoader = function (assetPath) {

    var context = this;

    this.assetPath = assetPath || this.assetPath;

    this.loaders = {
        'file': new THREE.FileLoader(),
        'json': new THREE.JSONLoader()
    };

    this.loaderMap = {
        'obj': this.objLoad,
        'dae': this.daeLoad,
        'json': this.jsonLoad,
        'png': this.imageLoad,
        'jpg': this.imageLoad,
        'jpeg': this.imageLoad
    };

    this.loadPack = function (url, onStart, onProgress, onSuccess) {
        this.onStart = onStart || this.onStart;
        this.onProgress = onProgress || this.onProgress;
        this.onSuccess = onSuccess || this.onSuccess;

        this.onStart();

        var fileLoader = this.loaders['file'];
        fileLoader.load(url, function (data) { context.parsePack(data) });
    };


    this.parsePack = function (data) {
        data = JSON.parse(data);

        this.loadedData = data;

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
                    context.assetsUrlMap[name] = data.assets[a];

                    this.loaderMap[extension](this, url, name, extension);
                }
            }
        }
    }
    VG.EventDispatcher.bind('AssetsLoader.getAsset', this, this.getAsset);
}

VG.AssetsLoader.prototype = {
    constructor: VG.AssetsLoader,

    assetPath: '/',

    assets: {},
    assetsUrlMap: {},

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

        var path = context.assetPath + path;

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(path);
        mtlLoader.load(name + '.mtl', function (materials) {

            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(path);
            objLoader.load(name + '.obj', function (object) {

                context.assets[name] = object;
                context.checkComplete();

            });

        });
    },
    daeLoad: function (context, path, name) {

        var path = context.assetPath + path;

        var loader = new THREE.ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load(path + name + '.dae', function (collada) {

            var object = collada;
            context.assets[name] = object;
            context.checkComplete();

        });
    },
    jsonLoad: function (context, path, name) {

        var path = context.assetPath + path;

        var loader = context.loaders.json;
        loader.load(path + name + '.json', function (geometry, materials) {

            var mesh = null;

            if (geometry.animations) {
                for (var i = materials.length - 1; i >= 0; i--) {
                    materials[i].morphTargets = true;
                }
                mesh = new VG.Meshes.MorphBlendMesh(geometry, materials);
            } else {
                mesh = new THREE.Mesh(geometry, materials);
            }

            context.assets[name] = mesh;
            context.checkComplete();

        });
    },
    imageLoad: function (context, path, name, extension) {

        var path = context.assetPath + path + name + '.' + extension;

        var image = new Image();
        image.src = path;
        image.onload = function () {
            context.assets[name] = this;
            context.checkComplete();
        }
    },
    checkComplete: function () {

        this.loadedCount++;

        if (this.loadCount <= this.loadedCount) {
            for (var asset in this.assets) {
                this.assets[asset].assetUrl = this.assetsUrlMap[asset];
            }
            this.loadedData.assets = this.assets;
            this.onProgress(this.loadedCount / this.loadCount)
            this.onSuccess(this.loadedData);
            this.loadedCount = 0;
            return
        }

        this.onProgress(this.loadedCount / this.loadCount)

    },
    getAsset: function (name) {
    	if (this.assets[name])
    		return this.assets[name];
    }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

VG.KeyboardEventsHandler = function(domElement) {

    var container = domElement;

    var lastKey = null;
    var timeout = null;

    container.addEventListener('keydown',
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            VG.EventDispatcher.send('keyboard.keydown.' + event.key, event);

            return false;
        }, false);

    container.addEventListener("keyup",
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            if (lastKey && lastKey == event.keyCode) {
                clearTimeout(timeout);
                lastKey = null;
                VG.EventDispatcher.send('keyboard.doublekey.' + event.key, event);
                

            } else {
                lastKey = event.keyCode;
                timeout = setTimeout(function() {
                    lastKey = null;
                }, 600);
            };

            VG.EventDispatcher.send('keyboard.keyup.' + event.key, event);
            return false;
        }, false);

    container.addEventListener("keypress",
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();
            VG.EventDispatcher.send('keyboard.keypress.' + event.key, event);
        }, false);

};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

VG.MouseEventsHandler = function(domElement) {

    var context = this;

    var container = domElement;

    this.mouseCaptured = false;
    this.mouseMoved = false;
    this.lastMouseX = null;
    this.lastMouseY = null;

    function getPointerCoord(event, prevX, prevY) {
        var coord = [0, 0, 0, 0];

        var cx = event.clientX;
        var cy = event.clientY;
        if (event.changedTouches) {
            cx = event.changedTouches[0].clientX;
            cy = event.changedTouches[0].clientY;
        }

        var clientRect = container.getBoundingClientRect();
        coord[0] = cx - clientRect.left;
        coord[1] = cy - clientRect.top;
        coord[2] = coord[0] - prevX;
        coord[3] = coord[1] - prevY;

        return coord;
    }

    function onSelectorUp(event) {
        if (VG.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);

        VG.EventDispatcher.send('mouse.up', { event: event, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1] })

        if (context.mouseCaptured && !context.mouseMoved)
            VG.EventDispatcher.send('mouse.click', {event: event, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1] })

        context.mouseMoved = false;
        context.mouseCaptured = false;
    }

    function onSelectorDown(event) {
        if (VG.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        context.mouseCaptured = true;
        context.mouseMoved = false;

        VG.EventDispatcher.send('mouse.down', { button: event.button, x: pt[0], y: pt[1], event: event  });
    }

    function onSelectorMove(event) {
        if (VG.MOBILE_CLIENT)
            event.stopPropagation();

        event.preventDefault();

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        var sendEvent = false;
        if (VG.MOBILE_CLIENT)
            sendEvent = (Math.sqrt(pt[2] * pt[2] + pt[3] * pt[3]) >= 0);
        else
            sendEvent = (pt[2] || pt[3]);

        if (!context.mouseMoved && sendEvent)
            context.mouseMoved = true;

        if (sendEvent) {
            if (context.mouseCaptured)
                VG.EventDispatcher.send('mouse.view', {view: true, x: pt[2], y: pt[3], event: event });

            VG.EventDispatcher.send('mouse.move', {move: true, x: pt[0], y: pt[1], event: event  });
        }
    }

    function onSelectorScroll(event) {

        var e = event || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        e.preventDefault();
        VG.EventDispatcher.send('mouse.scroll', Math.sign(delta));

    }

    if (VG.MOBILE_CLIENT) {

        container.addEventListener("touchstart", onSelectorDown, false);
        container.addEventListener("touchmove", onSelectorMove, false);
        container.addEventListener("touchcancel", onSelectorUp, false);
        container.addEventListener("touchend", onSelectorUp, false);

    } else {

        container.addEventListener('mousedown', onSelectorDown, false);
        container.addEventListener('mouseup', onSelectorUp, false);
        container.addEventListener('mousemove', onSelectorMove, false);

        if ('onwheel' in document) {
            container.addEventListener("wheel", onSelectorScroll, false);
        } else if ('onmousewheel' in document) {
            container.addEventListener("mousewheel", onSelectorScroll, false);
        } else {
            container.addEventListener("MozMousePixelScroll", onSelectorScroll, false);
        }
    }

    container.addEventListener('contextmenu',
        function(event) {
            event.preventDefault();
        }, false);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

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



/***/ }),
/* 21 */
/***/ (function(module, exports) {

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

    this.deactivate = function() {

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

/***/ }),
/* 22 */
/***/ (function(module, exports) {

VG.SceneController = function () {

    VG.SceneEntity.call(this, name);

    this.scenes = {};
    this.view = new THREE.Object3D();
    this.activeScene = null;
    VG.EventDispatcher.bind('SceneController.activateScene', this, this.activateScene);
};

VG.SceneController.prototype = Object.create(VG.SceneEntity.prototype);
VG.SceneController.constructor = VG.SceneController;

VG.SceneController.prototype.add = function (scene) {
    if (scene instanceof VG.Scene) {
        if (this.scenes[scene.name]) {
            console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
            return;
        }

        this.scenes[scene.name] = scene;
    } else {
        console.log('Error: Object is not instanceof VG.GameScene');
    }
};

VG.SceneController.prototype.remove = function (scene) {
    if (scene instanceof VG.Scene) {
        if (this.scenes[scene.name]) {
            console.log('Error: Scene with name >>>' + scene.name + '<<< alreade exist');
            return;
        }

        this.scenes[scene.name] = scene;
    } else {
        console.log('Error: Object is not instanceof VG.GameScene');
    }
};
VG.SceneController.prototype.activateScene = function (name, data) {

    if (name instanceof VG.Scene)
        name = name.name

    if (!this.scenes[name]) {
        console.log('Error: Scene with name >>>' + name + '<<< is not exist');
        return;
    }

    if (this.activeScene && this.activeScene.name == name)
        return

    if (this.activeScene) {

        this.activeScene.deactivate();
        
        VG.SceneEntity.prototype.remove.call(this, this.activeScene.view);
        
        if (this.activeScene.ui)
            this.activeScene.ui.hide();
    }

    this.activeScene = this.scenes[name];

    VG.SceneEntity.prototype.add.call(this, this.activeScene.view);

    this.activeScene.activate(data);

    if (this.activeScene.ui)
        this.activeScene.ui.show();

};

VG.SceneController.prototype.update = function (dt) {
    if (this.activeScene && this.activeScene.update && this.activeScene.autoUpdate)
        this.activeScene.update(dt)
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

VG.Scene = function (data) {
	VG.SceneEntity.call(this);

	this.name = 'default';
	this.matrixAutoUpdate = false;

	this.ui = null;

}

VG.Scene.prototype = Object.create(VG.SceneEntity.prototype);
VG.Scene.constructor = VG.Scene;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

VG.LevelMatrix2D = function (sizeX, sizeY, array) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.length = this.sizeX * this.sizeY;
	this.matrix = new Uint16Array(array || this.length);

}

VG.LevelMatrix2D.prototype = {
	constructor: VG.LevelMatrix2D,

	cellExist: function (x, y){
		if (x < 0 || y < 0 || x > this.sizeX - 1 || y > this.sizeY - 1)
			return false
		return true
	},

	getCell: function (x, y) {

		if (!this.cellExist(x, y))
			return

		var index = x * this.sizeX + y;
		return this.matrix[index];
	},

	setCell: function (x, y, value) {
		
		if (!this.cellExist(x, y))
			return

		var index = x * this.sizeX + y;
		this.matrix[index] = value;
	},
}



/***/ }),
/* 25 */
/***/ (function(module, exports) {

VG.LevelMatrix3D = function (sizeX, sizeY, sizeZ, array) {

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.sizeZ = sizeZ;
	this.length = this.sizeX * this.sizeY * this.sizeZ;
	this.matrix = new Uint16Array(array || this.length);

}

VG.LevelMatrix3D.prototype = {
	constructor: VG.LevelMatrix3D,

	cellExist: function (x, y, z){
		if (x < 0 || y < 0 || z < 0 || x > this.sizeX - 1 || y > this.sizeY - 1 || z > this.sizeZ - 1 )
			return false
		return true
	},

	getCell: function (x, y, z) {
		if (!this.cellExist(x, y, z))
			return

		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		return this.matrix[index];
	},

	setCell: function (x, y, z, value) {
		if (!this.cellExist(x, y, z))
			return
		
		var index = x * this.matrix.length / this.sizeX + y * (this.matrix.length / this.sizeX / this.sizeY) + z;
		this.matrix[index] = value;
	},
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

VG.UI.BaseUIObject = function () {

}

VG.UI.BaseUIObject.prototype = {
    constructor: VG.UI.BaseUIObject,

    add: function (object) {
        if (object instanceof VG.UI.BaseUIObject)
            this.view.appendChild(object.view)
        else
            this.view.appendChild(object)
    },

    remove: function (object) {
        if (object instanceof VG.UI.BaseUIObject)
            this.view.removeChild(object.view)
        else
            this.view.removeChild(object)
    },

    hide: function () {
        this.view.style.display = 'none';
    },

    show: function () {
        this.view.style.display = 'block';

    },

    update: function () {
        return
    },
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

VG.UI.TextElement = function (text, cssfont, csscolor) {

	VG.UI.BaseUIObject.call(this);

    this.view = document.createElement('span');
    this.view.style.position = 'absolute';
    this.view.style.left = '0px';
    this.view.style.bottom = '0px';
    this.view.style.userSelect = 'none';
    this.view.style.font = cssfont;
    this.view.innerText = text;
    this.view.style.color = csscolor || 'black';

    this.position = {x: 0, y: 0};

};

VG.UI.TextElement.prototype = Object.create(VG.UI.BaseUIObject.prototype);
VG.UI.TextElement.constructor = VG.UI.TextElement;

Object.defineProperty (VG.UI.TextElement.prototype, 'value', {

    get: function () {
        return this.view.innerText;
    },

    set: function (value) {
        this.view.innerText = value;
    }
})

Object.defineProperty (VG.UI.TextElement.prototype, 'position', {

    get: function () {
        return this._position;
    },

    set: function (value) {
        this._position = value
        this.view.style.left = typeof value.x == "string" ? 
        	'calc(' + value.x + ' - ' + parseFloat(this.view.clientWidth) / 2 + 'px)' : value.x + 'px';
        this.view.style.bottom = typeof value.y == "string" ? 
        	'calc(' + value.y + ' - ' + parseFloat(this.view.clientHeight) / 2 + 'px)' : value.y + 'px';
    },
})

VG.UI.TextElement.prototype.clone = function (){

	var clone = new VG.UI.TextElement.constructor();
	clone.position = this.position;
	clone.view = this.view.cloneNode();

	return clone;
} 

/***/ }),
/* 28 */
/***/ (function(module, exports) {

VG.UI.Container = function(container) {

	VG.UI.BaseUIObject.call(this);

    if (container) {
        if (typeof container == 'string') {
            this.view = document.getElementById(container);
            if (!this.view) {
                this.view = document.createElement('div');
                this.view.id = container;
                document.body.appendChild(this.view)
            }
        } else {
            this.view = container;
        }
    } else {
        this.view = document.createElement('div');
        document.body.appendChild(this.view)
    }
};

VG.UI.Container.prototype = Object.create(VG.UI.BaseUIObject.prototype);
VG.UI.Container.constructor = VG.UI.Container;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

VG.UI.Panel = function (image) {

	VG.UI.BaseUIObject.call(this);

    this.view = document.createElement('div');
    this.view.style.position = 'absolute';
    this.view.style.left = '0px';
    this.view.style.bottom = '0px';
    this.view.style.userSelect = 'none';

    if (!image)
        return

    this.image = image.cloneNode();
    this.image.style.position = 'relative';
    this.image.style.display = 'inline-block';
    this.image.style.width = '100%';
    this.image.style.height = '100%';
    this.add(this.image);

    this.scale = 1;
    this.position = {x: 0, y: 0};

};

VG.UI.Panel.prototype = Object.create(VG.UI.BaseUIObject.prototype);
VG.UI.Panel.constructor = VG.UI.Panel;

Object.defineProperty (VG.UI.Panel.prototype, 'scale', {

    get: function () {
        return this._scale;
    },

    set: function (value) {
        this._scale = value;
        this.view.style.width = (this.image.naturalWidth * this.scale) + 'px';
        this.view.style.height = (this.image.naturalHeight * this.scale) + 'px';
    },
})

Object.defineProperty (VG.UI.Panel.prototype, 'position', {

    get: function () {
        return this._position;
    },

    set: function (value) {
        this._position = value
        this.view.style.left = typeof value.x == "string" ? 
        	'calc(' + value.x + ' - ' + parseFloat(this.view.style.width) / 2 + 'px)' : value.x + 'px';
        this.view.style.bottom = typeof value.y == "string" ? 
        	'calc(' + value.y + ' - ' + parseFloat(this.view.style.height) / 2 + 'px)' : value.y + 'px';
    },
})

VG.UI.Panel.prototype.clone = function (){
	var clone = new VG.UI.Panel.constructor(this.image);
	clone.position = this.position;
	clone.scale = this.scale;

	return clone;
} 

/***/ }),
/* 30 */
/***/ (function(module, exports) {

VG.UI.Button = function (normal, active, action) {
    VG.UI.Panel.call(this, normal);

    var context = this;

    this.activeImg = active ? active.cloneNode() : null;
    if (this.activeImg) {
        this.add(this.activeImg);
        this.activeImg.style.display = 'none';
        this.activeImg.style.position = 'relative';
        this.activeImg.style.width = '100%';
        this.activeImg.style.height = '100%';
    }

    this.action = action || function () {};

    this.view.addEventListener('mousedown', function (e) { context.mousedown(e) }, false);
    this.view.addEventListener('mouseup', function (e) { context.mouseup(e) }, false);
    this.view.addEventListener('mouseout', function (e) { context.normal(e) }, false);
}

VG.UI.Button.prototype = Object.create(VG.UI.Panel.prototype);
VG.UI.Button.constructor = VG.UI.Button;

VG.UI.Button.prototype.normal = function () {
    if (!this.activeImg)
        return

    this.activeImg.style.display = 'none';
    this.image.style.display = 'inline-block'
}

VG.UI.Button.prototype.mousedown = function () {
    if (!this.activeImg)
        return

    this.activeImg.style.display = 'inline-block';
    this.image.style.display = 'none'
}

VG.UI.Button.prototype.mouseup = function () {
	this.normal();
	this.action();
}

/***/ })
/******/ ]);
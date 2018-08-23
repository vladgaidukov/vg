import { SceneEntity } from './SceneEntity.js';
import { EventDispatcher } from './EventDispatcher.js';
import {
    CAMERA_FOV,
    CAMERA_NEAR,
    CAMERA_FAR,
    CAMERA_POSITION,
    ANTIALIAS,
    CLEAR_COLOR,
    DETAIL,
} from './settings.js';

function Engine (container) {
    SceneEntity.call(this, name);

    var self = this;

    this.domelement = document.getElementById(container);

    this.view = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(CAMERA_FOV || 45, this.domelement.clientWidth / this.domelement.clientHeight, CAMERA_NEAR, CAMERA_FAR);
    this.camera.position.copy(CAMERA_POSITION);
    this.view.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
        antialias: ANTIALIAS || false
    });
    this.renderer.setClearColor(CLEAR_COLOR);
    this.renderer.setSize(this.domelement.clientWidth, this.domelement.clientHeight);
    this.domelement.append(this.renderer.domElement);

    var composer = new THREE.EffectComposer( this.renderer );

    composer.addPass(new THREE.RenderPass(this.view, this.camera));

    var pass = new THREE.BloomBlendPass(2, 1, new THREE.Vector2(this.domelement.clientWidth, this.domelement.clientHeight));
    pass.renderToScreen = true;
    composer.addPass(pass);

    var clock = new THREE.Clock();

    this.renderer.setPixelRatio(window.devicePixelRatio * DETAIL);

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

    EventDispatcher.bind('Engine.get.camera', this, function () { return this.camera });
    EventDispatcher.bind('Engine.get.renderer', this, function () { return this.renderer });
    EventDispatcher.bind('Engine.add', this, this.add);
    EventDispatcher.bind('Engine.remove', this, this.remove);
    EventDispatcher.bind('Engine.resize', this, this.resize);
};

Engine.prototype = Object.create(SceneEntity.prototype);
Engine.constructor = Engine;

Engine.prototype.resize = function () {
    this.camera.aspect = this.domelement.clientWidth / this.domelement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.domelement.clientWidth, this.domelement.clientHeight);
}

export { Engine };
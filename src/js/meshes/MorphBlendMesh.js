VG.Meshes.MorphBlendMesh = function (geometry, material) {

    THREE.Mesh.call(this, geometry, material);

    this.fps = 10;
    this.direction = 1;

}

VG.Meshes.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
VG.Meshes.MorphBlendMesh.prototype.constructor = VG.Meshes.MorphBlendMesh;

VG.Meshes.MorphBlendMesh.prototype.playAnimation = function (label) {

    var animation = this.geometry.animations[label];

    if (animation) {

        this.setFrameRange(animation.start, animation.end);
        this.duration = 1000 * ((animation.end - animation.start) / this.fps);
        this.time = 0;

    } else {

        console.warn('animation[' + label + '] undefined');

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
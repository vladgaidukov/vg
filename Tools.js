VG.Tools = {
    createAnimatedMesh: function (geometry, material, fps){
        material.morphTargets = true;
        var mesh = new THREE.MorphBlendMesh(geometry, material);
        mesh.autoCreateAnimations(fps || 60);
        return mesh;
    }
};
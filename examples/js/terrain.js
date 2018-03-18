var Scene6 = function () {
    VG.Scene.call(this);
    this.name = 'basic6';

    var context = this;

    this.init = function (data) {

        var light = new THREE.PointLight();
        light.position.set(10, 20, 10)
        this.add(light);

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        directionalLight.position.set( 0, 200, 0 )
        this.add( directionalLight );

        var maxHeight = 200;
        var minHeight = -100;
        var blendVal = maxHeight - minHeight;

        var th = new THREE.Texture(data.assets["heightmap"]);
        var t1 = new THREE.Texture(data.assets["IMGP5487_seamless"]);
        t1.repeat.set( 5, 5 );
        var t2 = new THREE.Texture(data.assets["tilable-IMG_0044-dark"]);
        t2.repeat.set( 5, 5 );

        var t3 = new THREE.Texture(data.assets["rock01"]);
        t3.repeat.set( 5, 5 );
        var t4 = new THREE.Texture(data.assets["rock02"]);
        t4.repeat.set( 20, 20 );
        var material = VG.Meshes.Terrain.generateBlendedMaterial([
            {texture: t1},
            {texture: t2, levels: [blendVal * 0.05, blendVal * 0.3, blendVal * 0.7, blendVal]},
            {texture: t3, glsl: 'slope > 0.7853981633974483 ? 0.2 : 1.0 - smoothstep(0.47123889803846897, 0.7853981633974483, slope) + 0.2'},
            {texture: t4, glsl: '1.0 - smoothstep(' + VG.Meshes.Terrain.glslifyNumber(blendVal * 0.3)  + ' + smoothstep(-256.0, 256.0, vPosition.x) * 10.0, ' + VG.Meshes.Terrain.glslifyNumber(blendVal * 0.7) + ', vPosition.z)'},
        ]);

        var xS = 128, yS = 128;
        terrainScene = VG.Meshes.Terrain({
            easing: VG.Meshes.Terrain.Linear,
            heightmap: data.assets["heightmap"],
            material: material,
            maxHeight: maxHeight,
            minHeight: 0,
            steps: 1,
            useBufferGeometry: false,
            xSegments: xS,
            xSize: 2048,
            ySegments: yS,
            ySize: 2048,
        });
        this.add(terrainScene);


        
    }
};
Scene6.prototype = Object.create(VG.Scene.prototype);
Scene6.constructor = Scene6;
import {EventDispatcher} from "./EventDispatcher.js";
import {AnimatedMeshMorph} from "./meshes/AnimatedMeshMorph.js";

function AssetsLoader(assetPath) {

    var context = this;

    this.assetPath = assetPath || this.assetPath;

    this.loaders = {
        "file": new THREE.FileLoader(),
        "json": new THREE.JSONLoader()
    };

    this.loaderMap = {
        "obj": this.objLoad,
        "dae": this.daeLoad,
        "json": this.jsonLoad,
        "png": this.imageLoad,
        "jpg": this.imageLoad,
        "jpeg": this.imageLoad
    };

    this.loadPack = function(url, onStart, onProgress, onSuccess) {
        this.onStart = onStart || this.onStart;
        this.onProgress = onProgress || this.onProgress;
        this.onSuccess = onSuccess || this.onSuccess;

        this.onStart();

        var fileLoader = this.loaders["file"];
        fileLoader.load(url, function(data) { context.parsePack(data); });
    };

    this.parsePack = function(data) {
        data = JSON.parse(data);

        this.loadedData = data;

        for (var key in data) {
            if (key == "assets") {
                this.loadCount = data.assets.length;

                for (var a = 0; a < this.loadCount; a++) {
                    var nametmp = data.assets[a].split(".");

                    var extension = nametmp.pop();

                    nametmp = nametmp[0].split("/");

                    var name = nametmp.pop();
                    var url = nametmp.join("/") + "/";

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
    };
    EventDispatcher.bind("AssetsLoader.getAsset", this, this.getAsset);
}

AssetsLoader.prototype = {
    constructor: AssetsLoader,

    assetPath: "/",

    assets: {},
    assetsUrlMap: {},

    loadedData: {},

    loadCount: 0,

    loadedCount: 0,

    onStart: function() {
        console.log("AE.LevelLoader -> onStart");
    },

    onProgress: function(progress) {
        console.log(progress);
    },

    onSuccess: function() {
        console.log("AE.LevelLoader -> onSuccess");
    },

    objLoad: function(context, path, name) {

        var path = context.assetPath + path;

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(path);
        mtlLoader.load(name + ".mtl", function(materials) {

            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(path);
            objLoader.load(name + ".obj", function(object) {

                context.assets[name] = object;
                context.checkComplete();

            });

        });
    },
    daeLoad: function(context, path, name) {

        var path = context.assetPath + path;

        var loader = new THREE.ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load(path + name + ".dae", function(collada) {

            var object = collada;
            context.assets[name] = object;
            context.checkComplete();

        });
    },
    jsonLoad: function(context, path, name) {

        var path = context.assetPath + path;

        var loader = context.loaders.json;
        loader.load(path + name + ".json", function(geometry, materials) {

            var mesh = null;

            if (geometry.animations) {
                for (var i = materials.length - 1; i >= 0; i--) {
                    materials[i].morphTargets = true;
                }
                mesh = new AnimatedMeshMorph(geometry, materials);
            }
            else {
                mesh = new THREE.Mesh(geometry, materials);
            }

            context.assets[name] = mesh;
            context.checkComplete();

        });
    },
    imageLoad: function(context, path, name, extension) {

        var path = context.assetPath + path + name + "." + extension;

        var image = new Image();
        image.src = path;
        image.onload = function() {
            context.assets[name] = this;
            context.checkComplete();
        };
    },
    checkComplete: function() {

        this.loadedCount++;

        if (this.loadCount <= this.loadedCount) {
            for (var asset in this.assets) {
                this.assets[asset].assetUrl = this.assetsUrlMap[asset];
            }
            this.loadedData.assets = this.assets;
            this.onProgress(this.loadedCount / this.loadCount);
            this.onSuccess(this.loadedData);
            this.loadedCount = 0;
            return;
        }

        this.onProgress(this.loadedCount / this.loadCount);

    },
    getAsset: function(name) {
    	if (this.assets[name]) return this.assets[name];
    }
};

export {AssetsLoader};

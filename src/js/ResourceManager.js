VG.ResourceManager = function(assetPath) {

	var context = this;

    var loadCount = 0;
    var loadedCount = 0;

    var resources = {};

    this.get = function (name){
    	if (resources[name])
    		return resources[name];
    }

    this.preload = function (url, onStart, onProgress, onSuccess){
        this.onStart = onStart || this.onStart;
        this.onProgress = onProgress || this.onProgress;
        this.onSuccess = onSuccess || this.onSuccess;

        this.onStart();

        var fileLoader = new THREE.FileLoader();
        fileLoader.load(url, this.parse);
    };

    this.checkComplete = function (){

    	if (loadCount <= loadedCount){
    		context.onSuccess(resources)
    		return
    	}
        loadedCount++

    	context.onProgress(loadedCount/loadCount)

    };

    this.loadObj = function(path, name) {
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(path);
        mtlLoader.load(name + '.mtl', function(materials) {

            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(path);
            objLoader.load(name + '.obj', function(object) {
                
                resources[name] = object;
                context.checkComplete();

            });

        });
    }


    this.parse = function(data) {
        data = JSON.parse(data);

        for (var key in data.resources) {
            loadCount += data.resources[key].length - 1;

            if (key == 'obj') {
                var objs = data.resources[key];

                for (var i = 0; i < objs.length; i++)
                    context.loadObj('/assets/', objs[i])
            }
        }
    }
}

AE.LevelLoader.prototype = {
    constructor: AE.LevelLoader,

    onStart: function () {
        console.log('AE.LevelLoader -> onStart')   
    },

    onProgress: function(progress){
        console.log(progress)   
    },

    onSuccess: function (){
        console.log('AE.LevelLoader -> onSuccess')   
    } 
}
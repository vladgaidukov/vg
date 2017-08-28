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
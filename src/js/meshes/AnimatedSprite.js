function AnimatedSprite(image, tilesHoriz, tilesVert, tileDispDuration, infinite = false) {

    this.texture = new THREE.Texture(image);
    this.texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial({map: this.texture});

    this.tilesHorizontal = tilesHoriz;
    this.tilesVertical = tilesVert;

    this.numberOfTiles = tilesHoriz * tilesVert;
    this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical);

    this.view = new THREE.Sprite(spriteMaterial);

    this.scale = 1;

    this.tileDisplayDuration = tileDispDuration;

    this.currentDisplayTime = 0;

    this.currentTile = 0;
}

AnimatedSprite.prototype = {

    constructor: AnimatedSprite,

    currentTile: 0,

    currentDisplayTime: 0,

    onComplete: function() {

    },

    update: function(dt) {

        this.currentDisplayTime += dt;

        if (this.currentDisplayTime > this.tileDisplayDuration) {
            //this.currentDisplayTime -= this.tileDisplayDuration;
            this.currentDisplayTime = 0;

            this.currentTile++;
            if (this.currentTile == this.numberOfTiles) {
                if (this.infinite) {
                    this.currentTile = 0;
                }
                else {
                    this.onComplete();
                }
            }

            var currentColumn = this.currentTile % this.tilesHorizontal;

            this.texture.offset.x = currentColumn / this.tilesHorizontal;
            var currentRow = this.tilesVertical - Math.floor(this.currentTile / this.tilesHorizontal);

            this.texture.offset.y = currentRow / this.tilesVertical;
        }
    },

    get position() {

        return this.view.position;

    },
    set position(val) {

        this.view.position.copy(val);

    },

    get scale() {

        return this.scale;

    },
    set scale(val) {

        var x = (this.texture.image.width / this.tilesHorizontal) / 100;
        var y = (this.texture.image.height / this.tilesVertical) / 100;

        this.view.scale.set(x * val, y * val, 1);
    }
};

export {AnimatedSprite};

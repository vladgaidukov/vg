import { BaseUIObject } from './BaseUIObject.js';

function Panel (image) {

	BaseUIObject.call(this);

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

Panel.prototype = Object.create(BaseUIObject.prototype);
Panel.constructor = Panel;

Object.defineProperty (Panel.prototype, 'scale', {

    get: function () {
        return this._scale;
    },

    set: function (value) {
        this._scale = value;
        this.view.style.width = (this.image.naturalWidth * this.scale) + 'px';
        this.view.style.height = (this.image.naturalHeight * this.scale) + 'px';
    },
});

Object.defineProperty (Panel.prototype, 'position', {

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
});

Panel.prototype.clone = function (){
	var clone = new Panel.constructor(this.image);
	clone.position = this.position;
	clone.scale = this.scale;

	return clone;
};

export { Panel };
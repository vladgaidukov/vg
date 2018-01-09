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
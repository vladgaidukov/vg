import { BaseUIObject } from './BaseUIObject.js';

function TextElement (text, cssfont, csscolor) {

	BaseUIObject.call(this);

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

TextElement.prototype = Object.create(BaseUIObject.prototype);
TextElement.constructor = TextElement;

Object.defineProperty (TextElement.prototype, 'value', {

    get: function () {
        return this.view.innerText;
    },

    set: function (value) {
        this.view.innerText = value;
    }
});

Object.defineProperty (TextElement.prototype, 'position', {

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
});

TextElement.prototype.clone = function (){

	var clone = new TextElement.constructor();
	clone.position = this.position;
	clone.view = this.view.cloneNode();

	return clone;
};

export { TextElement };
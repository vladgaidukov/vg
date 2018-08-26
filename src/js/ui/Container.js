import {BaseUIObject} from "./BaseUIObject.js";

function Container(container) {

    BaseUIObject.call(this);

    this.inited = false;

    if (container) {
        if (typeof container == "string") {
            this.view = document.getElementById(container);
            if (!this.view) {
                this.view = document.createElement("div");
                this.view.id = container;
            }
        }
        else {
            this.view = container;
        }
    }
    else {
        this.view = document.createElement("div");
    }
}

Container.prototype = Object.create(BaseUIObject.prototype);
Container.constructor = Container;

Container.prototype.init = function(data) {

    this.inited = true;

};

Container.prototype.show = function(data) {

    if (!this.inited) this.init(data);

    BaseUIObject.prototype.show.apply(this, arguments);

};

export {Container};


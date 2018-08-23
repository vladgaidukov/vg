function BaseUIObject () {

};

BaseUIObject.prototype = {
    constructor: BaseUIObject,

    add: function (object) {
        if (object instanceof BaseUIObject)
            this.view.appendChild(object.view)
        else
            this.view.appendChild(object)
    },

    remove: function (object) {
        if (object instanceof BaseUIObject)
            this.view.removeChild(object.view)
        else
            this.view.removeChild(object)
    },

    hide: function () {
        this.view.style.display = 'none';
    },

    show: function () {
        this.view.style.display = 'block';

    },

    update: function () {
        return
    },

    clear: function () {
        while (this.view.firstChild) {
            this.view.removeChild(this.view.firstChild);
        };
    }
};

export { BaseUIObject };
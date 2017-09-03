VG.BaseUIObject = function(container) {
    this.active = true;

    if (container) {
        if (typeof container == 'string') {
            this.view = document.getElementById(container);
            if (!this.view) {
                this.view = document.createElement('div');
                this.view.id = container;
            }
        } else {
            this.view = container;
        }
    }

    this.displayStyle = 'block';
}

VG.BaseUIObject.prototype = {
    constructor: VG.BaseUIObject,

    add: function(object) {
        if (object instanceof VG.BaseUIObject)
            this.view.appendChild(object.view)
        else
            this.view.appendChild(object)
    },

    remove: function(object) {
        if (object instanceof VG.BaseUIObject)
            this.view.removeChild(object.view)
        else
            this.view.removeChild(object)
    },

    hide: function() {
        if (this.view.style.display != 'none')
            this.displayStyle = this.view.style.display;
        this.view.style.display = 'none';
    },

    show: function() {
        this.view.style.display = this.displayStyle;

    },

    update: function() {
        return
    }
}
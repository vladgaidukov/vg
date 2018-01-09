VG.UI.BaseUIObject = function () {

}

VG.UI.BaseUIObject.prototype = {
    constructor: VG.UI.BaseUIObject,

    add: function (object) {
        if (object instanceof VG.UI.BaseUIObject)
            this.view.appendChild(object.view)
        else
            this.view.appendChild(object)
    },

    remove: function (object) {
        if (object instanceof VG.UI.BaseUIObject)
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
}
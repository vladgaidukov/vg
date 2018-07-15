VG.UI.Container = function(container) {

	VG.UI.BaseUIObject.call(this);

    this.inited = false;

    if (container) {
        if (typeof container == 'string') {
            this.view = document.getElementById(container);
            if (!this.view) {
                this.view = document.createElement('div');
                this.view.id = container;
                document.body.appendChild(this.view)
            }
        } else {
            this.view = container;
        }
    } else {
        this.view = document.createElement('div');
        document.body.appendChild(this.view)
    }
};

VG.UI.Container.prototype = Object.create(VG.UI.BaseUIObject.prototype);
VG.UI.Container.constructor = VG.UI.Container;

VG.UI.Container.prototype.init = function(data) {

    this.inited = true;

};

VG.UI.Container.prototype.show = function(data) {

    if (!this.inited)
        this.init(data);

    VG.UI.BaseUIObject.prototype.show.apply(this, arguments);

};


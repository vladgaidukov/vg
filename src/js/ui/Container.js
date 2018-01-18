VG.UI.Container = function(container) {

	VG.UI.BaseUIObject.call(this);

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
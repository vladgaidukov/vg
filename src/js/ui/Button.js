VG.UI.Button = function (normal, active, action) {
    VG.UI.Panel.call(this, normal);

    var context = this;

    this.activeImg = active ? active.cloneNode() : null;
    if (this.activeImg) {
        this.add(this.activeImg);
        this.activeImg.style.display = 'none';
        this.activeImg.style.position = 'relative';
        this.activeImg.style.width = '100%';
        this.activeImg.style.height = '100%';
    }

    this.action = action || function () {};

    this.view.addEventListener('mousedown', function (e) { context.mousedown(e) }, false);
    this.view.addEventListener('mouseup', function (e) { context.mouseup(e) }, false);
    this.view.addEventListener('mouseout', function (e) { context.normal(e) }, false);
}

VG.UI.Button.prototype = Object.create(VG.UI.Panel.prototype);
VG.UI.Button.constructor = VG.UI.Button;

VG.UI.Button.prototype.normal = function () {
    if (!this.activeImg)
        return

    this.activeImg.style.display = 'none';
    this.image.style.display = 'inline-block'
}

VG.UI.Button.prototype.mousedown = function () {
    if (!this.activeImg)
        return

    this.activeImg.style.display = 'inline-block';
    this.image.style.display = 'none'
}

VG.UI.Button.prototype.mouseup = function () {
	this.normal();
	this.action();
}
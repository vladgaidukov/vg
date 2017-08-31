VG.MouseEventsHandler = function(domElement) {

    var context = this;

    var container = domElement;

    this.mouseCaptured = false;
    this.mouseMoved = false;
    this.lastMouseX = null;
    this.lastMouseY = null;

    function getPointerCoord(event, prevX, prevY) {
        var coord = [0, 0, 0, 0];

        var cx = event.clientX;
        var cy = event.clientY;
        if (event.changedTouches) {
            cx = event.changedTouches[0].clientX;
            cy = event.changedTouches[0].clientY;
        }

        var clientRect = container.getBoundingClientRect();
        coord[0] = cx - clientRect.left;
        coord[1] = cy - clientRect.top;
        coord[2] = coord[0] - prevX;
        coord[3] = coord[1] - prevY;

        return coord;
    }

    function onSelectorUp(event) {
        if (VG.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);

        VG.EventDispatcher.send('mouse.up', { touches: VG.MOBILE_CLIENT ? event.touches.length : -1, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1] })

        if (context.mouseCaptured && !context.mouseMoved)
            VG.EventDispatcher.send('mouse.click', {touches: VG.MOBILE_CLIENT ? event.touches.length : -1, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1] })

        context.mouseMoved = false;
        context.mouseCaptured = false;
    }

    function onSelectorDown(event) {
        if (VG.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        context.mouseCaptured = true;
        context.mouseMoved = false;

        VG.EventDispatcher.send('mouse.down', { button: event.button, x: pt[0], y: pt[1], touches: VG.MOBILE_CLIENT ? event.touches.length : -1  });
    }

    function onSelectorMove(event) {
        if (VG.MOBILE_CLIENT)
            event.stopPropagation();

        event.preventDefault();

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        var sendEvent = false;
        if (VG.MOBILE_CLIENT)
            sendEvent = (Math.sqrt(pt[2] * pt[2] + pt[3] * pt[3]) >= 0);
        else
            sendEvent = (pt[2] || pt[3]);

        if (!context.mouseMoved && sendEvent)
            context.mouseMoved = true;

        if (sendEvent) {
            if (context.mouseCaptured)
                VG.EventDispatcher.send('mouse.view', {view: true, x: pt[2], y: pt[3], touches: VG.MOBILE_CLIENT ? event.touches.length : -1 });

            VG.EventDispatcher.send('mouse.move', {move: true, x: pt[0], y: pt[1], touches: VG.MOBILE_CLIENT ? event.touches.length : -1  });
        }
    }

    function onSelectorScroll(event) {

        var e = event || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        e.preventDefault();
        VG.EventDispatcher.send('mouse.scroll', Math.sign(delta));

    }

    if (VG.MOBILE_CLIENT) {

        container.addEventListener("touchstart", onSelectorDown, false);
        container.addEventListener("touchmove", onSelectorMove, false);
        container.addEventListener("touchcancel", onSelectorUp, false);
        container.addEventListener("touchend", onSelectorUp, false);

    } else {

        container.addEventListener('mousedown', onSelectorDown, false);
        container.addEventListener('mouseup', onSelectorUp, false);
        container.addEventListener('mousemove', onSelectorMove, false);

        if ('onwheel' in document) {
            document.body.addEventListener("wheel", onSelectorScroll, false);
        } else if ('onmousewheel' in document) {
            document.body.addEventListener("mousewheel", onSelectorScroll, false);
        } else {
            document.body.addEventListener("MozMousePixelScroll", onSelectorScroll, false);
        }
    }

    container.addEventListener('contextmenu',
        function(event) {
            event.preventDefault();
        }, false);
};
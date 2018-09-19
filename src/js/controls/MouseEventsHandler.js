import {EventDispatcher} from "../EventDispatcher.js";
import {SETTINGS} from "../settings.js";

function MouseEventsHandler(domElement) {

    var context = this;

    var container = domElement;

    this.mouseCaptured = false;
    this.mouseMoved = false;
    this.lastMouseX = null;
    this.lastMouseY = null;

    this.mousePosition = new THREE.Vector2();

    function updateMouseScreenPosition(pointerCoords) {

        context.mousePosition.x = ((pointerCoords[0] / container.clientWidth) * 2 - 1);
        context.mousePosition.y = (-(pointerCoords[1] / container.clientHeight) * 2 + 1);

    }

    function getPointerCoord(event, prevX, prevY) {
        var coord = [ 0, 0, 0, 0 ];

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
        if (SETTINGS.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);

        EventDispatcher.send("mouse.up", {event: event, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1]});

        if (context.mouseCaptured && !context.mouseMoved) EventDispatcher.send("mouse.click", {event: event, button: event.changedTouches ? 0 : event.button, x: pt[0], y: pt[1]});

        context.mouseMoved = false;
        context.mouseCaptured = false;
    }

    function onSelectorDown(event) {
        if (SETTINGS.MOBILE_CLIENT) {
            event.preventDefault();
            event.stopPropagation();
        }

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        context.mouseCaptured = true;
        context.mouseMoved = false;

        EventDispatcher.send("mouse.down", {button: event.button, x: pt[0], y: pt[1], event: event});
    }

    function onSelectorMove(event) {
        if (SETTINGS.MOBILE_CLIENT) event.stopPropagation();

        event.preventDefault();

        var pt = getPointerCoord(event, context.lastMouseX, context.lastMouseY);
        context.lastMouseX = pt[0];
        context.lastMouseY = pt[1];

        var sendEvent = false;
        if (SETTINGS.MOBILE_CLIENT) sendEvent = (Math.sqrt(pt[2] * pt[2] + pt[3] * pt[3]) >= 0);
        else sendEvent = (pt[2] || pt[3]);

        if (!context.mouseMoved && sendEvent) context.mouseMoved = true;

        updateMouseScreenPosition(pt);

        if (sendEvent) {
            if (context.mouseCaptured) EventDispatcher.send("mouse.view", {view: true, x: pt[2], y: pt[3], event: event});

            EventDispatcher.send("mouse.move", {
                move: true,
                x: pt[0],
                y: pt[1],
                sx: context.mousePosition.x,
                sy: context.mousePosition.y,
                event: event
            });
        }
    }

    function onSelectorScroll(event) {

        var e = event || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        e.preventDefault();
        EventDispatcher.send("mouse.scroll", Math.sign(delta));

    }

    if (SETTINGS.MOBILE_CLIENT) {

        container.addEventListener("touchstart", onSelectorDown, false);
        container.addEventListener("touchmove", onSelectorMove, false);
        container.addEventListener("touchcancel", onSelectorUp, false);
        container.addEventListener("touchend", onSelectorUp, false);

    }
    else {

        container.addEventListener("mousedown", onSelectorDown, false);
        container.addEventListener("mouseup", onSelectorUp, false);
        container.addEventListener("mousemove", onSelectorMove, false);

        if ("onwheel" in document) {
            container.addEventListener("wheel", onSelectorScroll, false);
        }
        else if ("onmousewheel" in document) {
            container.addEventListener("mousewheel", onSelectorScroll, false);
        }
        else {
            container.addEventListener("MozMousePixelScroll", onSelectorScroll, false);
        }
    }

    container.addEventListener("contextmenu",
        function(event) {
            event.preventDefault();
        }, false);
}

export {MouseEventsHandler};

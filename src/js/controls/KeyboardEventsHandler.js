import {EventDispatcher} from "../EventDispatcher.js";

function KeyboardEventsHandler(domElement) {

    var container = domElement;

    var lastKey = null;
    var timeout = null;

    container.addEventListener("keydown",
        function(event) {

            EventDispatcher.send("keyboard.keydown." + event.code, event);

            return false;
        }, false);

    container.addEventListener("keyup",
        function(event) {

            if (lastKey && lastKey == event.keyCode) {
                clearTimeout(timeout);
                lastKey = null;
                EventDispatcher.send("keyboard.doublekey." + event.code, event);

            }
            else {
                lastKey = event.keyCode;
                timeout = setTimeout(function() {
                    lastKey = null;
                }, 600);
            }

            EventDispatcher.send("keyboard.keyup." + event.code, event);
            return false;
        }, false);

    container.addEventListener("keypress",
        function(event) {
            EventDispatcher.send("keyboard.keypress." + event.code, event);
        }, false);

}

export {KeyboardEventsHandler};

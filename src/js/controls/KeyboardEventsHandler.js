import { EventDispatcher } from '../EventDispatcher.js';

function KeyboardEventsHandler (domElement) {

    var container = domElement;

    var lastKey = null;
    var timeout = null;

    container.addEventListener('keydown',
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            EventDispatcher.send('keyboard.keydown.' + event.key, event);

            return false;
        }, false);

    container.addEventListener("keyup",
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            if (lastKey && lastKey == event.keyCode) {
                clearTimeout(timeout);
                lastKey = null;
                EventDispatcher.send('keyboard.doublekey.' + event.key, event);
                

            } else {
                lastKey = event.keyCode;
                timeout = setTimeout(function() {
                    lastKey = null;
                }, 600);
            };

            EventDispatcher.send('keyboard.keyup.' + event.key, event);
            return false;
        }, false);

    container.addEventListener("keypress",
        function(event) {

            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();
            EventDispatcher.send('keyboard.keypress.' + event.key, event);
        }, false);

};

export { KeyboardEventsHandler };
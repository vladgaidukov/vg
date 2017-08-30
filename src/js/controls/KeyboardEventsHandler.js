VG.KeyboardEventsHandler = function(domElement) {

    var container = domElement;

    var lastKey = null;
    var timeout = null;

    container.addEventListener('keydown',
        function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            VG.EventDispatcher.send('keyboard.keydown.' + event.key, event);

            return false;
        }, false);

    container.addEventListener("keyup",
        function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();

            if (lastKey && lastKey == event.keyCode) {
                clearTimeout(timeout);
                lastKey = null;
                VG.EventDispatcher.send('keyboard.doublekey.' + event.key, event);
                

            } else {
                lastKey = event.keyCode;
                timeout = setTimeout(function() {
                    lastKey = null;
                }, 600);
            };

            VG.EventDispatcher.send('keyboard.keyup.' + event.key, event);
            return false;
        }, false);

    container.addEventListener("keypress",
        function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!event.key)
                event.key = String.fromCharCode(event.keyCode).toLowerCase();
            VG.EventDispatcher.send('keyboard.keypress.' + event.key, event);
        }, false);

};
VG.KeyboardEventsHandler = function (owner, container, onKeyDown, onKeyUp, onKeyPress, onDoubleKey) {
    this.owner = owner;
    this.container = container;

    let lastKey = null;
    let timeout = null;

    if (onKeyDown) {
        container.addEventListener('keydown',
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!event.key)
                    event.key = String.fromCharCode (event.keyCode).toLowerCase ();
                onKeyDown(event.keyCode, event.key);
                return false;
            }, false);

        if (onKeyUp) {
            container.addEventListener("keyup",
                function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!event.key)
                        event.key = String.fromCharCode (event.keyCode).toLowerCase ();

                    if (lastKey && lastKey == event.keyCode) {
                        clearTimeout(timeout);
                        lastKey = null;

                        if (onDoubleKey){
                            onDoubleKey(event.keyCode, event.key);
                        }

                    } else {
                        lastKey = event.keyCode;
                        timeout = setTimeout(function(){
                            lastKey = null;
                        },600);
                    };

                    onKeyUp(event.keyCode, event.key);
                    return false;
                }, false);
        }
    }

    if (onKeyPress) {
        container.addEventListener("keypress",
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!event.key)
                    event.key = String.fromCharCode (event.keyCode).toLowerCase ();
                onKeyPress(event.keyCode, event.key);
            }, false);
    }

    this.setFocus();
};

VG.KeyboardEventsHandler.prototype = {
    constructor: VG.KeyboardEventsHandler,

    setFocus: function () {
        this.container.setAttribute("tabindex", 0);
    }
};


VG.KeyboardListener = function (container) {
    var context = this;

    this.keymap = {};
    this.evtdsp = VG.EventDispatcher;

    var keybHandler = new VG.KeyboardEventsHandler(this, container,
        function (code, char) {
            context.keymap[char] = true;
            context.keymap[code] = true;

            context.evtdsp.send('keyboard.key.' + char, {
                key: char,
                pressed: true
            });
            context.evtdsp.send('keyboard.key.' + code, {
                key: code,
                pressed: true
            });
        },
        function (code, char) {
            context.keymap[char] = false;
            context.keymap[code] = false;

            context.evtdsp.send('keyboard.key.' + char, {
                key: char,
                pressed: false
            });
            context.evtdsp.send('keyboard.key.' + code, {
                key: code,
                pressed: false
            });
        },
        null,
        function(code, char){
            context.evtdsp.send('keyboard.doubleKey.' + char, {
                key: char,
            });
            context.evtdsp.send('keyboard.doubleKey.' + code, {
                key: code,
            });
        });
};

VG.KeyboardListener.KeyCode =
{
    Shift: 16,
    Ctrl: 17,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    Up: 38,
    R: 82,
    Down: 40,
    Left: 37,
    Right: 39,
    Q: 81,
    E: 69,
    F: 70,
    Z: 90,
    X: 88,
    C: 67,
    H: 72,
    B: 66,
    O: 79,
    G: 71,
    Space: 32,
    One: 49,
    Two: 50,
    Three: 51
};

VG.KeyboardListener.prototype = {
    constructor: VG.KeyboardListener,

    isKeyPressed: function (char) {
        return this.keymap[char];
    },

    isKeyCodePressed: function (code) {
        return this.keymap[code];
    },

    bindKey: function (char, callback) {
        this.evtdsp.bind('keyboard.key.' + char, this, callback);
    },

    unbindKey: function (char, callback) {
        this.evtdsp.unbind('keyboard.key.' + char, callback);
    },

    bindKeyCode: function (code, callback) {
        this.evtdsp.bind('keyboard.key.' + code, this, callback);
    },

    unbindKeyCode: function (code, callback) {
        this.evtdsp.unbind('keyboard.key.' + code, callback);
    },

    bindDoubleKey: function (char, callback) {
        this.evtdsp.bind('keyboard.doubleKey.' + char, this, callback);
    },

    unbindDoubleKey: function (char, callback) {
        this.evtdsp.unbind('keyboard.doubleKey.' + char, callback);
    },

    emitKey: function (key, state) {
        this.evtdsp.send('keyboard.key.' + key, {
            key: key,
            pressed: state
        });
    }
};

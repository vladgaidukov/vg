VG.EventDispatcher = {
    listeners: {},
    listenersArgs: {},

    bind: function (type, listener, callback, args) {
        if (typeof (type) !== "string") {
            console.error("EventDispatcher.bind -> 'type' should be string constant");
            return;
        }

        if (listener === null || listener === undefined) {
            console.error("EventDispatcher.bind -> 'listener' should exist");
            return;
        }

        if (typeof listener !== "object") {
            console.error("EventDispatcher.bind -> 'listener' should be object");
            return;
        }

        if (typeof callback !== "function") {
            console.error("EventDispatcher.bind -> 'callback' should be function");
            return;
        }

        if (this.listeners[type] == undefined)
            this.listeners[type] = [];
        if (this.listenersArgs[type] == undefined)
            this.listenersArgs[type] = [];

        var listeners = this.listeners[type];
        var listenersArgs = this.listenersArgs[type];

        var index = this.getListenerIndex(listeners, listener);

        if (index < 0) {
            listeners.push({
                object: listener,
                func: callback
            });
            listenersArgs.push(args || {});
        }
    },

    unbind: function (type, callback) {
        if (typeof (type) !== "string") {
            console.error("EventDispatcher.unbind -> 'type' should be string constant");
            return;
        }

        if (callback === null || callback === undefined) {
            console.error("EventDispatcher.removeEventListener -> 'listener' should exist");
            return;
        }

        if ((typeof callback !== "function") && ((typeof callback.method !== "string") || (typeof callback.context !== "object"))) {
            console.error("EventDispatcher.unbind -> 'callback' has not supported type");
            return;
        }

        if (this.listeners[type] == undefined)
            this.listeners[type] = [];

        var listeners = this.listeners[type];
        var listenersArgs = this.listenersArgs[type];

        var index = this.getListenerIndex(listeners, callback);

        if (index >= 0) {
            listeners.splice(index, 1);
            listenersArgs.splice(index, 1);
        }
    },

    send: function (eventName, eventArgs) {
        if (typeof (eventName) !== "string") {
            console.error("EventDispatcher.send -> 'event.type' should be string constant");
            return;
        }

        if (this.listeners[eventName] == undefined)
            return;

        var listeners = this.listeners[eventName];
        var listenersArgs = this.listenersArgs[eventName];
        for (var i = 0; i < listeners.length; i++) {
            try {
                var listener = listeners[i];
                listener.func.call(listener.object, eventArgs, listenersArgs[i]);
            } catch (err) {
                console.error("EventDispatcher.send -> " + eventName + " Exception thrown in event handler -> " + err);
            }
        }
    },
    
    query: function (eventName, eventArgs) {
        if (typeof (eventName) !== "string") {
            console.error("EventDispatcher.send -> 'event.type' should be string constant");
            return;
        }
        
        if (this.listeners[eventName] == undefined)
            return undefined;
        
        var listeners = this.listeners[eventName];
        if (listeners > 1)
        {
            console.error ("EventDispatcher.query -> Can't send query to multiply objects");
            return undefined;
        }
        
        var listenersArgs = this.listenersArgs [eventName];
        var listener = listeners[0];
        var result = undefined;
        
        try {
            result = listener.func.call (listener.object, eventArgs, listenersArgs[0]);
        } catch (err) {
            console.error ("EventDispatcher.query -> " + eventName + " Exception thrown in event handler -> " + err);
        }
        
        return result;
    },

    release: function () {
        for (var event_name in this.listeners) {
            this.listeners[event_name].splice();
            this.listenersArgs[event_name].splice();
            delete this.listeners[event_name];
            delete this.listenersArgs[event_name];
        }
        this.listeners = null;
        this.listenersArgs = null;
    },

    toString: function () {
        return "[HB.EventDispatcher]";
    },
    
    getListenerIndex: function (listeners, callback) {
        for (var i = 0; i < listeners.length; i++) {
            var obj = listeners[i];
            if (typeof obj.func === "function" && (callback === obj.func))
                return i;
            else if ((obj.func.method !== null) && (obj.func.method !== undefined) &&
                     (obj.func.context !== null) && (obj.func.context !== undefined) &&
                     (callback.method === obj.func.method) && (callback.context === obj.func.context))
                return i;
        }
        
        return -1;
    }

};

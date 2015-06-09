define([], function() {
    'use strict';

    var logLevels = {};

    /**
     * Dictionary of possible logging destinations.
     * May be extended if existing appenders don't satisfy developer's needs.
     * @type {{console: Function, alert: Function, window: Function, webEndpoint: Function}}
     */
    var destinations = {
        "console" : {
            action : function (msg) {
                console.log(msg);
            },
            isBuiltIn : true
        },
        "alert" : {
            action : function (msg) {
                alert(msg);
            },
            isBuiltIn : true
        },
        "window" : {
            action : function (msg) {
                if (window) {
                    return window.document.write(msg);
                } else {
                    return console.log('No window object present.');
                }
            },
            isBuiltIn : true
        },
        "webEndpoint" : {
            action : function (msg, url) {
                http.open("POST",url,true);
                http.send();
            },
            isBuiltIn : true
        }
    };

    /**
     * Logger class logs messages to screen, window or console if proper level is set
     * @param level logs messages with this or less priority
     * @param dest destination to log messages to
     * @returns undefined
     * @constructor
     */
    var Logger = function (level, dest) {

        if (!logLevels[level]) {
            throw new Error("The log level " + level + " is undefined");
        }
        /**
         * Logging level. Initial options: [fine, debug, info, error]. Default: fine
         * @type {*|string}
         */
        this.level = level || "fine";
        /**
         * Logging destination. Initial options: [console, alert, document]. Default: console
         * @type {*|console|{topic, when replaceConsole called, when turned off}|fakeConsole}
         */
        this.dest = dest || "console";
    };

    /**
     * Log message using destination provided.
     * @param msg message to log
     * @param dest one of possible built-in destinations (custom user-specified may be added).
     * @returns {*}
     */
    function logMessage (msg, dest) {
        var gotDestination = destinations[dest];//
        if (gotDestination) {
            //console.log("Logging with action: " + action.toString());
            return gotDestination.action(msg);
        } else {
            return console.log ("Logging method for destination " + dest + " is not defined");
        }
    }

    function addNewLogLevel (logLevelName, logLevelValue, isBuiltIn) {
        if (logLevels[logLevelName] && logLevels[logLevelName].isBuiltIn) {
            throw new Error("Can't override built in log levels");
        }

        logLevels[logLevelName] = {
            isBuiltIn : (isBuiltIn) ? isBuiltIn : false,
            value : logLevelValue
        };

        Logger.prototype[logLevelName] = function (msg) {
            var shouldLog = logLevels[logLevelName].value <= logLevels[this.level].value;
            if (shouldLog) {
                logMessage(msg, this.dest);
            }
        }
    }

    function addLogLevel (logLevelName, logLevelValue) {
        addNewLogLevel(logLevelName, logLevelValue);
    }

    Logger.setLogDestination = function (dest) {
        if (destinations[dest]) {
            this.dest = dest;
        } else {
            throw new Error ("The destination " + dest + " is undefined");
        }
    };

    function addEvent (event) {
        window[event] = function(err) {
            logMessage(err, this.dest);
        };
    }

    addNewLogLevel("fine", 30, true);
    addNewLogLevel("debug", 20, true);
    addNewLogLevel("info", 10, true);
    addNewLogLevel("error", 0, true);

    addEvent("onerror");

    function addLogDestination(name, action) {
        if (destinations[name] && destinations[name].isBuiltIn) {
            throw new Error ("Can't override built-in destination " + name);
        } else {
            destinations[name] = {
                action : action,
                isBuiltIn : false
            }
        }
    }

    return {
        Logger : Logger,
        addLogLevel : addLogLevel,
        addLogDestination : addLogDestination,
        addEvent : addEvent
    }
});

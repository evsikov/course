define(['logger'], function (logger) {
    'use strict';

    describe("test logger", function() {

        it("when level is 'debug' all except fine should be visible", function() {
            var loggerInstance = new logger.Logger("debug", "console");
            loggerInstance.error("I'm a debug message. I should be visible");
            loggerInstance.info("I'm an info message. I should be visible");
            loggerInstance.debug("I'm a debug message. I should be visible");
            loggerInstance.fine("I'm a fine message. I should NOT be visible");
        });

        it("when level is 'error' error only messages should be visible", function() {
            var loggerInstance = new logger.Logger("error", "console");
            loggerInstance.error("I'm a debug message. I should be visible");
            loggerInstance.info("I'm an info message. I should NOT be visible");
            loggerInstance.debug("I'm a debug message. I should NOT be visible");
            loggerInstance.fine("I'm a fine message. I should NOT be visible");
        });

        it("try and log to different destinations", function() {
            new logger.Logger("debug", "alert").debug("Hi, I should be in alert window");
            new logger.Logger("debug", "window").debug("Hi, I should appear in the window");
        });

        it("when trying to override built-in log levels exception must be thrown", function() {
            /*var loggerInstance = new logger.Logger();*/
            expect(function (){
                logger.addLogLevel("fine", 30)
            }).toThrow(new Error("Can't override built in log levels"));
        });

        it("when adding new log level should be able to use it", function() {
            logger.addLogLevel("custom", 15);
            var loggerInstance = new logger.Logger("custom", "console");
        });

        it ("when trying to use non-existent log level should get exception", function() {
            expect(function (){
                new logger.Logger("nonExistent", "console")
            }).toThrow(new Error("The log level nonExistent is undefined"));
        });

        it ("when trying to override existing destination throws Error", function() {
            expect(function (){
                logger.addLogDestination("console", function(){});
            }).toThrow(new Error("Can't override built-in destination console"));
        });
    });
});
var JsCourse = {
    partialApplication : function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function () {
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
        }
    },

    adder : function() {
        var args = Array.prototype.slice.call(arguments, 0),
            sum = 0;

        for (i = 0; i < args.length; i++) {
            sum+=args[i];
        }
        return sum;
    },

    curry : function (fn, n) {
        if (typeof n !== 'number') {
            n = fn.length;
        }

        function curriedFn(argsAccumulator) {
            return function(arg) {
                var args = argsAccumulator.concat(arg);
                if (args.length < n) {
                    return curriedFn(args);
                } else {
                    return fn.apply(this, args);
                }
            }
        }

        return curriedFn([]);
    },

    linearFold : function (array, callback) {
    //todo:
    },

    linearUnfold : function (array, callback) {
        //todo:
    },

    map : function (array, callback) {
        //todo:
    },

    filter : function (array, callback) {
        //todo:
    }
};
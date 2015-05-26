var JsCourse = {
    partialApplication : function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function () {
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
        }
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

    linearFold : function (array, callback, initValue) {
        var base = initValue || 0;
        for (var i = 0; i < array.length; i++) {
            base=callback(base, array[i], i, array);
        }
        return base;
    },

    linearUnfold : function (callback, initialValue) {
        /*callback (currentState) {
         return {"state":,
         "element":};
         }*/
        var elements = [],
            state = initialValue,
            callbackResult;

        while(callbackResult = callback(state)) {
            elements.push(callbackResult.element);
            state = callbackResult.state;
        }
        return elements;
    },

    map : function (array, callback) {
        var resultArray = [];
        for (var i = 0; i<array.length; i++) {
            resultArray.push(callback(array[i]));
        }
        return resultArray;
    },

    mapF : function fn (array, callback) {
        if (array.length < 1) return [];
        return [].concat(callback(array[0])).concat(fn(array.slice(1), callback));
    },

    filter : function (array, callback) {
        var resultArray = [];
        for (var i = 0; i<array.length; i++) {
            if (callback(array[i])) {
                resultArray.push(array[i]);
            }
        }
        return resultArray;
    },

    filterF : function fn (array, callback) {
        if (array.length < 1) return [];

        return (callback(array[0])) ?
            [].concat(array[0]).concat(fn(array.slice(1), callback)) :
            [].concat(fn(array.slice(1), callback));
    },

    averageOfEven : function (array) {
        var justEven = JsCourse.filter(array, function(val) {
            return (val % 2 == 0);
        });
        var sum = JsCourse.linearFold(justEven, function(prev, curr, index, array) {
            return prev + curr;
        });
        return sum/justEven.length;
    },

    sumOfRandomNumbers : function (number) {
        var count = 0,
            maxNumbers = number || 5,
            randomNumber = function (state) {
                count+=1;
                return (count <= maxNumbers) ?
                {"element" : Math.floor(Math.random(state)*Math.random(state)*1000),
                    "state" : Math.floor(Math.random(state)*Math.random(state)*1000)} :
                    false;
            };
        return JsCourse.linearUnfold(randomNumber, 100);
    },

    first : function (array, condition) {
        return JsCourse.filter(array,condition)[0];
    },

    lazyEvaluation : function () {
        //todo:
    },

    memoization : function () {
        //todo:
    }
};
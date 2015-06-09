define ([], function () {
    'use strict';

    function partialApplication (fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return function () {
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
        };
    }

    function curry (fn, n) {
        if (typeof n !== 'number') {
            n = fn.length;
        }

        function curriedFn(argsAccumulator) {
            return function (arg) {
                var args = argsAccumulator.concat(arg);
                if (args.length < n) {
                    return curriedFn(args);
                } else {
                    return fn.apply(this, args);
                }
            };
        }

        return curriedFn([]);
    }

    function linearFold (array, callback, initValue) {
        var base = initValue || 0;
        for (var i = 0; i < array.length; i++) {
            base = callback(base, array[i], i, array);
        }
        return base;
    }

    function linearUnfold (callback, initialValue) {
        var elements = [],
            state = initialValue,
            callbackResult = callback(state);

        while (callbackResult) {
            elements.push(callbackResult.element);
            state = callbackResult.state;
            callbackResult = callback(state);
        }
        return elements;
    }

    function map (array, callback) {
        var resultArray = [];
        for (var i = 0; i < array.length; i++) {
            resultArray.push(callback(array[i]));
        }
        return resultArray;
    }

    function mapF(array, callback) {
        if (array.length < 1) return [];
        return [].concat(callback(array[0])).concat(mapF(array.slice(1), callback));
    }

    function filter(array, callback) {
        var resultArray = [];
        for (var i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                resultArray.push(array[i]);
            }
        }
        return resultArray;
    }

    function filterF (array, callback) {
        if (array.length < 1) return [];

        return (callback(array[0])) ?
            [].concat(array[0]).concat(filterF(array.slice(1), callback)) :
            [].concat(filterF(array.slice(1), callback));
    }

    function averageOfEven (array) {
        var justEven = filter(array, function (val) {
            return (val % 2 === 0);
        });
        var sum = linearFold(justEven, function (prev, curr, index, array) {
            return prev + curr;
        });
        return sum / justEven.length;
    }

    function sumOfRandomNumbers (number) {
        var count = 0,
            maxNumbers = number || 5,
            randomNumber = function (state) {
                count += 1;
                return (count <= maxNumbers) ?
                {
                    "element": Math.floor(Math.random(state) * Math.random(state) * 1000),
                    "state": Math.floor(Math.random(state) * Math.random(state) * 1000)
                } :
                    false;
            };
        return linearUnfold(randomNumber, 100);
    }

    function first (array, condition) {
        return filter(array, condition)[0];
    }

    function lazyEvaluation (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(null, args);
        };
    }

    function memoization (func) {
        var memo = {};
        var slice = Array.prototype.slice;

        return {
            memo: memo,
            fn: function () {
                var args = slice.call(arguments);
                if (args in memo) {
                    return memo[args];
                }
                else {
                    return (memo[args] = func.apply(this, args));
                }
            }
        };
    }

    return {
        partialApplication: partialApplication,
        curry: curry,
        linearFold: linearFold,
        linearUnfold: linearUnfold,
        map: map,
        mapF: mapF,
        filter: filter,
        filterF: filterF,
        averageOfEven: averageOfEven,
        sumOfRandomNumbers: sumOfRandomNumbers,
        first: first,
        lazyEvaluation: lazyEvaluation,
        memoization: memoization
    };
});
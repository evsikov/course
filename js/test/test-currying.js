describe("test currying", function() {
    'use strict';

    it("should be defined", function() {
        expect(JsCourse.curry).toBeDefined();
    });

    it("curry adder should return result", function() {
        var threeArgumentsAdder = function(x,y,z) {
            return x + y + z;
        };
        var curryAdder = JsCourse.curry(threeArgumentsAdder);
        expect(curryAdder(3)(2)(1)).toEqual(6);
    });

    it("curry multiplier should return result", function() {
        var threeArgumentsMultiplier = function(x,y,z) {
            return x * y * z;
        };
        var curryMultiplier = JsCourse.curry(threeArgumentsMultiplier);

        expect(curryMultiplier(2)(2)(2)).toEqual(8);

        var multiplyFourByX = curryMultiplier(2)(2);

        expect(multiplyFourByX(4)).toEqual(16);
    });
});
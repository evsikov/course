define (['firstclassfunc'], function (firstclassfunc) {

    describe("partial application", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.partialApplication).toBeDefined();
        });

        it("oneadder should return x + 1", function() {
            var adder = function() {
                var args = Array.prototype.slice.call(arguments, 0),
                    sum = 0;

                for (var i = 0; i < args.length; i++) {
                    sum+=args[i];
                }
                return sum;
            };

            var oneAdder = firstclassfunc.partialApplication(adder, 1);
            expect(oneAdder(0)).toEqual(1);
            expect(oneAdder(1)).toEqual(2);
            expect(oneAdder()).toEqual(1);

            var tenAdder = firstclassfunc.partialApplication(adder, 1, 2, 3, 4);
            expect(tenAdder(0)).toEqual(10);
            expect(tenAdder(10, 10, -10)).toEqual(20);
            expect(tenAdder()).toEqual(10);
        });
    });
});

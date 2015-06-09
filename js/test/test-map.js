define (['firstclassfunc'], function (firstclassfunc) {

    describe("test map", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.map).toBeDefined();
        });

        it("", function() {
            var increment = function(x) {
                return x+1;
            };
            var toStr = function(x) {
                return "" + x;
            };
            expect(firstclassfunc.map([1,2,3,4,5], increment)).toEqual([2,3,4,5,6]);
            expect(firstclassfunc.map([1,2,3,4,5], toStr)).toEqual(["1","2","3","4","5"]);
            expect(firstclassfunc.mapF([1,2,3,4,5], increment)).toEqual([2,3,4,5,6]);
            expect(firstclassfunc.mapF([1,2,3,4,5], toStr)).toEqual(["1","2","3","4","5"]);
        });
    });
});
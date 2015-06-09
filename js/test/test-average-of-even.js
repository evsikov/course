define (['firstclassfunc'], function (firstclassfunc) {
    describe("test average of even", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.averageOfEven).toBeDefined();
        });

        it("", function() {
            expect(firstclassfunc.averageOfEven([1,2,3,4,5,6,7,8])).toEqual(5);
            expect(firstclassfunc.averageOfEven([2,2,2,2,2,2,2,2])).toEqual(2);
        });
    });
});
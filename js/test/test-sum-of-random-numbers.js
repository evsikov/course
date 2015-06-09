define (['firstclassfunc'], function (firstclassfunc) {

    describe("test sum of random numbers", function () {
        'use strict';

        it("should be defined", function () {
            expect(firstclassfunc.sumOfRandomNumbers).toBeDefined();
        });

        it("", function () {
            expect(firstclassfunc.sumOfRandomNumbers(20).length).toEqual(20);
        });
    });
});

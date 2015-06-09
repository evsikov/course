define (['firstclassfunc'], function (firstclassfunc) {

    describe("test first", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.first).toBeDefined();
        });

        it("", function() {
            var condition = function(val) {
                return val < 0;
            };
            expect(firstclassfunc.first([1,2,-5,0,-3], condition)).toEqual(-5);
        });
    });
});
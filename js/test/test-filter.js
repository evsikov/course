define (['firstclassfunc'], function (firstclassfunc) {

    describe("test filter", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.filter).toBeDefined();
        });

        it("", function() {
            var positive = function (val) {
                return val > 0;
            };

            var number = function (val) {
                return (typeof val === 'number') ;
            };

            expect(firstclassfunc.filter([-3,0,4,-13,18], positive)).toEqual([4,18]);
            expect(firstclassfunc.filter([-3,"a","c",-13,18], number)).toEqual([-3,-13,18]);
            expect(firstclassfunc.filterF([-3,0,4,-13,18], positive)).toEqual([4,18]);
            expect(firstclassfunc.filterF([-3,"a","c",-13,18], number)).toEqual([-3,-13,18]);
        });
    });
});
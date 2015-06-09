define (['firstclassfunc'], function (firstclassfunc) {
    describe("test linear fold", function() {
        'use strict';

        it("should be defined", function() {
            expect(firstclassfunc.linearFold).toBeDefined();
        });

        it("", function() {
            var add = function add (prev, curr, index, array) {
                return prev + curr;
            };
            var multiply = function multiply (prev, curr, index, array) {
                return prev * curr;
            };
            expect(firstclassfunc.linearFold([1,2,3,4,5], add)).toEqual(15);
            expect(firstclassfunc.linearFold([1,2,3,4,5], add, 10)).toEqual(25);
            expect(firstclassfunc.linearFold(["S","u","p","e","r"], add, "Yeah! ")).toEqual("Yeah! Super");
            expect(firstclassfunc.linearFold([1,2,3,4,5], multiply, 1)).toEqual(120);
        });
    });
});
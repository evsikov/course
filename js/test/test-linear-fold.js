describe("test linear fold", function() {
    'use strict';

    it("should be defined", function() {
        expect(JsCourse.linearFold).toBeDefined();
    });

    it("", function() {
        var add = function add (prev, curr, index, array) {
                return prev + curr;
        };
        var multiply = function multiply (prev, curr, index, array) {
            return prev * curr;
        };
        expect(JsCourse.linearFold([1,2,3,4,5], add)).toEqual(15);
        expect(JsCourse.linearFold([1,2,3,4,5], add, 10)).toEqual(25);
        expect(JsCourse.linearFold(["S","u","p","e","r"], add, "Yeah! ")).toEqual("Yeah! Super");
        expect(JsCourse.linearFold([1,2,3,4,5], multiply, 1)).toEqual(120);
    });
});
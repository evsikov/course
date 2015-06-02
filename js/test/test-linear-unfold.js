describe("test linear unfold", function() {
    'use strict';

    it("should be defined", function() {
        expect(JsCourse.linearUnfold).toBeDefined();
    });

    it("", function() {
        var add = function add (state) {
            return (state < 5) ?
            { "state" : state+1, "element" : state+1 } :
                false;
        };
        var powersOfTwo = function add (state) {
            return (state < 32) ?
            { "state" : state*2, "element" : state*2 } :
                false;
        };
        expect(JsCourse.linearUnfold(add, 0)).toEqual([1,2,3,4,5]);
        expect(JsCourse.linearUnfold(powersOfTwo, 1)).toEqual([2,4,8,16,32]);
    });
});
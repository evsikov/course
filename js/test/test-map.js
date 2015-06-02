describe("test map", function() {
    'use strict';

    it("should be defined", function() {
        expect(JsCourse.map).toBeDefined();
    });

    it("", function() {
        var increment = function(x) {
            return x+1;
        };
        var toStr = function(x) {
          return "" + x;
        };
        expect(JsCourse.map([1,2,3,4,5], increment)).toEqual([2,3,4,5,6]);
        expect(JsCourse.map([1,2,3,4,5], toStr)).toEqual(["1","2","3","4","5"]);
        expect(JsCourse.mapF([1,2,3,4,5], increment)).toEqual([2,3,4,5,6]);
        expect(JsCourse.mapF([1,2,3,4,5], toStr)).toEqual(["1","2","3","4","5"]);
    });
});
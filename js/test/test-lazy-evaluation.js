describe("test lazy evaluation", function() {
    it("should be defined", function() {
        expect(JsCourse.lazyEvaluation).toBeDefined();
    });

    it("", function() {
        var range = function (start, end) {
            var result = [];
            for (var i = 0; i <= end; i++) {
                result[i]=i;
            }
            return result;
        };
        var lazyRangeOneToTen = JsCourse.lazyEvaluation(range, 0, 10);
        expect(lazyRangeOneToTen()).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });
});
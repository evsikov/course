describe("test average of even", function() {
    it("should be defined", function() {
        expect(JsCourse.averageOfEven).toBeDefined();
    });

    it("", function() {
        expect(JsCourse.averageOfEven([1,2,3,4,5,6,7,8])).toEqual(5);
        expect(JsCourse.averageOfEven([2,2,2,2,2,2,2,2])).toEqual(2);
    });
});
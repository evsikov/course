describe("test partial application", function() {
    describe("adder", function() {
        it("should be defined", function() {
            expect(JsCourse.adder).toBeDefined();
        });

        it("should return sum of all arguments", function() {
            expect(JsCourse.adder(1,2)).toEqual(3);
            expect(JsCourse.adder(-1,1)).toEqual(0);
            expect(JsCourse.adder(1,2,3,4,5,6)).toEqual(21);
            expect(JsCourse.adder()).toEqual(0);
        });

    });

    describe("partial application", function() {
        it("should be defined", function() {
            expect(JsCourse.partialApplication).toBeDefined();
        });

        it("oneadder should return x + 1", function() {
            var oneAdder = JsCourse.partialApplication(JsCourse.adder, 1);
            expect(oneAdder(0)).toEqual(1);
            expect(oneAdder(1)).toEqual(2);
            expect(oneAdder()).toEqual(1);
        });

        it("tenadder with 4 arguments should return x + 10", function() {
            var tenAdder = JsCourse.partialApplication(JsCourse.adder, 1, 2, 3, 4);
            expect(tenAdder(0)).toEqual(10);
            expect(tenAdder(10, 10, -10)).toEqual(20);
            expect(tenAdder()).toEqual(10);
        });
    });
});
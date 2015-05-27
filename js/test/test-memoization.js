describe("test memoization", function() {
    it("should be defined", function() {
        expect(JsCourse.memoization).toBeDefined();
    });

    it("", function() {
        function fibonacci (n) {
            if (n === 0 || n === 1){
                return n;
            } else {
                return fibonacci(n-1) + fibonacci(n-2);
            }
        }
        expect(fibonacci(10)).toEqual(55);

        var memFib = JsCourse.memoization(fibonacci);
        expect(memFib.fn(10)).toEqual(55);
        expect(memFib.memo).toEqual({ 10: 55});
    });
});
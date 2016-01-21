describe('countTo', function() {
    it("will return a string of numbers by counting from 0 to the specified number by the specified multiple", function() {
      expect(countTo(2,10)).to.equal("2, 4, 6, 8, 10")
    });
});

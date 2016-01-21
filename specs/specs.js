describe('countTo', function() {
    it("will return a string of numbers by counting from 0 to the specified number by the specified multiple", function() {
      expect(countTo(2,10)).to.equal("2, 4, 6, 8, 10")
    });
});

describe('errorMultiple', function() {
  it("will return an error message if someone doesn't enter a multiple to count by.", function() {
    expect(errorMultiple('',10)).to.equal("error, please enter a multiple")
  });
});

describe('errorNumber', function() {
  it("will return an error message if someone doesn't enter a number to count to.", function() {
    expect(errorNumber(2,'')).to.equal("error, please enter a number")
  });
});

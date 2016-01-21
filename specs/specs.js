describe('countTo', function() {
    it("will return a strung of by numbers counting from 0 to the number by the multiple", function() {
      expect(countTo(2,10)).to.equal("2, 4, 6, 8, 10")
    });
    // it("will count up to the specificed number by a specificed multiple", function() {
    //   expect(countTo(5)).to.equal(5,10,15,20,25,30);
    // });
});

// describe('countBy', function() {
//   it("will count up to the specificed number by a specificed multiple", function() {
//     expect(countBy(5)).to.equal(5,10,15,20,25,30);
//   });
// });

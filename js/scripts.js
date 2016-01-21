var countTo = function(multiple, number) {
  var current = 0;
  var result = [];
  while(current + multiple <= number){
    current += multiple;
    result.push(current);
  }
  console.log(result.join(", "));
};

// var countBy = function(multiple) {
//   for (var i=0; i<=number; i+= multiple) {
//     return number;
//   }
// };

// $(document).ready(function() {
//  $("form#counter").submit(function(event){
//    var userInput = ($('input#upto').val());
//    var userMultiple = ($('input#countby').val());
//
//    $(".countUpTo").text(number);
//
//    $("#result").show();
//    event.preventDefault();
//  });
// });

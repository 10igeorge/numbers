var countTo = function(multiple, number) {
  var current = 0;
  var result = [];

  while(current + multiple <= number){
    current += multiple;
    result.push(current);
  }
  console.log(result.join(", "));
  return result.join(", ");
};

$(document).ready(function() {
 $("form#counter").submit(function(event){
  // debugger;
   var userMultiple = parseInt($("#countBy").val());
   var userNumber = parseInt($("#upTo").val());
   var results = countTo(userMultiple, userNumber);
   if (isNaN(userMultiple) || userMultiple.length == 0){
     alert("Please enter a multiple");
   } else if (isNaN(userNumber) || userNumber.length == 0){
     alert("Please enter a number");
   } else {
      $(".countUpTo").text(results);
    }
  event.preventDefault();
 });
});

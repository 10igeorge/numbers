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

var errorMultiple = function(emptymultiple, number) {
  return "error, please enter a multiple";
};

var errorNumber = function(multiple, emptynumber) {
  return "error, please enter a number";
};


$(document).ready(function() {
 $("form#counter").submit(function(event){
  //debugger;
   var userMultiple = parseInt($("#countBy").val());
   var userNumber = parseInt($("#upTo").val());
   var results = countTo(userMultiple, userNumber);
   if (userMultiple === ""){
     alert("Please enter a multiple");
   } else
      $(".countUpTo").text(results);
  event.preventDefault();
 });
});

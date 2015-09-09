var palindrome = function(userInput) {
  var splitInput = userInput.split('');
  var reverseArray = splitInput.reverse();
  var reverseInput = reverseArray.join('');
  if (userInput === reverseInput) {
    return true;
  }
  return false;
};

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var userInput = $("input#user_input").val();
    var result = palindrome(userInput);

    $("#result").text(result);
    $("#user-input").text(userInput);
    $("#results").show();
    event.preventDefault();
  });
});

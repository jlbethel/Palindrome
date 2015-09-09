var palindrome = function(userInput) {
  var splitInput = userInput.split('');
  var reverseArray = splitInput.reverse();
  var reverseInput = reverseArray.join('');
  if (userInput === reverseInput) {
    return true;
  }
}

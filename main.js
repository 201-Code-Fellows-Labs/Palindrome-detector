let Phrase = require("nadya-palindrome");

function palindromeTester() {
    let string = prompt("Please enter a string for palindrome testing:");
    let phrase = new Phrase(string);
    let palindromeResult = document.querySelector("#palindromeResult");
  
    if (phrase.palindrome()) {
      palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
      event.preventDefault();
    } else {
      palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
      event.preventDefault();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("click", function() {
      palindromeTester();
    });
  });
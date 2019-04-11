let Phrase = require("nadya-palindrome");

function palindromeTester(event) {
    event.preventDefault();
  
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");
  
    if (phrase.palindrome()) {
      palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
     // event.preventDefault();
    } else {
      palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
    //  event.preventDefault();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function() {
      palindromeTester(event);
    });
  });

//Check if a word or number is a palindrome. (e.g. 121, "madam")
function isPalindrome(input) {
  let str = input.toString().toLowerCase();
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(`${input} is a palindrome.`);
  } else {
    console.log(`${input} is not a palindrome.`);
  }
}
isPalindrome(121);
isPalindrome("madam");
isPalindrome("hello");

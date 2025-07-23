//Count vowels in a string.
function countVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(
  countVowels(
    "My name is Barsha gc. I am currently studying in Herald college Kathmandu."
  )
);

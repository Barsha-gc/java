// Count occurrences of a character in a string.
function countChar(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("Barsha Babisha", "a"));

//  Reverse a number. (e.g: 123->321)
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseNumber(344));
console.log(reverseNumber(133));

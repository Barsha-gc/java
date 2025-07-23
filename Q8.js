// Find the second largest number in an array.
let arr = [33, 66, 32, 455, 773, 444, 324];
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => b - a);
let secondLargest = uniqueArr[1];
console.log("Second largest number:", secondLargest);
